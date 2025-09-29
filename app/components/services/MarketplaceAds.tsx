"use client"

import { useRouter } from "next/navigation"
import { Target, BarChart3, CheckCircle, ArrowRight, DollarSign, Clock, Eye } from "lucide-react"
import Footer from "../website/Footer"

export default function MarketplaceAds() {
  const router = useRouter()

  const platforms = [
    { name: "Amazon PPC", logo: "🛒", features: ["Sponsored Products", "Sponsored Brands", "Sponsored Display"] },
    { name: "eBay Promoted", logo: "🏪", features: ["Promoted Listings", "Promoted Listings Advanced"] },
    { name: "Walmart Connect", logo: "🛍️", features: ["Search In-Grid", "Product Carousel", "Brand Amplifier"] },
    { name: "Google Shopping", logo: "🔍", features: ["Shopping Campaigns", "Smart Shopping", "Performance Max"] },
  ]

  const services = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Campaign Strategy & Setup",
      description: "Comprehensive campaign strategy development and professional setup across all platforms",
      features: [
        "Market research & competitor analysis",
        "Keyword research & selection",
        "Campaign structure optimization",
        "Ad group organization",
        "Targeting strategy development",
      ],
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Bid Management & Optimization",
      description: "Advanced bid management strategies to maximize ROI and minimize wasted ad spend",
      features: [
        "Automated bid optimization",
        "Dayparting strategies",
        "Seasonal bid adjustments",
        "Competitor bid analysis",
        "Budget allocation optimization",
      ],
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Ad Creative Development",
      description: "High-converting ad creatives and copy that drive clicks and conversions",
      features: [
        "Ad copy creation & testing",
        "Image optimization",
        "Video ad production",
        "A/B testing campaigns",
        "Creative performance analysis",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Performance Monitoring",
      description: "Continuous monitoring and optimization for maximum campaign performance",
      features: [
        "Real-time performance tracking",
        "Daily optimization tasks",
        "Weekly performance reports",
        "Monthly strategy reviews",
        "ROI analysis & recommendations",
      ],
    },
  ]

  const results = [
    { metric: "340%", label: "Average ROAS", description: "Return on ad spend achieved" },
    { metric: "65%", label: "Cost Reduction", description: "Average decrease in cost per click" },
    { metric: "180%", label: "Sales Increase", description: "Average sales growth from ads" },
    { metric: "24hrs", label: "Response Time", description: "Campaign optimization response" },
  ]

  const caseStudies = [
    {
      client: "Electronics Brand",
      challenge: "High ACoS and low conversion rates",
      solution: "Restructured campaigns, optimized keywords, improved ad copy",
      results: "Reduced ACoS from 45% to 18%, increased sales by 220%",
      timeframe: "3 months",
    },
    {
      client: "Fashion Retailer",
      challenge: "Limited visibility and poor ad performance",
      solution: "Comprehensive keyword research, new campaign structure, creative optimization",
      results: "Increased impressions by 400%, improved CTR by 85%",
      timeframe: "2 months",
    },
  ]

  const navigateToContact = () => {
    router.push("/contact")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketplace Advertising Management</h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert management of your marketplace advertising campaigns across Amazon, eBay, Walmart, and Google
                Shopping for maximum ROI and sales growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={navigateToContact}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    router.push("/services")
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }, 100)
                  }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Platforms We Manage</h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{platform.logo}</div>
                    <div className="font-semibold text-sm">{platform.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Multi-Platform Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive advertising management across all major e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{platform.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Ad Management Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your advertising campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover-lift transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Advertising Results</h2>
            <p className="text-xl text-blue-100">The impact of professional ad management</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{result.metric}</div>
                <div className="text-blue-200 text-lg font-semibold mb-1">{result.label}</div>
                <div className="text-blue-100 text-sm">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from our advertising campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.client}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-blue-600 font-semibold">{study.results}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Achieved in {study.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Advertising?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts optimize your marketplace advertising campaigns for maximum ROI
          </p>
          <button
            onClick={navigateToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center hover-lift"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
