/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions/v1";
import {defineSecret} from "firebase-functions/params";
import * as cors from "cors";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Initialize CORS
const corsHandler = cors.default({origin: true});

// Mailchimp secrets defined via Firebase Secret Manager
const MAILCHIMP_API_KEY = defineSecret("MAILCHIMP_API_KEY");
const MAILCHIMP_SERVER_PREFIX = defineSecret("MAILCHIMP_SERVER_PREFIX");
const MAILCHIMP_LIST_ID = defineSecret("MAILCHIMP_LIST_ID");

// Mailchimp subscription function
export const subscribe = functions.runWith({
  maxInstances: 10,
  secrets: [MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID],
}).https.onRequest((request: functions.https.Request, response: functions.Response) => {
  corsHandler(request, response, async () => {
    try {
      // Resolve secret values at request time
      const apiKey = MAILCHIMP_API_KEY.value();
      const serverPrefix = MAILCHIMP_SERVER_PREFIX.value();
      const listId = MAILCHIMP_LIST_ID.value();

      // Initialize Mailchimp with resolved secrets
      if (apiKey && serverPrefix) {
        mailchimp.setConfig({
          apiKey,
          server: serverPrefix,
        });
      }

      // Only allow POST requests
      if (request.method !== "POST") {
        response.status(405).json({
          success: false,
          message: "Method not allowed",
          error: "METHOD_NOT_ALLOWED",
        });
        return;
      }

      // Get email from request body
      const {email} = request.body;

      if (!email) {
        response.status(400).json({
          success: false,
          message: "Email address is required",
          error: "MISSING_EMAIL",
        });
        return;
      }

      // Validate environment variables
      if (!apiKey || !serverPrefix || !listId) {
        functions.logger.error("Mailchimp environment variables not set");
        response.status(500).json({
          success: false,
          message: "Server configuration error",
          error: "CONFIGURATION_ERROR",
        });
        return;
      }

      // Add the subscriber to the Mailchimp list
      await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        tags: ["waiting-list", "homie-ai-hardware"],
        merge_fields: {
          SIGNUP_DATE: new Date().toISOString(),
          SOURCE: "website-waiting-list",
        },
      });

      functions.logger.info("Successfully subscribed user to Mailchimp", {email});
      response.status(200).json({
        success: true,
        message: "Successfully subscribed to waiting list",
      });

    } catch (error: unknown) {
      functions.logger.error("Mailchimp subscription error:", error);

      // Handle common Mailchimp errors
      const mailchimpError = error as { 
        status?: number; 
        response?: { body?: { title?: string } } 
      };
      
      if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === "Member Exists") {
        response.status(400).json({
          success: false,
          message: "This email is already subscribed to our waiting list.",
          error: "ALREADY_SUBSCRIBED",
        });
        return;
      }

      if (mailchimpError.status === 400 && mailchimpError.response?.body?.title === "Invalid Resource") {
        response.status(400).json({
          success: false,
          message: "Please enter a valid email address.",
          error: "INVALID_EMAIL",
        });
        return;
      }

      response.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
        error: "UNKNOWN_ERROR",
      });
    }
  });
});

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//   response.send("Hello from Firebase!");
// });
