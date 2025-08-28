import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  ShoppingCart,
  TrendingUp,
  Download,
  Eye,
  Filter,
  Search,
  Calendar,
  DollarSign,
  Home,
  Loader2,
  LogOut,
  Settings,
  UserCog,
  Save,
  Plus,
  Trash2,
} from "lucide-react";
import { supabase, isSupabaseConfigured, dbHelpers, Role, Setting } from "../lib/supabase";

interface UserData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  niche?: string;
  primary_platform?: string;
  follower_count?: string;
  created_at: string;
  quiz_data?: any;
}

interface PurchaseData {
  id: string;
  user_id: string;
  product_id: string;
  amount: number;
  payment_status: string;
  payment_id?: string;
  created_at: string;
  users?: UserData;
  products?: any;
}

interface StatsData {
  totalUsers: number;
  totalPurchases: number;
  totalRevenue: number;
  successfulPayments: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [stats, setStats] = useState<StatsData>({
    totalUsers: 0,
    totalPurchases: 0,
    totalRevenue: 0,
    successfulPayments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<
    "overview" | "users" | "purchases" | "settings"
  >("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [roles, setRoles] = useState<Role[]>([]);
  const [settings, setSettings] = useState<Setting[]>([]);
  const [newSetting, setNewSetting] = useState({ key: '', value: '', description: '', category: 'general' });

  // Check admin authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('famechase_admin_logged_in');
    const loginTime = localStorage.getItem('famechase_admin_login_time');

    if (!isLoggedIn || !loginTime) {
      navigate('/admin-login');
      return;
    }

    // Check if session is expired (24 hours)
    const now = Date.now();
    const loginTimestamp = parseInt(loginTime);
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours

    if (now - loginTimestamp > sessionDuration) {
      localStorage.removeItem('famechase_admin_logged_in');
      localStorage.removeItem('famechase_admin_login_time');
      navigate('/admin-login');
      return;
    }

    loadDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('famechase_admin_logged_in');
    localStorage.removeItem('famechase_admin_login_time');
    navigate('/admin-login');
  };

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      if (!isSupabaseConfigured()) {
        // Show demo data when Supabase is not configured
        console.warn("Supabase not configured, showing demo data");
        setUsers([]);
        setPurchases([]);
        setStats({
          totalUsers: 0,
          totalPurchases: 0,
          totalRevenue: 0,
          successfulPayments: 0,
        });
        return;
      }

      // Load users
      const { data: usersData, error: usersError } = await supabase!
        .from("users")
        .select("*")
        .order("created_at", { ascending: false });

      if (usersError) throw usersError;

      // Load purchases with user and product details
      const { data: purchasesData, error: purchasesError } = await supabase!
        .from("purchases")
        .select(
          `
          *,
          users (name, email),
          products (name)
        `,
        )
        .order("created_at", { ascending: false });

      if (purchasesError) throw purchasesError;

      setUsers(usersData || []);
      setPurchases(purchasesData || []);

      // Calculate stats
      const totalUsers = usersData?.length || 0;
      const totalPurchases = purchasesData?.length || 0;
      const successfulPayments =
        purchasesData?.filter((p) => p.payment_status === "success").length ||
        0;
      const totalRevenue =
        purchasesData
          ?.filter((p) => p.payment_status === "success")
          ?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;

      setStats({
        totalUsers,
        totalPurchases,
        totalRevenue,
        successfulPayments,
      });

      // Load roles and settings
      const { data: rolesData, error: rolesError } = await dbHelpers.getRoles();
      if (rolesError) console.error("Error loading roles:", rolesError);
      else setRoles(rolesData || []);

      const { data: settingsData, error: settingsError } = await dbHelpers.getSettings();
      if (settingsError) console.error("Error loading settings:", settingsError);
      else setSettings(settingsData || []);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.niche &&
        user.niche.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      purchase.users?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.users?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.product_id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || purchase.payment_status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleUpdateSetting = async (key: string, value: any) => {
    try {
      const { error } = await dbHelpers.updateSetting(key, value);
      if (error) {
        console.error("Error updating setting:", error);
        return;
      }
      // Reload settings
      const { data: settingsData } = await dbHelpers.getSettings();
      setSettings(settingsData || []);
    } catch (error) {
      console.error("Error updating setting:", error);
    }
  };

  const handleCreateSetting = async () => {
    try {
      if (!newSetting.key || !newSetting.value) return;
      
      const { error } = await dbHelpers.createSetting({
        key: newSetting.key,
        value: newSetting.value,
        description: newSetting.description,
        category: newSetting.category,
        is_public: false,
      });
      
      if (error) {
        console.error("Error creating setting:", error);
        return;
      }
      
      // Reset form and reload settings
      setNewSetting({ key: '', value: '', description: '', category: 'general' });
      const { data: settingsData } = await dbHelpers.getSettings();
      setSettings(settingsData || []);
    } catch (error) {
      console.error("Error creating setting:", error);
    }
  };

  const handleDeleteSetting = async (key: string) => {
    try {
      const { error } = await dbHelpers.deleteSetting(key);
      if (error) {
        console.error("Error deleting setting:", error);
        return;
      }
      // Reload settings
      const { data: settingsData } = await dbHelpers.getSettings();
      setSettings(settingsData || []);
    } catch (error) {
      console.error("Error deleting setting:", error);
    }
  };

  const formatCurrency = (amount: number) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="text-2xl font-bold text-gray-900">
                FameChase<span className="text-blue-600">.com</span>
              </Link>
              <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home className="w-4 h-4" />
                Back to Site
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Configuration Warning */}
        {!isSupabaseConfigured() && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-sm">⚠️</span>
              </div>
              <div>
                <h3 className="text-yellow-800 font-semibold">
                  Supabase Not Configured
                </h3>
                <p className="text-yellow-700 text-sm">
                  The admin dashboard requires Supabase configuration to display
                  real data. Please set VITE_SUPABASE_URL and
                  VITE_SUPABASE_ANON_KEY environment variables.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalUsers}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Purchases</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.totalPurchases}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  Successful Payments
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.successfulPayments}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">
                  {formatCurrency(stats.totalRevenue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-4 text-sm font-medium border-b-2 ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`px-6 py-4 text-sm font-medium border-b-2 ${
                  activeTab === "users"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Users ({stats.totalUsers})
              </button>
              <button
                onClick={() => setActiveTab("purchases")}
                className={`px-6 py-4 text-sm font-medium border-b-2 ${
                  activeTab === "purchases"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Purchases ({stats.totalPurchases})
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-6 py-4 text-sm font-medium border-b-2 flex items-center gap-2 ${
                  activeTab === "settings"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Search and Filters */}
            {(activeTab === "users" || activeTab === "purchases") && (
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                {activeTab === "purchases" && (
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                )}
              </div>
            )}

            {/* Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {purchases.slice(0, 5).map((purchase) => (
                      <div
                        key={purchase.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${purchase.payment_status === "success" ? "bg-green-500" : purchase.payment_status === "pending" ? "bg-yellow-500" : "bg-red-500"}`}
                          ></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {purchase.users?.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {purchase.product_id}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            {formatCurrency(purchase.amount)}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatDate(purchase.created_at)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        User
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Contact
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Niche
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Platform
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Followers
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Joined
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-600">{user.city}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="text-sm text-gray-900">
                              {user.email}
                            </p>
                            <p className="text-sm text-gray-600">
                              {user.phone}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {user.niche || "N/A"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {user.primary_platform || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {user.follower_count || "N/A"}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {formatDate(user.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "purchases" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Product
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Payment ID
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPurchases.map((purchase) => (
                      <tr
                        key={purchase.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-gray-900">
                              {purchase.users?.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {purchase.users?.email}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-medium text-gray-900">
                            {purchase.products?.name || purchase.product_id}
                          </p>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-semibold text-gray-900">
                            {formatCurrency(purchase.amount)}
                          </p>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.payment_status)}`}
                          >
                            {purchase.payment_status.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-mono text-sm text-gray-900">
                            {purchase.payment_id || "N/A"}
                          </p>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {formatDate(purchase.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="space-y-8">
                {/* Roles Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <UserCog className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">User Roles</h3>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {roles.map((role) => (
                        <div key={role.id} className="bg-white p-4 rounded-lg border border-gray-200">
                          <h4 className="font-medium text-gray-900 mb-2">{role.role_name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{role.description}</p>
                          <div className="text-xs text-gray-500">
                            Permissions: {Array.isArray(role.permissions) ? role.permissions.join(', ') : 'N/A'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Settings Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-gray-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Application Settings</h3>
                    </div>
                  </div>

                  {/* Add New Setting */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Add New Setting</h4>
                    <div className="grid md:grid-cols-4 gap-3">
                      <input
                        type="text"
                        placeholder="Key"
                        value={newSetting.key}
                        onChange={(e) => setNewSetting({ ...newSetting, key: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        value={newSetting.value}
                        onChange={(e) => setNewSetting({ ...newSetting, value: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        value={newSetting.description}
                        onChange={(e) => setNewSetting({ ...newSetting, description: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <select
                        value={newSetting.category}
                        onChange={(e) => setNewSetting({ ...newSetting, category: e.target.value })}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      >
                        <option value="general">General</option>
                        <option value="system">System</option>
                        <option value="ui">UI</option>
                        <option value="api">API</option>
                      </select>
                    </div>
                    <button
                      onClick={handleCreateSetting}
                      className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                      disabled={!newSetting.key || !newSetting.value}
                    >
                      <Plus className="w-4 h-4" />
                      Add Setting
                    </button>
                  </div>

                  {/* Settings Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Key</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Value</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Public</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {settings.map((setting) => (
                          <tr key={setting.id} className="border-b border-gray-100">
                            <td className="py-3 px-4">
                              <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                                {setting.key}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <input
                                type="text"
                                value={typeof setting.value === 'object' ? JSON.stringify(setting.value) : setting.value}
                                onChange={(e) => {
                                  const newValue = e.target.value;
                                  // Try to parse as JSON, fallback to string
                                  let parsedValue = newValue;
                                  try {
                                    parsedValue = JSON.parse(newValue);
                                  } catch {
                                    parsedValue = newValue;
                                  }
                                  handleUpdateSetting(setting.key, parsedValue);
                                }}
                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                              />
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">
                              {setting.description || 'N/A'}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {setting.category}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                setting.is_public ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {setting.is_public ? 'Public' : 'Private'}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <button
                                onClick={() => handleDeleteSetting(setting.key)}
                                className="flex items-center gap-1 px-2 py-1 text-red-600 hover:text-red-700 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
