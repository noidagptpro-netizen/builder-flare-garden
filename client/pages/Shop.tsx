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
  Home,
  Settings,
  Eye,
  EyeOff,
  User,
} from "lucide-react";
import {
  getAllProducts,
  getProductConfig,
  toggleProductAvailability,
  generateProductDownload,
  downloadFile,
  ProductConfig,
  productConfigs,
} from "../lib/products";

interface PurchasedProduct {
  id: string;
  purchaseDate: string;
  customerInfo: any;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  city: string;
}

export default function Shop() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 32,
  });
  const [language, setLanguage] = useState<"english" | "hindi">("english");
  const [products, setProducts] = useState<ProductConfig[]>([]);
  const [showPaymentForm, setShowPaymentForm] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState<
    PurchasedProduct[]
  >([]);
  const [showSuccessPage, setShowSuccessPage] = useState<string | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [quizData, setQuizData] = useState<any>(null);

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

  // Load products and purchased items
  useEffect(() => {
    setProducts(getAllProducts());
    const stored = localStorage.getItem("purchasedProducts");
    if (stored) {
      setPurchasedProducts(JSON.parse(stored));
    }
    const storedQuizData = localStorage.getItem("fameChaseQuizData");
    if (storedQuizData) {
      const data = JSON.parse(storedQuizData);
      setQuizData(data);
      setLanguage(data.language || "english");
    }
  }, []);

  const t = {
    english: {
      title: "Creator Tools & Resources",
      subtitle: "Professional tools to accelerate your creator journey",
      freeResources: "Free Creator Resources",
      premiumTools: "Premium Creator Tools",
      adminPanel: "Admin Panel",
      toggleProduct: "Toggle Product",
      enabled: "Enabled",
      disabled: "Disabled",
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
      paymentForm: "Complete Your Information",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      city: "City",
      processing: "Processing...",
      paySecure: "Pay Securely",
      downloadYourProducts: "Download Your Products",
      purchaseSuccess: "Purchase Successful! 🎉",
      thanksForPurchase:
        "Thank you for your purchase! Your products are ready for download.",
      backToShop: "Back to Shop",
    },
    hindi: {
      title: "क्रिएटर टूल्स और संसाधन",
      subtitle: "आपकी क्रिएटर यात्रा को तेज़ करने के लिए प्रोफेशनल टूल्स",
      freeResources: "फ्री क्रिएटर संसाधन",
      premiumTools: "प्रीमियम क्रिएटर टूल्स",
      adminPanel: "एडमिन पैनल",
      toggleProduct: "प्रोडक्ट टॉगल",
      enabled: "सक्षम",
      disabled: "निष्क्रिय",
      bestseller: "बेस्टसेलर",
      trending: "ट्रेंडिंग",
      limited: "सीमित समय",
      offerEnds: "ऑफर समाप्त होता है",
      downloads: "डाउनलोड",
      rating: "रेटिंग",
      securePayment: "सुरक्षित भुगतान",
      instantDownload: "तुरंत डाउनलोड",
      moneyBack: "पैसे वापसी की गारंटी",
      buyNow: "अभी खरीदें",
      downloadFree: "फ्री डाउनलोड करें",
      bundleOffer: "सीमित समय बंडल ऑफर 🔥",
      save: "बचाएं",
      getBundle: "कम्प्लीट बंडल पाएं",
      validFor: "ऑफर केवल अगले 24 घंटे के लिए वैध",
      paymentForm: "अपनी जानकारी पूरी करें",
      fullName: "पूरा नाम",
      emailAddress: "ईमेल पता",
      phoneNumber: "फोन नंबर",
      city: "शहर",
      processing: "प्रसंस्करण...",
      paySecure: "सुरक्षित भुगतान करें",
      downloadYourProducts: "अपने प्रोडक्ट्स डाउनलोड करें",
      purchaseSuccess: "खरीदारी सफल! 🎉",
      thanksForPurchase:
        "आपकी खरीदारी के लिए धन्यवाद! आपके प्रोडक्ट्स डाउनलोड के लिए तैयार हैं।",
      backToShop: "शॉप पर वापस जाएं",
    },
  };

  const currentLang = t[language];

  const handlePurchase = async (productId: string) => {
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Save purchase
    const purchase: PurchasedProduct = {
      id: productId,
      purchaseDate: new Date().toISOString(),
      customerInfo: { ...customerInfo, ...quizData },
    };

    const updated = [...purchasedProducts, purchase];
    setPurchasedProducts(updated);
    localStorage.setItem("purchasedProducts", JSON.stringify(updated));

    setIsSubmitting(false);
    setShowPaymentForm(null);
    setShowSuccessPage(productId);
  };

  const handleDownload = (productId: string, downloadId: string) => {
    const content = generateProductDownload(
      productId,
      downloadId,
      language,
      quizData,
    );
    const product = getProductConfig(productId);
    const download = product?.downloads.find((d) => d.id === downloadId);

    if (content && download) {
      downloadFile(content, download.fileName, language);
    }
  };

  const handleBundleDownload = () => {
    // Download all products from bundle
    const bundleProducts = [
      "complete-growth-kit",
      "reels-mastery",
      "brand-masterclass",
    ];

    bundleProducts.forEach((productId) => {
      const product = getProductConfig(productId);
      if (product) {
        product.downloads.forEach((download) => {
          setTimeout(() => {
            handleDownload(productId, download.id);
          }, 500); // Stagger downloads
        });
      }
    });
  };

  const toggleProduct = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      toggleProductAvailability(productId, !product.isEnabled);
      setProducts(getAllProducts());
    }
  };

  const isProductPurchased = (productId: string) => {
    return (
      purchasedProducts.some((p) => p.id === productId) ||
      (productId !== "complete-bundle" &&
        purchasedProducts.some((p) => p.id === "complete-bundle"))
    );
  };

  // Success page for purchased products
  if (showSuccessPage) {
    const product = getProductConfig(showSuccessPage);
    if (!product) return null;

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
              {currentLang.purchaseSuccess}
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {currentLang.thanksForPurchase}
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentLang.downloadYourProducts}
              </h2>

              {showSuccessPage === "complete-bundle" ? (
                <div className="grid gap-4 max-w-md mx-auto">
                  <button
                    onClick={handleBundleDownload}
                    className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download Complete Bundle (All Products)
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.downloads.map((download) => (
                    <div
                      key={download.id}
                      className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-neon-green transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {download.name}
                      </h3>
                      <button
                        onClick={() =>
                          handleDownload(showSuccessPage, download.id)
                        }
                        className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                      >
                        <Download className="w-4 h-4 inline mr-2" />
                        {currentLang.downloadFree}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setShowSuccessPage(null)}
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              {currentLang.backToShop}
            </button>
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
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Settings className="w-4 h-4" />
                {currentLang.adminPanel}
              </button>
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

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {currentLang.adminPanel} - {currentLang.toggleProduct}
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {productConfigs.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-white p-3 rounded-lg border"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {product.name}
                  </span>
                  <button
                    onClick={() => toggleProduct(product.id)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      product.isEnabled
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.isEnabled ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                    {product.isEnabled
                      ? currentLang.enabled
                      : currentLang.disabled}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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

        {/* Premium Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {currentLang.premiumTools}
          </h2>

          <div className="grid gap-8">
            {products.map((product) => {
              const isPurchased = isProductPurchased(product.id);

              return (
                <div
                  key={product.id}
                  className={`border-2 rounded-2xl p-8 relative overflow-hidden ${
                    product.category === "growth-kit"
                      ? "bg-gradient-to-br from-green-50 to-blue-50 border-green-200"
                      : product.category === "course"
                        ? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
                        : product.category === "masterclass"
                          ? "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200"
                          : "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                  }`}
                >
                  <div className="absolute top-4 right-4">
                    {product.category === "growth-kit" && (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {currentLang.bestseller}
                      </div>
                    )}
                    {product.category === "course" && (
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {currentLang.trending}
                      </div>
                    )}
                    {product.category === "masterclass" && (
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {currentLang.limited}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {language === "hindi" &&
                        product.id === "complete-growth-kit"
                          ? "कम्प्लीट क्रिएटर ग्रोथ किट"
                          : language === "hindi" &&
                              product.id === "reels-mastery"
                            ? "इंस्टाग्राम रील्स मास्टरी कोर्स"
                            : language === "hindi" &&
                                product.id === "brand-masterclass"
                              ? "ब्रांड कोलैबोरेशन मास्टरक्लास"
                              : language === "hindi" &&
                                  product.id === "complete-bundle"
                                ? "कम्प्लीट क्रिएटर बंडल"
                                : product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">4.9</span>
                        </div>
                        <span className="text-gray-600">
                          2,547 {currentLang.downloads}
                        </span>
                        {isPurchased && (
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            ✅ Purchased
                          </div>
                        )}
                      </div>

                      {product.id === "complete-growth-kit" && (
                        <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-4">
                          <div className="flex items-center gap-2 text-red-700 font-semibold">
                            <Clock className="w-4 h-4" />
                            {currentLang.offerEnds}{" "}
                            {timeLeft.hours.toString().padStart(2, "0")}:
                            {timeLeft.minutes.toString().padStart(2, "0")}:
                            {timeLeft.seconds.toString().padStart(2, "0")}
                          </div>
                        </div>
                      )}

                      <ul className="space-y-2 text-gray-700 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:w-80">
                      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            ₹{product.price}
                          </div>
                          {product.originalPrice > product.price && (
                            <div className="text-lg text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </div>
                          )}
                          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                            {Math.round(
                              ((product.originalPrice - product.price) /
                                product.originalPrice) *
                                100,
                            )}
                            % OFF
                          </div>

                          {isPurchased ? (
                            <button
                              onClick={() => setShowSuccessPage(product.id)}
                              className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-600 transition-all mb-4"
                            >
                              <Download className="w-4 h-4 inline mr-2" />
                              Download Products
                            </button>
                          ) : (
                            <button
                              onClick={() => setShowPaymentForm(product.id)}
                              className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all mb-4"
                            >
                              {currentLang.buyNow} - ₹{product.price}
                            </button>
                          )}

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
              );
            })}
          </div>
        </section>
      </main>

      {/* Payment Modal */}
      {showPaymentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {currentLang.paymentForm}
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLang.fullName}
                </label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLang.emailAddress}
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLang.phoneNumber}
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentLang.city}
                </label>
                <input
                  type="text"
                  value={customerInfo.city}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, city: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Mumbai"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowPaymentForm(null)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handlePurchase(showPaymentForm)}
                disabled={
                  isSubmitting ||
                  !customerInfo.name ||
                  !customerInfo.email ||
                  !customerInfo.phone
                }
                className="flex-1 bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin inline mr-2"></div>
                    {currentLang.processing}
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    {currentLang.paySecure}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 FameChase.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
