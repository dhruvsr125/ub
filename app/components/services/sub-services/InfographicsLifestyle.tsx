"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ImageIcon, Star, Eye, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function InfographicsLifestyle() {
  const stats = [
    { label: "Images Created", value: "2,000+", icon: ImageIcon },
    { label: "Conversion Rate Boost", value: "185%", icon: TrendingUp },
    { label: "Visual Engagement Increase", value: "94%", icon: Eye },
    { label: "Client Satisfaction", value: "4.8/5", icon: Star },
  ]

  const services = [
    {
      title: "Custom Infographics",
      description: "Visually engaging graphics that explain complex product features",
      features: [
        "Feature highlights",
        "Comparison charts",
        "Size and dimension guides",
        "Process flow diagrams",
        "Benefit illustrations",
        "Data visualization",
      ],
    },
    {
      title: "Lifestyle Photography",
      description: "Professional photography that showcases products in real-world settings",
      features: [
        "In-use scenarios",
        "Contextual scenes",
        "Model photography",
        "Multi-angle shots",
        "Emotional connection",
        "Brand storytelling",
      ],
    },
    {
      title: "Image Optimization",
      description: "Optimized images for maximum visual impact and performance",
      features: [
        "Amazon compliance",
        "Visual hierarchy",
        "A/B testing",
        "Mobile optimization",
        "Fast loading speeds",
        "High-resolution quality",
      ],
    },
  ]

  const benefits = [
    "Improved product understanding",
    "Higher click-through rates",
    "Increased conversion rates",
    "Better brand perception",
    "Enhanced customer engagement",
    "Competitive advantage",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Graphics & Design</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Infographics &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Lifestyle Images
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create compelling visual content that tells your product story through stunning infographics and lifestyle
              photography that converts browsers into buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Create Visual Content
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Gallery
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Visual Content Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive visual content solutions that elevate your brand and drive sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Visual Content Matters</h2>
              <p className="text-lg text-gray-600 mb-8">
                Compelling visuals capture attention, communicate value, and drive conversions on Amazon
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
                    <ImageIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Elevate Your Brand?</h3>
                    <p className="text-gray-600 mb-6">
                      Let our design experts create stunning visuals that captivate customers and drive sales
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Get Visual Content
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
                Ready to Transform Your Visual Presence?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let our design experts create stunning visuals that captivate customers and drive sales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Start Visual Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services/graphics-design">
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Back to Design Services
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
