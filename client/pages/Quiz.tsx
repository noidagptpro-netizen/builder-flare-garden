import React, { useState } from "react";
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
      goals: "What are your main goals for the next 6 months? (Select max 3)",
      socialLinks: "Share Your Social Presence (Optional)",
      bio: "Tell us about yourself and your content (optional)",
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
      5: "अनुभव और आय",
      6: "सबसे बड़ी चुनौती",
      7: "लक्ष्य",
      8: "सोशल लिंक्स",
    },
    questions: {
      primaryPlatform: "आप मुख्यतः किस प्लेटफॉर्म पर कंटेंट बनाते हैं?",
      followerCount: "आपके प्राथमिक प्लेटफॉर्म पर कितने फॉलोअर्स हैं?",
      secondaryPlatforms:
        "आप और कौन से प्लेटफॉर्म का उपयोग करते हैं? (सभी लागू का चयन करें)",
      niche: "आपका कंटेंट किस विषय पर है?",
      contentType: "आप किस प्रकार का कंटेंट बनाते हैं?",
      postingFrequency: "आप कितनी बार कंटेंट पोस्ट करते हैं?",
      experience:
        "आप कितने समय से कंटेंट बना रहे हैं? (सभी स्तर चुनें जिनका आपने अनुभव किया है)",
      monthlyIncome: "कंटेंट से आपकी वर्तमान मासिक आय क्या है?",
      biggestChallenge:
        "एक क्रिएटर के रूप में आपकी सबसे बड़ी चुनौतियां क्या हैं? (अधिकतम 3 चुनें)",
      goals:
        "अगले 6 महीनों के लिए आपके मुख्य लक्ष्य क्या हैं? (अधिकतम 3 चुनें)",
      socialLinks: "अपनी सोशल उपस्थिति साझा करें (वैकल्पिक)",
      bio: "अपने और अपने कंटेंट के बारे में बताएं (वैकल्पिक)",
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
        "फ��टनेस और ���्वास्थ्य",
        "व्यक्तिगत वित्त और निवेश",
        "मनोरंजन और कॉमेडी",
        "उद्यमिता और व्यापार",
        "जीवनशैली और कल्याण",
        "कला और डिज़ाइन",
        "गेमिंग और एस्पोर्ट्स",
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
        "सप्ताह में 3-4 बार",
        "साप्ताहिक",
        "महीने में 2-3 बार",
        "मासिक",
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
        "लगातार व्यूज और एंगेजमेंट पाना",
        "अपनी यूनीक आवाज़/स्टाइल खोजना",
        "एल्गोरिदम बदलाव से पहुंच में कमी",
        "ऑथेंटिसिटी और ब्रांड अपील का संतुलन",
        "बड़े क्रिएटर्स से कॉम्पिटिश���",
        "फॉलोअर्स को पेइंग कस्टमर बनाना",
        "नेगेटिव कमेंट्स/ट्रोल्स से निपटना",
        "बर्नआउट और कंटेंट थकान",
        "एनालिटिक्स और मेट्रिक्स समझना",
        "सच्ची कम्युनिटी बनाना",
        "ट्रेंड्स के साथ रिलेवेंट रहना",
        "कई प्लेटफॉर्म को efficiently मैनेज करना",
      ],
      goals: [
        "मासिक आय ₹50K+ तक बढ़ाना",
        "100K+ की authentic कम्युनिटी बनाना",
        "ड्रीम ब्रांड्स के साथ पार्टनरशिप",
        "अपना प्रोडक्ट/कोर्स लॉन्च करना",
        "अपनी niche में go-to एक्सपर्ट बनना",
        "लगातार वायरल कंटेंट बनाना",
        "10K सब्सक्राइबर्स की email लिस्ट",
        "इंडस्ट्री ���वेंट��स/पॉडकास्ट्स में बोलना",
        "पैसिव इनकम स्ट्रीम्स बनाना",
        "9-5 job छोड़कर फुल-टाइम जाना",
        "नए प्लेटफॉर्म्स/फॉर्मेट्स में expand करना",
        "अपनी स्पेस में दूसरे क्रिएटर्स को mentor करना",
      ],
    },
    buttons: {
      next: "अगला कदम",
      back: "पिछला",
      submit: "मेरा क्रिएटर विश्लेषण पाएं",
    },
    freeResources: {
      title: "🎉 क्विज़ पूरा! यहाँ हैं आपके मुफ्त क्रिएटर संसाधन",
      subtitle:
        "अपनी क्रिएटर यात्रा शुरू करने के लिए इन शक्तिशाली टूल्स को डाउनलोड करें",
      mediaKit: {
        title: "प्रोफेशनल मीडिया किट टेम्प्लेट",
        description: "आकर्षक मीडिया किट बनाएं जो ब्रांड्स को पसंद आएंगे",
      },
      emailTemplates: {
        title: "ब्रांड आउटरीच ईमेल टेम्प्लेट्स",
        description: "ब्रांड पार्टनरशिप के लिए 30+ सिद्ध ईमेल टेम्प्लेट्स",
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
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showFreeResources, setShowFreeResources] = useState(false);
  const navigate = useNavigate();

  const t = languages[language];
  const totalSteps = 8;

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
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps && canProceed()) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      setShowFreeResources(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    localStorage.setItem("fameChaseQuizData", JSON.stringify(quizData));
    navigate("/results");
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

    if (type === "mediaKit") {
      content = `${language === "hindi" ? "मीडिया किट" : "MEDIA KIT"} - ${userName}

${language === "hindi" ? "व्यक्तिगत जानकारी:" : "PERSONAL INFO:"}
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "निच:" : "Niche:"} ${quizData.niche}
${language === "hindi" ? "प्लेटफॉर्म:" : "Platform:"} ${quizData.primaryPlatform}
${language === "hindi" ? "फॉलोअर्स:" : "Followers:"} ${quizData.followerCount}

${language === "hindi" ? "सांख्यिकी और दरें:" : "STATISTICS & RATES:"}
${language === "hindi" ? "कंटेंट प्रकार:" : "Content Type:"} ${quizData.contentType}
${language === "hindi" ? "पोस्टिंग आवृत्ति:" : "Posting Frequency:"} ${quizData.postingFrequency}
${language === "hindi" ? "मासिक आय:" : "Monthly Income:"} ${quizData.monthlyIncome}

${language === "hindi" ? "सुझावित दरें (आपकी ऑडियंस के आधार पर):" : "SUGGESTED RATES (Based on your audience):"}
${language === "hindi" ? "पोस्ट दरें:" : "Post Rates:"} ₹${quizData.followerCount.includes("Less than 1K") ? "2,000-5,000" : quizData.followerCount.includes("1K - 5K") ? "5,000-12,000" : "15,000-50,000"}
${language === "hindi" ? "स्टोरी दरें:" : "Story Rates:"} ₹${quizData.followerCount.includes("Less than 1K") ? "1,000-3,000" : quizData.followerCount.includes("1K - 5K") ? "3,000-8,000" : "8,000-25,000"}
${language === "hindi" ? "��ील दरें:" : "Reel Rates:"} ₹${quizData.followerCount.includes("Less than 1K") ? "3,000-8,000" : quizData.followerCount.includes("1K - 5K") ? "8,000-20,000" : "25,000-75,000"}

${language === "hindi" ? "संपर्क:" : "CONTACT:"}
${language === "hindi" ? "ईमेल:" : "Email:"} ${quizData.email || "[your@email.com]"}
${language === "hindi" ? "सोशल लिंक्स:" : "Social Links:"}
- Instagram: ${quizData.socialLinks.instagram || "[Your Instagram]"}
- YouTube: ${quizData.socialLinks.youtube || "[Your YouTube]"}`;
    } else if (type === "emailTemplates") {
      content = `${language === "hindi" ? "ब्रांड आउटरीच ईमेल टेम्प्लेट्स" : "BRAND OUTREACH EMAIL TEMPLATES"} - ${userName}

${language === "hindi" ? "टेम्प्लेट 1: प्रारंभिक संपर्क" : "TEMPLATE 1: INITIAL OUTREACH"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? `सहयोग का प्रस्ताव - ${userName} X [ब्रांड नाम]` : `Collaboration Proposal - ${userName} X [Brand Name]`}

${language === "hindi" ? "प्रिय [ब्रांड नाम] टीम," : "Dear [Brand Name] Team,"}

${language === "hindi" ? `मैं ${userName} हूं, ${quizData.niche} में एक कंटेंट क्रिएटर हूं जिसके ${quizData.primaryPlatform} पर ${quizData.followerCount} फॉलोअर्स हैं।` : `I'm ${userName}, a content creator in ${quizData.niche} with ${quizData.followerCount} followers on ${quizData.primaryPlatform}.`}

${language === "hindi" ? "मुझे आपके ब्रांड के साथ काम करने में दिलचस्पी है क्योंकि:" : "I'd love to work with your brand because:"}
${language === "hindi" ? "- आपके उत्पाद मेरे दर्शकों के साथ पूरी तरह मेल खाते हैं" : "- Your products align perfectly with my audience"}
${language === "hindi" ? `- मेरे दर्शक ${quizData.niche} में रुचि रखते हैं` : `- My audience is interested in ${quizData.niche}`}
${language === "hindi" ? "- मैं प्रामाणिक कंटेंट बनाने में विशेषज्ञ हूं" : "- I specialize in creating authentic content"}

${language === "hindi" ? "सांख्यिकी:" : "Statistics:"}
${language === "hindi" ? "- फॉलोअर्स:" : "- Followers:"} ${quizData.followerCount}
${language === "hindi" ? "- कंटेंट प्रकार:" : "- Content Type:"} ${quizData.contentType}
${language === "hindi" ? "- पोस्टिंग आवृत्ति:" : "- Posting Frequency:"} ${quizData.postingFrequency}

${language === "hindi" ? "क्या आप सहयोग के अवसरों पर चर्चा करने के लिए समय निकाल सकते हैं?" : "Would you be available to discuss collaboration opportunities?"}

${language === "hindi" ? "धन्यवाद," : "Best regards,"}
${userName}`;
    } else if (type === "growthStrategy") {
      content = `${language === "hindi" ? "90-दिन की ग्रोथ रणनीति" : "90-DAY GROWTH STRATEGY"} - ${userName}

${language === "hindi" ? "व्यक्तिगत विश्लेषण:" : "PERSONAL ANALYSIS:"}
${language === "hindi" ? "वर्तमान स्थिति:" : "Current Status:"} ${quizData.followerCount} on ${quizData.primaryPlatform}
${language === "hindi" ? "मुख्य चुनौतियां:" : "Main Challenges:"} ${quizData.biggestChallenge.slice(0, 2).join(", ")}
${language === "hindi" ? "मुख्य लक्ष्य:" : "Primary Goals:"} ${quizData.goals.slice(0, 2).join(", ")}

${language === "hindi" ? "दिन 1-30: बुनियाद मजबूत करना" : "DAYS 1-30: FOUNDATION BUILDING"}
${language === "hindi" ? "सप्ताह 1:" : "Week 1:"}
${language === "hindi" ? `- ${quizData.postingFrequency === "Daily" ? "अपनी वर्तमान आवृत्ति बनाए रखें" : "पोस्टिंग आवृत्ति बढ़ाकर दैनिक करें"}` : `- ${quizData.postingFrequency === "Daily" ? "Maintain your current posting frequency" : "Increase posting frequency to daily"}`}
${language === "hindi" ? `- ${quizData.niche} पर 10 कंटेंट आइडिया तैयार करें` : `- Prepare 10 content ideas for ${quizData.niche}`}
${language === "hindi" ? "- हैशटैग रिसर्च करें (30 हैशटैग मिक्स)" : "- Research hashtags (30 hashtag mix)"}

${language === "hindi" ? "सप्ताह 2-4:" : "Week 2-4:"}
${language === "hindi" ? "- इंटरैक्टिव कंटेंट बढ़ाएं (पोल्स, Q&A)" : "- Increase interactive content (polls, Q&A)"}
${language === "hindi" ? "- कम्युनिटी एंगेजमेंट फोकस करें" : "- Focus on community engagement"}
${language === "hindi" ? "- एनालिटिक्स ट्रैक करना शुरू करें" : "- Start tracking analytics"}

${language === "hindi" ? "दिन 31-60: विकास और अनुकूलन" : "DAYS 31-60: GROWTH & OPTIMIZATION"}
${language === "hindi" ? `- ${quizData.primaryPlatform === "Instagram" ? "रील्स पर फोकस करें (60% कंटेंट)" : "प्लेटफॉर्म-स्पेसिफिक कंटेंट बढ़ाएं"}` : `- ${quizData.primaryPlatform === "Instagram" ? "Focus on Reels (60% content)" : "Increase platform-specific content"}`}
${language === "hindi" ? "- ट्रेंडिंग टॉपिक्स पर कंटेंट बनाएं" : "- Create content on trending topics"}
${language === "hindi" ? "- अन्य क्रिएटर्स के साथ कोलैबोरेशन शुरू करें" : "- Start collaborations with other creators"}

${language === "hindi" ? "दिन 61-90: मुद्रीकरण की तैयारी" : "DAYS 61-90: MONETIZATION PREP"}
${language === "hindi" ? "- मीडिया किट तैयार करे��" : "- Prepare media kit"}
${language === "hindi" ? "- ब्रांड्स से संपर्क शुरू करें" : "- Start reaching out to brands"}
${language === "hindi" ? "- ईमेल लिस्ट बनाना शुरू करें" : "- Start building email list"}

${language === "hindi" ? "अपेक्षित परिणाम (90 दिन):" : "EXPECTED RESULTS (90 days):"}
${language === "hindi" ? "- फॉलोअर ग्रोथ: 40-80%" : "- Follower Growth: 40-80%"}
${language === "hindi" ? "- एंगेजमेंट में सुधार: 50-100%" : "- Engagement Improvement: 50-100%"}
${language === "hindi" ? "- ब्रांड इंक्वायरी: 3-8" : "- Brand Inquiries: 3-8"}`;
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
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.freeResources.title}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.freeResources.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Media Kit Template */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.freeResources.mediaKit.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.freeResources.mediaKit.description}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "mediaKit",
                      `${quizData.name || "Creator"}_Media_Kit_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.freeResources.downloadFree}
                </button>
              </div>

              {/* Email Templates */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.freeResources.emailTemplates.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.freeResources.emailTemplates.description}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "emailTemplates",
                      `Brand_Outreach_Templates_${language}.txt`,
                    )
                  }
                  className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  {t.freeResources.downloadFree}
                </button>
              </div>

              {/* Growth Strategy */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-neon-green transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.freeResources.growthGuide.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.freeResources.growthGuide.description}
                </p>
                <button
                  onClick={() =>
                    generateDownload(
                      "growthStrategy",
                      `90_Day_Growth_Strategy_${language}.txt`,
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "hindi"
                  ? "अपना पूरा विश्लेषण चाहते हैं?"
                  : "Want Your Complete Analysis?"}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === "hindi"
                  ? "व्यक्तिगत SWOT विश्लेषण, विकास रणनीति, और प्रीमियम टूल्स के साथ अपनी क्रिएटर यात्रा को तेज़ी से आगे बढ़ाएं।"
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

            <div className="text-gray-600 text-sm font-medium">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                (step) => (
                  <div
                    key={step}
                    className={`w-8 h-3 rounded-full transition-all duration-500 ${
                      step <= currentStep
                        ? "bg-gradient-to-r from-neon-green to-electric-blue"
                        : "bg-gray-300"
                    }`}
                  />
                ),
              )}
            </div>
          </div>
          <div className="text-center text-gray-700 font-medium">
            {t.steps[currentStep as keyof typeof t.steps]}
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Animated Icons */}
            <div className="flex justify-center gap-4 mt-6">
              <Sparkles className="w-6 h-6 text-neon-green animate-pulse" />
              <Star className="w-6 h-6 text-electric-blue animate-pulse" />
              <Target className="w-6 h-6 text-soft-violet animate-pulse" />
            </div>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Loading State */}
            {isGenerating && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
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
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Main Platform 📱
                      </h2>
                      <p className="text-gray-600">
                        Where do you create and share your content?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.primaryPlatform}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.platforms.map((platform) => (
                          <button
                            key={platform}
                            onClick={() =>
                              updateQuizData("primaryPlatform", platform)
                            }
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.primaryPlatform === platform
                                ? "bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border-electric-blue text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.followerCount}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.followerRanges.map((range) => (
                          <button
                            key={range}
                            onClick={() =>
                              updateQuizData("followerCount", range)
                            }
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.followerCount === range
                                ? "bg-gradient-to-r from-electric-blue/10 to-soft-violet/10 border-electric-blue text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
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
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
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
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.niches.map((niche) => (
                          <button
                            key={niche}
                            onClick={() => updateQuizData("niche", niche)}
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.niche === niche
                                ? "bg-gradient-to-r from-soft-violet/10 to-neon-green/10 border-soft-violet text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {niche}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Content Type */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Content Format 🎬
                      </h2>
                      <p className="text-gray-600">
                        What type of content do you primarily create?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.contentType}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.contentTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => updateQuizData("contentType", type)}
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.contentType === type
                                ? "bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border-electric-blue text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Posting Frequency */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.frequencies.map((freq) => (
                          <button
                            key={freq}
                            onClick={() =>
                              updateQuizData("postingFrequency", freq)
                            }
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.postingFrequency === freq
                                ? "bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            {freq}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Experience & Income */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
                      <div className="grid grid-cols-1 gap-3">
                        {t.options.experiences.map((exp) => (
                          <button
                            key={exp}
                            onClick={() =>
                              toggleMultipleChoice("experience", exp)
                            }
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 text-left ${
                              quizData.experience.includes(exp)
                                ? "bg-gradient-to-r from-soft-violet/10 to-electric-blue/10 border-soft-violet text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {quizData.experience.includes(exp) && (
                                <CheckCircle className="w-5 h-5 text-soft-violet" />
                              )}
                              <span>{exp}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.monthlyIncome}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {t.options.incomes.map((income) => (
                          <button
                            key={income}
                            onClick={() =>
                              updateQuizData("monthlyIncome", income)
                            }
                            className={`p-2 rounded-lg border-2 text-xs font-medium transition-all duration-300 ${
                              quizData.monthlyIncome === income
                                ? "bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
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
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Challenges 🎯
                      </h2>
                      <p className="text-gray-600">
                        What obstacles are holding you back? (Select max 3)
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.biggestChallenge}
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {t.options.challenges.map((challenge) => (
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
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 text-left ${
                              !quizData.biggestChallenge.includes(challenge) &&
                              quizData.biggestChallenge.length >= 3
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            } ${
                              quizData.biggestChallenge.includes(challenge)
                                ? "bg-gradient-to-r from-red-50 to-orange-50 border-red-400 text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {quizData.biggestChallenge.includes(
                                challenge,
                              ) && (
                                <CheckCircle className="w-5 h-5 text-red-500" />
                              )}
                              <span>{challenge}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Selected: {quizData.biggestChallenge.length} / 3 maximum
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 7: Goals */}
                {currentStep === 7 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Goals 🎯
                      </h2>
                      <p className="text-gray-600">
                        What do you want to achieve in the next 6 months?
                        (Select max 3)
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.goals}
                      </label>
                      <div className="grid grid-cols-1 gap-3">
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
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 text-left ${
                              !quizData.goals.includes(goal) &&
                              quizData.goals.length >= 3
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            } ${
                              quizData.goals.includes(goal)
                                ? "bg-gradient-to-r from-green-50 to-blue-50 border-green-400 text-gray-900 shadow-lg"
                                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {quizData.goals.includes(goal) && (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              )}
                              <span>{goal}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Selected: {quizData.goals.length} / 3 maximum
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 8: Social Links */}
                {currentStep === 8 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
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

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-3 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      {t.buttons.back}
                    </button>
                  )}

                  <div className="flex-1"></div>

                  {currentStep < totalSteps ? (
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t.buttons.next}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Complete Quiz
                      <ArrowRight className="w-5 h-5" />
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
