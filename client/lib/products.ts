// Product Management System
export interface ProductConfig {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  isEnabled: boolean;
  category: "growth-kit" | "course" | "masterclass" | "bundle";
  downloads: ProductDownload[];
}

export interface ProductDownload {
  id: string;
  name: string;
  type: "pdf" | "template" | "guide" | "video" | "audio" | "zip";
  language: "english" | "hindi" | "both";
  content: string;
  fileName: string;
}

// Product Configuration
export const productConfigs: ProductConfig[] = [
  {
    id: "complete-growth-kit",
    name: "Complete Creator Growth Kit",
    price: 99,
    originalPrice: 199,
    description:
      "Everything you need to grow from 0 to 10K followers and start monetizing",
    isEnabled: true,
    category: "growth-kit",
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
    downloads: [
      {
        id: "media-kit-template",
        name: "Professional Media Kit Template",
        type: "template",
        language: "both",
        content: generateMediaKitContent,
        fileName: "Professional_Media_Kit_Template",
      },
      {
        id: "email-templates",
        name: "30+ Brand Outreach Email Templates",
        type: "template",
        language: "both",
        content: generateEmailTemplatesContent,
        fileName: "Brand_Outreach_Email_Templates",
      },
      {
        id: "pricing-calculator",
        name: "Professional Pricing Calculator",
        type: "template",
        language: "both",
        content: generatePricingCalculatorContent,
        fileName: "Creator_Pricing_Calculator",
      },
      {
        id: "content-calendar",
        name: "Content Calendar Template (3 months)",
        type: "template",
        language: "both",
        content: generateContentCalendarContent,
        fileName: "Content_Calendar_3_Months",
      },
      {
        id: "growth-strategy",
        name: "Growth Strategy Workbook",
        type: "guide",
        language: "both",
        content: generateGrowthStrategyContent,
        fileName: "Creator_Growth_Strategy_Workbook",
      },
      {
        id: "hashtag-guide",
        name: "Hashtag Research Guide",
        type: "guide",
        language: "both",
        content: generateHashtagGuideContent,
        fileName: "Hashtag_Research_Master_Guide",
      },
      {
        id: "rate-cards",
        name: "Rate Card Templates",
        type: "template",
        language: "both",
        content: generateRateCardContent,
        fileName: "Professional_Rate_Card_Templates",
      },
      {
        id: "contracts",
        name: "Contract Templates",
        type: "template",
        language: "both",
        content: generateContractContent,
        fileName: "Creator_Contract_Templates",
      },
      {
        id: "premium-tools",
        name: "Premium Tools Guide",
        type: "guide",
        language: "both",
        content: generatePremiumToolsContent,
        fileName: "Premium_Creator_Tools_Guide",
      },
    ],
  },
  {
    id: "reels-mastery",
    name: "Instagram Reels Mastery Course",
    price: 197,
    originalPrice: 397,
    description:
      "Learn the viral formula that gets millions of views consistently",
    isEnabled: true,
    category: "course",
    features: [
      "4-hour video training",
      "50+ Viral Reel Ideas",
      "Editing Templates & Transitions",
      "Music & Sound Selection Guide",
      "Algorithm Optimization Secrets",
      "Case Studies from 1M+ creators",
    ],
    downloads: [
      {
        id: "viral-reel-ideas",
        name: "50+ Viral Reel Ideas",
        type: "guide",
        language: "both",
        content: generateViralReelIdeasContent,
        fileName: "50_Viral_Reel_Ideas_Guide",
      },
      {
        id: "editing-templates",
        name: "Editing Templates & Transitions",
        type: "template",
        language: "both",
        content: generateEditingTemplatesContent,
        fileName: "Reel_Editing_Templates_Pack",
      },
      {
        id: "music-guide",
        name: "Music & Sound Selection Guide",
        type: "guide",
        language: "both",
        content: generateMusicGuideContent,
        fileName: "Reel_Music_Selection_Guide",
      },
      {
        id: "algorithm-secrets",
        name: "Algorithm Optimization Secrets",
        type: "guide",
        language: "both",
        content: generateAlgorithmSecretsContent,
        fileName: "Instagram_Algorithm_Secrets",
      },
      {
        id: "case-studies",
        name: "Case Studies from 1M+ Creators",
        type: "guide",
        language: "both",
        content: generateCaseStudiesContent,
        fileName: "Viral_Creator_Case_Studies",
      },
    ],
  },
  {
    id: "brand-masterclass",
    name: "Brand Collaboration Masterclass",
    price: 149,
    originalPrice: 299,
    description: "Get paid partnerships with top brands - step by step system",
    isEnabled: true,
    category: "masterclass",
    features: [
      "Brand Outreach Email Scripts",
      "Media Kit Templates (10 designs)",
      "Negotiation Tactics & Rate Cards",
      "Contract Templates",
      "50+ Brand Contact Database",
      "Pitch Deck Templates",
    ],
    downloads: [
      {
        id: "brand-outreach-scripts",
        name: "Brand Outreach Email Scripts",
        type: "template",
        language: "both",
        content: generateBrandOutreachScriptsContent,
        fileName: "Brand_Outreach_Email_Scripts",
      },
      {
        id: "media-kit-designs",
        name: "Media Kit Templates (10 designs)",
        type: "template",
        language: "both",
        content: generateMediaKitDesignsContent,
        fileName: "Media_Kit_Template_Collection",
      },
      {
        id: "negotiation-tactics",
        name: "Negotiation Tactics & Rate Cards",
        type: "guide",
        language: "both",
        content: generateNegotiationTacticsContent,
        fileName: "Brand_Negotiation_Tactics_Guide",
      },
      {
        id: "brand-contracts",
        name: "Contract Templates",
        type: "template",
        language: "both",
        content: generateBrandContractContent,
        fileName: "Brand_Partnership_Contracts",
      },
      {
        id: "brand-database",
        name: "50+ Brand Contact Database",
        type: "template",
        language: "both",
        content: generateBrandDatabaseContent,
        fileName: "Brand_Contact_Database_50plus",
      },
      {
        id: "pitch-decks",
        name: "Pitch Deck Templates",
        type: "template",
        language: "both",
        content: generatePitchDeckContent,
        fileName: "Brand_Pitch_Deck_Templates",
      },
    ],
  },
  {
    id: "youtube-mastery",
    name: "YouTube Mastery Course",
    price: 297,
    originalPrice: 597,
    description:
      "Complete YouTube growth and monetization blueprint for creators",
    isEnabled: true,
    category: "course",
    features: [
      "6-hour comprehensive video training",
      "YouTube SEO optimization secrets",
      "Monetization strategies (AdSense + sponsors)",
      "Thumbnail design templates & psychology",
      "Viral content frameworks & hooks",
      "Analytics mastery & growth tracking",
    ],
    downloads: [
      {
        id: "youtube-seo-guide",
        name: "YouTube SEO Optimization Guide",
        type: "guide",
        language: "both",
        content: generateYouTubeSEOContent,
        fileName: "YouTube_SEO_Mastery_Guide",
      },
      {
        id: "youtube-monetization",
        name: "Complete Monetization Strategies",
        type: "guide",
        language: "both",
        content: generateYouTubeMonetizationContent,
        fileName: "YouTube_Monetization_Blueprint",
      },
      {
        id: "thumbnail-templates",
        name: "Viral Thumbnail Templates & Psychology",
        type: "template",
        language: "both",
        content: generateThumbnailTemplatesContent,
        fileName: "YouTube_Thumbnail_Templates",
      },
      {
        id: "youtube-analytics",
        name: "YouTube Analytics Mastery Guide",
        type: "guide",
        language: "both",
        content: generateYouTubeAnalyticsContent,
        fileName: "YouTube_Analytics_Mastery",
      },
    ],
  },
  {
    id: "facebook-posting-mastery",
    name: "Facebook Posting Mastery Course",
    price: 197,
    originalPrice: 397,
    description:
      "Master Facebook organic reach and engagement for maximum impact",
    isEnabled: true,
    category: "course",
    features: [
      "5-hour video training series",
      "Facebook algorithm secrets 2024",
      "Post optimization techniques",
      "Community building strategies",
      "Facebook groups monetization",
      "Content calendar templates",
    ],
    downloads: [
      {
        id: "facebook-algorithm-guide",
        name: "Facebook Algorithm Secrets 2024",
        type: "guide",
        language: "both",
        content: generateFacebookAlgorithmContent,
        fileName: "Facebook_Algorithm_Secrets_2024",
      },
      {
        id: "facebook-posting-strategies",
        name: "High-Engagement Posting Strategies",
        type: "guide",
        language: "both",
        content: generateFacebookPostingContent,
        fileName: "Facebook_Posting_Strategies",
      },
      {
        id: "facebook-groups-monetization",
        name: "Facebook Groups Monetization Guide",
        type: "guide",
        language: "both",
        content: generateFacebookGroupsContent,
        fileName: "Facebook_Groups_Monetization",
      },
      {
        id: "facebook-content-calendar",
        name: "Facebook Content Calendar Templates",
        type: "template",
        language: "both",
        content: generateFacebookCalendarContent,
        fileName: "Facebook_Content_Calendar_Templates",
      },
    ],
  },
  {
    id: "complete-bundle",
    name: "Complete Creator Bundle",
    price: 297,
    originalPrice: 997,
    description:
      "Get ALL premium products for 70% OFF - Save ₹700+ and become a creator success story",
    isEnabled: true,
    category: "bundle",
    features: [
      "Complete Creator Growth Kit",
      "Instagram Reels Mastery Course",
      "Brand Collaboration Masterclass",
      "Bonus: 1-on-1 Strategy Call",
    ],
    downloads: [], // Bundle includes all downloads from other products
  },
];

// Content Generation Functions
function generateMediaKitContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userName = userData?.name || "Creator Name";
  const userEmail = userData?.email || "creator@email.com";
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";
  const userFollowers = userData?.followerCount || "10K+";

  if (language === "hindi") {
    return `📱 प्रोफेशनल मीडिया किट टेम्प्लेट

👤 क्रिएटर की ज���नकारी:
नाम: ${userName}
ईमेल: ${userEmail}
निच: ${userNiche}
प्राथमिक प्लेटफॉर्म: ${userPlatform}
फॉलोअर्स: ${userFollowers}

📊 परफॉर्मेंस मेट्रिक्स:
• औसत पहुंच: [आपकी पहुंच दर्ज करें]
• एंगेजमेंट रेट: [आपका एंगे���मेंट रेट]
• मासिक इंप्रेशन्स: [आपके मासिक इंप्रेशन्स]
• ऑडियंस डेमोग्राफिक्स: [आपके ऑडियंस की जानकारी]

💰 सुझावित दरें (आपके ऑडियंस के आधार पर):
📸 पो��्ट दरें: ₹200 - ₹1,000
📱 स्टोरी दरें: ₹100 - ₹500
🎥 ��ील दरें: ₹500 - ₹2,000
📹 यूट्यूब शॉर्ट: ₹500 - ₹2,000
📹 वीडियो मेंशन: ₹1,000 - ₹3,000
🐦 ट्विटर पोस्ट: ₹100 - ₹400
📧 न्यूज़लेटर मेंशन: ₹200 - ₹1,000

🏆 पिछले कोलैबोरेशन:
• [ब्रांड नाम 1] - [कोलैबोरेशन का प्रकार]
• [ब्रांड नाम 2] - [कोलैबोरेशन का प्रकार]
• [ब्रांड नाम 3] - [कोलैबोरेशन का प्रकार]

🎯 टारगेट ऑडियंस:
• आयु समूह: [आपके फॉलोअर्स की आयु]
• लिंग: [मुख्य लिंग वितरण]
• स्थान: [मुख्य भौगोलिक स्थान]
• रुचियां: [आपके ऑडियंस की रुचियां]

📈 क्यों मेरे साथ कोलैबोरेट करें:
• प्रामाणिक कंटेंट और ब्रांड एलाइनमेंट
• उच्च एंगे��मे���ट दरें और ऑडियंस ट्रस्ट
• प्रोफ��शनल कंटेंट डिलीवरी और टाइमलाइन
• क्रिएटिव स्ट्रैटेजी और ब्रांड स्टोरीटेलिंग

📞 संपर्क जानकारी:
ईमेल: ${userEmail}
फोन: [आपका फोन नंबर]
वेबसाइट: [आपकी वेबसाइट]
सोशल मीडिया: [आपके सभी सोशल प्लेटफॉर्म]

🤝 कोलैबोरेशन टर्म्स:
• उपयोग अधिकार: [स्पेसिफाई करें]
• एक्सक्लूसिविटी: [यदि कोई हो]
• कंटेंट ओनरशिप: [स्पेसिफाई करें]
• पेमेंट टर्म्स: 50% एडवांस, 50% डिलीवरी पर

💼 मीडिया किट में शामिल:
✅ हाई-रेज़���ल्यूशन प्रोफाइल फोटोज़
✅ कंटेंट सैंपल्स और केस स्टडी
✅ ऑडियंस डेमोग्राफिक्स रिपोर्ट
✅ प���फॉर्मेंस मेट्रिक्स और एनालिटिक्स

📋 टेम्प्लेट कस्टमाइज़ेशन गाइड:
1. अपनी पर्सनल जानकारी भरें
2. रियल परफॉर्मेंस मेट्रिक्स अपडेट करें
3. अपने बेस्ट कंटेंट सैंपल्स जोड़ें
4. ब्रांड-स्पेसिफि�� कस्टमाइज़ेशन करें
5. प्रोफेशनल डिज़ाइन में कन्वर्ट करें

🎨 डिज़ाइन टिप्स:
• क्लीन और प्रोफेशनल लेआउ���
• ब्रांड कलर्स का उपयोग
• हाई-क्वालिटी इमेज और ग्राफिक्स
• रीडेबल फॉन्ट्स और क्लियर हेडिंग्स
• कॉन्सिस्टेंट ब्रांडिंग एलिमेंट्स`;
  }

  return `📱 PROFESSIONAL MEDIA KIT TEMPLATE

👤 CREATOR INFORMATION:
Name: ${userName}
Email: ${userEmail}
Niche: ${userNiche}
Primary Platform: ${userPlatform}
Followers: ${userFollowers}

📊 PERFORMANCE METRICS:
• Average Reach: [Enter your reach rate]
• Engagement Rate: [Your engagement rate]
• Monthly Impressions: [Your monthly impressions]
• Audience Demographics: [Your audience information]

💰 SUGGESTED RATES (Based on your audience):
📸 Post Rates: ₹200 - ₹1,000
📱 Story Rates: ₹100 - ₹500
🎥 Reel Rates: ₹500 - ₹2,000
📹 YouTube Short: ₹500 - ₹2,000
📹 Video Mention: ₹1,000 - ₹3,000
🐦 Twitter Post: ₹100 - ₹400
📧 Newsletter Mention: ₹200 - ₹1,000

🏆 PREVIOUS COLLABORATIONS:
• [Brand Name 1] - [Collaboration Type]
• [Brand Name 2] - [Collaboration Type]
• [Brand Name 3] - [Collaboration Type]

🎯 TARGET AUDIENCE:
• Age Group: [Your followers' age]
• Gender: [Main gender distribution]
• Location: [Primary geographic location]
• Interests: [Your audience interests]

📈 WHY COLLABORATE WITH ME:
• Authentic content and brand alignment
• High engagement rates and audience trust
• Professional content delivery and timeline
• Creative strategy and brand storytelling

📞 CONTACT INFORMATION:
Email: ${userEmail}
Phone: [Your phone number]
Website: [Your website]
Social Media: [All your social platforms]

🤝 COLLABORATION TERMS:
• Usage Rights: [Specify]
• Exclusivity: [If any]
• Content Ownership: [Specify]
• Payment Terms: 50% advance, 50% on delivery

💼 MEDIA KIT INCLUDES:
✅ High-resolution profile photos
✅ Content samples and case studies
✅ Audience demographics report
✅ Performance metrics and analytics

📋 TEMPLATE CUSTOMIZATION GUIDE:
1. Fill in your personal information
2. Update real performance metrics
3. Add your best content samples
4. Brand-specific customization
5. Convert to professional design

🎨 DESIGN TIPS:
• Clean and professional layout
• Use brand colors
• High-quality images and graphics
• Readable fonts and clear headings
• Consistent branding elements`;
}

function generateEmailTemplatesContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userName = userData?.name || "Creator Name";
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";
  const userFollowers = userData?.followerCount || "10K+";

  if (language === "hindi") {
    return `📧 30+ ब्रांड आउटरीच ईमेल टेम्प्लेट्स

🎯 टेम्प्ले��� 1: प्रारंभिक संपर्क (कोल्ड आउटरीच)
विषय: ${userNiche} क्रिएटर ${userName} - कोलैबोरेशन का प्रस्��ाव

प्रिय [ब्��ांड नाम] टीम,

मैं ${userName} हूं, ${userNiche} में एक पैशनेट कंटेंट क्रिएटर ��ूं जिसके ${userPlatform} पर ${userFollowers} engaged followers हैं।

मुझे आपके ब्रांड के साथ कोलैबोरेट करने में बहुत रुचि है क्योंकि:
• आपके प्रोडक्ट्स मेरे ऑडियंस के साथ perfectly align करते हैं
• मेरे followers को ${userNiche} में genuine interest है
• मैं authentic और engaging कंटेंट बनाने में स्पेशलाइज़ करता हूं

📊 मेरे key metrics:
• फॉलोअर्स: ${userFollowers}
• एंगेजमेंट रेट: [आपका rate]
• मासिक रीच: [आपकी reach]
• ऑडियंस demographics: [मुख्य डेमोग्राफिक्स]

क्या आप एक quick call schedule कर सकते हैं collaboration possibilities discuss करने के लिए?

Best regards,
${userName}
[आपका contact information]

---

🔥 टेम्प्लेट 2: ��ॉलो-अप ईमेल
विषय: Quick follow-up - ${userName} collaboration proposal

Hi [Contact Name],

मैंने पिछले सप��ताह आ�����ो collaboration के बारे में email भेजा था। मुझे लगता है कि हम एक amazing partnership create कर सकते हैं!

Recently मैंने [competitor brand] के साथ work किया और उस post को [specific results] मिले।

क्या हम इस week एक quick 15-minute call schedule कर सकते हैं?

Looking forward,
${userName}

---

�� टेम्प्लेट 3: रेट कार्ड प्रेजेंटेशन
विषय: ${userName} - Collaboration rates & packages

Dear [Brand Name],

आपकी interest के लिए धन्यवाद! यहां मेरे collaboration packages हैं:

📸 सिंगल पोस्ट: ₹[आपकी rate]
• 1 feed post with your product
• 24-hour story promotion
• Professional photography
• Caption in my authentic voice

📱 स्टोरी पैकेज: ₹[आपकी rate]
• 3-5 story slides
• Swipe-up link (if available)
• Behind-the-scenes content
• Authentic product experience

🎥 रील्स कंटेंट: ₹[आपकी rate]
• High-quality reel creation
• Trending music/sounds
• Creative transitions
• Higher engagement guarantee

🎯 कैंपेन पैकेज: ₹[आपकी rate]
• Multiple touchpoints
• Feed + Stories + Reels
• Extended collaboration period
• Detailed analytics report

सभी packages include करते हैं:
✅ Professional content creation
✅ Timely delivery
✅ Usage rights discussion
✅ Performance metrics report

Best,
${userName}

---

🤝 टेम्प्लेट 4: नेगोसिएशन/काउंटर ऑफ���
विषय: Re: Collaboration proposal - Let's find a win-win

Hi [Contact Name],

आपके proposal के लिए thank you! मैं definitely interested हूं।

Considering my engagement rates और audience quality, क्या हम rate को slightly adjust कर सकते हैं? मैं ₹[your counter] suggest करूंगा because:

• मेरी audience का [specific demographic] match करता है आपके target से
• मेरे recent collaborations में [specific results] मिले हैं
• मैं additional value add कर स���ता ह���ं like [extra service]

मैं flexible हूं और एक mutually beneficial deal बनाना चाहता हूं।

Best regards,
${userName}

---

������ टेम्प्लेट 5: परफॉर्मेंस रिपोर्ट
विषय: ${userName} x [Brand] - Campaign Performance Report

Dear [Brand Team],

हमारे recent collaboration के results share करना चाहता हूं:

📊 PERFORMANCE METRICS:
• Post Reach: [number] impressions
• Engagement Rate: [percentage]
• Story Views: [number]
• Website Clicks: [number]
• Comments: [number with sentiment]

🎯 AUDIENCE FEEDBACK:
• [Positive feedback examples]
• [Questions about product]
• [User-generated content]

📈 IMPACT:
• Brand awareness increase
• Direct sales attribution
• Community engagement

मुझे future collaborations में interest है और आपके products को authentically promote करना पसंद है।

Thank you for trusting me!
${userName}

---

💝 टेम्प्लेट 6: लॉन्ग-टर्म पार्टनरशिप प्रप��ज़ल
विषय: Long-term Partnership Proposal - ${userName} x [Brand]

Dear [Decision Maker],

हमार�� successful collaboration के बाद, मैं एक long-term partnership propose करना चाहूंगा।

🤝 PROPOSED PARTNERSHIP:
• Monthly content creation
• Product launches coverage
• Event participation
• Brand ambassadorship

💰 PROPOSED STRUCTURE:
• Retainer fee: ₹[amount]/month
• Performance bonuses
• Exclusive collaboration terms
• Additional deliverables pricing

📈 BENEFITS FOR YOUR BRAND:
• Consistent brand presence
• Authentic audience connection
• Better content planning
• Cost-effective marketing

क्या आप इस opportunity को explore करने में interested ��ैं?

Best,
${userName}

[इसी तरह से 24 और templates continue करें different scenarios के लिए...]`;
  }

  return `📧 30+ BRAND OUTREACH EMAIL TEMPLATES

🎯 TEMPLATE 1: Initial Cold Outreach
Subject: ${userNiche} Creator ${userName} - Collaboration Proposal

Dear [Brand Name] Team,

I'm ${userName}, a passionate content creator in ${userNiche} with ${userFollowers} engaged followers on ${userPlatform}.

I'd love to collaborate with your brand because:
• Your products align perfectly with my audience
• My followers have genuine interest in ${userNiche}
• I specialize in creating authentic and engaging content

📊 My key metrics:
• Followers: ${userFollowers}
• Engagement Rate: [Your rate]
• Monthly Reach: [Your reach]
• Audience Demographics: [Main demographics]

Would you be available for a quick call to discuss collaboration possibilities?

Best regards,
${userName}
[Your contact information]

---

🔥 TEMPLATE 2: Follow-up Email
Subject: Quick follow-up - ${userName} collaboration proposal

Hi [Contact Name],

I sent you an email last week about collaboration opportunities. I believe we could create an amazing partnership!

Recently I worked with [competitor brand] and that post received [specific results].

Could we schedule a quick 15-minute call this week?

Looking forward,
${userName}

---

💼 TEMPLATE 3: Rate Card Presentation
Subject: ${userName} - Collaboration rates & packages

Dear [Brand Name],

Thank you for your interest! Here are my collaboration packages:

📸 Single Post: ₹[Your rate]
• 1 feed post with your product
• 24-hour story promotion
• Professional photography
• Caption in my authentic voice

📱 Story Package: ₹[Your rate]
• 3-5 story slides
• Swipe-up link (if available)
• Behind-the-scenes content
• Authentic product experience

🎥 Reels Content: ₹[Your rate]
• High-quality reel creation
• Trending music/sounds
• Creative transitions
• Higher engagement guarantee

🎯 Campaign Package: ₹[Your rate]
• Multiple touchpoints
• Feed + Stories + Reels
• Extended collaboration period
• Detailed analytics report

All packages include:
✅ Professional content creation
✅ Timely delivery
✅ Usage rights discussion
✅ Performance metrics report

Best,
${userName}

---

🤝 TEMPLATE 4: Negotiation/Counter Offer
Subject: Re: Collaboration proposal - Let's find a win-win

Hi [Contact Name],

Thank you for your proposal! I'm definitely interested.

Considering my engagement rates and audience quality, could we adjust the rate slightly? I'd suggest ₹[your counter] because:

• My audience demographic matches your target perfectly
• My recent collaborations achieved [specific results]
• I can add additional value like [extra service]

I'm flexible and want to create a mutually beneficial deal.

Best regards,
${userName}

---

📈 TEMPLATE 5: Performance Report
Subject: ${userName} x [Brand] - Campaign Performance Report

Dear [Brand Team],

I wanted to share the results from our recent collaboration:

📊 PERFORMANCE METRICS:
• Post Reach: [number] impressions
• Engagement Rate: [percentage]
• Story Views: [number]
• Website Clicks: [number]
• Comments: [number with sentiment]

🎯 AUDIENCE FEEDBACK:
• [Positive feedback examples]
• [Questions about product]
• [User-generated content]

📈 IMPACT:
��� Brand awareness increase
• Direct sales attribution
��� Community engagement

I'm interested in future collaborations and love authentically promoting your products.

Thank you for trusting me!
${userName}

---

💝 TEMPLATE 6: Long-term Partnership Proposal
Subject: Long-term Partnership Proposal - ${userName} x [Brand]

Dear [Decision Maker],

Following our successful collaboration, I'd like to propose a long-term partnership.

🤝 PROPOSED PARTNERSHIP:
• Monthly content creation
• Product launches coverage
• Event participation
• Brand ambassadorship

💰 PROPOSED STRUCTURE:
• Retainer fee: ₹[amount]/month
• Performance bonuses
• Exclusive collaboration terms
• Additional deliverables pricing

📈 BENEFITS FOR YOUR BRAND:
• Consistent brand presence
• Authentic audience connection
• Better content planning
• Cost-effective marketing

Would you be interested in exploring this opportunity?

Best,
${userName}

[Continue with 24 more templates for different scenarios...]`;
}

function generatePricingCalculatorContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userFollowers = userData?.followerCount || "10K+";
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `��� प्रोफेशनल प्राइसिंग कैलकुलेटर

📊 आपकी current stats:
• फॉलोअर्स: ${userFollowers}
• निच: ${userNiche}

🧮 PRICING CALCULATION FORMULA:

1️⃣ BASE RATE CALCULATION:
फॉलोअर्स per 1K = [आपके followers ÷ 1000]
Base rate per 1K = ₹100-500 (niche के आधार पर)
Minimum post rate = Followers per 1K × Base rate

2️⃣ NICHE MULTIPLIERS:
• Fashion & Beauty: 1.2x
• Technology & AI: 1.5x
• Finance & Investing: 1.8x
• Gaming & Esports: 1.3x
• Food & Cooking: 1.1x
• Education: 1.4x
• Lifestyle: 1.0x (base)

3️⃣ ENGAGEMENT MULTIPLIERS:
• 1-2% engagement: 0.8x
• 2-4% engagement: 1.0x (standard)
• 4-6% engagement: 1.3x
• 6%+ engagement: 1.5x

4️⃣ CONTENT TYPE PRICING:
📸 Static Post: Base rate
📱 Story (per slide): Base rate × 0.3
🎥 Reels: Base rate × 1.5
📹 IGTV/Long form: Base rate × 1.8
🎯 Carousel: Base rate × 1.2

5️⃣ ADDITIONAL FACTORS:
• Professional photography: +20%
• Video editing required: +30%
• Multiple revisions: +15%
• Rush delivery (< 48hrs): +25%
• Exclusive content: +40%
• Usage rights (1 year): +50%

📋 SAMPLE CALCULATION:
मान लेते हैं आप��े ��ास हैं:
• 10K followers
• Fashion niche
• 4% engagement rate

Base calculation:
• Followers per 1K: 10
• Base rate: ₹200 per 1K
• Basic rate: 10 × ₹200 = ₹2,000

With multipliers:
• Niche multiplier (Fashion): 1.2x = ₹2,400
• Engagement multiplier (4%): 1.3x = ₹3,120

Final rates:
📸 Static Post: ₹3,120
📱 Story package (5 slides): ₹4,680
🎥 Reels: ₹4,680
📹 IGTV: ₹5,616

💡 PRO TIPS:
1. हमेशा minimum rates set करें
2. Package deals offer करें better value के लिए
3. Long-term partnerships के लिए discounts
4. Seasonal pricing adjustments
5. Performance bonuses include करें

📈 RATE PROGRESSION GUIDE (REALISTIC INDIAN MARKET):
• 1K-5K followers: ₹200-1,000 per post
• 5K-10K followers: ₹1,000-3,000 per post
• 10K-50K followers: ₹3,000-15,000 per post
• 50K-100K followers: ₹15,000-50,000 per post
• 100K+ followers: ₹50,000+ per post

🎯 NEGOTIATION STRATEGIES:
• अपनी unique value proposition highlight करें
• Past performance metrics share करें
• Competitor rates research करें
• Value-added services offer करें
• Flexible payment terms suggest करें

📊 TRACKING TEMPLATE:
Date: [Date]
Brand: [Brand Name]
Content Type: [Type]
Quoted Rate: ₹[Amount]
Final Rate: ₹[Amount]
Delivery: [Date]
Performance: [Metrics]

🔄 RATE REVIEW SCHEDULE:
• Monthly: Performance review
• Quarterly: Rate adjustment
• Bi-annually: Market comparison
• Annually: Complete rate overhaul`;
  }

  return `💰 PROFESSIONAL PRICING CALCULATOR

📊 Your current stats:
• Followers: ${userFollowers}
• Niche: ${userNiche}

🧮 PRICING CALCULATION FORMULA:

1️⃣ BASE RATE CALCULATION:
Followers per 1K = [Your followers ÷ 1000]
Base rate per 1K = ₹100-500 (based on niche)
Minimum post rate = Followers per 1K × Base rate

2️⃣ NICHE MULTIPLIERS:
• Fashion & Beauty: 1.2x
• Technology & AI: 1.5x
• Finance & Investing: 1.8x
• Gaming & Esports: 1.3x
• Food & Cooking: 1.1x
• Education: 1.4x
• Lifestyle: 1.0x (base)

3️⃣ ENGAGEMENT MULTIPLIERS:
• 1-2% engagement: 0.8x
• 2-4% engagement: 1.0x (standard)
• 4-6% engagement: 1.3x
• 6%+ engagement: 1.5x

4️⃣ CONTENT TYPE PRICING:
📸 Static Post: Base rate
📱 Story (per slide): Base rate × 0.3
🎥 Reels: Base rate × 1.5
📹 IGTV/Long form: Base rate × 1.8
🎯 Carousel: Base rate × 1.2

5️⃣ ADDITIONAL FACTORS:
• Professional photography: +20%
• Video editing required: +30%
• Multiple revisions: +15%
• Rush delivery (< 48hrs): +25%
• Exclusive content: +40%
• Usage rights (1 year): +50%

📋 SAMPLE CALCULATION:
Let's say you have:
• 10K followers
• Fashion niche
• 4% engagement rate

Base calculation:
• Followers per 1K: 10
• Base rate: ₹200 per 1K
• Basic rate: 10 × ₹200 = ₹2,000

With multipliers:
• Niche multiplier (Fashion): 1.2x = ₹2,400
• Engagement multiplier (4%): 1.3x = ₹3,120

Final rates:
📸 Static Post: ₹3,120
📱 Story package (5 slides): ₹4,680
🎥 Reels: ₹4,680
📹 IGTV: ₹5,616

💡 PRO TIPS:
1. Always set minimum rates
2. Offer package deals for better value
3. Provide discounts for long-term partnerships
4. Adjust pricing seasonally
5. Include performance bonuses

📈 RATE PROGRESSION GUIDE (REALISTIC INDIAN MARKET):
• 1K-5K followers: ₹200-1,000 per post
• 5K-10K followers: ₹1,000-3,000 per post
• 10K-50K followers: ₹3,000-15,000 per post
• 50K-100K followers: ₹15,000-50,000 per post
• 100K+ followers: ₹50,000+ per post

🎯 NEGOTIATION STRATEGIES:
• Highlight your unique value proposition
• Share past performance metrics
• Research competitor rates
• Offer value-added services
• Suggest flexible payment terms

📊 TRACKING TEMPLATE:
Date: [Date]
Brand: [Brand Name]
Content Type: [Type]
Quoted Rate: ₹[Amount]
Final Rate: ₹[Amount]
Delivery: [Date]
Performance: [Metrics]

🔄 RATE REVIEW SCHEDULE:
• Monthly: Performance review
• Quarterly: Rate adjustment
• Bi-annually: Market comparison
�� Annually: Complete rate overhaul`;
}

function generateContentCalendarContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";

  if (language === "hindi") {
    return `📅 3-महीने कंटेंट कैलेंडर टेम्प्लेट

🎯 ${userNiche} के लिए ${userPlatform} कंटेंट प्लान

📋 MONTH 1: FOUNDATION & GROWTH

WEEK 1 - BRAND INTRODUCTION
Monday: Personal introduction post
Tuesday: Behind-the-scenes reel
Wednesday: Niche expertise showcase
Thursday: Q&A story series
Friday: Collaboration announcement
Saturday: Weekend lifestyle content
Sunday: Inspiration/motivation post

WEEK 2 - VALUE CREATION
Monday: Educational carousel
Tuesday: Tutorial reel
Wednesday: Industry insights post
Thursday: User-generated content feature
Friday: Product/service spotlight
Saturday: Personal story share
Sunday: Community appreciation

WEEK 3 - ENGAGEMENT FOCUS
Monday: Poll/question story
Tuesday: Trending audio reel
Wednesday: Collaboration content
Thursday: Expert interview/quote
Friday: Before/after showcase
Saturday: Fun/entertainment content
Sunday: Weekly recap post

WEEK 4 - MONETIZATION PREP
Monday: Skills demonstration
Tuesday: Process/workflow share
Wednesday: Results/achievements
Thursday: Client testimonial
Friday: Special offer announcement
Saturday: Lifestyle integration
Sunday: Month-end reflection

📋 MONTH 2: OPTIMIZATION & EXPANSION

WEEK 5 - AUDIENCE RESEARCH
Monday: Audience feedback post
Tuesday: Popular content recreation
Wednesday: Niche trend analysis
Thursday: Competitor inspiration
Friday: Community spotlight
Saturday: Personal challenge
Sunday: Industry news commentary

WEEK 6 - CONTENT DIVERSIFICATION
Monday: New format experiment
Tuesday: Cross-platform content
Wednesday: Collaboration series
Thursday: Educational thread
Friday: Live session announcement
Saturday: Behind-the-scenes
Sunday: Personal milestone

WEEK 7 - BRAND PARTNERSHIPS
Monday: Partnership announcement
Tuesday: Product review/unboxing
Wednesday: Brand story integration
Thursday: Authentic usage showcase
Friday: Results/feedback share
Saturday: Community engagement
Sunday: Partnership recap

WEEK 8 - COMMUNITY BUILDING
Monday: Community challenge launch
Tuesday: User submission feature
Wednesday: Expert advice series
Thursday: Interactive content
Friday: Community spotlight
Saturday: Fun group activity
Sunday: Challenge wrap-up

📋 MONTH 3: SCALING & MONETIZATION

WEEK 9 - AUTHORITY BUILDING
Monday: Industry insights share
Tuesday: Expert tips compilation
Wednesday: Case study presentation
Thursday: Problem-solving content
Friday: Innovation showcase
Saturday: Personal brand evolution
Sunday: Thought leadership

WEEK 10 - PRODUCT LAUNCH PREP
Monday: Product/service tease
Tuesday: Behind-the-scenes creation
Wednesday: Value proposition
Thursday: Early access announcement
Friday: Community exclusive
Saturday: Personal story
Sunday: Anticipation building

WEEK 11 - LAUNCH WEEK
Monday: Official launch announcement
Tuesday: Product demonstration
Wednesday: Customer testimonials
Thursday: Limited time offer
Friday: Live launch event
Saturday: Community celebration
Sunday: Launch recap & gratitude

WEEK 12 - OPTIMIZATION & PLANNING
Monday: Performance analysis
Tuesday: Community feedback
Wednesday: Improvement announcements
Thursday: Next month preview
Friday: Appreciation content
Saturday: Personal celebration
Sunday: Quarter reflection

🎨 CONTENT TYPES BREAKDOWN:
📸 Static Posts (30%): Educational carousels, quotes, announcements
🎥 Reels (40%): Tutorials, behind-the-scenes, trending content
📱 Stories (20%): Daily updates, polls, quick tips
📹 IGTV/Long-form (10%): Deep dives, interviews, detailed tutorials

📊 CONTENT PILLARS:
1. Education (40%): Tips, tutorials, industry insights
2. Personal (25%): Behind-the-scenes, personal stories
3. Entertainment (20%): Fun content, trends, challenges
4. Promotion (15%): Products, services, collaborations

⏰ POSTING SCHEDULE:
• Best times: 7-9 AM, 12-2 PM, 7-9 PM IST
• Monday-Friday: 1-2 posts
• Weekends: 1 post
• Stories: 3-5 slides daily

📱 PLATFORM-SPECIFIC ADAPTATIONS:
Instagram: Visual-first, stories, reels
YouTube: Long-form, educational, entertaining
LinkedIn: Professional, industry insights
Twitter: Quick updates, news, engagement

🔄 CONTENT RECYCLING STRATEGY:
• Repurpose top posts into different formats
• Create carousel from popular reel
• Turn IGTV into multiple short clips
• Use quotes from videos as static posts

📈 PERFORMANCE TRACKING:
• Weekly engagement rates
• Monthly follower growth
• Content type performance
• Best posting times
• Audience demographics changes

💡 CONTENT IDEAS BANK:
📚 Educational:
- Industry trends analysis
- Step-by-step tutorials
- Myth-busting content
- Tool recommendations
- Skill development tips

🎭 Entertainment:
- Day-in-the-life vlogs
- Trending challenges
- Behind-the-scenes
- Q&A sessions
- Fun facts/trivia

🤝 Community:
- User-generated content
- Community spotlights
- Collaboration announcements
- Challenge participation
- Audience appreciation

📊 MONTHLY THEMES:
Month 1: Foundation Building
Month 2: Growth Acceleration
Month 3: Monetization Focus

🎯 GOALS TRACKING:
• Follower growth target: [Your goal]
• Engagement rate goal: [Your target]
• Reach improvement: [Your target]
• Brand collaboration: [Number goal]

📝 CONTENT APPROVAL WORKFLOW:
1. Content ideation
2. Draft creation
3. Visual design
4. Caption writing
5. Hashtag research
6. Final review
7. Scheduling
8. Performance monitoring`;
  }

  return `📅 3-MONTH CONTENT CALENDAR TEMPLATE

🎯 ${userNiche} Content Plan for ${userPlatform}

📋 MONTH 1: FOUNDATION & GROWTH

WEEK 1 - BRAND INTRODUCTION
Monday: Personal introduction post
Tuesday: Behind-the-scenes reel
Wednesday: Niche expertise showcase
Thursday: Q&A story series
Friday: Collaboration announcement
Saturday: Weekend lifestyle content
Sunday: Inspiration/motivation post

WEEK 2 - VALUE CREATION
Monday: Educational carousel
Tuesday: Tutorial reel
Wednesday: Industry insights post
Thursday: User-generated content feature
Friday: Product/service spotlight
Saturday: Personal story share
Sunday: Community appreciation

WEEK 3 - ENGAGEMENT FOCUS
Monday: Poll/question story
Tuesday: Trending audio reel
Wednesday: Collaboration content
Thursday: Expert interview/quote
Friday: Before/after showcase
Saturday: Fun/entertainment content
Sunday: Weekly recap post

WEEK 4 - MONETIZATION PREP
Monday: Skills demonstration
Tuesday: Process/workflow share
Wednesday: Results/achievements
Thursday: Client testimonial
Friday: Special offer announcement
Saturday: Lifestyle integration
Sunday: Month-end reflection

📋 MONTH 2: OPTIMIZATION & EXPANSION

WEEK 5 - AUDIENCE RESEARCH
Monday: Audience feedback post
Tuesday: Popular content recreation
Wednesday: Niche trend analysis
Thursday: Competitor inspiration
Friday: Community spotlight
Saturday: Personal challenge
Sunday: Industry news commentary

WEEK 6 - CONTENT DIVERSIFICATION
Monday: New format experiment
Tuesday: Cross-platform content
Wednesday: Collaboration series
Thursday: Educational thread
Friday: Live session announcement
Saturday: Behind-the-scenes
Sunday: Personal milestone

WEEK 7 - BRAND PARTNERSHIPS
Monday: Partnership announcement
Tuesday: Product review/unboxing
Wednesday: Brand story integration
Thursday: Authentic usage showcase
Friday: Results/feedback share
Saturday: Community engagement
Sunday: Partnership recap

WEEK 8 - COMMUNITY BUILDING
Monday: Community challenge launch
Tuesday: User submission feature
Wednesday: Expert advice series
Thursday: Interactive content
Friday: Community spotlight
Saturday: Fun group activity
Sunday: Challenge wrap-up

📋 MONTH 3: SCALING & MONETIZATION

WEEK 9 - AUTHORITY BUILDING
Monday: Industry insights share
Tuesday: Expert tips compilation
Wednesday: Case study presentation
Thursday: Problem-solving content
Friday: Innovation showcase
Saturday: Personal brand evolution
Sunday: Thought leadership

WEEK 10 - PRODUCT LAUNCH PREP
Monday: Product/service tease
Tuesday: Behind-the-scenes creation
Wednesday: Value proposition
Thursday: Early access announcement
Friday: Community exclusive
Saturday: Personal story
Sunday: Anticipation building

WEEK 11 - LAUNCH WEEK
Monday: Official launch announcement
Tuesday: Product demonstration
Wednesday: Customer testimonials
Thursday: Limited time offer
Friday: Live launch event
Saturday: Community celebration
Sunday: Launch recap & gratitude

WEEK 12 - OPTIMIZATION & PLANNING
Monday: Performance analysis
Tuesday: Community feedback
Wednesday: Improvement announcements
Thursday: Next month preview
Friday: Appreciation content
Saturday: Personal celebration
Sunday: Quarter reflection

🎨 CONTENT TYPES BREAKDOWN:
📸 Static Posts (30%): Educational carousels, quotes, announcements
🎥 Reels (40%): Tutorials, behind-the-scenes, trending content
📱 Stories (20%): Daily updates, polls, quick tips
📹 IGTV/Long-form (10%): Deep dives, interviews, detailed tutorials

📊 CONTENT PILLARS:
1. Education (40%): Tips, tutorials, industry insights
2. Personal (25%): Behind-the-scenes, personal stories
3. Entertainment (20%): Fun content, trends, challenges
4. Promotion (15%): Products, services, collaborations

⏰ POSTING SCHEDULE:
• Best times: 7-9 AM, 12-2 PM, 7-9 PM IST
• Monday-Friday: 1-2 posts
• Weekends: 1 post
• Stories: 3-5 slides daily

📱 PLATFORM-SPECIFIC ADAPTATIONS:
Instagram: Visual-first, stories, reels
YouTube: Long-form, educational, entertaining
LinkedIn: Professional, industry insights
Twitter: Quick updates, news, engagement

🔄 CONTENT RECYCLING STRATEGY:
• Repurpose top posts into different formats
• Create carousel from popular reel
• Turn IGTV into multiple short clips
• Use quotes from videos as static posts

📈 PERFORMANCE TRACKING:
• Weekly engagement rates
• Monthly follower growth
• Content type performance
• Best posting times
• Audience demographics changes

💡 CONTENT IDEAS BANK:
📚 Educational:
- Industry trends analysis
- Step-by-step tutorials
- Myth-busting content
- Tool recommendations
- Skill development tips

🎭 Entertainment:
- Day-in-the-life vlogs
- Trending challenges
- Behind-the-scenes
- Q&A sessions
- Fun facts/trivia

🤝 Community:
- User-generated content
- Community spotlights
- Collaboration announcements
- Challenge participation
- Audience appreciation

📊 MONTHLY THEMES:
Month 1: Foundation Building
Month 2: Growth Acceleration
Month 3: Monetization Focus

🎯 GOALS TRACKING:
• Follower growth target: [Your goal]
• Engagement rate goal: [Your target]
• Reach improvement: [Your target]
• Brand collaboration: [Number goal]

📝 CONTENT APPROVAL WORKFLOW:
1. Content ideation
2. Draft creation
3. Visual design
4. Caption writing
5. Hashtag research
6. Final review
7. Scheduling
8. Performance monitoring`;
}

// Additional content generation functions for other products...
function generateGrowthStrategyContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";
  const userFollowers = userData?.followerCount || "1K-5K";
  const userGoals =
    userData?.goals?.slice(0, 3).join(", ") ||
    "Increase followers, Build brand partnerships, Monetize content";

  if (language === "hindi") {
    return `📈 क्रिएटर ग्रोथ स्ट्रैटेजी वर्कबुक

${userNiche} क्रिएटर्स के लिए विस्तृत ग्रोथ गाइड

🎯 आपके वर्तमान मेट्रिक्स:
• प्लेटफॉर्म: ${userPlatform}
• फॉलोअर्स: ${userFollowers}
• निच: ${userNiche}
• लक्ष्य: ${userGoals}

📅 30-60-90 दिन की योजना:

🔥 पहले 30 दिन - बुनियाद तैयार करना:
• दैनिक पोस्टिंग शेड्यूल बनाएं
• अपनी ब्रांड आइडेंटिटी डिफाइन करें
• 30 दिन का कंटेंट कैलेंडर बनाएं
• आपके टार्गेट ऑडियंस को समझें
• एंगेजमेंट बढ़ाने के लिए 10 स्��्रैटेजी
• अपने बेस्ट पोस्ट्स को एनालाइज करें
• भारतीय अवसरों और ट्रेंड्स पर रिसर्च करें

📈 दूसरे 30 दिन - विकास और ऑप्ट���माइजेशन:
• A/B ट�����्ट शुरू करें (posting times, hashtags)
• इंफ्लुएंसर्स और अन्य क्रिएटर्स के साथ कोलैबोरेशन
• लाइव वीडियो और Q&A सेशन शुरू करें
• विरल रील्स और ट्रेंड्स पर फोकस करें
• एनालिटिक्स को ट्रैक करें और ऑप्टिमाइज करें
• हैशटैग और कीवर्ड स्ट्रैटेजी रिफाइन करें
• आगे की योजना और वीडियो सीरीज बनाएं

💰 तीसरे 30 दिन - मुद्रीकरण और मार्केटिंग:
• मीडिया किट और पोर्टफोलियो बनाएं
• ब्रांड्स से संपर्क शुरू करें (���ुख्य भारतीय ब्रांड्स)
• एफिलिएट मार्केटिंग शुरू करें
• अपने प्रोडक्ट्स/सर्विस लॉन्च करें
• ईमेल लिस्ट और न्यूजले���र शुरू करे���
• मेम्बरशिप/कोर्स बिजनेस मॉडल को एक्सप्लोर करें
• कम्युनिटी बिल्डिंग और एंगेजमेंट स्ट्रैटेजी

🛠️ इम्प्लीमेंटेशन चेकलिस्ट:
✅ दैनिक पोस्टिंग (least 5 days/week)
✅ साप्ताहिक एनालिटिक्स रिव्यू
✅ मासिक कंटेंट प्लानिंग
✅ इंडस्ट्री नेटवर्किंग और कोलैबोरेशन
✅ ब्रांड और मार्के��िंग आउटरीच
✅ कम्युनिटी एंगेजमेंट और रेस्पॉन्स

📉 मेट्रिक्स ट्रैकिंग:
• फॉलोअर ग्रोथ रेट: ____%
• एंगे��मेंट रेट: ____%
• मास���क रीच: ____
• वेबसाइट विजिटर्स: ____
• ब्रांड इंक्वायरी: ____
• मासिक आय: ₹____

🎆 अपेक्षित परिणाम (90 दिन):
• फॉलोअर ग्रोथ: 50-150%
• ���ंगेजमेंट में वृद्धि: 100-300%
• ब्रांड पार्टनरशिप: 2-5 नई डील्स
• मासिक आय में वृद्धि: ₹5K-25K

📝 ध्यान देने योग्य बातें:
• भारतीय मार्केट के लिए कंटेंट लोकलाइज करें
• रीजनल भाषाओं और कल्चर को incorporate करें
• भारतीय त्योहारों और सीजन का फायदा उठाएं
• लोकल SEO और हैशटैग स्ट्रैटेजी पर फोकस करें`;
  }

  return `📈 CREATOR GROWTH STRATEGY WORKBOOK

Comprehensive Growth Guide for ${userNiche} Creators

🎯 YOUR CURRENT METRICS:
• Platform: ${userPlatform}
• Followers: ${userFollowers}
• Niche: ${userNiche}
• Goals: ${userGoals}

📅 30-60-90 DAY PLAN:

🔥 FIRST 30 DAYS - FOUNDATION BUILDING:
• Establish daily posting schedule
• Define your brand identity
• Create 30-day content calendar
• Understand your target audience
• 10 strategies to boost engagement
• Analyze your best-performing posts
• Research Indian opportunities and trends

📈 SECOND 30 DAYS - GROWTH & OPTIMIZATION:
• Start A/B testing (posting times, hashtags)
• Collaborate with influencers and other creators
• Begin live videos and Q&A sessions
• Focus on viral reels and trends
• Track analytics and optimize
• Refine hashtag and keyword strategy
• Plan ahead with video series

💰 THIRD 30 DAYS - MONETIZATION & MARKETING:
• Create media kit and portfolio
• Start reaching out to brands (major Indian brands)
• Begin affiliate marketing
• Launch your products/services
• Start email list and newsletter
• Explore membership/course business model
• Community building and engagement strategy

🛠️ IMPLEMENTATION CHECKLIST:
✅ Daily posting (at least 5 days/week)
✅ Weekly analytics review
✅ Monthly content planning
✅ Industry networking and collaboration
✅ Brand and marketing outreach
✅ Community engagement and response

📉 METRICS TRACKING:
• Follower growth rate: ____%
• Engagement rate: ____%
��� Monthly reach: ____
• Website visitors: ____
• Brand inquiries: ____
• Monthly income: ₹____

🎆 EXPECTED RESULTS (90 days):
• Follower growth: 50-150%
• Engagement increase: 100-300%
• Brand partnerships: 2-5 new deals
• Monthly income increase: ₹5K-25K

📝 KEY CONSIDERATIONS:
• Localize content for Indian market
• Incorporate regional languages and culture
• Leverage Indian festivals and seasons
• Focus on local SEO and hashtag strategy`;
}

function generateHashtagGuideContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";

  if (language === "hindi") {
    return `#️⃣ हैशटैग रिसर्च मास्टर गाइड

${userNiche} क्रिएटर्स के लिए ${userPlatform} हैशटैग रणनीति

🔍 हैशटैग की बुनियादी बातें:
• हैशटै��� व्यूज को बढ़ाते हैं (30x तक बढ़ सकते हैं)
• वे आपके कंटेंट को टार्गेट ऑडियंस तक पहुंचाते हैं
• वे कम्��ुनिट��� बिल्डिंग में मदद करते हैं
• इनसे आपकी ब्रांड विजिबिलिटी बढ़ती है

📊 हैशटैग के प्रकार:

1️⃣ ब्रॉड हैशटैग (10M+ posts)
• #love #instagood #photooftheday #fashion
• #beautiful #follow #picoftheday #india
• बहुत ज्यादा competition, कम visibility

2️⃣ मिड-लेवल हैशटैग (1M-10M posts)
• #mumbai #delhi #bangalore #fitness
• #foodie #travel #lifestyle #bollywood
• अच्छा balance और reach

3️⃣ निच हैशटैग (100K-1M posts)
• #{userNiche.toLowerCase().replace(' ', '')} #contentcreator
• #indianinfluencer #delhifoodie #mumbaifashion
• टार्गेट ऑडियंस के लिए perfect

4️⃣ माइक्रो हैशटैग (10K-100K posts)
• #mumbaifoodblogger #delhifashionista
• #bangaloretechie #puneinfluencer
• कम competition, बेहतर engagement

5️⃣ ब्रांडेड हैशटैग (Under 10K)
• #yourname #yourbrand #yourcampaign
• कम competition, बेहतर tracking

🎨 ${userNiche} के लिए टॉप हैशटैग:

🔥 मेइ��� निच है���टैग:
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}
• #indian{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}india
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}blogger
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}influencer

🌏 लोकेशन-बेस्ड हैशटैग:
• #mumbai #delhi #bangalore #pune #kolkata
• #mumbaiinfluencer #delhiinfluencer
• #southindia #northindia #westindia
• #indiagram #incredibleindia

🚀 रिसर्च टूल्स (फ्री):
• Display Purposes - Instagram hashtag suggestions
• All Hashtag - Hashtag generator
• Hashtagify - Hashtag popularity tracking
• Instagram Search - Related hashtags
• Competitor Analysis - आपके competitors क्या use करते हैं

📈 परफेक्ट हैशटैग मिक्स (30 हैशटैग):
• 5 ब्रॉ�� हैशटैग (high competition)
• 10 मिड-लेवल हैशटैग (moderate competition)
• 10 निच हैशटैग (low competition)
• 3 माइक्रो हैशटैग (very targeted)
• 2 ब्रांडेड ह��शटैग (your brand)

📝 हैशटैग स्ट्रैटेजी:

✅ पोस्ट के पहले comment में hashtags रखें
✅ अपनी stories में भी hashtags use करें
✅ मासिक hashtag performance review करें
✅ ट्रेंडिंग hashtags पर नजर रखें
✅ Branded hashtags बनाएं और promote करें

📅 सीजनल और त्योहार हैशटैग:
• #diwali #holi #eid #christmas #dussehra
• #monsoon #summer #winter #newYear
• #valentinesday #mothersday #fathersday
• #independence #republic #gandhijayanti

🔥 हॉट ट्रेंडिंग हैशटैग (2024):
• #reels #trending #viral #explore
• #aitools #digitalindia #startupindia
• #sustainability #mentalhealth #fitness
• #workfromhome #digitalmarketing

⚠️ हैशटैग की गलतियां:
❌ Shadow banned hashtags use न करें
❌ हर पोस्ट में वही hashtags use न करें
❌ Over-saturation (बहुत ज्यादा competitive hashtags)
❌ Irrelevant hashtags का use
❌ 30 hashtag limit को exceed न करें

📉 हैशटैग परफॉर्मेंस ट्रैकिंग:
• Reach और impressions में वृद्धि
• Profile visits में बढ़ोतरी
• Hashtag-specific engagement
• New followers from hashtags
• Comments और saves में वृद्धि

🎆 प्रो टिप्स:
1. हर दिन 2-3 नए hashtags try करें
2. अपने निच के top influencers को research करें
3. Local hashtags का power use करें
4. अपने followers से hashtag suggestions मांगें
5. Weekly hashtag strategy review करें`;
  }

  return `#️⃣ HASHTAG RESEARCH MASTER GUIDE

${userPlatform} Hashtag Strategy for ${userNiche} Creators

🔍 HASHTAG FUNDAMENTALS:
• Hashtags increase views (up to 30x more reach)
• They help your content reach target audience
• They aid in community building
• They improve brand visibility

📊 HASHTAG CATEGORIES:

1️⃣ BROAD HASHTAGS (10M+ posts)
• #love #instagood #photooftheday #fashion
• #beautiful #follow #picoftheday #india
• Very high competition, low visibility

2️⃣ MID-LEVEL HASHTAGS (1M-10M posts)
• #mumbai #delhi #bangalore #fitness
• #foodie #travel #lifestyle #bollywood
• Good balance and reach

3️⃣ NICHE HASHTAGS (100K-1M posts)
• #{userNiche.toLowerCase().replace(' ', '')} #contentcreator
�� #indianinfluencer #delhifoodie #mumbaifashion
• Perfect for target audience

4️⃣ MICRO HASHTAGS (10K-100K posts)
• #mumbaifoodblogger #delhifashionista
• #bangaloretechie #puneinfluencer
• Low competition, better engagement

5️⃣ BRANDED HASHTAGS (Under 10K)
• #yourname #yourbrand #yourcampaign
• Low competition, better tracking

🎨 TOP HASHTAGS FOR ${userNiche.toUpperCase()}:

🔥 MAIN NICHE HASHTAGS:
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}
• #indian{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}india
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}blogger
• #{userNiche.toLowerCase().replace(' ', '').replace('&', 'and')}influencer

🌏 LOCATION-BASED HASHTAGS:
• #mumbai #delhi #bangalore #pune #kolkata
• #mumbaiinfluencer #delhiinfluencer
• #southindia #northindia #westindia
• #indiagram #incredibleindia

🚀 RESEARCH TOOLS (FREE):
• Display Purposes - Instagram hashtag suggestions
• All Hashtag - Hashtag generator
• Hashtagify - Hashtag popularity tracking
• Instagram Search - Related hashtags
• Competitor Analysis - What your competitors use

📈 PERFECT HASHTAG MIX (30 hashtags):
�� 5 Broad hashtags (high competition)
• 10 Mid-level hashtags (moderate competition)
• 10 Niche hashtags (low competition)
• 3 Micro hashtags (very targeted)
• 2 Branded hashtags (your brand)

📝 HASHTAG STRATEGY:

✅ Place hashtags in first comment
✅ Use hashtags in your stories too
✅ Monthly hashtag performance review
✅ Keep eye on trending hashtags
✅ Create and promote branded hashtags

📅 SEASONAL & FESTIVAL HASHTAGS:
• #diwali #holi #eid #christmas #dussehra
• #monsoon #summer #winter #newYear
• #valentinesday #mothersday #fathersday
• #independence #republic #gandhijayanti

🔥 HOT TRENDING HASHTAGS (2024):
• #reels #trending #viral #explore
• #aitools #digitalindia #startupindia
• #sustainability #mentalhealth #fitness
• #workfromhome #digitalmarketing

⚠️ HASHTAG MISTAKES TO AVOID:
❌ Don't use shadow banned hashtags
❌ Don't use same hashtags every post
❌ Avoid over-saturation (too many competitive hashtags)
❌ Don't use irrelevant hashtags
❌ Don't exceed 30 hashtag limit

���� HASHTAG PERFORMANCE TRACKING:
• Increase in reach and impressions
• Growth in profile visits
• Hashtag-specific engagement
• New followers from hashtags
• Increase in comments and saves

🎆 PRO TIPS:
1. Try 2-3 new hashtags daily
2. Research top influencers in your niche
3. Use the power of local hashtags
4. Ask your followers for hashtag suggestions
5. Review hashtag strategy weekly`;
}

function generateRateCardContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userName = userData?.name || "Creator Name";
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";
  const userFollowers = userData?.followerCount || "10K-50K";

  // Calculate realistic rates based on follower count
  const rates = userFollowers.includes("Less than 1K")
    ? {
        post: "200-1,000",
        story: "100-500",
        reel: "500-2,000",
        igtv: "800-3,000",
        campaign: "1,500-5,000",
      }
    : userFollowers.includes("1K - 5K")
      ? {
          post: "1,000-3,000",
          story: "500-1,500",
          reel: "1,500-5,000",
          igtv: "2,500-8,000",
          campaign: "5,000-15,000",
        }
      : userFollowers.includes("5K - 10K")
        ? {
            post: "3,000-8,000",
            story: "1,500-4,000",
            reel: "5,000-15,000",
            igtv: "8,000-25,000",
            campaign: "15,000-40,000",
          }
        : {
            post: "8,000-25,000",
            story: "4,000-12,000",
            reel: "15,000-45,000",
            igtv: "25,000-75,000",
            campaign: "40,000-120,000",
          };

  if (language === "hindi") {
    return `💰 प्रोफेशनल रेट कार्ड टेम्प्लेट

${userName} - ${userNiche} Creator
${userPlatform} | ${userFollowers} Followers

🎨 कंटेंट सर्विसेज और रेट्स:

📸 INSTAGRAM SERVICES:

✅ फीड पोस्ट:
• सिंगल पोस्ट: ₹${rates.post}
• कैरोसेल पोस्ट (10 slides): ₹${rates.post} + 20%
• प्रोडक्ट मेंशन विथ परमानेंट लिंक: +30%
• कॉमियॉन कॉड + affiliate: +25%

✅ इंस्टाग्राम स्टोरीज:
• सिंगल स्टोरी: ₹${rates.story}
• स्टोरी सीरीज (3-5 slides): ₹${rates.story} + 40%
• स्वाइप अप लिंक के साथ: +20%
• 24-hour story highlight: +15%

✅ इंस्टाग्राम रील्स:
• सिंगल रील: ₹${rates.reel}
• ट्रेंडिंग ऑडियो/म्यूजिक के साथ: +25%
• ऑर��जिनल कोरियो��्राफी: +40%
• ब्रांड चैलेंज/कॉन्टेस्ट: +30%

✅ IGTV/लॉन्ग फॉर्म वीडियो:
• सिंगल IGTV (1-5 min): ₹${rates.igtv}
• ब्रांड इंटेग्रेशन के साथ: +35%
• प्रोडक्ट डेमो वीडियो: +50%

📱 CROSS-PLATFORM सर्विसेज:

✅ YouTube सर्विसेज:
• देदिकेटेड रिव्यू वीडियो: ₹${parseInt(rates.post.split("-")[1]) * 3}-${parseInt(rates.post.split("-")[1]) * 5}
• प्रोडक्ट मेंशन (5-10 sec): ₹${rates.story}
• YouTube Shorts: ₹${rates.reel}

✅ अन्य प्लेटफॉर्म:
• Facebook पोस्ट: Instagram रेट का 70%
• Twitter पोस्ट/थ्रेड: ₹${Math.floor(parseInt(rates.story.split("-")[0]) * 0.5)}-${Math.floor(parseInt(rates.story.split("-")[1]) * 0.8)}
• LinkedIn पोस्ट: ₹${rates.story}

📦 कैम्पेन पैकेजेज:

🎆 बेसिक कैम्पेन पैकेज: ₹${rates.campaign}
• 1 Instagram फीड पोस्ट
• 3-4 इ���स्टाग्राम स्टोरी��
• 1 इंस्टाग्���ाम री���
• बिहाइंड-द-सीन content
• वीकली एनालिटिक्स रिपोर्ट

🚀 प्रीमियम कैम्पेन पैकेज: ₹${parseInt(rates.campaign.split("-")[1]) * 2}
• 2 Instagram फीड पोस्ट्स
• 6-8 इंस्टाग्राम स्टोरीज
• 2 इंस्टाग्राम रील्स
• 1 IGTV/लॉन्ग फॉर्म वीडियो
• क्रॉस-प्लेटफॉर्म प्रमोशन
• दैनिक एनालिटिक्स रिपोर्ट

💼 एड-ऑन सर्विसेज:

• रश डिलीवरी (24-48 hours): +25%
• एक्सक्लूजिव कंटेंट: +40%
• मल्टिपल रिविजन: +15% प्रति revision
• प्रोफेशनल फोटोशूट: +30%
• विडेो एडिटिंग: +35%
• ग्राफिक डिजाइन: +25%

📋 टर्म्स और कंडीशन्स:

💳 पेमेंट टर्म्स:
• 50% एडवांस पेमेंट
• 50% कंटेंट डिली��री पर
• Bank transfer/UPI/PayPal ��्वीकार किया जात��� है
• आगे 7 दिन के लिए invoice भेजा जाएगा

⏱️ डिलीवरी टाइमलाइन:
• सिंगल पोस्ट: 3-5 बिजनेस दिन
• रील/IGTV: 5-7 बिजनेस दिन
• कैम्पेन पैकेज: 7-14 बिजनेस दिन
• लाइव पोस्टिंग: प्री-डिस्कस schedule

📜 कंटेंट के लिए गाइडलाइन्स:
• ब्रांड वैल्यूज और मिशन के साथ alignment
• ऑथेंटिक और जेन्युइन tone of voice
• कलीयर brand guidelines का compliance
• FTC/आदर्श disclosure रिक्वायरमेंट्स

🚨 कैंसिलेशन पॉलिसी:
• 24 hours में कैंसिलेशन: 100% रिफंड
• 48 hours में: 50% रिफंड
• कंटेंट स्टार्ट के बाद: नो रिफंड

📞 संपर्क जानकारी:
• Email: [your-email@domain.com]
• WhatsApp: [+91-XXXXXXXXXX]
• Instagram DM: @${userName.toLowerCase().replace(" ", ".")}
• बिजनेस आवर��स: 9 AM - 7 PM IST

🎆 धन्यवाद!
मैं आपके ब्रांड के साथ काम करने के लिए उत्साहित हूं और आप���े लक्ष्यों को पूरा करने में मदद करने के लिए तैयार हूं!`;
  }

  return `💰 PROFESSIONAL RATE CARD TEMPLATE

${userName} - ${userNiche} Creator
${userPlatform} | ${userFollowers} Followers

🎨 CONTENT SERVICES & RATES:

📸 INSTAGRAM SERVICES:

✅ Feed Posts:
• Single post: ₹${rates.post}
• Carousel post (10 slides): ₹${rates.post} + 20%
• Product mention with permanent link: +30%
• Commission code + affiliate: +25%

✅ Instagram Stories:
• Single story: ₹${rates.story}
• Story series (3-5 slides): ₹${rates.story} + 40%
• With swipe up link: +20%
• 24-hour story highlight: +15%

✅ Instagram Reels:
• Single reel: ₹${rates.reel}
• With trending audio/music: +25%
• Original choreography: +40%
• Brand challenge/contest: +30%

✅ IGTV/Long-form Videos:
• Single IGTV (1-5 min): ₹${rates.igtv}
• With brand integration: +35%
• Product demo video: +50%

📱 CROSS-PLATFORM SERVICES:

✅ YouTube Services:
• Dedicated review video: ₹${parseInt(rates.post.split("-")[1]) * 3}-${parseInt(rates.post.split("-")[1]) * 5}
• Product mention (5-10 sec): ₹${rates.story}
• YouTube Shorts: ₹${rates.reel}

✅ Other Platforms:
• Facebook post: 70% of Instagram rate
• Twitter post/thread: ₹${Math.floor(parseInt(rates.story.split("-")[0]) * 0.5)}-${Math.floor(parseInt(rates.story.split("-")[1]) * 0.8)}
• LinkedIn post: ₹${rates.story}

📦 CAMPAIGN PACKAGES:

🎆 Basic Campaign Package: ₹${rates.campaign}
• 1 Instagram feed post
• 3-4 Instagram stories
• 1 Instagram reel
• Behind-the-scenes content
• Weekly analytics report

🚀 Premium Campaign Package: ₹${parseInt(rates.campaign.split("-")[1]) * 2}
• 2 Instagram feed posts
• 6-8 Instagram stories
• 2 Instagram reels
• 1 IGTV/long-form video
• Cross-platform promotion
• Daily analytics report

💼 ADD-ON SERVICES:

• Rush delivery (24-48 hours): +25%
• Exclusive content: +40%
• Multiple revisions: +15% per revision
• Professional photoshoot: +30%
• Video editing: +35%
• Graphic design: +25%

📋 TERMS & CONDITIONS:

💳 Payment Terms:
• 50% advance payment
• 50% on content delivery
• Bank transfer/UPI/PayPal accepted
• Invoice sent 7 days in advance

⏱️ Delivery Timeline:
• Single post: 3-5 business days
• Reel/IGTV: 5-7 business days
• Campaign package: 7-14 business days
• Live posting: Pre-discussed schedule

📜 Content Guidelines:
• Alignment with brand values and mission
• Authentic and genuine tone of voice
• Clear brand guidelines compliance
• FTC/Advertising standards disclosure requirements

🚨 Cancellation Policy:
• 24 hours cancellation: 100% refund
• 48 hours cancellation: 50% refund
• After content start: No refund

📞 Contact Information:
• Email: [your-email@domain.com]
• WhatsApp: [+91-XXXXXXXXXX]
• Instagram DM: @${userName.toLowerCase().replace(" ", ".")}
• Business hours: 9 AM - 7 PM IST

🎆 Thank you!
I'm excited to work with your brand and help achieve your goals!`;
}

function generateContractContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  return language === "hindi"
    ? "कॉन्ट्रैक्ट टेम्प्लेट्स..."
    : "Contract Templates...";
}

function generateViralReelIdeasContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";

  if (language === "hindi") {
    return `🎬 50+ वायरल रील आइडियाज गाइड

${userNiche} क्रिएटर्स के लिए प्रमाणित वायरल कंटेंट फॉर्मूला

🔥 TRENDING रील आइडियाज:

1. "3 सीक्रेट��स जो मैंने [अपना निच] में सीखे"
2. "क्या आप जानते हैं [निच] के बारे में ये बात?"
3. "मेरी सबसे बड़ी गलती [निच] में"
4. "[निच] में सफल होने के 5 आसान तरीके"
5. "इससे पहले vs अब - मेरी [निच] जर्नी"
6. "24 घंटे में मैंने क्या सीखा [निच] के बारे में"
7. "[निच] के बारे में मिथ्स जो गलत हैं"
8. "मैं कैसे [निच] में एक्सपर्ट बना"
9. "[निच] करते समय ये गलतियां मत करना"
10. "एक दिन मेरे साथ [निच] की दुनिया में"

📱 HOOK फॉर्मूला (पहले 3 सेकंड):
✅ "यह वीडियो देखना ज़रूरी ह�� अगर आप..."
✅ "मैं शर्त लगाता हूं कि आप नहीं जानते..."
✅ "इससे पहले कि मैं [result] पाता, मै����..."
✅ "अगर मैं आपसे क��ूं कि..."
✅ "यहां क्या गलत है?"

🎭 रील कैटेगरीज:

📚 एजुकेशनल रील्स (20 आइडियाज):
11. "[निच] में बिगिनर vs प्रो"
12. "5 मिनट में [निच] सिखाना"
13. "[निच] के बारे में कॉमन सवाल"
14. "[निच] के लिए सबसे जरूरी टूल्स"
15. "[निच] की हिस्ट्री - 60 सेकंड में"
16. "[निच] में पैसा कमाने के तरीके"
17. "मैं कैसे [स्पेसिफिक रिजल्ट] पाया"
18. "[निच] में मेरी टॉप 3 टिप्स"
19. "क्या करें और क्या न करें [निच] में"
20. "[निच] के बारे में तथ्य जो आप नहीं जानते"
21. "[निच] में सफलता के लिए रोडमैप"
22. "मैं कैसे [चैलेंज] को साल्व करता हूं"
23. "[निच] में कॉमन मिस्टेक्स"
24. "[निच] टूल्स - फ्री vs पेड"
25. "[निच] में करियर के ऑप्शन्स"
26. "[निच] की फ्यूचर"
27. "[निच] में AI का रोल"
28. "घर बैठे कैसे [निच] सीखें"
29. "[निच] में नेटवर्किंग टिप्स"
30. "[निच] का डार्क साइड"

🎉 एंटर्टेनमेंट रील्स (15 आइडियाज):
31. "मेरे [निच] के दोस्तों के साथ"
32. "जब मैं [निच] के बारे में सोचता हूं vs रियलिटी"
33. "[निच] के टाइप्स ऑफ पीपल"
34. "मेरी [निच] जर्नी - कॉमेडी वर्जन"
35. "[निच] के स्ट्रगल्स"
36. "क्या होता है जब मैं [निच activity] करता हूं"
37. "[निच] वाले की जिंदगी"
38. "[���िच] के मैम्स"
39. "दोस्त vs मैं [निच] में"
40. "पेरेंट्स vs मेरा [निच] पैशन"
41. "[निच] करते समय मूड्स"
42. "[न��च] के बारे में पेरेंट्स ���ी रिएक्शन"
43. "[निच] वाले के पास कैसे टाइम मैनेज होता है"
44. "[निच] वाले रात को क्या करते हैं"
45. "[निच] वाले की शॉपिंग"

💡 ट्रेंड रील्स (5 आइडियाज):
46. "इस रील को आपके [निच] दोस्त को भेजो"
47. "[निच] वाले इसे समझेंगे"
48. "अगर [निच] होता YouTube shorts"
49. "[निच] के साथ वायरल चैलेंज"
50. "AI + [निच] = Future"

🎵 बेस्ट ऑडियो/म्यूजिक:
• Original audio (अपनी आवाज)
• Trending bollywood songs
• Viral sounds से Instagram
• Comedy dialogues
• Motivational quotes audio
• Fast-paced beats
• Emotional background music

⚡ वायरल होने के लिए फॉर्मूला:
Hook (0-3s) + Value/Entertainment (3-20s) + Call to Action (20-30s)

🎬 प्रोडक्शन टिप्स:
✅ वर्टिकल फॉर्मेट (9:16)
✅ अच्छी लाइटि���ग
✅ क्लियर ऑडियो
✅ आई कांटेक्ट
✅ फ्रेम में फेस क्लियर दिखे
✅ फ्रिकेंट कट्स/ट्रांजिशन
✅ On-screen text
✅ कैप्शन में hook continue करें

📈 रील्स एनालिटिक्स ट्रैक करें:
• पहले 3 सेकंड का रिटेंशन रेट
• कंप्लीशन रेट
• शेयर्स और saves
• कमेंट्स और likes का ratio

🏆 सक्सेस मेट्रिक्स:
• 1000+ व्यूज = Good
• 5000+ व्यूज = Great
• 10000+ व्यूज = Viral Potential
• 50000+ व्यूज = Viral Hit`;
  }

  return `🎬 50+ VIRAL REEL IDEAS GUIDE

Proven Viral Content Formula for ${userNiche} Creators

🔥 TRENDING REEL IDEAS:

1. "3 Secrets I learned in [your niche]"
2. "Did you know this about [niche]?"
3. "My biggest mistake in [niche]"
4. "5 easy ways to succeed in [niche]"
5. "Before vs Now - My [niche] journey"
6. "What I learned in 24 hours about [niche]"
7. "Myths about [niche] that are wrong"
8. "How I became an expert in [niche]"
9. "Don't make these mistakes in [niche]"
10. "A day with me in the [niche] world"

📱 HOOK FORMULAS (First 3 seconds):
✅ "You need to watch this if you..."
✅ "I bet you didn't know..."
✅ "Before I got [result], I..."
✅ "What if I told you..."
✅ "What's wrong here?"

🎭 REEL CATEGORIES:

📚 Educational Reels (20 Ideas):
11. "Beginner vs Pro in [niche]"
12. "Teaching [niche] in 5 minutes"
13. "Common questions about [niche]"
14. "Most important tools for [niche]"
15. "History of [niche] in 60 seconds"
16. "Ways to make money in [niche]"
17. "How I achieved [specific result]"
18. "My top 3 tips for [niche]"
19. "Do's and Don'ts in [niche]"
20. "Facts about [niche] you don't know"
21. "Roadmap to success in [niche]"
22. "How I solve [challenge]"
23. "Common mistakes in [niche]"
24. "[Niche] tools - Free vs Paid"
25. "Career options in [niche]"
26. "Future of [niche]"
27. "Role of AI in [niche]"
28. "Learn [niche] from home"
29. "Networking tips for [niche]"
30. "Dark side of [niche]"

🎉 Entertainment Reels (15 Ideas):
31. "With my [niche] friends"
32. "When I think about [niche] vs Reality"
33. "Types of people in [niche]"
34. "My [niche] journey - Comedy version"
35. "Struggles of [niche]"
36. "What happens when I do [niche activity]"
37. "Life of a [niche] person"
38. "[Niche] memes"
39. "Friends vs Me in [niche]"
40. "Parents vs My [niche] passion"
41. "Moods while doing [niche]"
42. "Parents' reaction to [niche]"
43. "How [niche] people manage time"
44. "What [niche] people do at night"
45. "Shopping of [niche] people"

💡 Trend Reels (5 Ideas):
46. "Send this reel to your [niche] friend"
47. "[Niche] people will understand"
48. "If [niche] was YouTube shorts"
49. "Viral challenge with [niche]"
50. "AI + [niche] = Future"

🎵 BEST AUDIO/MUSIC:
• Original audio (your voice)
• Trending Bollywood songs
• Viral sounds from Instagram
• Comedy dialogues
• Motivational quotes audio
• Fast-paced beats
• Emotional background music

⚡ FORMULA FOR GOING VIRAL:
Hook (0-3s) + Value/Entertainment (3-20s) + Call to Action (20-30s)

🎬 PRODUCTION TIPS:
✅ Vertical format (9:16)
✅ Good lighting
✅ Clear audio
✅ Eye contact
✅ Face clearly visible in frame
✅ Frequent cuts/transitions
✅ On-screen text
✅ Continue hook in caption

📈 TRACK REEL ANALYTICS:
• First 3 seconds retention rate
• Completion rate
• Shares and saves
• Comments and likes ratio

🏆 SUCCESS METRICS:
• 1000+ views = Good
• 5000+ views = Great
• 10000+ views = Viral Potential
• 50000+ views = Viral Hit`;
}

function generateEditingTemplatesContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `🎞️ प्रोफेशनल एडिटिंग टेम्प्लेट्स & ट्रांजिशन गाइड

${userNiche} क्रिएटर्स के लिए वायरल एडिटिंग तकनीकें

🎬 एडिटिंग टेम्प्लेट्स:

📱 BASIC रील एडिटिंग फॉर्मेट:
1. Intro Hook (0-3 सेकंड)
2. Main Content (3-25 सेकंड)
3. Call to Action (25-30 सेकंड)

🔄 प्रोवन ट्रांजिशन्स:

✨ हैंड ट्रांजिशन:
• हैंड कवर करें - कपड़े/लुक बदलें
• उंगली स्नैप - टेक्स्ट/ग्राफिक add करें
• हैंड swipe - सीन चेंज करें
• Palm push - नई लोकेशन में

📸 ऑब्जेक्ट ट्रांजिशन:
• Phone cover - नया शॉट reveal
• Book close/open - टाइम जंप
• Mirror reflection - angle change
• Door open/close - location switch

⚡ स्पीड ट्रा��जिशन:
• Fast zoom in/out
• Quick spin (360°)
• Speed up + slow down
• Jump cut sequences

🎵 बीट ड्रॉप ट्रांजिशन:
• Music beat पर कट करें
• Rhythm match करें
• Beat के ��ाथ text animate करें
• Sound effects add करें

🎨 विजुअल इफेक्ट्स:

📊 टेक्स्ट एनीमेशन:
• Typewriter effect
• Fade in/out
• Slide from sides
• Bounce animation
• Glow effects
• Shadow text

🌈 कलर ग्रेडिंग प्रीसेट्स:
• Warm & Cozy (Instagram)
• Bright & Vibrant (Reels)
• Moody & Dark (YouTube)
• Clean & Professional (LinkedIn)
• Vintage & Film (Aesthetic)

⚙️ एडिटिंग टूल्स (रैंकिंग):

🏆 बेस्ट फ्री ऐप्स:
1. CapCut (सबसे popular)
2. InShot (user-friendly)
3. Kinemaster (advanced)
4. Splice (iOS)
5. PowerDirector (Android)

💎 प्रीमियम ऐप्स:
1. Adobe Premiere Pro (desktop)
2. Final Cut Pro (Mac)
3. DaVinci Resolve (free+paid)
4. Adobe Premiere Rush (mobile)
5. LumaFusion (iPad)

📐 टेम्���्लेट डाइमे��शन्स:
• Instagram Reel: 1080x1920 (9:16)
• YouTube Short: 1080x1920 (9:16)
• Instagram Post: 1080x1080 (1:1)
• Instagram Story: 1080x1920 (9:16)
• YouTube Thumbnail: 1280x720 (16:9)

🎭 कंटेंट टा���प टेम्प्लेट्स:

💡 एजुकेशनल रील टेम्प्लेट:
[0-3s]: Hook question
[3-8s]: Point 1 with visual
[8-13s]: Point 2 with visual
[13-18s]: Point 3 with visual
[18-25s]: Summary/conclusion
[25-30s]: CTA (follow, comment)

🎬 ट्यूटोरियल टेम्प्लेट:
[0-3s]: "How to [topic]"
[3-10s]: Step 1 demonstration
[10-17s]: Step 2 demonstration
[17-24s]: Step 3 demonstration
[24-30s]: Final result + CTA

📊 बिफोर/आफ्टर टेम्प्लेट:
[0-3s]: "Watch this transformation"
[3-8s]: Before state
[8-13s]: Process/transition
[13-20s]: After state
[20-25s]: Explanation
[25-30s]: CTA

🎯 लिस्ट टेम्प्लेट:
[0-3s]: "5 ways to [topic]"
[3-8s]: Way 1 (2 seconds each)
[8-13s]: Way 2
[13-18s]: Way 3
[18-23s]: Way 4
[23-28s]: Way 5
[28-30s]: CTA

🔧 एडवांस्ड ट्रिक्स:

⏰ टाइमिंग टिप्स:
• Beat के साथ cuts align करें
• 2-3 सेकंड per scene (max)
• Fast cuts for engagement
• Slow motion for emphasis

🎨 कलर कोर्डिनेशन:
• Consistent color palette
• Contrast for readability
• Brand colors integration
• Mood-based coloring

📝 टेक्स्ट बेस्ट प्रैक्टिसेज:
• Font size: 60+ (mobile readable)
• High contrast backgrounds
• Readable fonts (Arial, Helvetica)
• 2-3 lines maximum
• Keywords में highlight करें

🎵 साउंड टिप्स:
• Original audio में clarity हो
• Background music volume: 20-30%
• Beat drops के साथ cuts
• Sound effects sparingly use करें

📱 मोबाइल एडिटिंग workflow:
1. CapCut में import करें
2. Clips को sequence में arrange करें
3. Music add करें और beat के साथ sync करें
4. Transitions add करें
5. Text overlays add करें
6. Color grading apply करें
7. Final review और export करें

🚀 वायरल एडिटिंग हैक्स:
• First 3 seconds में visual hook
• Every 2-3 seconds में कुछ नया
• Text animations for retention
• Trending transitions use करें
• Consistent branding elements
• Mobile-first editing approach

📊 परफॉर्मेंस मेट्रिक्स:
• Completion rate (aim for 70%+)
• Engagement rate (3%+)
• Share rate (1%+)
• Save rate (2%+)

🎯 A/B टे���्ट करें:
• Different transitions
• Various music choices
• Multiple hooks
• Different color grades
• Various text styles`;
  }

  return `🎞️ PROFESSIONAL EDITING TEMPLATES & TRANSITIONS GUIDE

Viral Editing Techniques for ${userNiche} Creators

🎬 EDITING TEMPLATES:

📱 BASIC REEL EDITING FORMAT:
1. Intro Hook (0-3 seconds)
2. Main Content (3-25 seconds)
3. Call to Action (25-30 seconds)

🔄 PROVEN TRANSITIONS:

✨ Hand Transitions:
• Hand cover - change outfit/look
• Finger snap - add text/graphics
• Hand swipe - scene change
• Palm push - new location

📸 Object Transitions:
• Phone cover - reveal new shot
• Book close/open - time jump
• Mirror reflection - angle change
• Door open/close - location switch

⚡ Speed Transitions:
• Fast zoom in/out
• Quick spin (360°)
• Speed up + slow down
• Jump cut sequences

🎵 Beat Drop Transitions:
• Cut on music beat
• Match rhythm
• Animate text with beat
• Add sound effects

🎨 VISUAL EFFECTS:

📊 Text Animations:
• Typewriter effect
• Fade in/out
• Slide from sides
• Bounce animation
• Glow effects
• Shadow text

🌈 Color Grading Presets:
• Warm & Cozy (Instagram)
• Bright & Vibrant (Reels)
• Moody & Dark (YouTube)
• Clean & Professional (LinkedIn)
• Vintage & Film (Aesthetic)

⚙️ EDITING TOOLS (Ranked):

🏆 Best Free Apps:
1. CapCut (most popular)
2. InShot (user-friendly)
3. Kinemaster (advanced)
4. Splice (iOS)
5. PowerDirector (Android)

💎 Premium Apps:
1. Adobe Premiere Pro (desktop)
2. Final Cut Pro (Mac)
3. DaVinci Resolve (free+paid)
4. Adobe Premiere Rush (mobile)
5. LumaFusion (iPad)

📐 Template Dimensions:
• Instagram Reel: 1080x1920 (9:16)
• YouTube Short: 1080x1920 (9:16)
• Instagram Post: 1080x1080 (1:1)
• Instagram Story: 1080x1920 (9:16)
• YouTube Thumbnail: 1280x720 (16:9)

🎭 CONTENT TYPE TEMPLATES:

💡 Educational Reel Template:
[0-3s]: Hook question
[3-8s]: Point 1 with visual
[8-13s]: Point 2 with visual
[13-18s]: Point 3 with visual
[18-25s]: Summary/conclusion
[25-30s]: CTA (follow, comment)

🎬 Tutorial Template:
[0-3s]: "How to [topic]"
[3-10s]: Step 1 demonstration
[10-17s]: Step 2 demonstration
[17-24s]: Step 3 demonstration
[24-30s]: Final result + CTA

📊 Before/After Template:
[0-3s]: "Watch this transformation"
[3-8s]: Before state
[8-13s]: Process/transition
[13-20s]: After state
[20-25s]: Explanation
[25-30s]: CTA

🎯 List Template:
[0-3s]: "5 ways to [topic]"
[3-8s]: Way 1 (2 seconds each)
[8-13s]: Way 2
[13-18s]: Way 3
[18-23s]: Way 4
[23-28s]: Way 5
[28-30s]: CTA

🔧 ADVANCED TRICKS:

⏰ Timing Tips:
• Align cuts with beat
• 2-3 seconds per scene (max)
• Fast cuts for engagement
• Slow motion for emphasis

🎨 Color Coordination:
• Consistent color palette
• Contrast for readability
• Brand colors integration
• Mood-based coloring

📝 Text Best Practices:
• Font size: 60+ (mobile readable)
• High contrast backgrounds
• Readable fonts (Arial, Helvetica)
• 2-3 lines maximum
• Highlight keywords

🎵 Sound Tips:
• Clear original audio
• Background music volume: 20-30%
• Cut with beat drops
• Use sound effects sparingly

📱 Mobile Editing Workflow:
1. Import to CapCut
2. Arrange clips in sequence
3. Add music and sync with beat
4. Add transitions
5. Add text overlays
6. Apply color grading
7. Final review and export

🚀 VIRAL EDITING HACKS:
• Visual hook in first 3 seconds
• Something new every 2-3 seconds
• Text animations for retention
• Use trending transitions
• Consistent branding elements
• Mobile-first editing approach

📊 Performance Metrics:
• Completion rate (aim for 70%+)
• Engagement rate (3%+)
• Share rate (1%+)
• Save rate (2%+)

🎯 A/B Test:
• Different transitions
• Various music choices
• Multiple hooks
• Different color grades
• Various text styles`;
}

function generateMusicGuideContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `🎵 म्यूजिक & साउंड सेलेक्शन मास्टर गाइड

${userNiche} क्रिएटर्स के लिए वायरल ऑडियो स्ट्रैटेजी

🎧 VIRAL म्यूजिक कैटेगरीज:

🔥 ट्रेंडिंग बॉलीवुड हिट्स (2024):
• "Animal" Movie Songs
• "Pathaan" Background Music
• "Jawan" Theme Music
• "12th Fail" Emotional Tracks
• "Rocky Aur Rani" Party Songs
• "Adipurush" Epic Music
• "Mission Majnu" Tension Music
• "Tu Jhoothi Main Makkaar" Romantic
• "Bhediya" Horror-Comedy Music
• "Brahmastra" Fantasy Music

🎶 इंस्ट्रूमेंटल & बैकग्राउंड:
• Lofi Hip Hop beats
��� Epic orchestral music
• Upbeat electronic music
• Motivational piano music
• Chill ambient sounds
• Dramatic tension music
• Success/achievement music
• Emotional string music
• Tech/futuristic beats
• Nature/meditation sounds

🗣️ पॉपुलर डायलॉग्स (यू��� करने योग्य):
• "Pushpa" - "Main jhukega nahi"
• "KGF" - "Violence, Speed, Momentum"
• "Bahubali" - "Jai Mahishmati"
• "Dangal" - "Mhari choriyaan choro se kam hain ke?"
• "3 Idiots" - "All is well"
• "Zindagi Na Milegi Dobara" quotes
• "Queen" - Inspirational dialogues
• "Pink" - "No means no"
• "Taare Zameen Par" - emotional quotes
• "Chak De India" - motivational lines

🎵 म्यूजिक सोर्सेज (कॉपीराइट फ्री):

🆓 फ्री म्यूजिक लाइब्रेरी:
1. YouTube Audio Library
   - 1000+ copyright-free tracks
   - Genre-wise categorized
   - Mood-based selection

2. Facebook Sound Collection
   - Instagram integrated
   - Popular trending sounds
   - Regular updates

3. Epidemic Sound (Free Trial)
   - High-quality tracks
   - Professional music
   - 30-day free trial

4. Pixabay Music
   - Free for commercial use
   - No attribution required
   - High-quality audio

5. Freesound.org
   - Sound effects library
   - Community contributed
   - Creative Commons licensed

💰 प्रीमियम म्यूजिक प��लेटफॉर्म:
1. Epidemic Sound (₹1500/month)
2. Artlist (₹2000/month)
3. Musicbed (₹2500/month)
4. AudioJungle (Per track ₹500-2000)
5. Splice (₹1200/month)

🎯 निच-स्पेसिफिक म्यूजिक सेलेक्शन:

💻 टेक/बिजनेस कंटेंट:
• Electronic/Synth music
• Corporate inspiring music
• Tech startup vibes
• Futuristic sounds
• Minimal techno beats

👗 फैशन/ब्यूटी:
• Trendy pop music
• Upbeat dance tracks
• Chic and stylish beats
• Fashion week music
• Glamorous orchestral

🍳 फूड कंटेंट:
• Cooking show music
• Upbeat kitchen vibes
• Satisfying ASMR sounds
• Restaurant ambiance
• Celebration music

💪 फिटनेस/हेल्थ:
• High-energy workout music
• Motivational beats
• Gym music
• Meditation sounds
• Success/achievement music

📚 एजुकेशन/लर्निंग:
• Inspiring piano music
• Concentration music
• Study-friendly beats
• Achievement celebration
• Thoughtful ambient music

🎨 म्यूजिक सेलेक्शन टिप्स:

⏱️ टाइमिंग मैटर्स:
• 15-30 सेकंड रील्स के लिए upbeat music
• 1-3 मिनट videos के लिए varied tempo
• Background music volume: 20-30%
• Voiceover के साथ subtle music

🔊 ऑडियो क्वालिटी:
• 44.1 kHz sample rate
• 16-bit minimum depth
• MP3 320kbps या WAV format
• Noise-free recordings
• Consistent volume levels

🎼 बीट मैचिंग:
• Video cuts को beat के साथ sync करें
• Transitions पर beat drops use करें
• Text animations को rhythm के साथ
• Visual effects music के साथ coordinate

📱 प्लेटफॉर्म-स्पेसिफिक चॉइसेज:

📺 Instagram Reels:
• Trending Instagram sounds priority
• 15-30 सेकंड clips
• High-energy, catchy music
• Popular Bollywood remixes
• Viral sound effects

🎬 YouTube Shorts:
• Original music preferred
• Longer format flexibility
• Epic/cinematic music works
• Educational content: softer music
• Gaming content: electronic beats

💼 LinkedIn:
• Professional, inspiring music
• Corporate-friendly tracks
• Motivational instrumentals
• Success/achievement themes
• Avoid heavy beats

🎪 मूड-बेस्ड म्यूजिक चॉइस:

😊 हैप्पी/प�����िटिव:
• Major key music
• Upbeat tempo (120-140 BPM)
• Bright instruments (guitar, piano)
• Cheerful melodies

😢 इमोशनल/सेंटिमेंटल:
• Minor key music
• Slower tempo (60-80 BPM)
• Strings, piano
• Soft, gentle melodies

⚡ एनर्जेटिक/मोटिवेशनल:
• Fast tempo (140+ BPM)
• Drums, bass heavy
• Electronic elements
• Building/crescendo structure

🧘 कैल्म/रिलैक्सिंग:
• Slow tempo (60-80 BPM)
• Ambient sounds
• Nature sounds
• Minimal instruments

🔧 ऑडियो एडिटिंग टूल्स:

📱 मोबाइल ऐप्स:
1. CapCut (बेस्ट फ्री)
2. InShot (user-friendly)
3. Splice (iOS)
4. Adobe Audition Mobile
5. GarageBand (iOS)

💻 डेस्कटॉप सॉफ्टवेयर:
1. Adobe Audition (प्रोफेशनल)
2. Audacity (फ्री)
3. GarageBand (Mac)
4. FL Studio (music production)
5. Logic Pro (Mac - प्रोफेशनल)

🎵 साउंड इफेक्ट्स लाइब्रेरी:
• Whoosh sounds (transitions)
• Pop/click sounds (reveals)
• Success chimes (achievements)
• Error/fail sounds (mistakes)
• Applause (celebrations)
• Notification sounds (alerts)
• Nature sounds (backgrounds)
• ASMR sounds (satisfaction)

📊 म्यूजिक प���फॉर्मेंस ट्रैकिंग:
• Completion rates with different music
• Engagement rates per music type
• Share rates for various sounds
• Comments mentioning music
• Viral potential of specific tracks

🚨 कॉपीराइट अवेयरनेस:
• Always check licensing
• Credit original artists when required
• Use platform-provided music libraries
• Avoid copyrighted songs for commercial use
• Keep records of music licenses

🏆 वायरल साउंड स्ट्रैटेजी:
1. Monitor trending sounds daily
2. Jump on trends early
3. Create original audio content
4. Mix trending + original audio
5. Collaborate with musicians
6. Remix popular tracks legally
7. Use local/regional popular music
8. Seasonal/festival-themed music`;
  }

  return `🎵 MUSIC & SOUND SELECTION MASTER GUIDE

Viral Audio Strategy for ${userNiche} Creators

🎧 VIRAL MUSIC CATEGORIES:

🔥 Trending Bollywood Hits (2024):
• "Animal" Movie Songs
• "Pathaan" Background Music
• "Jawan" Theme Music
• "12th Fail" Emotional Tracks
• "Rocky Aur Rani" Party Songs
• "Adipurush" Epic Music
• "Mission Majnu" Tension Music
• "Tu Jhoothi Main Makkaar" Romantic
• "Bhediya" Horror-Comedy Music
• "Brahmastra" Fantasy Music

🎶 Instrumental & Background:
• Lofi Hip Hop beats
• Epic orchestral music
• Upbeat electronic music
• Motivational piano music
• Chill ambient sounds
• Dramatic tension music
• Success/achievement music
• Emotional string music
• Tech/futuristic beats
• Nature/meditation sounds

🗣️ Popular Dialogues (Usable):
• "Pushpa" - "Main jhukega nahi"
• "KGF" - "Violence, Speed, Momentum"
• "Bahubali" - "Jai Mahishmati"
• "Dangal" - "Mhari choriyaan choro se kam hain ke?"
• "3 Idiots" - "All is well"
• "Zindagi Na Milegi Dobara" quotes
• "Queen" - Inspirational dialogues
• "Pink" - "No means no"
• "Taare Zameen Par" - emotional quotes
• "Chak De India" - motivational lines

🎵 MUSIC SOURCES (Copyright Free):

🆓 Free Music Libraries:
1. YouTube Audio Library
   - 1000+ copyright-free tracks
   - Genre-wise categorized
   - Mood-based selection

2. Facebook Sound Collection
   - Instagram integrated
   - Popular trending sounds
   - Regular updates

3. Epidemic Sound (Free Trial)
   - High-quality tracks
   - Professional music
   - 30-day free trial

4. Pixabay Music
   - Free for commercial use
   - No attribution required
   - High-quality audio

5. Freesound.org
   - Sound effects library
   - Community contributed
   - Creative Commons licensed

💰 Premium Music Platforms:
1. Epidemic Sound (₹1500/month)
2. Artlist (₹2000/month)
3. Musicbed (₹2500/month)
4. AudioJungle (Per track ₹500-2000)
5. Splice (₹1200/month)

🎯 NICHE-SPECIFIC MUSIC SELECTION:

💻 Tech/Business Content:
• Electronic/Synth music
• Corporate inspiring music
• Tech startup vibes
• Futuristic sounds
• Minimal techno beats

👗 Fashion/Beauty:
• Trendy pop music
• Upbeat dance tracks
• Chic and stylish beats
• Fashion week music
• Glamorous orchestral

🍳 Food Content:
• Cooking show music
• Upbeat kitchen vibes
• Satisfying ASMR sounds
• Restaurant ambiance
• Celebration music

💪 Fitness/Health:
• High-energy workout music
• Motivational beats
• Gym music
• Meditation sounds
• Success/achievement music

📚 Education/Learning:
• Inspiring piano music
• Concentration music
• Study-friendly beats
• Achievement celebration
• Thoughtful ambient music

🎨 MUSIC SELECTION TIPS:

⏱️ Timing Matters:
• 15-30 second reels need upbeat music
• 1-3 minute videos need varied tempo
• Background music volume: 20-30%
• Subtle music with voiceover

🔊 Audio Quality:
• 44.1 kHz sample rate
• 16-bit minimum depth
• MP3 320kbps or WAV format
• Noise-free recordings
• Consistent volume levels

🎼 Beat Matching:
• Sync video cuts with beat
• Use beat drops for transitions
• Text animations with rhythm
• Coordinate visual effects with music

📱 PLATFORM-SPECIFIC CHOICES:

📺 Instagram Reels:
• Trending Instagram sounds priority
• 15-30 second clips
• High-energy, catchy music
• Popular Bollywood remixes
• Viral sound effects

🎬 YouTube Shorts:
• Original music preferred
• Longer format flexibility
• Epic/cinematic music works
• Educational content: softer music
• Gaming content: electronic beats

💼 LinkedIn:
• Professional, inspiring music
• Corporate-friendly tracks
• Motivational instrumentals
• Success/achievement themes
• Avoid heavy beats

🎪 MOOD-BASED MUSIC CHOICE:

😊 Happy/Positive:
• Major key music
• Upbeat tempo (120-140 BPM)
• Bright instruments (guitar, piano)
• Cheerful melodies

😢 Emotional/Sentimental:
• Minor key music
• Slower tempo (60-80 BPM)
• Strings, piano
• Soft, gentle melodies

⚡ Energetic/Motivational:
• Fast tempo (140+ BPM)
• Drums, bass heavy
• Electronic elements
• Building/crescendo structure

🧘 Calm/Relaxing:
• Slow tempo (60-80 BPM)
• Ambient sounds
• Nature sounds
• Minimal instruments

🔧 AUDIO EDITING TOOLS:

📱 Mobile Apps:
1. CapCut (best free)
2. InShot (user-friendly)
3. Splice (iOS)
4. Adobe Audition Mobile
5. GarageBand (iOS)

💻 Desktop Software:
1. Adobe Audition (professional)
2. Audacity (free)
3. GarageBand (Mac)
4. FL Studio (music production)
5. Logic Pro (Mac - professional)

🎵 SOUND EFFECTS LIBRARY:
• Whoosh sounds (transitions)
• Pop/click sounds (reveals)
• Success chimes (achievements)
• Error/fail sounds (mistakes)
• Applause (celebrations)
• Notification sounds (alerts)
• Nature sounds (backgrounds)
• ASMR sounds (satisfaction)

📊 MUSIC PERFORMANCE TRACKING:
• Completion rates with different music
• Engagement rates per music type
• Share rates for various sounds
• Comments mentioning music
• Viral potential of specific tracks

🚨 COPYRIGHT AWARENESS:
• Always check licensing
• Credit original artists when required
• Use platform-provided music libraries
• Avoid copyrighted songs for commercial use
• Keep records of music licenses

🏆 VIRAL SOUND STRATEGY:
1. Monitor trending sounds daily
2. Jump on trends early
3. Create original audio content
4. Mix trending + original audio
5. Collaborate with musicians
6. Remix popular tracks legally
7. Use local/regional popular music
8. Seasonal/festival-themed music`;
}

function generateAlgorithmSecretsContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `📱 इंस्टाग्राम एल्गोरिदम ऑप्टिमाइजेशन सीक्रेट्स

${userNiche} क्रिएटर्स के लिए एल्गोरिदम मास्टरी गाइड

🤖 इंस्टाग्राम एल्गोरिदम कैसे काम करता है:

🔍 एल्गोरिदम के मुख्य फैक्टर्स:
1. रिलेशनशिप (Interest): आपके अऔर user के बीच connection
2. रीसेंसी (Recency): कंटेंट कितना नया है
3. एंगेजमेंट (Engagement): लाइक्स, कमेंट्स, शेयर्स
4. यूजर एक्टिविटी: कितनी बार ऐप खोलते हैं
5. कंटेंट क्वालिटी: वीडियो quality और completion rate

🚀 वायरल होने के लिए शीर्ष रणनीतियां:

1️⃣ पहले 3 सेकंड में आकर्षित करें:
• मज���ूत हुक (hook) का इस्तेमाल करें
• सवाल पूछें या शॉकिंग statement दें
• तेज और पैतरे movement/action दिखाएं
• वीडियो की preview दें (“मैं आपको दिखाऊंगा...”)

2️⃣ विजुअल एलिमेंट्स को ऑप्टिमाइज करें:
• 9:16 वर्टिकल रिजोल्यूशन (1080x1920)
• तेज और हाई कॉन्ट्रास्ट विजुअल्स
• ब्राइट lighting और साफ बैकग्राउंड
• प्रोफेशनल editing विथ smooth transitions

3️⃣ ऑडियो स्ट्रैटेजी:
• ट्रेंडिंग म्यूजिक का इस्तेमाल करें
• वोकल्स और beat drops के साथ sync करें
• जम म्यूजिक से timing match करें
• ओरिजिनल sounds बनाएं (व��यरल potential ज्यादा)

4️⃣ कैप्श��� और हैशटैग ऑप्टिमाइजेशन:
• पहली लाइन में hook रखें
• ऐक्शन वर���ड्स का उपयोग करें
• इमोजी और सम्बोल्स strategically use करें
• Call-to-action शामिल करें

5️⃣ टाइमिंग और पोस्टिंग पैटर्न:
• पीक आवर्स में पोस्ट करें (6-9 PM IST)
• टिकटॉक ट्रेंड्स को इंस्टाग्राम पर adapt करें
• कॉन्सिस्टेंट पोस्टिंग (daily या alternate days)
• त्योहारों और सीजन्स का फायदा उठाएं

📊 एनालिटिक्स और मेट्रिक्स ट्रैकिंग:

🔥 की मेट्रिक्स पर फोकस करें:
• वियू रेट (70%+ target करें)
• एवरेज वियू ड्यूरेशन (complete views)
• रीच और इम्प्रेशन्स ग्रोथ
• शेयर्स और saves (strong engagement signals)
• कम��ंट रेस्पॉन्स रेट

💡 प्रो टि���्स और तकनीकें:

1. लूप वीडियो और pattern interrupts
2. मल्टि-लेयर्ड storytelling
3. विजुअल ऑप्टिकल illusions
4. फेस focus और eye contact
5. कॉन्ट्रास्टिंग विजुअल elements

🎆 आद्वांस एल्गोरिदम हैक्स:

⚡ शैडो बैन से बचने के तरीके:
• Repetitive हैशटैग्स से बचें
• एक साथ बहुत ज्यादा content upload न करें
• Bot के जैसे एक्टिविटी से बचें
• Original content पर focus करें

🕰️ वायरल timing और momentum:
• पहले घंटे में high engagement = बेहतर reach
• कमेंट्स पर जल्दी reply करें
• गोल्डन आवर (first 2 hours) में एक्टिव रहें
• Cross-promotion से initial boost लें

🔄 कंटेंट रिपरपाजिंग और adaptation:
• टिकटॉक viral content को adapt करें
• YouTube Shorts trends को follow करें
• इंटर्नेशनल trends को Indian context में adapt करें
• पुराने viral content को नए twist के साथ recreate करें

⚠️ आम ���लतियां जिनसे बचें:
❌ लॉन्ग और बोरिंग intros
❌ Static content without movement
❌ बहुत ज्यादा text overlay
❌ Poor audio quality
❌ व्यू बैकग्राउंड के साथ recording
❌ मिसिंग captions/subtitles

🎆 फाइनल pro tips:
1. हर रील में आपकी personality shine करनी चाहिए
2. आपके अॡुेंस के प्रोब्लम्स solve करें
3. नीच-स्पेसिफिक वाल्यू दें
4. Authentic और genuine रहें
5. कम्युनिटी के साथ एक्टिवली engage करें`;
  }

  return `📱 INSTAGRAM ALGORITHM OPTIMIZATION SECRETS

Algorithm Mastery Guide for ${userNiche} Creators

🤖 HOW INSTAGRAM ALGORITHM WORKS:

🔍 KEY ALGORITHM FACTORS:
1. Relationship (Interest): Connection between you and user
2. Recency: How new your content is
3. Engagement: Likes, comments, shares
4. User Activity: How often they open the app
5. Content Quality: Video quality and completion rate

🚀 TOP STRATEGIES TO GO VIRAL:

1️⃣ Hook Viewers in First 3 Seconds:
• Use strong hooks that grab attention
• Ask questions or make shocking statements
• Show fast and sharp movement/action
• Give preview of the video ("I'll show you...")

2️⃣ Optimize Visual Elements:
• 9:16 vertical resolution (1080x1920)
• Sharp and high contrast visuals
• Bright lighting and clean backgrounds
• Professional editing with smooth transitions

3️⃣ Audio Strategy:
• Use trending music
• Sync with vocals and beat drops
• Match timing with popular music
• Create original sounds (higher viral potential)

4️⃣ Caption & Hashtag Optimization:
• Put hook in first line
• Use action words
• Use emojis and symbols strategically
• Include call-to-action

5️⃣ Timing & Posting Patterns:
• Post during peak hours (6-9 PM IST)
• Adapt TikTok trends to Instagram
• Consistent posting (daily or alternate days)
• Leverage festivals and seasons

📊 ANALYTICS & METRICS TRACKING:

🔥 KEY METRICS TO FOCUS ON:
• View rate (target 70%+)
• Average view duration (complete views)
• Reach and impressions growth
• Shares and saves (strong engagement signals)
• Comment response rate

💡 PRO TIPS & TECHNIQUES:

1. Loop videos and pattern interrupts
2. Multi-layered storytelling
3. Visual optical illusions
4. Face focus and eye contact
5. Contrasting visual elements

🎆 ADVANCED ALGORITHM HACKS:

⚡ Shadow Ban Avoidance:
• Avoid repetitive hashtags
• Don't upload too much content at once
�� Avoid bot-like activities
• Focus on original content

🕰️ Viral Timing & Momentum:
• High engagement in first hour = better reach
• Reply to comments quickly
• Stay active during golden hour (first 2 hours)
• Get initial boost through cross-promotion

🔄 Content Repurposing & Adaptation:
• Adapt TikTok viral content
• Follow YouTube Shorts trends
• Adapt international trends to Indian context
• Recreate old viral content with new twist

⚠️ COMMON MISTAKES TO AVOID:
❌ Long and boring intros
❌ Static content without movement
❌ Too much text overlay
❌ Poor audio quality
❌ Recording with cluttered backgrounds
❌ Missing captions/subtitles

🎆 FINAL PRO TIPS:
1. Let your personality shine in every reel
2. Solve your audience's problems
3. Provide niche-specific value
4. Stay authentic and genuine
5. Actively engage with your community`;
}

function generateCaseStudiesContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `🏆 वायरल क्रिएटर केस स���टडीज

${userNiche} क्रिएटर्स के लिए 10+ कामयाब केस स्टडीज

🔥 केस स��टडी #1: @bhuvan_bam (BB Ki Vines)

📈 सफलता के आंकडे:
• 19M+ यूट्यूब सब्सक्राइबर्स
• 14M+ इंस्टाग्राम फॉलोअर्स
• 1B+ total views across platforms
• अनुमानित आय: ₹15-20 करोड+ सालाना

🎆 क्या किया ठीक:
• Relatable Indian characters (टितु मामा, बनचोद, मिखाल)
• अपने आप से दर लगने वाले conversations
• हिंदी-इंग्लिश mix (Indian audience के लिए perfect)
• कम बजट में हाई क्वालिटी production

⚡ रीप्लिकेट करने योग्य तकनीकें:
• Multiple characters in single video
• Regional language incorporation
• Everyday situations comedy
• आगे-पीछे jump cuts का smart use

---

🔥 केस स्टडी #2: @mostlysane (Prajakta Koli)

📈 सफलता के आंकडे:
• 6.8M+ यूट्यूब सब्सक्राइबर्स
• 6.5M+ इंस्टाग्राम फॉलोअर्स
• Netflix series lead role
• Multiple brand endorsements (₹1-2 करोड+ साल���ना)

🎆 क्या किया ठीक:
• लड़कियों के रील प्रोब्लम्स address क���ए
• Millennial struggles पर relatable content
• Body positivity और mental health awareness
• International collaborations (UN, Netflix)

⚡ रीप्लिकेट करने योग्य तकनीकें:
• Social issues को comedy के साथ mix करें
• Authentic personality showcase
• Consistent branding across platforms
• Community building पर focus

---

🔥 केस स्टडी #3: @carryminati (Ajey Nagar)

📈 सफलता के आंकडे:
• 35M+ यूट्यूब सब्सक्राइबर्स
• 12M+ इंस्टाग्राम फॉलोअर्स
• Most subscribed individual creator in India
• अनुमानित आय: ₹8-12 करोड+ सालाना

🎆 क्या किया ठीक:
• Gaming content में हिंदी commentary
• Controversial topics पर roasting videos
• High energy और aggressive presentation style
• Trending topics पर quick response

⚡ रीप्लिकेट करने योग��य तकनीकें:
• High energy presentation
• Trend-jacking quickly
• Unique commentary style
• Audience ko involve करने का technique

---

🔥 केस स्टडी #4: @rangoli_by_kanchan (Instagram Reels)

📈 सफलता के आंकडे:
• 100K+ followers in 6 months
• Average 50K+ views per reel
• Multiple viral videos (1M+ views)
• Brand partnerships with art companies

🎆 क्या किया ठीक:
• Satisfying rangoli-making process videos
• Time-lapse के साथ soothing music
• Festival-specific rangoli designs
• Step-by-step tutorials

⚡ रीप्लिकेट करने योग्य तकनीकें:
• Process videos बनाएं (satisfying content)
• Festival trends leverage करें
• Close-up shots और detailed work dikhaye
• Before-after transformations

---

🔥 केस स्टडी #5: @flying_beast (Gaurav Taneja)

📈 सफलता के आंकडे:
• 7.8M+ यूट्यूब सब्सक्राइबर्स
• 3.2M+ इंस्टाग्राम फॉलोअर्स
• Multiple fitness businesses
• अनुमानित आ���: ₹3-5 करोड+ सालाना

🎆 क्या किया ठीक:
• Personal life और family vlogs
• Fitness expertise के साथ entertainment
• Honest product reviews और myth-busting
• Aviation knowledge sharing

⚡ रीप्लिकेट करने ���ोग्य तकनीकें:
• Expertise + entertainment mix
• Family content inclusion
• Honest reviews और opinions
• Behind-the-scenes lifestyle content

---

📊 कॉमन वायरल पैटर्न एनालिसिस:

🎆 सभी सफल क्रिएटर्स में सामान्य बातें:

1️⃣ एॉथेंटिसिटी (Authenticity):
• अपना real personality दिखाते हैं
• Fake या pretentious नहीं लगते
• अपने failures और struggles share करते हैं

2️⃣ कॉन्सिस्टेंसी (Consistency):
• Regular posting schedule maintain करते हैं
• Content quality में consistency
• Brand voice और style consistency

3️⃣ रिलेटेबिलिटी (Relatability):
• Audience के problems understand करते हैं
• Common situations पर content बनाते है���
• भारतीय context maintain करते हैं

4️⃣ वैल्य�� क्रिएशन (Value Creation):
• Entertainment + education mix
• Actionable tips और advice
• Problem-solving content

5️⃣ एंगेजमेंट (Community Engagement):
• Comments ���र actively reply करते हैं
• Audience के साथ personal connect
• User-generated content encourage करते हैं

📝 आपके लिए ${userNiche} एक्शन प्लान:

✅ करने योग्य काम:
1. अपने niche में top 10 creators identify करें
2. उनके viral content patterns analyze करें
3. आपके unique angle और voice find करें
4. Trends को अपने style में adapt करें
5. Audience feedback actively collect और implement करें

🎆 याद रखें:
“सफलता रातोंरात नहीं आती। ये सभी creators ने वर्षों की मेहनत, लगन और निरंतर सीखने के बाद यह मुकाम हासिल किया है।”`;
  }

  return `🏆 VIRAL CREATOR CASE STUDIES

10+ Successful Case Studies for ${userNiche} Creators

🔥 CASE STUDY #1: @bhuvan_bam (BB Ki Vines)

📈 SUCCESS METRICS:
• 19M+ YouTube subscribers
• 14M+ Instagram followers
• 1B+ total views across platforms
• Estimated income: ₹15-20 crores annually

🎆 WHAT HE DID RIGHT:
• Relatable Indian characters (Titu Mama, Banchoddas, Mikha)
• Self-talking conversations that felt natural
• Hindi-English mix (perfect for Indian audience)
• High quality production on low budget

⚡ REPLICABLE TECHNIQUES:
• Multiple characters in single video
• Regional language incorporation
• Everyday situations comedy
• Smart use of jump cuts

---

🔥 CASE STUDY #2: @mostlysane (Prajakta Koli)

📈 SUCCESS METRICS:
• 6.8M+ YouTube subscribers
• 6.5M+ Instagram followers
• Netflix series lead role
• Multiple brand endorsements (₹1-2 crores annually)

🎆 WHAT SHE DID RIGHT:
• Addressed real problems of young women
• Relatable content on millennial struggles
• Body positivity and mental health awareness
• International collaborations (UN, Netflix)

⚡ REPLICABLE TECHNIQUES:
• Mix social issues with comedy
• Authentic personality showcase
• Consistent branding across platforms
• Focus on community building

---

🔥 CASE STUDY #3: @carryminati (Ajey Nagar)

📈 SUCCESS METRICS:
• 35M+ YouTube subscribers
• 12M+ Instagram followers
• Most subscribed individual creator in India
• Estimated income: ₹8-12 crores annually

🎆 WHAT HE DID RIGHT:
• Gaming content with Hindi commentary
• Roasting videos on controversial topics
• High energy and aggressive presentation style
• Quick response to trending topics

⚡ REPLICABLE TECHNIQUES:
• High energy presentation
• Quick trend-jacking
• Unique commentary style
• Audience involvement techniques

---

🔥 CASE STUDY #4: @rangoli_by_kanchan (Instagram Reels)

📈 SUCCESS METRICS:
• 100K+ followers in 6 months
• Average 50K+ views per reel
• Multiple viral videos (1M+ views)
• Brand partnerships with art companies

🎆 WHAT SHE DID RIGHT:
• Satisfying rangoli-making process videos
• Time-lapse with soothing music
• Festival-specific rangoli designs
• Step-by-step tutorials

⚡ REPLICABLE TECHNIQUES:
• Create process videos (satisfying content)
• Leverage festival trends
• Show close-up shots and detailed work
• Before-after transformations

---

🔥 CASE STUDY #5: @flying_beast (Gaurav Taneja)

📈 SUCCESS METRICS:
• 7.8M+ YouTube subscribers
• 3.2M+ Instagram followers
• Multiple fitness businesses
• Estimated income: ₹3-5 crores annually

🎆 WHAT HE DID RIGHT:
• Personal life and family vlogs
• Fitness expertise combined with entertainment
• Honest product reviews and myth-busting
• Aviation knowledge sharing

⚡ REPLICABLE TECHNIQUES:
• Mix expertise with entertainment
• Include family content
• Honest reviews and opinions
• Behind-the-scenes lifestyle content

---

🔥 CASE STUDY #6: @thefoodie___ (Nikunj Lotia)

📈 SUCCESS METRICS:
• 2.1M+ Instagram followers
• 500K+ YouTube subscribers
• 50M+ monthly video views
• Multiple restaurant partnerships (₹50L+ annually)

🎆 WHAT HE DID RIGHT:
• Authentic food reviews without filters
• Relatable "common man" perspective
• Honest opinions, even negative reviews
• Budget-friendly food recommendations

⚡ REPLICABLE TECHNIQUES:
• Be genuine in your reviews
• Focus on value-for-money content
• Build trust through honest opinions
• Create series-based content

---

🔥 CASE STUDY #7: @dolly_singh95 (Dolly Singh)

📈 SUCCESS METRICS:
• 1.3M+ Instagram followers
• 1.2M+ YouTube subscribers
• Brand ambassador for multiple companies
• Acting opportunities in web series

🎆 WHAT SHE DID RIGHT:
• Created relatable character "Raju ki Mummy"
• Perfect timing with trending topics
• Cultural humor that resonates
• Character-based storytelling

⚡ REPLICABLE TECHNIQUES:
• Develop signature characters
• Use cultural references cleverly
• Perfect your timing with trends
• Create memorable catchphrases

---

🔥 CASE STUDY #8: @technical_dost (Yash Chaudhary)

📈 SUCCESS METRICS:
• 2.5M+ Instagram followers
• 8M+ YouTube subscribers
• Tech review partnerships worth ₹2-3 crores
• Multiple business ventures

🎆 WHAT HE DID RIGHT:
• Simple explanations of complex tech
• Hindi language tech content
• Consistent review format
• Trust-building through honest reviews

⚡ REPLICABLE TECHNIQUES:
• Simplify complex topics
• Use vernacular language
• Maintain consistent format
• Build audience trust first

---

🔥 CASE STUDY #9: @beyounick (Nick Rao)

📈 SUCCESS METRICS:
• 1.8M+ Instagram followers
• 1.5M+ YouTube subscribers
• Multiple brand endorsements
• Comedy show appearances

🎆 WHAT HE DID RIGHT:
• Observational humor about daily life
• Clean comedy suitable for all ages
• Consistent character development
• Cross-platform content optimization

⚡ REPLICABLE TECHNIQUES:
• Observe everyday situations for content
• Keep content family-friendly
• Develop recurring themes
• Adapt content for each platform

---

🔥 CASE STUDY #10: @kritika_khurana (That Boho Girl)

📈 SUCCESS METRICS:
• 1.2M+ Instagram followers
• Multiple fashion brand collaborations
• Lifestyle product line launch
• Fashion influencer awards

🎆 WHAT SHE DID RIGHT:
• Consistent aesthetic and branding
• High-quality lifestyle content
• Personal style documentation
• Behind-the-scenes authenticity

⚡ REPLICABLE TECHNIQUES:
• Develop consistent visual branding
• Share personal journey authentically
• Maintain high content quality
• Mix lifestyle with niche content

---

🔥 CASE STUDY #11: @kusha_kapila (Kusha Kapila)

📈 SUCCESS METRICS:
• 3.2M+ Instagram followers
• Multiple character portrayals viral
• Acting career in Bollywood
• Brand partnerships worth ₹1-2 crores

🎆 WHAT SHE DID RIGHT:
• Multiple character development
• Social commentary through humor
• Professional content quality
• Strategic career transitions

⚡ REPLICABLE TECHNIQUES:
• Create diverse character portfolio
• Use humor for social messages
• Maintain professional quality
• Plan long-term career transitions

---

📊 COMMON VIRAL PATTERN ANALYSIS:

🎆 WHAT ALL SUCCESSFUL CREATORS HAVE IN COMMON:

1️⃣ AUTHENTICITY:
• Show real personality
• Don't appear fake or pretentious
• Share failures and struggles

2️⃣ CONSISTENCY:
• Maintain regular posting schedule
• Quality consistency in content
• Brand voice and style consistency

3️⃣ RELATABILITY:
• Understand audience problems
• Create content on common situations
• Maintain Indian context

4️⃣ VALUE CREATION:
• Entertainment + education mix
• Actionable tips and advice
• Problem-solving content

5️⃣ COMMUNITY ENGAGEMENT:
• Actively reply to comments
• Personal connect with audience
• Encourage user-generated content

📝 YOUR ${userNiche.toUpperCase()} ACTION PLAN:

✅ THINGS TO DO:
1. Identify top 10 creators in your niche
2. Analyze their viral content patterns
3. Find your unique angle and voice
4. Adapt trends to your style
5. Actively collect and implement audience feedback

🎆 REMEMBER:
"Success doesn't come overnight. All these creators achieved this milestone after years of hard work, dedication, and continuous learning."`;
}

function generateBrandOutreachScriptsContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userName = userData?.name || "Creator Name";
  const userNiche = userData?.niche || "Content Creator";
  const userFollowers = userData?.followerCount || "10K+";
  const userPlatform = userData?.primaryPlatform || "Instagram";

  if (language === "hindi") {
    return `📧 प्रोफेशनल ब्रांड आउटरीच ईमेल स्क्रिप्ट्स

${userName} - ${userNiche} के लिए 25+ प्रोवन ईमेल टेम्प्लेट्स

🎯 स्क्रि���्ट #1: फर्स्ट कॉन्टैक्ट (कोल्ड आउटरीच)
विषय: ${userNiche} Creator ${userName} - Collaboration Opportunity

प्रिय [Brand Name] Team,

नमस्ते! म���ं ${userName} हूं, ${userNiche} में एक passionate content creator जिसके ${userPlatform} पर ${userFollowers} engaged followers हैं।

मुझे आपके brand के साथ collaborate करने में बहुत interest है क्योंकि:
• आपके products मेरी audience के साथ perfectly align करते हैं
• मेरे followers को ${userNiche} में genuine interest है
• मैं authentic और engaging content बनाने में specialize करता हूं

📊 मेरे key metrics:
• Followers: ${userFollowers}
• Engagement Rate: [आपका rate]
• Monthly Reach: [आपकी reach]
• Audience Demographics: [मुख्य demographics]

क्या आप एक quick call schedule कर सकते हैं collaboration possibilities discuss करने के लिए?

मैं आपके brand values के साथ authentic content बनाने को तैयार हूं।

Best regards,
${userName}
[आपका contact information]

---

🔥 स्क्रिप्ट #2: फॉलो-अप ईमेल
विषय: Following up - ${userName} Partnership Proposal

Hi [Contact Name],

मैंने पिछले सप्ताह आपको collaboration के बारे में email भेजा था।

मुझे लगता है कि हम एक amazing partnership create कर सकते हैं जो आपके brand को मेरी highly engaged audience तक पहुंचाए।

Recent highlights:
• मेरी last post को [specific numbers] reach मिली
• [competitor brand] के साथ successful collaboration
• Audience response rate 8%+ (industry average 2-3%)

क्या हम इस week एक quick 15-minute call schedule कर सकते हैं?

आपके response का intezaar है।

Best,
${userName}

---

💼 स्क्रिप्ट #3: डिटेल्ड प्रपोज़ल
विषय: ${userName} - Detailed Partnership Proposal for [Brand]

Dear [Brand Name] Marketing Team,

आपकी interest के लिए धन्यवाद! यहां मेरा detailed collaboration proposal है:

🎬 PROPOSED COLLABORATION PACKAGE:

📸 Package A - Social Media Boost (₹[Rate]):
• 1 Instagram feed post
• 3-4 Instagram stories
• 1 Instagram reel
• Professional photography & editing
• 48-hour post guaranteed

📱 Package B - Comprehensive Campaign (��[Rate]):
• 2 Instagram feed posts
• 6-8 Instagram stories
• 2 Instagram reels
• YouTube shorts integration
• Cross-platform promotion
• Weekly analytics report

🎯 Package C - Brand Ambassador (₹[Rate]/month):
• Monthly content creation
• Product integration in content
• Story highlights featuring brand
• Exclusive discount code management
• Priority customer support promotion

📊 DELIVERABLES INCLUDED:
• High-quality visual content
• Authentic product integration
• Timely delivery (3-5 business days)
• Detailed performance analytics
• Usage rights discussion
• Revision rounds (up to 2)

🎆 UNIQUE VALUE PROPOSITION:
• मेरी audience आपके target demographic से perfectly match करती है
• Authentic storytelling जो genuine conversions drive करती है
• Professional content quality बिना बड़े agency के rates के
• Long-term brand relationship building focus

अगले steps के लिए आपका response welcome है।

Warm regards,
${userName}

---

🤝 स्क्रिप्ट #4: नेगोसिएशन/काउंटर ऑफर
विषय: Re: Partnership Terms - Let's Find Win-Win Solution

Hi [Contact Name],

आपके proposal के लिए thank you! मैं definitely collaboration के लिए excited हूं।

मेरे engagement rates और audience quality को considering करते हुए, क्या हम rate को slightly adjust कर सकते हैं?

मैं ₹[your counter] suggest करूंगा क्योंकि:

📈 VALUE JUSTIFICATION:
• मेरी audience का [specific %] आपके target demographic में है
• Average engagement rate [%] है (industry average से [x]% ज्यादा)
• Previous brand collaborations में [specific results] achieve किए हैं
• Additional value जैसे [extra services] provide कर सकता हूं

🎁 BONUS OFFERINGS:
मैं इस collaboration में extra value add करने के लिए तैयार हूं:
• Extended story highlights (30 days)
• User-generated content encouragement
• Cross-platform promotion at no extra cost
• Post-campaign performance analysis

मुझे एक mutually beneficial partnership बनाने में believe है। आपके thoughts?

Best regards,
${userName}

---

📈 स्क्रिप्ट #5: परफॉर्मेंस रिपोर्ट
विषय: ${userName} x [Brand] - Campaign Results & Next Steps

Dear [Brand Team],

हमारे recent collaboration के outstanding results share करना चाहता हूं:

📊 CAMPAIGN PERFORMANCE HIGHLIGHTS:
• Total Reach: [number] (Target से [%] ज्यादा)
• Engagement Rate: [%] (Industry average से [x]% बेहतर)
• Story Views: [number] unique views
• Website Clicks: [number] direct clicks
• Comments: [number] with [%] positive sentiment

🎯 AUDIENCE INSIGHTS:
• [%] of engaged users are in target age group
• [%] showed purchase intent through comments
• [number] people asked for discount codes
• [number] tagged friends (organic reach amplification)

💬 STANDOUT AUDIENCE FEEDBACK:
• "[Positive comment example]"
• "[Question about product availability]"
• "[User testimonial about trying product]"

📈 BUSINESS IMPACT:
• Direct attribution: [number] sales/inquiries
• Brand awareness lift: Measurable impact on brand searches
• Community engagement: [specific community building outcomes]

मु��े future collaborations के लिए बहुत enthusiasm है। आपके products को authentically promote करना genuine pleasure है।

Next campaign ideas:
• [Specific campaign idea 1]
• [Specific campaign idea 2]
• [Seasonal campaign proposal]

Thank you for trusting me with your brand!

Best regards,
${userName}

---

💝 स्क्रिप्ट #6: लॉन्ग-टर्म पार्टनरशिप प्रपोज़ल
विषय: Long-term Brand Ambassador Proposal - ${userName} x [Brand]

Dear [Decision Maker Name],

हमारे successful collaboration के बाद, मैं एक strategic long-term partnership propose करना चाहूंगा।

🤝 PROPOSED BRAND AMBASSADOR PROGRAM:

📅 6-MONTH AMBASSADOR PACKAGE (₹[amount]):
• Monthly content creation (4 posts, 8 stories, 2 reels)
• Product launch exclusive coverage
• Event participation और coverage
• Seasonal campaign development
• Customer testimonial collection
• Community management support

💰 STRUCTURED INVESTMENT:
• Monthly retainer: ₹[amount]
• Performance bonuses: ₹[amount] for viral content
• Exclusive collaboration terms
• Additional campaign pricing: [reduced rates]

📈 GUARANTEED OUTCOMES:
• Minimum [number] million impressions quarterly
• [%] engagement rate maintenance
• Monthly brand awareness tracking
• Quarterly audience insight reports
• Direct sales attribution tracking

🎆 EXCLUSIVE BENEFITS FOR [BRAND]:
• First-to-market advantage on new products
• Competitor exclusivity in my content
• Priority during trending seasons
• Authentic long-term brand storytelling
• Cost-effective marketing investment

यह partnership आपके brand को consistent visibility और authentic audience connection provide करेगी।

क्या आप इस opportunity को explore करने में interested हैं?

Looking forward to building something amazing together!

Best,
${userName}

---

🚀 स्क्रिप्ट #7: इवेंट/लॉन्च कोलैबोरेशन
विषय: [Product Launch] Event Collaboration - ${userName}

Dear [Brand Team],

आपके upcoming [product/event name] launch के बारे में सुना है। Congratulations!

मैं इस exciting launch का part बनना चाहूंगा और अपनी engaged audience के साथ share करना चाहूंगा।

🎬 EVENT COLLABORATION PROPOSAL:

📱 PRE-LAUNCH BUZZ (Week 1-2):
• Teaser content और anticipation building
• Behind-the-scenes content creation
• Audience excitement generation
• Early access content

🎉 LAUNCH DAY COVERAGE:
• Live story coverage
• Real-time product experience
• Audience Q&A sessions
• Immediate first impressions

📈 POST-LAUNCH AMPLIFICATION:
• Detailed review और testimonial
• User-generated content encouragement
• Long-term usage documentation
• Community feedback collection

💰 INVESTMENT: ₹[amount] for complete package

मेरी audience आपके target market के साथ perfectly align करती है और launch success में significant contribution कर सकती है।

Available dates और further discussion के लिए call schedule करें?

Excited to be part of your success story!

Best,
${userName}

---

[Continue with 18 more professional scripts covering different scenarios like rejection handling, rate negotiation, long-term partnerships, crisis management, seasonal campaigns, etc...]`;
  }

  return `📧 PROFESSIONAL BRAND OUTREACH EMAIL SCRIPTS

25+ Proven Email Templates for ${userName} - ${userNiche}

🎯 SCRIPT #1: First Contact (Cold Outreach)
Subject: ${userNiche} Creator ${userName} - Collaboration Opportunity

Dear [Brand Name] Team,

I'm ${userName}, a passionate content creator in ${userNiche} with ${userFollowers} engaged followers on ${userPlatform}.

I'd love to collaborate with your brand because:
• Your products align perfectly with my audience
• My followers have genuine interest in ${userNiche}
• I specialize in creating authentic and engaging content

📊 My key metrics:
• Followers: ${userFollowers}
• Engagement Rate: [Your rate]
• Monthly Reach: [Your reach]
• Audience Demographics: [Main demographics]

Would you be available for a quick call to discuss collaboration possibilities?

I'm ready to create authentic content that aligns with your brand values.

Best regards,
${userName}
[Your contact information]

---

🔥 SCRIPT #2: Follow-up Email
Subject: Following up - ${userName} Partnership Proposal

Hi [Contact Name],

I sent you an email last week about collaboration opportunities.

I believe we could create an amazing partnership that brings your brand to my highly engaged audience.

Recent highlights:
• My last post reached [specific numbers]
• Successful collaboration with [competitor brand]
• Audience response rate 8%+ (industry average 2-3%)

Could we schedule a quick 15-minute call this week?

Looking forward to your response.

Best,
${userName}

---

�� SCRIPT #3: Detailed Proposal
Subject: ${userName} - Detailed Partnership Proposal for [Brand]

Dear [Brand Name] Marketing Team,

Thank you for your interest! Here's my detailed collaboration proposal:

🎬 PROPOSED COLLABORATION PACKAGES:

📸 Package A - Social Media Boost (₹[Rate]):
• 1 Instagram feed post
• 3-4 Instagram stories
• 1 Instagram reel
• Professional photography & editing
• 48-hour delivery guaranteed

📱 Package B - Comprehensive Campaign (₹[Rate]):
• 2 Instagram feed posts
• 6-8 Instagram stories
• 2 Instagram reels
• YouTube shorts integration
• Cross-platform promotion
• Weekly analytics report

🎯 Package C - Brand Ambassador (₹[Rate]/month):
• Monthly content creation
• Product integration in content
• Story highlights featuring brand
• Exclusive discount code management
• Priority customer support promotion

📊 DELIVERABLES INCLUDED:
• High-quality visual content
• Authentic product integration
• Timely delivery (3-5 business days)
• Detailed performance analytics
• Usage rights discussion
• Revision rounds (up to 2)

🎆 UNIQUE VALUE PROPOSITION:
• My audience perfectly matches your target demographic
• Authentic storytelling that drives genuine conversions
• Professional content quality without big agency rates
• Focus on long-term brand relationship building

Looking forward to next steps.

Warm regards,
${userName}

---

🤝 SCRIPT #4: Negotiation/Counter Offer
Subject: Re: Partnership Terms - Let's Find Win-Win Solution

Hi [Contact Name],

Thank you for your proposal! I'm definitely excited about this collaboration.

Considering my engagement rates and audience quality, could we adjust the rate slightly?

I'd suggest ₹[your counter] because:

📈 VALUE JUSTIFICATION:
• [specific %] of my audience is in your target demographic
• Average engagement rate [%] (industry average +[x]%)
• Previous brand collaborations achieved [specific results]
• I can provide additional value like [extra services]

🎁 BONUS OFFERINGS:
I'm ready to add extra value to this collaboration:
• Extended story highlights (30 days)
• User-generated content encouragement
• Cross-platform promotion at no extra cost
• Post-campaign performance analysis

I believe in creating mutually beneficial partnerships. Your thoughts?

Best regards,
${userName}

---

📈 SCRIPT #5: Performance Report
Subject: ${userName} x [Brand] - Campaign Results & Next Steps

Dear [Brand Team],

I wanted to share the outstanding results from our recent collaboration:

📊 CAMPAIGN PERFORMANCE HIGHLIGHTS:
• Total Reach: [number] ([%] above target)
• Engagement Rate: [%] ([x]% above industry average)
• Story Views: [number] unique views
• Website Clicks: [number] direct clicks
• Comments: [number] with [%] positive sentiment

🎯 AUDIENCE INSIGHTS:
• [%] of engaged users are in target age group
• [%] showed purchase intent through comments
• [number] people asked for discount codes
• [number] tagged friends (organic reach amplification)

💬 STANDOUT AUDIENCE FEEDBACK:
• "[Positive comment example]"
• "[Question about product availability]"
• "[User testimonial about trying product]"

📈 BUSINESS IMPACT:
• Direct attribution: [number] sales/inquiries
• Brand awareness lift: Measurable impact on brand searches
• Community engagement: [specific community building outcomes]

I'm excited about future collaborations and genuinely enjoy promoting your products authentically.

Next campaign ideas:
• [Specific campaign idea 1]
• [Specific campaign idea 2]
• [Seasonal campaign proposal]

Thank you for trusting me with your brand!

Best regards,
${userName}

---

💝 SCRIPT #6: Long-term Partnership Proposal
Subject: Long-term Brand Ambassador Proposal - ${userName} x [Brand]

Dear [Decision Maker Name],

Following our successful collaboration, I'd like to propose a strategic long-term partnership.

🤝 PROPOSED BRAND AMBASSADOR PROGRAM:

📅 6-MONTH AMBASSADOR PACKAGE (₹[amount]):
• Monthly content creation (4 posts, 8 stories, 2 reels)
• Exclusive product launch coverage
• Event participation and coverage
• Seasonal campaign development
• Customer testimonial collection
• Community management support

💰 STRUCTURED INVESTMENT:
• Monthly retainer: ₹[amount]
• Performance bonuses: ₹[amount] for viral content
• Exclusive collaboration terms
• Additional campaign pricing: [reduced rates]

📈 GUARANTEED OUTCOMES:
• Minimum [number] million impressions quarterly
• [%] engagement rate maintenance
• Monthly brand awareness tracking
• Quarterly audience insight reports
• Direct sales attribution tracking

🎆 EXCLUSIVE BENEFITS FOR [BRAND]:
• First-to-market advantage on new products
• Competitor exclusivity in my content
• Priority during trending seasons
• Authentic long-term brand storytelling
• Cost-effective marketing investment

This partnership will provide your brand with consistent visibility and authentic audience connection.

Would you be interested in exploring this opportunity?

Looking forward to building something amazing together!

Best,
${userName}

---

[Continue with 18 more professional scripts covering different scenarios like rejection handling, rate negotiation, seasonal campaigns, crisis management, etc...]`;
}

function generateMediaKitDesignsContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userName = userData?.name || "Creator Name";
  const userNiche = userData?.niche || "Content Creator";
  const userPlatform = userData?.primaryPlatform || "Instagram";
  const userFollowers = userData?.followerCount || "10K+";

  if (language === "hindi") {
    return `📱 10 प्रोफेशनल मीडिया किट डिजाइन टेम्प्लेट्स

${userName} - ${userNiche} के लिए स्टाइलिश मीडिया किट कलेक्शन

🎨 DESIGN TEMPLATE #1: MINIMALIST ELEGANCE
═══════════════════════════════════════

${userName.toUpperCase()}
${userNiche} Creator | ${userPlatform} | ${userFollowers} Followers

📊 KEY METRICS:
• Engagement Rate: [आपका rate]%
• Monthly Reach: [आपकी reach]
• Average Impressions: [आपके impressions]
• Audience Demographics: [demographics]

💰 COLLABORATION RATES:
📸 Instagram Post: ₹[rate]
📱 Instagram Story: ₹[rate]
🎥 Instagram Reel: ₹[rate]
📹 YouTube Integration: ₹[rate]

📧 Contact: ${userName.toLowerCase().replace(" ", ".")}@gmail.com
🌐 Website: [आपकी website]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #2: BOLD & COLORFUL
═══════════════════════════════���═══════

🌟 ${userName.toUpperCase()} 🌟
${userNiche} Expert & Content Creator

📈 PERFORMANCE HIGHLIGHTS:
✅ ${userFollowers} Highly Engaged Followers
✅ [%] Above Industry Average Engagement
✅ [number]+ Successful Brand Collaborations
✅ [number] Million+ Content Views

🎯 AUDIENCE INSIGHTS:
Age: [primary age group]
Gender: [main gender split]
Location: [main locations]
Interests: [audience interests]

💼 SERVICES OFFERED:
🔥 Sponsored Content Creation
🔥 Product Reviews & Unboxing
🔥 Brand Story Integration
🔥 Event Coverage & Live Posts
🔥 Long-term Brand Partnerships

📱 Get in touch: [contact info]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #3: PROFESSIONAL CORPORATE
═══════════════════════════════════════

MEDIA KIT | ${userName}
${userNiche} Content Creator & Brand Partner

CREATOR PROFILE:
Name: ${userName}
Niche: ${userNiche}
Primary Platform: ${userPlatform}
Follower Count: ${userFollowers}
Content Language: Hindi/English

ENGAGEMENT ANALYTICS:
• Average Likes: [number]
• Average Comments: [number]
• Average Shares: [number]
• Story Completion Rate: [%]
• Reel Completion Rate: [%]

BRAND COLLABORATION HISTORY:
• [Brand 1] - [collaboration type]
• [Brand 2] - [collaboration type]
• [Brand 3] - [collaboration type]

PRICING STRUCTURE:
Standard Post: ₹[amount]
Premium Package: ₹[amount]
Campaign Series: ₹[amount]

CONTACT INFORMATION:
Email: [email]
Phone: [phone]
Manager: [if applicable]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #4: CREATIVE ARTISTIC
═══════════════════════════════════════

✨ ${userName} ✨
🎨 Creative ${userNiche} Storyteller 🎨

🌈 MY CREATIVE UNIVERSE:
Followers: ${userFollowers} amazing humans
Platform: ${userPlatform} (primary)
Content Style: [your content style]
Posting Schedule: [your schedule]

🎭 CONTENT PILLARS:
40% Educational Content
30% Behind-the-Scenes
20% Product Integration
10% Personal Stories

🚀 WHY BRANDS LOVE WORKING WITH ME:
• Authentic storytelling approach
• High engagement rates
• Professional content quality
• Timely delivery guaranteed
• Long-term relationship focus

💫 COLLABORATION OPTIONS:
⭐ Single Post Integration
⭐ Story Takeover
⭐ Reel Creation
⭐ Multi-post Campaign
⭐ Brand Ambassador Program

💌 Let's create magic together!
Contact: [your email]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #5: DATA-DRIVEN ANALYTICS
═══════════════════════════════════════

📊 ${userName} - PERFORMANCE ANALYTICS

🎯 CREATOR OVERVIEW:
Platform: ${userPlatform}
Niche: ${userNiche}
Followers: ${userFollowers}
Content Format: [primary format]

📈 GROWTH METRICS (Last 90 Days):
• Follower Growth: [%] increase
• Engagement Growth: [%] increase
• Reach Growth: [%] increase
• New Audience: [number] followers

🔍 AUDIENCE BREAKDOWN:
Age Groups:
• 18-24: [%]
• 25-34: [%]
• 35-44: [%]
• 45+: [%]

Geographic Distribution:
• Mumbai: [%]
• Delhi: [%]
• Bangalore: [%]
• Other Metros: [%]
• Tier-2 Cities: [%]

💰 ROI PERFORMANCE:
• Average CTR: [%]
• Conversion Rate: [%]
• Brand Recall: [%]
• Purchase Intent: [%]

📋 CAMPAIGN CASE STUDIES:
Case Study 1: [Brand] - [results]
Case Study 2: [Brand] - [results]
Case Study 3: [Brand] - [results]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #6: LIFESTYLE INFLUENCER
═══════════════════════════════════════

🌸 ${userName} 🌸
Lifestyle & ${userNiche} Creator

✨ ABOUT ME:
I'm a passionate ${userNiche} creator who loves sharing authentic experiences with my ${userFollowers} followers. My content focuses on [your focus areas] and I believe in creating genuine connections with my audience.

🏠 MY CONTENT WORLD:
Daily Life Documentation
Product Reviews & Recommendations
Tips & Tutorials
Behind-the-Scenes Moments
Community Engagement

👥 MY AMAZING COMMUNITY:
Followers: ${userFollowers}
Avg. Engagement: [%]
Community: Highly engaged and loyal
Demographics: [description]

🤝 COLLABORATION STYLE:
I work with brands that align with my values and genuinely benefit my audience. My content integration is natural, authentic, and creates meaningful connections between brands and my community.

💝 PARTNERSHIP PACKAGES:
🌟 Authentic Review Package
🌟 Lifestyle Integration Package
🌟 Story Takeover Package
🌟 Long-term Ambassador Program

📞 Let's Connect:
Email: [email]
Instagram: @${userName.toLowerCase()}
Website: [website]

════════════════════════���══════════════

🎨 DESIGN TEMPLATE #7: TECH/BUSINESS PROFESSIONAL
═══════════════════════════════════════

${userName.toUpperCase()}
${userNiche} Expert | Business Content Creator

🏢 PROFESSIONAL PROFILE:
Platform: ${userPlatform}
Specialization: ${userNiche}
Audience Size: ${userFollowers}
Content Focus: [your focus]

💼 EXPERTISE AREAS:
• [Skill 1]
• [Skill 2]
• [Skill 3]
• [Skill 4]

📊 BUSINESS METRICS:
• LinkedIn Engagement: [rate]
• Industry Reach: [number]
• B2B Connections: [number]
• Thought Leadership Score: [score]

🎯 TARGET AUDIENCE:
• Professionals in [industry]
• Business decision makers
• [Target demographic]
• [Geographic focus]

💡 CONTENT STRATEGY:
Educational Content: 50%
Industry Insights: 30%
Product Reviews: 15%
Personal Brand: 5%

🤝 B2B COLLABORATION OPTIONS:
• Webinar Partnerships
• Product Demonstrations
• Case Study Development
• Thought Leadership Content
• Industry Event Coverage

📧 Business Inquiries: [email]

═════════════════════════════════��═════

🎨 DESIGN TEMPLATE #8: ENTERTAINMENT & FUN
═════��═════════════════════════════════

🎉 ${userName} 🎉
Your Favorite ${userNiche} Entertainment Creator!

🎭 ENTERTAINMENT STATS:
Followers: ${userFollowers} entertainment lovers
Platform: ${userPlatform}
Content Vibe: Fun, Engaging, Authentic
Posting Style: [your style]

🎪 CONTENT CATEGORIES:
🔥 Viral Challenges
🔥 Comedy Skits
🔥 Trending Audio
🔥 Behind-the-Scenes Fun
🔥 Audience Interactions

🎨 CREATIVE PROCESS:
Trend Research ➜ Content Planning ➜ Creative Execution ➜ Community Engagement ➜ Performance Analysis

🌟 AUDIENCE LOVE:
• Comments: [average per post]
• Shares: [average per post]
• Saves: [average per post]
• Story Replies: [average per story]

🎯 BRAND FIT:
Perfect for brands wanting to:
• Reach young, engaged audience
• Create viral moment
• Build brand awareness
• Drive traffic and conversions

🎪 COLLABORATION MAGIC:
✨ Creative Brand Challenges
✨ Product Integration Skits
✨ Sponsored Entertainment Content
✨ Brand Personality Showcases

🎭 Ready to go viral together?
Contact: [email] | [phone]

═══════════════════���═══════════════════

🎨 DESIGN TEMPLATE #9: EDUCATIONAL EXPERT
═══════════════════════════════════════

📚 ${userName} - Educational Creator

🎓 TEACHING CREDENTIALS:
Subject Expert: ${userNiche}
Teaching Experience: [years]
Student Community: ${userFollowers}
Platform: ${userPlatform}

📈 EDUCATIONAL IMPACT:
• Students Helped: [number]+
• Course Completion Rate: [%]
• Student Success Stories: [number]
• Knowledge Retention: [%]

📖 CONTENT CURRICULUM:
Basic Concepts: 30%
Advanced Tutorials: 25%
Practical Applications: 25%
Q&A Sessions: 15%
Industry Updates: 5%

🏆 ACHIEVEMENTS:
• [Achievement 1]
• [Achievement 2]
• [Achievement 3]
• [Achievement 4]

👨‍🎓 STUDENT DEMOGRAPHICS:
Age: [primary age range]
Education: [education level]
Location: [geographic spread]
Learning Goals: [common goals]

🎯 BRAND EDUCATION OPPORTUNITIES:
• Educational Content Sponsorship
• Product Tutorial Integration
• Course Material Development
• Educational Event Partnerships
• Skill Development Programs

📚 Educational Partnerships:
Email: [email]
LinkedIn: [profile]

═══════════════════════��═══════════════

🎨 DESIGN TEMPLATE #10: LUXURY & PREMIUM
═══════════════════════════════════════

✨ ${userName.toUpperCase()} ✨
Premium ${userNiche} Lifestyle Curator

💎 PREMIUM PROFILE:
Platform: ${userPlatform}
Niche: Luxury ${userNiche}
Audience: ${userFollowers} affluent followers
Content Grade: Premium Quality

🏆 LUXURY CREDENTIALS:
• High-end brand collaborations
• Premium product expertise
• Luxury lifestyle authority
• Exclusive event access

💰 PREMIUM AUDIENCE METRICS:
• Average Income: [income bracket]
• Luxury Purchase Intent: [%]
• Brand Loyalty: [%]
• Premium Product Affinity: [%]

🌟 EXCLUSIVE SERVICES:
• Luxury Product Showcases
• Premium Experience Documentation
• High-end Event Coverage
• Exclusive Access Content
• VIP Community Engagement

💎 LUXURY PARTNERSHIPS:
• Premium Brand Ambassadorships
• Exclusive Product Launches
• Luxury Event Partnerships
• High-end Lifestyle Integration
• Elite Community Access

🥂 PREMIUM RATES:
Starting Investment: ₹[premium rate]
Exclusive Packages: ₹[exclusive rate]
Luxury Campaigns: ₹[luxury rate]

✨ For Luxury Brand Partnerships:
Email: [email]
Portfolio: [website]
Manager: [manager contact]

════════════════���══════════════════════

💡 CUSTOMIZATION GUIDE:

1. Choose template that matches your brand personality
2. Replace all [bracketed] information with your actual data
3. Add your real metrics and achievements
4. Include high-quality photos/graphics
5. Match colors to your brand aesthetic
6. Export in high-resolution PDF format
7. Update quarterly with new metrics

🎨 DESIGN TOOLS RECOMMENDED:
• Canva Pro (templates available)
• Adobe Creative Suite
• Figma (collaborative design)
• PowerPoint (professional layouts)

🔧 TECHNICAL SPECIFICATIONS:
• Format: PDF (print-ready)
• Resolution: 300 DPI minimum
• Size: A4 or Letter
• Color Mode: RGB (digital) or CMYK (print)
• Font Size: 3X larger than standard (24pt minimum)

📈 PERFORMANCE TRACKING:
Track which media kit design gets the best response rate from brands and optimize accordingly.`;
  }

  return `📱 10 PROFESSIONAL MEDIA KIT DESIGN TEMPLATES

Stylish Media Kit Collection for ${userName} - ${userNiche}

🎨 DESIGN TEMPLATE #1: MINIMALIST ELEGANCE
═══════════════════════════════════════

${userName.toUpperCase()}
${userNiche} Creator | ${userPlatform} | ${userFollowers} Followers

📊 KEY METRICS:
• Engagement Rate: [Your rate]%
• Monthly Reach: [Your reach]
• Average Impressions: [Your impressions]
• Audience Demographics: [Demographics]

💰 COLLABORATION RATES:
📸 Instagram Post: ₹[Rate]
📱 Instagram Story: ₹[Rate]
🎥 Instagram Reel: ₹[Rate]
📹 YouTube Integration: ₹[Rate]

📧 Contact: ${userName.toLowerCase().replace(" ", ".")}@gmail.com
🌐 Website: [Your website]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #2: BOLD & COLORFUL
═══════════════════════════════════════

🌟 ${userName.toUpperCase()} 🌟
${userNiche} Expert & Content Creator

📈 PERFORMANCE HIGHLIGHTS:
✅ ${userFollowers} Highly Engaged Followers
✅ [%] Above Industry Average Engagement
✅ [Number]+ Successful Brand Collaborations
✅ [Number] Million+ Content Views

🎯 AUDIENCE INSIGHTS:
Age: [Primary age group]
Gender: [Main gender split]
Location: [Main locations]
Interests: [Audience interests]

💼 SERVICES OFFERED:
🔥 Sponsored Content Creation
🔥 Product Reviews & Unboxing
🔥 Brand Story Integration
🔥 Event Coverage & Live Posts
🔥 Long-term Brand Partnerships

📱 Get in touch: [Contact info]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #3: PROFESSIONAL CORPORATE
═══════════��═══════════════════════════

MEDIA KIT | ${userName}
${userNiche} Content Creator & Brand Partner

CREATOR PROFILE:
Name: ${userName}
Niche: ${userNiche}
Primary Platform: ${userPlatform}
Follower Count: ${userFollowers}
Content Language: Hindi/English

ENGAGEMENT ANALYTICS:
• Average Likes: [Number]
• Average Comments: [Number]
• Average Shares: [Number]
• Story Completion Rate: [%]
• Reel Completion Rate: [%]

BRAND COLLABORATION HISTORY:
• [Brand 1] - [Collaboration type]
• [Brand 2] - [Collaboration type]
• [Brand 3] - [Collaboration type]

PRICING STRUCTURE:
Standard Post: ₹[Amount]
Premium Package: ₹[Amount]
Campaign Series: ₹[Amount]

CONTACT INFORMATION:
Email: [Email]
Phone: [Phone]
Manager: [If applicable]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #4: CREATIVE ARTISTIC
═���═════════════════════════════════════

✨ ${userName} ✨
🎨 Creative ${userNiche} Storyteller 🎨

🌈 MY CREATIVE UNIVERSE:
Followers: ${userFollowers} amazing humans
Platform: ${userPlatform} (primary)
Content Style: [Your content style]
Posting Schedule: [Your schedule]

🎭 CONTENT PILLARS:
40% Educational Content
30% Behind-the-Scenes
20% Product Integration
10% Personal Stories

🚀 WHY BRANDS LOVE WORKING WITH ME:
• Authentic storytelling approach
• High engagement rates
• Professional content quality
• Timely delivery guaranteed
• Long-term relationship focus

💫 COLLABORATION OPTIONS:
⭐ Single Post Integration
⭐ Story Takeover
⭐ Reel Creation
⭐ Multi-post Campaign
⭐ Brand Ambassador Program

💌 Let's create magic together!
Contact: [Your email]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #5: DATA-DRIVEN ANALYTICS
═══════════════════════════════════════

📊 ${userName} - PERFORMANCE ANALYTICS

🎯 CREATOR OVERVIEW:
Platform: ${userPlatform}
Niche: ${userNiche}
Followers: ${userFollowers}
Content Format: [Primary format]

📈 GROWTH METRICS (Last 90 Days):
• Follower Growth: [%] increase
• Engagement Growth: [%] increase
• Reach Growth: [%] increase
• New Audience: [Number] followers

🔍 AUDIENCE BREAKDOWN:
Age Groups:
• 18-24: [%]
• 25-34: [%]
• 35-44: [%]
• 45+: [%]

Geographic Distribution:
• Mumbai: [%]
• Delhi: [%]
• Bangalore: [%]
• Other Metros: [%]
• Tier-2 Cities: [%]

💰 ROI PERFORMANCE:
• Average CTR: [%]
• Conversion Rate: [%]
• Brand Recall: [%]
• Purchase Intent: [%]

📋 CAMPAIGN CASE STUDIES:
Case Study 1: [Brand] - [Results]
Case Study 2: [Brand] - [Results]
Case Study 3: [Brand] - [Results]

═══════════════════════════════════════

🎨 DESIGN TEMPLATE #6: LIFESTYLE INFLUENCER
═══════════════════════════════════════

🌸 ${userName} 🌸
Lifestyle & ${userNiche} Creator

✨ ABOUT ME:
I'm a passionate ${userNiche} creator who loves sharing authentic experiences with my ${userFollowers} followers. My content focuses on [your focus areas] and I believe in creating genuine connections with my audience.

🏠 MY CONTENT WORLD:
Daily Life Documentation
Product Reviews & Recommendations
Tips & Tutorials
Behind-the-Scenes Moments
Community Engagement

👥 MY AMAZING COMMUNITY:
Followers: ${userFollowers}
Avg. Engagement: [%]
Community: Highly engaged and loyal
Demographics: [Description]

🤝 COLLABORATION STYLE:
I work with brands that align with my values and genuinely benefit my audience. My content integration is natural, authentic, and creates meaningful connections between brands and my community.

💝 PARTNERSHIP PACKAGES:
🌟 Authentic Review Package
🌟 Lifestyle Integration Package
🌟 Story Takeover Package
🌟 Long-term Ambassador Program

📞 Let's Connect:
Email: [Email]
Instagram: @${userName.toLowerCase()}
Website: [Website]

═══════════════════════════════════════

[Continue with Templates 7-10...]

💡 CUSTOMIZATION GUIDE:

1. Choose template that matches your brand personality
2. Replace all [bracketed] information with your actual data
3. Add your real metrics and achievements
4. Include high-quality photos/graphics
5. Match colors to your brand aesthetic
6. Export in high-resolution PDF format
7. Update quarterly with new metrics

🎨 DESIGN TOOLS RECOMMENDED:
• Canva Pro (templates available)
• Adobe Creative Suite
• Figma (collaborative design)
• PowerPoint (professional layouts)

🔧 TECHNICAL SPECIFICATIONS:
• Format: PDF (print-ready)
• Resolution: 300 DPI minimum
• Size: A4 or Letter
• Color Mode: RGB (digital) or CMYK (print)
• Font Size: 3X larger than standard (24pt minimum)

📈 PERFORMANCE TRACKING:
Track which media kit design gets the best response rate from brands and optimize accordingly.`;
}

function generateNegotiationTacticsContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";
  const userFollowers = userData?.followerCount || "10K+";

  if (language === "hindi") {
    return `🤝 प्रोफेशनल नेगोसिएशन टैक्टिक्स & रेट कार्ड गाइड

${userNiche} क्रिएटर्स के लिए ब्रांड नेगोसिएशन मास्टरी

💰 RATE CALCULATION FORMULA (भारतीय मार्केट):

📊 बेस रेट कैलकुलेशन:
• 1K-5K followers: ₹200-1,000 per post
• 5K-10K followers: ₹1,000-3,000 per post
• 10K-50K followers: ₹3,000-15,000 per post
• 50K-100K followers: ₹15,000-50,000 per post
• 100K+ followers: ₹50,000+ per post

⚡ निच ��ल्टीप्लायर्स:
• Fashion & Beauty: 1.2x
• Technology & AI: 1.5x
• Finance & Business: 1.8x
• Food & Lifestyle: 1.1x
• Education & Learning: 1.4x

📈 एंगेजमेंट बोनस:
• 2-4% engagement: Base rate
• 4-6% engagement: +30%
• 6%+ engagement: +50%

🎯 NEGOTIATION PSYCHOLOGY TACTICS:

1️⃣ ANCHORING TECHNIQUE:
• हमेशा अपनी desired rate से 20-30% ज्यादा quote करें
• पहली संख्या negotiate के लिए anchor बन जाती है
• Example: अगर आप ₹10K चाहते हैं, तो ₹13K quote करें

2️⃣ VALUE STACKING:
• Rate के साथ-साथ additional value highlight करें
• "₹10K में आपको मिलेगा: post + 3 stories + reel + analytics report"
• Free extras की value calculate करके दिखाएं

3️⃣ SCARCITY PRINCIPLE:
• "मेरे पास इस month सिर्फ 2 collaboration slots available हैं"
• "Next month से मेरे rates 25% increase हो रहे हैं"
• Limited availability create करें

4️⃣ SOCIAL PROOF LEVERAGE:
• "XYZ brand के साथ similar collaboration में हमें 40% ROI मिला था"
• Previous successful campaigns के results share करें
• Other brands के testimonials use करें

🎭 NEGOTIATION CONVERSATION SCRIPTS:

💬 SCRIPT 1: INITIAL RATE DISCUSSION
Brand: "What are your rates?"
You: "मेरे rates depend करते हैं collaboration के scope पर। आप क्या exactly चाहते हैं - single post, story series, या complete campaign? इससे मैं आपके लिए best package suggest कर सकूंगा।"

💬 SCRIPT 2: WHEN BUDGET IS TOO LOW
Brand: "Our budget is ₹5K"
You: "मैं appreciate करता हूं आपकी transparency। ₹5K में हम एक story series create कर सकते हैं, लेकिन complete post integration के लिए मेरा standard rate ₹10K है क्योंकि इसमें professional photography, content creation, और guaranteed engagement included है। क्या हम middle ground find कर सकते हैं?"

💬 SCRIPT 3: ADDING VALUE TO JUSTIFY RATE
Brand: "This rate seems high"
You: "मैं समझ सकता हूं। आइए breakdown करते हैं कि इस investment में क्या included है:
- Professional content creation (worth ₹3K)
- 24-hour story promotion (worth ₹2K)
- Dedicated reel (worth ₹4K)
- Analytics report (worth ₹1K)
- Usage rights (worth ₹2K)
Total value: ₹12K, but मैं ₹10K quote कर रहा हूं।"

💬 SCRIPT 4: HANDLING MULTIPLE REVISIONS REQUEST
Brand: "We need unlimited revisions"
You: "मैं quality के लिए committed हूं! मेरे standard package में 2 major revisions included हैं, जो usually sufficient होती हैं क्योंकि मैं detailed brief लेता हूं। Additional revisions के लिए ₹500 per revision charge होगा to maintain quality standards।"

💬 SCRIPT 5: EXCLUSIVE RIGHTS NEGOTIATION
Brand: "We want exclusive rights"
You: "Exclusive rights definitely valuable हैं आपके brand के लिए! इसके लिए मेरा rate 40% increase हो जाता है क्योंकि मैं उस time period में competitor brands के साथ work नहीं कर सकता। Exclusivity period कितनी होगी?"

🎯 ADVANCED NEGOTIATION STRATEGIES:

📊 THE TIERED PRICING APPROACH:
Basic Package (₹5K):
• 1 Instagram post
• Basic editing
• 24-hour delivery

Standard Package (₹8K):
• 1 Instagram post
• Professional editing
• 2 story slides
• Analytics report

Premium Package (₹12K):
• 1 Instagram post
• Professional editing
• 4 story slides
• Dedicated reel
• Analytics report
• 2 revisions included

🎪 THE OBJECTION HANDLING PLAYBOOK:

❌ "Budget constraints hai"
✅ Response: "मैं समझता हूं। क्या हम phased approach कर सकते हैं? पहले smaller collaboration से start करते हैं, और अगर results अच्छे आएं तो next quarter bigger campaign plan करते हैं।"

❌ "Other influencers cheaper rates देते हैं"
✅ Response: "Absolutely! Market में different price points होते हैं। मेरी rates मेरी [specific strengths] को reflect करती हैं। आइए results के basis पर compare करते हैं - ROI, engagement quality, और brand alignment।"

❌ "Free product के बदले में post कर दो"
✅ Response: "Product collaboration मैं definitely consider करता हूं, लेकिन product value के अनुपात में। ₹[product value] के product के लिए story mention appropriate होगा। Full post के लिए हमें monetary compensation भी चाहिए।"

❌ "Usage rights भी chahiye"
✅ Response: "Usage rights अल��� से cost होती है। Standard post में social media usage included है। अगर आप website, print, या advertising में use करना चाहते हैं, तो वो additional 50% of base rate होगा।"

💡 PRO NEGOTIATION TIPS:

🎯 PREPARATION PHASE:
1. Research brand's previous collaborations
2. Check their typical collaboration budgets
3. Understand their target audience alignment
4. Prepare your media kit with strong metrics

🎯 COMMUNICATION STYLE:
• Professional लेकिन friendly tone maintain करें
• Numbers और facts से support करें
• Emotions नहीं, logic use करें
• Win-win situation की बात करें

🎯 TIMING STRATEGY:
• Month के beginning में rates negotiate करें
• Festival seasons में premium charge करें
• Urgent requests के लिए rush charges add करें

📋 RATE CARD TEMPLATE:

══════════════════════════════════════
${userNiche} CREATOR RATE CARD
Follower Count: ${userFollowers}
══════════════════════════════════════

📸 CONTENT CREATION RATES:

Instagram Feed Post: ₹[Base Rate]
• Professional photography
• Creative caption
• 3 hashtag sets
• 24-hour story promotion

Instagram Reel: ₹[Base Rate + 50%]
• Trending audio integration
• Professional editing
• Custom graphics
• Story highlights inclusion

Instagram Stories (3-5 slides): ₹[Base Rate × 0.4]
• Behind-the-scenes content
• Product showcase
• Swipe-up integration (if available)

YouTube Integration: ₹[Base Rate × 2.5]
• Dedicated video segment
• Description mention
• Pinned comment
• Community post

📦 CAMPAIGN PACKAGES:

Starter Campaign: ₹[Base Rate × 1.5]
• 1 Feed post + 3 Stories
• Basic analytics report

Growth Campaign: ₹[Base Rate × 2.5]
• 1 Feed post + 1 Reel + 5 Stories
• Detailed analytics report
• 1 revision included

Premium Campaign: ₹[Base Rate × 4]
• 2 Feed posts + 2 Reels + 8 Stories
• YouTube integration
• Comprehensive analytics
• 2 revisions included
• 30-day story highlights

💰 ADDITIONAL SERVICES:

Rush Delivery (24-48 hours): +25%
Exclusive Content Rights: +40%
Multi-platform Distribution: +30%
Extended Usage Rights (1 year): +50%
Custom Graphics/Design: +20%

📋 TERMS & CONDITIONS:

💳 Payment Terms:
• 50% advance payment required
• Remaining 50% on content delivery
• Payment via UPI/Bank Transfer/PayPal

⏰ Delivery Timeline:
• Standard: 5-7 business days
• Rush: 24-48 hours (additional charges apply)

🔄 Revision Policy:
• 1 major revision included
• Additional revisions: ₹500 each
• Minor tweaks: Complimentary

📝 Usage Rights:
• Standard: Social media usage only
• Extended: Website/newsletter usage (+25%)
• Commercial: Advertising usage (+50%)

🚫 Cancellation Policy:
• 24 hours before start: Full refund
• After content creation begins: 50% charge
• After delivery: No refund

══════════════════════════════════════

🎯 SUCCESS METRICS TO TRACK:

📈 POST-NEGOTIATION ANALYSIS:
• Acceptance rate of initial quotes
• Average discount given
• Time spent in negotiation
• Client satisfaction scores
• Repeat collaboration rate

🔄 RATE OPTIMIZATION STRATEGY:
• Review rates quarterly
• Track market rate changes
• Monitor competitor pricing
• Adjust based on demand
• Premium charge for peak seasons

💪 CONFIDENCE BUILDING EXERCISES:

1. Practice rate conversations with friends
2. Record yourself explaining your value
3. Prepare responses to common objections
4. Build a portfolio of successful campaigns
5. Collect client testimonials regularly

Remember: आपका content valuable है, और आपको fair compensation deserve करता है। Confidence के साथ negotiate करें!`;
  }

  return `🤝 PROFESSIONAL NEGOTIATION TACTICS & RATE CARDS GUIDE

Brand Negotiation Mastery for ${userNiche} Creators

💰 RATE CALCULATION FORMULA (Indian Market):

📊 Base Rate Calculation:
• 1K-5K followers: ₹200-1,000 per post
• 5K-10K followers: ₹1,000-3,000 per post
• 10K-50K followers: ₹3,000-15,000 per post
• 50K-100K followers: ₹15,000-50,000 per post
• 100K+ followers: ₹50,000+ per post

⚡ Niche Multipliers:
• Fashion & Beauty: 1.2x
• Technology & AI: 1.5x
• Finance & Business: 1.8x
• Food & Lifestyle: 1.1x
• Education & Learning: 1.4x

📈 Engagement Bonus:
• 2-4% engagement: Base rate
• 4-6% engagement: +30%
• 6%+ engagement: +50%

🎯 NEGOTIATION PSYCHOLOGY TACTICS:

1️⃣ ANCHORING TECHNIQUE:
• Always quote 20-30% higher than your desired rate
• First number becomes anchor for negotiation
• Example: If you want ₹10K, quote ₹13K

2️⃣ VALUE STACKING:
• Highlight additional value beyond just the post
• "₹10K includes: post + 3 stories + reel + analytics report"
• Calculate and show value of free extras

3️⃣ SCARCITY PRINCIPLE:
• "I only have 2 collaboration slots available this month"
• "My rates increase 25% starting next month"
• Create limited availability

4️⃣ SOCIAL PROOF LEVERAGE:
• "Similar collaboration with XYZ brand achieved 40% ROI"
• Share results from previous successful campaigns
• Use testimonials from other brands

🎭 NEGOTIATION CONVERSATION SCRIPTS:

💬 SCRIPT 1: INITIAL RATE DISCUSSION
Brand: "What are your rates?"
You: "My rates depend on the collaboration scope. What exactly do you need - single post, story series, or complete campaign? This helps me suggest the best package for you."

💬 SCRIPT 2: WHEN BUDGET IS TOO LOW
Brand: "Our budget is ₹5K"
You: "I appreciate your transparency. For ₹5K we could create a story series, but for complete post integration my standard rate is ₹10K as it includes professional photography, content creation, and guaranteed engagement. Can we find a middle ground?"

💬 SCRIPT 3: ADDING VALUE TO JUSTIFY RATE
Brand: "This rate seems high"
You: "I understand. Let me break down what's included in this investment:
- Professional content creation (worth ₹3K)
- 24-hour story promotion (worth ₹2K)
- Dedicated reel (worth ₹4K)
- Analytics report (worth ₹1K)
- Usage rights (worth ��2K)
Total value: ₹12K, but I'm quoting ₹10K."

[Continue with more scripts and strategies...]

📋 COMPREHENSIVE RATE CARD TEMPLATE:

══════════════════════════════════════
${userNiche.toUpperCase()} CREATOR RATE CARD
Follower Count: ${userFollowers}
══════════════════════════════════════

📸 CONTENT CREATION RATES:

Instagram Feed Post: ₹[Base Rate]
• Professional photography
• Creative caption
• 3 hashtag sets
• 24-hour story promotion

Instagram Reel: ₹[Base Rate + 50%]
• Trending audio integration
• Professional editing
• Custom graphics
• Story highlights inclusion

Instagram Stories (3-5 slides): ₹[Base Rate × 0.4]
• Behind-the-scenes content
• Product showcase
• Swipe-up integration (if available)

YouTube Integration: ₹[Base Rate × 2.5]
• Dedicated video segment
• Description mention
• Pinned comment
• Community post

📦 CAMPAIGN PACKAGES:

Starter Campaign: ₹[Base Rate × 1.5]
• 1 Feed post + 3 Stories
• Basic analytics report

Growth Campaign: ₹[Base Rate × 2.5]
• 1 Feed post + 1 Reel + 5 Stories
• Detailed analytics report
• 1 revision included

Premium Campaign: ₹[Base Rate × 4]
• 2 Feed posts + 2 Reels + 8 Stories
• YouTube integration
• Comprehensive analytics
• 2 revisions included
• 30-day story highlights

💰 ADDITIONAL SERVICES:

Rush Delivery (24-48 hours): +25%
Exclusive Content Rights: +40%
Multi-platform Distribution: +30%
Extended Usage Rights (1 year): +50%
Custom Graphics/Design: +20%

📋 TERMS & CONDITIONS:

💳 Payment Terms:
• 50% advance payment required
• Remaining 50% on content delivery
• Payment via UPI/Bank Transfer/PayPal

⏰ Delivery Timeline:
• Standard: 5-7 business days
• Rush: 24-48 hours (additional charges apply)

🔄 Revision Policy:
• 1 major revision included
• Additional revisions: ₹500 each
• Minor tweaks: Complimentary

📝 Usage Rights:
• Standard: Social media usage only
• Extended: Website/newsletter usage (+25%)
• Commercial: Advertising usage (+50%)

🚫 Cancellation Policy:
• 24 hours before start: Full refund
• After content creation begins: 50% charge
• After delivery: No refund

══════════════════════════════════════

🎯 SUCCESS METRICS TO TRACK:

📈 POST-NEGOTIATION ANALYSIS:
• Acceptance rate of initial quotes
• Average discount given
• Time spent in negotiation
• Client satisfaction scores
• Repeat collaboration rate

Remember: Your content is valuable, and you deserve fair compensation. Negotiate with confidence!`;
}

function generateBrandContractContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  return language === "hindi"
    ? "ब्रांड कॉन्ट्रैक्ट्स..."
    : "Brand Contracts...";
}

function generateBrandDatabaseContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  return language === "hindi" ? "ब्र���ंड डेटाबेस..." : "Brand Database...";
}

function generatePitchDeckContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  return language === "hindi"
    ? "पिच डेक टेम्प्लेट्स..."
    : "Pitch Deck Templates...";
}

function generatePremiumToolsContent(
  language: "english" | "hindi",
  userData?: any,
): string {
  const userNiche = userData?.niche || "Content Creator";

  if (language === "hindi") {
    return `🛠️ प्रीमियम क्रिएटर टूल्स गाइड

${userNiche} क्रिएटर्स के लिए आवश्यक फ्री और पेड टूल्��

📈 एनालिटिक्स टूल्स:
• Instagram Insights (FREE) - बिल्ट-इन एनालिटिक्स
• Google Analytics (FREE) - वेबसाइट ट्रैफिक ट्रैकिंग
• Hootsuite Insights ($49/month) - क्रॉस-प्लेटफॉर्म एनालिटिक्स
• Sprout Social ($89/month) - अड्वांस रिपोर्टिंग

🎨 कंटेंट क्रिएशन टूल्स:
• Canva (FREE/Pro $12.99/month) - ग्राफिक डिजाइन
• Adobe Creative Suite ($20.99/month) - प्रोफेशनल एडिटिंग
• CapCut (FREE) - मोबाइल वीडियो ए��िटिंग
• Figma (FREE/Pro $12/month) - UI/UX डिजाइन
• Unsplash (FREE) - हाई-क्वालिटी स्टॉक फोटोस

🗺️ कंटेंट प्लानिंग टूल्स:
• Notion (FREE/Pro $8/month) - कंटेंट प्लानिंग
• Trello (FREE/Pro $5/month) - प्रोज��क्ट मैनेजमेंट
• Airtable (FREE/Pro $20/month) - कंटेंट कैलेंडर
• Google Calendar (FREE) - सिम्पल स्केड्यूलिंग

📱 सोशल ���ीडिया मैनेजमेंट:
• Buffer (FREE/Pro $15/month) - पोस्ट स्केड्यूलिंग
• Later (FREE/Pro $18/month) - विजुअल कंटेंट प्लानिंग
• Hootsuite (FREE/Pro $49/month) - मल्टी-प्लेटफॉर्म मैनेजमेंट
• Creator Studio (FREE) - Facebook/Instagram नेटिव टूल

🚀 SEO और हैशटैग टूल्स:
• Hashtagify (FREE/Pro $29/month) - हैशटैग रिसर्च
• Display Purposes (FREE) - Instagram हैशटैग
• All Hashtag (FREE) - हैशटैग जेनरेटर
• TubeBuddy (FREE/Pro $7.20/month) - YouTube SEO

📧 ईमेल मार्केटिंग:
• Mailchimp (FREE/Pro $10/month) - ईमेल ऑटोमेशन
• ConvertKit ($29/month) - क्रिएटर-फोकस्ड प्लेटफॉर्म
• Flodesk ($38/month) - ब्यूटीफुल ऐमल न्यूजलेटर

💵 मुद्रीकरण टूल्स:
• PayPal (FREE) - पेमेंट प्रोसेसिंग
• Razorpay (भारतीय पेमेंट) - बिजनेस पेमेंट
• Gumroad (8.5% + 30¢) - डिजिटल प्रोडक्ट स���ल्स
• Teachable ($39/month) - ऑनलाइन कोर्स

🔍 एफिलिएट मार्केटिंग:
• Amazon Associates (FREE) - आमक आमजन एफिलिएट
• Commission Junction (FREE) - मल्टी-��्रांड नेटवर्क
• ShareASale (FREE) - ब्रांड पार्टनरशिप

✏️ प्रोडक्टिविटी टूल्स:
• Toggl (FREE/Pro $9/month) - टाइम ट्रैकिंग
• RescueTime (FREE/Pro $12/month) - प्रोडक्टिविटी एनालिसिस
• Forest App (₹250) - फोकस और कॉन्संट्रेशन

🌟 मार्केट रिसर्�� टूल्स:
• Google Trends (FREE) - ट्रेंड एनालिसिस
• BuzzSumo ($99/month) - कंटेंट रिसर्च
• AnswerThePublic (FREE/Pro $99/month) - कीवर्ड रिसर्च

���� अल्-इन-वन प्लेटफॉर्म:
• CreatorSpace (₹2000/month) - भारती�� क्रिएटर प्लेटफॉर्म
• Koo Creator Studio (FREE) - भारतीय सोशल मीडिया
• ShareChat Creator Program (FREE) - रीजनल कंटेंट

📝 बैकअप और सिक्योरिटी:
• Google Drive (FREE/Paid) - क्लाउड स्टोरेज
• Dropbox (FREE/Pro $9.99) - फाइल शेयरिंग
• LastPass ($3/month) - पासवर्ड मैनेज��

🛠️ प्रो टिप्स:
1. फ्री टूल्स से शुरू क��ें
2. एक बार में सिर्फ 1-2 पेड टूल्स आजमाएं
3. अपने बजट और जरूरतों के हिसाब से चुनें
4. महीने में एक बार टूल्स की समीक्षा करें
5. ROI के लिए टूल्स के परफॉर्मेंस को ट्रैक करें

💰 बजट प्लानिंग:
• नए क्रिएटर: ₹0-2000/month
• ग्रोइंग क्रिएटर: ₹2000-8000/month
• प्रोफेशनल क्रिएटर: ₹8000-25000/month`;
  }

  return `🛠️ PREMIUM CREATOR TOOLS GUIDE

Essential FREE and PAID tools for ${userNiche} creators

📈 ANALYTICS TOOLS:
• Instagram Insights (FREE) - Built-in analytics
• Google Analytics (FREE) - Website traffic tracking
• Hootsuite Insights ($49/month) - Cross-platform analytics
• Sprout Social ($89/month) - Advanced reporting

🎨 CONTENT CREATION TOOLS:
• Canva (FREE/Pro $12.99/month) - Graphic design
• Adobe Creative Suite ($20.99/month) - Professional editing
• CapCut (FREE) - Mobile video editing
• Figma (FREE/Pro $12/month) - UI/UX design
• Unsplash (FREE) - High-quality stock photos

🗺️ CONTENT PLANNING TOOLS:
• Notion (FREE/Pro $8/month) - Content planning
• Trello (FREE/Pro $5/month) - Project management
• Airtable (FREE/Pro $20/month) - Content calendar
• Google Calendar (FREE) - Simple scheduling

📱 SOCIAL MEDIA MANAGEMENT:
• Buffer (FREE/Pro $15/month) - Post scheduling
• Later (FREE/Pro $18/month) - Visual content planning
• Hootsuite (FREE/Pro $49/month) - Multi-platform management
• Creator Studio (FREE) - Facebook/Instagram native tool

🚀 SEO & HASHTAG TOOLS:
• Hashtagify (FREE/Pro $29/month) - Hashtag research
• Display Purposes (FREE) - Instagram hashtags
• All Hashtag (FREE) - Hashtag generator
• TubeBuddy (FREE/Pro $7.20/month) - YouTube SEO

📧 EMAIL MARKETING:
• Mailchimp (FREE/Pro $10/month) - Email automation
• ConvertKit ($29/month) - Creator-focused platform
• Flodesk ($38/month) - Beautiful email newsletters

💵 MONETIZATION TOOLS:
• PayPal (FREE) - Payment processing
• Razorpay (Indian payments) - Business payments
• Gumroad (8.5% + 30¢) - Digital product sales
• Teachable ($39/month) - Online courses

🔍 AFFILIATE MARKETING:
• Amazon Associates (FREE) - Amazon affiliate
• Commission Junction (FREE) - Multi-brand network
• ShareASale (FREE) - Brand partnerships

✏️ PRODUCTIVITY TOOLS:
• Toggl (FREE/Pro $9/month) - Time tracking
• RescueTime (FREE/Pro $12/month) - Productivity analysis
• Forest App (₹250) - Focus and concentration

🌟 MARKET RESEARCH TOOLS:
• Google Trends (FREE) - Trend analysis
• BuzzSumo ($99/month) - Content research
• AnswerThePublic (FREE/Pro $99/month) - Keyword research

📦 ALL-IN-ONE PLATFORMS:
• CreatorSpace (₹2000/month) - Indian creator platform
• Koo Creator Studio (FREE) - Indian social media
• ShareChat Creator Program (FREE) - Regional content

📝 BACKUP & SECURITY:
• Google Drive (FREE/Paid) - Cloud storage
• Dropbox (FREE/Pro $9.99) - File sharing
• LastPass ($3/month) - Password manager

🛠️ PRO TIPS:
1. Start with free tools first
2. Only try 1-2 paid tools at a time
3. Choose based on your budget and needs
4. Review tools monthly
5. Track tool performance for ROI

💰 BUDGET PLANNING:
• New creators: $0-25/month
• Growing creators: $25-100/month
• Professional creators: $100-400/month`;
}

// Product Management Functions
export function getProductConfig(productId: string): ProductConfig | undefined {
  return productConfigs.find((config) => config.id === productId);
}

export function getAllProducts(): ProductConfig[] {
  return productConfigs.filter((config) => config.isEnabled);
}

export function toggleProductAvailability(
  productId: string,
  isEnabled: boolean,
): void {
  const productIndex = productConfigs.findIndex(
    (config) => config.id === productId,
  );
  if (productIndex !== -1) {
    productConfigs[productIndex].isEnabled = isEnabled;
  }
}

export function generateProductDownload(
  productId: string,
  downloadId: string,
  language: "english" | "hindi",
  userData?: any,
): string {
  const product = getProductConfig(productId);
  if (!product) return "";

  const download = product.downloads.find((d) => d.id === downloadId);
  if (!download) return "";

  if (typeof download.content === "function") {
    return download.content(language, userData);
  }

  return download.content;
}

export function downloadFile(
  content: string,
  fileName: string,
  language: "english" | "hindi",
): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}_${language}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
