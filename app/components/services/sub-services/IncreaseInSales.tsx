"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Zap,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function IncreaseInSales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">PPC Advertising Management</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Increase in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Drive exponential sales growth with our data-driven PPC strategies. Maximize your ROI and dominate
              Amazon's competitive marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Growing Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "300%", label: "Average Sales Increase" },
              { icon: Target, value: "85%", label: "Campaign Success Rate" },
              { icon: DollarSign, value: "4.2x", label: "Average ROAS" },
              { icon: BarChart3, value: "500+", label: "Successful Campaigns" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sales Growth Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PPC management designed to maximize your sales potential
            </p>
          </div>

          <Tabs defaultValue="optimization" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Campaign Optimization
              </TabsTrigger>
              <TabsTrigger value="targeting" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Advanced Targeting
              </TabsTrigger>
              <TabsTrigger value="scaling" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Sales Scaling
              </TabsTrigger>
            </TabsList>

            <TabsContent value="optimization" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Bid Optimization",
                    description:
                      "AI-powered bid management to maximize your ad spend efficiency and increase profitable sales.",
                  },
                  {
                    icon: Target,
                    title: "Keyword Refinement",
                    description:
                      "Continuous keyword research and negative keyword optimization to improve campaign performance.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Monitoring",
                    description:
                      "Real-time campaign monitoring with instant adjustments to capitalize on opportunities.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Score Improvement",
                    description:
                      "Enhance ad relevance and landing page experience to reduce costs and increase visibility.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="targeting" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Audience Segmentation",
                    description:
                      "Precise audience targeting based on demographics, interests, and buying behavior patterns.",
                  },
                  {
                    icon: Star,
                    title: "Product Targeting",
                    description: "Strategic product and competitor targeting to capture high-intent shoppers.",
                  },
                  {
                    icon: Award,
                    title: "Lookalike Audiences",
                    description:
                      "Expand reach by targeting users similar to your best customers for higher conversion rates.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Behavioral Targeting",
                    description:
                      "Target users based on their shopping behavior and purchase history for maximum relevance.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scaling" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: DollarSign,
                    title: "Budget Scaling",
                    description: "Strategic budget allocation and scaling to maximize profitable growth opportunities.",
                  },
                  {
                    icon: BarChart3,
                    title: "Market Expansion",
                    description: "Expand into new markets and demographics while maintaining profitability.",
                  },
                  {
                    icon: Zap,
                    title: "Automation Setup",
                    description: "Implement advanced automation rules for efficient campaign management at scale.",
                  },
                  {
                    icon: Target,
                    title: "Performance Tracking",
                    description: "Comprehensive tracking and attribution to measure true ROI and optimize accordingly.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Skyrocket Your Sales?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our PPC experts create a custom strategy to dramatically increase your Amazon sales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact" className="flex items-center">
                    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services/ppc-advertising">Back to PPC Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
