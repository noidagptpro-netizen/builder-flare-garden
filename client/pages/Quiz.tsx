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
    title: "Fame Score Quiz",
    subtitle: "Get personalized insights for your creator journey",
    steps: {
      1: "Personal Info",
      2: "Platform Details",
      3: "Content Strategy",
      4: "Goals & Challenges",
    },
    questions: {
      name: "What's your name?",
      email: "Email address",
      age: "Age",
      city: "Which city are you from?",
      primaryPlatform: "What's your primary content platform?",
      secondaryPlatforms:
        "Which other platforms do you use? (Select all that apply)",
      followerCount: "How many followers do you have on your primary platform?",
      niche: "What's your content niche?",
      contentType: "What type of content do you create?",
      postingFrequency: "How often do you post content?",
      experience: "How long have you been creating content?",
      monthlyIncome: "What's your current monthly income from content?",
      biggestChallenge: "What's your biggest challenge as a creator?",
      goals: "What's your main goal for the next 6 months?",
      socialLinks:
        "Add your social media profiles (optional but recommended for better analysis)",
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
        "Technology",
        "Food & Cooking",
        "Travel",
        "Fitness & Health",
        "Education",
        "Entertainment",
        "Business & Finance",
        "Lifestyle",
        "Art & Design",
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
      next: "Next",
      back: "Back",
      submit: "Get My Fame Score",
    },
  },
  hindi: {
    title: "फेम स्कोर क्विज़",
    subtitle: "अपनी क्रिएटर यात्रा के लि�� व्यक्तिगत सुझाव पाएं",
    steps: {
      1: "व्यक्तिगत जानकारी",
      2: "प्लेटफॉर्म विवरण",
      3: "कंटेंट रणनीति",
      4: "लक्ष्य और चुनौतियां",
    },
    questions: {
      name: "आपका नाम क्या है?",
      email: "ईमेल पता",
      age: "उम्र",
      city: "आप किस शहर से हैं?",
      primaryPlatform: "आप मुख्यतः किस प्लेटफॉर्म पर कंटेंट बनाते हैं?",
      secondaryPlatforms:
        "आप और कौन से प्लेटफॉर्म का उपयोग करते हैं? (सभी लागू का चयन करें)",
      followerCount: "आपके प्राथमिक प्लेटफॉर्म पर क��तने फॉलो��र्स हैं?",
      niche: "आपका कंटेंट किस विषय पर है?",
      contentType: "आप किस प्रकार का कंटेंट बनाते हैं?",
      postingFrequency: "आप कितनी बार कंटेंट प���स्ट करते हैं?",
      experience: "आप कितने समय से कंटेंट बना रहे हैं?",
      monthlyIncome: "कंटेंट से आपकी वर्तमान मासिक आय क्या है?",
      biggestChallenge: "एक क्रिएटर के रूप में आपकी सबसे बड़ी चुनौती क्या है?",
      goals: "अगले 6 महीनों के लिए आपका मुख्य लक्ष्य क्या है?",
      socialLinks:
        "अपने सोशल मीडिया प्रोफाइल जोड़ें (वैकल्पिक लेकिन बेहतर विश्लेषण के लिए अनुशंसित)",
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
        "टेक्नोलॉजी",
        "खाना और खाना बनाना",
        "यात्रा",
        "फिटनेस और स्वास्थ्य",
        "शिक्षा",
        "मनोरंजन",
        "व्यापार और वित्त",
        "जीवनशैली",
        "कला और डिज़ाइन",
        "अन्य",
      ],
      contentTypes: [
        "फोटो और कैरोसेल",
        "छोटे वीडियो/रील्स",
        "लंबे वीडियो",
        "लाइव स्ट्रीम",
        "स्टोरीज़",
        "लिखि�� पोस्ट",
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
        "ऑथेंटिसिटी और ब्रांड ���पील का संतुलन",
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
        "ड्रीम ब्रांड्स के साथ पार्टनरशिप",
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
      next: "आगे",
      back: "वापस",
      submit: "मेरा फेम स्कोर पाएं",
    },
  },
};

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>(initialQuizData);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
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

  const handleSubmit = () => {
    // Store quiz data in localStorage for results page
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

  const updateSocialId = (
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-garden-dark">
            FameChase<span className="text-neon-green">.com</span>
          </Link>

          {/* Language Selector */}
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

            <div className="text-gray-600 text-sm">Step {currentStep} of 5</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center mb-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-8 h-2 rounded-full ${
                  step <= currentStep ? "bg-neon-green" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm">
          {t.steps[currentStep as keyof typeof t.steps]}
        </div>
      </div>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
            {t.title}
          </h1>

          <div className="bg-fame-dark border border-gray-800 rounded-2xl p-8">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.questions.name}
                  </label>
                  <input
                    type="text"
                    value={quizData.name}
                    onChange={(e) => updateQuizData("name", e.target.value)}
                    className="w-full bg-fame-darker border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-electric-blue focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.questions.email}
                  </label>
                  <input
                    type="email"
                    value={quizData.email}
                    onChange={(e) => updateQuizData("email", e.target.value)}
                    className="w-full bg-fame-darker border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-electric-blue focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t.questions.age}
                    </label>
                    <input
                      type="number"
                      value={quizData.age}
                      onChange={(e) => updateQuizData("age", e.target.value)}
                      className="w-full bg-fame-darker border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-electric-blue focus:outline-none"
                      placeholder="25"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      {t.questions.city}
                    </label>
                    <input
                      type="text"
                      value={quizData.city}
                      onChange={(e) => updateQuizData("city", e.target.value)}
                      className="w-full bg-fame-darker border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-electric-blue focus:outline-none"
                      placeholder="Mumbai"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Platform Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.primaryPlatform}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.platforms.map((platform) => (
                      <button
                        key={platform}
                        onClick={() =>
                          updateQuizData("primaryPlatform", platform)
                        }
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.primaryPlatform === platform
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.secondaryPlatforms}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.platforms.map((platform) => (
                      <button
                        key={platform}
                        onClick={() => toggleSecondaryPlatform(platform)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.secondaryPlatforms.includes(platform)
                            ? "bg-neon-green border-neon-green text-black"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.followerCount}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.followerRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => updateQuizData("followerCount", range)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.followerCount === range
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.niche}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.niches.map((niche) => (
                      <button
                        key={niche}
                        onClick={() => updateQuizData("niche", niche)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.niche === niche
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
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
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.contentType}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t.options.contentTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => updateQuizData("contentType", type)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.contentType === type
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.postingFrequency}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.frequencies.map((freq) => (
                      <button
                        key={freq}
                        onClick={() => updateQuizData("postingFrequency", freq)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.postingFrequency === freq
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.experience}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t.options.experiences.map((exp) => (
                      <button
                        key={exp}
                        onClick={() => updateQuizData("experience", exp)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.experience === exp
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.monthlyIncome}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.incomes.map((income) => (
                      <button
                        key={income}
                        onClick={() => updateQuizData("monthlyIncome", income)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.monthlyIncome === income
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {income}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Goals, Challenges & Social Links */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.biggestChallenge}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {t.options.challenges.map((challenge) => (
                      <button
                        key={challenge}
                        onClick={() =>
                          updateQuizData("biggestChallenge", challenge)
                        }
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.biggestChallenge === challenge
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {challenge}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.goals}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t.options.goals.map((goal) => (
                      <button
                        key={goal}
                        onClick={() => updateQuizData("goals", goal)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                          quizData.goals === goal
                            ? "bg-electric-blue border-electric-blue text-white"
                            : "bg-fame-darker border-gray-600 text-gray-300 hover:border-gray-500"
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <label className="block text-white font-semibold mb-4">
                    {t.questions.socialLinks}
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <input
                        type="url"
                        value={quizData.socialLinks.instagram}
                        onChange={(e) =>
                          updateSocialLink("instagram", e.target.value)
                        }
                        placeholder="https://instagram.com/yourusername"
                        className="flex-1 bg-fame-darker border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-electric-blue focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <input
                        type="url"
                        value={quizData.socialLinks.youtube}
                        onChange={(e) =>
                          updateSocialLink("youtube", e.target.value)
                        }
                        placeholder="https://youtube.com/@yourchannel"
                        className="flex-1 bg-fame-darker border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-electric-blue focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-blue-500" />
                      <input
                        type="url"
                        value={quizData.socialLinks.linkedin}
                        onChange={(e) =>
                          updateSocialLink("linkedin", e.target.value)
                        }
                        placeholder="https://linkedin.com/in/yourname"
                        className="flex-1 bg-fame-darker border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-electric-blue focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        value={quizData.socialLinks.website}
                        onChange={(e) =>
                          updateSocialLink("website", e.target.value)
                        }
                        placeholder="https://yourwebsite.com"
                        className="flex-1 bg-fame-darker border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-electric-blue focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.questions.bio}
                  </label>
                  <textarea
                    value={quizData.bio}
                    onChange={(e) => updateQuizData("bio", e.target.value)}
                    rows={4}
                    placeholder="Tell us about your content style, your audience, what makes you unique..."
                    className="w-full bg-fame-darker border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-electric-blue focus:outline-none resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.buttons.back}
                </button>
              )}

              <div className="flex-1"></div>

              {currentStep < 4 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 neon-button"
                >
                  {t.buttons.next}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 neon-button"
                >
                  {t.buttons.submit}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
