import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get user from token
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { 
      productId, 
      amount, 
      discountAmount = 0, 
      promoCode,
      customerInfo 
    } = await req.json()

    // Validate required fields
    if (!productId || !amount || !customerInfo) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get product details
    const { data: product, error: productError } = await supabaseClient
      .from('products')
      .select('*')
      .eq('id', productId)
      .single()

    if (productError || !product) {
      return new Response(
        JSON.stringify({ error: 'Product not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generate transaction ID
    const timestamp = Date.now().toString()
    const random = Math.random().toString(36).substring(2, 8)
    const txnid = `FAMECHASE_${timestamp}_${random}`.toUpperCase()

    // Create purchase record
    const { data: purchase, error: purchaseError } = await supabaseClient
      .from('purchases')
      .insert([{
        user_id: user.id,
        product_id: productId,
        amount: amount,
        discount_amount: discountAmount,
        promo_code: promoCode,
        payment_id: txnid,
        payment_status: 'pending',
        payment_method: 'payu',
        customer_info: customerInfo
      }])
      .select()
      .single()

    if (purchaseError) {
      console.error('Purchase creation error:', purchaseError)
      return new Response(
        JSON.stringify({ error: 'Failed to create purchase' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // PayU configuration
    const PAYU_MERCHANT_KEY = Deno.env.get('PAYU_MERCHANT_KEY') ?? 'WBtjxn'
    const PAYU_SALT = Deno.env.get('PAYU_SALT') ?? 'Ui1z2GLGDx7sUixAtCdl42'
    const APP_URL = Deno.env.get('APP_URL') ?? 'https://famechase.com'

    // Create hash for PayU
    const hashString = [
      PAYU_MERCHANT_KEY,
      txnid,
      amount,
      product.name,
      customerInfo.name,
      customerInfo.email,
      '', // udf1
      '', // udf2
      '', // udf3
      '', // udf4
      '', // udf5
      PAYU_SALT
    ].join('|')

    // Generate SHA512 hash
    const encoder = new TextEncoder()
    const data = encoder.encode(hashString)
    const hashBuffer = await crypto.subtle.digest('SHA-512', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')

    // Prepare PayU payment data
    const paymentData = {
      key: PAYU_MERCHANT_KEY,
      txnid: txnid,
      amount: amount,
      productinfo: product.name,
      firstname: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      surl: `${APP_URL}/payment-success`,
      furl: `${APP_URL}/payment-failure`,
      hash: hash,
      udf1: purchase.id, // Purchase ID for reference
      udf2: user.id,     // User ID for reference
      udf3: productId,   // Product ID for reference
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        paymentData,
        purchaseId: purchase.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error creating payment:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
