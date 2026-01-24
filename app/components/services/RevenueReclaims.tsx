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
  DollarSign,
  RefreshCw,
  Shield,
  TrendingUp,
  ArrowRight,
  Calculator,
  FileText,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function RevenueReclaims() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Revenue Recovery Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revenue
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Re-Claims
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Recover lost revenue and maximize your Amazon profits with our
              comprehensive claims management services. We identify, file, and
              track claims to ensure you get every dollar you're owed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Start Revenue Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  Calculate Potential Recovery
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
              { icon: DollarSign, label: "Revenue Recovered", value: "$2.5M+" },
              { icon: RefreshCw, label: "Claims Filed", value: "15K+" },
              { icon: TrendingUp, label: "Success Rate", value: "95%" },
              { icon: Calculator, label: "Average Recovery", value: "$5,200" },
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
              Complete Revenue Recovery Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From identification to collection, we handle every aspect of
              revenue recovery to maximize your profits
            </p>
          </div>

          <Tabs defaultValue="identification" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <TabsTrigger value="identification" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Identification</TabsTrigger>
              <TabsTrigger value="filing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Filing</TabsTrigger>
              <TabsTrigger value="tracking" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Tracking</TabsTrigger>
              <TabsTrigger value="recovery" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-700">Recovery</TabsTrigger>
            </TabsList>

            <TabsContent value="identification" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Lost Inventory Claims",
                    description:
                      "Identify and recover lost or damaged inventory",
                    features: [
                      "FBA Lost Items",
                      "Warehouse Damage",
                      "Inbound Issues",
                      "Reconciliation Errors",
                    ],
                  },
                  {
                    title: "Fee Discrepancies",
                    description: "Spot incorrect fees and overcharges",
                    features: [
                      "Storage Fee Errors",
                      "Fulfillment Overcharges",
                      "Referral Fee Issues",
                      "Weight/Size Errors",
                    ],
                  },
                  {
                    title: "Reimbursement Opportunities",
                    description: "Find all eligible reimbursement scenarios",
                    features: [
                      "Customer Returns",
                      "Removal Orders",
                      "Disposal Fees",
                      "Damaged Returns",
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

            <TabsContent value="filing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Professional Claims Filing",
                    description:
                      "Expert filing of all claim types with proper documentation",
                    features: [
                      "Detailed Documentation",
                      "Evidence Collection",
                      "Proper Formatting",
                      "Compliance Checks",
                    ],
                  },
                  {
                    icon: Shield,
                    title: "Appeal Management",
                    description: "Handle denied claims with strategic appeals",
                    features: [
                      "Appeal Strategy",
                      "Additional Evidence",
                      "Escalation Process",
                      "Success Optimization",
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

            <TabsContent value="tracking" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <RefreshCw className="h-6 w-6 mr-2" />
                    Comprehensive Claims Tracking
                  </CardTitle>
                  <CardDescription>
                    Monitor all claims from submission to resolution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Real-time Monitoring
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Status Updates",
                          "Response Tracking",
                          "Timeline Management",
                          "Progress Reports",
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
                        Automated Alerts
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Status Changes",
                          "Response Required",
                          "Deadline Reminders",
                          "Resolution Notifications",
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

            <TabsContent value="recovery" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <DollarSign className="h-6 w-6 mr-2" />
                    Revenue Recovery & Optimization
                  </CardTitle>
                  <CardDescription>
                    Maximize recovery amounts and prevent future losses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Recovery Optimization",
                        items: [
                          "Maximum Amounts",
                          "Strategic Timing",
                          "Evidence Strength",
                          "Success Probability",
                        ],
                      },
                      {
                        title: "Prevention Strategies",
                        items: [
                          "Process Improvements",
                          "Monitoring Systems",
                          "Early Detection",
                          "Risk Mitigation",
                        ],
                      },
                      {
                        title: "Financial Impact",
                        items: [
                          "Revenue Recovery",
                          "Cost Reduction",
                          "Profit Improvement",
                          "ROI Tracking",
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
              Why Choose Our Revenue Recovery Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "No Recovery, No Fee",
                description:
                  "We only get paid when you get paid - completely risk-free",
              },
              {
                icon: Calculator,
                title: "Expert Analysis",
                description:
                  "Deep expertise in Amazon's complex reimbursement policies",
              },
              {
                icon: RefreshCw,
                title: "Automated Systems",
                description:
                  "Advanced tools to identify opportunities you might miss",
              },
              {
                icon: Shield,
                title: "Proven Track Record",
                description:
                  "95% success rate with millions recovered for clients",
              },
              {
                icon: AlertTriangle,
                title: "Proactive Monitoring",
                description:
                  "Continuous monitoring to catch issues as they happen",
              },
              {
                icon: FileText,
                title: "Detailed Reporting",
                description:
                  "Transparent reporting on all claims and recoveries",
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
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts identify and recover money that's rightfully yours -
            completely risk-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Revenue Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
