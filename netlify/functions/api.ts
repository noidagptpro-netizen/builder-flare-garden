exports.handler = async (event, context) => {
  const path = event.path || "";
  let response;

  if (path.endsWith("/payment/success")) {
    // Handle PayU payment success webhook
    // Parse body, verify hash, save to Supabase, return 200
    response = await handlePaymentSuccess(event);
  } else if (path.endsWith("/payment/failure")) {
    // Handle PayU payment failure webhook
    response = await handlePaymentFailure(event);
  } else {
    // Other API routes (if needed)
    response = {
      statusCode: 404,
      body: "Not Found",
    };
  }

  return response;
};

// Example handler functions (to be filled out for your logic)
async function handlePaymentSuccess(event) {
  // Parse event.body, verify, save to DB, etc.
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment success handled" }),
  };
}

async function handlePaymentFailure(event) {
  // Parse event.body, log failure, etc.
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Payment failure handled" }),
  };
}

// Basic logging middleware for debugging
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint for debugging
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handler to prevent unhandled promise rejections
app.use((err: any, req: any, res: any, next: any) => {
  console.error("API Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

export const handler = serverless(app);
