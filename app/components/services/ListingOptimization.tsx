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
  Search,
  FileText,
  Award,
  TrendingUp,
  ArrowRight,
  Star,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function ListingOptimization() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Amazon Listing Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Listing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your Amazon listings into conversion machines with our
              comprehensive optimization services. From creation to quality
              checks, we ensure maximum visibility and sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Optimize My Listings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  View Success Cases
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
              Our Listing Optimization Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Listing Creation",
                description: "Professional listing creation from scratch",
                href: "/services/listing-optimization/listing-creation",
                icon: FileText,
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Listing Quality Check",
                description: "Comprehensive audit and quality assessment",
                href: "/services/listing-optimization/listing-quality-check",
                icon: Star,
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "Keyword Research",
                description: "Advanced keyword research & competitive analysis",
                href: "/services/listing-optimization/keyword-research",
                icon: Search,
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Brand & Category Approval",
                description: "Navigate approval processes successfully",
                href: "/services/listing-optimization/brand-category-approval",
                icon: Award,
                color: "from-orange-500 to-red-600",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-blue-900 group-hover:text-blue-700 transition-colors text-sm">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
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
              { icon: TrendingUp, label: "Conversion Increase", value: "250%" },
              { icon: Search, label: "Keywords Optimized", value: "10K+" },
              { icon: Star, label: "Listings Created", value: "5000+" },
              { icon: Award, label: "Success Rate", value: "98%" },
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
              Complete Listing Optimization Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From keyword research to final optimization, we handle every
              aspect of your Amazon listings
            </p>
          </div>

          <Tabs defaultValue="creation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="creation">Creation</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
            </TabsList>

            <TabsContent value="creation" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Product Title Optimization",
                    description:
                      "Craft compelling titles that rank and convert",
                    features: [
                      "Keyword Integration",
                      "Character Optimization",
                      "Brand Positioning",
                      "Search Visibility",
                    ],
                  },
                  {
                    title: "Bullet Points & Features",
                    description:
                      "Highlight key benefits and features effectively",
                    features: [
                      "Benefit-Focused",
                      "Keyword Rich",
                      "Scannable Format",
                      "Conversion Optimized",
                    ],
                  },
                  {
                    title: "Product Description",
                    description:
                      "Detailed descriptions that inform and persuade",
                    features: [
                      "HTML Formatting",
                      "Keyword Density",
                      "Story Telling",
                      "Call-to-Action",
                    ],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
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
                    title: "SEO Optimization",
                    description: "Optimize for Amazon's search algorithm",
                    features: [
                      "A9 Algorithm",
                      "Keyword Placement",
                      "Search Ranking",
                      "Visibility Boost",
                    ],
                  },
                  {
                    icon: TrendingUp,
                    title: "Conversion Optimization",
                    description: "Maximize conversion rates and sales",
                    features: [
                      "A/B Testing",
                      "Copy Optimization",
                      "Image Enhancement",
                      "Trust Building",
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

            <TabsContent value="research" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Search className="h-6 w-6 mr-2" />
                    Advanced Keyword Research & Analysis
                  </CardTitle>
                  <CardDescription>
                    Comprehensive keyword research to dominate your niche
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Keyword Discovery
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "High-Volume Keywords",
                          "Long-Tail Keywords",
                          "Competitor Keywords",
                          "Trending Terms",
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
                        Competitive Analysis
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Competitor Listings",
                          "Market Gaps",
                          "Pricing Analysis",
                          "Feature Comparison",
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

            <TabsContent value="compliance" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Brand & Category Compliance
                  </CardTitle>
                  <CardDescription>
                    Navigate Amazon's approval processes successfully
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Brand Registry",
                        items: [
                          "Trademark Support",
                          "Brand Protection",
                          "Enhanced Content",
                          "A+ Content Access",
                        ],
                      },
                      {
                        title: "Category Approval",
                        items: [
                          "Gated Categories",
                          "Documentation",
                          "Compliance Check",
                          "Application Support",
                        ],
                      },
                      {
                        title: "Policy Compliance",
                        items: [
                          "Amazon Guidelines",
                          "Content Policies",
                          "Image Requirements",
                          "Listing Standards",
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
            Ready to Optimize Your Listings?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts transform your listings into high-converting sales
            machines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Listing Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Before & After
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
