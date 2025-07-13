import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
  experience: "",
  monthlyIncome: "",
  biggestChallenge: "",
  goals: "",
  socialLinks: {
    instagram: "",
    youtube: "",
    linkedin: "",
    website: "",
  },
  bio: "",
  language: "english",
};

const quizQuestions = {
  english: [
    {
      id: "name",
      question: "What's your name?",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      question: "What's your email address?",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      id: "age",
      question: "How old are you?",
      type: "number",
      placeholder: "25",
    },
    {
      id: "city",
      question: "Which city are you from?",
      type: "text",
      placeholder: "Mumbai, Delhi, Bangalore...",
    },
    {
      id: "primaryPlatform",
      question: "What's your primary content platform?",
      type: "single-choice",
      options: [
        {
          value: "Instagram",
          label: "📷 Instagram",
          description: "Photos, Reels, Stories",
        },
        {
          value: "YouTube",
          label: "🎥 YouTube",
          description: "Long-form videos, Shorts",
        },
        {
          value: "LinkedIn",
          label: "💼 LinkedIn",
          description: "Professional content",
        },
        {
          value: "TikTok",
          label: "🎭 TikTok",
          description: "Short viral videos",
        },
        {
          value: "Twitter",
          label: "🐦 Twitter",
          description: "Tweets, Threads",
        },
        {
          value: "Facebook",
          label: "👥 Facebook",
          description: "Posts, Groups, Pages",
        },
        {
          value: "Snapchat",
          label: "👻 Snapchat",
          description: "Stories, Spotlight",
        },
        {
          value: "Pinterest",
          label: "📌 Pinterest",
          description: "Pins, Boards",
        },
        {
          value: "Website/Blog",
          label: "🌐 Website/Blog",
          description: "Personal website",
        },
        { value: "Podcast", label: "🎙️ Podcast", description: "Audio content" },
        {
          value: "Newsletter",
          label: "📧 Newsletter",
          description: "Email marketing",
        },
        {
          value: "Other",
          label: "🔄 Other Platform",
          description: "Something else",
        },
      ],
    },
    {
      id: "followerCount",
      question: "How many followers do you have on your primary platform?",
      type: "single-choice",
      options: [
        {
          value: "Less than 100",
          label: "Less than 100",
          description: "Just getting started",
        },
        { value: "100 - 500", label: "100 - 500", description: "Early stage" },
        {
          value: "500 - 1K",
          label: "500 - 1K",
          description: "Growing audience",
        },
        {
          value: "1K - 5K",
          label: "1K - 5K",
          description: "Established presence",
        },
        {
          value: "5K - 10K",
          label: "5K - 10K",
          description: "Strong following",
        },
        {
          value: "10K - 50K",
          label: "10K - 50K",
          description: "Micro-influencer",
        },
        {
          value: "50K - 100K",
          label: "50K - 100K",
          description: "Mid-tier influencer",
        },
        {
          value: "100K - 500K",
          label: "100K - 500K",
          description: "Macro-influencer",
        },
        {
          value: "500K - 1M",
          label: "500K - 1M",
          description: "Top-tier creator",
        },
        { value: "1M+", label: "1M+", description: "Celebrity status" },
      ],
    },
    {
      id: "niche",
      question: "What's your content niche?",
      type: "single-choice",
      options: [
        {
          value: "Fashion & Beauty",
          label: "👗 Fashion & Beauty",
          description: "Style, makeup, trends",
        },
        {
          value: "Technology",
          label: "💻 Technology",
          description: "Tech reviews, coding, gadgets",
        },
        {
          value: "Food & Cooking",
          label: "🍳 Food & Cooking",
          description: "Recipes, food reviews",
        },
        {
          value: "Travel",
          label: "✈️ Travel",
          description: "Destinations, travel tips",
        },
        {
          value: "Fitness & Health",
          label: "💪 Fitness & Health",
          description: "Workouts, nutrition, wellness",
        },
        {
          value: "Education",
          label: "📚 Education",
          description: "Teaching, tutorials, tips",
        },
        {
          value: "Entertainment",
          label: "🎬 Entertainment",
          description: "Comedy, music, movies",
        },
        {
          value: "Business & Finance",
          label: "💰 Business & Finance",
          description: "Entrepreneurship, investing",
        },
        {
          value: "Lifestyle",
          label: "🌟 Lifestyle",
          description: "Daily life, routines",
        },
        {
          value: "Art & Design",
          label: "🎨 Art & Design",
          description: "Creative content, tutorials",
        },
        {
          value: "Gaming",
          label: "🎮 Gaming",
          description: "Game streaming, reviews",
        },
        {
          value: "Parenting",
          label: "👶 Parenting",
          description: "Family content, tips",
        },
        {
          value: "Sports",
          label: "⚽ Sports",
          description: "Athletic content, commentary",
        },
        {
          value: "Music",
          label: "🎵 Music",
          description: "Songs, covers, tutorials",
        },
        {
          value: "Photography",
          label: "📸 Photography",
          description: "Photo tips, gear reviews",
        },
        {
          value: "Other",
          label: "🔄 Other Niche",
          description: "Something unique",
        },
      ],
    },
    {
      id: "experience",
      question: "How long have you been creating content?",
      type: "single-choice",
      options: [
        {
          value: "Just started (0-3 months)",
          label: "Just started (0-3 months)",
          description: "New to content creation",
        },
        {
          value: "Beginner (3-12 months)",
          label: "Beginner (3-12 months)",
          description: "Learning the basics",
        },
        {
          value: "Growing (1-2 years)",
          label: "Growing (1-2 years)",
          description: "Building consistency",
        },
        {
          value: "Experienced (2-3 years)",
          label: "Experienced (2-3 years)",
          description: "Established creator",
        },
        {
          value: "Expert (3-5 years)",
          label: "Expert (3-5 years)",
          description: "Seasoned professional",
        },
        {
          value: "Veteran (5+ years)",
          label: "Veteran (5+ years)",
          description: "Industry expert",
        },
      ],
    },
    {
      id: "monthlyIncome",
      question: "What's your current monthly income from content?",
      type: "single-choice",
      options: [
        {
          value: "₹0 (No income yet)",
          label: "₹0 (No income yet)",
          description: "Haven't monetized yet",
        },
        { value: "₹1-5K", label: "₹1-5K", description: "Starting to earn" },
        { value: "₹5K-15K", label: "₹5K-15K", description: "Side income" },
        {
          value: "₹15K-30K",
          label: "₹15K-30K",
          description: "Part-time income",
        },
        {
          value: "₹30K-50K",
          label: "₹30K-50K",
          description: "Substantial income",
        },
        {
          value: "₹50K-1L",
          label: "₹50K-1L",
          label: "₹50K-1L",
          description: "Good income",
        },
        { value: "₹1L-2L", label: "₹1L-2L", description: "High income" },
        { value: "₹2L+", label: "₹2L+", description: "Top earner" },
      ],
    },
    {
      id: "biggestChallenge",
      question: "What's your biggest challenge as a creator?",
      type: "single-choice",
      options: [
        {
          value: "Growing followers",
          label: "📈 Growing followers",
          description: "Struggling to increase audience size",
        },
        {
          value: "Content ideas",
          label: "💡 Content ideas",
          description: "Running out of creative concepts",
        },
        {
          value: "Monetization",
          label: "💰 Monetization",
          description: "Don't know how to make money",
        },
      ],
    },
    {
      id: "goals",
      question: "What's your main goal for the next 6 months?",
      type: "single-choice",
      options: [
        {
          value: "Reach 10K followers",
          label: "🎯 Reach 10K followers",
          description: "Hit the 10K milestone",
        },
        {
          value: "Start monetizing",
          label: "💰 Start monetizing",
          description: "Begin earning from content",
        },
        {
          value: "Get brand deals",
          label: "🤝 Get brand deals",
          description: "Partner with brands",
        },
      ],
    },
    {
      id: "toolkit-payment",
      question: "Ready to unlock your complete growth toolkit?",
      type: "payment-prompt",
      description:
        "Get personalized media kit, growth strategy, and brand outreach templates",
      price: "₹99",
      benefits: [
        "✅ Personalized Media Kit PDF",
        "✅ Custom Creator Bio Templates",
        "✅ Brand Outreach Email Templates",
        "✅ Professional Rate Card",
        "✅ AI Growth Strategy Report",
        "✅ Content Calendar Template",
      ],
    },
  ],
  hindi: [
    {
      id: "name",
      question: "आपका नाम क्या है?",
      type: "text",
      placeholder: "अपना पूरा नाम लिखें",
    },
    {
      id: "email",
      question: "आपका ईमेल पता क्या है?",
      type: "email",
      placeholder: "your@email.com",
    },
    // ... Hindi translations would continue
  ],
};

export default function NewQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>(initialQuizData);
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const navigate = useNavigate();

  const questions = quizQuestions[language];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const updateQuizData = (field: keyof QuizData, value: any) => {
    setQuizData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Store quiz data and navigate to results
      localStorage.setItem("fameChaseQuizData", JSON.stringify(quizData));
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Processing payment...");
    handleNext();
  };

  const currentQ = questions[currentQuestion];
  const currentValue = quizData[currentQ.id as keyof QuizData];

  const canProceed = () => {
    if (currentQ.type === "payment-prompt") return true;
    return currentValue && currentValue.toString().length > 0;
  };

  return (
    <div className="min-h-screen bg-garden-white">
      {/* Header */}
      <header className="px-4 py-6 border-b border-gray-200">
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

            <div className="text-gray-500 text-sm">
              {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2">
        <div
          className="h-2 bg-gradient-to-r from-neon-green to-electric-blue transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {currentQ.type === "payment-prompt" ? (
            /* Payment Prompt */
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-garden-dark mb-6">
                {currentQ.question}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {currentQ.description}
              </p>

              <div className="bg-white border-2 border-neon-green rounded-2xl p-8 mb-8 shadow-lg">
                <div className="text-4xl font-bold text-neon-green mb-4">
                  {currentQ.price}
                </div>
                <div className="text-lg text-gray-600 mb-6">
                  One-time payment • Instant access
                </div>

                <div className="space-y-3 mb-8">
                  {currentQ.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-left"
                    >
                      <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full bg-neon-green text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-400 transition-colors"
                >
                  Unlock My Toolkit - {currentQ.price}
                </button>

                <div className="text-sm text-gray-500 mt-4">
                  💳 Secure payment • 💯 Money-back guarantee
                </div>
              </div>

              <button
                onClick={handleNext}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                Skip for now
              </button>
            </div>
          ) : (
            /* Regular Questions */
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-garden-dark mb-8 text-center">
                {currentQ.question}
              </h1>

              {currentQ.type === "text" ||
              currentQ.type === "email" ||
              currentQ.type === "number" ? (
                <div className="mb-8">
                  <input
                    type={currentQ.type}
                    value={currentValue as string}
                    onChange={(e) =>
                      updateQuizData(
                        currentQ.id as keyof QuizData,
                        e.target.value,
                      )
                    }
                    placeholder={currentQ.placeholder}
                    className="w-full bg-white border-2 border-gray-200 text-garden-dark px-6 py-4 rounded-lg text-lg focus:border-neon-green focus:outline-none"
                  />
                </div>
              ) : currentQ.type === "single-choice" ? (
                <div className="grid gap-4 mb-8">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        updateQuizData(
                          currentQ.id as keyof QuizData,
                          option.value,
                        )
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        currentValue === option.value
                          ? "border-neon-green bg-neon-green/10 shadow-md"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-garden-dark mb-1">
                            {option.label}
                          </div>
                          {option.description && (
                            <div className="text-sm text-gray-600">
                              {option.description}
                            </div>
                          )}
                        </div>
                        {currentValue === option.value && (
                          <Check className="w-6 h-6 text-neon-green" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          )}

          {/* Navigation */}
          {currentQ.type !== "payment-prompt" && (
            <div className="flex justify-between items-center">
              {currentQuestion > 0 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                  canProceed()
                    ? "bg-neon-green text-black hover:bg-green-400"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
