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
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
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
  phone: string;
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
  phone: "",
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
      2: "Follower Count",
      3: "Other Platforms",
      4: "Content Niche",
      5: "Content Type",
      6: "Posting Frequency",
      7: "Experience",
      8: "Income",
      9: "Biggest Challenge",
      10: "Goals",
      11: "Social Links",
      12: "Engagement Rate",
      13: "Contact Info",
    },
    questions: {
      name: "What's your name?",
      email: "What's your email address?",
      phone: "What's your phone number? (Optional)",
      city: "Which city are you from?",
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
      goals: "What are your main goals for the next 6 months? (Select max 3)",
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
        "₹1K–5K",
        "₹5K–15K",
        "₹15K–30K",
        "₹30K–50K",
        "₹50K–1L",
        "₹1L+",
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
        "Reach 10K / 50K / 100K+ Followers",
        "Earn ₹25K / ₹50K / ₹1L+ per month",
        "Get Brand Collaborations",
        "Build Personal Brand",
        "Create Viral Content",
        "Post More Consistently",
        "Expand to New Platforms",
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
      1: "बुनियादी जानकारी",
      2: "प्लेटफ़ॉर्म और फॉलोअर्स",
      3: "कंटेंट निच",
      4: "कंटेंट प्रकार",
      5: "पोस्टिंग आवृत्ति",
      6: "अनुभव और आय",
      7: "सबसे बड़ी चुनौती",
      8: "लक्ष्य",
      9: "सोशल लिंक्स",
      10: "एंगेजमेंट रेट",
    },
    questions: {
      name: "आपका नाम क्या है?",
      email: "आपका ईमेल पता क्या है?",
      phone: "आपका फोन नंबर क्या है? (वैकल्पिक)",
      city: "आप किस शहर से हैं?",
      primaryPlatform: "आप किस प्लेटफ़ॉर्म पर मुख्य रूप से कंटेंट बनाते हैं?",
      followerCount: "आपके प्राथमिक प्लेटफ़ॉर्म पर कितने फॉलोअर्स हैं?",
      secondaryPlatforms:
        "आप और कौन से प्लेटफ़ॉर्म का उपयोग करते हैं? (कई विकल्प चुनें)",
      niche: "आपका कंटेंट किस विषय पर है?",
      contentType: "आप किस प्रकार का कंटेंट बनाते हैं?",
      postingFrequency: "आप कितनी बार कंटेंट पोस्ट करते हैं?",
      experience:
        "आप कितने समय से कंटेंट बना रहे हैं? (अनुभव का स्तर चुनें)",
      monthlyIncome: "कंटेंट से आपकी वर्तमान मासिक आय क्या है?",
      biggestChallenge:
        "आपकी सबसे बड़ी चुनौतियाँ क्या हैं? (अधिकतम 3 चुनें)",
      goals:
        "अगले 6 महीनों के लिए आपके मुख्य लक्ष्य क्या हैं? (अधिकतम 3 चुनें)",
      socialLinks: "अपनी सोशल उपस्थिति साझा करें (वैकल्पिक)",
      bio: "अपने और अपने कंटेंट के बारे में कुछ और बताएं (वैकल्पिक)",
      engagementRate: "आपका औसत एंगेजमेंट रेट क्या है?",
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
        "फैशन & ब्यूटी",
        "टेक्नोलॉजी और AI",
        "खाना और खाना बनाना",
        "यात्रा और एडवेंचर",
        "फिटनेस और स्वास्थ्य",
        "व्यक्तिगत वित्त और निवेश",
        "मनोरंजन और कॉमेडी",
        "उद्यमिता और व्यापार",
        "लाइफस्टाइल और वेलनेस",
        "कला और डिज़ाइन",
        "गेमिंग और ईस्पोर्ट्स",
        "संगीत और नृत्य",
        "शिक्षा और सीखना",
        "खेल और एथलेटिक्स",
        "प्रेरणा और स्व-सहायता",
        "पेरेंटिंग और परिवार",
        "DIY और शिल्प",
        "आध्यात्म और माइंडफुलनेस",
        "अन्य",
      ],
      contentTypes: [
        "फोटो और कैरोसेल",
        "छोटे वीडियो/रिल्स",
        "लंबे वीडियो",
        "लाइव स्ट्रीम",
        "स्टोरीज़",
        "लिखित पोस्ट",
        "पॉडकास्ट",
        "मिश्रित कंटेंट",
      ],
      frequencies: [
        "रोज़ाना",
        "सप्ताह में 3-4 बार",
        "साप्ताहिक",
        "महीने में 2-3 बार",
        "महीने में 1 बार",
        "अनियमित",
      ],
      experiences: [
        "अभी शुरू किया (0-6 महीने)",
        "शुरुआती (6 महीने - 1 साल)",
        "बढ़ रहा (1-2 साल)",
        "अनुभवी (2-3 साल)",
        "विशेषज्ञ (3+ साल)",
      ],
      incomes: [
        "₹0 (अभी तक कोई आय नहीं)",
        "₹1K–5K",
        "₹5K–15K",
        "₹15K–30K",
        "₹30K–50K",
        "₹50K–1L",
        "₹1L+",
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
        "मासिक आय बढ़ाना (₹25K/₹50K/₹1L+)",
        "10K / 50K / 100K+ Followers तक पहुँचाना",
        "ब्रांड साझेदारियाँ पाना",
        "पर्सनल ब्रांड बनाना",
        "वायरल कंटेंट बनाना",
        "कंसिस्टेंट पोस्टिंग बढ़ाना",
        "नए प्लेटफॉर्म्स पर विस्तार करना",
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
    },
    buttons: {
      next: "अगला कदम",
      back: "पिछला",
      submit: "मेरा क्रिएटर विश्लेषण पाएं",
    },
    freeResources: {
      title: "🎉 क्विज़ पूरा! आपके मुफ्त क्रिएटर संसाधन",
      subtitle: "अपनी क्रिएटर यात्रा शुरू करने के लिए ये उपकरण डाउनलोड करें",
      mediaKit: {
        title: "प्रोफेशनल मीडिया किट टेम्पलेट",
        description: "आकर्षक मीडिया किट बनाएं जो ब्रांड्स पसंद करें",
      },
      emailTemplates: {
        title: "ब्रांड आउटरीच ईमेल टेम्पलेट्स",
        description: "ब्रांड पार्टनरशिप के लिए 30+ सिद्ध ईमेल टेम्पलेट्स",
      },
      growthGuide: {
        title: "90-दिन ग्रोथ स्ट्रैटेजी गाइड",
        description: "अपने फॉलोइंग बढ़ाने के लिए स्टेप-बाई-स्टेप रोडमैप",
      },
      downloadFree: "मुफ्त डाउनलोड करें",
    },
  },
};

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>(initialQuizData);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showFreeResources, setShowFreeResources] = useState(false);
  const navigate = useNavigate();
  const quizContentRef = useRef<HTMLDivElement>(null);

  const t = languages[language];
  const totalSteps = 13;

  // Save language preference and update quiz data when language changes
  React.useEffect(() => {
    localStorage.setItem("famechase-language", language);
    setQuizData((prev) => ({ ...prev, language: language }));
  }, [language]);

  // Scroll to top when quiz page loads
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Scroll to top when free resources page is shown
  React.useEffect(() => {
    if (showFreeResources) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showFreeResources]);

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
        return quizData.primaryPlatform;
      case 2:
        return quizData.followerCount;
      case 3:
        return quizData.secondaryPlatforms.length > 0;
      case 4:
        return quizData.niche;
      case 5:
        return quizData.contentType;
      case 6:
        return quizData.postingFrequency;
      case 7:
        return quizData.experience.length > 0;
      case 8:
        return quizData.monthlyIncome;
      case 9:
        return quizData.biggestChallenge.length >= 1;
      case 10:
        return quizData.goals.length > 0;
      case 11:
        return true; // Optional step (social links)
      case 12:
        return quizData.engagementRate;
      case 13:
        return quizData.name && quizData.email && quizData.city; // Contact info at end
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
      // Auto-scroll to top when showing free resources page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
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

    try {
      // Save quiz data with selected language preference
      const finalQuizData = { ...quizData, language: language };
      localStorage.setItem("fameChaseQuizData", JSON.stringify(finalQuizData));

      // Save user data to Supabase if configured
      if (isSupabaseConfigured() && supabase) {
        const userData = {
          name: quizData.name,
          email: quizData.email,
          phone: quizData.phone || null,
          city: quizData.city,
          niche: quizData.niche,
          primary_platform: quizData.primaryPlatform,
          follower_count: quizData.followerCount,
          goals: quizData.goals,
          quiz_data: finalQuizData,
        };

        const { error } = await supabase.from("users").upsert([userData], {
          onConflict: "email",
          ignoreDuplicates: false,
        });

        if (error) {
          console.error("Error saving user data to Supabase:", error);
          // Continue anyway - don't block the user experience
        } else {
          console.log("User data saved to Supabase successfully");
        }
      }

      // Small delay for user experience
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Navigate to results with immediate scroll to top
      navigate("/results");

      // Force immediate scroll to top of results page
      window.scrollTo({ top: 0, behavior: "auto" });

      // Additional scroll after navigation completes
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      // Continue with navigation even if there's an error
      navigate("/results");
      window.scrollTo({ top: 0, behavior: "auto" });
    } finally {
      setIsGenerating(false);
    }
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

    // Add font size indicator for much larger display
    const fontSizeIndicator = `
 === DISPLAY INSTRUCTIONS ===
 IMPORTANT: Set Font Size to 18-22pt for comfortable reading
 Please zoom to 150-200% or increase font size in your viewer
 This content is optimized for larger text display for better readability
 ========================================================

 `;

    if (type === "mediaKit") {
      content =
        fontSizeIndicator +
        `${language === "hindi" ? "मीडया किट" : "MEDIA KIT"} - ${userName}

 ${language === "hindi" ? "व्यक्तिगत जानकारी:" : "PERSONAL INFO:"}
 ${language === "hindi" ? "नाम:" : "Name:"} ${userName}
 ${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche}
 ${language === "hindi" ? "प्लेटफ़ॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
 ${language === "hindi" ? "फॉलोअर्स:" : "Followers:"} ${quizData.followerCount}

 ${language === "hindi" ? "सांख्यिकी और दरें:" : "STATISTICS & RATES:"}
 ${language === "hindi" ? "कंटेंट प्रकार:" : "Content Type:"} ${quizData.contentType}
 ${language === "hindi" ? "पोस्टिंग आवृत्ति:" : "Posting Frequency:"} ${quizData.postingFrequency}
 ${language === "hindi" ? "मासिक आय:" : "Monthly Income:"} ${quizData.monthlyIncome}

 ${language === "hindi" ? "सुझावित दरें (भारतीय बाजार के आधार पर):" : "SUGGESTED RATES (Based on Indian Market):"}

 ${language === "hindi" ? "Instagram पोस्ट:" : "Instagram Post:"} ...`;
    } else if (type === "emailTemplates") {
      content = fontSizeIndicator + `${language === "hindi" ? "ईमेल टेम्पलेट्स" : "EMAIL TEMPLATES"} - ${userName}\n\n...`;
    } else if (type === "growthStrategy") {
      content = fontSizeIndicator + `${language === "hindi" ? "90-दिन ग्रोथ रणनीति" : "90-DAY GROWTH STRATEGY"} - ${userName}\n\n...`;
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
              {/* Language Selector */}
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
                  Simple media kit template with basic stats and contact info -
                  perfect for getting started
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ Professional template format
                  <br />
                  ✓ Industry-standard rate suggestions
                  <br />
                  ✓ Easy customization fields
                  <br />✓ Multi-platform rate structure
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
                  Essential outreach templates to get you started with brand
                  partnerships
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ 6 proven email templates
                  <br />
                  ✓ Professional follow-up sequences
                  <br />
                  ✓ Ready-to-use pitch formats
                  <br />✓ Brand outreach best practices
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
                  Simple 30-day action plan to get you started on your growth
                  journey
                </p>
                <div className="text-sm text-green-600 mb-4">
                  ✓ Comprehensive 30-day action plan
                  <br />
                  ✓ Proven growth strategies
                  <br />
                  ✓ Daily actionable tasks
                  <br />✓ Progress tracking templates
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
                  ? "व्यक्तिगत SWOT विश्लेषण, रणनीति, और प्रीमियम टूल्स के साथ अपने क्रिएटर करियर को तेज़ करें।"
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
      <header className="relative z-10 px-2 md:px-4 py-3 md:py-4 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-base md:text-lg font-bold text-gray-900">
            FameChase<span className="text-neon-green">.com</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/"
              className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base"
            >
              <Home className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value as "english" | "hindi")
              }
              className="bg-white border border-gray-300 text-gray-900 px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium"
            >
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>
        </div>
      </header>

      {/* Quiz Content */}
      <main
        ref={quizContentRef}
        className="container mx-auto px-2 md:px-4 py-2"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-4 md:mb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
              {t.title}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed px-2">
              {t.subtitle}
            </p>

            {/* Animated Icons */}
            <div className="flex justify-center gap-3 mt-3">
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-neon-green animate-pulse" />
              <Star className="w-4 h-4 md:w-6 md:h-6 text-electric-blue animate-pulse" />
              <Target className="w-4 h-4 md:w-6 md:h-6 text-soft-violet animate-pulse" />
            </div>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 md:p-8 shadow-xl backdrop-blur-sm min-h-[70vh] flex flex-col justify-between">
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