import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  DollarSign,
  Download,
  CheckCircle,
  Globe,
  CreditCard,
  Shield,
  Zap,
  Sparkles,
  FileText,
  Mail,
  Layout,
  BarChart,
  Calendar,
  User,
  MapPin,
  AlertTriangle,
  Award,
  Lightbulb,
  Clock,
  Lock,
  Unlock,
} from "lucide-react";
import { analyzeQuizData } from "../lib/ai-analysis";

interface QuizData {
  name: string;
  email: string;
  age: string;
  city: string;
  primaryPlatform: string;
  secondaryPlatforms: string[];
  followerCount: string;
  niche: string;
  contentType: string;
  postingFrequency: string;
  experience: string[];
  monthlyIncome: string;
  biggestChallenge: string[];
  goals: string[];
  socialLinks: {
    instagram: string;
    youtube: string;
    linkedin: string;
    website: string;
    twitter: string;
    tiktok: string;
  };
  bio: string;
  language: string;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  age: string;
  city: string;
}

export default function Results() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("fameChaseQuizData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setQuizData(data);
      setPersonalInfo({
        name: data.name || "",
        email: data.email || "",
        phone: "",
        age: data.age || "",
        city: data.city || "",
      });

      // Generate analysis
      const generatedAnalysis = analyzeQuizData(data);
      setAnalysis(generatedAnalysis);
    }
  }, []);

  const handlePayment = async () => {
    setIsSubmitting(true);

    // Save personal info
    if (quizData) {
      const updatedData = {
        ...quizData,
        ...personalInfo,
      };
      localStorage.setItem("fameChaseQuizData", JSON.stringify(updatedData));
    }

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to payment
    window.open("https://rzp.io/l/famechase-pro-99", "_blank");

    setIsSubmitting(false);
  };

  if (!quizData || !analysis) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-electric-blue rounded-full animate-spin mx-auto mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600">Loading your creator analysis...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              FameChase<span className="text-neon-green">.com</span>
            </Link>
            <Link
              to="/quiz"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Quiz
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Creator Analysis
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Complete personalized insights for {quizData.name || "your"}{" "}
              creator journey
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {quizData.niche}
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4" />
                {quizData.followerCount}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                {quizData.monthlyIncome}
              </div>
            </div>
          </div>

          {/* Profile Synopsis */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Profile Synopsis
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Creator Profile
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Primary Platform:</span>{" "}
                    {quizData.primaryPlatform}
                  </p>
                  <p>
                    <span className="font-medium">Content Niche:</span>{" "}
                    {quizData.niche}
                  </p>
                  <p>
                    <span className="font-medium">Content Type:</span>{" "}
                    {quizData.contentType}
                  </p>
                  <p>
                    <span className="font-medium">Posting Frequency:</span>{" "}
                    {quizData.postingFrequency}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Current Status
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Followers:</span>{" "}
                    {quizData.followerCount}
                  </p>
                  <p>
                    <span className="font-medium">Monthly Income:</span>{" "}
                    {quizData.monthlyIncome}
                  </p>
                  <p>
                    <span className="font-medium">Experience Level:</span>{" "}
                    {quizData.experience.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">Active Platforms:</span>{" "}
                    {quizData.secondaryPlatforms.length + 1}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-purple-600" />
              SWOT Analysis
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Strengths
                </h3>
                <ul className="space-y-2 text-green-700">
                  {analysis.swotAnalysis.strengths.map(
                    (strength: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        {strength}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Weaknesses
                </h3>
                <ul className="space-y-2 text-red-700">
                  {analysis.swotAnalysis.weaknesses.map(
                    (weakness: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        {weakness}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Opportunities
                </h3>
                <ul className="space-y-2 text-blue-700">
                  {analysis.swotAnalysis.opportunities.map(
                    (opportunity: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {opportunity}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Threats
                </h3>
                <ul className="space-y-2 text-yellow-700">
                  {analysis.swotAnalysis.threats.map(
                    (threat: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        {threat}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Suggestions */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-purple-600" />
              Key Suggestions
            </h2>
            <div className="grid gap-4">
              {analysis.suggestions.map((suggestion: string, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-purple-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {suggestion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vital Stats */}
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart className="w-6 h-6 text-orange-600" />
              Your Creator Vital Stats
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {analysis.fameScore}/100
                </div>
                <div className="text-green-600 font-medium">Fame Score</div>
                <div className="text-sm text-green-600 mt-1">
                  Based on engagement potential
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  {analysis.growthPotential}%
                </div>
                <div className="text-blue-600 font-medium">
                  Growth Potential
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  Next 6 months projection
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-700 mb-1">
                  ₹{analysis.incomeProjection}
                </div>
                <div className="text-purple-600 font-medium">
                  Income Potential
                </div>
                <div className="text-sm text-purple-600 mt-1">
                  Monthly achievable target
                </div>
              </div>
            </div>
          </div>

          {/* Payment Wall */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock Your Complete Creator Toolkit
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your personalized Fame Score Report, Professional Media Kit
              Template, and Growth Strategy + access to our complete premium
              creator tools.
            </p>

            <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹99</div>
                <div className="text-lg text-gray-600 line-through mb-1">
                  ₹299
                </div>
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  67% OFF - Limited Time
                </div>
              </div>
            </div>

            {!showPaymentForm ? (
              <button
                onClick={() => setShowPaymentForm(true)}
                className="bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Unlock className="w-5 h-5" />
                Unlock Complete Toolkit - ₹99
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Complete Your Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={personalInfo.name}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) =>
                          setPersonalInfo({
                            ...personalInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          value={personalInfo.age}
                          onChange={(e) =>
                            setPersonalInfo({
                              ...personalInfo,
                              age: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={personalInfo.city}
                          onChange={(e) =>
                            setPersonalInfo({
                              ...personalInfo,
                              city: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Mumbai"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={
                    isSubmitting ||
                    !personalInfo.name ||
                    !personalInfo.email ||
                    !personalInfo.phone
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Pay ₹99 - Secure Payment
                      <Shield className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    Instant Download
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Money-back Guarantee
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-sm text-gray-600">
              <p>What you'll get after payment:</p>
              <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xs">Fame Score Report</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Layout className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-xs">Media Kit Template</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-xs">Growth Strategy</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-xs">Premium Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
