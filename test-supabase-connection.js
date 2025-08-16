// Test Supabase connection
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ecdwpwodxiyelnnsxryk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHdwd29keGl5ZWxubnN4cnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NjQ2NzIsImV4cCI6MjA3MDA0MDY3Mn0.dvrYSy9miIaut030oE8TeWd64XO7lMPciZJn4ITHiZo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test 1: Get products
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id, name, price')
      .limit(3)
    
    if (productsError) {
      console.error('Products query error:', productsError)
      return false
    }
    
    console.log('✅ Products query successful:', products.length, 'products found')
    console.log('Sample products:', products.map(p => `${p.name} - ₹${p.price}`))
    
    // Test 2: Test RLS (should work for reading products)
    const { data: publicRead, error: publicError } = await supabase
      .from('products')
      .select('count')
      .limit(1)
    
    if (publicError) {
      console.error('Public read error:', publicError)
    } else {
      console.log('✅ Public read test successful')
    }
    
    console.log('🎉 Supabase connection test completed successfully!')
    return true
    
  } catch (error) {
    console.error('❌ Supabase connection failed:', error)
    return false
  }
}

testConnection()
