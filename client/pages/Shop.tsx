import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Download,
  CheckCircle,
  CreditCard,
  Shield,
  Zap,
  Clock,
  TrendingUp,
  Award,
  Users,
  PlayCircle,
  FileText,
  Mail,
  Calendar,
  Sparkles,
  Target,
  DollarSign,
  Globe,
} from "lucide-react";

export default function Shop() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 32,
  });
  const [language, setLanguage] = useState<"english" | "hindi">("english");

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const generateDownload = (type: string, fileName: string) => {
    let content = "";
    const userName = "Creator"; // In real app, get from user data

    if (type === "mediaKit") {
      content = `${language === "hindi" ? "मीडिया किट" : "MEDIA KIT"} - ${userName}

${language === "hindi" ? "व्यक्तिगत जानकारी:" : "PERSONAL INFO:"}
${language === "hindi" ? "नाम:" : "Name:"} ${userName}
${language === "hindi" ? "निच:" : "Niche:"} [Your Niche]
${language === "hindi" ? "प्लेटफॉर्म:" : "Platform:"} [Your Platform]
${language === "hindi" ? "फॉलोअर्स:" : "Followers:"} [Your Count]

${language === "hindi" ? "सांख्यिकी और दरें:" : "STATISTICS & RATES:"}
${language === "hindi" ? "औसत व्यूज:" : "Average Views:"} [Your Stats]
${language === "hindi" ? "एंगेजमेंट रेट:" : "Engagement Rate:"} [Your Rate]
${language === "hindi" ? "पोस्ट दरें:" : "Post Rates:"} ₹5,000 - ₹25,000
${language === "hindi" ? "स्टोरी दरें:" : "Story Rates:"} ₹2,000 - ₹8,000
${language === "hindi" ? "रील दरें:" : "Reel Rates:"} ₹8,000 - ₹35,000

${language === "hindi" ? "पिछली सहयोग:" : "PREVIOUS COLLABORATIONS:"}
- [Brand Name 1]
- [Brand Name 2] 
- [Brand Name 3]

${language === "hindi" ? "संपर्क:" : "CONTACT:"}
${language === "hindi" ? "ईमेल:" : "Email:"} [your@email.com]
${language === "hindi" ? "फोन:" : "Phone:"} [Your Number]`;
    } else if (type === "emailTemplates") {
      content = `${language === "hindi" ? "ब्रांड आउटरीच ईमेल टेम्प्लेट्स" : "BRAND OUTREACH EMAIL TEMPLATES"}

${language === "hindi" ? "टेम्प्लेट 1: प्रारंभिक संपर्क" : "TEMPLATE 1: INITIAL OUTREACH"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? "सहयोग का प्रस्ताव - [आपका नाम] X [ब्रांड नाम]" : "Collaboration Proposal - [Your Name] X [Brand Name]"}

${language === "hindi" ? "प्रिय [ब्रांड नाम] टीम," : "Dear [Brand Name] Team,"}

${language === "hindi" ? "मैं [आपका नाम] हूं, [आपकी निच] में एक कंटेंट क्रिएटर हूं जिसके [प्लेटफॉर्म] पर [फॉलोअर संख्या] फॉलोअर्स हैं।" : "I'm [Your Name], a content creator in [Your Niche] with [Follower Count] followers on [Platform]."}

${language === "hindi" ? "मुझे आपके ब्रांड के साथ काम करने में दिलचस्पी है क्योंकि:" : "I'd love to work with your brand because:"}
${language === "hindi" ? "- आपके उत्पाद मेरे दर्शकों के साथ पूरी तरह मेल खाते हैं" : "- Your products align perfectly with my audience"}
${language === "hindi" ? "- मेरे दर्शक [संबंधित विषय] में रुचि रखते हैं" : "- My audience is interested in [Relevant Topic]"}
${language === "hindi" ? "- मैं प्रामाणिक कंटेंट बनाने में विशेषज्ञ हूं" : "- I specialize in creating authentic content"}

${language === "hindi" ? "सांख्यिकी:" : "Statistics:"}
${language === "hindi" ? "- फॉलोअर्स:" : "- Followers:"} [Your Count]
${language === "hindi" ? "- औसत एंगेजमेंट:" : "- Average Engagement:"} [Your Rate]
${language === "hindi" ? "- मासिक रीच:" : "- Monthly Reach:"} [Your Reach]

${language === "hindi" ? "मैं विभिन्न प्रकार के कंटेंट बना सकता हूं जैसे पोस्ट्स, रील्स, स्टोरीज, और रिव्यूज।" : "I can create various types of content including posts, reels, stories, and reviews."}

${language === "hindi" ? "क्या आप सहयोग के अवसरों पर चर्चा करने के लिए समय निकाल सकते हैं?" : "Would you be available to discuss collaboration opportunities?"}

${language === "hindi" ? "धन्यवाद," : "Best regards,"}
[${language === "hindi" ? "आपका नाम" : "Your Name"}]

---

${language === "hindi" ? "टेम्प्लेट 2: फॉलो-अप" : "TEMPLATE 2: FOLLOW-UP"}
${language === "hindi" ? "विषय:" : "Subject:"} ${language === "hindi" ? "सहयोग प्रस्ताव - फॉलो-अप" : "Collaboration Proposal - Follow-up"}

${language === "hindi" ? "नमस्ते," : "Hello,"}

${language === "hindi" ? "मैंने पिछले सप्ताह आपको सहयोग के बारे में ईमेल भेजा था। मुझे लगता है कि हमारे बीच एक बेहतरीन पार्टनरशिप हो सकती है।" : "I sent you an email about collaboration last week. I believe we could create an amazing partnership."}

${language === "hindi" ? "हाल ही में मैंने [उनके कॉम्पिटिटर] के साथ काम किया और उस पोस्ट को [संख्या] लाइक्स और [संख्या] कमेंट्स मिले।" : "Recently I worked with [Their Competitor] and that post received [Number] likes and [Number] comments."}

${language === "hindi" ? "क्या हम इस सप्ताह 15-मिनट की कॉल कर सकते हैं?" : "Could we schedule a 15-minute call this week?"}

${language === "hindi" ? "धन्यवाद," : "Thank you,"}
[${language === "hindi" ? "आपका नाम" : "Your Name"}]`;
    } else if (type === "growthStrategy") {
      content = `${language === "hindi" ? "3-महीने ��ी ग्रोथ रणनीति" : "3-MONTH GROWTH STRATEGY"} - ${userName}

${language === "hindi" ? "महीना 1: बुनियाद मजबूत करना" : "MONTH 1: FOUNDATION BUILDING"}
${language === "hindi" ? "सप्ताह 1-2:" : "Week 1-2:"}
${language === "hindi" ? "- दैनिक पोस्टिंग शुरू करें" : "- Start daily posting"}
${language === "hindi" ? "- कंटेंट कैलेंडर बनाएं" : "- Create content calendar"}
${language === "hindi" ? "- हैशटैग रिसर्च करें" : "- Research hashtags"}

${language === "hindi" ? "सप्ताह 3-4:" : "Week 3-4:"}
${language === "hindi" ? "- इंटरैक्टिव कंटेंट बढ़ाएं" : "- Increase interactive content"}
${language === "hindi" ? "- कम्युनिटी एंगेजमेंट फोकस करें" : "- Focus on community engagement"}
${language === "hindi" ? "- एनालिटिक्स ट्रैक करना शुरू करें" : "- Start tracking analytics"}

${language === "hindi" ? "महीना 2: विकास और सुधार" : "MONTH 2: GROWTH & OPTIMIZATION"}
${language === "hindi" ? "- रील्स पर फोकस करें (60% कंटेंट)" : "- Focus on Reels (60% content)"}
${language === "hindi" ? "- ट्रेंडिंग ऑडियो का इस्तेमाल करें" : "- Use trending audio"}
${language === "hindi" ? "- कोलैबोरेशन शुरू करें" : "- Start collaborations"}
${language === "hindi" ? "- यूजर-जेनेरेटेड कंटेंट बढ़ावा दें" : "- Encourage user-generated content"}

${language === "hindi" ? "महीना 3: मुद्रीकरण की तैयारी" : "MONTH 3: MONETIZATION PREP"}
${language === "hindi" ? "- मीडिया किट तैयार करें" : "- Prepare media kit"}
${language === "hindi" ? "- ब्रांड्स से संपर्क शुरू करें" : "- Start reaching out to brands"}
${language === "hindi" ? "- ईमेल लिस्ट बनाना शुरू करें" : "- Start building email list"}
${language === "hindi" ? "- प्रोडक्ट/सर्विस आइडिया रिसर्च करें" : "- Research product/service ideas"}

${language === "hindi" ? "मुख्य KPIs:" : "KEY KPIs:"}
${language === "hindi" ? "- मासिक फॉलोअर ग्रोथ: 25-40%" : "- Monthly follower growth: 25-40%"}
${language === "hindi" ? "- एंगेजमेंट रेट: 3-7%" : "- Engagement rate: 3-7%"}
${language === "hindi" ? "- मासिक रीच वृद्धि: 50-100%" : "- Monthly reach increase: 50-100%"}
${language === "hindi" ? "- ब्रांड इंक्वायरी: 2-5 प्रति माह" : "- Brand inquiries: 2-5 per month"}`;
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

  const t = {
    english: {
      title: "Creator Tools & Resources",
      subtitle: "Professional tools to accelerate your creator journey",
      freeResources: "Free Creator Resources",
      premiumTools: "Premium Creator Tools",
      bestseller: "BESTSELLER",
      trending: "TRENDING",
      limited: "LIMITED",
      offerEnds: "Offer ends in",
      downloads: "downloads",
      rating: "Rating",
      securePayment: "Secure payment",
      instantDownload: "Instant download",
      moneyBack: "Money-back guarantee",
      buyNow: "Buy Now",
      downloadFree: "Download Free",
      bundleOffer: "LIMITED TIME BUNDLE OFFER 🔥",
      save: "Save",
      getBundle: "Get Complete Bundle",
      validFor: "Offer valid for next 24 hours only",
    },
    hindi: {
      title: "क्रिएटर टूल्स और संसाधन",
      subtitle: "आपकी क्रिएटर यात्रा को तेज़ करने के लिए प्रोफेशनल टूल्स",
      freeResources: "फ्री क्रिएटर संसाधन",
      premiumTools: "प्रीमियम क्रिएटर टूल्स",
      bestseller: "बेस्टसेलर",
      trending: "ट्रेंडिंग",
      limited: "सीमित समय",
      offerEnds: "ऑफर समाप्त होता है",
      downloads: "डाउनलोड",
      rating: "रेटिंग",
      securePayment: "सुरक्षित भुगतान",
      instantDownload: "तुरंत डाउनलोड",
      moneyBack: "पैसे वापसी की गारंटी",
      buyNow: "अभी खरीद���ं",
      downloadFree: "फ्री डाउनलोड करें",
      bundleOffer: "सीमित समय बंडल ऑफर 🔥",
      save: "बचाएं",
      getBundle: "कम्प्लीट बंडल पाएं",
      validFor: "ऑफर केवल अगले 24 घंटे के लिए वैध",
    },
  };

  const currentLang = t[language];

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
              <Link
                to="/quiz"
                className="flex items-center gap-2 bg-gradient-to-r from-neon-green to-electric-blue text-black px-4 py-2 rounded-lg font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Quiz
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentLang.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentLang.subtitle}
          </p>
        </div>

        {/* Free Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentLang.freeResources}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-neon-green transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === "hindi"
                  ? "मीडिया किट टेम्प्लेट"
                  : "Media Kit Template"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "hindi"
                  ? "ब्रांड्स को भेजने के लिए प्रोफेशनल मीडिया किट बनाएं"
                  : "Create professional media kits to send to brands"}
              </p>
              <button
                onClick={() =>
                  generateDownload(
                    "mediaKit",
                    `Media_Kit_Template_${language}.txt`,
                  )
                }
                className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 inline mr-2" />
                {currentLang.downloadFree}
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-neon-green transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === "hindi" ? "ईमेल टेम्प्लेट्स" : "Email Templates"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "hindi"
                  ? "ब्रांड आउटरीच के लिए तैयार ईमेल टेम्प्लेट्स"
                  : "Ready-to-use email templates for brand outreach"}
              </p>
              <button
                onClick={() =>
                  generateDownload(
                    "emailTemplates",
                    `Email_Templates_${language}.txt`,
                  )
                }
                className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 inline mr-2" />
                {currentLang.downloadFree}
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-neon-green transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === "hindi"
                  ? "ग्रोथ स्ट्रैटेजी गाइड"
                  : "Growth Strategy Guide"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "hindi"
                  ? "3-महीने की व्यापक ग्रोथ रणनीति"
                  : "Comprehensive 3-month growth strategy"}
              </p>
              <button
                onClick={() =>
                  generateDownload(
                    "growthStrategy",
                    `Growth_Strategy_${language}.txt`,
                  )
                }
                className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 inline mr-2" />
                {currentLang.downloadFree}
              </button>
            </div>
          </div>
        </section>

        {/* Premium Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentLang.premiumTools}
          </h2>

          <div className="grid gap-8">
            {/* Complete Creator Growth Kit */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {currentLang.bestseller}
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === "hindi"
                      ? "कम्प्लीट क्रिएटर ग्रोथ किट"
                      : "Complete Creator Growth Kit"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === "hindi"
                      ? "0 से 10K फॉलोअर्स तक बढ़ने और मुद्रीकरण शुरू करने के लिए आपको चाहिए सब कुछ"
                      : "Everything you need to grow from 0 to 10K followers and start monetizing"}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">4.9</span>
                    </div>
                    <span className="text-gray-600">
                      2,547 {currentLang.downloads}
                    </span>
                  </div>
                  <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-red-700 font-semibold">
                      <Clock className="w-4 h-4" />
                      {currentLang.offerEnds}{" "}
                      {timeLeft.hours.toString().padStart(2, "0")}:
                      {timeLeft.minutes.toString().padStart(2, "0")}:
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "व्यक्तिगत मीडिया किट PDF"
                        : "Personalized Media Kit PDF"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "30+ ब्रांड आउटरीच ईमेल टेम्प्लेट्स"
                        : "30+ Email Templates for Brand Outreach"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "प्रोफेशनल प्राइसिंग कैलकुलेटर"
                        : "Professional Pricing Calculator"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "कंटेंट कैलेंडर टेम्प्लेट (3 महीने)"
                        : "Content Calendar Template (3 months)"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "ग्रोथ स्ट्रैटेजी वर्कबुक"
                        : "Growth Strategy Workbook"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "हैशटैग रिसर्च गाइड"
                        : "Hashtag Research Guide"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "रेट कार्ड टेम्प्लेट्स"
                        : "Rate Card Templates"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "कॉन्ट्रैक्ट टेम्प्लेट्स"
                        : "Contract Templates"}
                    </li>
                  </ul>
                </div>
                <div className="lg:w-80">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        ₹99
                      </div>
                      <div className="text-lg text-gray-500 line-through">
                        ₹199
                      </div>
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                        50% OFF
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            "https://rzp.io/l/famechase-pro-99",
                            "_blank",
                          )
                        }
                        className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-4"
                      >
                        {currentLang.buyNow} - ₹99
                      </button>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="w-4 h-4" />
                          {currentLang.securePayment}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          {currentLang.instantDownload}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {currentLang.moneyBack}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Reels Mastery Course */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {currentLang.trending}
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === "hindi"
                      ? "इंस्टाग्राम रील्स मास्टरी कोर्स"
                      : "Instagram Reels Mastery Course"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === "hindi"
                      ? "वायरल फॉर्मूला सीखें जो लाखों व्यूज लगातार दिलाता है"
                      : "Learn the viral formula that gets millions of views consistently"}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">4.8</span>
                    </div>
                    <span className="text-gray-600">
                      1,823 {currentLang.downloads}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-purple-500" />
                      {language === "hindi"
                        ? "4-घंटे की वीडियो ट्रेनिंग"
                        : "4-hour video training"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "50+ वायरल रील आइडियाज"
                        : "50+ Viral Reel Ideas"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "एडिटिंग टेम्प्लेट्स और ट्रांजिशन्स"
                        : "Editing Templates & Transitions"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "म्यूजिक और साउंड सेलेक्शन गाइड"
                        : "Music & Sound Selection Guide"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "एल्गोरिदम ऑप्टिमाइज़ेशन सीक्रेट्स"
                        : "Algorithm Optimization Secrets"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "1M+ क्रिएटर्स के केस स्टडीज"
                        : "Case Studies from 1M+ creators"}
                    </li>
                  </ul>
                </div>
                <div className="lg:w-80">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-4">
                        ₹197
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            "https://rzp.io/l/reels-mastery-197",
                            "_blank",
                          )
                        }
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-4"
                      >
                        {currentLang.buyNow} - ₹197
                      </button>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="w-4 h-4" />
                          {currentLang.securePayment}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          {currentLang.instantDownload}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {currentLang.moneyBack}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Collaboration Masterclass */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {currentLang.limited}
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {language === "hindi"
                      ? "ब्रांड कोलैबोरेशन मास्टरक्लास"
                      : "Brand Collaboration Masterclass"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === "hindi"
                      ? "टॉप ब्रांड्स के साथ पेड पार्टनरशिप्स पाएं - स्टेप बाई स्टेप सिस्टम"
                      : "Get paid partnerships with top brands - step by step system"}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">4.7</span>
                    </div>
                    <span className="text-gray-600">
                      934 {currentLang.downloads}
                    </span>
                  </div>
                  <div className="bg-orange-100 border border-orange-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-orange-700 font-semibold">
                      <Clock className="w-4 h-4" />
                      {currentLang.offerEnds} 2d 15h
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "ब्रांड आउटरीच ईमेल स्क्रिप्ट्स"
                        : "Brand Outreach Email Scripts"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "मीडिया किट टेम्प्लेट्स (10 डिजाइन्स)"
                        : "Media Kit Templates (10 designs)"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "नेगोसिएशन टैक्टिक्स और रेट कार्ड्स"
                        : "Negotiation Tactics & Rate Cards"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "कॉन्ट्रैक्ट टेम्प्लेट्स"
                        : "Contract Templates"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "50+ ब्रांड कॉन्टैक्ट डेटाबेस"
                        : "50+ Brand Contact Database"}
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {language === "hindi"
                        ? "पिच डेक टेम्प्लेट्स"
                        : "Pitch Deck Templates"}
                    </li>
                  </ul>
                </div>
                <div className="lg:w-80">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-4">
                        ₹149
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            "https://rzp.io/l/brand-masterclass-149",
                            "_blank",
                          )
                        }
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-4"
                      >
                        {currentLang.buyNow} - ₹149
                      </button>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="w-4 h-4" />
                          {currentLang.securePayment}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          {currentLang.instantDownload}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          {currentLang.moneyBack}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-3 border-yellow-300 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentLang.bundleOffer}
              </h2>
              <p className="text-xl text-gray-700 mb-2">
                {language === "hindi"
                  ? "कम्प्लीट क्रिएटर बंडल"
                  : "Complete Creator Bundle"}
              </p>
              <p className="text-gray-600">
                {language === "hindi"
                  ? "70% OFF पर सभी प्रीमियम प्रोडक्ट्स पाएं - ₹500+ बचाएं और क्रिएटर सक्सेस स्टोरी बनें"
                  : "Get ALL premium products for 70% OFF - Save ₹500+ and become a creator success story"}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-6 border-2 border-yellow-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ₹297
                </div>
                <div className="text-2xl text-gray-500 line-through mb-2">
                  ₹997
                </div>
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-4">
                  70% OFF
                </div>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {language === "hindi"
                      ? "कम्प्लीट क्रिएटर ग्रोथ किट"
                      : "Complete Creator Growth Kit"}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {language === "hindi"
                      ? "इंस्टाग्राम रील्स मास्टरी कोर्स"
                      : "Instagram Reels Mastery Course"}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {language === "hindi"
                      ? "ब्रांड कोलैबोरेशन मास्टरक्लास"
                      : "Brand Collaboration Masterclass"}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-700 font-semibold">
                      {language === "hindi"
                        ? "बोनस: 1-on-1 स्ट्रैटेजी कॉल"
                        : "Bonus: 1-on-1 Strategy Call"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    window.open("https://rzp.io/l/creator-bundle-297", "_blank")
                  }
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl text-lg hover:shadow-lg transition-all mb-4"
                >
                  {currentLang.getBundle} - {currentLang.save} ₹700
                </button>
                <p className="text-red-600 font-semibold text-sm">
                  {currentLang.validFor}
                </p>
              </div>
            </div>

            <div className="bg-red-100 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-red-700 font-semibold">
                <Clock className="w-5 h-5" />
                {currentLang.offerEnds}{" "}
                {timeLeft.hours.toString().padStart(2, "0")}:
                {timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 FameChase.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
