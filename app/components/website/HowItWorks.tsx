"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Users, Target, BarChart3, ImageIcon, Zap, Award, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HowItWorks() {
  const router = useRouter()

  const navigateToPage = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 200)
  }

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We conduct a comprehensive analysis of your current e-commerce setup, identifying optimization opportunities and growth potential.",
      details: [
        "Complete account audit and assessment",
        "Competitor analysis and market research",
        "Performance metrics evaluation",
        "Growth opportunity identification",
      ],
      duration: "1-2 days",
      imageAlt: "Business discovery and analysis process with data visualization",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Our experts create a custom strategy tailored to your business goals, market position, and growth objectives.",
      details: [
        "Custom strategy formulation",
        "Roadmap creation",
        "Resource allocation planning",
        "Timeline and milestone setting",
      ],
      duration: "2-3 days",
      imageAlt: "Strategy development dashboard with analytics",
    },
    {
      step: "03",
      title: "Expert Implementation",
      description:
        "Our team of experts executes the optimization strategies with precision, ensuring minimal disruption to your operations.",
      details: [
        "Seamless strategy execution",
        "Real-time monitoring and adjustments",
        "Quality assurance and testing",
        "Performance optimization",
      ],
      duration: "1-2 weeks",
      imageAlt: "Implementation process with expert team collaboration",
    },
    {
      step: "04",
      title: "Monitor & Scale",
      description:
        "Continuous monitoring, optimization, and scaling to ensure sustained growth and maximum ROI for your business.",
      details: [
        "24/7 performance monitoring",
        "Continuous optimization",
        "Scaling strategies implementation",
        "Regular reporting and insights",
      ],
      duration: "Ongoing",
      imageAlt: "Monitoring and scaling dashboard with growth metrics",
    },
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Advanced Optimization",
      description: "Leverage cutting-edge technology to optimize every aspect of your e-commerce business.",
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Precision Targeting",
      description: "Advanced algorithms ensure your products reach the right customers at the right time.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on comprehensive analytics and predictive insights.",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Risk Mitigation",
      description: "Minimize risks with proven strategies and continuous monitoring systems.",
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Proven Results",
      description: "Join 500+ successful businesses that have achieved remarkable growth with our methods.",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
      title: "Expert Support",
      description: "Dedicated team of e-commerce experts providing 24/7 support and guidance.",
    },
  ]

  const timeline = [
    { phase: "Week 1", activity: "Discovery & Strategy", status: "Analysis and planning phase" },
    { phase: "Week 2-3", activity: "Implementation", status: "Executing optimization strategies" },
    { phase: "Week 4-8", activity: "Optimization", status: "Fine-tuning and performance enhancement" },
    { phase: "Week 9+", activity: "Scale & Growth", status: "Continuous improvement and scaling" },
  ]

  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Most clients see initial improvements within 2-4 weeks, with significant results typically achieved within 60-90 days. Our proven approach accelerates the optimization process for faster outcomes.",
    },
    {
      question: "What makes your approach different?",
      answer:
        "Our proprietary methods are specifically designed for e-commerce optimization, providing more accurate predictions and optimizations compared to generic solutions. We combine advanced technology with human expertise for optimal results.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with everyone from startups to enterprise-level businesses. Our solutions scale to meet the needs of any business size, with customized strategies for each client.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We employ enterprise-grade security measures including encryption, secure data centers, and compliance with industry standards. Your data is protected with the highest level of security protocols.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                How It Works
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Discover our proven process that transforms e-commerce businesses and delivers exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Our Proven Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A systematic approach that combines advanced technology with expert knowledge to deliver outstanding
              results
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-cols-2" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 gap-4">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-2xl shadow-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                          {step.title}
                        </h3>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 font-semibold text-sm sm:text-base">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      {step.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-800">What's Included:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Process Step Image Placeholder */}
                  <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-dashed border-gray-300">
                    <div className="aspect-square bg-white rounded-xl sm:rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-400 p-4">
                      <ImageIcon className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mb-4 sm:mb-6 lg:mb-8" />
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 mb-2 sm:mb-4 text-center">
                        Step {step.step}
                      </h4>
                      <p className="text-center text-sm sm:text-base lg:text-lg">{step.imageAlt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Why Our Process Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The key advantages that make our approach so effective for e-commerce growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-200 group text-center"
              >
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Project Timeline
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A clear roadmap of what to expect during your transformation journey
            </p>
          </div>

          {/* Timeline Visualization Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-dashed border-gray-300 mb-12 sm:mb-16">
            <div className="aspect-video bg-white rounded-xl sm:rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-400 p-4">
              <ImageIcon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 mb-4 sm:mb-6 lg:mb-8" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-3 sm:mb-4 lg:mb-6 text-center">
                Interactive Timeline
              </h3>
              <p className="text-center text-base sm:text-lg lg:text-xl max-w-2xl">
                Visual timeline showing project phases, milestones, and expected outcomes throughout the transformation
                process
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">{item.phase}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.activity}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Common questions about our process and approach</p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
            Take the first step towards transforming your e-commerce business with our proven process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
            <Link
              href="/contact"
              onClick={() => navigateToPage("/contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="/services"
              onClick={() => navigateToPage("/services")}
              className="border-2 border-gray-300 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
