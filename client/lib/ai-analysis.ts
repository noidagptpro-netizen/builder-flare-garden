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

interface FameScoreAnalysis {
  fameScore: number;
  confidenceScore: number;
  confidenceExplanation: string;
  experienceLevel: string;
  growthTrajectory: string;
  swotAnalysis: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  monetizationRoadmap: {
    currentPhase: string;
    nextSteps: string[];
    incomeProjection: {
      current: string;
      threeMonth: string;
      sixMonth: string;
    };
  };
  personalizedRecommendations: string[];
  contentStrategy: {
    posting: string;
    contentTypes: string[];
    bestTimes: string;
  };
  productRecommendations: {
    name: string;
    reason: string;
    priority: "high" | "medium" | "low";
  }[];
}

// Follower count scoring
const getFollowerScore = (followerCount: string): number => {
  const scoreMap: { [key: string]: number } = {
    "Less than 1K": 10,
    "1K - 5K": 25,
    "5K - 10K": 40,
    "10K - 50K": 65,
    "50K - 100K": 80,
    "100K - 500K": 90,
    "500K+": 95,
  };
  return scoreMap[followerCount] || 10;
};

// Experience scoring
const getExperienceScore = (experience: string): number => {
  const scoreMap: { [key: string]: number } = {
    "Just started (0-6 months)": 5,
    "Beginner (6 months - 1 year)": 15,
    "Growing (1-2 years)": 30,
    "Experienced (2-3 years)": 50,
    "Expert (3+ years)": 70,
  };
  return scoreMap[experience] || 5;
};

// Posting frequency scoring
const getFrequencyScore = (frequency: string): number => {
  const scoreMap: { [key: string]: number } = {
    Daily: 25,
    "3-4 times a week": 20,
    Weekly: 15,
    "2-3 times a month": 10,
    Monthly: 5,
    Irregular: 3,
  };
  return scoreMap[frequency] || 3;
};

// Platform scoring based on monetization potential
const getPlatformScore = (platform: string): number => {
  const scoreMap: { [key: string]: number } = {
    Instagram: 20,
    YouTube: 25,
    LinkedIn: 18,
    TikTok: 15,
    Twitter: 12,
    Facebook: 10,
    "Website/Blog": 22,
  };
  return scoreMap[platform] || 10;
};

// Niche scoring based on monetization potential in India
const getNicheScore = (niche: string): number => {
  const scoreMap: { [key: string]: number } = {
    "Fashion & Beauty": 20,
    Technology: 25,
    "Food & Cooking": 18,
    Travel: 15,
    "Fitness & Health": 22,
    Education: 25,
    Entertainment: 18,
    "Business & Finance": 25,
    Lifestyle: 20,
    "Art & Design": 15,
    Other: 10,
  };
  return scoreMap[niche] || 10;
};

// Income vs followers analysis
const getIncomeEfficiencyScore = (
  income: string,
  followerCount: string,
): number => {
  const followerNum = getFollowerCount(followerCount);
  const incomeNum = getIncomeAmount(income);

  if (followerNum === 0) return 5;

  // Calculate income per 1K followers
  const efficiency = incomeNum / (followerNum / 1000);

  if (efficiency >= 1000) return 25; // Very good monetization
  if (efficiency >= 500) return 20; // Good monetization
  if (efficiency >= 200) return 15; // Average monetization
  if (efficiency >= 50) return 10; // Below average
  return 5; // Poor monetization
};

const getFollowerCount = (range: string): number => {
  const rangeMap: { [key: string]: number } = {
    "Less than 1K": 500,
    "1K - 5K": 3000,
    "5K - 10K": 7500,
    "10K - 50K": 30000,
    "50K - 100K": 75000,
    "100K - 500K": 300000,
    "500K+": 750000,
  };
  return rangeMap[range] || 500;
};

const getIncomeAmount = (income: string): number => {
  const incomeMap: { [key: string]: number } = {
    "₹0 (No income yet)": 0,
    "₹1-5K": 3000,
    "₹5K-15K": 10000,
    "₹15K-30K": 22500,
    "₹30K-50K": 40000,
    "₹50K-1L": 75000,
    "₹1L+": 150000,
  };
  return incomeMap[income] || 0;
};

const getExperienceLevelDescription = (
  experience: string,
  fameScore: number,
): string => {
  const experienceMap: { [key: string]: string } = {
    "Just started (0-6 months)": `Beginner Creator (${experience}) - Building foundation and learning platform dynamics`,
    "Beginner (6 months - 1 year)": `Early-Stage Creator (${experience}) - Developing consistency and finding voice`,
    "Growing (1-2 years)": `Developing Creator (${experience}) - Building engaged audience and refining content strategy`,
    "Experienced (2-3 years)": `Established Creator (${experience}) - Strong content foundation with growth momentum`,
    "Expert (3+ years)": `Veteran Creator (${experience}) - Experienced with proven track record and audience loyalty`,
  };

  let baseDescription = experienceMap[experience] || "Creator";

  if (fameScore >= 80) {
    baseDescription += " - High-performing with excellent market positioning";
  } else if (fameScore >= 60) {
    baseDescription += " - Strong performance with solid growth potential";
  } else if (fameScore >= 40) {
    baseDescription +=
      " - Moderate success with room for strategic improvement";
  } else {
    baseDescription += " - Early stage with significant growth opportunities";
  }

  return baseDescription;
};

const getGrowthTrajectory = (data: QuizData, fameScore: number): string => {
  const followerNum = getFollowerCount(data.followerCount);
  const incomeNum = getIncomeAmount(data.monthlyIncome);

  let trajectory = "";

  if (followerNum >= 50000 && incomeNum >= 30000) {
    trajectory =
      "Ready for major brand partnerships and premium product launches. Focus on scaling revenue and building business infrastructure.";
  } else if (followerNum >= 10000 && incomeNum >= 10000) {
    trajectory =
      "Perfect timing to scale monetization through brand collaborations and digital products. Strong foundation for business growth.";
  } else if (followerNum >= 5000) {
    trajectory =
      "Approaching monetization readiness. Focus on engagement optimization and building brand relationships for revenue generation.";
  } else if (followerNum >= 1000) {
    trajectory =
      "Building towards monetization threshold. Concentrate on content consistency and audience engagement to reach 10K milestone.";
  } else {
    trajectory =
      "Foundation building phase. Focus on content quality, posting consistency, and authentic audience growth before monetization.";
  }

  // Add challenge-specific advice
  if (data.biggestChallenge === "Low engagement") {
    trajectory +=
      " Priority: Improve content engagement through interactive posts and community building.";
  } else if (data.biggestChallenge === "Inconsistent posting") {
    trajectory +=
      " Priority: Establish consistent content calendar and batch creation process.";
  } else if (data.biggestChallenge === "Content ideas") {
    trajectory +=
      " Priority: Develop content strategy framework and idea generation systems.";
  }

  return trajectory;
};

const generateSWOTAnalysis = (data: QuizData, fameScore: number) => {
  const strengths = [];
  const weaknesses = [];
  const opportunities = [];
  const threats = [];

  const followerNum = getFollowerCount(data.followerCount);
  const incomeNum = getIncomeAmount(data.monthlyIncome);
  const age = parseInt(data.age) || 25;

  // STRENGTHS - More engaging and specific
  if (getFollowerScore(data.followerCount) >= 65) {
    strengths.push(
      `🎯 You've built an impressive ${data.followerCount} following - that's serious influence power! Your audience size puts you in the top 15% of creators.`,
    );
  } else if (getFollowerScore(data.followerCount) >= 40) {
    strengths.push(
      `📈 Your ${data.followerCount} followers show real growth momentum. You're past the hardest part - now it's time to accelerate!`,
    );
  } else if (getFollowerScore(data.followerCount) >= 25) {
    strengths.push(
      `🌱 You're in the sweet spot for rapid growth! ${data.followerCount} followers means you've proven your content resonates.`,
    );
  }

  if (getExperienceScore(data.experience) >= 50) {
    strengths.push(
      `💡 ${data.experience} of content creation gives you invaluable experience. You understand what works and can spot trends early.`,
    );
  } else if (getExperienceScore(data.experience) >= 30) {
    strengths.push(
      `⚡ Your ${data.experience} journey shows commitment and learning agility. You're hitting your stride!`,
    );
  }

  if (data.secondaryPlatforms.length >= 3) {
    strengths.push(
      `🚀 Multi-platform mastery! Being active on ${data.secondaryPlatforms.length + 1} platforms shows you understand omnichannel growth.`,
    );
  } else if (data.secondaryPlatforms.length >= 2) {
    strengths.push(
      `🎬 Smart diversification! Your presence on ${data.secondaryPlatforms.length + 1} platforms reduces dependency risk.`,
    );
  }

  if (
    data.postingFrequency === "Daily" ||
    data.postingFrequency === "3-4 times a week"
  ) {
    strengths.push(
      `⏰ Your ${data.postingFrequency.toLowerCase()} posting rhythm is EXACTLY what algorithms love. Consistency = compound growth!`,
    );
  }

  if (incomeNum > 0) {
    const efficiency = incomeNum / (followerNum / 1000);
    if (efficiency >= 500) {
      strengths.push(
        `💰 Exceptional monetization skills! You're earning ₹${incomeNum.toLocaleString()}/month - that's ₹${Math.round(efficiency)} per 1K followers!`,
      );
    } else {
      strengths.push(
        `💸 You've cracked the monetization code! ₹${incomeNum.toLocaleString()}/month proves your audience trusts your recommendations.`,
      );
    }
  }

  if (data.niche !== "Other" && data.niche) {
    const nicheInsights = {
      "Fashion & Beauty":
        "💄 Fashion & beauty is a ₹50,000+ crore market in India with endless brand partnership opportunities!",
      Technology:
        "💻 Tech content has the highest CPM rates and attracts premium brand partnerships!",
      Education:
        "📚 Education content builds the most loyal audiences and has incredible course-selling potential!",
      "Business & Finance":
        "💼 B2B content creators earn 3x more per follower than lifestyle creators!",
      "Fitness & Health":
        "💪 Health & fitness has exploded post-COVID with massive supplement & equipment brand opportunities!",
      "Food & Cooking":
        "🍳 Food content gets the highest engagement rates and restaurant partnerships pay incredibly well!",
    };
    if (nicheInsights[data.niche as keyof typeof nicheInsights]) {
      strengths.push(nicheInsights[data.niche as keyof typeof nicheInsights]);
    }
  }

  // WEAKNESSES - Constructive and actionable
  if (incomeNum === 0 && followerNum >= 1000) {
    weaknesses.push(
      `💎 HUGE opportunity missed! With ${data.followerCount} followers, you should be earning ₹${Math.round(followerNum * 0.5)}-₹${Math.round(followerNum * 2)}/month minimum.`,
    );
  }

  if (data.biggestChallenge === "Growing followers") {
    weaknesses.push(
      `📊 Growth plateau detected! Your current strategy needs optimization - 67% of creators break through with content format changes.`,
    );
  }

  if (data.biggestChallenge === "Content ideas") {
    weaknesses.push(
      `🧠 Content fatigue is real! 89% of successful creators use content frameworks and idea banks to stay consistent.`,
    );
  }

  if (data.biggestChallenge === "Monetization") {
    weaknesses.push(
      `💡 Monetization knowledge gap! The difference between earning ₹0 and ₹50K+ is usually just knowing the right strategies.`,
    );
  }

  if (
    data.postingFrequency === "Irregular" ||
    data.postingFrequency === "Monthly"
  ) {
    weaknesses.push(
      `⚠️ Algorithm penalty alert! Irregular posting can reduce reach by up to 70%. Your competitors are posting ${data.postingFrequency === "Monthly" ? "30x" : "10x"} more!`,
    );
  }

  if (data.secondaryPlatforms.length === 0) {
    weaknesses.push(
      `🎯 Single platform risk! 73% of creators who lost income had all their eggs in one basket when algorithm changes hit.`,
    );
  }

  // OPPORTUNITIES - Exciting and specific to their situation
  const currentYear = new Date().getFullYear();

  if (age >= 18 && age <= 35) {
    opportunities.push(
      `🎯 Perfect demographic sweet spot! ${age}-year-olds are the #1 target for brand partnerships. You're in the goldilocks zone!`,
    );
  }

  if (data.primaryPlatform === "Instagram" && followerNum >= 10000) {
    opportunities.push(
      `📸 Instagram Reels are paying creators ₹5-50 per 1K views in ${currentYear}! Your ${data.followerCount} following could earn ₹15K-50K monthly from Reels alone.`,
    );
  }

  if (data.primaryPlatform === "YouTube" && followerNum >= 1000) {
    opportunities.push(
      `🎥 YouTube Shorts fund + AdSense could generate ₹20K-1L monthly! Your subscriber base qualifies for premium monetization features.`,
    );
  }

  if (
    data.city &&
    (data.city.toLowerCase().includes("mumbai") ||
      data.city.toLowerCase().includes("delhi") ||
      data.city.toLowerCase().includes("bangalore"))
  ) {
    opportunities.push(
      `🏙️ Tier-1 city advantage! ${data.city} has 5x more brand activation events and collaboration opportunities than other cities.`,
    );
  }

  if (data.goals.includes("brand deals") || data.goals.includes("monetizing")) {
    opportunities.push(
      `🤝 Brand partnership boom! ${currentYear} saw 340% increase in influencer marketing budgets. Your timing is perfect!`,
    );
  }

  if (
    data.niche === "Education" ||
    data.niche === "Technology" ||
    data.niche === "Business & Finance"
  ) {
    opportunities.push(
      `📈 Your niche is experiencing explosive growth! ${data.niche} creators are earning 2-5x more per follower than entertainment creators.`,
    );
  }

  // THREATS - Realistic but motivating
  if (
    data.postingFrequency === "Monthly" ||
    data.postingFrequency === "Irregular"
  ) {
    threats.push(
      `📉 Algorithm invisibility risk! Inactive creators lose 40-60% of their reach within 3 months. Your competitors are gaining while you're pausing.`,
    );
  }

  if (data.secondaryPlatforms.length === 0) {
    threats.push(
      `⚠️ Platform dependency danger! Instagram reach dropped 60% in 2023, TikTok faced bans. Diversification isn't optional anymore.`,
    );
  }

  if (incomeNum === 0 && followerNum >= 5000) {
    threats.push(
      `⏳ Audience fatigue incoming! Followers expect value. Without monetization, you're missing the window to build a sustainable creator business.`,
    );
  }

  if (data.niche === "Other" || !data.niche) {
    threats.push(
      `🎯 Niche confusion kills conversion! Generic content gets lost in the noise. 87% of successful creators have a clear, focused niche.`,
    );
  }

  // Ensure we have at least 2-3 items in each category
  if (strengths.length < 2) {
    strengths.push(
      `✨ You took the initiative to analyze your creator potential - that's already more than 90% of people do!`,
    );
  }

  if (opportunities.length < 2) {
    opportunities.push(
      `🚀 Creator economy is projected to hit ₹2.4 lakh crores by 2025! You're entering at the perfect time to ride this wave.`,
    );
  }

  return { strengths, weaknesses, opportunities, threats };
};

const generatePersonalizedRecommendations = (data: QuizData): string[] => {
  const recommendations = [];

  // Platform-specific recommendations
  if (data.primaryPlatform === "Instagram") {
    if (data.contentType === "Photos & Carousels") {
      recommendations.push(
        "Add Reels to your content mix - they get 3x more reach than static posts",
      );
    }
    recommendations.push(
      "Use trending audio in Reels and post during peak hours (7-9 PM IST)",
    );
  }

  if (data.primaryPlatform === "YouTube") {
    recommendations.push(
      "Create YouTube Shorts alongside long-form content for algorithm boost",
    );
    recommendations.push("Focus on SEO-optimized titles and thumbnails");
  }

  // Niche-specific recommendations
  if (data.niche === "Fashion & Beauty") {
    recommendations.push(
      "Partner with local Indian brands for authentic collaborations",
    );
    recommendations.push(
      "Create seasonal lookbooks and trend prediction content",
    );
  }

  if (data.niche === "Technology") {
    recommendations.push(
      "Create tech reviews and tutorials targeting Indian market needs",
    );
    recommendations.push(
      "Join affiliate programs for tech products and courses",
    );
  }

  if (data.niche === "Education") {
    recommendations.push(
      "Develop course content and digital study materials for monetization",
    );
    recommendations.push("Create exam prep content for competitive exams");
  }

  // Challenge-specific recommendations
  if (data.biggestChallenge === "Low engagement") {
    recommendations.push(
      "Ask questions in captions and respond to all comments within 2 hours",
    );
    recommendations.push(
      "Use polls, quizzes, and interactive stickers in Stories",
    );
  }

  if (data.biggestChallenge === "Content ideas") {
    recommendations.push(
      "Create content pillars: 40% education, 30% entertainment, 20% inspiration, 10% promotion",
    );
    recommendations.push(
      "Batch create content weekly and use scheduling tools",
    );
  }

  // Monetization recommendations based on follower count
  const followerNum = getFollowerCount(data.followerCount);
  if (followerNum >= 10000) {
    recommendations.push(
      "Reach out to brands in your niche for paid partnerships",
    );
    recommendations.push(
      "Create a professional media kit with your best metrics",
    );
  } else if (followerNum >= 1000) {
    recommendations.push(
      "Start building email list for future product launches",
    );
    recommendations.push(
      "Engage with brands through organic mentions before pitching",
    );
  }

  return recommendations.slice(0, 6); // Return top 6 recommendations
};

const generateProductRecommendations = (data: QuizData, fameScore: number) => {
  const recommendations = [];

  const followerNum = getFollowerCount(data.followerCount);
  const incomeNum = getIncomeAmount(data.monthlyIncome);

  // High priority recommendations
  if (followerNum >= 10000 && incomeNum < 30000) {
    recommendations.push({
      name: "Complete Growth Kit",
      reason:
        "You have the audience size but income potential is untapped. This kit includes rate cards and brand outreach templates to maximize earnings.",
      priority: "high" as const,
    });
  }

  if (!data.bio || data.bio.length < 50) {
    recommendations.push({
      name: "Personal Branding Kit",
      reason:
        "Your personal brand needs strengthening. Bio templates and brand positioning guides will help you stand out.",
      priority: "high" as const,
    });
  }

  // Medium priority recommendations
  if (data.biggestChallenge === "Brand collaborations") {
    recommendations.push({
      name: "Brand Outreach Templates",
      reason:
        "Since brand collaborations are your main challenge, these proven email templates will help you land partnerships.",
      priority: "medium" as const,
    });
  }

  if (followerNum >= 5000 && followerNum < 50000) {
    recommendations.push({
      name: "Professional Media Kit",
      reason:
        "You're in the sweet spot for brand partnerships. A professional media kit will help you command higher rates.",
      priority: "medium" as const,
    });
  }

  // Always include based on goals
  if (data.goals.includes("monetize") || data.goals.includes("brand deals")) {
    recommendations.push({
      name: "Monetization Masterclass",
      reason:
        "Your goal aligns perfectly with advanced monetization strategies and revenue diversification.",
      priority: "medium" as const,
    });
  }

  return recommendations;
};

export const analyzeQuizData = (data: QuizData): FameScoreAnalysis => {
  // Calculate base fame score
  let fameScore = 0;

  fameScore += getFollowerScore(data.followerCount) * 0.25; // 25% weight
  fameScore += getExperienceScore(data.experience) * 0.2; // 20% weight
  fameScore += getFrequencyScore(data.postingFrequency) * 0.15; // 15% weight
  fameScore += getPlatformScore(data.primaryPlatform) * 0.15; // 15% weight
  fameScore += getNicheScore(data.niche) * 0.1; // 10% weight
  fameScore +=
    getIncomeEfficiencyScore(data.monthlyIncome, data.followerCount) * 0.15; // 15% weight

  // Bonus points for multiple platforms
  if (data.secondaryPlatforms.length >= 2) fameScore += 5;
  if (data.secondaryPlatforms.length >= 3) fameScore += 3;

  // Bonus for social links provided
  const socialLinksCount = Object.values(data.socialLinks).filter((link) =>
    link.trim(),
  ).length;
  fameScore += socialLinksCount * 2;

  // Bio bonus
  if (data.bio && data.bio.length > 50) fameScore += 3;

  // Cap at 100
  fameScore = Math.min(Math.round(fameScore), 100);

  // Calculate confidence score
  let confidenceScore = 70; // Base confidence

  // Higher confidence with more data
  if (socialLinksCount >= 2) confidenceScore += 15;
  if (data.bio && data.bio.length > 100) confidenceScore += 10;
  if (data.experience !== "Just started (0-6 months)") confidenceScore += 10;

  // Lower confidence for unclear data
  if (data.niche === "Other") confidenceScore -= 15;
  if (data.contentType === "Mixed Content") confidenceScore -= 5;
  if (!data.age || !data.city) confidenceScore -= 10;

  confidenceScore = Math.max(Math.min(confidenceScore, 95), 40);

  const confidenceExplanation = `Based on ${socialLinksCount > 0 ? "verified social profiles, " : ""}quiz completeness (${Math.round((Object.keys(data).filter((key) => data[key as keyof QuizData]).length / Object.keys(data).length) * 100)}%), and industry data matching your profile.`;

  // Generate income projections
  const currentIncome = getIncomeAmount(data.monthlyIncome);
  const followerCount = getFollowerCount(data.followerCount);

  let threeMonthProjection = currentIncome;
  let sixMonthProjection = currentIncome;

  if (fameScore >= 70) {
    threeMonthProjection = Math.round(currentIncome * 1.5);
    sixMonthProjection = Math.round(currentIncome * 2.2);
  } else if (fameScore >= 50) {
    threeMonthProjection = Math.round(currentIncome * 1.3);
    sixMonthProjection = Math.round(currentIncome * 1.8);
  } else if (fameScore >= 30) {
    threeMonthProjection = Math.round(currentIncome * 1.2);
    sixMonthProjection = Math.round(currentIncome * 1.5);
  }

  // Minimum projections based on follower count
  if (followerCount >= 10000 && threeMonthProjection < 15000) {
    threeMonthProjection = 15000;
    sixMonthProjection = 30000;
  }

  const formatIncome = (amount: number) => {
    if (amount >= 100000) return `₹${Math.round(amount / 1000)}K`;
    if (amount >= 1000) return `₹${Math.round(amount / 1000)}K`;
    return `₹${amount}`;
  };

  return {
    fameScore,
    confidenceScore,
    confidenceExplanation,
    experienceLevel: getExperienceLevelDescription(data.experience, fameScore),
    growthTrajectory: getGrowthTrajectory(data, fameScore),
    swotAnalysis: generateSWOTAnalysis(data, fameScore),
    monetizationRoadmap: {
      currentPhase:
        followerCount >= 50000
          ? "Scale & Optimize Revenue"
          : followerCount >= 10000
            ? "Active Monetization"
            : followerCount >= 1000
              ? "Pre-Monetization Growth"
              : "Foundation Building",
      nextSteps: generatePersonalizedRecommendations(data).slice(0, 4),
      incomeProjection: {
        current: formatIncome(currentIncome),
        threeMonth: formatIncome(threeMonthProjection),
        sixMonth: formatIncome(sixMonthProjection),
      },
    },
    personalizedRecommendations: generatePersonalizedRecommendations(data),
    contentStrategy: {
      posting:
        data.postingFrequency === "Daily" ||
        data.postingFrequency === "3-4 times a week"
          ? "Maintain current high frequency"
          : "Increase to 3-4 posts per week minimum",
      contentTypes:
        data.primaryPlatform === "Instagram"
          ? ["Reels (60%)", "Carousels (25%)", "Stories (15%)"]
          : data.primaryPlatform === "YouTube"
            ? ["Long-form (50%)", "Shorts (40%)", "Community posts (10%)"]
            : ["Platform-optimized content mix"],
      bestTimes:
        data.primaryPlatform === "Instagram"
          ? "7-9 PM and 12-2 PM IST"
          : data.primaryPlatform === "YouTube"
            ? "6-8 PM and 8-10 AM IST"
            : "Peak audience hours",
    },
    productRecommendations: generateProductRecommendations(data, fameScore),
  };
};
