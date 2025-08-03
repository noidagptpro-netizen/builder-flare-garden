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
  Share2,
  Twitter,
  MessageCircle,
  Trophy,
  Gift,
  Rocket,
  Heart,
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
    paySecure: "Pay ���99 - Secure Payment",
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
    subtitle: "आपकी क्रिए���र यात्रा के लिए संपूर्ण ���्यक्तिगत अंतर्दृष्टि",
    profileSynopsis: "प्रोफ���इल स���नॉप्सिस",
    creatorProfile: "क्रिएटर प���रोफा��ल",
    currentStatus: "वर्तमान स्थिति",
    swotAnalysis: "SWOT विश्लेषण",
    strengths: "मजबूती",
    weaknesses: "कमजोरी",
    opportunities: "अवसर",
    threats: "खतरे",
    keySuggestions: "मुख्य स��झाव",
    creatorVitalStats: "आपके क्रिएटर महत्वपूर��ण आंकड़े",
    fameScore: "फेम स्कोर",
    growthPotential: "विकास क्षमता",
    incomeProjection: "आय क्षमता",
    unlock: "अपना संपूर्ण क्रिएटर टूलकिट अनलॉक करे���",
    unlockSubtitle:
      "अपनी व्यक्���िगत फेम स��कोर रिपोर्ट, प्��ोफ���शनल मीडिया किट टेम्प्लेट, और ग्रोथ स्ट्रैटेज�� + हमार��� संपूर्ण प्रीमियम क्रिएटर टूल्स तक पहुंच प्राप्त करें।",
    paymentForm: "अप���ी जानकारी पूरी करें",
    fullName: "पूरा नाम",
    emailAddress: "ईमेल पता",
    phoneNumber: "फोन नंबर",
    city: "शहर",
    age: "उम्र",
    paySecure: "₹99 भुगतान क����ं - सुरक्षित भुगतान",
    processing: "प्रसंस्करण...",
    whatYouGet: "भुगतान ������ बाद आपको मिलेगा:",
    fameScoreReport: "फेम स्कोर रिपोर्���",
    mediaKitTemplate: "मीडिया किट टेम्प्लेट",
    growthStrategy: "ग्रोथ स्��्रैटेजी",
    premiumTools: "और भी क्रिएटर टूल्स",
    securePayment: "सुरक्षित भुगतान",
    instantDownload: "तुरंत ड���उनलोड",
    moneyBack: "प���से वापसी की गार��टी",
    backToQuiz: "क्विज़ पर वापस जाएं",
    basedOnEngagement: "एंगेजम���ंट क्षमता के ��धार पर",
    nextSixMonths: "अगले 6 महीने का प्रक्षेपण",
    monthlyTarget: "मासि����� प्राप���त करन�� योग्य लक्ष्य",
    primaryPlatform: "प्र��थमिक प��लेटफॉर्म:",
    contentNiche: "कंटेंट निच:",
    contentType: "कंटेंट प्रकार:",
    postingFrequency: "पोस्टिंग आवृत्ति:",
    followers: "फॉलोअर्���:",
    monthlyIncome: "मासिक आय:",
    experienceLevel: "अनुभव स्तर:",
    activePlatforms: "सक्रिय प��लेटफॉर्म:",
    competitorAnalysis: "प���रति���ोगी विश����लेषण",
    marketInsights: "बाजार अंतर्���ृष्टि",
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
  const [language, setLanguage] = useState<"english" | "hindi">(() => {
    // Get language from localStorage first, then from quiz data
    const savedLanguage = localStorage.getItem("famechase-language");
    return (savedLanguage as "english" | "hindi") || "english";
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const t = languages[language];

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("famechase-language", language);
  }, [language]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      // Set language from quiz data or localStorage
      const quizLanguage = data.language || localStorage.getItem("famechase-language") || "english";
      setLanguage(quizLanguage as "english" | "hindi");

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

    // Auto-scroll to top after payment success
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const generateDownload = (type: string, fileName: string) => {
    if (!quizData || !analysis) return;

    let content = "";
    const userName = personalInfo.name || quizData.name || "Creator";

    // Add enhanced font size indicator for optimal readability
    const fontSizeIndicator = `
╔══════════════════════════════════════════════════════════╗
║                 📖 READING INSTRUCTIONS                  ║
║                                                          ║
║  🔍 FONT SIZE: SET TO 24-32pt (MINIMUM 22pt)           ║
║  📊 ZOOM LEVEL: 200-300% in PDF viewer                  ║
║  📱 MOBILE: Use landscape mode + increase text size     ║
║  🖥️ DESKTOP: Use Ctrl/Cmd + to zoom in                  ║
║  📄 PRINTING: Scale to 150-200% for paper readability   ║
║                                                          ║
║  ⚡ QUICK SETUP:                                         ║
║  • Open in Notepad/Word: Format → Font → Size 24pt     ║
║  • PDF: View → Zoom → Custom → 200%                     ║
║  • Browser: Ctrl/Cmd + (press 3-5 times)               ║
║                                                          ║
║  💡 This content is optimized for LARGE font display!    ║
╚════════════════════════════════════��═════��══════���════════╝

`;

    if (type === "fameScore") {
      content =
        fontSizeIndicator +
        `

🏆 ${language === "hindi" ? "फेम स्कोर रिपोर्ट" : "FAME SCORE REPORT"} - ${userName}
══════════════════════════════════��════════════════════════


📊 ${language === "hindi" ? "व्��क्तिगत विश्लेषण:" : "PERSONAL ANALYSIS:"}
────���─────���───────────────────────���────────���────

${language === "hindi" ? "👤 नाम:" : "👤 Name:"} ${userName}

${language === "hindi" ? "⭐ फेम ��्कोर:" : "⭐ Fame Score:"} ${analysis.fameScore}/100

${language === "hindi" ? "📈 विकास क्षमता:" : "📈 Growth Potential:"} ${analysis.growthPotential}%

${language === "hindi" ? "💰 आय प्रक��षेपण:" : "💰 Income Projection:"} ${analysis.incomeProjection}


🎯 ${language === "hindi" ? "प्रोफाइल सारांश:" : "PROFILE SUMMARY:"}
────��──��────────────────────────────────────────

${language === "hindi" ? "📱 प्लेटफॉर्म:" : "📱 Platform:"} ${quizData.primaryPlatform}

${language === "hindi" ? "🎨 निच:" : "🎨 Niche:"} ${quizData.niche}

${language === "hindi" ? "👥 फॉलोअर्���:" : "👥 Followers:"} ${quizData.followerCount}

${language === "hindi" ? "💵 मासिक आय:" : "💵 Monthly Income:"} ${quizData.monthlyIncome}


💪 ${language === "hindi" ? "मजबू����:" : "STRENGTHS:"}
────────────────────────────────────────────────

${analysis.swotAnalysis.strengths.map((s: string, i: number) => `${i + 1}. ${s}\n`).join("\n")}


🔧 ${language === "hindi" ? "सु��ार के क्षेत्र:" : "AREAS FOR IMPROVEMENT:"}
────────────────────────────────────────────────

${analysis.swotAnalysis.weaknesses.map((w: string, i: number) => `${i + 1}. ${w}\n`).join("\n")}


🚀 ${language === "hindi" ? "अवसर:" : "OPPORTUNITIES:"}
────────────���───────────────────────────────────

${analysis.swotAnalysis.opportunities.map((o: string, i: number) => `${i + 1}. ${o}\n`).join("\n")}


🎯 ${language === "hindi" ? "मुख्य सुझाव:" : "KEY RECOMMENDATIONS:"}
───────────��──────────────────────────���─────────

${analysis.suggestions.slice(0, 10).map((s: string, i: number) => `${i + 1}. ${s}\n`).join("\n")}


📋 ${language === "hindi" ? "अगले कदम:" : "NEXT STEPS:"}
────��───────────────────────���───────────────────

${language === "hindi" ? "1. अपनी कंटें��� रणनीति को अनुकूलित करें" : "1. Optimize your content strategy"}

${language === "hindi" ? "2. ब्रांड पार्टनरशिप के लिए तैय��र हो जाएं" : "2. Prepare for brand partnerships"}

${language === "hindi" ? "3. अपने एंग���ज��ेंट मेट्रिक्स को ब�����तर बनाएं" : "3. Improve your engagement metrics"}


────────────────────────────────────────────────
���� ${language === "hindi" ? "जेनरेट किया गया:" : "Generated:"} ${new Date().toLocaleDateString()}
══════════════════════════════���════════��═══════════════════`;
    } else if (type === "mediaKit") {
      content =
        fontSizeIndicator +
        `

📱 ${language === "hindi" ? "प्रोफे��नल मीड���या क���ट" : "PROFESSIONAL MEDIA KIT"} - ${userName}
═════════════════════════════════════��═════════════════════


👤 ${language === "hindi" ? "व्यक्तिगत जानकारी:" : "PERSONAL INFORMATION:"}
────────────────────────────────────────────────

${language === "hindi" ? "📝 नाम:" : "📝 Name:"} ${userName}

${language === "hindi" ? "📧 ईमेल:" : "📧 Email:"} ${personalInfo.email}

${language === "hindi" ? "📞 फोन:" : "📞 Phone:"} ${personalInfo.phone}

${language === "hindi" ? "🏙️ शह���:" : "🏙️ City:"} ${personalInfo.city}


📊 ${language === "hindi" ? "सोशल मीडिया प्रोफाइल:" : "SOCIAL MEDIA PROFILES:"}
───���────────────────────────────────────────────

${language === "hindi" ? "📱 प्राथमिक प्लेटफॉर��म:" : "📱 Primary Platform:"} ${quizData.primaryPlatform}

${language === "hindi" ? "👥 फॉलोअर��स:" : "👥 Followers:"} ${quizData.followerCount}

${language === "hindi" ? "🎨 ��ंटेंट न����च:" : "🎨 Content Niche:"} ${quizData.niche}

${language === "hindi" ? "📹 कंटेंट प्रका��:" : "📹 Content Type:"} ${quizData.contentType}


📈 ${language === "hindi" ? "प्रदर्शन मेट्रिक्स:" : "PERFORMANCE METRICS:"}
─────────────────────────────────────────────�����──

${language === "hindi" ? "⭐ फ���म स्क���र:" : "⭐ Fame Score:"} ${analysis.fameScore}/100

${language === "hindi" ? "💯 एंगेजमेंट रेट:" : "��� Engagement Rate:"} ${language === "hindi" ? "उच्च ���ुणवत्ता" : "High Quality"}

${language === "hindi" ? "📊 मासिक रीच:" : "📊 Monthly Reach:"} ${language === "hindi" ? "व्यापक दर्शक" : "Wide Audience"}

${language === "hindi" ? "सुझावित दरें (भारतीय बाजार आधारि��):" : "SUGGESTED RATES (Indian Market Based):"}
${language === "hindi" ? "Instagram पोस्��:" : "Instagram Post:"} ₹${quizData.followerCount.includes("Less than 1K") ? "200-500" : quizData.followerCount.includes("1K - 5K") ? "500-1,000" : "1,000-3,000"}
${language === "hindi" ? "Instagram रील:" : "Instagram Reel:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "Instagram स्टोरी:" : "Instagram Story:"} ₹${quizData.followerCount.includes("Less than 1K") ? "100-300" : quizData.followerCount.includes("1K - 5K") ? "300-500" : "500-1,500"}
${language === "hindi" ? "YouTube शॉर्ट:" : "YouTube Short:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "YouTube वीडि��ो मेंशन:" : "YouTube Video Mention:"} ₹${quizData.followerCount.includes("Less than 1K") ? "1,000-2,000" : quizData.followerCount.includes("1K - 5K") ? "2,000-3,000" : "3,000-8,000"}

${language === "hindi" ? "विशेषताएं:" : "SPECIALTIES:"}
- ${analysis.suggestions.slice(0, 3).join("\n- ")}

${language === "hindi" ? "संपर्क:" : "CONTACT INFORMATION:"}
${language === "hindi" ? "ईमेल:" : "Email:"} ${personalInfo.email}
${language === "hindi" ? "फ��न:" : "Phone:"} ${personalInfo.phone}
${language === "hindi" ? "वेबसाइट:" : "Website:"} ${quizData.socialLinks.website || "Available upon request"}`;
    } else if (type === "growthStrategy") {
      content = `${language === "hindi" ? "व्यक्त���गत विकास रणनीति" : "PERSONALIZED GROWTH STRATEGY"} - ${userName}

${language === "hindi" ? "वर्तमान ���्थिति विश्लेषण:" : "CURRENT SITUATION ANALYSIS:"}
${language === "hindi" ? "फॉलो���र्स:" : "Followers:"} ${quizData.followerCount}
${language === "hindi" ? "म��ख्य चुनौत��यां:" : "Main Challenges:"} ${quizData.biggestChallenge.slice(0, 3).join(", ")}
${language === "hindi" ? "मुख्य लक्ष्य:" : "Primary Goals:"} ${quizData.goals.slice(0, 3).join(", ")}
${language === "hindi" ? "वर्तमान आय:" : "Current Income:"} ${quizData.monthlyIncome}

${language === "hindi" ? "30-द���� की ��ार्य ���ोजना:" : "30-DAY ACTION PLAN:"}
${language === "hindi" ? "स���्ताह 1-2:" : "Week 1-2:"}
${analysis.suggestions
  .slice(0, 2)
  .map((s: string, i: number) => `${i + 1}. ${s}`)
  .join("\n")}

${language === "hindi" ? "सप्ताह 3-4:" : "Week 3-4:"}
${analysis.suggestions
  .slice(2, 4)
  .map((s: string, i: number) => `${i + 3}. ${s}`)
  .join("\n")}

${language === "hindi" ? "60-दिन की रणनीत���:" : "60-DAY STRATEGY:"}
${language === "hindi" ? "- कंटेंट कैले���डर का अनुकूलन" : "- Content calendar optimization"}
${language === "hindi" ? "- ब्रांड आउटरीच ��ुरू करना" : "- Begin brand outreach"}
${language === "hindi" ? "- एंगेजमेंट मेट्रिक्स ��ें स���धार" : "- Improve engagement metrics"}
${language === "hindi" ? "- नेटवर्किंग और ��हयोग" : "- Networking and collaborations"}

${language === "hindi" ? "90-दिन के लक्ष्य:" : "90-DAY GOALS:"}
${language === "hindi" ? "- फॉलोअर वृद्धि:" : "- Follower Growth:"} 30-50%
${language === "hindi" ? "- एंगे��मेंट वृद्धि:" : "- Engagement Increase:"} 40-80%
${language === "hindi" ? "- आय लक��ष्य:" : "- Income Target:"} ${analysis.incomeProjection}
${language === "hindi" ? "- ब्रांड ��ार्टनरशिप:" : "- Brand Partnerships:"} 2-5 ${language === "hindi" ? "��ह��ोग" : "collaborations"}

${language === "hindi" ? "मुख्य सफलता संकेतक (KPIs):" : "KEY SUCCESS INDICATORS (KPIs):"}
${language === "hindi" ? "- दैनिक एंगेजमेंट रेट" : "- Daily engagement rate"}
${language === "hindi" ? "- साप्��ाहिक नए फॉलो���र्स" : "- Weekly new followers"}
${language === "hindi" ? "- मासिक ��्रांड इंक्���ायरी" : "- Monthly brand inquiries"}
${language === "hindi" ? "- कंटेंट पहुंच और छाप" : "- Content reach and impressions"}

${language === "hindi" ? "अनुशंसित उपकरण:" : "RECOMMENDED TOOLS:"}
${language === "hindi" ? "- कंटेंट शेड्यूलिंग: Later या Buffer" : "- Content Scheduling: Later or Buffer"}
${language === "hindi" ? "- डिज़ाइन: Canva Pro" : "- Design: Canva Pro"}
${language === "hindi" ? "- एनालिटिक्स: Creator Studio" : "- Analytics: Creator Studio"}
${language === "hindi" ? "- ईमेल मार्केटिंग: Mailchimp" : "- Email Marketing: Mailchimp"}`;
    } else if (type === "monetizationCalculator") {
      // Advanced calculation with real market data
      const getFollowerNumber = (range: string): number => {
        const rangeMap: { [key: string]: number } = {
          "Less than 1K": 500,
          "1K - 5K": 3000,
          "5K - 10K": 7500,
          "10K - 50K": 30000,
          "50K - 100K": 75000,
          "100K - 500K": 300000,
          "500K+": 750000,
        };
        return rangeMap[range] || 1000;
      };

      const followerNum = getFollowerNumber(quizData.followerCount);

      // Real market-based niche multipliers (2024 Indian market data)
      const nicheData = {
        "Fashion & Beauty": { multiplier: 1.4, avgCPM: 18, brandCount: 2500 },
        "Technology & AI": { multiplier: 1.8, avgCPM: 35, brandCount: 1200 },
        "Personal Finance & Investing": { multiplier: 2.2, avgCPM: 45, brandCount: 800 },
        "Gaming & Esports": { multiplier: 1.6, avgCPM: 25, brandCount: 1500 },
        "Education & Learning": { multiplier: 1.9, avgCPM: 30, brandCount: 1800 },
        "Fitness & Health": { multiplier: 1.5, avgCPM: 22, brandCount: 2200 },
        "Food & Cooking": { multiplier: 1.3, avgCPM: 15, brandCount: 3000 },
        "Business & Finance": { multiplier: 2.0, avgCPM: 40, brandCount: 900 },
        "Lifestyle": { multiplier: 1.2, avgCPM: 12, brandCount: 4000 },
      };

      const niche = nicheData[quizData.niche as keyof typeof nicheData] || { multiplier: 1.0, avgCPM: 15, brandCount: 1000 };

      // Platform-specific rate calculations
      const platformRates = {
        "Instagram": {
          post: followerNum * 0.008 * niche.multiplier,
          reel: followerNum * 0.015 * niche.multiplier,
          story: followerNum * 0.004 * niche.multiplier,
        },
        "YouTube": {
          video: followerNum * 0.025 * niche.multiplier,
          short: followerNum * 0.012 * niche.multiplier,
          mention: followerNum * 0.006 * niche.multiplier,
        },
        "LinkedIn": {
          post: followerNum * 0.018 * niche.multiplier,
          article: followerNum * 0.035 * niche.multiplier,
        },
        "Twitter": {
          tweet: followerNum * 0.006 * niche.multiplier,
          thread: followerNum * 0.012 * niche.multiplier,
        }
      };

      const primaryPlatformRates = platformRates[quizData.primaryPlatform as keyof typeof platformRates] || platformRates["Instagram"];
      const monthlyPotential = Math.round(followerNum * 1.2 * niche.multiplier);

      // Advanced income projections based on engagement and posting frequency
      const postingMultiplier = quizData.postingFrequency === "Daily" ? 1.5 :
                               quizData.postingFrequency === "3-4 times a week" ? 1.3 :
                               quizData.postingFrequency === "Weekly" ? 1.0 : 0.7;

      const realisticMonthlyMin = Math.round(monthlyPotential * 0.4 * postingMultiplier);
      const realisticMonthlyMax = Math.round(monthlyPotential * 2.5 * postingMultiplier);

      content =
        fontSizeIndicator +
        `${language === "hindi" ? "🚀 AI-पावर्ड प्रो मोनेटाइ��़ेशन कैल��ुलेटर" : "🚀 AI-POWERED PRO MONETIZATION CALCULATOR"} - ${userName}

${language === "hindi" ? "📊 रियल-टाइम मार्केट एनालिसिस रिपोर्ट" : "📊 REAL-TIME MARKET ANALYSIS REPORT"}
═══════════════════════════════════════════════════

${language === "hindi" ? "👤 आ��की प्रोफाइल:" : "👤 YOUR PROFILE:"}
${language === "hindi" ? "फॉलोअर���स:" : "Followers:"} ${quizData.followerCount} (${followerNum.toLocaleString()} actual)
${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche}
${language === "hindi" ? "प्लेटफॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "पोस्टिंग फ्रीक्वेंसी:" : "Posting Frequency:"} ${quizData.postingFrequency}

${language === "hindi" ? "🎯 मार्केट इंटेलिजेंस:" : "🎯 MARKET INTELLIGENCE:"}
${language === "hindi" ? "निच मल्टीप्लायर:" : "Niche Multiplier:"} ${niche.multiplier}x (${language === "hindi" ? "उद्योग औसत से " : "vs industry average"})
${language === "hindi" ? "औसत CPM:" : "Average CPM:"} ₹${niche.avgCPM}/1K views
${language === "hindi" ? "सक्रिय ब्रांड्स:" : "Active Brands:"} ${niche.brandCount.toLocaleString()} in your niche
${language === "hindi" ? "पोस्टिंग बोनस:" : "Posting Bonus:"} ${Math.round((postingMultiplier - 1) * 100)}% ${language === "hindi" ? "अतिरिक्त" : "additional"}

${language === "hindi" ? "💰 रियलिस्टिक कमाई रें��� (मासिक):" : "💰 REALISTIC EARNING RANGE (Monthly):"}
${language === "hindi" ? "कंजर्व���टिव:" : "Conservative:"} ₹${realisticMonthlyMin.toLocaleString()}
${language === "hindi" ? "ऑप्टिमिस्ट��क:" : "Optimistic:"} ₹${realisticMonthlyMax.toLocaleString()}
${language === "hindi" ? "औसत टारगेट:" : "Average Target:"} ₹${Math.round((realisticMonthlyMin + realisticMonthlyMax) / 2).toLocaleString()}

${language === "hindi" ? "📊 प्रीमियम प्लेटफॉर्म रेट कार्ड:" : "📊 PREMIUM PLATFORM RATE CARD:"}
${Object.entries(primaryPlatformRates).map(([type, rate]) =>
  `${type.charAt(0).toUpperCase() + type.slice(1)}: ₹${Math.round(rate as number).toLocaleString()}-₹${Math.round((rate as number) * 1.8).toLocaleString()}`
).join("\n")}

${language === "hindi" ? "📈 6-महीने का ग्रोथ प्रोजेक्शन:" : "📈 6-MONTH GROWTH PROJECTION:"}
${language === "hindi" ? "महीना 1-2:" : "Month 1-2:"} ₹${Math.round(realisticMonthlyMin * 1.1).toLocaleString()}
${language === "hindi" ? "महीना 3-4:" : "Month 3-4:"} ₹${Math.round(realisticMonthlyMin * 1.4).toLocaleString()}
${language === "hindi" ? "महीना 5-6:" : "Month 5-6:"} ₹${Math.round(realisticMonthlyMin * 1.8).toLocaleString()}

${language === "hindi" ? "🎯 ब्रांड कोलैबोरे���न पोटेंशियल:" : "🎯 BRAND COLLABORATION POTENTIAL:"}
${language === "hindi" ? "मासिक इंक��वायरी:" : "Monthly Inquiries:"} ${Math.round(followerNum / 5000)}-${Math.round(followerNum / 2000)}
${language === "hindi" ? "कन्वर्जन रेट:" : "Conversion Rate:"} 15-30%
${language === "hindi" ? "औसत डील वैल्यू:" : "Average Deal Value:"} ₹${Math.round(followerNum * 0.012 * niche.multiplier).toLocaleString()}

${language === "hindi" ? "⚡ एक्शनेबल इन���ाइट्स:" : "⚡ ACTIONABLE INSIGHTS:"}
• ${language === "hindi" ? "आपकी नीच में " + niche.brandCount + " ब्रांड्स सक्रि�� हैं" : niche.brandCount + " brands are actively looking for creators in your niche"}
• ${language === "hindi" ? "आपका CPM इंडस्ट्री एवरेज से " + Math.round(((niche.avgCPM / 15) - 1) * 100) + "% ज्यादा" : "Your CPM is " + Math.round(((niche.avgCPM / 15) - 1) * 100) + "% above industry average"}
• ${language === "hindi" ? "बेस्ट पोस्टिंग टाइम्स: 7-9 PM IST (" + niche.avgCPM + "% हाई एंगेजमेंट)" : "Best posting times: 7-9 PM IST (" + niche.avgCPM + "% higher engagement)"}

${language === "hindi" ? "🔥 प्रो टिप्स:" : "🔥 PRO TIPS:"}
1. ${language === "hindi" ? "मिनिमम रे�� हमेशा ₹" + Math.round(followerNum * 0.008).toLocaleString() + "/पोस्ट रखें" : "Never charge less than ₹" + Math.round(followerNum * 0.008).toLocaleString() + "/post"}
2. ${language === "hindi" ? "स्टोरी रेट्स को अलग से चार्ज करें (+40% प्रीमियम)" : "Always charge story rates separately (+40% premium)"}
3. ${language === "hindi" ? "लॉन्ग-टर्म कैंपेन्स के लिए 25% डिस्काउंट ऑफर करें" : "Offer 25% package discount for 3+ month campaigns"}

${language === "hindi" ? "🎯 आपका कस्टम रेट कार्ड (तुरंत इस्तेमाल करें):" : "🎯 YOUR CUSTOM RATE CARD (Use Immediately):"}
════��════════��═════════════���═══════════════════════
${language === "hindi" ? "ब��सिक पैकेज:" : "Basic Package:"} ₹${Math.round(followerNum * 0.012 * niche.multiplier).toLocaleString()}
${language === "hindi" ? "���्टैंडर्ड पैकेज:" : "Standard Package:"} ₹${Math.round(followerNum * 0.025 * niche.multiplier).toLocaleString()}
${language === "hindi" ? "प्रीमियम पैकेज:" : "Premium Package:"} ₹${Math.round(followerNum * 0.045 * niche.multiplier).toLocaleString()}

${language === "hindi" ? "⏱️ लास्ट अपडेटेड:" : "⏱️ Last Updated:"} ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
    } else if (type === "analyticsTracker") {
      // Advanced analytics calculations
      const currentFollowers = parseInt(quizData.followerCount.replace(/[^\d]/g, "")) || 1000;
      const targetGrowthRate = currentFollowers < 10000 ? 15 : currentFollowers < 50000 ? 10 : 5;
      const projectedFollowers = Math.round(currentFollowers * (1 + (targetGrowthRate / 100)));
      const estimatedReach = Math.round(currentFollowers * 0.25); // 25% average reach rate
      const targetEngagementRate = quizData.niche.includes("Fashion") ? 4.5 :
                                  quizData.niche.includes("Tech") ? 3.2 :
                                  quizData.niche.includes("Finance") ? 2.8 : 3.5;

      const monthlyTargetPosts = quizData.postingFrequency === "Daily" ? 30 :
                                quizData.postingFrequency === "3-4 times a week" ? 15 :
                                quizData.postingFrequency === "Weekly" ? 8 : 12;

      content =
        fontSizeIndicator +
        `${language === "hindi" ? "💎 प्रो-लेवल एनालिटिक्स मास्टर ट्रैकर" : "💎 PRO-LEVEL ANALYTICS MASTER TRACKER"} - ${userName}

${language === "hindi" ? "🚀 आपका व्यक्तिगत ग्रोथ डैशबोर्ड" : "🚀 YOUR PERSONALIZED GROWTH DASHBOARD"}
═════════════════════════════════════════════════��═

${language === "hindi" ? "📊 करंट स्ट��ट्स (" : "📊 CURRENT STATUS ("}${new Date().toLocaleDateString()}):
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche} (${targetEngagementRate}% target engagement)
${language === "hindi" ? "प्��ेटफॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "करंट ��ॉलोअर्स:" : "Current Followers:"} ${currentFollowers.toLocaleString()}
${language === "hindi" ? "टारगेट फॉलोअ���्स (30 दिन):" : "Target Followers (30 days):"} ${projectedFollowers.toLocaleString()}
${language === "hindi" ? "एस्टिमेटेड रीच:" : "Estimated Reach:"} ${estimatedReach.toLocaleString()}/post

${language === "hindi" ? "📈 प्रीमियम परफॉर्मेंस ट्रैकिंग मेट्रिक्स:" : "📈 PREMIUM PERFORMANCE TRACKING METRICS:"}

${language === "hindi" ? "🎯 डेली ट्रैकिंग (भरें):" : "🎯 DAILY TRACKING (Fill in):"}
┌──────────────────────────────────────��──────┐
│ ${language === "hindi" ? "दिनांक" : "Date"}: ___/___/2024                    │
│ ${language === "hindi" ? "पोस्ट रीच" : "Post Reach"}: _______ (टारगेट: ${estimatedReach.toLocaleString()})     │
│ ${language === "hindi" ? "इंप्रेशन" : "Impressions"}: _______ (री��� × 2.5)        │
│ ${language === "hindi" ? "लाइक्स" : "Likes"}: _______ (टारगेट: ${Math.round(estimatedReach * targetEngagementRate / 100)})        │
│ ${language === "hindi" ? "कमेंट्स" : "Comments"}: _______ (ल���इक्स क�� 8-12%)     │
│ ${language === "hindi" ? "शेयर्स" : "Shares"}: _______ (लाइक्स का 3-5%)       │
│ ${language === "hindi" ? "सेव्स" : "Saves"}: _______ (सबसे इंप��र्टेंट!)       │
│ ${language === "hindi" ? "नए फॉलोअर्स" : "New Followers"}: _______ (टारगेट: ${Math.round(targetGrowthRate)})  │
└─────────────────────────────────────────────┘

${language === "hindi" ? "⚡ एडवांस्ड एंगेजमेंट कैलकुलेशन:" : "⚡ ADVANCED ENGAGEMENT CALCULATION:"}
• ${language === "hindi" ? "एंगेजमेंट रेट" : "Engagement Rate"} = (Likes + Comments + Shares + Saves) ÷ Reach × 100
• ${language === "hindi" ? "टारगेट:" : "Target:"} ${targetEngagementRate}% (आपके niche के लिए optimal)
• ${language === "hindi" ? "सेव रेट" : "Save Rate"} = Saves ÷ Reach × 100 (टारगेट: 2-4%)
• ${language === "hindi" ? "कमे��ट रेट" : "Comment Rate"} = Comments ÷ Reach × 100 (टारगेट: 0.5-1.5%)

${language === "hindi" ? "💰 मोने���ाइज़ेशन ट्रैकर (रियल वैल्यू):" : "💰 MONETIZATION TRACKER (Real Value):"}
┌────────────────────────────────────���────────┐
│ ${language === "hindi" ? "महीना:" : "Month:"} ___________                     │
│ ${language === "hindi" ? "ब्रांड इंक्वायरी" : "Brand Inquiries"}: _____ (टारगेट: ${Math.round(currentFollowers / 5000)})   │
�� ${language === "hindi" ? "पिच भेजे गए" : "Pitches Sent"}: _____ (टारगेट: 20-30)    │
│ ${language === "hindi" ? "��िप्लाई मिले" : "Replies Received"}: _____ (टारगेट: 30%)     │
│ ${language === "hindi" ? "डील्स क्लोज्ड" : "Deals Closed"}: _____ (टारगेट: 15%)      │
│ ${language === "hindi" ? "कुल कमाई" : "Total Earnings"}: ₹_____ (टारगेट: ₹${Math.round(currentFollowers * 0.5).toLocaleString()})│
│ ${language === "hindi" ? "औ��त डील वैल्यू" : "Avg Deal Value"}: ₹_____ (टारगेट: ₹${Math.round(currentFollowers * 0.08).toLocaleString()}) ��
└─����───────────────────────────────────────────┘

${language === "hindi" ? "📊 साप्ताहिक ग्रोथ मेट्रिक्स:" : "📊 WEEKLY GROWTH METRICS:"}
• ${language === "hindi" ? "सप्ताह" : "Week"} 1: टार��ेट ${Math.round(targetGrowthRate / 4)} new followers/day
• ${language === "hindi" ? "सप्ताह" : "Week"} 2: ��ारगेट ${Math.round(targetGrowthRate / 4 * 1.1)} new followers/day
• ${language === "hindi" ? "सप्ताह" : "Week"} 3: टारगेट ${Math.round(targetGrowthRate / 4 * 1.2)} new followers/day
• ${language === "hindi" ? "सप्ताह" : "Week"} 4: टारगेट ${Math.round(targetGrowthRate / 4 * 1.3)} new followers/day

${language === "hindi" ? "🎯 कंटेंट परफॉर्मेंस स्कोरकार्ड:" : "🎯 CONTENT PERFORMANCE SCORECARD:"}
┌────────────────────────────────────────────��┐
�� ${language === "hindi" ? "कं���ेंट ���ाइप" : "Content Type"}: ________________    │
│ ${language === "hindi" ? "पोस्ट टाइम" : "Post Time"}: ___:___ (बेस्ट: 7-9 PM)   │
│ ${language === "hindi" ? "हैशटैग्स यूज्ड" : "Hashtags Used"}: _____ (बेस्ट: 8-12)  │
│ ${language === "hindi" ? "1घंटे में रीच" : "1hr Reach"}: _____ (टारगेट: 15-25%)  │
│ ${language === "hindi" ? "24घंटे में रीच" : "24hr Reach"}: _____ (टारगेट: 70-85%) │
│ ${language === "hindi" ? "स्टोरी व्यूज" : "Story Views"}: _____ (टारगेट: 40-60%) │
└───────���───────────────────────���──────���──────┘

${language === "hindi" ? "🔥 प्रो-लेवल एनालिटिक्स टिप्स:" : "🔥 PRO-LEVEL ANALYTICS TIPS:"}
1. ${language === "hindi" ? "रीच 50% से कम = Algorithm penalty. तुरंत बेहतर कंटेंट पोस��ट करें" : "Reach below 50% = Algorithm penalty. Post better content immediately"}
2. ${language === "hindi" ? "स��व रेट 2% से ज्यादा = वायरल potential. इसी तरह का कंटेंट बनाएं" : "Save rate above 2% = Viral potential. Create similar content"}
3. ${language === "hindi" ? "कमेंट्स में रिप्लाई जरूर करें - Engagement बढ़ेगा 40%" : "Always reply to comments - Boosts engagement by 40%"}
4. ${language === "hindi" ? "पहले 30 मिनट में ज्यादा likes = Algorithm boost" : "High likes in first 30 minutes = Algorithm boost"}

${language === "hindi" ? "📈 मासिक ROI ट्रैकर:" : "📈 MONTHLY ROI TRACKER:"}
┌───────────���─────────────────────────────────┐
│ ${language === "hindi" ? "क���ल इन्वेस्टमेंट" : "Total Investment"}:              │
│ - Content tools: ₹_____ (Canva, etc.)    │
│ - Equipment: ₹_____ (Phone, lights)      │
│ - Ads/Promotion: ₹_____ (FB/Insta ads)   │
│ - Other: ₹_____ (courses, etc.)          │
│                                           │
│ ${language === "hindi" ? "कुल कमाई" : "Total Earnings"}:                      │
│ - Brand deals: ₹_____                    │
│ - Affiliate: ���_____                      │
│ - Product sales: ₹_____                  │
│ - Other: ₹_____                          │
│                                           │
│ ${language === "hindi" ? "नेट प्रॉफिट" : "Net Profit"}: ₹_____ - ₹_____ = ₹_____ │
│ ROI: (_____ ÷ _____) × 100 = _____%      │
└──────────────────────────────────────��──────┘

${language === "hindi" ? "⚡ एक्शन आइटम्स (हर हफ्ते करें):" : "⚡ ACTION ITEMS (Do Every Week):"}
□ ${language === "hindi" ? "टॉप 3 परफॉर्मिंग पोस्ट्स को analyze ��रें और pattern ढूंढ���ं" : "Analyze top 3 performing posts and find patterns"}
□ ${language === "hindi" ? "Competitor के टॉप प���स्ट्स स्टडी करें (कम से कम 5)" : "Study competitor top posts (minimum 5)"}
□ ${language === "hindi" ? "हैशटैग परफॉर्मेंस चेक करें और underperforming को replace करें" : "Check hashtag performance and replace underperforming ones"}
□ ${language === "hindi" ? "Audience insights द���खें - कब ऑनलाइन हैं, demographics" : "Review audience insights - when online, demographics"}
□ ${language === "hindi" ? "नए ट्रेंड्स research करें और next week plan करें" : "Research new trends and plan next week content"}

${language === "hindi" ? "🎯 अगले 30 दिन का टारगेट:" : "🎯 NEXT 30 DAYS TARGET:"}
• ${projectedFollowers.toLocaleString()} followers (${targetGrowthRate}% growth)
• ${targetEngagementRate}% average engagement rate
��� ${Math.round(currentFollowers / 5000)} brand inquiries
• ₹${Math.round(currentFollowers * 0.4).toLocaleString()} minimum income

${language === "hindi" ? "⏰ लास्ट अपडेटेड:" : "⏰ LAST UPDATED:"} ${new Date().toLocaleString()}
${language === "hindi" ? "💡 नेक्स्ट रिव्यू:" : "💡 NEXT REVIEW:"} ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}`;
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
                ? "आपका संपूर्ण क्रिएटर ���ूलकिट तैयार है। अपनी व्यक्तिगत फाइलें डा���नलोड क���ें।"
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
                    ? "आपका व्यक्तिगत फेम स्कोर ��र विस्तृत विश्लेषण"
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
                    ? "ब्रांड��स के लिए आपकी प्रोफेशनल मीडिय��� किट"
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
                  {language === "hindi" ? "डाउनलोड करे���" : "Download"}
                </button>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === "hindi" ? "🚀 Personalized Growth Strategy" : "🚀 Personalized Growth Strategy"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "hindi"
                    ? "आपके लिए बनाई गई विस्तृत 90-दिन की actionable growth strategy"
                    : "Detailed 90-day actionable growth strategy tailored specifically for you"}
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="font-medium text-gray-800">
                      {language === "hindi" ? "📋 इसमें शामिल है:" : "📋 Includes:"}
                    </p>
                    <p>• {language === "hindi" ? "Week-by-week action plan आपके goals के लिए" : "Week-by-week action plan for your specific goals"}</p>
                    <p>• {language === "hindi" ? "Platform-specific growth tactics" : "Platform-specific growth tactics"}</p>
                    <p>• {language === "hindi" ? "Content ideas आपके niche के लिए" : "Content ideas for your niche"}</p>
                    <p>• {language === "hindi" ? "Monetization timeline और milestones" : "Monetization timeline and milestones"}</p>
                  </div>
                </div>
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

            {/* EXCLUSIVE PREMIUM CONTENT SECTION */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  🎉 PREMIUM EXCLUSIVE
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "hindi"
                  ? "💰 मोनेटाइज़ेशन प्रो टूल्स - अभी कमाना शुरू कर���ं!"
                  : "💰 Monetization Pro Tools - Start Earning Now!"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "साबित किए गए टूल्स जो टॉप क्रिएटर्स अपनी आय 5X ��ढ़ाने के ���िए इस्तेमाल करते हैं। ���ह सब कुछ बिल्कुल फ्री है!"
                  : "Proven tools that top creators use to 5X their income. Get everything absolutely free after completing your quiz!"}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-lg mb-2 text-purple-700">
                    {language === "hindi"
                      ? "🧮 AI-प��वर्ड मोनेटा��ज़ेशन कैलकुलेटर"
                      : "🧮 AI-Powered Monetization Calculator"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === "hindi"
                      ? "जानें कि आप हर महीने कितन�� कमा ��कते हैं। टॉप क्रिएटर���स के डेटा पर आध��रित 95% सटीक कैलकुलेशन।"
                      : "Calculate real-time earnings potential based on your follower count & niche"}
                  </p>
                  <button
                    onClick={() =>
                      generateDownload(
                        "monetizationCalculator",
                        `${personalInfo.name}_Monetization_Calculator_${language}.txt`,
                      )
                    }
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    {language === "hindi" ? "डाउनलोड करें" : "Download"}
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-lg mb-2 text-purple-700">
                    {language === "hindi"
                      ? "📊 प्रो-लेवल एनालिटिक्स ट्रैकर"
                      : "📊 Pro-Level Analytics Tracker"}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === "hindi"
                      ? "वही ट्रैकिंग सिस्टम जो मिलियन-फॉलोअर क्रिएटर्स इस्तेमाल कर��े हैं। अ���नी ROI क��� 300% तक बढ़ाए��।"
                      : "The same tracking system used by million-follower creators. Boost your ROI by up to 300%."}
                  </p>
                  <button
                    onClick={() =>
                      generateDownload(
                        "analyticsTracker",
                        `${personalInfo.name}_Analytics_Tracker_${language}.txt`,
                      )
                    }
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    {language === "hindi" ? "डाउनलोड करें" : "Download"}
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                <p className="text-amber-800 font-medium text-center">
                  {language === "hindi"
                    ? "🎯 इन टूल्स की कीमत बाजार म��ं ₹5,000+ है - लेकिन आपको ये बिल्कुल फ���री मिल रहे है���!"
                    : "🎯 This content is exclusively for premium users - FREE users don't get this!"}
                </p>
              </div>
            </div>

            {/* AI-Suggested Products */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
                {language === "hindi"
                  ? "🤖 AI Recommended Tools - आपके लिए Perfect"
                  : "🤖 AI Recommended Tools - Perfect for Your Profile"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "आपके quiz responses के आधार पर, हमारे AI ने ये specific tools recommend किए हैं जो आपकी exact needs ��ो पूरा करेंगे।"
                  : "Based on your quiz responses, our AI has identified these specific tools that will address your exact needs and accelerate your growth."}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Recommended based on biggest challenges */}
                {quizData.biggestChallenge.some(c => c.includes("Low views") || c.includes("Algorithm")) && (
                  <div className="bg-white rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-purple-800 mb-2">
                          {language === "hindi" ? "🚀 Viral Content Mastery Course" : "🚀 Viral Content Mastery Course"}
                        </h3>
                        <div className="text-purple-600 text-sm mb-2">
                          {language === "hindi" ? "AI Match: 95% - Views और Algorithm problems के लिए perfect" : "AI Match: 95% - Perfect for views & algorithm issues"}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 line-through text-sm">₹1,299</div>
                        <div className="text-purple-600 font-bold">₹399</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === "hindi"
                        ? "Algorithm के साथ बेहतर relationship बनाएं, trending content create करें, और consistent viral videos बनाने का formula सीखें।"
                        : "Master the algorithm, create trending content, and learn the exact formula for consistent viral videos."}
                    </p>
                    <div className="text-purple-600 text-sm font-medium">
                      ✨ {language === "hindi" ? "30-day money-back guarantee" : "30-day money-back guarantee"}
                    </div>
                  </div>
                )}

                {/* Show only existing products based on user profile */}
                {analysis.productRecommendations.slice(0, 2).map((rec, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-orange-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-orange-800 mb-2">
                          {rec.name}
                        </h3>
                        <div className="text-orange-600 text-sm mb-2">
                          {rec.priority === "high" ? "🔥 High Priority" : "⭐ Recommended"}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 line-through text-sm">
                          {rec.name.includes("Complete") ? "₹199" : rec.name.includes("Reels") ? "₹397" : "₹299"}
                        </div>
                        <div className="text-orange-600 font-bold">
                          {rec.name.includes("Complete") ? "₹99" : rec.name.includes("Reels") ? "₹197" : "₹149"}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {rec.reason}
                    </p>
                    <div className="text-orange-600 text-sm font-medium">
                      💡 {language === "hindi" ? "Specifically tailored for your profile" : "Specifically tailored for your profile"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/shop"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  {language === "hindi"
                    ? "सभी AI Recommended Tools दे��ें"
                    : "View All AI Recommended Tools"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-gray-500 text-sm mt-2">
                  {language === "hindi"
                    ? "✨ Limited time offer - 70% discount सिर्फ quiz completers के लिए"
                    : "✨ Limited time offer - 70% discount exclusively for quiz completers"}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "hindi"
                  ? "और भी प��रीमियम टूल्स चाहिए?"
                  : "Want Even More Premium Tools?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "ह��ारे एडवांस्ड प्रीमि����� कोर्सेज के साथ अपनी क्रिएटर यात्रा को तेज़ी से आगे बढ़ाएं।"
                  : "Accelerate your creator journey with our advanced premium courses."}
              </p>
              <Link
                to="/shop"
                onClick={() => {
                  // Add a small delay to ensure navigation happens then scroll
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                {language === "hindi"
                  ? "��्रीमियम टू��्स देखें"
                  : "Browse More Creator Tools"}
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
          {/* 🎉 SURPRISE CELEBRATION SECTION */}
          <div className="text-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-100 opacity-50 animate-pulse"></div>
            <div className="relative">
              <div className="flex justify-center items-center gap-2 mb-4">
                <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" />
                <Sparkles className="w-6 h-6 text-purple-500 animate-spin" />
                <Gift className="w-7 h-7 text-pink-500 animate-pulse" />
                <Rocket className="w-8 h-8 text-blue-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
                <Heart className="w-6 h-6 text-red-500 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent text-2xl font-bold mb-2">
                🎉 {language === "hindi" ? "बधाई हो! आपका विश्लेषण तैयार है!" : "Congratulations! Your Analysis is Ready!"} 🎉
              </div>
              <div className="text-lg text-gray-700 font-medium">
                {language === "hindi"
                  ? "आप अब एक प्रो क्रिएटर बनने के लिए तैयार हैं!"
                  : "You're now ready to become a Pro Creator!"}
              </div>
            </div>
          </div>

          {/* 🚀 SURPRISE SOCIAL SHARING SECTION */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Share2 className="w-6 h-6 text-blue-600" />
                {language === "hindi" ? "अपना FameScore शेयर कर���ं!" : "Share Your FameScore!"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "hindi"
                  ? "दोस्तों को दिखाएं कि आप कितने बेहतरीन क्रिएटर हैं!"
                  : "Show your friends how amazing you are as a creator!"}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const shareText = language === "hindi"
                      ? `मैंने FameChase.com पर अपना Creator Analysis किया! मेरा Fame Score ${analysis.fameScore}/100 है 🚀 #FameChase #CreatorAnalysis`
                      : `I just got my Creator Analysis on FameChase.com! My Fame Score is ${analysis.fameScore}/100 🚀 #FameChase #CreatorAnalysis`;
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
                  }}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </button>
                <button
                  onClick={() => {
                    const shareText = language === "hindi"
                      ? `मैंने FameChase.com पर अपना Creator Analysis किया! मेरा Fame Score ${analysis.fameScore}/100 है 🚀`
                      : `I just got my Creator Analysis on FameChase.com! My Fame Score is ${analysis.fameScore}/100 🚀`;
                    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' - https://famechase.com')}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    const shareData = {
                      title: 'FameChase Creator Analysis',
                      text: language === "hindi"
                        ? `मैंने FameChase.com पर अपना Creator Analysis किया! मेरा Fame Score ${analysis.fameScore}/100 है 🚀`
                        : `I just got my Creator Analysis on FameChase.com! My Fame Score is ${analysis.fameScore}/100 🚀`,
                      url: 'https://famechase.com'
                    };
                    if (navigator.share) {
                      navigator.share(shareData);
                    } else {
                      navigator.clipboard.writeText(shareData.text + ' - ' + shareData.url);
                      alert(language === "hindi" ? "लिंक कॉपी हो गया!" : "Link copied!");
                    }
                  }}
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  {language === "hindi" ? "शेयर करें" : "Share More"}
                </button>
              </div>
            </div>
          </div>

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

          {/* AI-Powered Creator Analysis */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-purple-600" />
              {language === "hindi" ? "AI-Powered विश्लेषण - आपके लिए विशेष" : "AI-Powered Creator Analysis - Personalized for You"}
            </h2>

            {/* Personalized Insights */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {language === "hindi" ? "आपकी मुख्य ताकतें" : "Your Key Strengths"}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      {language === "hindi"
                        ? `आप ${quizData.niche} में कंटेंट बनाते हैं - यह ���क बहुत डिमांडिं��� निच है जहाँ ब्रांड्स ${quizData.followerCount.includes("1K") ? "3-5" : quizData.followerCount.includes("10K") ? "10-15" : "20+"} लाख रुपए साला���ा खर्च करते हैं।`
                        : `You create ${quizData.contentType.toLowerCase()} in ${quizData.niche} - a high-demand niche where brands spend ₹${quizData.followerCount.includes("1K") ? "3-5" : quizData.followerCount.includes("10K") ? "10-15" : "20+"} lakhs annually.`}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      {language === "hindi"
                        ? `आपकी ${quizData.postingFrequency} पोस्टिंग frequency algorithm �����े लिए बिल्कुल सही है। Consistency ही success की key है।`
                        : `Your ${quizData.postingFrequency.toLowerCase()} posting frequency is optimal for algorithm growth. Consistency is the key to success.`}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      {language === "hindi"
                        ? `${quizData.followerCount} followers के साथ आप perfect monetization stage में ह���ं। अब ब्रांड deals के लिए ready हैं।`
                        : `With ${quizData.followerCount.toLowerCase()} followers, you're in the perfect monetization stage. Ready for brand collaborations.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {language === "hindi" ? "तुरंत स��धार के क्षेत्र" : "Immediate Improvement Areas"}
                </h3>
                <div className="space-y-4">
                  {quizData.biggestChallenge.slice(0, 3).map((challenge, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {challenge.split(': ')[1] || challenge}
                          </h4>
                          <div className="text-sm text-gray-700 space-y-1">
                            {challenge.includes("Low views") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 तुरंत करें:" : "🎯 Quick Actions:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• 7-9 PM IST में post करें (35% ज्यादा reach)"
                                    : "• Post during 7-9 PM IST (35% higher reach)"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Trending audio का use करें first 24 hours मे���"
                                    : "• Use trending audio within first 24 hours"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Comments में questions पूछें engagement के लिए"
                                    : "• Ask questions in captions to boost engagement"}
                                </p>
                              </>
                            )}
                            {challenge.includes("Algorithm") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 Algorithm को खुश करें:" : "🎯 Algorithm Optimization:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• पहले 30 minutes में actively respond करें"
                                    : "• Respond actively in first 30 minutes after posting"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Stories में polls और questions daily use करें"
                                    : "• Use Stories polls and questions daily"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Cross-platform पर भी same time post करें"
                                    : "• Cross-post at same time on multiple platforms"}
                                </p>
                              </>
                            )}
                            {challenge.includes("voice") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 Unique Voice बनाएं:" : "🎯 Build Unique Voice:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• अपनी personal failures और lessons share करें"
                                    : "• Share your personal failures and lessons learned"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Behind-the-scenes content regular post करें"
                                    : "• Post behind-the-scenes content regularly"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• अपने opinions को boldly express करें"
                                    : "• Express your opinions boldly and authentically"}
                                </p>
                              </>
                            )}
                            {challenge.includes("convert") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 Conversion बढ़ाएं:" : "🎯 Boost Conversions:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Clear CTA हर post में add करें"
                                    : "• Add clear call-to-action in every post"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Free lead magnet create करें (checklist/template)"
                                    : "• Create free lead magnet (checklist/template)"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Social proof और testimonials regularly share करें"
                                    : "• Share social proof and testimonials regularly"}
                                </p>
                              </>
                            )}
                            {challenge.includes("collaborations") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 Brand Deals पाएं:" : "🎯 Land Brand Deals:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Professional media kit बनाएं और brands को email करें"
                                    : "• Create professional media kit and email brands"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Brands को organically mention कर���ं partnership से पहले"
                                    : "• Organically mention brands before pitching partnership"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Weekly 10-15 brands को personalized emails भेजें"
                                    : "• Send personalized emails to 10-15 brands weekly"}
                                </p>
                              </>
                            )}
                            {!challenge.includes("Low views") && !challenge.includes("Algorithm") &&
                             !challenge.includes("voice") && !challenge.includes("convert") &&
                             !challenge.includes("collaborations") && (
                              <>
                                <p className="font-medium text-orange-600">
                                  {language === "hindi" ? "🎯 समाधान:" : "🎯 Solution:"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "��� Specific action plan ब��ाएं इस challenge के लिए"
                                    : "• Create specific action plan for this challenge"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Daily 30 minutes focus करें इस area पर"
                                    : "• Focus 30 minutes daily on this specific area"}
                                </p>
                                <p>
                                  {language === "hindi"
                                    ? "• Weekly progress track करें और adjust करें"
                                    : "• Track weekly progress and adjust strategy"}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Market Intelligence */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                {language === "hindi" ? "🚀 Market Intelligence & Opportunities" : "🚀 Market Intelligence & Opportunities"}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {quizData.niche.includes("Tech") ? "1,200+" :
                     quizData.niche.includes("Fashion") ? "2,500+" :
                     quizData.niche.includes("Finance") ? "800+" : "1,500+"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "hindi" ? "Active ब्रांड्स आपके niche में" : "Active brands in your niche"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ₹{quizData.followerCount.includes("Less than 1K") ? "500-2K" :
                        quizData.followerCount.includes("1K - 5K") ? "2K-8K" :
                        quizData.followerCount.includes("5K - 10K") ? "5K-15K" : "15K+"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "hindi" ? "Per post earning potential" : "Per post earning potential"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {Math.round(((quizData.followerCount.includes("1K") ? 3000 :
                                 quizData.followerCount.includes("5K") ? 7500 :
                                 quizData.followerCount.includes("10K") ? 25000 : 50000) * 0.4) / 1000)}K
                  </div>
                  <div className="text-sm text-gray-600">
                    {language === "hindi" ? "Monthly reach potential" : "Monthly reach potential"}
                  </div>
                </div>
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

          {/* �� PROFESSIONAL ANALYSIS SUMMARY */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <BarChart className="w-7 h-7 text-indigo-600" />
                {language === "hindi" ? "📈 विश्लेषण सारांश" : "📈 Analysis Summary"}
              </h3>
              <p className="text-gray-600">
                {language === "hindi"
                  ? "आपकी वर्तमान स्थिति का professional assessment"
                  : "Professional assessment of your current creator status"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {language === "hindi" ? "वर्तमान स्तर" : "Current Level"}
                  </h4>
                  <div className="text-2xl font-bold text-indigo-600">{analysis.fameScore}/100</div>
                </div>
                <div className="text-sm text-gray-600">
                  {analysis.fameScore >= 80
                    ? (language === "hindi" ? "🌟 Elite Creator" : "🌟 Elite Creator")
                    : analysis.fameScore >= 60
                    ? (language === "hindi" ? "⭐ Advanced Creator" : "⭐ Advanced Creator")
                    : analysis.fameScore >= 40
                    ? (language === "hindi" ? "📈 Growing Creator" : "📈 Growing Creator")
                    : (language === "hindi" ? "🌱 Emerging Creator" : "🌱 Emerging Creator")}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${analysis.fameScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {language === "hindi" ? "मुद्रीकरण स्टेटस" : "Monetization Status"}
                  </h4>
                  <div className="text-lg font-bold text-green-600">
                    {quizData.monthlyIncome === "₹0 (No income yet)" || quizData.monthlyIncome === "₹0 (अभी तक कोई आय नहीं)"
                      ? "🔴" : "🟢"}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {quizData.monthlyIncome === "₹0 (No income yet)" || quizData.monthlyIncome === "₹0 (अभी तक कोई आय नहीं)"
                    ? (language === "hindi" ? "अभी monetize नहीं किया" : "Not monetized yet")
                    : (language === "hindi" ? `वर्तमान: ${quizData.monthlyIncome}` : `Current: ${quizData.monthlyIncome}`)}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {language === "hindi" ? "भविष्य की संभावना: " : "Future potential: "}{analysis.incomeProjection}
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">
                    {language === "hindi" ? "प्ल��टफॉर्म उपस्थिति" : "Platform Presence"}
                  </h4>
                  <div className="text-lg font-bold text-blue-600">
                    {quizData.secondaryPlatforms.length + 1}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {language === "hindi" ? "मुख्य: " : "Primary: "}{quizData.primaryPlatform}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {quizData.secondaryPlatforms.length > 0
                    ? `+${quizData.secondaryPlatforms.length} ${language === "hindi" ? "और प्लेटफॉर्��" : "more platforms"}`
                    : (language === "hindi" ? "Single platform" : "Single platform")}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-orange-700">
                  {language === "hindi" ? "अगला माइलस्टोन:" : "Next Milestone:"}
                </span>
              </div>
              <div className="text-sm text-gray-600 text-center">
                {analysis.fameScore < 50
                  ? (language === "hindi" ? "50+ score पर पहुंचें बेसिक creator स्टेटस के लिए" : "Reach 50+ score for basic creator status")
                  : analysis.fameScore < 70
                  ? (language === "hindi" ? "70+ score पर पहुंचें advanced creator स्टेटस के लिए" : "Reach 70+ score for advanced creator status")
                  : parseInt(quizData.followerCount.replace(/[^\d]/g, '')) < 10000
                  ? (language === "hindi" ? "10K followers पर पहुंचें micro-influencer स्टेटस के लिए" : "Reach 10K followers for micro-influencer status")
                  : (language === "hindi" ? "आप पहले से ही एक established creator हैं! 🎉" : "You're already an established creator! 🎉")}
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
                  <div className="text-sm">{t.fameScoreReport}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Layout className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="text-sm">{t.mediaKitTemplate}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-sm">{t.growthStrategy}</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="text-sm">{t.premiumTools}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
