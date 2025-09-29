"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  FileText,
  Search,
  ImageIcon,
  Star,
  CheckCircle,
  Zap,
  Target,
  Award,
  TrendingUp,
  Eye,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function ListingCreation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Listing Optimization</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Listing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Creation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create compelling Amazon listings that convert browsers into buyers. Professional listing creation that
              maximizes visibility and sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Create Perfect Listing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Sample Listings
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
              { icon: Star, value: "98%", label: "Listing Approval Rate" },
              { icon: TrendingUp, value: "180%", label: "Average Sales Increase" },
              { icon: Eye, value: "75%", label: "Higher Click-Through Rate" },
              { icon: Award, value: "2500+", label: "Listings Created" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Listing Creation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research to launch, we handle every aspect of your Amazon listing creation
            </p>
          </div>

          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="research" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Research & Planning
              </TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Content Creation
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Launch & Optimization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="research" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Search,
                    title: "Market Research",
                    description: "Comprehensive market analysis to identify opportunities and competitive positioning.",
                  },
                  {
                    icon: Target,
                    title: "Keyword Research",
                    description: "In-depth keyword research to maximize discoverability and search ranking potential.",
                  },
                  {
                    icon: Eye,
                    title: "Competitor Analysis",
                    description:
                      "Analyze top competitors to identify best practices and differentiation opportunities.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Strategy Development",
                    description: "Create a comprehensive listing strategy tailored to your product and market.",
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

            <TabsContent value="content" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Title Optimization",
                    description:
                      "Craft compelling, keyword-rich titles that capture attention and improve search visibility.",
                  },
                  {
                    icon: Star,
                    title: "Bullet Points",
                    description:
                      "Create persuasive bullet points that highlight key features and benefits effectively.",
                  },
                  {
                    icon: ImageIcon,
                    title: "Product Images",
                    description: "Professional product photography and image optimization for maximum visual impact.",
                  },
                  {
                    icon: Award,
                    title: "Product Description",
                    description: "Write detailed, engaging product descriptions that convert browsers into buyers.",
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

            <TabsContent value="optimization" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Launch Strategy",
                    description: "Strategic product launch with optimized pricing and promotional campaigns.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Monitoring",
                    description: "Continuous monitoring of listing performance with data-driven optimizations.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    description: "Thorough quality checks to ensure compliance with Amazon's guidelines and policies.",
                  },
                  {
                    icon: Target,
                    title: "Ongoing Optimization",
                    description: "Regular updates and improvements based on performance data and market changes.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Perfect Listing?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts create a high-converting Amazon listing that drives sales from day one
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact" className="flex items-center">
                    Start Your Listing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services/listing-optimization">Back to Listing Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
