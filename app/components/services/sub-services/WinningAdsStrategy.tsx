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
  Target,
  Lightbulb,
  Trophy,
  Rocket,
  Brain,
  Eye,
  Zap,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function WinningAdsStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              PPC Advertising Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Winning Ads{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Craft high-converting ad campaigns with our proven strategies.
              Turn clicks into customers with compelling ad copy and strategic
              targeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Create Winning Ads
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  View Success Stories
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
              { icon: Trophy, value: "95%", label: "Campaign Success Rate" },
              {
                icon: Target,
                value: "12.5%",
                label: "Average CTR Improvement",
              },
              { icon: Rocket, value: "250%", label: "Conversion Rate Boost" },
              {
                icon: Award,
                value: "1000+",
                label: "Winning Campaigns Created",
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
              Our Winning Strategy Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven methodologies that consistently deliver high-performing ad
              campaigns
            </p>
          </div>

          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Market Research
              </TabsTrigger>
              <TabsTrigger
                value="creative"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Creative Development
              </TabsTrigger>
              <TabsTrigger
                value="optimization"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700"
              >
                Performance Optimization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="research" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Brain,
                    title: "Competitor Analysis",
                    description:
                      "Deep dive into competitor strategies to identify opportunities and market gaps.",
                  },
                  {
                    icon: Eye,
                    title: "Audience Insights",
                    description:
                      "Comprehensive audience research to understand customer behavior and preferences.",
                  },
                  {
                    icon: Target,
                    title: "Keyword Strategy",
                    description:
                      "Strategic keyword research and selection for maximum reach and relevance.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Market Trends",
                    description:
                      "Stay ahead with real-time market trend analysis and seasonal adjustments.",
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

            <TabsContent value="creative" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Lightbulb,
                    title: "Compelling Copy",
                    description:
                      "Craft persuasive ad copy that resonates with your target audience and drives action.",
                  },
                  {
                    icon: Star,
                    title: "Visual Design",
                    description:
                      "Create eye-catching visuals that stand out in crowded marketplaces.",
                  },
                  {
                    icon: Zap,
                    title: "A/B Testing",
                    description:
                      "Continuous testing of ad variations to identify top-performing creative elements.",
                  },
                  {
                    icon: Award,
                    title: "Brand Consistency",
                    description:
                      "Maintain brand voice and visual identity across all advertising touchpoints.",
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
                    icon: Target,
                    title: "Performance Tracking",
                    description:
                      "Monitor key metrics and KPIs to measure campaign effectiveness and ROI.",
                  },
                  {
                    icon: Rocket,
                    title: "Bid Management",
                    description:
                      "Optimize bidding strategies for maximum visibility and cost efficiency.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Optimization",
                    description:
                      "Improve ad quality scores through relevance and landing page optimization.",
                  },
                  {
                    icon: Trophy,
                    title: "Scaling Success",
                    description:
                      "Scale winning campaigns while maintaining performance and profitability.",
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
                Ready to Create Winning Ads?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts develop a custom ad strategy that converts
                browsers into buyers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact" className="flex items-center">
                    Start Your Strategy <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services/ppc-advertising">
                    Back to PPC Services
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
