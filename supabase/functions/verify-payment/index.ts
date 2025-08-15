import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create Supabase client (admin access for payment verification)
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // Get payment response data
    const paymentResponse = await req.json();

    // PayU configuration
    const PAYU_MERCHANT_KEY = Deno.env.get("PAYU_MERCHANT_KEY") ?? "WBtjxn";
    const PAYU_SALT = Deno.env.get("PAYU_SALT") ?? "Ui1z2GLGDx7sUixAtCdl42";

    // Verify hash
    const hashString = [
      PAYU_SALT,
      paymentResponse.status,
      paymentResponse.udf5 || "",
      paymentResponse.udf4 || "",
      paymentResponse.udf3 || "",
      paymentResponse.udf2 || "",
      paymentResponse.udf1 || "",
      paymentResponse.email,
      paymentResponse.firstname,
      paymentResponse.productinfo,
      paymentResponse.amount,
      paymentResponse.txnid,
      PAYU_MERCHANT_KEY,
    ].join("|");

    // Generate SHA512 hash for verification
    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await crypto.subtle.digest("SHA-512", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const calculatedHash = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    const isHashValid = calculatedHash === paymentResponse.hash;

    if (!isHashValid) {
      console.error("Hash verification failed");
      return new Response(
        JSON.stringify({ error: "Payment verification failed" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Get purchase record using transaction ID
    const { data: purchase, error: purchaseError } = await supabaseClient
      .from("purchases")
      .select("*")
      .eq("payment_id", paymentResponse.txnid)
      .single();

    if (purchaseError || !purchase) {
      console.error("Purchase not found:", purchaseError);
      return new Response(JSON.stringify({ error: "Purchase not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Determine payment status
    const isSuccess = paymentResponse.status === "success";
    const paymentStatus = isSuccess ? "success" : "failed";

    // Update purchase record
    const { data: updatedPurchase, error: updateError } = await supabaseClient
      .from("purchases")
      .update({
        payment_status: paymentStatus,
        payu_response: paymentResponse,
        updated_at: new Date().toISOString(),
      })
      .eq("id", purchase.id)
      .select()
      .single();

    if (updateError) {
      console.error("Failed to update purchase:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to update purchase" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // If payment successful, record download access
    if (isSuccess) {
      // Get product downloads (this would normally be stored in a separate table)
      const { data: product } = await supabaseClient
        .from("products")
        .select("*")
        .eq("id", purchase.product_id)
        .single();

      // Send success notification email (optional)
      // await sendPurchaseConfirmationEmail(purchase, product)
    }

    return new Response(
      JSON.stringify({
        success: true,
        verified: isHashValid,
        paymentStatus,
        purchase: updatedPurchase,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// Helper function to send confirmation email (placeholder)
async function sendPurchaseConfirmationEmail(purchase: any, product: any) {
  // Implementation would go here
  // Could use services like Resend, SendGrid, etc.
  console.log("Sending confirmation email for purchase:", purchase.id);
}
