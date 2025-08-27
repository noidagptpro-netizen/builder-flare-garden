import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";
import CryptoJS from "crypto-js";

// PayU Test Credentials from environment variables
const PAYU_KEY = process.env.PAYU_KEY || "uWkEEH";
const PAYU_SALT = process.env.PAYU_SALT || "AdMkAcEHOieHcOCmUf9Z5x2lapCSV0Oo";

// Supabase Credentials from environment variables
const SUPABASE_URL = process.env.SUPABASE_URL || "https://fjtuagjmijlvsntzytlr.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqdHVhZ2ptaWpsdnNudHp5dGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTMyMDIsImV4cCI6MjA3MTg4OTIwMn0.j40OiKT5pVoUBESfIp07i5XyJu-ayrddiL8YAt8zL54";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export const handler: Handler = async (event, context) => {
  const path = event.path || "";
  let response;

  if (path.endsWith("/payment/success") || path.endsWith("/webhook/payment/success")) {
    response = await handlePaymentSuccess(event);
  } else if (path.endsWith("/payment/failure") || path.endsWith("/webhook/payment/failure")) {
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
  const payment = parseBody(event);

  // Log for debugging
  console.log("[PayU Success] Webhook Payload:", payment);

  // Verify PayU hash
  const isValid = verifyPayUResponse(payment);

  if (!isValid) {
    console.error("[PayU] Hash verification failed!", payment);
    
    // If this is a user redirect, redirect to failure page
    if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
      return {
        statusCode: 302,
        headers: {
          'Location': `/payment-failure?error=verification_failed&txnid=${payment.txnid || ''}`
        },
        body: ''
      };
    }
    
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid PayU hash" }),
    };
  }

  // Insert payment into Supabase
  try {
    const { data, error } = await supabase.from("payments").insert([
      {
        txnid: payment.txnid,
        amount: payment.amount,
        email: payment.email,
        status: "success",
        mihpayid: payment.mihpayid,
        payu_response: payment,
        created_at: new Date().toISOString(),
      },
    ]);
    
    if (error) {
      console.error("[Supabase] Insert error:", error);
      
      // If this is a user redirect, redirect to failure page
      if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
        return {
          statusCode: 302,
          headers: {
            'Location': `/payment-failure?error=database_error&txnid=${payment.txnid || ''}`
          },
          body: ''
        };
      }
      
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Database error", error }),
      };
    }
    
    // If this is a user redirect, redirect to success page with payment data
    if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
      const params = new URLSearchParams();
      Object.keys(payment).forEach(key => {
        if (payment[key]) params.append(key, payment[key]);
      });
      
      return {
        statusCode: 302,
        headers: {
          'Location': `/payment-success?${params.toString()}`
        },
        body: ''
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Payment success recorded", data }),
    };
  } catch (err) {
    console.error("[Supabase] Exception:", err);
    
    // If this is a user redirect, redirect to failure page
    if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
      return {
        statusCode: 302,
        headers: {
          'Location': `/payment-failure?error=system_error&txnid=${payment.txnid || ''}`
        },
        body: ''
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Database exception", err }),
    };
  }
}

// Handler for payment failure webhook
async function handlePaymentFailure(event: any) {
  const payment = parseBody(event);

  // Log for debugging
  console.log("[PayU Failure] Webhook Payload:", payment);

  // Insert failed payment into Supabase
  try {
    const { data, error } = await supabase.from("payments").insert([
      {
        txnid: payment.txnid,
        amount: payment.amount,
        email: payment.email,
        status: "failure",
        mihpayid: payment.mihpayid,
        payu_response: payment,
        created_at: new Date().toISOString(),
      },
    ]);
    
    if (error) {
      console.error("[Supabase] Insert error:", error);
      
      // If this is a user redirect, still redirect to failure page
      if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
        const params = new URLSearchParams();
        Object.keys(payment).forEach(key => {
          if (payment[key]) params.append(key, payment[key]);
        });
        params.append('db_error', 'true');
        
        return {
          statusCode: 302,
          headers: {
            'Location': `/payment-failure?${params.toString()}`
          },
          body: ''
        };
      }
      
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Database error", error }),
      };
    }
    
    // If this is a user redirect, redirect to failure page with payment data
    if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
      const params = new URLSearchParams();
      Object.keys(payment).forEach(key => {
        if (payment[key]) params.append(key, payment[key]);
      });
      
      return {
        statusCode: 302,
        headers: {
          'Location': `/payment-failure?${params.toString()}`
        },
        body: ''
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Payment failure recorded", data }),
    };
  } catch (err) {
    console.error("[Supabase] Exception:", err);
    
    // If this is a user redirect, still redirect to failure page
    if (event.httpMethod === 'GET' || !event.path?.includes('webhook')) {
      const params = new URLSearchParams();
      Object.keys(payment).forEach(key => {
        if (payment[key]) params.append(key, payment[key]);
      });
      params.append('system_error', 'true');
      
      return {
        statusCode: 302,
        headers: {
          'Location': `/payment-failure?${params.toString()}`
        },
        body: ''
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Database exception", err }),
    };
  }
}

// Helper to parse PayU POST body (x-www-form-urlencoded)
function parseBody(event: any): Record<string, any> {
  try {
    if (!event.body) return {};
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

// Verify PayU response hash
function verifyPayUResponse(payment: any): boolean {
  // PayU response hash verification uses SALT first in reverse order
  const hashString = [
    PAYU_SALT,
    payment.status,
    payment.udf5 || "",
    payment.udf4 || "",
    payment.udf3 || "",
    payment.udf2 || "",
    payment.udf1 || "",
    payment.email,
    payment.firstname,
    payment.productinfo,
    payment.amount,
    payment.txnid,
    PAYU_KEY,
  ].join("|");

  const expectedHash = CryptoJS.SHA512(hashString).toString();
  return expectedHash === payment.hash;
}