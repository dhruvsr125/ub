"use client"

import { useRouter } from "next/navigation"
import {
  Camera,
  PenTool,
  Palette,
  ImageIcon,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"
import Footer from "../website/Footer"

export default function ContentCreation() {
  const router = useRouter()

  const services = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Amazon EBC A+ Content Creation",
      description: "Enhanced Brand Content that converts browsers into buyers",
      features: [
        "Professional A+ content modules",
        "Brand storytelling design",
        "Comparison charts & tables",
        "Enhanced product descriptions",
        "Mobile-optimized layouts",
        "Conversion-focused design",
      ],
      price: "Starting at $299",
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "Amazon Brand Store Design",
      description: "Complete brand store setup and optimization",
      features: [
        "Custom brand store design",
        "Multi-page store layout",
        "Product showcase pages",
        "Brand story integration",
        "Navigation optimization",
        "Mobile responsiveness",
      ],
      price: "Starting at $599",
    },
    {
      icon: <ImageIcon className="h-8 w-8 text-blue-600" />,
      title: "Infographics & Lifestyle Images",
      description: "Eye-catching visuals that highlight product benefits",
      features: [
        "Custom infographic design",
        "Lifestyle photography",
        "Product benefit highlights",
        "Comparison infographics",
        "Social media ready images",
        "Brand-consistent design",
      ],
      price: "Starting at $199",
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Product Photography",
      description: "Professional product photography for maximum impact",
      features: [
        "High-resolution product photos",
        "Multiple angle shots",
        "Lifestyle photography",
        "White background images",
        "Detail and feature shots",
        "Amazon compliant images",
      ],
      price: "Starting at $149",
    },
    {
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      title: "Graphics & Design Services",
      description: "Complete graphic design solutions for your brand",
      features: [
        "Logo and brand identity",
        "Packaging design",
        "Marketing materials",
        "Social media graphics",
        "Banner and ad design",
        "Print-ready designs",
      ],
      price: "Starting at $99",
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Brand Content Optimization",
      description: "Optimize existing content for better performance",
      features: [
        "Content performance analysis",
        "A/B testing setup",
        "Conversion optimization",
        "SEO content enhancement",
        "Brand consistency review",
        "Performance reporting",
      ],
      price: "Starting at $249",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Increased Conversion Rates",
      description: "Professional content can increase conversion rates by up to 40%",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Enhanced Brand Trust",
      description: "Quality visuals build customer confidence and brand credibility",
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Competitive Advantage",
      description: "Stand out from competitors with premium content and design",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Faster Time to Market",
      description: "Quick turnaround times to get your products live faster",
    },
  ]

  const portfolio = [
    {
      category: "A+ Content",
      projects: "150+",
      description: "Enhanced Brand Content modules created",
    },
    {
      category: "Brand Stores",
      projects: "75+",
      description: "Complete brand stores designed and launched",
    },
    {
      category: "Product Photos",
      projects: "500+",
      description: "Professional product photos delivered",
    },
    {
      category: "Infographics",
      projects: "300+",
      description: "Custom infographics and lifestyle images",
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
      <section className="bg-gradient-to-br from-purple-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Content Creation & Design Services</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Professional content creation and design services that enhance your brand presence and drive conversions
              across all marketplaces
            </p>
            <button
              onClick={navigateToContact}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center hover-lift"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Content & Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive creative solutions to elevate your brand and boost sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover-lift transition-all duration-300 cursor-pointer"
                onClick={navigateToContact}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-purple-600">{service.price}</div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Invest in Professional Content?</h2>
            <p className="text-xl text-gray-600">The measurable impact of quality content and design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Creative Portfolio</h2>
            <p className="text-xl text-purple-100">Proven results across hundreds of successful projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{item.projects}</div>
                <h3 className="text-xl font-semibold mb-2">{item.category}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Creative Process</h2>
            <p className="text-xl text-gray-600">From concept to completion in 5 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Brief & Discovery</h3>
              <p className="text-gray-600 text-sm">Understanding your brand, products, and goals</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Concept Development</h3>
              <p className="text-gray-600 text-sm">Creating initial concepts and design direction</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design & Creation</h3>
              <p className="text-gray-600 text-sm">Professional design and content creation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Review & Refine</h3>
              <p className="text-gray-600 text-sm">Client feedback and design refinements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery & Launch</h3>
              <p className="text-gray-600 text-sm">Final delivery and marketplace implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand Presence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create compelling content that converts browsers into loyal customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-200 inline-flex items-center justify-center hover-lift"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => {
                router.push("/services")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }}
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
