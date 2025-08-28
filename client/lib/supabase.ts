import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseUrl.includes("supabase.co")) {
  console.warn(
    "⚠️ Supabase URL not configured. Some features will be disabled.",
  );
  console.log("Please set VITE_SUPABASE_URL in your environment variables");
}

if (!supabaseAnonKey || supabaseAnonKey === "your-anon-key") {
  console.warn(
    "⚠️ Supabase anon key not configured. Some features will be disabled.",
  );
  console.log(
    "Please set VITE_SUPABASE_ANON_KEY in your environment variables",
  );
}

// Create client only if we have valid credentials
export const supabase =
  supabaseUrl && supabaseAnonKey && supabaseUrl.includes("supabase.co")
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabase !== null;
};

// Database Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  niche?: string;
  primary_platform?: string;
  follower_count?: string;
  goals?: string[];
  quiz_data?: any;
  role?: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number;
  description: string;
  features: string[];
  is_enabled: boolean;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface Purchase {
  id: string;
  user_id: string;
  product_id: string;
  amount: number;
  discount_amount: number;
  promo_code?: string;
  payment_id?: string;
  payment_status: "pending" | "success" | "failed" | "refunded";
  payment_method: string;
  customer_info: any;
  payu_response?: any;
  created_at: string;
  updated_at: string;
}

export interface Download {
  id: string;
  purchase_id: string;
  product_id: string;
  download_id: string;
  downloaded_at: string;
  user_id: string;
}

export interface Role {
  id: string;
  role_name: string;
  permissions: any;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  id: string;
  key: string;
  value: any;
  description?: string;
  category: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

// Auth Helper Functions
export const authHelpers = {
  async signUp(email: string, password: string, userData: any) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    return { data, error };
  },

  async signIn(email: string, password: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  async signOut() {
    if (!supabase) {
      return { error: { message: "Supabase not configured" } };
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  async getCurrentUser() {
    if (!supabase) {
      return null;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },
};

// Database Helper Functions
export const dbHelpers = {
  // Users
  async createUser(userData: Partial<User>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("users")
      .insert([userData])
      .select()
      .single();
    return { data, error };
  },

  async getUser(id: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();
    return { data, error };
  },

  async updateUser(id: string, updates: Partial<User>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("users")
      .update(updates)
      .eq("id", id)
      .select()
      .single();
    return { data, error };
  },

  // Products
  async getProducts() {
    if (!supabase) {
      // Return mock data from the products.ts file when Supabase is not configured
      const { productConfigs } = await import("./products");
      return {
        data: productConfigs.map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          original_price: p.originalPrice,
          description: p.description,
          features: p.features,
          is_enabled: p.isEnabled,
          category: p.category,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })),
        error: null,
      };
    }
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_enabled", true)
      .order("created_at", { ascending: false });
    return { data, error };
  },

  async getProduct(id: string) {
    if (!supabase) {
      const { productConfigs } = await import("./products");
      const product = productConfigs.find((p) => p.id === id);
      if (product) {
        return {
          data: {
            id: product.id,
            name: product.name,
            price: product.price,
            original_price: product.originalPrice,
            description: product.description,
            features: product.features,
            is_enabled: product.isEnabled,
            category: product.category,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          error: null,
        };
      }
      return { data: null, error: { message: "Product not found" } };
    }
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    return { data, error };
  },

  // Purchases
  async createPurchase(purchaseData: Partial<Purchase>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("purchases")
      .insert([purchaseData])
      .select()
      .single();
    return { data, error };
  },

  async updatePurchase(id: string, updates: Partial<Purchase>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("purchases")
      .update(updates)
      .eq("id", id)
      .select()
      .single();
    return { data, error };
  },

  async getUserPurchases(userId: string) {
    if (!supabase) {
      return { data: [], error: null };
    }
    const { data, error } = await supabase
      .from("purchases")
      .select(
        `
        *,
        products (*)
      `,
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    return { data, error };
  },

  async getPurchaseByPaymentId(paymentId: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("purchases")
      .select("*")
      .eq("payment_id", paymentId)
      .single();
    return { data, error };
  },

  // Downloads
  async recordDownload(downloadData: Partial<Download>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("downloads")
      .insert([downloadData])
      .select()
      .single();
    return { data, error };
  },

  async getUserDownloads(userId: string) {
    if (!supabase) {
      return { data: [], error: null };
    }
    const { data, error } = await supabase
      .from("downloads")
      .select("*")
      .eq("user_id", userId)
      .order("downloaded_at", { ascending: false });
    return { data, error };
  },

  // Roles
  async getRoles() {
    if (!supabase) {
      return { data: [], error: null };
    }
    const { data, error } = await supabase
      .from("roles")
      .select("*")
      .order("role_name", { ascending: true });
    return { data, error };
  },

  async createRole(roleData: Partial<Role>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("roles")
      .insert([roleData])
      .select()
      .single();
    return { data, error };
  },

  async updateRole(id: string, updates: Partial<Role>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("roles")
      .update(updates)
      .eq("id", id)
      .select()
      .single();
    return { data, error };
  },

  async deleteRole(id: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("roles")
      .delete()
      .eq("id", id);
    return { data, error };
  },

  // Settings
  async getSettings() {
    if (!supabase) {
      return { data: [], error: null };
    }
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .order("category", { ascending: true });
    return { data, error };
  },

  async getSetting(key: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .eq("key", key)
      .single();
    return { data, error };
  },

  async updateSetting(key: string, value: any, description?: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("settings")
      .update({ value, ...(description && { description }) })
      .eq("key", key)
      .select()
      .single();
    return { data, error };
  },

  async createSetting(settingData: Partial<Setting>) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("settings")
      .insert([settingData])
      .select()
      .single();
    return { data, error };
  },

  async deleteSetting(key: string) {
    if (!supabase) {
      return { data: null, error: { message: "Supabase not configured" } };
    }
    const { data, error } = await supabase
      .from("settings")
      .delete()
      .eq("key", key);
    return { data, error };
  },
};
