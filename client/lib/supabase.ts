import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface User {
  id: string
  name: string
  email: string
  phone?: string
  city?: string
  niche?: string
  primary_platform?: string
  follower_count?: string
  goals?: string[]
  quiz_data?: any
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  price: number
  original_price: number
  description: string
  features: string[]
  is_enabled: boolean
  category: string
  created_at: string
  updated_at: string
}

export interface Purchase {
  id: string
  user_id: string
  product_id: string
  amount: number
  discount_amount: number
  promo_code?: string
  payment_id?: string
  payment_status: 'pending' | 'success' | 'failed' | 'refunded'
  payment_method: string
  customer_info: any
  payu_response?: any
  created_at: string
  updated_at: string
}

export interface Download {
  id: string
  purchase_id: string
  product_id: string
  download_id: string
  downloaded_at: string
  user_id: string
}

// Auth Helper Functions
export const authHelpers = {
  async signUp(email: string, password: string, userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }
}

// Database Helper Functions
export const dbHelpers = {
  // Users
  async createUser(userData: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single()
    return { data, error }
  },

  async getUser(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  async updateUser(id: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    return { data, error }
  },

  // Products
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_enabled', true)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  async getProduct(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  // Purchases
  async createPurchase(purchaseData: Partial<Purchase>) {
    const { data, error } = await supabase
      .from('purchases')
      .insert([purchaseData])
      .select()
      .single()
    return { data, error }
  },

  async updatePurchase(id: string, updates: Partial<Purchase>) {
    const { data, error } = await supabase
      .from('purchases')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    return { data, error }
  },

  async getUserPurchases(userId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select(`
        *,
        products (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    return { data, error }
  },

  async getPurchaseByPaymentId(paymentId: string) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('payment_id', paymentId)
      .single()
    return { data, error }
  },

  // Downloads
  async recordDownload(downloadData: Partial<Download>) {
    const { data, error } = await supabase
      .from('downloads')
      .insert([downloadData])
      .select()
      .single()
    return { data, error }
  },

  async getUserDownloads(userId: string) {
    const { data, error } = await supabase
      .from('downloads')
      .select('*')
      .eq('user_id', userId)
      .order('downloaded_at', { ascending: false })
    return { data, error }
  }
}
