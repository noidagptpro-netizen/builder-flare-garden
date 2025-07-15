import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Star,
  Check,
  TrendingUp,
  Users,
  Target,
  Zap,
  Crown,
  Gift,
  Clock,
  ShoppingCart,
  Heart,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
  downloads: number;
  rating: number;
  isPopular?: boolean;
  isTrending?: boolean;
  timeLeft?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Complete Creator Growth Kit",
    description:
      "Everything you need to grow from 0 to 10K followers and start monetizing",
    price: 99,
    originalPrice: 199,
    category: "Bundle",
    badge: "BESTSELLER",
    badgeColor: "bg-neon-green text-black",
    features: [
      "Personalized Media Kit PDF",
      "30+ Email Templates for Brand Outreach",
      "Professional Rate Card Calculator",
      "Content Calendar Template (3 months)",
      "Growth Strategy Workbook",
      "Hashtag Research Guide",
    ],
    downloads: 2547,
    rating: 4.9,
    isPopular: true,
    timeLeft: "23h 45m",
  },
  {
    id: "2",
    name: "Instagram Reels Mastery Course",
    description:
      "Learn the viral formula that gets millions of views consistently",
    price: 197,
    category: "Course",
    badge: "TRENDING",
    badgeColor: "bg-neon-pink text-white",
    features: [
      "4-hour video training",
      "50+ Viral Reel Ideas",
      "Editing Templates & Transitions",
      "Music & Sound Selection Guide",
      "Algorithm Optimization Secrets",
      "Case Studies from 1M+ creators",
    ],
    downloads: 1823,
    rating: 4.8,
    isTrending: true,
  },
  {
    id: "3",
    name: "Brand Collaboration Masterclass",
    description: "Get paid partnerships with top brands - step by step system",
    price: 149,
    category: "Training",
    badge: "LIMITED",
    badgeColor: "bg-electric-blue text-white",
    features: [
      "Brand Outreach Email Scripts",
      "Media Kit Templates (10 designs)",
      "Negotiation Tactics & Rate Cards",
      "Contract Templates",
      "50+ Brand Contact Database",
      "Pitch Deck Templates",
    ],
    downloads: 934,
    rating: 4.7,
    timeLeft: "2d 15h",
  },
  {
    id: "4",
    name: "YouTube Growth Accelerator",
    description: "Proven system to get 100K subscribers and monetize quickly",
    price: 247,
    originalPrice: 397,
    category: "Course",
    badge: "HOT",
    badgeColor: "bg-red-500 text-white",
    features: [
      "Complete YouTube Strategy Guide",
      "Thumbnail Design Pack (100+ templates)",
      "SEO & Algorithm Optimization",
      "Monetization Methods Breakdown",
      "Live Q&A Sessions (Monthly)",
      "Private Discord Community",
    ],
    downloads: 1456,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Content Calendar Pro",
    description: "Never run out of content ideas again - 365 days planned",
    price: 47,
    category: "Template",
    features: [
      "365 Content Ideas",
      "Monthly Theme Planning",
      "Hashtag Sets for Each Post",
      "Engagement Boosting Captions",
      "Cross-Platform Adaptation Guide",
      "Trending Topics Calendar",
    ],
    downloads: 3241,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Monetization Blueprint",
    description: "7 different ways to make money as a creator - detailed guide",
    price: 79,
    category: "Guide",
    badge: "NEW",
    badgeColor: "bg-soft-violet text-black",
    features: [
      "Affiliate Marketing Setup",
      "Digital Product Creation",
      "Sponsored Content Strategies",
      "Course Creation Blueprint",
      "Subscription Model Setup",
      "Merchandise Planning Guide",
    ],
    downloads: 867,
    rating: 4.8,
  },
];

const freeProducts = [
  {
    id: "f1",
    name: "Basic Media Kit Template",
    description: "Simple one-page media kit to get started",
    downloads: 15432,
  },
  {
    id: "f2",
    name: "10 Viral Content Ideas",
    description: "Quick content ideas to boost engagement",
    downloads: 12876,
  },
  {
    id: "f3",
    name: "Instagram Bio Templates",
    description: "5 proven bio templates that convert",
    downloads: 9654,
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const categories = [
    "All",
    "Bundle",
    "Course",
    "Training",
    "Template",
    "Guide",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handlePurchase = (productId: string) => {
    console.log("Processing purchase for product:", productId);
    // Handle payment logic here
  };

  return (
    <div className="min-h-screen bg-garden-white">
      {/* Header */}
      <header className="px-4 py-6 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-garden-dark">
            FameChase<span className="text-neon-green">.com</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-garden-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-garden-dark mb-6">
            Creator <span className="text-neon-green">Toolkit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional tools and templates to accelerate your creator journey.
            Trusted by 10,000+ creators worldwide.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10,000+ creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>50,000+ downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-neon-green text-black"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Free Products Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-bold text-garden-dark">
              Free Creator Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {freeProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-neon-green text-black text-xs font-bold px-2 py-1 rounded">
                    FREE
                  </span>
                  <span className="text-xs text-gray-500">
                    {product.downloads.toLocaleString()} downloads
                  </span>
                </div>
                <h3 className="text-lg font-bold text-garden-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <a
                  href="https://e7a22213a4e3477583ae6730113431ab-6064e56fbfd24606b13adf123.projects.builder.codes/shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 text-garden-dark py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors block text-center"
                >
                  Download Free
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Products */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-6 h-6 text-electric-blue" />
            <h2 className="text-2xl font-bold text-garden-dark">
              Premium Creator Tools
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  product.isPopular
                    ? "border-2 border-neon-green"
                    : "border border-gray-200"
                }`}
              >
                {/* Product Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                      {product.badge && (
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      )}
                      {product.isTrending && (
                        <div className="flex items-center gap-1 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                          <TrendingUp className="w-3 h-3" />
                          TRENDING
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-1 rounded-full transition-colors ${
                        wishlist.includes(product.id)
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${wishlist.includes(product.id) ? "fill-current" : ""}`}
                      />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-garden-dark mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Rating and Downloads */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                    <span>{product.downloads.toLocaleString()} downloads</span>
                  </div>

                  {/* Time Left */}
                  {product.timeLeft && (
                    <div className="flex items-center gap-2 text-sm text-red-600 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Offer ends in {product.timeLeft}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="px-6 pb-6">
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 4 && (
                      <div className="text-sm text-gray-500">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-garden-dark">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                        {Math.round(
                          (1 - product.price / product.originalPrice) * 100,
                        )}
                        % OFF
                      </span>
                    )}
                  </div>

                  {/* Purchase Button */}
                  <a
                    href="https://e7a22213a4e3477583ae6730113431ab-6064e56fbfd24606b13adf123.projects.builder.codes/shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      product.isPopular
                        ? "bg-neon-green text-black hover:bg-green-400 shadow-lg"
                        : "bg-electric-blue text-white hover:bg-blue-600"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now - ₹{product.price}
                  </a>

                  <div className="text-xs text-center text-gray-500 mt-2">
                    💳 Secure payment • 📱 Instant download • 💯 Money-back
                    guarantee
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upselling Section */}
        <section className="mt-16 bg-gradient-to-r from-electric-blue/10 to-soft-violet/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-garden-dark mb-4">
              🔥 Limited Time Bundle Offer
            </h2>
            <p className="text-gray-600">
              Get ALL premium products for 70% OFF - Save ₹500+
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-garden-dark">
                  Complete Creator Bundle
                </h3>
                <p className="text-gray-600">
                  Everything you need to become a successful creator
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-neon-green">₹297</div>
                <div className="text-gray-400 line-through">₹997</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {products.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 text-sm"
                >
                  <Check className="w-4 h-4 text-neon-green" />
                  <span>{product.name}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-4 rounded-lg text-lg hover:shadow-lg transition-all">
              Get Complete Bundle - Save ₹700
            </button>

            <div className="text-center text-xs text-gray-500 mt-3">
              ⏰ Offer valid for next 24 hours only
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
