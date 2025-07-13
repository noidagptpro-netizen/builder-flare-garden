import { ArrowRight, Users, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import ExpandableFooter from "../components/ExpandableFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-fame-darker">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-xl font-bold text-white">
            FameChase<span className="text-neon-green">.com</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-fame-darker via-fame-dark to-fame-darker"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-8">
            <span className="text-neon-green text-sm font-medium">
              India's #1 Creator Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Influence
            <br />
            <span className="gradient-text hero-glow">Into Income</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get your personalized media kit + growth blueprint in 3 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/quiz"
              className="neon-button flex items-center gap-2 group"
            >
              Start Your Influencer Quiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/shop"
              className="bg-transparent border-2 border-soft-violet text-soft-violet font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-soft-violet hover:text-black hover:shadow-lg hover:shadow-soft-violet/50"
            >
              Browse Creator Tools
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="stats-glow">
              <Users className="w-5 h-5" />
              <span>10,000+ Creators</span>
            </div>
            <div className="stats-glow">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="relative z-10 bg-fame-dark py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How <span className="text-neon-green">It Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your journey from content creator to income earner in 3 simple
              steps
            </p>
          </div>

          {/* Roadmap */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-green via-electric-blue to-soft-violet opacity-60"></div>

              {/* Steps */}
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-fame-darker rounded-2xl p-6 border border-neon-green/20">
                      <h3 className="text-xl font-bold text-white mb-3">
                        📝 Take The Quiz
                      </h3>
                      <p className="text-gray-300">
                        Answer questions about your content, audience, and
                        goals. Takes just 3 minutes to complete.
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-neon-green rounded-full flex items-center justify-center text-black font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative z-10 w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-fame-darker rounded-2xl p-6 border border-electric-blue/20">
                      <h3 className="text-xl font-bold text-white mb-3">
                        🔍 Get AI Analysis
                      </h3>
                      <p className="text-gray-300">
                        Our AI analyzes your profile and generates a
                        personalized Fame Score with growth insights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-fame-darker rounded-2xl p-6 border border-soft-violet/20">
                      <h3 className="text-xl font-bold text-white mb-3">
                        💰 Start Earning
                      </h3>
                      <p className="text-gray-300">
                        Get professional tools, templates, and strategies to
                        monetize your content immediately.
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-soft-violet rounded-full flex items-center justify-center text-black font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300"
            >
              Start Your Journey Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="relative z-10 bg-fame-darker py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to{" "}
              <span className="text-neon-green">Succeed</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From fame scoring to monetization strategies, we've got your
              creator journey covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-fame-darker border border-gray-800 rounded-2xl p-6 hover:border-electric-blue/50 transition-colors">
              <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Fame Score Analysis
              </h3>
              <p className="text-gray-300">
                Get an AI-powered analysis of your influence potential across
                all platforms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-fame-darker border border-gray-800 rounded-2xl p-6 hover:border-neon-green/50 transition-colors">
              <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Growth Toolkit
              </h3>
              <p className="text-gray-300">
                Professional media kits, rate cards, and outreach templates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-fame-darker border border-gray-800 rounded-2xl p-6 hover:border-soft-violet/50 transition-colors">
              <div className="w-12 h-12 bg-soft-violet/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-soft-violet" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Monetization Strategy
              </h3>
              <p className="text-gray-300">
                Personalized roadmap to turn your content into consistent
                income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ExpandableFooter />
    </div>
  );
}
