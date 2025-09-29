"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, TrendingUp, Target, CheckCircle, Star, Award } from "lucide-react"
import Link from "next/link"

export default function InventoryForecasting() {
  const stats = [
    { label: "Forecast Accuracy", value: "95%", icon: TrendingUp },
    { label: "Inventory Cost Reduction", value: "40%", icon: Target },
    { label: "Stockout Prevention", value: "99.2%", icon: CheckCircle },
    { label: "Products Managed", value: "1000+", icon: Award },
  ]

  const forecastingMethods = [
    {
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms for accurate predictions",
      features: [
        "Historical data analysis",
        "Real-time updates",
        "Multi-variable analysis",
        "Scenario planning",
        "Demand sensing",
        "Trend forecasting",
      ],
    },
    {
      title: "Statistical Modeling",
      description: "Proven statistical models for reliable inventory planning",
      features: [
        "Time series analysis",
        "Regression modeling",
        "Seasonal adjustments",
        "Promotional impact analysis",
        "Lead time optimization",
        "Safety stock calculations",
      ],
    },
    {
      title: "Expert Analysis",
      description: "Expert insights and recommendations from experienced inventory analysts",
      features: [
        "Market trend analysis",
        "Competitor analysis",
        "Supply chain optimization",
        "Risk assessment",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
  ]

  const benefits = [
    "Reduced inventory costs",
    "Minimized stockouts",
    "Improved cash flow",
    "Enhanced customer satisfaction",
    "Better supply chain efficiency",
    "Increased profitability",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Inventory Management</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Inventory{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Forecasting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Optimize your inventory levels with AI-powered forecasting that prevents stockouts, reduces storage costs,
              and maximizes profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Forecasting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center backdrop-blur-sm bg-white/70 border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Forecasting Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Forecasting Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced techniques for accurate and reliable inventory predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forecastingMethods.map((method, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Accurate Forecasting Matters</h2>
              <p className="text-lg text-gray-600 mb-8">
                Accurate inventory forecasting is essential for optimizing stock levels, reducing costs, and maximizing
                profitability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Inventory?</h3>
                    <p className="text-gray-600 mb-6">
                      Get a free consultation and discover how we can improve your inventory forecasting accuracy.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Take Control of Your Inventory with Accurate Forecasting
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let our experts help you optimize your inventory levels and maximize your profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Start Optimizing Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services/inventory-management">
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Back to Inventory Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
