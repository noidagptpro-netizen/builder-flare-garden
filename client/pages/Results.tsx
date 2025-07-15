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
  experience: string;
  monthlyIncome: string;
  biggestChallenge: string;
  goals: string;
  socialLinks: {
    instagram: string;
    youtube: string;
    linkedin: string;
    website: string;
  };
  bio: string;
  language: string;
}

const languages = {
  english: {
    title: "Your Fame Score Results",
    subtitle: "Personalized analysis based on your creator profile",
    limitedOffer: "🎁 LIMITED TIME OFFER",
    offerDescription:
      "These premium insights and downloads are available for creators with verified profiles.",
    offerExpiry: "Offer valid until: July 20, 2025",
    unlockButton: "Unlock Complete Analysis - ₹99",
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
    downloads: "🎁 Your Downloads Are Ready!",
    downloadItems: [
      "Personalized Media Kit PDF",
      "Custom Creator Bio Templates",
      "Brand Outreach Templates",
      "Professional Pricing Template",
      "Live Profile Page",
      "AI Growth Strategy",
    ],
  },
  hindi: {
    title: "आपके फेम स्कोर परिणाम",
    subtitle: "आपकी क्रिएटर प्रोफाइल के आधार पर व्यक्तिगत विश्लेषण",
    limitedOffer: "🎁 सीमित समय का ऑफर",
    offerDescription:
      "ये प्रीमियम अंतर्दृष्टि और डाउनलोड वेरिफाइड प्रोफाइल वाले क्रिएटर्स के लिए उपलब्ध हैं।",
    offerExpiry: "ऑफर की अवधि: 20 जुलाई, 2025 तक",
    unlockButton: "पूर्ण विश्लेषण अनलॉक करें - ₹99",
    fameScore: "फेम स्कोर",
    confidenceScore: "कॉन्फिडेंस स्कोर",
    experienceLevel: "अनुभव स्तर",
    growthTrajectory: "ग्रोथ ट्रैजेक्टरी",
    swotAnalysis: "SWOT विश्लेषण",
    strengths: "शक्तियां",
    weaknesses: "कमजोरियां",
    opportunities: "��वसर",
    threats: "खतरे",
    monetization: "मॉनेटाइज़ेशन रोडमैप",
    currentPhase: "वर्तमान चरण",
    incomeProjection: "आय अनुमान",
    nextSteps: "अगले कदम",
    recommendations: "व्यक्तिगत सुझाव",
    contentStrategy: "कंटेंट रणनीति",
    downloads: "🎁 आपके डाउनलोड तैयार हैं!",
    downloadItems: [
      "व्यक्तिगत मीडिया किट PDF",
      "कस्टम क्रिएटर बायो टेम्प्लेट",
      "ब्रांड आउटरीच टेम्प्लेट",
      "प्रोफेशनल रेट कार्ड",
      "लाइव प्रोफाइल पेज",
      "AI ग्रोथ स्ट्रैटेजी",
    ],
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

  if (!quizData || !analysis) {
    return (
      <div className="min-h-screen bg-fame-darker flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Analyzing your creator profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fame-darker">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-white">
            FameChase<span className="text-neon-green">.com</span>
          </Link>

          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "english" | "hindi")
              }
              className="bg-fame-dark border border-gray-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>

            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Limited Time Offer Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="font-bold text-lg mb-2">{t.limitedOffer}</div>
          <div className="text-sm opacity-90 mb-2">{t.offerDescription}</div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-fame-darker via-fame-dark to-fame-darker"></div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{t.subtitle}</p>
            <div className="text-neon-green font-semibold">
              Hello {quizData.name}! Here's your personalized analysis.
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Left Column - Core Metrics */}
            <div className="lg:col-span-2 space-y-8">
              {/* Fame Score Card */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
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
                    <span className="text-gray-300">{t.confidenceScore}:</span>
                    <span className="font-semibold text-white">
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

                <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                  <div
                    className="bg-gradient-to-r from-electric-blue to-neon-green h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${analysis.fameScore}%` }}
                  ></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t.experienceLevel}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {analysis.experienceLevel}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t.currentPhase}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {analysis.monetizationRoadmap.currentPhase}
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth Trajectory */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-neon-green" />
                  {t.growthTrajectory}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {analysis.growthTrajectory}
                </p>
              </div>

              {/* Income Projection */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-electric-blue" />
                  {t.incomeProjection}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Current</div>
                    <div className="text-2xl font-bold text-white">
                      {analysis.monetizationRoadmap.incomeProjection.current}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">3 Months</div>
                    <div className="text-2xl font-bold text-neon-green">
                      {analysis.monetizationRoadmap.incomeProjection.threeMonth}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">6 Months</div>
                    <div className="text-2xl font-bold text-electric-blue">
                      {analysis.monetizationRoadmap.incomeProjection.sixMonth}
                    </div>
                  </div>
                </div>
              </div>

              {/* SWOT Analysis */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
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
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                      ⚠️ {t.weaknesses}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.weaknesses.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 border-2 border-yellow-400 rounded-full mt-0.5 flex-shrink-0"></div>
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
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 bg-electric-blue rounded-full mt-0.5 flex-shrink-0"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">
                      ⚡ {t.threats}
                    </h3>
                    <ul className="space-y-2">
                      {analysis.swotAnalysis.threats.map(
                        (item: string, index: number) => (
                          <li
                            key={index}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <div className="w-4 h-4 border-2 border-red-400 rounded-full mt-0.5 flex-shrink-0"></div>
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personalized Recommendations */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t.recommendations}
                </h2>
                <div className="space-y-4">
                  {analysis.personalizedRecommendations.map(
                    (rec: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-fame-darker rounded-lg"
                      >
                        <div className="w-6 h-6 bg-neon-green text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-300">{rec}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Downloads & CTA */}
            <div className="space-y-8">
              {/* Downloads Section */}
              <div className="bg-fame-dark border border-neon-green rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t.downloads}
                </h3>
                <div className="space-y-3 mb-6">
                  {t.downloadItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-fame-darker rounded-lg opacity-50"
                    >
                      <Download className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 rounded-lg text-lg hover:opacity-90 transition-opacity">
                  {t.unlockButton}
                </button>
              </div>

              {/* Content Strategy */}
              <div className="bg-fame-dark border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t.contentStrategy}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Posting Frequency
                    </div>
                    <div className="text-white">
                      {analysis.contentStrategy.posting}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Content Mix
                    </div>
                    <div className="space-y-1">
                      {analysis.contentStrategy.contentTypes.map(
                        (type: string, index: number) => (
                          <div key={index} className="text-white text-sm">
                            • {type}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Best Posting Times
                    </div>
                    <div className="text-white">
                      {analysis.contentStrategy.bestTimes}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {Object.values(quizData.socialLinks).some((link) => link) && (
                <div className="bg-fame-dark border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Your Profiles
                  </h3>
                  <div className="space-y-3">
                    {quizData.socialLinks.instagram && (
                      <a
                        href={quizData.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-pink-400 hover:text-pink-300 transition-colors"
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
                        className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
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
                        className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
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
                        className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors"
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
