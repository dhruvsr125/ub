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
  Search,
  Target,
  TrendingUp,
  BarChart3,
  Eye,
  Zap,
  Award,
  CheckCircle,
  Star,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function KeywordResearch() {
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
              Keyword Research &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Competitive Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Uncover high-converting keywords and gain competitive intelligence
              to dominate Amazon search results and outperform competitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Keyword Research <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-500"
                >
                  View Research Sample
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
              { icon: Search, value: "10K+", label: "Keywords Analyzed Daily" },
              {
                icon: TrendingUp,
                value: "220%",
                label: "Average Ranking Improvement",
              },
              { icon: Target, value: "95%", label: "Keyword Accuracy Rate" },
              {
                icon: Award,
                value: "1500+",
                label: "Successful Research Projects",
              },
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
              Advanced Research Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive keyword research and competitive analysis using
              cutting-edge tools and techniques
            </p>
          </div>

          <Tabs defaultValue="keyword" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="keyword"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Keyword Research
              </TabsTrigger>
              <TabsTrigger
                value="competitive"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Competitive Analysis
              </TabsTrigger>
              <TabsTrigger
                value="strategy"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Strategy Implementation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="keyword" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Search,
                    title: "Seed Keyword Discovery",
                    description:
                      "Identify primary and secondary keywords relevant to your product category and niche.",
                  },
                  {
                    icon: BarChart3,
                    title: "Search Volume Analysis",
                    description:
                      "Analyze search volumes, trends, and seasonal patterns for optimal keyword selection.",
                  },
                  {
                    icon: Target,
                    title: "Long-tail Keywords",
                    description:
                      "Discover high-converting long-tail keywords with lower competition and higher intent.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Keyword Difficulty Assessment",
                    description:
                      "Evaluate keyword difficulty and competition levels to prioritize winnable keywords.",
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

            <TabsContent value="competitive" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Eye,
                    title: "Competitor Identification",
                    description:
                      "Identify direct and indirect competitors in your product category and market segment.",
                  },
                  {
                    icon: Brain,
                    title: "Keyword Gap Analysis",
                    description:
                      "Discover keywords your competitors rank for that you're missing opportunities on.",
                  },
                  {
                    icon: Star,
                    title: "Ranking Analysis",
                    description:
                      "Analyze competitor keyword rankings and identify weaknesses to exploit.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Strategy Insights",
                    description:
                      "Extract actionable insights from competitor strategies and market positioning.",
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

            <TabsContent value="strategy" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Keyword Mapping",
                    description:
                      "Strategic keyword mapping to optimize product listings and PPC campaigns.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Implementation Plan",
                    description:
                      "Detailed implementation roadmap with prioritized keyword integration strategies.",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Tracking",
                    description:
                      "Set up tracking systems to monitor keyword performance and ranking improvements.",
                  },
                  {
                    icon: Award,
                    title: "Ongoing Optimization",
                    description:
                      "Continuous keyword research and optimization based on performance data and trends.",
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
                Ready to Dominate Search Results?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get comprehensive keyword research and competitive analysis to
                outrank your competition
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact" className="flex items-center">
                    Start Research Project{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
