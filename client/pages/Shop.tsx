import { Link } from "react-router-dom";
import { ArrowLeft, Download, Star } from "lucide-react";

export default function Shop() {
  return (
    <div className="min-h-screen bg-fame-darker">
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            FameChase<span className="text-neon-green">.com</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-fame-darker via-fame-dark to-fame-darker"></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Creator <span className="text-neon-green">Toolkit</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional tools and templates to accelerate your creator
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product 1 */}
            <div className="bg-fame-dark border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-neon-green text-black text-xs font-bold px-2 py-1 rounded">
                  FREE
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Basic Media Kit
              </h3>
              <p className="text-gray-300 mb-6">
                Essential templates for brand outreach and collaborations.
              </p>
              <button className="w-full bg-electric-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Download Free
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-fame-dark border border-electric-blue rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-electric-blue text-white text-xs font-bold px-2 py-1 rounded">
                  PREMIUM
                </span>
                <Download className="w-5 h-5 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Complete Growth Kit
              </h3>
              <p className="text-gray-300 mb-6">
                Full analysis, media kit, rate card, and growth strategy.
              </p>
              <button className="w-full bg-electric-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Get for ₹99
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-fame-dark border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-soft-violet text-black text-xs font-bold px-2 py-1 rounded">
                  LIMITED
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brand Outreach Kit
              </h3>
              <p className="text-gray-300 mb-6">
                Professional templates for reaching out to brands and sponsors.
              </p>
              <button className="w-full bg-soft-violet text-black py-3 rounded-lg font-semibold hover:opacity-80 transition-opacity">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
