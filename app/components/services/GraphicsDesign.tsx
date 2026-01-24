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
  Palette,
  ImageIcon,
  Store,
  TrendingUp,
  ArrowRight,
  Star,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function GraphicsDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Creative Design Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Graphics &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Design
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your Amazon presence with stunning visual content that
              converts. From EBC content to brand stores, we create designs that
              captivate and sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Design Project
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

      {/* Sub-Services Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Design Specializations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Amazon EBC A+ Content",
                description: "Enhanced brand content that tells your story",
                href: "/services/graphics-design/ebc-content-creation",
                icon: Award,
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Amazon Brand Store Design",
                description: "Custom brand stores that showcase your products",
                href: "/services/graphics-design/brand-store-design",
                icon: Store,
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "Infographics & Lifestyle Images",
                description: "Compelling visuals that drive conversions",
                href: "/services/graphics-design/infographics-lifestyle",
                icon: ImageIcon,
                color: "from-green-500 to-emerald-600",
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
              { icon: Palette, label: "Designs Created", value: "5000+" },
              { icon: TrendingUp, label: "Conversion Increase", value: "180%" },
              { icon: Star, label: "Client Satisfaction", value: "4.9/5" },
              { icon: Award, label: "Awards Won", value: "25+" },
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
              Complete Visual Design Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to execution, we create stunning visuals that enhance
              your brand and drive sales
            </p>
          </div>

          <Tabs defaultValue="branding" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <TabsTrigger value="branding" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Branding</TabsTrigger>
              <TabsTrigger value="content" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Content</TabsTrigger>
              <TabsTrigger value="lifestyle" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Lifestyle</TabsTrigger>
              <TabsTrigger value="optimization" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value="branding" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Brand Identity Design",
                    description:
                      "Create cohesive brand identity across all touchpoints",
                    features: [
                      "Logo Design",
                      "Color Palette",
                      "Typography",
                      "Brand Guidelines",
                    ],
                  },
                  {
                    title: "Amazon Brand Store",
                    description:
                      "Custom brand stores that showcase your products",
                    features: [
                      "Store Layout",
                      "Navigation Design",
                      "Product Showcases",
                      "Brand Storytelling",
                    ],
                  },
                  {
                    title: "Enhanced Brand Content",
                    description:
                      "A+ content that elevates your product listings",
                    features: [
                      "Comparison Charts",
                      "Feature Highlights",
                      "Brand Story",
                      "Product Benefits",
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

            <TabsContent value="content" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Award,
                    title: "A+ Content Creation",
                    description: "Premium enhanced brand content for Amazon",
                    features: [
                      "Comparison Modules",
                      "Feature Highlights",
                      "Brand Story Modules",
                      "Product Galleries",
                    ],
                  },
                  {
                    icon: ImageIcon,
                    title: "Product Photography",
                    description: "Professional product images that sell",
                    features: [
                      "Studio Photography",
                      "Lifestyle Shots",
                      "360° Views",
                      "Detail Shots",
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

            <TabsContent value="lifestyle" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <ImageIcon className="h-6 w-6 mr-2" />
                    Lifestyle & Infographic Design
                  </CardTitle>
                  <CardDescription>
                    Create compelling visuals that connect with your audience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Lifestyle Photography
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "In-Use Scenarios",
                          "Lifestyle Settings",
                          "Model Photography",
                          "Contextual Shots",
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
                        Infographic Design
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Feature Comparisons",
                          "Size Guides",
                          "How-to Graphics",
                          "Benefit Illustrations",
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

            <TabsContent value="optimization" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Design Optimization & Testing
                  </CardTitle>
                  <CardDescription>
                    Continuously improve your visual content for maximum impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "A/B Testing",
                        items: [
                          "Image Variations",
                          "Layout Testing",
                          "Color Schemes",
                          "Performance Tracking",
                        ],
                      },
                      {
                        title: "Mobile Optimization",
                        items: [
                          "Mobile-First Design",
                          "Touch-Friendly",
                          "Fast Loading",
                          "Responsive Layout",
                        ],
                      },
                      {
                        title: "Conversion Focus",
                        items: [
                          "CTA Placement",
                          "Visual Hierarchy",
                          "Trust Signals",
                          "Social Proof",
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
            Ready to Transform Your Visual Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our design experts create stunning visuals that captivate
            customers and drive sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Design Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Design Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
