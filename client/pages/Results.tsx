import { Link } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";

export default function Results() {
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

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <Lock className="w-16 h-16 text-electric-blue mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Results Are Ready!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock your personalized Fame Score analysis and growth blueprint.
            </p>

            <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🔥 LIMITED TIME OFFER
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Get your complete analysis for just ₹99
              </p>
              <div className="text-yellow-400 font-bold text-xl mb-6">
                ⏰ 23h 59m left
              </div>
              <button className="neon-button mx-auto">
                Unlock My Results - ₹99
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              Only for creators with verified social profiles
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
