"use client"

import { useRouter } from "next/navigation"
import {
  Zap,
  Bot,
  Workflow,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Cog,
  Database,
} from "lucide-react"
import Footer from "../website/Footer"

export default function ProcessAutomation() {
  const router = useRouter()

  const services = [
    {
      icon: <Bot className="h-8 w-8 text-blue-600" />,
      title: "Order Processing Automation",
      description: "Streamline your order fulfillment with intelligent automation",
      features: [
        "Automated order routing",
        "Inventory allocation",
        "Shipping label generation",
        "Order status updates",
        "Exception handling",
        "Multi-channel synchronization",
      ],
      price: "Starting at $399",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Inventory Forecasting & Management",
      description: "AI-powered inventory optimization and demand forecasting",
      features: [
        "Demand forecasting algorithms",
        "Automated reorder points",
        "Stock level optimization",
        "Seasonal trend analysis",
        "Supplier integration",
        "Low stock alerts",
      ],
      price: "Starting at $499",
    },
    {
      icon: <Workflow className="h-8 w-8 text-blue-600" />,
      title: "FBA Shipment Management",
      description: "Complete automation of Amazon FBA shipment processes",
      features: [
        "Automated shipment creation",
        "Label printing automation",
        "Inventory reconciliation",
        "Performance monitoring",
        "Fee optimization",
        "Compliance management",
      ],
      price: "Starting at $349",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Service Automation",
      description: "Automate customer interactions and support processes",
      features: [
        "Automated response systems",
        "Ticket routing and prioritization",
        "FAQ chatbot integration",
        "Review response automation",
        "Escalation workflows",
        "Performance analytics",
      ],
      price: "Starting at $299",
    },
    {
      icon: <Cog className="h-8 w-8 text-blue-600" />,
      title: "Workflow Optimization",
      description: "Custom workflow automation for your specific business needs",
      features: [
        "Process mapping and analysis",
        "Custom workflow design",
        "Task automation",
        "Approval workflows",
        "Performance monitoring",
        "Continuous optimization",
      ],
      price: "Starting at $599",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Integration Setup & Maintenance",
      description: "Seamless integration between all your business systems",
      features: [
        "API integrations",
        "Data synchronization",
        "System monitoring",
        "Error handling",
        "Security compliance",
        "Ongoing maintenance",
      ],
      price: "Starting at $449",
    },
  ]

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "80% Time Savings",
      description: "Reduce manual work and focus on strategic growth activities",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Cost Reduction",
      description: "Lower operational costs through efficient automation",
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "99% Accuracy",
      description: "Eliminate human errors with automated processes",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: "Scalable Growth",
      description: "Handle increased volume without proportional cost increase",
    },
  ]

  const automationAreas = [
    {
      category: "Order Management",
      processes: [
        "Order Processing & Routing",
        "Inventory Allocation",
        "Shipping & Fulfillment",
        "Order Tracking Updates",
        "Return Processing",
      ],
    },
    {
      category: "Inventory Control",
      processes: [
        "Stock Level Monitoring",
        "Automated Reordering",
        "Demand Forecasting",
        "Supplier Management",
        "Inventory Reconciliation",
      ],
    },
    {
      category: "Customer Service",
      processes: [
        "Automated Responses",
        "Ticket Management",
        "Review Monitoring",
        "Feedback Collection",
        "Escalation Handling",
      ],
    },
    {
      category: "Financial Operations",
      processes: [
        "Invoice Processing",
        "Payment Reconciliation",
        "Fee Analysis",
        "Tax Calculations",
        "Financial Reporting",
      ],
    },
  ]

  const technologies = [
    {
      name: "Zapier",
      description: "Connect 5000+ apps with automated workflows",
      logo: "⚡",
    },
    {
      name: "Amazon API",
      description: "Direct integration with Amazon systems",
      logo: "🛒",
    },
    {
      name: "Custom APIs",
      description: "Bespoke integrations for unique requirements",
      logo: "🔧",
    },
    {
      name: "AI/ML Tools",
      description: "Machine learning for intelligent automation",
      logo: "🤖",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Retailer",
      challenge: "Manual order processing taking 4 hours daily",
      solution: "Automated order workflow with inventory sync",
      result: "95% time reduction, 99.8% accuracy",
    },
    {
      title: "Amazon FBA Seller",
      challenge: "Complex shipment creation and tracking",
      solution: "End-to-end FBA automation system",
      result: "60% faster processing, 40% cost savings",
    },
    {
      title: "Multi-channel Brand",
      challenge: "Inventory sync across 5 platforms",
      solution: "Real-time inventory synchronization",
      result: "Zero stockouts, 25% inventory reduction",
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
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Process Automation</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Streamline your operations with intelligent automation solutions that save time, reduce errors, and scale
              your business efficiently
            </p>
            <button
              onClick={navigateToContact}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center hover-lift"
            >
              Automate Your Processes
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automation solutions for every aspect of your e-commerce business
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
                  <div className="text-lg font-semibold text-indigo-600">{service.price}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Automate Your Processes?</h2>
            <p className="text-xl text-gray-600">The measurable benefits of process automation</p>
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

      {/* Automation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Automate</h2>
            <p className="text-xl text-gray-600">Comprehensive automation across all business functions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.category}</h3>
                <ul className="space-y-2">
                  {area.processes.map((process, idx) => (
                    <li key={idx} className="flex items-center">
                      <Zap className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{process}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and platforms for seamless automation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-indigo-50 transition-colors cursor-pointer hover-lift"
                onClick={navigateToContact}
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-indigo-100">Real results from our automation implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-indigo-500 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-indigo-100 text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-indigo-100 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Result:</h4>
                  <p className="text-indigo-100 text-sm font-medium">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Automation Process</h2>
            <p className="text-xl text-gray-600">From analysis to implementation in 5 structured phases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Analysis</h3>
              <p className="text-gray-600 text-sm">Identify automation opportunities and pain points</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Solution Design</h3>
              <p className="text-gray-600 text-sm">Create custom automation workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Build and configure automation systems</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & Launch</h3>
              <p className="text-gray-600 text-sm">Thorough testing and gradual rollout</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's identify automation opportunities that can transform your operations and boost efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 inline-flex items-center justify-center hover-lift"
            >
              Start Automation Project
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
