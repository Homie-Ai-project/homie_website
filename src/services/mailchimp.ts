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
  // Try server-side API first (more secure)
  try {
    return await subscribeToWaitingListServer(email);
  } catch (error) {
    console.warn('Server-side subscription failed, falling back to client-side:', error);
    
    // Fall back to client-side implementation
    return await subscribeToWaitingListClient(email);
  }
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

    const data = await response.json();

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
    return {
      success: false,
      message: 'Network error. Please try again later.',
      error: 'NETWORK_ERROR',
    };
  }
};
