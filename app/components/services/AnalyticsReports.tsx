"use client"

import { useRouter } from "next/navigation"
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  DollarSign,
  Users,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Calendar,
  FileText,
  Zap,
} from "lucide-react"
import Footer from "../website/Footer"

export default function AnalyticsReports() {
  const router = useRouter()

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Custom Dashboard Creation",
      description: "Personalized dashboards with real-time data visualization",
      features: [
        "Real-time performance metrics",
        "Custom KPI tracking",
        "Interactive data visualization",
        "Multi-marketplace integration",
        "Mobile-responsive design",
        "Automated data refresh",
      ],
      price: "Starting at $499",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Sales Performance Analysis",
      description: "Comprehensive analysis of your sales trends and patterns",
      features: [
        "Sales trend analysis",
        "Revenue forecasting",
        "Product performance ranking",
        "Seasonal pattern identification",
        "Growth opportunity analysis",
        "Competitive benchmarking",
      ],
      price: "Starting at $299",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Behavior Insights",
      description: "Deep dive into customer purchasing patterns and preferences",
      features: [
        "Customer journey mapping",
        "Purchase behavior analysis",
        "Customer segmentation",
        "Retention rate analysis",
        "Lifetime value calculation",
        "Churn prediction modeling",
      ],
      price: "Starting at $399",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "Inventory Optimization Reports",
      description: "Smart inventory management with predictive analytics",
      features: [
        "Stock level optimization",
        "Demand forecasting",
        "Reorder point calculation",
        "Slow-moving inventory alerts",
        "Seasonal demand planning",
        "Supplier performance analysis",
      ],
      price: "Starting at $349",
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Automated Reporting Systems",
      description: "Set up automated reports delivered to your inbox",
      features: [
        "Scheduled report delivery",
        "Custom report templates",
        "Email and SMS alerts",
        "Exception-based reporting",
        "Multi-format exports",
        "Team collaboration features",
      ],
      price: "Starting at $199",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Revenue Reconciliation & Claims",
      description: "Ensure accurate revenue tracking and recover lost funds",
      features: [
        "Revenue reconciliation",
        "Fee analysis and optimization",
        "Refund and claims management",
        "Payment discrepancy detection",
        "Tax reporting assistance",
        "Financial audit support",
      ],
      price: "Starting at $249",
    },
  ]

  const metrics = [
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "ROI Tracking",
      description: "Monitor return on investment across all channels and campaigns",
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Market Share Analysis",
      description: "Understand your position in the marketplace relative to competitors",
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-600" />,
      title: "Seasonal Trends",
      description: "Identify and capitalize on seasonal buying patterns",
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Performance Alerts",
      description: "Real-time notifications for significant changes in key metrics",
    },
  ]

  const reportTypes = [
    {
      category: "Sales Reports",
      reports: [
        "Daily/Weekly/Monthly Sales Summary",
        "Product Performance Analysis",
        "Channel Performance Comparison",
        "Revenue Trend Analysis",
        "Profit Margin Reports",
      ],
    },
    {
      category: "Marketing Reports",
      reports: [
        "Ad Campaign Performance",
        "Keyword Ranking Reports",
        "Conversion Rate Analysis",
        "Customer Acquisition Cost",
        "Marketing ROI Analysis",
      ],
    },
    {
      category: "Operational Reports",
      reports: [
        "Inventory Level Reports",
        "Order Fulfillment Metrics",
        "Customer Service Analytics",
        "Return and Refund Analysis",
        "Supplier Performance Reports",
      ],
    },
    {
      category: "Financial Reports",
      reports: [
        "Revenue Reconciliation",
        "Fee Analysis Reports",
        "Tax Reporting",
        "Cash Flow Analysis",
        "Profit & Loss Statements",
      ],
    },
  ]

  const benefits = [
    {
      stat: "40%",
      title: "Faster Decision Making",
      description: "Real-time insights enable quicker business decisions",
    },
    {
      stat: "25%",
      title: "Cost Reduction",
      description: "Identify inefficiencies and optimize operations",
    },
    {
      stat: "60%",
      title: "Better Forecasting",
      description: "Improved accuracy in demand and revenue forecasting",
    },
    {
      stat: "35%",
      title: "Revenue Recovery",
      description: "Recover lost revenue through reconciliation and claims",
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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Analytics & Reports</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with comprehensive analytics and automated reporting
              solutions that drive business growth
            </p>
            <button
              onClick={navigateToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center hover-lift"
            >
              Get Analytics Setup
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Analytics & Reporting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data solutions to optimize your e-commerce performance
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
                  <div className="text-lg font-semibold text-blue-600">{service.price}</div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Metrics We Track</h2>
            <p className="text-xl text-gray-600">Essential KPIs for e-commerce success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Report Types</h2>
            <p className="text-xl text-gray-600">Comprehensive reporting across all business areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportTypes.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.reports.map((report, idx) => (
                    <li key={idx} className="flex items-center">
                      <FileText className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{report}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Business Impact</h2>
            <p className="text-xl text-blue-100">See the difference analytics makes to your bottom line</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Analytics Implementation Process</h2>
            <p className="text-xl text-gray-600">From data collection to actionable insights in 4 steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Integration</h3>
              <p className="text-gray-600 text-sm">Connect all your data sources and marketplaces</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dashboard Setup</h3>
              <p className="text-gray-600 text-sm">Create custom dashboards tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automation Setup</h3>
              <p className="text-gray-600 text-sm">Configure automated reports and alerts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Training & Support</h3>
              <p className="text-gray-600 text-sm">Team training and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your raw data into powerful insights that drive growth and profitability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center hover-lift"
            >
              Get Analytics Setup
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
