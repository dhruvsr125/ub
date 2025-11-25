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
import {
  ArrowRight,
  Package,
  Truck,
  ClipboardCheck,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function FBAShipmentManagement() {
  const stats = [
    { label: "Shipments Managed", value: "10K+", icon: Package },
    { label: "Cost Reduction", value: "40%", icon: TrendingUp },
    { label: "Error Reduction", value: "98%", icon: ClipboardCheck },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star },
  ];

  const services = [
    {
      title: "Shipment Planning",
      description: "Strategic planning for efficient FBA shipments",
      features: [
        "Inventory assessment",
        "Fulfillment center selection",
        "Shipment optimization",
        "Cost analysis",
      ],
    },
    {
      title: "Preparation & Labeling",
      description: "Expert preparation and labeling for compliance",
      features: [
        "Product inspection",
        "Packaging compliance",
        "Labeling accuracy",
        "Box content information",
      ],
    },
    {
      title: "Tracking & Monitoring",
      description: "Real-time tracking and proactive issue resolution",
      features: [
        "Shipment tracking",
        "Delivery monitoring",
        "Issue resolution",
        "Performance reporting",
      ],
    },
  ];

  const benefits = [
    "Reduced shipping costs",
    "Improved inventory turnover",
    "Fewer shipment errors",
    "Faster processing times",
    "Enhanced compliance",
    "Increased profitability",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Inventory Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              FBA Shipment
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your FBA shipments with our expert management services.
              Ensure timely deliveries, reduce costs, and maintain compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Optimize My Shipments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-500"
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
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center backdrop-blur-sm bg-white/70 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our FBA Shipment Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for efficient and compliant FBA shipments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our FBA Management Matters
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert team ensures your FBA shipments are handled
                efficiently, compliantly, and cost-effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Optimize Shipments?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Get a free consultation and discover how we can streamline
                      your FBA shipments.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-sm bg-white/70 border-blue-100 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Streamline Your FBA Shipments?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let our experts handle your FBA shipment management so you can
                focus on growing your business.
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
                <Link href="/services/inventory-management">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-500"
                  >
                    Back to Inventory Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
