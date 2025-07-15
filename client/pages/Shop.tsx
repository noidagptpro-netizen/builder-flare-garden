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
  CreditCard,
  Shield,
  FileText,
  Mail,
  Layout,
  BarChart,
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
  downloadType: "free" | "paid";
  paymentLink?: string;
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
      "Professional Pricing Calculator",
      "Content Calendar Template (3 months)",
      "Growth Strategy Workbook",
      "Hashtag Research Guide",
      "Rate Card Templates",
      "Contract Templates",
    ],
    downloads: 2547,
    rating: 4.9,
    isPopular: true,
    timeLeft: "23h 45m",
    downloadType: "paid",
    paymentLink: "https://rzp.io/l/famechase-pro-99",
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
    downloadType: "paid",
    paymentLink: "https://rzp.io/l/reels-mastery-197",
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
    downloadType: "paid",
    paymentLink: "https://rzp.io/l/brand-collab-149",
  },
];

const freeProducts = [
  {
    id: "f1",
    name: "Basic Media Kit Template",
    description: "Simple one-page media kit to get started",
    downloads: 15432,
    category: "Template",
    downloadType: "free" as const,
    features: [
      "Basic template design",
      "Easy to customize",
      "Professional layout",
    ],
  },
  {
    id: "f2",
    name: "10 Viral Content Ideas",
    description: "Quick content ideas to boost engagement",
    downloads: 12876,
    category: "Guide",
    downloadType: "free" as const,
    features: [
      "10 proven content formats",
      "Examples included",
      "Platform-specific tips",
    ],
  },
  {
    id: "f3",
    name: "Instagram Bio Templates",
    description: "5 proven bio templates that convert",
    downloads: 9654,
    category: "Template",
    downloadType: "free" as const,
    features: [
      "5 different bio styles",
      "Call-to-action examples",
      "Link optimization tips",
    ],
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState<string | null>(null);

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

  const handleFreeDownload = async (product: any) => {
    setIsDownloading(product.id);

    // Generate actual download content
    const content = generateFreeContent(product);

    // Create and download file
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, "-")}-FameChase.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloading(null);
    }, 2000);
  };

  const generateFreeContent = (product: any) => {
    const timestamp = new Date().toLocaleDateString();

    switch (product.id) {
      case "f1":
        return `
BASIC MEDIA KIT TEMPLATE
Downloaded from FameChase.com on ${timestamp}

=== CREATOR PROFILE TEMPLATE ===
Name: [Your Name]
Age: [Your Age]
Location: [Your City]
Niche: [Your Content Niche]
Primary Platform: [Instagram/YouTube/etc.]

=== AUDIENCE OVERVIEW ===
Followers: [Your Follower Count]
Average Views: [Your Average Views]
Engagement Rate: [Your Engagement %]
Demographics: [Your Audience Info]

=== COLLABORATION RATES ===
Instagram Post: ₹[Your Rate]
Instagram Story: ₹[Your Rate]
YouTube Video: ₹[Your Rate]
Blog Post: ₹[Your Rate]

=== CONTACT INFORMATION ===
Email: [Your Email]
Instagram: [Your Instagram]
YouTube: [Your YouTube]
Website: [Your Website]

=== INSTRUCTIONS ===
1. Replace all [brackets] with your actual information
2. Add your best content screenshots
3. Include 2-3 brand collaboration examples
4. Save as PDF and send to brands

---
This template was downloaded from FameChase.com
For professional PDF designs, upgrade to our Premium Media Kit Package!
        `;

      case "f2":
        return `
10 VIRAL CONTENT IDEAS
Downloaded from FameChase.com on ${timestamp}

=== VIRAL CONTENT FORMULAS ===

1. BEHIND THE SCENES
Show your content creation process
Example: "How I create my Instagram posts in 30 minutes"

2. BEFORE & AFTER
Transformation content that shows progress
Example: "My room makeover in 24 hours"

3. MYTH BUSTING
Debunk common misconceptions in your niche
Example: "5 fitness myths that are actually harmful"

4. DAY IN THE LIFE
Show your authentic daily routine
Example: "Day in the life of a content creator"

5. TUTORIALS & HOW-TOs
Teach something valuable in under 60 seconds
Example: "How to take perfect selfies with phone lighting"

6. TRENDING SOUNDS + YOUR TWIST
Use popular audio but make it relevant to your niche
Example: Use trending song for workout routine

7. REACTION CONTENT
React to trends, news, or other content in your field
Example: "Reacting to my old content from 2 years ago"

8. STORY TIME
Share personal experiences and lessons learned
Example: "The biggest mistake I made as a new creator"

9. COMPARISON CONTENT
Compare products, methods, or approaches
Example: "Expensive vs cheap skincare routine"

10. CHALLENGES & EXPERIMENTS
Try something new for a set period
Example: "I only ate green foods for a week"

=== PRO TIPS ===
- Post when your audience is most active
- Use 3-5 relevant hashtags
- Engage with comments in first hour
- Create thumbnail that stands out
- Hook viewers in first 3 seconds

---
Downloaded from FameChase.com
For 50+ viral content ideas and templates, check out our Premium Creator Kit!
        `;

      case "f3":
        return `
5 INSTAGRAM BIO TEMPLATES
Downloaded from FameChase.com on ${timestamp}

=== TEMPLATE 1: LIFESTYLE CREATOR ===
🌟 [Your Niche] enthusiast
📍 [Your City]
✨ Helping you [your main value proposition]
👇 [Your main content type] below
🔗 [Your link]

=== TEMPLATE 2: BUSINESS/COACH ===
💼 [Your Profession/Title]
🎯 I help [target audience] achieve [specific outcome]
📚 [Your credentials/experience]
⬇�� Free resources below
🔗 [Your link]

=== TEMPLATE 3: CREATIVE/ARTIST ===
🎨 [Your Creative Field]
🌈 Creating [type of content] that [emotion/feeling]
📖 My journey: [brief story]
💫 New [content type] every [frequency]
🔗 [Your link]

=== TEMPLATE 4: FITNESS/HEALTH ===
💪 [Your fitness specialty]
🥗 [Your nutrition approach]
🏆 [Your achievements/certifications]
📲 [Your main content type] daily
🔗 [Your link]

=== TEMPLATE 5: EDUCATION/EXPERT ===
📚 [Your expertise area]
🎓 [Your qualifications]
💡 Simplifying [complex topic] for everyone
📝 [Your content frequency and type]
🔗 [Your link]

=== BIO OPTIMIZATION TIPS ===
1. Use keywords your audience searches for
2. Include a clear call-to-action
3. Add your location for local opportunities
4. Use emojis to break up text
5. Update your link regularly
6. Include your best achievement/credential
7. Tell people what to expect from following you

=== CALL-TO-ACTION IDEAS ===
- "DM me 'START' for free guide"
- "Click link for my free course"
- "Tag a friend who needs this"
- "Save this post for later"
- "Turn on notifications for daily tips"

---
Downloaded from FameChase.com
For professional bio writing and profile optimization, upgrade to our Creator Pro Package!
        `;

      default:
        return `FameChase.com Creator Resource - ${product.name}`;
    }
  };

  const handlePaidPurchase = (product: Product) => {
    if (product.paymentLink) {
      window.open(product.paymentLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 py-6 bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            FameChase<span className="text-neon-green">.com</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Creator <span className="text-neon-green">Toolkit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional tools, templates, and courses to accelerate your
            creator journey. Everything you need to turn your passion into
            profit.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>15,000+ creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>75,000+ downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-neon-green text-black shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
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
            <Gift className="w-8 h-8 text-neon-green" />
            <h2 className="text-3xl font-bold text-gray-900">
              Free Creator Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {freeProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-neon-green/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-neon-green text-black text-sm font-bold px-3 py-1 rounded-full">
                    FREE
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.downloads.toLocaleString()} downloads
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-neon-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleFreeDownload(product)}
                  disabled={isDownloading === product.id}
                  className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  {isDownloading === product.id ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Free
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Products */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-electric-blue" />
            <h2 className="text-3xl font-bold text-gray-900">
              Premium Creator Tools
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                  product.isPopular
                    ? "border-neon-green"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Product Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                      {product.badge && (
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      )}
                      {product.isTrending && (
                        <div className="flex items-center gap-1 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          TRENDING
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full transition-colors ${
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Rating and Downloads */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <span>{product.downloads.toLocaleString()} downloads</span>
                  </div>

                  {/* Time Left */}
                  {product.timeLeft && (
                    <div className="flex items-center gap-2 text-sm text-red-600 mb-4 bg-red-50 px-3 py-2 rounded-lg">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">
                        Offer ends in {product.timeLeft}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-xl text-gray-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                        <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                          {Math.round(
                            (1 - product.price / product.originalPrice) * 100,
                          )}
                          % OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Purchase Button */}
                  <button
                    onClick={() => handlePaidPurchase(product)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 text-lg ${
                      product.isPopular
                        ? "bg-gradient-to-r from-neon-green to-green-400 text-black hover:shadow-lg hover:scale-105"
                        : "bg-gradient-to-r from-electric-blue to-blue-500 text-white hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    Buy Now - ₹{product.price}
                  </button>

                  <div className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Secure payment
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Instant download
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Money-back guarantee
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bundle Offer Section */}
        <section className="mt-20 bg-gradient-to-r from-electric-blue/10 to-soft-violet/10 rounded-3xl p-8 border-2 border-electric-blue/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-electric-blue to-soft-violet text-white rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-bold">LIMITED TIME BUNDLE OFFER</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🔥 Complete Creator Bundle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get ALL premium products for 70% OFF - Save ₹500+ and become a
              creator success story
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-xl border-2 border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Everything You Need Package
                </h3>
                <p className="text-gray-600">
                  All tools, templates, and courses in one bundle
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-neon-green">₹297</div>
                <div className="text-xl text-gray-400 line-through">₹997</div>
                <div className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                  70% OFF
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {products.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Check className="w-5 h-5 text-neon-green" />
                  <span className="font-medium text-gray-900">
                    {product.name}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-neon-green" />
                <span className="font-medium text-gray-900">
                  Bonus: 1-on-1 Strategy Call
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://rzp.io/l/creator-bundle-297",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="w-full bg-gradient-to-r from-neon-green to-electric-blue text-black font-bold py-6 rounded-xl text-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <CreditCard className="w-6 h-6" />
              Get Complete Bundle - Save ₹700
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Offer valid for next 24 hours only</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">
            FameChase<span className="text-neon-green">.com</span>
          </div>
          <p className="text-gray-600 mb-6">
            Empowering creators to build profitable businesses
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/quiz" className="text-gray-600 hover:text-gray-900">
              Take Quiz
            </Link>
            <Link to="/results" className="text-gray-600 hover:text-gray-900">
              Results
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 FameChase.com. All rights reserved. | Built for creators, by
            creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
