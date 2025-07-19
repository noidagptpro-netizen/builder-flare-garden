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
  Home,
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

const languages = {
  english: {
    title: "Your Creator Analysis",
    subtitle: "Complete personalized insights for your creator journey",
    profileSynopsis: "Profile Synopsis",
    creatorProfile: "Creator Profile",
    currentStatus: "Current Status",
    swotAnalysis: "SWOT Analysis",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
    opportunities: "Opportunities",
    threats: "Threats",
    keySuggestions: "Key Suggestions",
    creatorVitalStats: "Your Creator Vital Stats",
    fameScore: "Fame Score",
    growthPotential: "Growth Potential",
    incomeProjection: "Income Potential",
    unlock: "Unlock Your Complete Creator Toolkit",
    unlockSubtitle:
      "Get your personalized Fame Score Report, Professional Media Kit Template, and Growth Strategy + access to our complete premium creator tools.",
    paymentForm: "Complete Your Information",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    city: "City",
    age: "Age",
    paySecure: "Pay ₹99 - Secure Payment",
    processing: "Processing...",
    whatYouGet: "What you'll get after payment:",
    fameScoreReport: "Fame Score Report",
    mediaKitTemplate: "Media Kit Template",
    growthStrategy: "Growth Strategy",
    premiumTools: "Premium Tools",
    securePayment: "Secure payment",
    instantDownload: "Instant download",
    moneyBack: "Money-back guarantee",
    backToQuiz: "Back to Quiz",
    basedOnEngagement: "Based on engagement potential",
    nextSixMonths: "Next 6 months projection",
    monthlyTarget: "Monthly achievable target",
    primaryPlatform: "Primary Platform:",
    contentNiche: "Content Niche:",
    contentType: "Content Type:",
    postingFrequency: "Posting Frequency:",
    followers: "Followers:",
    monthlyIncome: "Monthly Income:",
    experienceLevel: "Experience Level:",
    activePlatforms: "Active Platforms:",
    competitorAnalysis: "Competitor Analysis",
    marketInsights: "Market Insights",
  },
  hindi: {
    title: "आपका क्रिएटर विश्लेष���",
    subtitle: "आपकी क्रिएटर यात्रा के लिए संपूर्ण व्यक्��िगत अंतर्दृष्टि",
    profileSynopsis: "प्रोफाइल सिनॉप्सिस",
    creatorProfile: "क्रिएटर प्रोफाइल",
    currentStatus: "वर्तमान स्थिति",
    swotAnalysis: "SWOT विश्लेषण",
    strengths: "मजबूती",
    weaknesses: "कमजोरी",
    opportunities: "अवसर",
    threats: "खतरे",
    keySuggestions: "मुख्य सुझाव",
    creatorVitalStats: "आपके क्रिएटर महत्वपूर्ण आंकड़े",
    fameScore: "फेम स्कोर",
    growthPotential: "विकास क्षमता",
    incomeProjection: "आय क्षमता",
    unlock: "अपना संपूर्ण क्रिएटर टूलकिट अनलॉक करें",
    unlockSubtitle:
      "अपनी व्यक्तिगत फेम स्कोर रिपोर्ट, प्��ोफेशनल मीडिया किट टेम्प्लेट, और ग्रोथ स्ट्रैटेज�� + हमारे संपूर्ण प्रीमियम क्रिएटर टूल्स तक पहुंच प्राप्त ��रें।",
    paymentForm: "अप���ी जानकारी पूरी करें",
    fullName: "पूरा नाम",
    emailAddress: "ईमेल पता",
    phoneNumber: "फोन नंबर",
    city: "शहर",
    age: "उम्र",
    paySecure: "₹99 भुगतान करें - सुरक्षित भुगतान",
    processing: "प्रसंस्करण...",
    whatYouGet: "भुगतान के बाद आपको मिलेगा:",
    fameScoreReport: "फेम स्कोर रिपोर्ट",
    mediaKitTemplate: "मीडिया किट टेम्प्लेट",
    growthStrategy: "ग्रोथ स्ट्रैटेजी",
    premiumTools: "प्रीमियम टूल्स",
    securePayment: "सुरक्षित भुगतान",
    instantDownload: "तुरंत डाउनलोड",
    moneyBack: "पैसे वापसी की गारंटी",
    backToQuiz: "क्विज़ पर वापस जाएं",
    basedOnEngagement: "एंगेजमेंट क्षमता के ��धार पर",
    nextSixMonths: "अगले 6 महीने का प्रक्षेपण",
    monthlyTarget: "मासिक प्राप्त करन�� योग्य लक्ष्य",
    primaryPlatform: "प्राथमिक प्लेटफॉर्म:",
    contentNiche: "कंटेंट निच:",
    contentType: "कंटेंट प्रकार:",
    postingFrequency: "पोस्टिंग आवृत्ति:",
    followers: "फॉलोअर्स:",
    monthlyIncome: "मासिक आय:",
    experienceLevel: "अनुभव स्तर:",
    activePlatforms: "सक्रिय प्लेटफॉर्म:",
    competitorAnalysis: "प्रतियोगी विश्लेषण",
    marketInsights: "बाजार अंतर्दृष्टि",
  },
};

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
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const t = languages[language];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWorldwidePhone = (phone: string): boolean => {
    // Accept worldwide phone numbers with country codes
    const phoneRegex =
      /^(\+\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return (
      phoneRegex.test(phone.replace(/\s+/g, "")) &&
      phone.length >= 7 &&
      phone.length <= 18
    );
  };

  const validateAge = (age: string): boolean => {
    const ageNum = parseInt(age);
    return !isNaN(ageNum) && ageNum >= 13 && ageNum <= 80;
  };

  const validateName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!validateName(personalInfo.name)) {
      errors.name = "Name is required (minimum 2 characters)";
    }

    if (!validateEmail(personalInfo.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateWorldwidePhone(personalInfo.phone)) {
      errors.phone =
        "Please enter a valid phone number with country code (e.g., +91 9876543210)";
    }

    if (!validateAge(personalInfo.age)) {
      errors.age = "Age must be between 13 and 80";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("fameChaseQuizData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setQuizData(data);
      setLanguage(data.language || "english");
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
    // Validate form before proceeding
    if (!validateForm()) {
      return;
    }

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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For now, simulate successful payment
    setPaymentSuccess(true);
    setIsSubmitting(false);
  };

  const generateDownload = (type: string, fileName: string) => {
    if (!quizData || !analysis) return;

    let content = "";
    const userName = personalInfo.name || quizData.name || "Creator";

    // Add font size indicator for 3X larger display
    const fontSizeIndicator = `
=== DISPLAY INSTRUCTIONS ===
Recommended Font Size: 24pt (3X larger than standard)
For best readability, increase font size in your PDF viewer or word processor.
Optimal zoom: 150-200% for comfortable reading.
==============================

`;

    if (type === "fameScore") {
      content = `${language === "hindi" ? "फेम स्कोर रिपोर्ट" : "FAME SCORE REPORT"} - ${userName}

${language === "hindi" ? "व्यक्तिगत विश्लेषण:" : "PERSONAL ANALYSIS:"}
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "फेम स्कोर:" : "Fame Score:"} ${analysis.fameScore}/100
${language === "hindi" ? "विकास क्षमता:" : "Growth Potential:"} ${analysis.growthPotential}%
${language === "hindi" ? "आय प्रक्षेपण:" : "Income Projection:"} ${analysis.incomeProjection}

${language === "hindi" ? "प्रोफाइल सारांश:" : "PROFILE SUMMARY:"}
${language === "hindi" ? "प्लेटफॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche}
${language === "hindi" ? "फॉलोअर्स:" : "Followers:"} ${quizData.followerCount}
${language === "hindi" ? "मासिक आय:" : "Monthly Income:"} ${quizData.monthlyIncome}

${language === "hindi" ? "मजबूती:" : "STRENGTHS:"}
${analysis.swotAnalysis.strengths.map((s: string, i: number) => `${i + 1}. ${s}`).join("\n")}

${language === "hindi" ? "सु��ार के क्षेत्र:" : "AREAS FOR IMPROVEMENT:"}
${analysis.swotAnalysis.weaknesses.map((w: string, i: number) => `${i + 1}. ${w}`).join("\n")}

${language === "hindi" ? "अवसर:" : "OPPORTUNITIES:"}
${analysis.swotAnalysis.opportunities.map((o: string, i: number) => `${i + 1}. ${o}`).join("\n")}

${language === "hindi" ? "मुख्य सुझाव:" : "KEY RECOMMENDATIONS:"}
${analysis.suggestions.map((s: string, i: number) => `${i + 1}. ${s}`).join("\n")}

${language === "hindi" ? "अगले कदम:" : "NEXT STEPS:"}
${language === "hindi" ? "1. अपनी कंटेंट रणनीति को अनुकूलित करें" : "1. Optimize your content strategy"}
${language === "hindi" ? "2. ब्रांड पार्टनरशिप के लिए तैयार हो जाएं" : "2. Prepare for brand partnerships"}
${language === "hindi" ? "3. अपने एंगेज��ेंट मेट्रिक्स को ब���हतर बनाएं" : "3. Improve your engagement metrics"}

${language === "hindi" ? "जेनरेट किया गया:" : "Generated:"} ${new Date().toLocaleDateString()}`;
    } else if (type === "mediaKit") {
      content = `${language === "hindi" ? "प्रोफेशनल मीडिया किट" : "PROFESSIONAL MEDIA KIT"} - ${userName}

${language === "hindi" ? "व्यक्तिगत जानकारी:" : "PERSONAL INFORMATION:"}
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "ईमेल:" : "Email:"} ${personalInfo.email}
${language === "hindi" ? "फोन:" : "Phone:"} ${personalInfo.phone}
${language === "hindi" ? "शहर:" : "City:"} ${personalInfo.city}

${language === "hindi" ? "सोशल मीडिया प्रोफाइल:" : "SOCIAL MEDIA PROFILES:"}
${language === "hindi" ? "प्राथमिक प्लेटफॉर्म:" : "Primary Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "फॉलोअर्���:" : "Followers:"} ${quizData.followerCount}
${language === "hindi" ? "कंटेंट निच:" : "Content Niche:"} ${quizData.niche}
${language === "hindi" ? "कंटेंट प्रकार:" : "Content Type:"} ${quizData.contentType}

${language === "hindi" ? "प्रदर्शन मेट्रिक्स:" : "PERFORMANCE METRICS:"}
${language === "hindi" ? "फ���म स्कोर:" : "Fame Score:"} ${analysis.fameScore}/100
${language === "hindi" ? "एंगेजमेंट रेट:" : "Engagement Rate:"} ${language === "hindi" ? "उच्च गुणवत्ता" : "High Quality"}
${language === "hindi" ? "मासिक रीच:" : "Monthly Reach:"} ${language === "hindi" ? "व्यापक दर्शक" : "Wide Audience"}

${language === "hindi" ? "सुझावित दरें (भारतीय बाजार आधारित):" : "SUGGESTED RATES (Indian Market Based):"}
${language === "hindi" ? "Instagram पोस्ट:" : "Instagram Post:"} ₹${quizData.followerCount.includes("Less than 1K") ? "200-500" : quizData.followerCount.includes("1K - 5K") ? "500-1,000" : "1,000-3,000"}
${language === "hindi" ? "Instagram रील:" : "Instagram Reel:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "Instagram स्टोरी:" : "Instagram Story:"} ₹${quizData.followerCount.includes("Less than 1K") ? "100-300" : quizData.followerCount.includes("1K - 5K") ? "300-500" : "500-1,500"}
${language === "hindi" ? "YouTube शॉर्ट:" : "YouTube Short:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "YouTube वीडियो मेंशन:" : "YouTube Video Mention:"} ₹${quizData.followerCount.includes("Less than 1K") ? "1,000-2,000" : quizData.followerCount.includes("1K - 5K") ? "2,000-3,000" : "3,000-8,000"}

${language === "hindi" ? "विशेषताएं:" : "SPECIALTIES:"}
- ${analysis.suggestions.slice(0, 3).join("\n- ")}

${language === "hindi" ? "संपर्क:" : "CONTACT INFORMATION:"}
${language === "hindi" ? "ईमेल:" : "Email:"} ${personalInfo.email}
${language === "hindi" ? "फोन:" : "Phone:"} ${personalInfo.phone}
${language === "hindi" ? "वेबसाइट:" : "Website:"} ${quizData.socialLinks.website || "Available upon request"}`;
    } else if (type === "growthStrategy") {
      content = `${language === "hindi" ? "व्यक्तिगत विकास रणनीति" : "PERSONALIZED GROWTH STRATEGY"} - ${userName}

${language === "hindi" ? "वर्तमान स्थिति विश्लेषण:" : "CURRENT SITUATION ANALYSIS:"}
${language === "hindi" ? "फॉलो���र्स:" : "Followers:"} ${quizData.followerCount}
${language === "hindi" ? "मुख्य चुनौतियां:" : "Main Challenges:"} ${quizData.biggestChallenge.slice(0, 3).join(", ")}
${language === "hindi" ? "मुख्य लक्ष्य:" : "Primary Goals:"} ${quizData.goals.slice(0, 3).join(", ")}
${language === "hindi" ? "वर्तमान आय:" : "Current Income:"} ${quizData.monthlyIncome}

${language === "hindi" ? "30-दि�� की कार्य ���ोजना:" : "30-DAY ACTION PLAN:"}
${language === "hindi" ? "सप्ताह 1-2:" : "Week 1-2:"}
${analysis.suggestions
  .slice(0, 2)
  .map((s: string, i: number) => `${i + 1}. ${s}`)
  .join("\n")}

${language === "hindi" ? "सप्ताह 3-4:" : "Week 3-4:"}
${analysis.suggestions
  .slice(2, 4)
  .map((s: string, i: number) => `${i + 3}. ${s}`)
  .join("\n")}

${language === "hindi" ? "60-दिन की रणनीति:" : "60-DAY STRATEGY:"}
${language === "hindi" ? "- कंटेंट कैलेंडर का अनुकूलन" : "- Content calendar optimization"}
${language === "hindi" ? "- ब्रांड आउटरीच शुरू करना" : "- Begin brand outreach"}
${language === "hindi" ? "- एंगेजमेंट मेट्रिक्स में सुधार" : "- Improve engagement metrics"}
${language === "hindi" ? "- नेटवर्किंग और सहयोग" : "- Networking and collaborations"}

${language === "hindi" ? "90-दिन के लक्ष्य:" : "90-DAY GOALS:"}
${language === "hindi" ? "- फॉलोअर वृद्धि:" : "- Follower Growth:"} 30-50%
${language === "hindi" ? "- एंगेजमेंट वृद्धि:" : "- Engagement Increase:"} 40-80%
${language === "hindi" ? "- आय लक्ष्य:" : "- Income Target:"} ${analysis.incomeProjection}
${language === "hindi" ? "- ब्रांड पार्टनरशिप:" : "- Brand Partnerships:"} 2-5 ${language === "hindi" ? "सह��ोग" : "collaborations"}

${language === "hindi" ? "���ुख्य सफलता संकेतक (KPIs):" : "KEY SUCCESS INDICATORS (KPIs):"}
${language === "hindi" ? "- दैनिक एंगेजमेंट रेट" : "- Daily engagement rate"}
${language === "hindi" ? "- साप्ताहिक नए फॉलोअर्स" : "- Weekly new followers"}
${language === "hindi" ? "- मासिक ब्रांड इंक्वायरी" : "- Monthly brand inquiries"}
${language === "hindi" ? "- कंटेंट पहुंच और छाप" : "- Content reach and impressions"}

${language === "hindi" ? "अनुशंसित उपकरण:" : "RECOMMENDED TOOLS:"}
${language === "hindi" ? "- कंटेंट शेड्यूलिंग: Later या Buffer" : "- Content Scheduling: Later or Buffer"}
${language === "hindi" ? "- डिज़ाइन: Canva Pro" : "- Design: Canva Pro"}
${language === "hindi" ? "- एनालिटिक्स: Creator Studio" : "- Analytics: Creator Studio"}
${language === "hindi" ? "- ईमेल मार्केटिंग: Mailchimp" : "- Email Marketing: Mailchimp"}`;
    }

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                FameChase<span className="text-neon-green">.com</span>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value as "english" | "hindi")
                  }
                  className="bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  <option value="english">English</option>
                  <option value="hindi">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "hindi"
                ? "भुगतान सफल! 🎉"
                : "Payment Successful! 🎉"}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {language === "hindi"
                ? "आपका संपूर्ण क्रिएटर टूलकिट तैयार है। अपनी व्यक्तिगत फाइलें डाउनलोड करें।"
                : "Your complete Creator Toolkit is ready. Download your personalized files."}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.fameScoreReport}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === "hindi"
                    ? "आपका व्यक्तिगत फेम स्कोर और विस्तृत विश्लेषण"
                    : "Your personalized fame score and detailed analysis"}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "fameScore",
                      `${personalInfo.name}_Fame_Score_Report_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {language === "hindi" ? "डाउनलोड करें" : "Download"}
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Layout className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.mediaKitTemplate}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === "hindi"
                    ? "ब्रांड्स के लिए आपकी प्रोफेशनल मीडिया किट"
                    : "Your professional media kit for brands"}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "mediaKit",
                      `${personalInfo.name}_Media_Kit_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {language === "hindi" ? "डाउनलोड करें" : "Download"}
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.growthStrategy}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === "hindi"
                    ? "आपकी व्यक्तिगत 90-दिन की विकास रणनीति"
                    : "Your personalized 90-day growth strategy"}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "growthStrategy",
                      `${personalInfo.name}_Growth_Strategy_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {language === "hindi" ? "डाउनलोड करें" : "Download"}
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "hindi"
                  ? "अधिक टूल्स चाहिए?"
                  : "Want More Tools?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "हमारे प्रीमियम क्रिएटर टूल्स के साथ अपनी क्रिएटर यात्रा को तेज़ी से आगे बढ़ाएं।"
                  : "Accelerate your creator journey with our premium creator tools."}
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                {language === "hindi"
                  ? "प्रीमियम टूल्स देखें"
                  : "Browse Premium Tools"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </main>
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
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                to="/quiz"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t.backToQuiz}
              </Link>
              <select
                value={language}
                onChange={(e) =>
                  setLanguage(e.target.value as "english" | "hindi")
                }
                className="bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-lg text-sm font-medium"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
              </select>
            </div>
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
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              {t.subtitle} {quizData.name || ""}
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
              {t.profileSynopsis}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {t.creatorProfile}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">{t.primaryPlatform}</span>{" "}
                    {quizData.primaryPlatform}
                  </p>
                  <p>
                    <span className="font-medium">{t.contentNiche}</span>{" "}
                    {quizData.niche}
                  </p>
                  <p>
                    <span className="font-medium">{t.contentType}</span>{" "}
                    {quizData.contentType}
                  </p>
                  <p>
                    <span className="font-medium">{t.postingFrequency}</span>{" "}
                    {quizData.postingFrequency}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  {t.currentStatus}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">{t.followers}</span>{" "}
                    {quizData.followerCount}
                  </p>
                  <p>
                    <span className="font-medium">{t.monthlyIncome}</span>{" "}
                    {quizData.monthlyIncome}
                  </p>
                  <p>
                    <span className="font-medium">{t.experienceLevel}</span>{" "}
                    {quizData.experience.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">{t.activePlatforms}</span>{" "}
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
              {t.swotAnalysis}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {t.strengths}
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
                  {t.weaknesses}
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
                  {t.opportunities}
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
                  {t.threats}
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
              {t.keySuggestions}
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
              {t.creatorVitalStats}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-700 mb-1">
                  {analysis.fameScore}/100
                </div>
                <div className="text-green-600 font-medium">{t.fameScore}</div>
                <div className="text-sm text-green-600 mt-1">
                  {t.basedOnEngagement}
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
                  {t.growthPotential}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  {t.nextSixMonths}
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-700 mb-1">
                  {analysis.incomeProjection}
                </div>
                <div className="text-purple-600 font-medium">
                  {t.incomeProjection}
                </div>
                <div className="text-sm text-purple-600 mt-1">
                  {t.monthlyTarget}
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
              {t.unlock}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.unlockSubtitle}
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
                    {t.paymentForm}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.fullName}
                      </label>
                      <input
                        type="text"
                        value={personalInfo.name}
                        onChange={(e) => {
                          setPersonalInfo({
                            ...personalInfo,
                            name: e.target.value,
                          });
                          if (formErrors.name) {
                            setFormErrors({ ...formErrors, name: "" });
                          }
                        }}
                        className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-900 bg-white ${
                          formErrors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.emailAddress}
                      </label>
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => {
                          setPersonalInfo({
                            ...personalInfo,
                            email: e.target.value,
                          });
                          if (formErrors.email) {
                            setFormErrors({ ...formErrors, email: "" });
                          }
                        }}
                        className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-900 bg-white ${
                          formErrors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.phoneNumber}
                      </label>
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => {
                          setPersonalInfo({
                            ...personalInfo,
                            phone: e.target.value,
                          });
                          if (formErrors.phone) {
                            setFormErrors({ ...formErrors, phone: "" });
                          }
                        }}
                        className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-900 bg-white ${
                          formErrors.phone
                            ? "border-red-500 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        placeholder="+91 9876543210"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.age}
                        </label>
                        <input
                          type="number"
                          value={personalInfo.age}
                          onChange={(e) => {
                            setPersonalInfo({
                              ...personalInfo,
                              age: e.target.value,
                            });
                            if (formErrors.age) {
                              setFormErrors({ ...formErrors, age: "" });
                            }
                          }}
                          className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-gray-900 bg-white ${
                            formErrors.age
                              ? "border-red-500 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                          placeholder="25"
                          min="13"
                          max="80"
                        />
                        {formErrors.age && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.age}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.city}
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
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 bg-white"
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
                      {t.processing}
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      {t.paySecure}
                      <Shield className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    {t.securePayment}
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {t.instantDownload}
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    {t.moneyBack}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 text-sm text-gray-600">
              <p>{t.whatYouGet}</p>
              <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xs">{t.fameScoreReport}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Layout className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-xs">{t.mediaKitTemplate}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-xs">{t.growthStrategy}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-xs">{t.premiumTools}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
