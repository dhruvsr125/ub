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
  Users,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AmazonAccountManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Professional Amazon Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Amazon Account
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive Amazon account management services to optimize your
              seller performance, increase sales, and ensure compliance with
              Amazon's policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-500"
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
              { icon: Users, label: "Accounts Managed", value: "500+" },
              {
                icon: TrendingUp,
                label: "Average Sales Increase",
                value: "150%",
              },
              { icon: Shield, label: "Account Health Score", value: "98%" },
              { icon: Star, label: "Client Satisfaction", value: "4.9/5" },
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
              Complete Account Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to optimization, we handle every aspect of your Amazon
              business
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Account Setup & Configuration",
                    description:
                      "Complete Amazon seller account setup with optimal configurations",
                    features: [
                      "Seller Central Setup",
                      "Tax Configuration",
                      "Payment Setup",
                      "Shipping Settings",
                    ],
                  },
                  {
                    title: "Daily Account Monitoring",
                    description:
                      "24/7 monitoring of your account health and performance metrics",
                    features: [
                      "Performance Tracking",
                      "Health Monitoring",
                      "Issue Detection",
                      "Alert System",
                    ],
                  },
                  {
                    title: "Customer Service Management",
                    description:
                      "Professional customer service to maintain high seller ratings",
                    features: [
                      "Message Management",
                      "Return Handling",
                      "Feedback Management",
                      "Review Monitoring",
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
                    icon: BarChart3,
                    title: "Performance Optimization",
                    description:
                      "Optimize your account metrics for better visibility and sales",
                    features: [
                      "ODR Optimization",
                      "Cancellation Rate Management",
                      "Late Shipment Reduction",
                      "Defect Rate Control",
                    ],
                  },
                  {
                    icon: Target,
                    title: "Listing Enhancement",
                    description:
                      "Improve product listings for maximum conversion rates",
                    features: [
                      "Title Optimization",
                      "Bullet Point Enhancement",
                      "Description Improvement",
                      "Image Optimization",
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

            <TabsContent value="compliance" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Amazon Policy Compliance
                  </CardTitle>
                  <CardDescription>
                    Stay compliant with Amazon's ever-changing policies and
                    guidelines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Policy Monitoring
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Terms of Service Updates",
                          "Policy Change Alerts",
                          "Compliance Audits",
                          "Risk Assessment",
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
                        Issue Resolution
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Account Suspension Recovery",
                          "Policy Violation Appeals",
                          "Reinstatement Support",
                          "Preventive Measures",
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

            <TabsContent value="growth" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Growth Strategies
                  </CardTitle>
                  <CardDescription>
                    Strategic initiatives to scale your Amazon business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Market Expansion",
                        items: [
                          "New Marketplace Entry",
                          "International Selling",
                          "Category Expansion",
                          "Product Line Growth",
                        ],
                      },
                      {
                        title: "Brand Building",
                        items: [
                          "Brand Registry",
                          "A+ Content",
                          "Brand Store",
                          "Enhanced Brand Content",
                        ],
                      },
                      {
                        title: "Revenue Optimization",
                        items: [
                          "Pricing Strategy",
                          "Inventory Planning",
                          "Promotional Campaigns",
                          "Seasonal Optimization",
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
            Ready to Optimize Your Amazon Account?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts manage your Amazon account while you focus on
            growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-white-800 hover:text-blue-700 hover:bg-blue-50"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
