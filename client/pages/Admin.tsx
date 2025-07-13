import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Settings,
  DollarSign,
  Eye,
  EyeOff,
  Download,
  BarChart3,
  Filter,
  Search,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  isActive: boolean;
  downloads: number;
  revenue: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  fameScore: number;
  platform: string;
  joinDate: string;
  hasPurchased: boolean;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Personalized Media Kit PDF",
    category: "Templates",
    price: 99,
    isActive: true,
    downloads: 234,
    revenue: 23166,
  },
  {
    id: "2",
    name: "Custom Creator Bio Templates",
    category: "Templates",
    price: 49,
    isActive: true,
    downloads: 456,
    revenue: 22344,
  },
  {
    id: "3",
    name: "Brand Outreach Templates",
    category: "Outreach",
    price: 199,
    isActive: false,
    downloads: 123,
    revenue: 24477,
  },
  {
    id: "4",
    name: "Professional Rate Card",
    category: "Templates",
    price: 79,
    isActive: true,
    downloads: 345,
    revenue: 27255,
  },
  {
    id: "5",
    name: "AI Growth Strategy Report",
    category: "Analytics",
    price: 299,
    isActive: true,
    downloads: 89,
    revenue: 26611,
  },
  {
    id: "6",
    name: "Complete Growth Kit Bundle",
    category: "Bundle",
    price: 499,
    isActive: true,
    downloads: 67,
    revenue: 33433,
  },
];

const recentUsers: User[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya@example.com",
    fameScore: 78,
    platform: "Instagram",
    joinDate: "2024-01-15",
    hasPurchased: true,
  },
  {
    id: "2",
    name: "Arjun Patel",
    email: "arjun@example.com",
    fameScore: 65,
    platform: "YouTube",
    joinDate: "2024-01-14",
    hasPurchased: false,
  },
  {
    id: "3",
    name: "Sneha Singh",
    email: "sneha@example.com",
    fameScore: 82,
    platform: "LinkedIn",
    joinDate: "2024-01-13",
    hasPurchased: true,
  },
  {
    id: "4",
    name: "Rahul Kumar",
    email: "rahul@example.com",
    fameScore: 45,
    platform: "Instagram",
    joinDate: "2024-01-12",
    hasPurchased: false,
  },
];

export default function Admin() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "users">(
    "overview",
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const toggleProduct = (productId: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isActive: !product.isActive }
          : product,
      ),
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const totalRevenue = products.reduce(
    (sum, product) => sum + product.revenue,
    0,
  );
  const totalDownloads = products.reduce(
    (sum, product) => sum + product.downloads,
    0,
  );
  const activeProducts = products.filter((p) => p.isActive).length;

  return (
    <div className="min-h-screen bg-fame-darker">
      <header className="relative z-10 px-4 py-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            FameChase<span className="text-neon-green">.com</span>
            <span className="text-electric-blue ml-2">Admin</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Site
          </Link>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "products", label: "Products", icon: Settings },
              { id: "users", label: "Users", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-electric-blue text-electric-blue"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Dashboard Overview
              </h1>
              <p className="text-gray-300">
                Monitor your platform performance and key metrics
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-electric-blue" />
                  <span className="text-xs bg-neon-green text-black px-2 py-1 rounded-full font-bold">
                    +12%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">10,247</div>
                <div className="text-gray-400 text-sm">Total Users</div>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-neon-green" />
                  <span className="text-xs bg-electric-blue text-white px-2 py-1 rounded-full font-bold">
                    +8%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">1,423</div>
                <div className="text-gray-400 text-sm">Quiz Completions</div>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8 text-soft-violet" />
                  <span className="text-xs bg-soft-violet text-black px-2 py-1 rounded-full font-bold">
                    +24%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  ₹{totalRevenue.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">Total Revenue</div>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Download className="w-8 h-8 text-yellow-400" />
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full font-bold">
                    +15%
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {totalDownloads}
                </div>
                <div className="text-gray-400 text-sm">Total Downloads</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Recent Users
                </h3>
                <div className="space-y-3">
                  {recentUsers.slice(0, 5).map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 bg-fame-darker rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            {user.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {user.platform} • Score: {user.fameScore}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-xs px-2 py-1 rounded-full font-bold ${
                            user.hasPurchased
                              ? "bg-neon-green text-black"
                              : "bg-gray-600 text-gray-300"
                          }`}
                        >
                          {user.hasPurchased ? "Paid" : "Free"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Top Products
                </h3>
                <div className="space-y-3">
                  {products
                    .sort((a, b) => b.revenue - a.revenue)
                    .slice(0, 5)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between p-3 bg-fame-darker rounded-lg"
                      >
                        <div>
                          <div className="text-white font-medium">
                            {product.name}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {product.downloads} downloads
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-neon-green font-bold">
                            ₹{product.revenue.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Product Management
                </h1>
                <p className="text-gray-300">
                  Control product visibility and monitor performance
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-fame-dark border border-gray-600 text-white rounded-lg focus:border-electric-blue focus:outline-none"
                  />
                </div>

                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 bg-fame-dark border border-gray-600 text-white rounded-lg focus:border-electric-blue focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-neon-green">
                  {activeProducts}
                </div>
                <div className="text-gray-400">Active Products</div>
              </div>
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  {totalDownloads}
                </div>
                <div className="text-gray-400">Total Downloads</div>
              </div>
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-soft-violet">
                  ₹{totalRevenue.toLocaleString()}
                </div>
                <div className="text-gray-400">Total Revenue</div>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-fame-dark border border-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Product
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Category
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Price
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Downloads
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Revenue
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Status
                      </th>
                      <th className="text-center p-4 text-gray-300 font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-800 hover:bg-fame-darker/50 transition-colors"
                      >
                        <td className="p-4">
                          <div className="text-white font-medium">
                            {product.name}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
                            {product.category}
                          </span>
                        </td>
                        <td className="p-4 text-white">₹{product.price}</td>
                        <td className="p-4 text-gray-300">
                          {product.downloads}
                        </td>
                        <td className="p-4 text-neon-green font-semibold">
                          ₹{product.revenue.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-bold ${
                              product.isActive
                                ? "bg-neon-green text-black"
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {product.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => toggleProduct(product.id)}
                            className={`flex items-center gap-2 mx-auto px-3 py-1.5 rounded-lg font-medium transition-colors ${
                              product.isActive
                                ? "bg-red-500 hover:bg-red-600 text-white"
                                : "bg-neon-green hover:bg-green-400 text-black"
                            }`}
                          >
                            {product.isActive ? (
                              <>
                                <EyeOff className="w-4 h-4" />
                                Disable
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4" />
                                Enable
                              </>
                            )}
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

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                User Management
              </h1>
              <p className="text-gray-300">
                Monitor user activity and quiz results
              </p>
            </div>

            <div className="bg-fame-dark border border-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        User
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Fame Score
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Platform
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Join Date
                      </th>
                      <th className="text-left p-4 text-gray-300 font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-800 hover:bg-fame-darker/50 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold">
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-white font-medium">
                                {user.name}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="text-white font-semibold">
                              {user.fameScore}
                            </div>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                user.fameScore >= 70
                                  ? "bg-neon-green"
                                  : user.fameScore >= 50
                                    ? "bg-yellow-400"
                                    : "bg-red-400"
                              }`}
                            ></div>
                          </div>
                        </td>
                        <td className="p-4 text-gray-300">{user.platform}</td>
                        <td className="p-4 text-gray-300">{user.joinDate}</td>
                        <td className="p-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-bold ${
                              user.hasPurchased
                                ? "bg-neon-green text-black"
                                : "bg-gray-600 text-gray-300"
                            }`}
                          >
                            {user.hasPurchased ? "Premium" : "Free"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
