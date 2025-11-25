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
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  ArrowRight,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function PPCAdvertising() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Amazon PPC Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              PPC Advertising
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Drive targeted traffic and maximize ROI with our expert Amazon PPC
              management services. From campaign setup to optimization, we
              deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Campaign Audit
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

      {/* Sub-Services Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our PPC Specializations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Increase in Sales",
                description:
                  "Strategic campaigns designed to boost your sales volume and revenue",
                href: "/services/ppc-advertising/increase-in-sales",
                icon: TrendingUp,
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "Winning Ads Strategy",
                description:
                  "Data-driven advertising strategies that outperform competitors",
                href: "/services/ppc-advertising/winning-ads-strategy",
                icon: Target,
                color: "from-blue-500 to-indigo-600",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-blue-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, label: "Average ROAS", value: "4.5x" },
              { icon: TrendingUp, label: "Sales Increase", value: "180%" },
              { icon: Target, label: "Click-Through Rate", value: "12%" },
              { icon: Users, label: "Campaigns Managed", value: "1000+" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete PPC Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From campaign creation to advanced optimization, we handle every
              aspect of your Amazon advertising
            </p>
          </div>

          <Tabs defaultValue="campaigns" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Sponsored Products",
                    description:
                      "Target specific keywords to increase product visibility",
                    features: [
                      "Keyword Targeting",
                      "Product Targeting",
                      "Auto Campaigns",
                      "Manual Campaigns",
                    ],
                  },
                  {
                    title: "Sponsored Brands",
                    description: "Promote your brand and product portfolio",
                    features: [
                      "Brand Keywords",
                      "Custom Headlines",
                      "Logo Display",
                      "Store Traffic",
                    ],
                  },
                  {
                    title: "Sponsored Display",
                    description: "Retarget customers and reach new audiences",
                    features: [
                      "Audience Targeting",
                      "Product Targeting",
                      "Retargeting",
                      "Cross-selling",
                    ],
                  },
                ].map((campaign, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription>{campaign.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {campaign.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
                    title: "Keyword Optimization",
                    description:
                      "Continuous keyword research and bid optimization",
                    features: [
                      "Negative Keywords",
                      "Bid Adjustments",
                      "Match Type Optimization",
                      "Search Term Analysis",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Tuning",
                    description: "Data-driven optimizations for maximum ROI",
                    features: [
                      "Budget Allocation",
                      "Dayparting",
                      "Placement Optimization",
                      "Audience Refinement",
                    ],
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                      <CardTitle className="text-blue-900">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Advanced Analytics & Reporting
                  </CardTitle>
                  <CardDescription>
                    Comprehensive insights to drive informed advertising
                    decisions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Performance Metrics
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "ROAS Tracking",
                          "ACoS Optimization",
                          "Conversion Rates",
                          "Click-Through Rates",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Custom Reports
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Weekly Performance",
                          "Monthly Analysis",
                          "Competitor Insights",
                          "Trend Analysis",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Strategic Campaign Planning
                  </CardTitle>
                  <CardDescription>
                    Long-term strategies for sustainable advertising growth
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Launch Strategy",
                        items: [
                          "Product Launch",
                          "Market Entry",
                          "Brand Awareness",
                          "Initial Visibility",
                        ],
                      },
                      {
                        title: "Growth Strategy",
                        items: [
                          "Scale Campaigns",
                          "Expand Keywords",
                          "New Products",
                          "Market Share",
                        ],
                      },
                      {
                        title: "Mature Strategy",
                        items: [
                          "Profit Optimization",
                          "Defensive Campaigns",
                          "Brand Protection",
                          "Efficiency Focus",
                        ],
                      },
                    ].map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {category.title}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Amazon Advertising?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our PPC experts create winning campaigns that drive sales and
            maximize your ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get PPC Audit
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Campaign Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
