"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ImageIcon,
  Zap,
  Target,
  BarChart3,
  Cog,
  Palette,
  ShoppingCart,
  FileText,
  DollarSign,
  ChevronRight,
} from "lucide-react";

const marketplaces = [
  {
    logo: "🛒",
    name: "Amazon",
    description: "World's largest marketplace",
  },
  {
    logo: "🛍️",
    name: "Flipkart",
    description: "India's leading e-commerce",
  },
  {
    logo: "🏪",
    name: "Meesho",
    description: "Social commerce platform",
  },
  {
    logo: "👗",
    name: "Myntra",
    description: "Fashion & lifestyle",
  },
  {
    logo: "📦",
    name: "TikTok Shop",
    description: "Home & garden marketplace",
  },
  {
    logo: "🔨",
    name: "eBay",
    description: "Global auction platform",
  },
  {
    logo: "🛒",
    name: "JioMart",
    description: "Digital commerce platform",
  },
  {
    logo: "✨",
    name: "ManoMano",
    description: "Fashion & lifestyle brand",
  },
];

export default function Services() {
  const router = useRouter();

  const navigateToPage = (href: string) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const services = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-400" />,
      title: "Amazon Account Management",
      description:
        "Complete Amazon account management with expert oversight and optimization for maximum performance.",
      features: [
        "Account health monitoring",
        "Policy compliance management",
        "Performance optimization",
        "Brand protection services",
        "Strategic growth planning",
        "24/7 account monitoring",
      ],
      href: "/services/amazon-account-management",
      popular: true,
      imageAlt: "Amazon account management dashboard",
      subServices: [],
    },
    {
      icon: <Target className="h-12 w-12 text-blue-400" />,
      title: "PPC - Advertising Management",
      description:
        "Strategic advertising management to increase sales with winning ad strategies and campaign optimization.",
      features: [
        "Increase in sales focus",
        "Winning ads strategy development",
        "Campaign optimization",
        "Bid management",
        "Performance tracking",
        "ROI maximization",
      ],
      href: "/services/ppc-advertising",
      popular: false,
      imageAlt: "PPC advertising management interface",
      subServices: [
        {
          name: "Increase in Sales",
          href: "/services/ppc-advertising/increase-in-sales",
          description: "Focused strategies to drive sales growth",
        },
        {
          name: "Winning Ads Strategy",
          href: "/services/ppc-advertising/winning-ads-strategy",
          description: "Proven advertising strategies that win",
        },
      ],
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-400" />,
      title: "Listing Optimization",
      description:
        "Comprehensive listing optimization services to maximize visibility and conversion rates.",
      features: [
        "Listing creation",
        "Listing quality check",
        "Keyword research & competitive analysis",
        "Brand & category approval",
        "SEO optimization",
        "Performance monitoring",
      ],
      href: "/services/listing-optimization",
      popular: false,
      imageAlt: "Product listing optimization tools",
      subServices: [
        {
          name: "Listing Creation",
          href: "/services/listing-optimization/listing-creation",
          description: "Professional product listing creation",
        },
        {
          name: "Listing Quality Check",
          href: "/services/listing-optimization/listing-quality-check",
          description: "Comprehensive quality assurance",
        },
        {
          name: "Keyword Research & Competitive Analysis",
          href: "/services/listing-optimization/keyword-research",
          description: "Advanced keyword and competitor research",
        },
        {
          name: "Brand & Category Approval",
          href: "/services/listing-optimization/brand-category-approval",
          description: "Brand registration and category approval",
        },
      ],
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
      title: "Catalog Management",
      description:
        "Professional catalog management services to organize and optimize your product portfolio.",
      features: [
        "Product catalog organization",
        "Inventory synchronization",
        "Category management",
        "Product data optimization",
        "Bulk upload management",
        "Quality assurance",
      ],
      href: "/services/catalog-management",
      popular: false,
      imageAlt: "Catalog management system",
      subServices: [],
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-400" />,
      title: "Reconciliation & Reports",
      description:
        "Detailed reconciliation services and comprehensive reporting for business insights.",
      features: [
        "Financial reconciliation",
        "Performance reports",
        "Sales analytics",
        "Inventory reports",
        "Custom dashboards",
        "Data analysis",
      ],
      href: "/services/reconciliation-reports",
      popular: false,
      imageAlt: "Business reports and analytics",
      subServices: [],
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-400" />,
      title: "Graphics & Design",
      description:
        "Professional design services including EBC content, brand stores, and lifestyle imagery.",
      features: [
        "Amazon EBC A+ content creation",
        "Amazon Brand Store design",
        "Infographics & lifestyle images",
        "Product photography",
        "Brand identity design",
        "Marketing materials",
      ],
      href: "/services/graphics-design",
      popular: false,
      imageAlt: "Professional design services",
      subServices: [
        {
          name: "Amazon EBC A+ Content Creation",
          href: "/services/graphics-design/ebc-content-creation",
          description: "Enhanced brand content creation",
        },
        {
          name: "Amazon Brand Store Design",
          href: "/services/graphics-design/brand-store-design",
          description: "Professional brand store design",
        },
        {
          name: "Infographics & Life Style Images",
          href: "/services/graphics-design/infographics-lifestyle",
          description: "Creative infographics and lifestyle imagery",
        },
      ],
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-400" />,
      title: "Revenue Re-Claims",
      description:
        "Recover lost revenue through systematic claims management and fee reconciliation.",
      features: [
        "Fee discrepancy identification",
        "Claims filing and management",
        "Revenue recovery",
        "Refund processing",
        "Dispute resolution",
        "Financial optimization",
      ],
      href: "/services/revenue-reclaims",
      popular: false,
      imageAlt: "Revenue recovery dashboard",
      subServices: [],
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-400" />,
      title: "Inventory Management",
      description:
        "Smart inventory management with forecasting and FBA shipment optimization.",
      features: [
        "Inventory forecasting",
        "FBA shipment management",
        "Stock level optimization",
        "Demand planning",
        "Supplier coordination",
        "Automated reordering",
      ],
      href: "/services/inventory-management",
      popular: false,
      imageAlt: "Inventory management system",
      subServices: [
        {
          name: "Inventory Forecasting",
          href: "/services/inventory-management/inventory-forecasting",
          description: "Advanced inventory forecasting solutions",
        },
        {
          name: "FBA Shipment Management",
          href: "/services/inventory-management/fba-shipment-management",
          description: "Complete FBA shipment management",
        },
      ],
    },
  ];

  const benefits = [
    "Proven track record with 500+ successful transformations",
    "Average 150% increase in sales within 90 days",
    "Dedicated account manager and expert team",
    "24/7 monitoring and premium support",
    "Risk-free 30-day money-back guarantee",
    "Cutting-edge technology and advanced algorithms",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Comprehensive e-commerce solutions powered by advanced technology
              and designed to scale your business to new heights
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center shadow-2xl hover:scale-105 transform"
              onClick={() => navigateToPage("/contact")}
            >
              Get Started Today
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Marketplace Reach Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Marketplace Reach
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We manage your presence across all major e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {marketplaces.map((marketplace, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl text-center hover:bg-blue-50 transition-colors cursor-pointer hover-lift"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                  {marketplace.logo}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                  {marketplace.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {marketplace.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Choose Your Success Path
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Select from our comprehensive range of services tailored to your
              business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 border-2 group ${
                  service.popular
                    ? "border-blue-500 ring-4 ring-blue-200"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Service Icon */}
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 w-fit group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Service Image Placeholder */}
                <div className="mb-6 sm:mb-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-dashed border-gray-300 group-hover:border-blue-400 transition-all duration-300">
                  <div className="aspect-video bg-white rounded-lg sm:rounded-xl shadow-inner flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3" />
                    <p className="text-xs text-center font-medium px-2">
                      {service.imageAlt}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Sub-services */}
                {service.subServices && service.subServices.length > 0 && (
                  <div className="mb-6 sm:mb-8 border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-4">
                      Specialized Services:
                    </h4>
                    <div className="space-y-2">
                      {service.subServices.map((subService, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subService.href}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group/sub"
                          onClick={() => navigateToPage(subService.href)}
                        >
                          <div>
                            <div className="text-sm font-medium text-gray-800 group-hover/sub:text-blue-600">
                              {subService.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {subService.description}
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover/sub:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-6 sm:pt-8">
                  <Link
                    href={service.href}
                    className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base ${
                      service.popular
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => navigateToPage(service.href)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10">
                Why Choose Urbantech Ecom?
              </h2>
              <ul className="space-y-6 sm:space-y-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Visualization Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
              <div className="aspect-square bg-white/5 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-white/60 p-4">
                <ImageIcon className="h-16 w-16 sm:h-20 sm:w-20 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                  Success Metrics
                </h3>
                <p className="text-center text-sm sm:text-lg">
                  Visual representation of client success stories and growth
                  metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
            Join hundreds of successful e-commerce businesses that trust
            Urbantech Ecom for their growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl text-lg sm:text-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
              onClick={() => navigateToPage("/contact")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="/how-it-works"
              className="border-2 border-gray-300 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              onClick={() => navigateToPage("/how-it-works")}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
