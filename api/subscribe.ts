import mailchimp from '@mailchimp/mailchimp_marketing';

// Server-side Mailchimp configuration
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

// Initialize Mailchimp
if (MAILCHIMP_API_KEY && MAILCHIMP_SERVER_PREFIX) {
  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ message: 'Method not allowed' }),
      { 
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ 
          message: 'Email address is required',
          error: 'MISSING_EMAIL'
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate environment variables
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      console.error('Mailchimp environment variables not set');
      return new Response(
        JSON.stringify({ 
          message: 'Server configuration error',
          error: 'CONFIGURATION_ERROR'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

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

    return new Response(
      JSON.stringify({
        message: 'Successfully subscribed to waiting list',
        success: true
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: unknown) {
    console.error('Mailchimp subscription error:', error);

    // Handle common Mailchimp errors
    const mailchimpError = error as { status?: number; response?: { body?: { title?: string } } };
    
    if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === 'Member Exists') {
      return new Response(
        JSON.stringify({
          message: 'This email is already subscribed to our waiting list.',
          error: 'ALREADY_SUBSCRIBED'
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === 'Invalid Resource') {
      return new Response(
        JSON.stringify({
          message: 'Please enter a valid email address.',
          error: 'INVALID_EMAIL'
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Something went wrong. Please try again later.',
        error: 'UNKNOWN_ERROR'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
