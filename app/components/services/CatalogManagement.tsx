"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Database, FileText, Zap, BarChart3, ArrowRight, Package, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function CatalogManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Catalog Management Experts</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Catalog
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your product catalog with our comprehensive management services. From data organization to bulk
              operations, we ensure your catalog is optimized for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Optimize My Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Package, label: "Products Managed", value: "50K+" },
              { icon: Database, label: "Data Accuracy", value: "99.9%" },
              { icon: Zap, label: "Processing Speed", value: "10x" },
              { icon: BarChart3, label: "Efficiency Gain", value: "300%" },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Catalog Management Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data entry to advanced automation, we handle every aspect of your product catalog
            </p>
          </div>

          <Tabs defaultValue="organization" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="organization" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Data Structuring",
                    description: "Organize product data for maximum efficiency",
                    features: [
                      "Category Mapping",
                      "Attribute Standardization",
                      "Hierarchy Creation",
                      "Data Validation",
                    ],
                  },
                  {
                    title: "Product Information Management",
                    description: "Centralized management of all product data",
                    features: ["Master Data Management", "Version Control", "Multi-channel Sync", "Data Governance"],
                  },
                  {
                    title: "Catalog Architecture",
                    description: "Design optimal catalog structure for your business",
                    features: ["Navigation Design", "Search Optimization", "Filter Configuration", "User Experience"],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-blue-900">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "Bulk Operations",
                    description: "Automate large-scale catalog operations",
                    features: ["Bulk Upload", "Mass Updates", "Batch Processing", "Error Handling"],
                  },
                  {
                    icon: Settings,
                    title: "Workflow Automation",
                    description: "Streamline repetitive catalog tasks",
                    features: ["Automated Rules", "Trigger Actions", "Scheduled Tasks", "Process Optimization"],
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                      <CardTitle className="text-blue-900">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
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
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Catalog Performance Optimization
                  </CardTitle>
                  <CardDescription>Optimize your catalog for better performance and user experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Search Optimization</h4>
                      <ul className="space-y-2">
                        {["Keyword Integration", "Search Relevance", "Filter Optimization", "Faceted Navigation"].map(
                          (item, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Performance Tuning</h4>
                      <ul className="space-y-2">
                        {["Load Speed Optimization", "Image Compression", "Data Caching", "Mobile Optimization"].map(
                          (item, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance" className="space-y-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Ongoing Catalog Maintenance
                  </CardTitle>
                  <CardDescription>Keep your catalog accurate, up-to-date, and performing optimally</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Data Quality",
                        items: ["Regular Audits", "Error Detection", "Data Cleansing", "Quality Metrics"],
                      },
                      {
                        title: "Content Updates",
                        items: ["Price Updates", "Inventory Sync", "Description Updates", "Image Management"],
                      },
                      {
                        title: "Monitoring",
                        items: ["Performance Tracking", "Health Checks", "Alert Systems", "Reporting"],
                      },
                    ].map((category, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-3">{category.title}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Catalog Management?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Scalable Solutions",
                description: "Handle catalogs of any size with our robust infrastructure",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process thousands of products in minutes, not hours",
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Enterprise-grade security for your valuable product data",
              },
              {
                icon: Settings,
                title: "Custom Workflows",
                description: "Tailored processes that fit your unique business needs",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description: "Deep insights into catalog performance and optimization opportunities",
              },
              {
                icon: FileText,
                title: "Compliance Ready",
                description: "Ensure your catalog meets all platform requirements and standards",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="pt-8">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Catalog?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts streamline your catalog management and boost your operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Catalog Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
