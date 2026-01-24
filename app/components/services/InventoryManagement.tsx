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
  Package,
  TrendingUp,
  Truck,
  BarChart3,
  ArrowRight,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function InventoryManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Inventory Optimization Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Inventory
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Optimize your inventory levels, reduce costs, and prevent
              stockouts with our intelligent inventory management solutions.
              From forecasting to FBA shipment management, we keep your business
              running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Optimize My Inventory
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
              Our Inventory Management Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Inventory Forecasting",
                description:
                  "Advanced demand forecasting and inventory planning",
                href: "/services/inventory-management/inventory-forecasting",
                icon: BarChart3,
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "FBA Shipment Management",
                description: "Streamlined FBA shipment planning and execution",
                href: "/services/inventory-management/fba-shipment-management",
                icon: Truck,
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
              { icon: Package, label: "Products Managed", value: "25K+" },
              { icon: TrendingUp, label: "Cost Reduction", value: "30%" },
              { icon: Target, label: "Forecast Accuracy", value: "95%" },
              { icon: Zap, label: "Stockout Prevention", value: "98%" },
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
              Complete Inventory Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From demand forecasting to shipment optimization, we handle every
              aspect of your inventory management
            </p>
          </div>

          <Tabs defaultValue="forecasting" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <TabsTrigger value="forecasting" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Forecasting</TabsTrigger>
              <TabsTrigger value="optimization" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Optimization</TabsTrigger>
              <TabsTrigger value="automation" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Automation</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="forecasting" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Demand Forecasting",
                    description:
                      "Advanced predictions for optimal inventory levels",
                    features: [
                      "Seasonal Trends",
                      "Market Analysis",
                      "Historical Data",
                      "External Factors",
                    ],
                  },
                  {
                    title: "Reorder Point Optimization",
                    description:
                      "Intelligent reorder points to prevent stockouts",
                    features: [
                      "Lead Time Analysis",
                      "Safety Stock",
                      "Demand Variability",
                      "Service Levels",
                    ],
                  },
                  {
                    title: "Seasonal Planning",
                    description:
                      "Strategic inventory planning for seasonal fluctuations",
                    features: [
                      "Holiday Preparation",
                      "Peak Season Planning",
                      "Trend Analysis",
                      "Capacity Planning",
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
                    title: "Stock Level Optimization",
                    description:
                      "Optimize inventory levels for maximum efficiency",
                    features: [
                      "ABC Analysis",
                      "Velocity Tracking",
                      "Turnover Optimization",
                      "Dead Stock Reduction",
                    ],
                  },
                  {
                    icon: Truck,
                    title: "Shipment Optimization",
                    description: "Streamline FBA shipments for cost efficiency",
                    features: [
                      "Shipment Planning",
                      "Cost Optimization",
                      "Timing Strategy",
                      "Capacity Utilization",
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

            <TabsContent value="automation" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Automated Inventory Management
                  </CardTitle>
                  <CardDescription>
                    Streamline operations with intelligent automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Automated Reordering
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Smart Triggers",
                          "Supplier Integration",
                          "Purchase Orders",
                          "Approval Workflows",
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
                        Alert Systems
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Low Stock Alerts",
                          "Overstock Warnings",
                          "Trend Notifications",
                          "Performance Updates",
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

            <TabsContent value="analytics" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Advanced Inventory Analytics
                  </CardTitle>
                  <CardDescription>
                    Deep insights into inventory performance and optimization
                    opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Performance Metrics",
                        items: [
                          "Turnover Rates",
                          "Carrying Costs",
                          "Service Levels",
                          "Fill Rates",
                        ],
                      },
                      {
                        title: "Trend Analysis",
                        items: [
                          "Demand Patterns",
                          "Seasonal Trends",
                          "Growth Projections",
                          "Market Shifts",
                        ],
                      },
                      {
                        title: "Cost Analysis",
                        items: [
                          "Holding Costs",
                          "Ordering Costs",
                          "Stockout Costs",
                          "Total Cost Optimization",
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Inventory Management?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Advanced Forecasting",
                description:
                  "Advanced algorithms for accurate demand prediction",
              },
              {
                icon: Zap,
                title: "Real-time Monitoring",
                description:
                  "24/7 monitoring of inventory levels and performance",
              },
              {
                icon: Shield,
                title: "Risk Mitigation",
                description:
                  "Proactive identification and prevention of stockouts",
              },
              {
                icon: Target,
                title: "Cost Optimization",
                description:
                  "Minimize carrying costs while maintaining service levels",
              },
              {
                icon: Package,
                title: "Multi-channel Support",
                description:
                  "Unified inventory management across all sales channels",
              },
              {
                icon: Truck,
                title: "FBA Integration",
                description: "Seamless integration with Amazon FBA operations",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="pt-8">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Inventory?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts streamline your inventory management and boost your
            operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Inventory Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
