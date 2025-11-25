"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  ImageIcon,
  Clock,
  TrendingUp,
  Award,
  Target,
  Zap,
  BookOpen,
  Star,
} from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = {
    title: "Amazon FBA Success: From $0 to $100K Monthly Revenue in 12 Months",
    excerpt:
      "Discover the exact step-by-step strategy our client used to build a six-figure Amazon business from scratch, including product selection, listing optimization, and scaling techniques.",
    author: "David Chen",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Success Stories",
    slug: "amazon-fba-success-100k-monthly",
    imageAlt: "Amazon FBA success dashboard showing revenue growth",
    featured: true,
    views: "15.2K",
    likes: "892",
  };

  const allBlogPosts = [
    // Only include blog posts that actually exist with real content
    {
      title:
        "Amazon FBA Success: From $0 to $100K Monthly Revenue in 12 Months",
      excerpt:
        "Discover the exact step-by-step strategy our client used to build a six-figure Amazon business from scratch.",
      author: "David Chen",
      date: "December 15, 2024",
      readTime: "12 min read",
      category: "Success Stories",
      slug: "amazon-fba-success-100k-monthly",
      imageAlt: "Amazon FBA success dashboard showing revenue growth",
      views: "15.2K",
      likes: "892",
    },
    {
      title:
        "Amazon PPC Mastery: 7 Advanced Strategies That Increased ROAS by 340%",
      excerpt:
        "Learn the advanced PPC techniques that transformed our client's advertising performance.",
      author: "Sarah Johnson",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "PPC Strategy",
      slug: "amazon-ppc-advanced-strategies-roas",
      imageAlt: "Advanced Amazon PPC campaign dashboard",
      views: "8.7K",
      likes: "456",
    },
    {
      title: "Product Listing Optimization: The Complete 2024 Guide",
      excerpt:
        "Master the art of Amazon listing optimization with our comprehensive guide covering keywords, images, A+ content.",
      author: "Mike Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Listing Optimization",
      slug: "product-listing-optimization-guide-2024",
      imageAlt: "Amazon product listing optimization examples",
      views: "12.1K",
      likes: "678",
    },
    {
      title: "From Garage Startup to Amazon Best Seller: A 6-Month Journey",
      excerpt:
        "How a small family business transformed into a million-dollar Amazon brand using our proven strategies.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Success Stories",
      slug: "garage-startup-amazon-bestseller",
      imageAlt: "Small business transformation success story",
      views: "12.8K",
      likes: "654",
    },
    {
      title: "Private Label Success: $50K to $500K in Annual Revenue",
      excerpt:
        "Complete case study of how we helped a client scale their private label business 10x in 18 months.",
      author: "Mike Rodriguez",
      date: "December 5, 2024",
      readTime: "14 min read",
      category: "Success Stories",
      slug: "private-label-success-500k-revenue",
      imageAlt: "Private label business growth metrics",
      views: "9.7K",
      likes: "423",
    },
    {
      title: "Wholesale to Amazon: Tripling Profit Margins",
      excerpt:
        "How a traditional wholesale business increased profit margins by 300% by optimizing their Amazon strategy.",
      author: "Emily Park",
      date: "November 28, 2024",
      readTime: "9 min read",
      category: "Success Stories",
      slug: "wholesale-amazon-profit-margins",
      imageAlt: "Wholesale business profit optimization",
      views: "8.1K",
      likes: "367",
    },
    {
      title: "International Expansion: From US to Global Marketplace",
      excerpt:
        "Step-by-step guide on how we helped a US seller expand to 5 international Amazon marketplaces.",
      author: "Alex Thompson",
      date: "November 25, 2024",
      readTime: "11 min read",
      category: "Success Stories",
      slug: "international-expansion-global-marketplace",
      imageAlt: "Global Amazon marketplace expansion",
      views: "7.3K",
      likes: "298",
    },
    {
      title: "Sponsored Products vs Sponsored Brands: Which Converts Better?",
      excerpt:
        "Comprehensive analysis of different Amazon ad types and when to use each for maximum ROI.",
      author: "Mike Rodriguez",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "PPC Strategy",
      slug: "sponsored-products-vs-sponsored-brands",
      imageAlt: "Amazon advertising comparison analysis",
      views: "7.2K",
      likes: "389",
    },
    {
      title: "Negative Keywords: The Secret to Reducing Wasted Ad Spend",
      excerpt:
        "Master the art of negative keyword optimization to eliminate irrelevant traffic and boost profitability.",
      author: "Emily Park",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "PPC Strategy",
      slug: "negative-keywords-reduce-ad-spend",
      imageAlt: "Negative keyword optimization strategy",
      views: "6.8K",
      likes: "324",
    },
    {
      title: "Amazon SEO: Ranking Higher in Search Results",
      excerpt:
        "Advanced Amazon SEO techniques to improve your product visibility and organic rankings.",
      author: "Lisa Chen",
      date: "December 7, 2024",
      readTime: "9 min read",
      category: "Listing Optimization",
      slug: "amazon-seo-ranking-higher-search",
      imageAlt: "Amazon SEO optimization techniques",
      views: "10.3K",
      likes: "567",
    },
    {
      title: "Bid Management Strategies for Maximum Profitability",
      excerpt:
        "Advanced bidding techniques that help you win profitable clicks while maintaining healthy ACoS.",
      author: "Lisa Chen",
      date: "November 25, 2024",
      readTime: "9 min read",
      category: "PPC Strategy",
      slug: "bid-management-maximum-profitability",
      imageAlt: "Amazon PPC bid management dashboard",
      views: "5.4K",
      likes: "298",
    },
    {
      title: "Inventory Management Secrets: Never Run Out of Stock Again",
      excerpt:
        "Discover proven inventory forecasting methods and automation tools that help Amazon sellers maintain optimal stock levels.",
      author: "Emily Park",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Inventory Management",
      slug: "inventory-management-secrets-amazon",
      imageAlt: "Amazon inventory management dashboard",
      views: "6.3K",
      likes: "234",
    },
    {
      title: "Brand Building on Amazon: From Generic to Premium in 90 Days",
      excerpt:
        "Transform your Amazon presence with strategic brand building techniques including brand registry and A+ content.",
      author: "Alex Thompson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Brand Building",
      slug: "brand-building-amazon-premium",
      imageAlt: "Amazon brand store transformation examples",
      views: "9.8K",
      likes: "567",
    },
    {
      title: "Amazon Algorithm Decoded: How to Rank #1 in Search Results",
      excerpt:
        "Understand Amazon's A9 algorithm and learn the ranking factors that matter most for achieving top search positions.",
      author: "Lisa Chen",
      date: "December 3, 2024",
      readTime: "7 min read",
      category: "SEO & Ranking",
      slug: "amazon-algorithm-ranking-guide",
      imageAlt: "Amazon search ranking factors visualization",
      views: "11.4K",
      likes: "723",
    },
    {
      title: "Product Research: Finding Profitable Opportunities",
      excerpt:
        "Master the art of product research to identify profitable opportunities on Amazon.",
      author: "Emily Park",
      date: "November 19, 2024",
      readTime: "10 min read",
      category: "Market Research",
      slug: "product-research-profitable-opportunities",
      imageAlt: "Product research methodology",
      views: "7.2K",
      likes: "334",
    },
    {
      title: "Competitor Analysis Masterclass: Spy on Your Competition Legally",
      excerpt:
        "Learn advanced competitor research techniques and tools to analyze pricing, keywords, and strategies.",
      author: "James Wilson",
      date: "November 30, 2024",
      readTime: "11 min read",
      category: "Market Research",
      slug: "competitor-analysis-amazon-sellers",
      imageAlt: "Amazon competitor analysis tools and metrics",
      views: "7.9K",
      likes: "389",
    },
    {
      title: "Campaign Structure Optimization for Better Performance",
      excerpt:
        "Build winning PPC campaigns with proper structure, organization, and optimization techniques.",
      author: "David Chen",
      date: "November 10, 2024",
      readTime: "10 min read",
      category: "PPC Strategy",
      slug: "campaign-structure-optimization",
      imageAlt: "Amazon PPC campaign structure",
      views: "3.9K",
      likes: "156",
    },
    {
      title: "Keyword Research for Amazon: Tools and Techniques",
      excerpt:
        "Discover the best tools and methods for finding high-converting keywords for your Amazon listings.",
      author: "David Chen",
      date: "November 26, 2024",
      readTime: "7 min read",
      category: "Listing Optimization",
      slug: "keyword-research-amazon-tools-techniques",
      imageAlt: "Amazon keyword research tools",
      views: "8.2K",
      likes: "356",
    },
    {
      title: "Market Trends Analysis: Staying Ahead of the Curve",
      excerpt:
        "Identify and capitalize on emerging market trends before your competitors do.",
      author: "Alex Thompson",
      date: "November 13, 2024",
      readTime: "8 min read",
      category: "Market Research",
      slug: "market-trends-analysis-amazon",
      imageAlt: "Market trend analysis dashboard",
      views: "6.8K",
      likes: "278",
    },
    {
      title: "Niche Research: Finding Untapped Markets",
      excerpt:
        "Discover profitable niches with low competition and high demand on Amazon.",
      author: "Rachel Green",
      date: "November 7, 2024",
      readTime: "9 min read",
      category: "Market Research",
      slug: "niche-research-untapped-markets",
      imageAlt: "Niche market research tools",
      views: "6.3K",
      likes: "245",
    },
  ];

  const categories = [
    { name: "All Posts", icon: BookOpen, count: allBlogPosts.length },
    {
      name: "Success Stories",
      icon: Award,
      count: allBlogPosts.filter((post) => post.category === "Success Stories")
        .length,
    },
    {
      name: "PPC Strategy",
      icon: Target,
      count: allBlogPosts.filter((post) => post.category === "PPC Strategy")
        .length,
    },
    {
      name: "Listing Optimization",
      icon: TrendingUp,
      count: allBlogPosts.filter(
        (post) => post.category === "Listing Optimization"
      ).length,
    },
    {
      name: "Inventory Management",
      icon: Zap,
      count: allBlogPosts.filter(
        (post) => post.category === "Inventory Management"
      ).length,
    },
    {
      name: "Brand Building",
      icon: Star,
      count: allBlogPosts.filter((post) => post.category === "Brand Building")
        .length,
    },
    {
      name: "SEO & Ranking",
      icon: Search,
      count: allBlogPosts.filter((post) => post.category === "SEO & Ranking")
        .length,
    },
    {
      name: "Market Research",
      icon: Tag,
      count: allBlogPosts.filter((post) => post.category === "Market Research")
        .length,
    },
  ];

  const stats = [
    { label: "Total Articles", value: `${allBlogPosts.length}+` },
    { label: "Monthly Readers", value: "25K+" },
    {
      label: "Success Stories",
      value: allBlogPosts
        .filter((post) => post.category === "Success Stories")
        .length.toString(),
    },
    { label: "Expert Authors", value: "6" },
  ];

  // Filter posts based on selected category and search term
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <BookOpen className="h-5 w-5 mr-2 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200">
                Expert Amazon & E-commerce Insights
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
              <br />
              <span className="text-white">& Expert Guides</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
              Learn from real success stories, advanced strategies, and expert
              insights that have helped thousands of sellers dominate Amazon
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl w-full">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search success stories, strategies, guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg bg-white shadow-lg text-gray-900"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.name;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600  shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent
                      className={`h-6 w-6 mb-2 ${
                        isActive
                          ? "text-white"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    />
                    <span className="text-sm font-semibold mb-1">
                      {category.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              Featured Success Story
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Latest Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients - see how our strategies transform
              Amazon businesses
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-3 text-green-600" />
                    <span className="text-green-600 text-sm font-bold bg-green-50 px-4 py-2 rounded-full border border-green-200">
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="font-semibold">
                        {featuredPost.views}
                      </span>
                      <span className="ml-1">views</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">
                        {featuredPost.likes}
                      </span>
                      <span className="ml-1">likes</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-bold text-lg">
                        {featuredPost.author}
                      </span>
                      <p className="text-gray-500 text-sm">
                        Amazon Success Expert
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="mr-3">{featuredPost.date}</span>
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform text-lg w-fit"
                >
                  Read Success Story
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </div>

              {/* Featured Image Placeholder */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-white border border-white/20 p-8 min-h-[400px]">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="h-10 w-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    $100K Monthly Revenue
                  </h4>
                  <p className="text-center text-lg opacity-90 mb-6">
                    {featuredPost.imageAlt}
                  </p>
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold">340%</div>
                      <div className="text-sm opacity-75">ROAS Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm opacity-75">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">#1</div>
                      <div className="text-sm opacity-75">Ranking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Expert Guides & Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven strategies and actionable insights from Amazon experts
              who've generated millions in revenue
            </p>
            {selectedCategory !== "All Posts" && (
              <div className="mt-6">
                <span className="text-lg text-blue-600 font-semibold">
                  Showing {filteredPosts.length} articles in "{selectedCategory}
                  "
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 group hover:scale-105 transform flex flex-col h-full"
              >
                {/* Article Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 relative overflow-hidden flex-shrink-0">
                  <div className="aspect-video bg-white/60 backdrop-blur-sm rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors p-4 border border-white/50">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-3">
                      <ImageIcon className="h-6 w-6 text-white" />
                      <div className="absolute top-4 right-4 flex items-center space-x-2 text-xs text-gray-600">
                        <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="font-semibold">{post.views}</span>
                        </div>
                        <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="font-semibold">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center font-medium px-2 leading-tight">
                      {post.imageAlt}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-blue-600 text-xs font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4 leading-tight hover:text-blue-600 transition-colors group-hover:text-blue-600 line-clamp-2 flex-shrink-0">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-2">
                          <User className="h-3 w-3 text-white" />
                        </div>
                        <span className="font-semibold text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-2">{post.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm group-hover:translate-x-2 transform duration-300"
                    >
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-16">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Load More Success Stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-200">
              Join 25,000+ Successful Sellers
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Get Weekly Success Stories
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Receive exclusive case studies, advanced strategies, and insider
            tips that have generated millions in Amazon revenue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email for exclusive insights"
              className="flex-1 px-8 py-5 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none text-lg bg-white/95 backdrop-blur-sm"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
              Get Insights
            </button>
          </div>

          <p className="text-sm text-gray-300">
            ✓ Weekly success stories ✓ Advanced strategies ✓ Exclusive case
            studies ✓ No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      {/*<Footer />*/}
    </div>
  );
}
