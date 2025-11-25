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
  ImageIcon,
  Palette,
  Star,
  Award,
  Eye,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function EBCContentCreation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Graphics & Design
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Amazon EBC A+{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Content Creation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your product listings with stunning Enhanced Brand
              Content that tells your brand story and drives conversions through
              visual storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Create EBC Content
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  View Portfolio
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
              {
                icon: TrendingUp,
                value: "165%",
                label: "Average Conversion Increase",
              },
              { icon: Eye, value: "89%", label: "Higher Engagement Rate" },
              {
                icon: Star,
                value: "4.9/5",
                label: "Client Satisfaction Score",
              },
              { icon: Award, value: "800+", label: "EBC Pages Created" },
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
              Professional EBC Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete Enhanced Brand Content creation from concept to
              implementation
            </p>
          </div>

          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="design"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Design & Creation
              </TabsTrigger>
              <TabsTrigger
                value="content"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Content Strategy
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Performance Optimization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Palette,
                    title: "Custom Design",
                    description:
                      "Unique, brand-aligned designs that stand out and reflect your brand personality.",
                  },
                  {
                    icon: ImageIcon,
                    title: "High-Quality Graphics",
                    description:
                      "Professional graphics and imagery that showcase your products in the best light.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Creative Layouts",
                    description:
                      "Innovative layout designs that guide customers through your product story effectively.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Brand Consistency",
                    description:
                      "Maintain consistent brand identity across all EBC modules and product listings.",
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

            <TabsContent value="content" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Strategic Messaging",
                    description:
                      "Craft compelling messages that resonate with your target audience and drive action.",
                  },
                  {
                    icon: Users,
                    title: "Customer Journey Mapping",
                    description:
                      "Design content flow that guides customers from awareness to purchase decision.",
                  },
                  {
                    icon: Star,
                    title: "Feature Highlighting",
                    description:
                      "Strategically showcase key product features and benefits that matter most to buyers.",
                  },
                  {
                    icon: Award,
                    title: "Trust Building",
                    description:
                      "Include trust signals, certifications, and social proof to build customer confidence.",
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
                    icon: Eye,
                    title: "A/B Testing",
                    description:
                      "Test different EBC variations to identify the highest-converting designs and content.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Tracking",
                    description:
                      "Monitor EBC performance metrics and make data-driven optimization decisions.",
                  },
                  {
                    icon: Zap,
                    title: "Mobile Optimization",
                    description:
                      "Ensure EBC content displays perfectly across all devices and screen sizes.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Continuous Improvement",
                    description:
                      "Regular updates and improvements based on performance data and market trends.",
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
                Ready to Transform Your Listings?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Create stunning EBC content that tells your brand story and
                converts visitors into customers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact" className="flex items-center">
                    Start EBC Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services/graphics-design">
                    Back to Design Services
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
