"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  AlertTriangle,
  Star,
  Search,
  ImageIcon,
  FileText,
  Award,
  TrendingUp,
  Eye,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ListingQualityCheck() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Listing Optimization
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Listing Quality{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Check
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive listing audits to ensure maximum performance,
              compliance, and conversion optimization. Identify and fix issues
              before they impact sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get Quality Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  View Audit Sample
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, value: "99.8%", label: "Compliance Rate" },
              {
                icon: TrendingUp,
                value: "145%",
                label: "Performance Improvement",
              },
              { icon: CheckCircle, value: "50+", label: "Quality Checkpoints" },
              { icon: Award, value: "5000+", label: "Listings Audited" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Quality Assessment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-point inspection covering every aspect of your Amazon
              listing performance
            </p>
          </div>

          <Tabs defaultValue="compliance" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="compliance"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Compliance Check
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Optimization Review
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Performance Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="compliance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Policy Compliance",
                    description:
                      "Verify adherence to Amazon's terms of service, content policies, and marketplace guidelines.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Risk Assessment",
                    description:
                      "Identify potential policy violations and compliance risks before they affect your account.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Content Guidelines",
                    description:
                      "Ensure all content meets Amazon's quality standards and prohibited content policies.",
                  },
                  {
                    icon: Award,
                    title: "Category Requirements",
                    description:
                      "Verify compliance with specific category requirements and restricted product guidelines.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Search,
                    title: "SEO Optimization",
                    description:
                      "Analyze keyword placement, density, and search optimization opportunities.",
                  },
                  {
                    icon: FileText,
                    title: "Content Quality",
                    description:
                      "Review title, bullets, description for clarity, persuasiveness, and conversion potential.",
                  },
                  {
                    icon: ImageIcon,
                    title: "Image Standards",
                    description:
                      "Assess image quality, compliance with Amazon's image requirements, and visual appeal.",
                  },
                  {
                    icon: Star,
                    title: "Competitive Analysis",
                    description:
                      "Compare your listing against top competitors to identify improvement opportunities.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: TrendingUp,
                    title: "Conversion Analysis",
                    description:
                      "Evaluate conversion rates and identify factors affecting purchase decisions.",
                  },
                  {
                    icon: Eye,
                    title: "Visibility Assessment",
                    description:
                      "Analyze search ranking performance and discoverability factors.",
                  },
                  {
                    icon: Zap,
                    title: "Performance Metrics",
                    description:
                      "Review key performance indicators including CTR, conversion rate, and sales velocity.",
                  },
                  {
                    icon: Award,
                    title: "Improvement Roadmap",
                    description:
                      "Provide actionable recommendations with prioritized improvement strategies.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Optimize Your Listings?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get a comprehensive quality audit and actionable recommendations
                to boost your listing performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact" className="flex items-center">
                    Get Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services/listing-optimization">
                    Back to Listing Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
