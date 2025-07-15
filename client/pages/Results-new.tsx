import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  TrendingUp,
  Target,
  DollarSign,
  Download,
  Info,
  Clock,
  CheckCircle,
  Globe,
  CreditCard,
  Shield,
  Zap,
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

const languages = {
  english: {
    title: "Your Fame Score Results",
    subtitle: "Personalized analysis based on your creator profile",
    paymentBanner: "🎁 Your Downloads Are Ready!",
    downloads: "Your Downloads Are Ready!",
    downloadItems: [
      "Personalized Media Kit PDF",
      "Custom Creator Bio Templates",
      "Brand Outreach Templates",
      "Professional Rate Card",
      "Live Profile Page",
      "AI Growth Strategy",
    ],
    unlockButton: "Unlock Complete Analysis - ₹99",
    offerExpiry: "Offer valid until: January 20, 2025",
    fameScore: "Fame Score",
    confidenceScore: "Confidence Score",
    experienceLevel: "Experience Level",
    growthTrajectory: "Growth Trajectory",
    swotAnalysis: "SWOT Analysis",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
    opportunities: "Opportunities",
    threats: "Threats",
    monetization: "Monetization Roadmap",
    currentPhase: "Current Phase",
    incomeProjection: "Income Projection",
    nextSteps: "Next Steps",
    recommendations: "Personalized Recommendations",
    contentStrategy: "Content Strategy",
    paymentFeatures: [
      "✅ Complete 50-page Creator Analysis Report",
      "✅ Personalized Media Kit with Your Branding",
      "✅ 30+ Email Templates for Brand Outreach",
      "✅ Professional Rate Card Calculator",
      "✅ Live Creator Profile Page",
      "✅ AI-Powered Content Calendar (3 months)",
      "✅ Growth Strategy Workbook",
      "✅ Analytics Dashboard Access",
    ],
    paymentSecurity:
      "💳 Secure Payment • 📱 Instant Download • 💯 Money-back Guarantee",
  },
  hindi: {
    title: "आपके फेम स्कोर परिणाम",
    subtitle: "आपकी क्रिएटर प्रोफाइल के आधार पर व्यक्तिगत विश्लेषण",
    paymentBanner: "🎁 आपके डाउनलोड तैयार हैं!",
    downloads: "आपके डाउनलोड तैयार हैं!",
    downloadItems: [
      "व्यक्तिगत मीडिया किट PDF",
      "कस्टम क्रिएटर बायो टेम्प्लेट",
      "ब्रांड आउटरीच टेम्प्लेट",
      "प्रोफेशनल रेट कार्ड",
      "लाइव प्रोफाइल पेज",
      "AI ग्रोथ स्ट्रैटेजी",
    ],
    unlockButton: "पूर्ण विश्लेषण अनलॉक करें - ₹99",
    offerExpiry: "ऑफर की अवधि: 20 जनवरी, 2025 तक",
    fameScore: "फेम स्कोर",
    confidenceScore: "कॉन्फिडेंस स्कोर",
    experienceLevel: "अनुभव स्तर",
    growthTrajectory: "ग्रोथ ट्रैजेक्टरी",
    swotAnalysis: "SWOT विश्लेषण",
    strengths: "शक्तियां",
    weaknesses: "कमजोरियां",
    opportunities: "अवसर",
    threats: "खतरे",
    monetization: "मॉनेटाइज़ेशन रोडमैप",
    currentPhase: "वर्तमान चरण",
    incomeProjection: "आय अनुमान",
    nextSteps: "अगले कदम",
    recommendations: "व्यक्तिगत सुझाव",
    contentStrategy: "कंटेंट रणनीति",
    paymentFeatures: [
      "✅ पूर्ण 50-पेज क्रिएटर एनालिसिस रिपोर्ट",
      "✅ आपकी ब्रांड��ंग के साथ व्यक्तिगत मीडिया किट",
      "✅ ब्रांड आउटरीच के लिए 30+ ईमेल टेम्प्लेट",
      "✅ प्रोफेशनल रेट कार्ड कैलकुलेटर",
      "✅ लाइव क्रिएटर प्रोफाइल पेज",
      "✅ AI-पावर्ड कंटेंट कैलेंडर (3 महीने)",
      "✅ ग्रोथ स्ट्रैटेजी वर्कबुक",
      "✅ एनालिटिक्स डैशबोर्ड एक्सेस",
    ],
    paymentSecurity:
      "💳 सुरक्षित भुगतान • 📱 इंस्टेंट डाउनलोड • 💯 मनी-बैक गारंटी",
  },
};

export default function Results() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
  });

  const t = languages[language];

  useEffect(() => {
    // Load quiz data from localStorage
    const savedData = localStorage.getItem("fameChaseQuizData");
    if (savedData) {
      const data = JSON.parse(savedData);
      setQuizData(data);
      setLanguage(data.language || "english");
      const analysisResult = analyzeQuizData(data);
      setAnalysis(analysisResult);
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handlePayment = () => {
    // Redirect to actual payment integration
    const paymentUrl =
      "https://e7a22213a4e3477583ae6730113431ab-main.projects.builder.my/results";
    window.open(paymentUrl, "_blank");
  };

  if (!quizData || !analysis) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-garden-dark">Analyzing your creator profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-garden-dark">
            FameChase<span className="text-neon-green">.com</span>
          </Link>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "english" | "hindi")
              }
              className="bg-white border border-gray-300 text-garden-dark px-3 py-1 rounded-lg text-sm"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>

            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-garden-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Payment Wall Banner */}
      <div className="bg-gradient-to-r from-neon-green via-electric-blue to-soft-violet text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="font-bold text-2xl mb-3">{t.paymentBanner}</div>
          <div className="text-lg mb-3">
            Personalized Media Kit PDF • Custom Creator Bio Templates • Brand
            Outreach Templates
          </div>
          <div className="text-lg mb-3">
            Professional Rate Card • Live Profile Page • AI Growth Strategy
          </div>
          <div className="flex justify-center items-center gap-4 text-lg font-bold mb-4">
            <span>{t.unlockButton}</span>
          </div>
          <div className="flex justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
              </span>
            </div>
            <div>{t.offerExpiry}</div>
          </div>
        </div>
      </div>

      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-garden-dark mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{t.subtitle}</p>
            <div className="text-neon-green font-semibold">
              Hello {quizData.name}! Here's your personalized analysis.
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Left Column - Core Metrics */}
            <div className="lg:col-span-2 space-y-8">
              {/* Fame Score Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-garden-dark flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-400" />
                    {t.fameScore}
                  </h2>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-neon-green">
                      {analysis.fameScore}
                      <span className="text-xl text-gray-400">/100</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">{t.confidenceScore}:</span>
                    <span className="font-semibold text-garden-dark">
                      {analysis.confidenceScore}%
                    </span>
                    <div className="relative">
                      <Info
                        className="w-4 h-4 text-gray-400 cursor-help"
                        onMouseEnter={() => setShowTooltip("confidence")}
                        onMouseLeave={() => setShowTooltip(null)}
                      />
                      {showTooltip === "confidence" && (
                        <div className="absolute bottom-6 left-0 bg-gray-900 text-white text-xs p-2 rounded-lg w-64 z-10">
                          {analysis.confidenceExplanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                  <div
                    className="bg-gradient-to-r from-electric-blue to-neon-green h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${analysis.fameScore}%` }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-garden-dark mb-2">
                      {t.experienceLevel}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {analysis.experienceLevel}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-garden-dark mb-2">
                      {t.currentPhase}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {analysis.monetizationRoadmap.currentPhase}
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth Trajectory */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-garden-dark flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-neon-green" />
                  {t.growthTrajectory}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {analysis.growthTrajectory}
                </p>
              </div>

              {/* Income Projection */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-garden-dark flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-electric-blue" />
                  {t.incomeProjection}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-gray-500 text-sm mb-2">Current</div>
                    <div className="text-2xl font-bold text-garden-dark">
                      {analysis.monetizationRoadmap.incomeProjection.current}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-sm mb-2">3 Months</div>
                    <div className="text-2xl font-bold text-neon-green">
                      {analysis.monetizationRoadmap.incomeProjection.threeMonth}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-sm mb-2">6 Months</div>
                    <div className="text-2xl font-bold text-electric-blue">
                      {analysis.monetizationRoadmap.incomeProjection.sixMonth}
                    </div>
                  </div>
                </div>
              </div>

              {/* SWOT Analysis */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-garden-dark flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-soft-violet" />
                  {t.swotAnalysis}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neon-green mb-3">
                      ✅ {t.strengths}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.strengths.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-600 mb-3">
                      ⚠️ {t.weaknesses}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.weaknesses.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 border-2 border-yellow-600 rounded-full mt-0.5 flex-shrink-0"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-electric-blue mb-3">
                      🚀 {t.opportunities}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.opportunities.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 bg-electric-blue rounded-full mt-0.5 flex-shrink-0"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-3">
                      ⚡ {t.threats}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.threats.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 border-2 border-red-500 rounded-full mt-0.5 flex-shrink-0"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personalized Recommendations */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-garden-dark mb-6">
                  {t.recommendations}
                </h2>
                <div className="space-y-4">
                  {analysis.personalizedRecommendations.map(
                    (rec: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-6 h-6 bg-neon-green text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-600">{rec}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Payment Wall & CTA */}
            <div className="space-y-8">
              {/* Payment CTA Section */}
              <div className="bg-gradient-to-br from-neon-green to-electric-blue rounded-2xl p-6 text-black sticky top-4">
                <h3 className="text-2xl font-bold mb-4">{t.downloads}</h3>

                <div className="space-y-3 mb-6">
                  {t.paymentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold mb-2">₹99</div>
                  <div className="text-sm opacity-80">One-time payment</div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full bg-black text-white font-bold py-4 rounded-lg text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <CreditCard className="w-5 h-5" />
                  {t.unlockButton}
                </button>

                <div className="text-center text-sm opacity-80">
                  {t.paymentSecurity}
                </div>

                <div className="flex items-center justify-center gap-4 mt-3 text-xs">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>SSL Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </div>

              {/* Content Strategy */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-garden-dark mb-4">
                  {t.contentStrategy}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Posting Frequency
                    </div>
                    <div className="text-garden-dark">
                      {analysis.contentStrategy.posting}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Content Mix
                    </div>
                    <div className="space-y-1">
                      {analysis.contentStrategy.contentTypes.map(
                        (type: string, index: number) => (
                          <div key={index} className="text-garden-dark text-sm">
                            • {type}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Best Posting Times
                    </div>
                    <div className="text-garden-dark">
                      {analysis.contentStrategy.bestTimes}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {Object.values(quizData.socialLinks).some((link) => link) && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-garden-dark mb-4">
                    Your Profiles
                  </h3>
                  <div className="space-y-3">
                    {quizData.socialLinks.instagram && (
                      <a
                        href={quizData.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-pink-500 hover:text-pink-400 transition-colors"
                      >
                        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                          📷
                        </div>
                        Instagram
                      </a>
                    )}
                    {quizData.socialLinks.youtube && (
                      <a
                        href={quizData.socialLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-red-500 hover:text-red-400 transition-colors"
                      >
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          ▶️
                        </div>
                        YouTube
                      </a>
                    )}
                    {quizData.socialLinks.linkedin && (
                      <a
                        href={quizData.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          💼
                        </div>
                        LinkedIn
                      </a>
                    )}
                    {quizData.socialLinks.website && (
                      <a
                        href={quizData.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-500 transition-colors"
                      >
                        <Globe className="w-8 h-8" />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
