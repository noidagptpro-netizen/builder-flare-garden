import { Handler } from "@netlify/functions";

// If you use Supabase, import client initialization here.

// Main Netlify Lambda handler
export const handler: Handler = async (event, context) => {
  const path = event.path || "";
  let response;

  if (path.endsWith("/payment/success")) {
    response = await handlePaymentSuccess(event);
  } else if (path.endsWith("/payment/failure")) {
    response = await handlePaymentFailure(event);
  } else {
    response = {
      statusCode: 404,
      body: "Not Found",
    };
  }

  return response;
};

// Handler for payment success webhook
async function handlePaymentSuccess(event: any) {
  // Parse body (PayU sends POST with form data)
  const body = parseBody(event);

  // Log for debugging
  console.log("[PayU Success] Payload:", body);

  // TODO: Verify PayU hash here
  // TODO: Save payment info to Supabase

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment success handled" }),
  };
}

// Handler for payment failure webhook
async function handlePaymentFailure(event: any) {
  const body = parseBody(event);

  // Log for debugging
  console.log("[PayU Failure] Payload:", body);

  // TODO: Save failed payment info to Supabase

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment failure handled" }),
  };
}

// Helper to parse PayU POST body (x-www-form-urlencoded)
function parseBody(event: any): Record<string, any> {
  try {
    if (!event.body) return {};
    // PayU typically sends form-encoded data
    return Object.fromEntries(
      event.body.split("&").map((pair: string) => {
        const [key, value] = pair.split("=");
        return [key, decodeURIComponent(value || "")];
      })
    );
  } catch (err) {
    console.error("Failed to parse webhook body", err);
    return {};
  }
}