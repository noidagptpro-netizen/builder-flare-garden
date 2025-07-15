import {
  ArrowRight,
  Users,
  Star,
  ChevronDown,
  Download,
  CheckCircle,
  TrendingUp,
  Target,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import ExpandableFooter from "../components/ExpandableFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            FameChase<span className="text-neon-green">.com</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/quiz"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Take Quiz
            </Link>
            <Link
              to="/shop"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Shop
            </Link>
            <Link
              to="/quiz"
              className="bg-neon-green text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition-colors"
            >
              Get Started Free
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-neon-green/10 border border-neon-green/30 rounded-full px-6 py-3 mb-8">
            <span className="text-neon-green text-sm font-semibold">
              🏆 India's #1 Creator Growth Platform - 10,000+ Success Stories
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Passion Into
            <br />
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              ₹50K+ Monthly Income
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get your personalized Creator Growth Kit, Professional Media Kit,
            and AI-powered strategy
            <span className="font-semibold text-gray-900">
              {" "}
              in just 3 minutes.
            </span>
          </p>

          {/* Proof Points */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">
                100% Free Analysis
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">
                Instant Download
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">
                Real Business Tools
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/quiz"
              className="bg-gradient-to-r from-neon-green to-green-400 text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>Start Your Creator Quiz Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/shop"
              className="bg-white border-2 border-electric-blue text-electric-blue font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-electric-blue hover:text-white hover:shadow-lg"
            >
              Browse Creator Tools
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Creators Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                Rating
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Get <span className="text-neon-green">Instantly</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete your quiz and get immediate access to professional tools
              worth ₹10,000+ absolutely free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Deliverable 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-neon-green/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Fame Score
              </h3>
              <p className="text-gray-600 mb-6">
                AI-powered analysis of your content, audience, and growth
                potential with actionable insights.
              </p>
              <div className="text-neon-green font-semibold">
                ✓ Instant PDF Report
              </div>
            </div>

            {/* Free Deliverable 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Professional Media Kit
              </h3>
              <p className="text-gray-600 mb-6">
                Custom-designed media kit template with your stats, audience
                demographics, and rate cards.
              </p>
              <div className="text-electric-blue font-semibold">
                ✓ Editable Template
              </div>
            </div>

            {/* Free Deliverable 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-soft-violet/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-soft-violet" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Growth Strategy Plan
              </h3>
              <p className="text-gray-600 mb-6">
                3-month action plan with content ideas, posting schedule, and
                monetization roadmap.
              </p>
              <div className="text-soft-violet font-semibold">
                ✓ Step-by-step Guide
              </div>
            </div>

            {/* Premium Upgrade */}
            <div className="bg-gradient-to-br from-neon-green/5 to-electric-blue/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-neon-green/20 lg:col-span-3">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-neon-green/10 border border-neon-green/30 rounded-full px-6 py-2 mb-4">
                  <span className="text-neon-green text-sm font-semibold">
                    🚀 UPGRADE TO PRO
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Creator Business Kit - ₹99
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Everything you need to turn your content into a profitable
                  business
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    30+ Email Templates
                  </div>
                  <div className="text-gray-600 text-sm">
                    For brand outreach
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    Live Profile Page
                  </div>
                  <div className="text-gray-600 text-sm">
                    Professional landing page
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    Analytics Dashboard
                  </div>
                  <div className="text-gray-600 text-sm">Track your growth</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900">
                    Priority Support
                  </div>
                  <div className="text-gray-600 text-sm">
                    Direct access to experts
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
                >
                  Start Free Quiz & Unlock Pro
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-neon-green">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From unknown creator to income earner in 3 simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-green-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto shadow-lg">
                    1
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-neon-green to-electric-blue hidden md:block md:w-32 md:left-full"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📝 Complete Quiz (3 mins)
                  </h3>
                  <p className="text-gray-600">
                    Answer questions about your content, audience, goals, and
                    current challenges. Our AI analyzes everything.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                    2
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-electric-blue to-soft-violet hidden md:block md:w-32 md:left-full"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🔍 Get Instant Analysis
                  </h3>
                  <p className="text-gray-600">
                    Receive your Fame Score, personalized growth strategy, and
                    professional tools immediately.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-soft-violet to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-lg">
                    3
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    💰 Start Earning Today
                  </h3>
                  <p className="text-gray-600">
                    Use your media kit and outreach templates to land your first
                    paid collaboration within 30 days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Creator Journey Now
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-gray-500 mt-4">
              Join 10,000+ creators who've transformed their passion into profit
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creator <span className="text-neon-green">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real creators, real results, real income growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ananya K.</div>
                  <div className="text-gray-600 text-sm">Beauty Creator</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Using the professional media kit template, I secured my first
                brand collaboration within 2 weeks. The pricing guide helped me
                negotiate ₹35K for a single post."
              </p>
              <div className="text-neon-green font-semibold">
                +₹35K first brand deal
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Vikash M.</div>
                  <div className="text-gray-600 text-sm">Tech Reviewer</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The growth strategy helped me understand my audience better. I
                optimized my content using the insights and grew from 5K to 25K
                followers in 4 months."
              </p>
              <div className="text-electric-blue font-semibold">
                +20K followers in 4 months
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Meera S.</div>
                  <div className="text-gray-600 text-sm">Lifestyle Blogger</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The email templates were game-changers. I used them to reach
                out to 50 brands and got responses from 12. Now I have
                consistent monthly collaborations."
              </p>
              <div className="text-soft-violet font-semibold">
                +12 active brand partnerships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-green/10 via-electric-blue/10 to-soft-violet/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Turn Your Content Into
            <br />
            <span className="bg-gradient-to-r from-neon-green to-electric-blue bg-clip-text text-transparent">
              Consistent Income?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of creators who've built successful businesses using
            our proven framework
          </p>

          <div className="mb-8">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-6 px-12 rounded-full text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Your Free Creator Kit Now
              <ArrowRight className="w-8 h-8" />
            </Link>
          </div>

          <div className="text-gray-600">
            ✓ 100% Free Forever &nbsp;&nbsp;&nbsp; ✓ Instant Access
            &nbsp;&nbsp;&nbsp; ✓ No Credit Card Required
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">
            FameChase<span className="text-neon-green">.com</span>
          </div>
          <p className="text-gray-600 mb-6">
            Empowering creators to build profitable businesses
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/quiz" className="text-gray-600 hover:text-gray-900">
              Take Quiz
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/results" className="text-gray-600 hover:text-gray-900">
              Results
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 FameChase.com. All rights reserved. | Built for creators, by
            creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
