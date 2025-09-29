"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Shield,
  CheckCircle,
  FileText,
  Award,
  Clock,
  Star,
  Zap,
  Target,
  TrendingUp,
  Eye,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function BrandCategoryApproval() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Listing Optimization</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Brand & Category{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Approval
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Navigate Amazon's complex approval processes with expert guidance. Get your brand registered and access
              restricted categories quickly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get Approval Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Success Cases
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
              { icon: Shield, value: "98%", label: "Approval Success Rate" },
              { icon: Clock, value: "7 Days", label: "Average Approval Time" },
              { icon: Award, value: "500+", label: "Brands Registered" },
              { icon: Star, value: "50+", label: "Categories Unlocked" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Approval Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support for brand registration and category approval processes
            </p>
          </div>

          <Tabs defaultValue="brand" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="brand" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Brand Registration
              </TabsTrigger>
              <TabsTrigger value="category" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Category Approval
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Ongoing Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="brand" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Brand Registry Setup",
                    description:
                      "Complete Amazon Brand Registry application with trademark verification and documentation.",
                  },
                  {
                    icon: FileText,
                    title: "Documentation Preparation",
                    description:
                      "Prepare all required documents including trademark certificates and brand authorization letters.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Application Review",
                    description:
                      "Thorough review of application materials to ensure compliance and maximize approval chances.",
                  },
                  {
                    icon: Zap,
                    title: "Fast-Track Processing",
                    description: "Expedited processing with direct Amazon contacts to reduce approval timeframes.",
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

            <TabsContent value="category" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Category Assessment",
                    description: "Evaluate your products against category requirements and identify approval pathways.",
                  },
                  {
                    icon: Users,
                    title: "Ungating Services",
                    description:
                      "Professional ungating for restricted categories including health, beauty, grocery, and more.",
                  },
                  {
                    icon: Award,
                    title: "Compliance Verification",
                    description: "Ensure all products meet category-specific requirements and safety standards.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Monitoring",
                    description:
                      "Monitor category performance metrics to maintain good standing and avoid restrictions.",
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

            <TabsContent value="support" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Eye,
                    title: "Account Monitoring",
                    description:
                      "Continuous monitoring of brand and category status to prevent issues and maintain compliance.",
                  },
                  {
                    icon: Star,
                    title: "Issue Resolution",
                    description:
                      "Quick resolution of any brand or category-related issues that may arise post-approval.",
                  },
                  {
                    icon: Clock,
                    title: "Renewal Management",
                    description:
                      "Proactive management of brand registry renewals and category maintenance requirements.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Expansion Support",
                    description: "Support for expanding into additional categories and international marketplaces.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Approved?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts handle your brand registration and category approval process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact" className="flex items-center">
                    Start Approval Process <ArrowRight className="ml-2 h-4 w-4" />
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
