import {
  ArrowRight,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function QuizStart() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-garden-dark">
            FameChase<span className="text-neon-green">.com</span>
          </Link>
          <div className="text-gray-600 text-sm">Step 1 of 5</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Progress indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                <div className="w-8 h-2 bg-neon-green rounded-full"></div>
                <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Discover Your{" "}
              <span className="gradient-text">Fame Score</span>?
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Our AI-powered quiz analyzes your content strategy, audience, and
              growth potential to give you personalized insights.
            </p>

            {/* What you'll get */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <Target className="w-8 h-8 text-electric-blue mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Fame Score</h3>
                <p className="text-gray-400 text-sm">
                  Your influence rating 0-100
                </p>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-neon-green mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Growth Plan</h3>
                <p className="text-gray-400 text-sm">3-6 month strategy</p>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-soft-violet mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">
                  Income Potential
                </h3>
                <p className="text-gray-400 text-sm">Monetization roadmap</p>
              </div>

              <div className="bg-fame-dark border border-gray-800 rounded-xl p-6">
                <Clock className="w-8 h-8 text-electric-blue mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-2">Quick Results</h3>
                <p className="text-gray-400 text-sm">Analysis in 3 minutes</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <Link
                to="/quiz"
                className="neon-button flex items-center gap-2 group mx-auto"
              >
                Start Fame Score Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-gray-500 text-sm">
                Takes 2-3 minutes • 100% Free • No credit card required
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-fame-darker py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FameChase.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
