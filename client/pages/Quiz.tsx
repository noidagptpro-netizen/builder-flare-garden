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
      1: "About You",
      2: "Your Platforms",
      3: "Content & Growth",
      4: "Goals & Strategy",
      5: "Connect (Optional)",
    },
    questions: {
      name: "What's your name?",
      email: "Email address (for sending your free toolkit)",
      age: "Age",
      city: "Which city are you from?",
      primaryPlatform: "What's your primary content platform?",
      secondaryPlatforms:
        "Which other platforms do you use? (Select all that apply)",
      followerCount: "How many followers do you have on your primary platform?",
      niche: "What's your content niche?",
      contentType: "What type of content do you create?",
      postingFrequency: "How often do you post content?",
      experience:
        "How long have you been creating content? (Select all levels you've experienced)",
      monthlyIncome: "What's your current monthly income from content?",
      biggestChallenge:
        "What are your biggest challenges as a creator? (Select at least 3)",
      goals:
        "What are your main goals for the next 6 months? (Select at least 3)",
      socialLinks:
        "Add your social media profiles (optional but recommended for better analysis)",
      bio: "Tell us about yourself and your content (optional)",
      socialMediaIds:
        "Social Media Profile URLs (Optional - helps us analyze your content better)",
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
      submit: "Get My Free Creator Kit",
    },
  },
  hindi: {
    title: "क्रिएटर सक्सेस क्विज़",
    subtitle: "3 मिनट में अपनी व्यक्तिगत ग्रोथ रणनीति पाएं",
    steps: {
      1: "आपके बारे में",
      2: "आपके प्लेटफॉर्म",
      3: "कंटेंट और ग्रोथ",
      4: "लक्ष्य और रणनीति",
      5: "कनेक्ट (वैकल्पिक)",
    },
    questions: {
      name: "आपका नाम क्या है?",
      email: "ईमेल पता (आपकी फ्री टूलकिट भेजने के लिए)",
      age: "उम्र",
      city: "आप किस शहर से हैं?",
      primaryPlatform: "आप मुख्यतः किस प्लेटफॉर्म पर कंटेंट बनाते हैं?",
      secondaryPlatforms:
        "आप और कौन से प्लेटफॉर्म का उपयोग करते हैं? (सभी लागू का चयन करें)",
      followerCount: "आपके प्राथमिक प्लेटफॉर्म पर कितने फॉलोअर्स हैं?",
      niche: "आपका कंटेंट किस विषय पर है?",
      contentType: "आप किस प्रकार का कंटेंट बनाते हैं?",
      postingFrequency: "आप कितनी बार कंटेंट पोस्ट करते हैं?",
      experience:
        "आप कितने समय से कंटेंट बना रहे हैं? (सभी स्तर चुनें जिनका आपने अनुभव किया है)",
      monthlyIncome: "कंटेंट से आपकी वर्तमान मासिक आय क्या है?",
      biggestChallenge:
        "एक क्रिएटर के रूप में आपकी सबसे बड़ी चुनौतियां क्या हैं? (कम से कम 3 चुनें)",
      goals:
        "अगले 6 महीनों के लिए आपके मुख्य लक्ष्��� क्या हैं? (कम से कम 3 चुनें)",
      socialLinks:
        "अपने सोशल मीडिया प्रोफाइल जोड़ें (वैकल्पिक लेकिन बेहतर विश्लेषण के लिए अनुशंसित)",
      bio: "अपने और अपने कंटेंट के बारे में बताएं (वैकल्पिक)",
      socialMediaIds:
        "सोशल मीडिया प्रोफाइल लिंक (वैकल्पिक - आपके कंटेंट का बेहतर विश्लेषण करने में मदद करता है)",
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
        "टेक्नोलॉजी",
        "खाना और खाना बनाना",
        "यात्रा",
        "फिटनेस और स्वास्थ्य",
        "शिक्षा",
        "मनोरंजन",
        "व्यापार और वित्त",
        "जीवनशैली",
        "कला और डिज़ाइन",
        "अन्���",
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
        "बड़े क्रिएटर्स से कॉम्पिटिशन",
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
        "ड्रीम ब्रांड्स ��े साथ पार्टनरशिप",
        "अपना प्रोडक्ट/कोर्स लॉन्च करना",
        "अपनी niche में go-to एक्सपर्ट बनना",
        "लगातार वायरल कंटेंट बनाना",
        "10K सब्सक्राइबर्स की email लिस्ट",
        "इंडस्ट्री इवेंट्स/पॉडकास्ट्स में बोलना",
        "पैसिव इनकम स्ट्रीम्स बनाना",
        "9-5 job छोड़कर फुल-टाइम जाना",
        "नए प्लेटफॉर्म्स/फॉर्मेट्स में expand करना",
        "अपनी स्पेस में दूसरे क्रिएटर्स को mentor करना",
      ],
    },
    buttons: {
      next: "अगला कदम",
      back: "पिछला",
      submit: "मेरी फ्री क्रिएटर किट पाएं",
    },
  },
};

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>(initialQuizData);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const t = languages[language];

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

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsGenerating(true);

    // Simulate AI processing
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
  ) => {
    const currentValues = quizData[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    updateQuizData(field, newValues);
  };

  const PopupSelector = ({
    title,
    options,
    onSelect,
    selectedValue,
  }: {
    title: string;
    options: string[];
    onSelect: (value: string) => void;
    selectedValue: string;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full p-4 border-2 border-gray-200 rounded-xl text-left flex items-center justify-between bg-white hover:border-electric-blue hover:shadow-lg transition-all duration-300">
          <span
            className={
              selectedValue ? "text-gray-900 font-medium" : "text-gray-500"
            }
          >
            {selectedValue || `Choose ${title}`}
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Select {title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className={`p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedValue === option
                  ? "bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green text-gray-900 font-semibold"
                  : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );

  const MultiSelectPopup = ({
    title,
    options,
    onToggle,
    selectedValues,
    minSelection,
  }: {
    title: string;
    options: string[];
    onToggle: (value: string) => void;
    selectedValues: string[];
    minSelection: number;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full p-4 border-2 border-gray-200 rounded-xl text-left flex items-center justify-between bg-white hover:border-electric-blue hover:shadow-lg transition-all duration-300">
          <span
            className={
              selectedValues.length >= minSelection
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }
          >
            {selectedValues.length >= minSelection
              ? `${selectedValues.length} ${title} selected`
              : `Select ${title} (minimum ${minSelection})`}
          </span>
          <div className="flex items-center gap-2">
            {selectedValues.length >= minSelection && (
              <CheckCircle className="w-5 h-5 text-neon-green" />
            )}
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">
            Choose {title} (minimum {minSelection})
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onToggle(option)}
              className={`p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                selectedValues.includes(option)
                  ? "bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green text-gray-900 font-semibold"
                  : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3">
                {selectedValues.includes(option) && (
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                )}
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-600 mt-2 p-3 bg-gray-50 rounded-lg">
          Selected: {selectedValues.length} / {minSelection} minimum required
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            FameChase<span className="text-neon-green">.com</span>
          </Link>

          <div className="flex items-center gap-4">
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
              Step {currentStep} of 5
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`w-12 h-3 rounded-full transition-all duration-500 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-neon-green to-electric-blue"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-center text-gray-700 font-medium">
            {t.steps[currentStep as keyof typeof t.steps]}
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
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
                  Generating Your Creator Kit...
                </h2>
                <p className="text-gray-600">
                  Our AI is analyzing your responses and creating your
                  personalized toolkit
                </p>
              </div>
            )}

            {!isGenerating && (
              <>
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Let's Get to Know You! 👋
                      </h2>
                      <p className="text-gray-600">
                        Tell us about yourself so we can personalize your
                        experience
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-900 font-semibold mb-3 text-lg">
                          {t.questions.name}
                        </label>
                        <input
                          type="text"
                          value={quizData.name}
                          onChange={(e) =>
                            updateQuizData("name", e.target.value)
                          }
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-4 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-900 font-semibold mb-3 text-lg">
                          {t.questions.email}
                        </label>
                        <input
                          type="email"
                          value={quizData.email}
                          onChange={(e) =>
                            updateQuizData("email", e.target.value)
                          }
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-4 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-900 font-semibold mb-3 text-lg">
                          {t.questions.age}
                        </label>
                        <input
                          type="number"
                          value={quizData.age}
                          onChange={(e) =>
                            updateQuizData("age", e.target.value)
                          }
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-4 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                          placeholder="25"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-900 font-semibold mb-3 text-lg">
                          {t.questions.city}
                        </label>
                        <input
                          type="text"
                          value={quizData.city}
                          onChange={(e) =>
                            updateQuizData("city", e.target.value)
                          }
                          className="w-full bg-white border-2 border-gray-200 text-gray-900 px-4 py-4 rounded-xl focus:border-electric-blue focus:outline-none transition-colors text-lg"
                          placeholder="Mumbai"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Platform Details */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Creator Platforms 📱
                      </h2>
                      <p className="text-gray-600">
                        Where do you create and share your content?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.primaryPlatform}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.platforms.map((platform) => (
                          <button
                            key={platform}
                            onClick={() =>
                              updateQuizData("primaryPlatform", platform)
                            }
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 ${
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
                        {t.questions.secondaryPlatforms}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.platforms.map((platform) => (
                          <button
                            key={platform}
                            onClick={() => toggleSecondaryPlatform(platform)}
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 ${
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

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.followerCount}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.followerRanges.map((range) => (
                          <button
                            key={range}
                            onClick={() =>
                              updateQuizData("followerCount", range)
                            }
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 ${
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
                        {t.questions.niche}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.niches.map((niche) => (
                          <button
                            key={niche}
                            onClick={() => updateQuizData("niche", niche)}
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 ${
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

                {/* Step 3: Content Strategy */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Content Style 🎬
                      </h2>
                      <p className="text-gray-600">
                        Let's understand your content creation approach
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.contentType}
                      </label>
                      <PopupSelector
                        title="Content Type"
                        options={t.options.contentTypes}
                        onSelect={(value) =>
                          updateQuizData("contentType", value)
                        }
                        selectedValue={quizData.contentType}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.postingFrequency}
                      </label>
                      <PopupSelector
                        title="Posting Frequency"
                        options={t.options.frequencies}
                        onSelect={(value) =>
                          updateQuizData("postingFrequency", value)
                        }
                        selectedValue={quizData.postingFrequency}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.experience}
                      </label>
                      <MultiSelectPopup
                        title="Experience Levels"
                        options={t.options.experiences}
                        onToggle={(value) =>
                          toggleMultipleChoice("experience", value)
                        }
                        selectedValues={quizData.experience}
                        minSelection={1}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.monthlyIncome}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.options.incomes.map((income) => (
                          <button
                            key={income}
                            onClick={() =>
                              updateQuizData("monthlyIncome", income)
                            }
                            className={`p-4 rounded-xl border-2 text-base font-semibold transition-all duration-300 ${
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

                {/* Step 4: Goals, Challenges */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Your Creator Journey 🚀
                      </h2>
                      <p className="text-gray-600">
                        What challenges do you face and what are your goals?
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.biggestChallenge}
                      </label>
                      <MultiSelectPopup
                        title="Challenges"
                        options={t.options.challenges}
                        onToggle={(value) =>
                          toggleMultipleChoice("biggestChallenge", value)
                        }
                        selectedValues={quizData.biggestChallenge}
                        minSelection={3}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-4 text-lg">
                        {t.questions.goals}
                      </label>
                      <MultiSelectPopup
                        title="Goals"
                        options={t.options.goals}
                        onToggle={(value) =>
                          toggleMultipleChoice("goals", value)
                        }
                        selectedValues={quizData.goals}
                        minSelection={3}
                      />
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

                {/* Step 5: Social Media Links */}
                {currentStep === 5 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Connect Your Profiles 🔗
                      </h2>
                      <p className="text-gray-600">
                        Optional but recommended for better personalized
                        analysis
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Instagram className="w-6 h-6 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.instagram}
                          onChange={(e) =>
                            updateSocialLink("instagram", e.target.value)
                          }
                          placeholder="https://instagram.com/yourusername"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                          <Youtube className="w-6 h-6 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.youtube}
                          onChange={(e) =>
                            updateSocialLink("youtube", e.target.value)
                          }
                          placeholder="https://youtube.com/@yourchannel"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Linkedin className="w-6 h-6 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.linkedin}
                          onChange={(e) =>
                            updateSocialLink("linkedin", e.target.value)
                          }
                          placeholder="https://linkedin.com/in/yourname"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
                          <Twitter className="w-6 h-6 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.twitter}
                          onChange={(e) =>
                            updateSocialLink("twitter", e.target.value)
                          }
                          placeholder="https://twitter.com/yourusername"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                          TT
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.tiktok}
                          onChange={(e) =>
                            updateSocialLink("tiktok", e.target.value)
                          }
                          placeholder="https://tiktok.com/@yourusername"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <input
                          type="url"
                          value={quizData.socialLinks.website}
                          onChange={(e) =>
                            updateSocialLink("website", e.target.value)
                          }
                          placeholder="https://yourwebsite.com"
                          className="flex-1 bg-white border-2 border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:border-electric-blue focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-2 border-blue-100">
                      <p className="text-gray-700 text-center">
                        <strong>Pro Tip:</strong> Adding your social media
                        profiles helps our AI provide more accurate insights and
                        personalized recommendations for your content strategy.
                      </p>
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

                  {currentStep < 5 ? (
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {t.buttons.next}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={
                        quizData.biggestChallenge.length < 3 ||
                        quizData.goals.length < 3
                      }
                      className="flex items-center gap-3 bg-gradient-to-r from-neon-green to-electric-blue text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Sparkles className="w-5 h-5" />
                      {t.buttons.submit}
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
