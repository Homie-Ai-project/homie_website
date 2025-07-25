import mailchimp from '@mailchimp/mailchimp_marketing';

// Mailchimp configuration
const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_LIST_ID = import.meta.env.VITE_MAILCHIMP_LIST_ID;

// Initialize Mailchimp
if (MAILCHIMP_API_KEY && MAILCHIMP_SERVER_PREFIX) {
  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
  });
}

export interface SubscriptionResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const subscribeToWaitingList = async (email: string): Promise<SubscriptionResponse> => {
  return await subscribeToWaitingListServer(email);
};

// Client-side implementation (fallback)
export const subscribeToWaitingListClient = async (email: string): Promise<SubscriptionResponse> => {
  // Validate environment variables
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
    console.warn('Mailchimp environment variables not set. Check VITE_MAILCHIMP_API_KEY, VITE_MAILCHIMP_SERVER_PREFIX, and VITE_MAILCHIMP_LIST_ID');
    
    // For development/demo purposes, simulate a successful subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Successfully subscribed to waiting list (demo mode)',
    };
  }

  try {
    // Add the subscriber to the Mailchimp list
    const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      tags: ['waiting-list', 'homie-ai-hardware'],
      merge_fields: {
        SIGNUP_DATE: new Date().toISOString(),
        SOURCE: 'website-waiting-list',
      },
    });

    return {
      success: true,
      message: 'Successfully subscribed to waiting list',
    };
  } catch (error: unknown) {
    console.error('Mailchimp subscription error:', error);

    // Handle common Mailchimp errors
    const mailchimpError = error as { status?: number; response?: { body?: { title?: string } } };
    if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === 'Member Exists') {
      return {
        success: false,
        message: 'This email is already subscribed to our waiting list.',
        error: 'ALREADY_SUBSCRIBED',
      };
    }

    if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === 'Invalid Resource') {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        error: 'INVALID_EMAIL',
      };
    }

    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
      error: 'UNKNOWN_ERROR',
    };
  }
};

// Alternative method for server-side implementation
export const subscribeToWaitingListServer = async (email: string): Promise<SubscriptionResponse> => {
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    // Check if the response is HTML (likely a 404 page or index.html)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      throw new Error('API endpoint not available - server-side functions not deployed');
    }

    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      // If JSON parsing fails, it's likely HTML content
      throw new Error('Invalid response format - expected JSON but received HTML');
    }

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again later.',
        error: data.error,
      };
    }

    return {
      success: true,
      message: data.message || 'Successfully subscribed to waiting list',
    };
  } catch (error) {
    console.error('Server subscription error:', error);
    // Re-throw the error so the main function can fall back to client-side
    throw error;
  }
};
