import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Settings,
  DollarSign,
} from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen bg-fame-darker">
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            FameChase<span className="text-neon-green">.com</span> Admin
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

      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-fame-darker via-fame-dark to-fame-darker"></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Admin <span className="text-electric-blue">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300">
              Manage users, products, and analytics
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-electric-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">10,247</div>
              <div className="text-gray-400">Total Users</div>
            </div>

            <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-neon-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">1,423</div>
              <div className="text-gray-400">Quiz Completions</div>
            </div>

            <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-soft-violet mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">₹84,390</div>
              <div className="text-gray-400">Revenue</div>
            </div>

            <div className="bg-fame-dark border border-gray-800 rounded-xl p-6 text-center">
              <Settings className="w-8 h-8 text-electric-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">98.2%</div>
              <div className="text-gray-400">System Health</div>
            </div>
          </div>

          {/* Admin Controls */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                User Management
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-electric-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  View All Users
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Quiz Results
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  User Analytics
                </button>
              </div>
            </div>

            <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Product Controls
              </h3>
              <div className="space-y-4">
                <button className="w-full bg-neon-green text-black py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity">
                  Manage Products
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Toggle Visibility
                </button>
                <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                  Revenue Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
