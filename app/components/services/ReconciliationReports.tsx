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
  FileText,
  BarChart3,
  Calculator,
  TrendingUp,
  ArrowRight,
  DollarSign,
  Shield,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function ReconciliationReports() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Financial Accuracy Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Reconciliation &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Reports
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ensure financial accuracy and transparency with our comprehensive
              reconciliation and reporting services. Track every transaction,
              identify discrepancies, and maintain perfect financial records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get Financial Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-500"
                >
                  View Sample Reports
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
              { icon: DollarSign, label: "Revenue Tracked", value: "$50M+" },
              { icon: FileText, label: "Reports Generated", value: "10K+" },
              { icon: Calculator, label: "Accuracy Rate", value: "99.9%" },
              { icon: TrendingUp, label: "Cost Savings", value: "25%" },
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
              Complete Financial Reconciliation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From transaction matching to comprehensive reporting, we ensure
              your financial data is accurate and actionable
            </p>
          </div>

          <Tabs defaultValue="reconciliation" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
              <TabsTrigger value="reporting">Reporting</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="reconciliation" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Transaction Matching",
                    description:
                      "Automated matching of transactions across platforms",
                    features: [
                      "Multi-platform Sync",
                      "Smart Matching",
                      "Exception Handling",
                      "Duplicate Detection",
                    ],
                  },
                  {
                    title: "Payment Reconciliation",
                    description: "Reconcile payments from all sales channels",
                    features: [
                      "Amazon Payments",
                      "PayPal Integration",
                      "Bank Statements",
                      "Fee Tracking",
                    ],
                  },
                  {
                    title: "Inventory Reconciliation",
                    description:
                      "Match inventory records with actual stock levels",
                    features: [
                      "Stock Verification",
                      "Variance Analysis",
                      "Adjustment Tracking",
                      "Loss Prevention",
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

            <TabsContent value="reporting" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Financial Reports",
                    description:
                      "Comprehensive financial reporting and analysis",
                    features: [
                      "P&L Statements",
                      "Cash Flow Reports",
                      "Revenue Analysis",
                      "Expense Tracking",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Performance Dashboards",
                    description: "Real-time dashboards for financial insights",
                    features: [
                      "KPI Tracking",
                      "Trend Analysis",
                      "Visual Charts",
                      "Custom Metrics",
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

            <TabsContent value="analysis" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Advanced Financial Analysis
                  </CardTitle>
                  <CardDescription>
                    Deep insights into your financial performance and trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Variance Analysis
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Budget vs Actual",
                          "Period Comparisons",
                          "Trend Analysis",
                          "Anomaly Detection",
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
                        Profitability Analysis
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Product Profitability",
                          "Channel Analysis",
                          "Cost Breakdown",
                          "Margin Analysis",
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

            <TabsContent value="automation" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Calculator className="h-6 w-6 mr-2" />
                    Automated Reconciliation Systems
                  </CardTitle>
                  <CardDescription>
                    Streamline your reconciliation process with intelligent
                    automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Smart Matching",
                        items: [
                          "AI-Powered Matching",
                          "Pattern Recognition",
                          "Learning Algorithms",
                          "Accuracy Improvement",
                        ],
                      },
                      {
                        title: "Exception Management",
                        items: [
                          "Automated Alerts",
                          "Priority Queuing",
                          "Resolution Workflows",
                          "Escalation Rules",
                        ],
                      },
                      {
                        title: "Scheduled Processing",
                        items: [
                          "Daily Reconciliation",
                          "Real-time Updates",
                          "Batch Processing",
                          "Error Recovery",
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
              Why Choose Our Reconciliation Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Accuracy",
                description:
                  "Guaranteed accuracy with multiple validation layers",
              },
              {
                icon: Calculator,
                title: "Real-time Processing",
                description:
                  "Process transactions as they happen for immediate insights",
              },
              {
                icon: AlertTriangle,
                title: "Exception Alerts",
                description:
                  "Instant notifications for discrepancies and issues",
              },
              {
                icon: FileText,
                title: "Audit Trail",
                description:
                  "Complete audit trail for compliance and transparency",
              },
              {
                icon: BarChart3,
                title: "Custom Reports",
                description:
                  "Tailored reports that meet your specific business needs",
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description:
                  "Identify patterns and trends in your financial data",
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
            Ready for Perfect Financial Accuracy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts handle your reconciliation and reporting while you
            focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Analysis
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
