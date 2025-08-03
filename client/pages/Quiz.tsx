import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  ChevronDown,
  Twitter,
  Star,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles,
  User,
  Mail,
  MapPin,
  Calendar,
  Download,
  Home,
  FileText,
  Layout,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  engagementRate: string;
}

const initialQuizData: QuizData = {
  name: "",
  email: "",
  age: "",
  city: "",
  primaryPlatform: "",
  secondaryPlatforms: [],
  followerCount: "",
  niche: "",
  contentType: "",
  postingFrequency: "",
  experience: [],
  monthlyIncome: "",
  biggestChallenge: [],
  goals: [],
  socialLinks: {
    instagram: "",
    youtube: "",
    linkedin: "",
    website: "",
    twitter: "",
    tiktok: "",
  },
  bio: "",
  language: "english",
  engagementRate: "",
};

const languages = {
  english: {
    title: "Creator Success Quiz",
    subtitle: "Get your personalized growth strategy in 3 minutes",
    steps: {
      1: "Platform & Followers",
      2: "Content Niche",
      3: "Content Type",
      4: "Posting Frequency",
      5: "Experience & Income",
      6: "Biggest Challenge",
      7: "Goals",
      8: "Social Links",
      9: "Engagement Rate",
    },
    questions: {
      primaryPlatform: "What's your primary content platform?",
      followerCount: "How many followers do you have on your primary platform?",
      secondaryPlatforms:
        "Which other platforms do you use? (Select all that apply)",
      niche: "What's your content niche?",
      contentType: "What type of content do you create?",
      postingFrequency: "How often do you post content?",
      experience:
        "How long have you been creating content? (Select all levels you've experienced)",
      monthlyIncome: "What's your current monthly income from content?",
      biggestChallenge:
        "What are your biggest challenges as a creator? (Select max 3)",
      goals: "आपके अगले 6 महीने के मुख्य लक्ष्य क्या हैं? (अधिकतम 3 चुनें)",
      socialLinks: "Share Your Social Presence (Optional)",
      bio: "Anything more about yourself and your content (optional)",
      engagementRate: "What's your average engagement rate?",
    },
    options: {
      platforms: [
        "Instagram",
        "YouTube",
        "LinkedIn",
        "TikTok",
        "Twitter",
        "Facebook",
        "Website/Blog",
      ],
      followerRanges: [
        "Less than 1K",
        "1K - 5K",
        "5K - 10K",
        "10K - 50K",
        "50K - 100K",
        "100K - 500K",
        "500K+",
      ],
      niches: [
        "Fashion & Beauty",
        "Technology & AI",
        "Food & Cooking",
        "Travel & Adventure",
        "Fitness & Health",
        "Personal Finance & Investing",
        "Entertainment & Comedy",
        "Entrepreneurship & Business",
        "Lifestyle & Wellness",
        "Art & Design",
        "Gaming & Esports",
        "Music & Dance",
        "Education & Learning",
        "Sports & Athletics",
        "Motivation & Self-Help",
        "Parenting & Family",
        "DIY & Crafts",
        "Spirituality & Mindfulness",
        "Other",
      ],
      contentTypes: [
        "Photos & Carousels",
        "Short Videos/Reels",
        "Long-form Videos",
        "Live Streams",
        "Stories",
        "Written Posts",
        "Podcasts",
        "Mixed Content",
      ],
      frequencies: [
        "Daily",
        "3-4 times a week",
        "Weekly",
        "2-3 times a month",
        "Monthly",
        "Irregular",
      ],
      experiences: [
        "Just started (0-6 months)",
        "Beginner (6 months - 1 year)",
        "Growing (1-2 years)",
        "Experienced (2-3 years)",
        "Expert (3+ years)",
      ],
      incomes: [
        "₹0 (No income yet)",
        "₹1-5K",
        "₹5K-15K",
        "₹15K-30K",
        "₹30K-50K",
        "₹50K-1L",
        "₹1L+",
      ],
      challenges: [
        "Getting consistent views and engagement",
        "Finding my unique voice/style",
        "Algorithm changes affecting reach",
        "Balancing authenticity with brand appeal",
        "Competing with bigger creators",
        "Converting followers to paying customers",
        "Dealing with negative comments/trolls",
        "Burnout and content fatigue",
        "Understanding analytics and metrics",
        "Building genuine community",
        "Staying relevant with trends",
        "Managing multiple platforms efficiently",
      ],
      goals: [
        "Increase monthly income to ₹50K+",
        "Build authentic community of 100K+",
        "Land partnerships with dream brands",
        "Launch my own product/course",
        "Become go-to expert in my niche",
        "Achieve viral content consistently",
        "Build email list of 10K subscribers",
        "Speak at industry events/podcasts",
        "Create passive income streams",
        "Quit my 9-5 and go full-time",
        "Expand into new platforms/formats",
        "Mentor other creators in my space",
      ],
      engagementRates: [
        "Less than 1%",
        "1-3%",
        "3-5%",
        "5-8%",
        "8-12%",
        "More than 12%",
        "I don't know",
      ],
    },
    buttons: {
      next: "Next Step",
      back: "Previous",
      submit: "Get My Creator Analysis",
    },
    freeResources: {
      title: "🎉 Quiz Complete! Here are your FREE Creator Resources",
      subtitle:
        "Download these powerful tools to kickstart your creator journey",
      mediaKit: {
        title: "Professional Media Kit Template",
        description: "Create stunning media kits that brands will love",
      },
      emailTemplates: {
        title: "Brand Outreach Email Templates",
        description: "30+ proven email templates for brand partnerships",
      },
      growthGuide: {
        title: "90-Day Growth Strategy Guide",
        description: "Step-by-step roadmap to grow your following",
      },
      downloadFree: "Download Free",
    },
  },
  hindi: {
    title: "क्रिएटर सक्सेस क्विज़",
    subtitle: "3 मिनट में अपनी व्यक्तिगत ग्रोथ रणनीति पाएं",
    steps: {
      1: "प्लेटफॉर्म और फॉलोअर्स",
      2: "कंटेंट निच",
      3: "कंटेंट प्रकार",
      4: "पोस्टिंग आवृत्ति",
      5: "अनुभव और आ��",
      6: "सबसे बड़ी चुनौती",
      7: "लक्ष्य",
      8: "सोशल लिंक्स",
      9: "एंगेजमेंट रेट",
    },
    questions: {
      primaryPlatform: "आप मुख्यतः किस प्लेटफॉर्म पर कंटेंट बनाते हैं?",
      followerCount: "आपके प्राथमिक प्लेटफॉर्म पर कितने फॉलोअर्स हैं?",
      secondaryPlatforms:
        "आप और कौन से प्लेटफॉर्म का उपयो�� करते हैं? (कई विकल्प चुनें)",
      niche: "आपका कंटेंट किस विषय पर है?",
      contentType: "आप किस प्रकार का कंटेंट बनाते हैं?",
      postingFrequency: "आप कितनी बार कंटेंट पोस्ट करते हैं?",
      experience:
        "आप कितने समय से कंटेंट बना रहे हैं? (सभी स्तर चुने��� जिनका आपने अनुभव किया है)",
      monthlyIncome: "कंटेंट से आप���ी वर्तम���न मासिक आय क्या है?",
      engagementRate: "आपका औसत एंगेजमेंट रेट क्या है? Engagement rate = (likes + comments + shares) / followers",
      biggestChallenge:
        "आपकी सबसे बड़ी चुनौती क्या है? 3 तक चुनें – हम सब इसमें एक साथ हैं! आपकी परेशानियों को समझना हमें बेहतर समाधान देने में मदद करता है।",
      goals:
        "आपके अगले 6 महीने के मुख्य लक्ष्य क्या हैं? (अधिकतम 3 चुनें)",
      socialLinks: "अपनी सोशल उपस्थिति साझा करें (वैकल्पिक)",
      bio: "अपने और अपने कंटेंट के बारे ����ें कुछ और ब��ाएं (वैकल्पिक)",
    },
    options: {
      platforms: [
        "इंस्टाग्राम",
        "यूट्यूब",
        "लिंक्डइन",
        "टिकटॉक",
        "ट्विटर",
        "फेसबुक",
        "वेबसाइट/ब्लॉग",
      ],
      followerRanges: [
        "1K से कम",
        "1K - 5K",
        "5K - 10K",
        "10K - 50K",
        "50K - 100K",
        "100K - 500K",
        "500K+",
      ],
      niches: [
        "फैशन और ब्यूटी",
        "टेक्नोलॉजी और AI",
        "खाना और खाना बनाना",
        "यात्रा और एडवेंचर",
        "फिटनेस और स्वास्थ्य",
        "व्यक्तिगत वि��्त और निवेश",
        "मनोरंजन और कॉमेडी",
        "उद्यमिता और व्यापार",
        "जीवनशैली और कल्याण",
        "कला और डिज़ाइन",
        "गेमिंग और एस्पोर्ट्स",
        "��ंगीत और नृत्य",
        "शिक्षा ���र सीखना",
        "खेल और एथलेटिक्स",
        "प्रेरणा और स्व-सहायता",
        "पेरेंटिंग और परिवार",
        "DIY और शिल्प",
        "आध्यात्म और माइंडफुलनेस",
        "अन्य",
      ],
      engagementRates: [
        "1% से कम",
        "1-3%",
        "3-5%",
        "5-8%",
        "8-12%",
        "12% से अधिक",
        "मुझे नहीं पता",
      ],
      contentTypes: [
        "फोटो और कैरोसेल",
        "छोटे वीडियो/रील्स",
        "लंबे वीडियो",
        "लाइव स्ट्रीम",
        "स्टोरीज़",
        "लिखित पोस्ट",
        "पॉडकास्ट",
        "मिश्रित कंटेंट",
      ],
      frequencies: [
        "रोज़ाना",
        "सप्���ाह में 3-4 बार",
        "सा���्ताहिक",
        "महीने में 2-3 बार",
        "��ासिक",
        "अनियमित",
      ],
      experiences: [
        "अभी शुरू किया (0-6 महीने)",
        "शुरुआती (6 महीने - 1 साल)",
        "बढ़ रहे हैं (1-2 साल)",
        "अनुभवी (2-3 साल)",
        "विशेषज्ञ (3+ साल)",
      ],
      incomes: [
        "₹0 (अभी तक कोई आय नहीं)",
        "₹1-5K",
        "₹5K-15K",
        "₹15K-30K",
        "₹30K-50K",
        "₹50K-1L",
        "₹1L+",
      ],
      challenges: [
        "🔄 विकास और एंगेजमेंट: कम व्यूज और असंगत एंगेजमेंट",
        "🧠 विकास और एंगेजमेंट: तेज़ी से बदलते ट्रेंड्स के साथ बने रहना",
        "🔁 विकास और एंगेजमेंट: एल्गोरिदम के बदलाव से रीच का मारा जाना",
        "🧍‍♀️ विकास और एंगेजमेंट: बड़े क्रिएटर्स के साथ मुकाबला करना",
        "🗣️ ब्रांड और पहचान: अपनी अनूठी आवाज़/शैली खोजने में संघर्ष",
        "🤝 ब्रांड और पहचान: प्रामाणिकता और ब्रांड अपील के बीच संतुल���",
        "🌱 ब्रांड और पहचान: वास्तविक, जुड़ा हुआ समुदाय बनाना",
        "💔 मुद्रीकरण और स्केलिंग: फॉलोअर्स को पेइंग कस्टमर में नहीं बदल पाना",
        "🤝 मुद्रीकरण और स्केलिंग: ब्रांड कोलैबोरेशन नहीं मिल पाना",
        "📊 मुद्रीकरण और स्केलिंग: एनालिटिक्स और मेट्रिक्स से कन्फ्यूज़न",
        "🥵 क्रिएटर कल्याण: बर्नआउट और कंटेंट थकान",
        "💬 क्रिएटर कल���याण: ट्रोल्स/नकारात्मकता से निपटना",
        "📱 क्रिएटर कल्याण: एक साथ कई प्लेटफॉर्म मैनेज करना",
      ],
      goals: [
        "मासिक आय ₹50K+ तक बढ़ाना",
        "100K+ का authentic समुदाय बनाना",
        "सपनों के ब्रांड्स के साथ पार्टनरशिप",
        "अपना प्रोडक्ट/कोर्स लॉन्च करना",
        "अपने निच में गो-टू ���क्सपर्ट बनना",
        "लगातार वायरल कंटेंट बनाना",
        "10K सब्सक्राइबर्स की ईमेल लिस्ट बनाना",
        "इंडस्ट्री इवेंट्स/पॉडकास्ट में बोलना",
        "पैसिव इनकम स्ट्रीम बनाना",
        "अपनी 9-5 जॉब छोड़कर फुल-टाइम जाना",
        "नए प्लेटफॉर्म्स/फॉर्मेट्स में expand करना",
        "अपने ��्पेस में दूसरे क्रिएटर्स को मेंटर करना",
      ],
      challenges: [
        "🔄 Growth & Engagement: Low views & inconsistent engagement",
        "🧠 Growth & Engagement: Staying relevant with fast-moving trends",
        "🔁 Growth & Engagement: Algorithm changes killing reach",
        "🧍‍♀️ Growth & Engagement: Competing with bigger creators",
        "🗣️ Brand & Identity: Struggling to find my unique voice/style",
        "🤝 Brand & Identity: Balancing authenticity with brand appeal",
        "🌱 Brand & Identity: Building a real, connected community",
        "💔 Monetization & Scaling: Can't convert followers into paying customers",
        "🤝 Monetization & Scaling: Not landing brand collaborations",
        "📊 Monetization & Scaling: Confused by analytics & metrics",
        "🥵 Creator Wellness: Burnout & content fatigue",
        "💬 Creator Wellness: Handling trolls/negativity",
        "📱 Creator Wellness: Managing too many platforms at once",
      ],
      goals: [
        "Increase monthly income to ₹50K+",
        "Build authentic community of 100K+",
        "Land partnerships with dream brands",
        "Launch my own product/course",
        "Become go-to expert in my niche",
        "Achieve viral content consistently",
        "Build email list of 10K subscribers",
        "Speak at industry events/podcasts",
        "Create passive income streams",
        "Quit my 9-5 and go full-time",
        "Expand into new platforms/formats",
        "Mentor other creators in my space",
      ],
    },
    buttons: {
      next: "अगला क���म",
      back: "पिछला",
      submit: "मेरा क्रिएटर विश्��ेषण पाएं",
    },
    freeResources: {
      title: "🎉 क्विज़ पूरा! यहाँ हैं आपके मुफ्त क्रिएटर संसाधन",
      subtitle:
        "अपनी क्रिएटर यात्रा शुरू करने के लिए ��न शक्तिशाली टूल्�� को डाउनलोड करें",
      mediaKit: {
        title: "प्र���फेशनल मीडिया किट टेम्प्लेट",
        description: "आकर्षक मीडिया किट बन���एं जो ब्रांड्स को पसंद आएंगे",
      },
      emailTemplates: {
        title: "ब्रांड आउटरीच ईमेल टेम्प्लेट्स",
        description: "��्रांड पार्टनरशिप के लिए 30+ सिद्ध ईमेल टेम्प्लेट्स",
      },
      growthGuide: {
        title: "90-दिन की ग्रोथ स्ट्रैटेजी गाइड",
        description: "अपने फॉलोइंग बढ़ाने के लिए स्टेप-बाई-स्टेप रोडमैप",
      },
      downloadFree: "मुफ्त डाउनलोड करें",
    },
  },
};

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>(initialQuizData);
  const [language, setLanguage] = useState<"english" | "hindi">(() => {
    // Get language from localStorage or URL params
    const savedLanguage = localStorage.getItem("famechase-language");
    const urlParams = new URLSearchParams(window.location.search);
    const urlLanguage = urlParams.get("lang");
    return (urlLanguage as "english" | "hindi") || (savedLanguage as "english" | "hindi") || "english";
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showFreeResources, setShowFreeResources] = useState(false);
  const navigate = useNavigate();
  const quizContentRef = useRef<HTMLDivElement>(null);

  const t = languages[language];
  const totalSteps = 9;

  // Save language preference and update quiz data when language changes
  React.useEffect(() => {
    localStorage.setItem("famechase-language", language);
    setQuizData(prev => ({ ...prev, language }));
  }, [language]);

  const updateQuizData = (field: keyof QuizData, value: any) => {
    setQuizData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSocialLink = (
    platform: keyof QuizData["socialLinks"],
    value: string,
  ) => {
    setQuizData((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return quizData.primaryPlatform && quizData.followerCount;
      case 2:
        return quizData.niche;
      case 3:
        return quizData.contentType;
      case 4:
        return quizData.postingFrequency;
      case 5:
        return quizData.experience.length > 0 && quizData.monthlyIncome;
      case 6:
        return quizData.biggestChallenge.length > 0;
      case 7:
        return quizData.goals.length > 0;
      case 8:
        return true; // Optional step
      case 9:
        return quizData.engagementRate; // Engagement rate step
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps && canProceed()) {
      setCurrentStep(currentStep + 1);
      // Auto-scroll to quiz content area (just below header)
      setTimeout(() => {
        if (quizContentRef.current) {
          quizContentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else if (currentStep === totalSteps) {
      setShowFreeResources(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Auto-scroll to quiz content area (just below header)
      setTimeout(() => {
        if (quizContentRef.current) {
          quizContentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleSubmit = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Save quiz data with language preference
    const finalQuizData = { ...quizData, language };
    localStorage.setItem("fameChaseQuizData", JSON.stringify(finalQuizData));

    // Navigate to results and scroll to top
    navigate("/results");

    // Auto-scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const toggleSecondaryPlatform = (platform: string) => {
    const platforms = quizData.secondaryPlatforms.includes(platform)
      ? quizData.secondaryPlatforms.filter((p) => p !== platform)
      : [...quizData.secondaryPlatforms, platform];
    updateQuizData("secondaryPlatforms", platforms);
  };

  const toggleMultipleChoice = (
    field: "experience" | "biggestChallenge" | "goals",
    value: string,
    maxSelection?: number,
  ) => {
    const currentValues = quizData[field];
    if (currentValues.includes(value)) {
      const newValues = currentValues.filter((v) => v !== value);
      updateQuizData(field, newValues);
    } else {
      if (!maxSelection || currentValues.length < maxSelection) {
        const newValues = [...currentValues, value];
        updateQuizData(field, newValues);
      }
    }
  };

  const generateDownload = (type: string, fileName: string) => {
    let content = "";
    const userName = quizData.name || "Creator";

    // Add font size indicator for 3X larger display
    const fontSizeIndicator = `
=== DISPLAY INSTRUCTIONS ===
Recommended Font Size: 24pt (3X larger than standard)
For best readability, increase font size in your PDF viewer or word processor.
Optimal zoom: 150-200% for comfortable reading.
==============================

`;

    if (type === "mediaKit") {
      content =
        fontSizeIndicator +
        `${language === "hindi" ? "मीडिया किट" : "MEDIA KIT"} - ${userName}

${language === "hindi" ? "व्यक्ति���त जानकारी:" : "PERSONAL INFO:"}
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche}
${language === "hindi" ? "���्ले���फॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "����ॉलो���र्स:" : "Followers:"} ${quizData.followerCount}

${language === "hindi" ? "सांख्यिकी और दर��ं:" : "STATISTICS & RATES:"}
${language === "hindi" ? "कंटेंट प्रकार:" : "Content Type:"} ${quizData.contentType}
${language === "hindi" ? "पोस्टिंग आवृत्ति:" : "Posting Frequency:"} ${quizData.postingFrequency}
${language === "hindi" ? "मासिक आ��:" : "Monthly Income:"} ${quizData.monthlyIncome}

${language === "hindi" ? "सुझावित दरें (भारतीय बाजार के आधार पर):" : "SUGGESTED RATES (Based on Indian Market):"}

${language === "hindi" ? "📱 प्लेटफॉर्म दरें:" : "��� PLATFORM RATES:"}
${language === "hindi" ? "Instagram पोस्ट:" : "Instagram Post:"} ₹${quizData.followerCount.includes("Less than 1K") ? "200-500" : quizData.followerCount.includes("1K - 5K") ? "500-1,000" : "1,000-3,000"}
${language === "hindi" ? "Instagram Reel:" : "Instagram Reel:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "Instagram Story:" : "Instagram Story:"} ₹${quizData.followerCount.includes("Less than 1K") ? "100-300" : quizData.followerCount.includes("1K - 5K") ? "300-500" : "500-1,500"}
${language === "hindi" ? "YouTube शॉर्ट:" : "YouTube Short:"} ₹${quizData.followerCount.includes("Less than 1K") ? "500-1,000" : quizData.followerCount.includes("1K - 5K") ? "1,000-2,000" : "2,000-5,000"}
${language === "hindi" ? "YouTube वी���ियो मेंशन:" : "YouTube Video Mention:"} ₹${quizData.followerCount.includes("Less than 1K") ? "1,000-2,000" : quizData.followerCount.includes("1K - 5K") ? "2,000-3,000" : "3,000-8,000"}
${language === "hindi" ? "Twitter पोस��ट:" : "Twitter Post:"} ₹${quizData.followerCount.includes("Less than 1K") ? "100-200" : quizData.followerCount.includes("1K - 5K") ? "200-400" : "400-1,000"}
${language === "hindi" ? "Newsletter मेंश��:" : "Newsletter Mention:"} ₹${quizData.followerCount.includes("Less than 1K") ? "200-500" : quizData.followerCount.includes("1K - 5K") ? "500-1,000" : "1,000-2,500"}

${language === "hindi" ? "📦 पैकेज दरें:" : "📦 PACKAGE RATES:"}
${language === "hindi" ? "• ब��सिक पैक���ज (1 पोस्ट + 2 स्टो���ी):" : "• Basic Package (1 Post + 2 Stories):"} ₹${quizData.followerCount.includes("Less than 1K") ? "400-800" : quizData.followerCount.includes("1K - 5K") ? "800-1,500" : "1,500-4,000"}
${language === "hindi" ? "• प्रीमियम पैकेज (2 पोस्ट + 1 र���ल + 3 स���टोरी):" : "• Premium Package (2 Posts + 1 Reel + 3 Stories):"} ₹${quizData.followerCount.includes("Less than 1K") ? "1,200-2,500" : quizData.followerCount.includes("1K - 5K") ? "2,500-4,500" : "4,500-12,000"}

${language === "hindi" ? "संपर्��:" : "CONTACT:"}
${language === "hindi" ? "ईमेल:" : "Email:"} ${quizData.email || "[your@email.com]"}
${language === "hindi" ? "सोशल लिंक्स:" : "Social Links:"}
- Instagram: ${quizData.socialLinks.instagram || "[Your Instagram]"}
- YouTube: ${quizData.socialLinks.youtube || "[Your YouTube]"}`;
    } else if (type === "emailTemplates") {
      content =
        fontSizeIndicator +
        `${language === "hindi" ? "6+ ���्रांड आ���टरीच ईमेल टेम्प्लेट्स" : "6+ BRAND OUTREACH EMAIL TEMPLATES"} - ${userName}

${language === "hindi" ? "टेम्प्ल���ट 1: प्रारंभिक संपर्क (कोल्�� आउटरीच)" : "TEMPLATE 1: INITIAL OUTREACH (COLD EMAIL)"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `सहयोग का प्रस्ताव - ${userName} X [ब्रांड नाम]` : `Collaboration Proposal - ${userName} X [Brand Name]`}

${language === "hindi" ? "प्रिय [ब्रांड ���ाम] टीम," : "Dear [Brand Name] Team,"}

${language === "hindi" ? `��ैं ${userName} हूं, ${quizData.niche} में एक कंटेंट क्रिएटर हूं जिसके ${quizData.primaryPlatform} पर ${quizData.followerCount} फॉलोअ����्स हैं।` : `I'm ${userName}, a content creator in ${quizData.niche} with ${quizData.followerCount} followers on ${quizData.primaryPlatform}.`}

${language === "hindi" ? "मुझे आपके ���्रांड के साथ काम करने में दिलचस्पी है क्योंकि:" : "I'd love to work with your brand because:"}
${language === "hindi" ? "- आपके उत्���ाद मेरे दर्शकों के साथ पूरी तरह ���ेल खाते हैं" : "- Your products align perfectly with my audience"}
${language === "hindi" ? `- मेरे दर्शक ${quizData.niche} में रुचि रखते हैं` : `- My audience is interested in ${quizData.niche}`}
${language === "hindi" ? "- मैं प्रामाणिक कंटेंट बनाने म��ं विशेषज्ञ हूं" : "- I specialize in creating authentic content"}

${language === "hindi" ? "स��ंख्यिकी:" : "Statistics:"}
${language === "hindi" ? "- फॉ���ोअर्स:" : "- Followers:"} ${quizData.followerCount}
${language === "hindi" ? "- कंटेंट प्रकार:" : "- Content Type:"} ${quizData.contentType}
${language === "hindi" ? "- प��स्टिंग आवृत्ति:" : "- Posting Frequency:"} ${quizData.postingFrequency}

${language === "hindi" ? "क्या आप स���योग के अवसरों पर ���र��चा करने के लिए समय निकाल ���कते हैं?" : "Would you be available to discuss collaboration opportunities?"}

${language === "hindi" ? "धन्यवाद," : "Best regards,"}
${userName}

---

${language === "hindi" ? "टेम्प्लेट 2: फॉलो-���प ईमेल" : "TEMPLATE 2: FOLLOW-UP EMAIL"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `फॉलो-अप: ${userName} कोलैबोरेशन प्रस्ताव` : `Follow-up: ${userName} Collaboration Proposal`}

${language === "hindi" ? "हैलो [संपर्क नाम]," : "Hi [Contact Name],"}

${language === "hindi" ? "मैंने पिछले सप्ताह आपक�� collaboration के बारे मे��� email भेजा था। मु���े लगता है कि हम एक amazing partnership create कर सकते हैं!" : "I sent you an email last week about collaboration opportunities. I believe we could create an amazing partnership!"}

${language === "hindi" ? "Recently मैंने [competitor brand] के साथ work किया और ���स post ���ो [specific results] मिले।" : "Recently I worked with [competitor brand] and that post received [specific results]."}

${language === "hindi" ? "क्या हम इस week एक quick 15-minute call schedule क��� सकते हैं?" : "Could we schedule a quick 15-minute call this week?"}

${language === "hindi" ? "Looking forward," : "Looking forward,"}
${userName}

---

${language === "hindi" ? "टेम्प्लेट 3: रेट कार्ड प्रेजेंटेशन" : "TEMPLATE 3: RATE CARD PRESENTATION"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `${userName} - Collaboration rates & packages` : `${userName} - Collaboration rates & packages`}

${language === "hindi" ? "Dear [Brand Name]," : "Dear [Brand Name],"}

${language === "hindi" ? "आपकी interest ��े लिए धन्यवाद! यहां मे��े collaboration packages हैं:" : "Thank you for your interest! Here are my collaboration packages:"}

${language === "hindi" ? "📸 सिंगल ��ोस्ट: ₹[आपकी rate]" : "📸 Single Post: ₹[Your rate]"}
${language === "hindi" ? "• 1 feed post with your product" : "• 1 feed post with your product"}
${language === "hindi" ? "• 24-hour story promotion" : "• 24-hour story promotion"}
${language === "hindi" ? "• Professional photography" : "• Professional photography"}

${language === "hindi" ? "📱 स्ट���र�� पैक���ज: ₹[आपकी rate]" : "📱 Story Package: ��[Your rate]"}
${language === "hindi" ? "• 3-5 story slides" : "• 3-5 story slides"}
${language === "hindi" ? "• Behind-the-scenes content" : "• Behind-the-scenes content"}

${language === "hindi" ? "🎥 रील्स कंटेंट: ₹[आपकी rate]" : "���� Reels Content: ₹[Your rate]"}
${language === "hindi" ? "• High-quality reel creation" : "• High-quality reel creation"}
${language === "hindi" ? "�� Trending music/sounds" : "• Trending music/sounds"}

${language === "hindi" ? "Best," : "Best,"}
${userName}

---

${language === "hindi" ? "टेम्����्लेट 4: न��गोसिएशन/काउंटर ऑफर" : "TEMPLATE 4: NEGOTIATION/COUNTER OFFER"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? "Re: Collaboration proposal - Let's find a win-win" : "Re: Collaboration proposal - Let's find a win-win"}

${language === "hindi" ? "Hi [Contact Name]," : "Hi [Contact Name],"}

${language === "hindi" ? "आपके proposal के लिए thank you! म��ं definitely interested ह��ं।" : "Thank you for your proposal! I'm definitely interested."}

${language === "hindi" ? "Considering my engagement rates और audience quality, क्या हम rate को slightly adjust कर सकते ��ैं? मैं ₹[your counter] suggest करूं��ा because:" : "Considering my engagement rates and audience quality, could we adjust the rate slightly? I'd suggest ₹[your counter] because:"}

${language === "hindi" ? "• मेरी audience क�� [specific demographic] match करता है आपके target से" : "• My audience demographic matches your target perfectly"}
${language === "hindi" ? "• मेरे recent collaborations में [specific results] मिले हैं" : "• My recent collaborations achieved [specific results]"}
${language === "hindi" ? "• मैं additional value add कर सकता ह��ं like [extra service]" : "• I can add additional value like [extra service]"}

${language === "hindi" ? "��ै��� flexible ह��ं औ��� ���� mutually beneficial deal बनाना चाहता हूं।" : "I'm flexible and want to create a mutually beneficial deal."}

${language === "hindi" ? "Best regards," : "Best regards,"}
${userName}

---

${language === "hindi" ? "टेम्प्लेट 5: प��फॉर्मेंस रिपो���्ट" : "TEMPLATE 5: PERFORMANCE REPORT"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `${userName} x [Brand] - Campaign Performance Report` : `${userName} x [Brand] - Campaign Performance Report`}

${language === "hindi" ? "Dear [Brand Team]," : "Dear [Brand Team],"}

${language === "hindi" ? "हमारे recent collaboration के results share करना चाहता हूं:" : "I wanted to share the results from our recent collaboration:"}

${language === "hindi" ? "📊 PERFORMANCE METRICS:" : "📊 PERFORMANCE METRICS:"}
${language === "hindi" ? "• Post Reach: [number] impressions" : "• Post Reach: [number] impressions"}
${language === "hindi" ? "• Engagement Rate: [percentage]" : "• Engagement Rate: [percentage]"}
${language === "hindi" ? "• Story Views: [number]" : "• Story Views: [number]"}
${language === "hindi" ? "�� Website Clicks: [number]" : "• Website Clicks: [number]"}

${language === "hindi" ? "🎯 AUDIENCE FEEDBACK:" : "🎯 AUDIENCE FEEDBACK:"}
${language === "hindi" ? "• [Positive feedback examples]" : "• [Positive feedback examples]"}
${language === "hindi" ? "• [Questions about product]" : "• [Questions about product]"}

${language === "hindi" ? "मुझे future collaborations में interest है और आपके products को authentically promote करना पसंद ह���।" : "I'm interested in future collaborations and love authentically promoting your products."}

${language === "hindi" ? "Thank you for trusting me!" : "Thank you for trusting me!"}
${userName}

---

${language === "hindi" ? "टेम्प्लेट 6: लॉन्ग-टर्म पार्टनरशिप प्र���ोज़ल" : "TEMPLATE 6: LONG-TERM PARTNERSHIP PROPOSAL"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `Long-term Partnership Proposal - ${userName} x [Brand]` : `Long-term Partnership Proposal - ${userName} x [Brand]`}

${language === "hindi" ? "Dear [Decision Maker]," : "Dear [Decision Maker],"}

${language === "hindi" ? "हमा��े successful collaboration के बा����, ���ैं एक long-term partnership propose करना चाहूंगा।" : "Following our successful collaboration, I'd like to propose a long-term partnership."}

${language === "hindi" ? "🤝 PROPOSED PARTNERSHIP:" : "🤝 PROPOSED PARTNERSHIP:"}
${language === "hindi" ? "���� Monthly content creation" : "• Monthly content creation"}
${language === "hindi" ? "• Product launches coverage" : "• Product launches coverage"}
${language === "hindi" ? "• Event participation" : "• Event participation"}
${language === "hindi" ? "• Brand ambassadorship" : "• Brand ambassadorship"}

${language === "hindi" ? "���� PROPOSED STRUCTURE:" : "💰 PROPOSED STRUCTURE:"}
${language === "hindi" ? "• Retainer fee: ₹[amount]/month" : "• Retainer fee: ₹[amount]/month"}
${language === "hindi" ? "• Performance bonuses" : "• Performance bonuses"}
${language === "hindi" ? "• Exclusive collaboration terms" : "• Exclusive collaboration terms"}

${language === "hindi" ? "📈 BENEFITS FOR YOUR BRAND:" : "📈 BENEFITS FOR YOUR BRAND:"}
${language === "hindi" ? "• Consistent brand presence" : "• Consistent brand presence"}
${language === "hindi" ? "• Authentic audience connection" : "• Authentic audience connection"}
${language === "hindi" ? "• Better content planning" : "• Better content planning"}
${language === "hindi" ? "• Cost-effective marketing" : "• Cost-effective marketing"}

${language === "hindi" ? "क्या आप इस opportunity को explore करने ���ें interested हैं?" : "Would you be interested in exploring this opportunity?"}

${language === "hindi" ? "Best," : "Best,"}
${userName}

---

${language === "hindi" ? "बोनस टिप्स:" : "BONUS TIPS:"}
${language === "hindi" ? "• हमेशा personalize करें emails" : "• Always personalize your emails"}
${language === "hindi" ? "• Subject lines को catchy रखें" : "��� Keep subject lines catchy"}
${language === "hindi" ? "• Follow-up करना न भूलें" : "• Don't forget to follow up"}
${language === "hindi" ? "• Professional tone maintain करें" : "• Maintain a professional tone"}
${language === "hindi" ? "• Results और metrics share करें" : "• Share results and metrics"}
${language === "hindi" ? "• Grateful और humble रहें" : "• Be grateful and humble"}`;
    } else if (type === "growthStrategy") {
      content =
        fontSizeIndicator +
        `${language === "hindi" ? "90-���िन की ग्रोथ रणनीति" : "90-DAY GROWTH STRATEGY"} - ${userName}

${language === "hindi" ? "व्यक्तिगत विश्लेषण:" : "PERSONAL ANALYSIS:"}
${language === "hindi" ? "वर्तमान स्थिति:" : "Current Status:"} ${quizData.followerCount} on ${quizData.primaryPlatform}
${language === "hindi" ? "म��ख्य चुनौति���ां:" : "Main Challenges:"} ${quizData.biggestChallenge.slice(0, 2).join(", ")}
${language === "hindi" ? "मुख्य लक्ष्य:" : "Primary Goals:"} ${quizData.goals.slice(0, 2).join(", ")}

${language === "hindi" ? "दिन 1-30: बुन������ाद म��बूत करना" : "DAYS 1-30: FOUNDATION BUILDING"}
${language === "hindi" ? "सप्ताह 1:" : "Week 1:"}
${language === "hindi" ? `- ${quizData.postingFrequency === "Daily" ? "अपनी वर्तमान आवृत्त��� बनाए रखें" : "पोस्टिंग आवृत्ति बढ़ाकर दैनिक करें"}` : `- ${quizData.postingFrequency === "Daily" ? "Maintain your current posting frequency" : "Increase posting frequency to daily"}`}
${language === "hindi" ? `- ${quizData.niche} पर 10 कंटेंट आ���डिया तैयार करें` : `- Prepare 10 content ideas for ${quizData.niche}`}
${language === "hindi" ? "- हैशटैग रिसर्च करें (30 हैशटैग मिक्स)" : "- Research hashtags (30 hashtag mix)"}

${language === "hindi" ? "सप्त��ह 2-4:" : "Week 2-4:"}
${language === "hindi" ? "- इंटरैक्टिव कंटे���ट बढ़ाएं (पोल्स, Q&A)" : "- Increase interactive content (polls, Q&A)"}
${language === "hindi" ? "- कम्युनिटी एंगेजमेंट फोक��� करें" : "- Focus on community engagement"}
${language === "hindi" ? "- एनालिटिक्स ट्रैक करना शु���ू क���ें" : "- Start tracking analytics"}

${language === "hindi" ? "दिन 31-60: विकास और अनुकूलन" : "DAYS 31-60: GROWTH & OPTIMIZATION"}
${language === "hindi" ? `- ${quizData.primaryPlatform === "Instagram" ? "रील्स पर फोकस करें (60% कंटेंट)" : "प्लेटफॉर्म-स्पेसिफिक कंटेंट बढ़ाएं"}` : `- ${quizData.primaryPlatform === "Instagram" ? "Focus on Reels (60% content)" : "Increase platform-specific content"}`}
${language === "hindi" ? "- ट्रेंडिंग टॉपि��्स पर कंटेंट बनाएं" : "- Create content on trending topics"}
${language === "hindi" ? "- अन्य क्रिएटर्स के साथ कोलैबोरेशन शुरू ���रें" : "- Start collaborations with other creators"}

${language === "hindi" ? "द��न 61-90: मुद्रीकरण की तैयारी" : "DAYS 61-90: MONETIZATION PREP"}
${language === "hindi" ? "- मीडिया किट तैयार करें" : "- Prepare media kit"}
${language === "hindi" ? "- ब्रां���्स से ���ंपर्क शुरू करें" : "- Start reaching out to brands"}
${language === "hindi" ? "- ईमेल लिस्ट बनाना शुरू करें" : "- Start building email list"}

${language === "hindi" ? "अपेक्षित परिणाम (90 दिन):" : "EXPECTED RESULTS (90 days):"}
${language === "hindi" ? "- फॉलोअर ग्रोथ: 40-80%" : "- Follower Growth: 40-80%"}
${language === "hindi" ? "- एंगेजमेंट में स���धार: 50-100%" : "- Engagement Improvement: 50-100%"}
${language === "hindi" ? "- ���्र��ंड पूछताछ: 3-8" : "- Brand Inquiries: 3-8"}`;
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

  if (showFreeResources) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="relative z-10 px-4 py-6 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-lg font-bold text-gray-900">
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
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.freeResources.title}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.freeResources.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Basic Media Kit Template - FREE VERSION */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  FREE STARTER
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Basic Media Kit Template
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple media kit template with basic stats and contact info - perfect for getting started
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ Professional template format<br/>
                  ✓ Industry-standard rate suggestions<br/>
                  ✓ Easy customization fields<br/>
                  ✓ Multi-platform rate structure
                </div>
                <button
                  onClick={() =>
                    generateDownload(
                      "mediaKit",
                      `${quizData.name || "Creator"}_Basic_Media_Kit_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.freeResources.downloadFree}
                </button>
              </div>

              {/* Email Templates - FREE VERSION */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  FREE STARTER
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Basic Email Templates (6)
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential outreach templates to get you started with brand partnerships
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ 6 proven email templates<br/>
                  ✓ Professional follow-up sequences<br/>
                  ✓ Ready-to-use pitch formats<br/>
                  ✓ Brand outreach best practices
                </div>
                <button
                  onClick={() =>
                    generateDownload(
                      "emailTemplates",
                      `Basic_Email_Templates_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.freeResources.downloadFree}
                </button>
              </div>

              {/* Growth Strategy - FREE VERSION */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  FREE STARTER
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Basic Growth Guide (30-Day)
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple 30-day action plan to get you started on your growth journey
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ Comprehensive 30-day action plan<br/>
                  ✓ Proven growth strategies<br/>
                  ✓ Daily actionable tasks<br/>
                  ✓ Progress tracking templates
                </div>
                <button
                  onClick={() =>
                    generateDownload(
                      "growthStrategy",
                      `Basic_Growth_Guide_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.freeResources.downloadFree}
                </button>
              </div>
            </div>



            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                {language === "hindi"
                  ? "अपना पूरा विश्लेषण चाहते हैं?"
                  : "Want Your Complete Analysis?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "व्यक्तिगत SWOT विश्लेषण, ���िका��� रणनीति, और प्र��म��यम टूल्��� के साथ अपनी क्रिएटर यात्���ा को तेज़ी से आगे बढ़ाएं।"
                  : "Get personalized SWOT analysis, growth strategy, and premium tools to accelerate your creator journey."}
              </p>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 inline mr-2" />
                {t.buttons.submit}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold text-gray-900">
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
      </header>



      {/* Quiz Content */}
      <main ref={quizContentRef} className="container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Animated Icons */}
            <div className="flex justify-center gap-4 mt-6">
              <Sparkles className="w-6 h-6 text-neon-green animate-pulse" />
              <Star className="w-6 h-6 text-electric-blue animate-pulse" />
              <Target className="w-6 h-6 text-soft-violet animate-pulse" />
            </div>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-16 shadow-2xl backdrop-blur-sm">
            {/* Add language selector in quiz */}
            <div className="flex justify-end mb-6">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "english" | "hindi")}
                className="bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded-lg text-sm font-medium"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी</option>
              </select>
            </div>
            {/* Loading State */}
            {isGenerating && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Generating Your Creator Analysis...
                </h2>
                <p className="text-gray-600">
                  Our AI is analyzing your responses and creating your
                  personalized toolkit
                </p>
              </div>
            )}

            {!isGenerating && (
              <>
                {/* Step 1: Primary Platform & Followers */}
                {currentStep === 1 && (
                  <div className="space-y-10">
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Main Platform
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Where do you create and share your content? This helps us understand your primary audience and platform-specific strategies.
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-xl">
                        {t.questions.primaryPlatform}
                      </label>
                      <select
                        value={quizData.primaryPlatform}
                        onChange={(e) => updateQuizData("primaryPlatform", e.target.value)}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                      >
                        <option value="">Select your primary platform</option>
                        {t.options.platforms.map((platform) => (
                          <option key={platform} value={platform}>
                            {platform}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-bold mb-6 text-xl">
                        {t.questions.followerCount}
                      </label>
                      <select
                        value={quizData.followerCount}
                        onChange={(e) => updateQuizData("followerCount", e.target.value)}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                      >
                        <option value="">Select your follower count</option>
                        {t.options.followerRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.secondaryPlatforms}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.platforms.map((platform) => (
                          <button
                            key={platform}
                            onClick={() => toggleSecondaryPlatform(platform)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                              quizData.secondaryPlatforms.includes(platform)
                                ? "bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Content Niche */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Your Content Niche 🎯
                      </h2>
                      <p className="text-gray-600">
                        What topics do you create content about?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.niche}
                      </label>
                      <select
                        value={quizData.niche}
                        onChange={(e) => updateQuizData("niche", e.target.value)}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-soft-violet focus:outline-none transition-colors text-lg"
                      >
                        <option value="">What topics do you create content about?</option>
                        {t.options.niches.map((niche) => (
                          <option key={niche} value={niche}>
                            {niche}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Content Type */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Content Format ��
                      </h2>
                      <p className="text-gray-600">
                        What type of content do you primarily create?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.contentType}
                      </label>
                      <select
                        value={quizData.contentType}
                        onChange={(e) => updateQuizData("contentType", e.target.value)}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                      >
                        <option value="">What type of content do you primarily create?</option>
                        {t.options.contentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 4: Posting Frequency */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Posting Schedule ⏰
                      </h2>
                      <p className="text-gray-600">
                        How often do you share new content?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.postingFrequency}
                      </label>
                      <select
                        value={quizData.postingFrequency}
                        onChange={(e) => updateQuizData("postingFrequency", e.target.value)}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-neon-green focus:outline-none transition-colors text-lg"
                      >
                        <option value="">How often do you share new content?</option>
                        {t.options.frequencies.map((freq) => (
                          <option key={freq} value={freq}>
                            {freq}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 5: Experience & Income */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Your Creator Journey 🚀
                      </h2>
                      <p className="text-gray-600">
                        Tell us about your experience and current income
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.experience}
                      </label>
                      <select
                        value={quizData.experience[0] || ""}
                        onChange={(e) => updateQuizData("experience", e.target.value ? [e.target.value] : [])}
                        className="w-full bg-white border-2 border-gray-300 text-gray-900 px-4 py-6 rounded-xl focus:border-soft-violet focus:outline-none transition-colors text-lg"
                      >
                        <option value="">How long have you been creating content? (Select all levels you've experienced)</option>
                        {t.options.experiences.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.monthlyIncome}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {t.options.incomes.map((income) => (
                          <button
                            key={income}
                            onClick={() =>
                              updateQuizData("monthlyIncome", income)
                            }
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 hover:scale-102 ${
                              quizData.monthlyIncome === income
                                ? "bg-gradient-to-r from-neon-green/20 to-electric-blue/20 border-neon-green text-gray-900 shadow-xl transform scale-102"
                                : "bg-white border-gray-200 text-gray-700 hover:border-neon-green/50 hover:shadow-lg"
                            }`}
                          >
                            {income}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 6: Biggest Challenge */}
                {currentStep === 6 && (
                  <div className="space-y-10">
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What's Your Biggest Struggle?
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Pick up to 3 challenges – we're all in this together! Understanding your pain points helps us provide better solutions.
                      </p>
                    </div>

                    <div>
                      <div className="grid grid-cols-1 gap-6">
                        {(() => {
                          // Group challenges by category
                          const groupedChallenges: { [key: string]: string[] } = {};
                          t.options.challenges.forEach((challenge: string) => {
                            const colonIndex = challenge.indexOf(':');
                            if (colonIndex > 0) {
                              const category = challenge.substring(0, colonIndex);
                              const challengeText = challenge.substring(colonIndex + 1).trim();
                              if (!groupedChallenges[category]) {
                                groupedChallenges[category] = [];
                              }
                              groupedChallenges[category].push(challenge);
                            }
                          });

                          return Object.entries(groupedChallenges).map(([category, challenges]) => (
                            <div key={category} className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                              <div className="grid grid-cols-1 gap-3">
                                {challenges.map((challenge) => (
                                  <button
                                    key={challenge}
                                    onClick={() =>
                                      toggleMultipleChoice(
                                        "biggestChallenge",
                                        challenge,
                                        3,
                                      )
                                    }
                                    disabled={
                                      !quizData.biggestChallenge.includes(challenge) &&
                                      quizData.biggestChallenge.length >= 3
                                    }
                                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-102 ${
                                      !quizData.biggestChallenge.includes(challenge) &&
                                      quizData.biggestChallenge.length >= 3
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                    } ${
                                      quizData.biggestChallenge.includes(challenge)
                                        ? "bg-gradient-to-r from-red-50 to-orange-50 border-red-400 text-gray-900 shadow-xl transform scale-102"
                                        : "bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:shadow-lg"
                                    }`}
                                  >
                                    <div className="flex items-start gap-3">
                                      {quizData.biggestChallenge.includes(challenge) && (
                                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                      )}
                                      <span className="text-base font-medium leading-relaxed">
                                        {challenge.split(': ')[1] || challenge}
                                      </span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ));
                        })()}
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                        <p className="text-center text-blue-800 font-medium">
                          Selected: {quizData.biggestChallenge.length} / 3 maximum
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 7: Goals */}
                {currentStep === 7 && (
                  <div className="space-y-10">
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {language === "hindi" ? "आपके 6-महीने के ��क्ष्य" : "Your 6-Month Goals"}
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {language === "hindi"
                          ? "आप अगले 6 महीनों में क्या हासिल करना चाहते हैं? 3 लक्ष्य चुनें जो आपको सबसे ज्यादा उत्साहित करते हैं!"
                          : "What do you want to achieve in the next 6 months? Choose up to 3 goals that excite you most!"}
                      </p>
                    </div>

                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.options.goals.map((goal) => (
                          <button
                            key={goal}
                            onClick={() =>
                              toggleMultipleChoice("goals", goal, 3)
                            }
                            disabled={
                              !quizData.goals.includes(goal) &&
                              quizData.goals.length >= 3
                            }
                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-102 ${
                              !quizData.goals.includes(goal) &&
                              quizData.goals.length >= 3
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            } ${
                              quizData.goals.includes(goal)
                                ? "bg-gradient-to-r from-green-50 to-blue-50 border-green-400 text-gray-900 shadow-xl transform scale-102"
                                : "bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:shadow-lg"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              {quizData.goals.includes(goal) && (
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                              )}
                              <span className="text-lg font-medium leading-relaxed">{goal}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
                        <p className="text-center text-green-800 font-medium">
                          Selected: {quizData.goals.length} / 3 maximum
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 8: Social Links */}
                {currentStep === 8 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">
                        Social Profiles 🔗
                      </h2>
                      <p className="text-gray-600">
                        Optional: Add your social links for better analysis
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.instagram}
                          onChange={(e) =>
                            updateSocialLink("instagram", e.target.value)
                          }
                          placeholder="@username"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-3 py-2 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                          <Youtube className="w-4 h-4 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.youtube}
                          onChange={(e) =>
                            updateSocialLink("youtube", e.target.value)
                          }
                          placeholder="@channel"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-3 py-2 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Linkedin className="w-4 h-4 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.linkedin}
                          onChange={(e) =>
                            updateSocialLink("linkedin", e.target.value)
                          }
                          placeholder="/in/username"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-3 py-2 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                          <Twitter className="w-4 h-4 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.twitter}
                          onChange={(e) =>
                            updateSocialLink("twitter", e.target.value)
                          }
                          placeholder="@username"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-3 py-2 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-3 md:col-span-2">
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.website}
                          onChange={(e) =>
                            updateSocialLink("website", e.target.value)
                          }
                          placeholder="yourwebsite.com"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-3 py-2 rounded-lg focus:border-electric-blue focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-3 text-lg">
                        {t.questions.bio}
                      </label>
                      <textarea
                        value={quizData.bio}
                        onChange={(e) => updateQuizData("bio", e.target.value)}
                        rows={4}
                        placeholder="Tell us about your content style, your audience, what makes you unique..."
                        className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-4 rounded-xl focus:border-electric-blue focus:outline-none resize-none text-lg"
                      />
                    </div>
                  </div>
                )}

                {/* Step 9: Engagement Rate */}
                {currentStep === 9 && (
                  <div className="space-y-10">
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Engagement Analytics
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        Understanding your engagement helps us provide better monetization recommendations
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
                        <p className="text-blue-800 font-medium">
                          💡 Engagement Rate = (likes + comments + shares) ÷ followers × 100
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-bold mb-8 text-2xl text-center">
                        What's your average engagement rate?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.engagementRates.map((rate) => (
                          <button
                            key={rate}
                            onClick={() => updateQuizData("engagementRate", rate)}
                            className={`p-6 rounded-2xl border-2 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                              quizData.engagementRate === rate
                                ? "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-400 text-gray-900 shadow-xl transform scale-105"
                                : "bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:shadow-lg"
                            }`}
                          >
                            {rate}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-16 pt-8 border-t-2 border-gray-100">
                  {currentStep > 1 ? (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      {t.buttons.back}
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {/* Progress indicator */}
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">
                      Step {currentStep} of {totalSteps}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {Math.round((currentStep / totalSteps) * 100)}%
                    </div>
                  </div>

                  {currentStep < totalSteps ? (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {t.buttons.next}
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                    >
                      Complete Quiz
                      <Sparkles className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
