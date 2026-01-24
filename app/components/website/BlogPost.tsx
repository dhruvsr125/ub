"use client"

import { useParams, usePathname } from "next/navigation"
import BlogPostTemplate from "./BlogPostTemplate"
import { blogPostsData } from "../../data/blogPosts"

// Function to generate content based on title/slug
function generateBlogContent(title: string, slug: string, category: string): string {
  const titleLower = title.toLowerCase()
  
  // Check if we have specific content
  if (blogPostsData[slug]) {
    return blogPostsData[slug].content
  }
  
  // Generate content based on keywords in title
  let content = `<h2>Introduction</h2><p>${title} is a critical aspect of e-commerce success. This comprehensive guide covers everything you need to know to excel in this area.</p>`
  
  if (titleLower.includes("seo") || titleLower.includes("ranking")) {
    content += `<h2>Understanding Search Optimization</h2>
    <p>Search engine optimization on Amazon requires a strategic approach that combines keyword research, content optimization, and performance monitoring.</p>
    <h3>Key Strategies</h3>
    <ul>
      <li>Comprehensive keyword research and implementation</li>
      <li>Optimized product titles and descriptions</li>
      <li>Backend search term optimization</li>
      <li>Regular performance monitoring and adjustment</li>
    </ul>
    <h2>Best Practices</h2>
    <p>Follow these proven practices to improve your search rankings:</p>
    <ul>
      <li>Focus on high-intent keywords</li>
      <li>Optimize for both relevance and conversion</li>
      <li>Monitor competitor strategies</li>
      <li>Continuously test and refine your approach</li>
    </ul>`
  } else if (titleLower.includes("ppc") || titleLower.includes("advertising") || titleLower.includes("campaign")) {
    content += `<h2>PPC Strategy Fundamentals</h2>
    <p>Effective pay-per-click advertising requires understanding campaign structure, bid management, and performance optimization.</p>
    <h3>Campaign Setup</h3>
    <ul>
      <li>Proper campaign organization and structure</li>
      <li>Strategic keyword selection and grouping</li>
      <li>Appropriate bid settings and budgets</li>
      <li>Negative keyword implementation</li>
    </ul>
    <h2>Optimization Techniques</h2>
    <p>Maximize your PPC performance with these strategies:</p>
    <ul>
      <li>Regular bid adjustments based on performance</li>
      <li>Search term report analysis</li>
      <li>Campaign structure refinement</li>
      <li>Budget allocation optimization</li>
    </ul>`
  } else if (titleLower.includes("listing") || titleLower.includes("product")) {
    content += `<h2>Product Listing Optimization</h2>
    <p>Optimizing your product listings is essential for visibility and conversion on Amazon.</p>
    <h3>Key Elements</h3>
    <ul>
      <li>Compelling product titles with keywords</li>
      <li>High-quality product images</li>
      <li>Detailed bullet points highlighting benefits</li>
      <li>Comprehensive product descriptions</li>
      <li>A+ Content for enhanced presentation</li>
    </ul>
    <h2>Optimization Best Practices</h2>
    <p>Follow these guidelines for maximum impact:</p>
    <ul>
      <li>Use all available character space effectively</li>
      <li>Focus on customer benefits, not just features</li>
      <li>Include relevant keywords naturally</li>
      <li>Test different approaches and measure results</li>
    </ul>`
  } else if (titleLower.includes("inventory") || titleLower.includes("stock")) {
    content += `<h2>Inventory Management Essentials</h2>
    <p>Effective inventory management prevents stockouts, reduces costs, and ensures customer satisfaction.</p>
    <h3>Key Strategies</h3>
    <ul>
      <li>Accurate demand forecasting</li>
      <li>Optimal reorder point calculations</li>
      <li>Safety stock management</li>
      <li>Multi-channel inventory coordination</li>
    </ul>
    <h2>Best Practices</h2>
    <p>Implement these practices for better inventory control:</p>
    <ul>
      <li>Regular inventory audits</li>
      <li>Automated reorder systems</li>
      <li>Seasonal planning and adjustments</li>
      <li>Supplier relationship management</li>
    </ul>`
  } else if (titleLower.includes("success") || titleLower.includes("case study") || titleLower.includes("story")) {
    content += `<h2>The Challenge</h2>
    <p>Our client faced significant challenges in their e-commerce journey, including limited visibility, low conversion rates, and operational inefficiencies.</p>
    <h2>Our Approach</h2>
    <p>We implemented a comprehensive strategy that addressed multiple aspects of their business:</p>
    <ul>
      <li>Strategic optimization of product listings</li>
      <li>Advanced advertising campaigns</li>
      <li>Inventory and fulfillment improvements</li>
      <li>Brand building and customer retention</li>
    </ul>
    <h2>The Results</h2>
    <p>Through consistent implementation of proven strategies, our client achieved remarkable results:</p>
    <ul>
      <li>Significant revenue growth</li>
      <li>Improved profit margins</li>
      <li>Enhanced market position</li>
      <li>Sustainable business growth</li>
    </ul>
    <h2>Key Takeaways</h2>
    <p>This success story demonstrates the importance of a holistic approach to e-commerce management and the value of data-driven decision making.</p>`
  } else {
    content += `<h2>Core Concepts</h2>
    <p>Understanding the fundamental principles is essential for success in this area of e-commerce.</p>
    <h3>Important Factors</h3>
    <ul>
      <li>Strategic planning and execution</li>
      <li>Data-driven decision making</li>
      <li>Continuous optimization</li>
      <li>Customer-focused approach</li>
    </ul>
    <h2>Implementation Guide</h2>
    <p>Follow these steps to implement effective strategies:</p>
    <ol>
      <li>Assess your current situation</li>
      <li>Set clear goals and objectives</li>
      <li>Develop a comprehensive strategy</li>
      <li>Execute and monitor performance</li>
      <li>Continuously optimize based on results</li>
    </ol>
    <h2>Best Practices</h2>
    <p>Adopt these best practices for optimal results:</p>
    <ul>
      <li>Stay informed about industry trends</li>
      <li>Learn from successful competitors</li>
      <li>Test different approaches</li>
      <li>Focus on long-term sustainability</li>
    </ul>`
  }
  
  content += `<h2>Conclusion</h2>
  <p>Success in ${titleLower.includes("amazon") ? "Amazon" : "e-commerce"} requires dedication, strategic thinking, and continuous improvement. By applying these principles and best practices, you can achieve sustainable growth and long-term success.</p>`
  
  return content
}

// Comprehensive slug to title mapping
const slugToTitle: Record<string, { title: string; category: string; author: string; date: string; readTime: string; views: string; likes: string; excerpt: string }> = {
  "product-listing-optimization-guide-2024": {
    title: "Product Listing Optimization: The Complete 2024 Guide",
    category: "Listing Optimization",
    author: "Mike Rodriguez",
    date: "December 10, 2024",
    readTime: "10 min read",
    views: "12.1K",
    likes: "678",
    excerpt: "Master the art of Amazon listing optimization with our comprehensive guide covering keywords, images, A+ content."
  },
  "garage-startup-amazon-bestseller": {
    title: "From Garage Startup to Amazon Best Seller: A 6-Month Journey",
    category: "Success Stories",
    author: "Sarah Johnson",
    date: "December 10, 2024",
    readTime: "10 min read",
    views: "12.8K",
    likes: "654",
    excerpt: "How a small family business transformed into a million-dollar Amazon brand using our proven strategies."
  },
  "private-label-success-500k-revenue": {
    title: "Private Label Success: $50K to $500K in Annual Revenue",
    category: "Success Stories",
    author: "Mike Rodriguez",
    date: "December 5, 2024",
    readTime: "14 min read",
    views: "9.7K",
    likes: "423",
    excerpt: "Complete case study of how we helped a client scale their private label business 10x in 18 months."
  },
  "sponsored-products-vs-sponsored-brands": {
    title: "Sponsored Products vs Sponsored Brands: Which Converts Better?",
    category: "PPC Strategy",
    author: "Mike Rodriguez",
    date: "December 8, 2024",
    readTime: "7 min read",
    views: "7.2K",
    likes: "389",
    excerpt: "Comprehensive analysis of different Amazon ad types and when to use each for maximum ROI."
  },
  "negative-keywords-reduce-ad-spend": {
    title: "Negative Keywords: The Secret to Reducing Wasted Ad Spend",
    category: "PPC Strategy",
    author: "Emily Park",
    date: "December 3, 2024",
    readTime: "6 min read",
    views: "6.8K",
    likes: "324",
    excerpt: "Master the art of negative keyword optimization to eliminate irrelevant traffic and boost profitability."
  },
  "bid-management-maximum-profitability": {
    title: "Bid Management Strategies for Maximum Profitability",
    category: "PPC Strategy",
    author: "Lisa Chen",
    date: "November 25, 2024",
    readTime: "9 min read",
    views: "5.4K",
    likes: "298",
    excerpt: "Advanced bidding techniques that help you win profitable clicks while maintaining healthy ACoS."
  },
  "inventory-management-secrets-amazon": {
    title: "Inventory Management Secrets: Never Run Out of Stock Again",
    category: "Inventory Management",
    author: "Emily Park",
    date: "December 8, 2024",
    readTime: "6 min read",
    views: "6.3K",
    likes: "234",
    excerpt: "Discover proven inventory forecasting methods and automation tools that help Amazon sellers maintain optimal stock levels."
  },
  "brand-building-amazon-premium": {
    title: "Brand Building on Amazon: From Generic to Premium in 90 Days",
    category: "Brand Building",
    author: "Alex Thompson",
    date: "December 5, 2024",
    readTime: "9 min read",
    views: "9.8K",
    likes: "567",
    excerpt: "Transform your Amazon presence with strategic brand building techniques including brand registry and A+ content."
  },
  "amazon-algorithm-ranking-guide": {
    title: "Amazon Algorithm Decoded: How to Rank #1 in Search Results",
    category: "SEO & Ranking",
    author: "Lisa Chen",
    date: "December 3, 2024",
    readTime: "7 min read",
    views: "11.4K",
    likes: "723",
    excerpt: "Understand Amazon's A9 algorithm and learn the ranking factors that matter most for achieving top search positions."
  },
  "product-research-profitable-opportunities": {
    title: "Product Research: Finding Profitable Opportunities",
    category: "Market Research",
    author: "Emily Park",
    date: "November 19, 2024",
    readTime: "10 min read",
    views: "7.2K",
    likes: "334",
    excerpt: "Master the art of product research to identify profitable opportunities on Amazon."
  },
  "amazon-fba-automation-tools": {
    title: "Amazon FBA Automation Tools: Streamline Your Operations",
    category: "Automation",
    author: "David Chen",
    date: "November 30, 2024",
    readTime: "8 min read",
    views: "8.9K",
    likes: "445",
    excerpt: "Discover the best automation tools to streamline your Amazon FBA operations and save time."
  },
  "amazon-brand-registry-benefits": {
    title: "Amazon Brand Registry: Unlock Premium Benefits",
    category: "Brand Building",
    author: "Alex Thompson",
    date: "November 28, 2024",
    readTime: "9 min read",
    views: "7.5K",
    likes: "389",
    excerpt: "Learn how Amazon Brand Registry can protect your brand and unlock powerful selling tools."
  },
  "keyword-research-amazon-tools-techniques": {
    title: "Keyword Research for Amazon: Tools and Techniques",
    category: "SEO Strategy",
    author: "Sarah Johnson",
    date: "November 22, 2024",
    readTime: "11 min read",
    views: "9.2K",
    likes: "512",
    excerpt: "Master Amazon keyword research with proven tools and techniques to improve your listings."
  }
}

// Function to get blog post data
function getBlogPostData(slug: string) {
  // Check if we have specific data
  if (blogPostsData[slug]) {
    return blogPostsData[slug]
  }
  
  // Check slug mapping
  const postInfo = slugToTitle[slug]
  
  if (postInfo) {
    const content = generateBlogContent(postInfo.title, slug, postInfo.category)
    return {
      ...postInfo,
      content,
      slug
    }
  }
  
  // Fallback: generate from slug
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  const content = generateBlogContent(title, slug, "E-commerce")
  
  return {
    title,
    content,
    author: "David Chen",
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    readTime: "10 min read",
    category: "E-commerce",
    slug,
    views: "8.5K",
    likes: "456",
    excerpt: `Learn about ${title.toLowerCase()} and discover proven strategies for success.`
  }
}

export default function BlogPost() {
  const params = useParams()
  const pathname = usePathname()
  
  // Get slug from params or extract from pathname
  let slug = params?.slug as string || ""
  
  if (!slug && pathname) {
    // Extract slug from pathname like /blog/amazon-seo-ranking-higher-search
    const pathParts = pathname.split("/")
    slug = pathParts[pathParts.length - 1] || ""
  }
  
  const blogPostData = getBlogPostData(slug)

  return <BlogPostTemplate {...blogPostData} />
}
