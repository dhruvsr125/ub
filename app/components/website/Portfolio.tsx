"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  ImageIcon,
  ExternalLink,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Portfolio Carousel Component with Auto-slide
function PortfolioCarousel({ brands }: { brands: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // Reset to beginning for infinite loop
        api.scrollTo(0);
      }
    }, 1500); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true,
        }}
        className="w-full pb-8 sm:pb-12 lg:pb-16"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {brands.map((src, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="relative group mb-4 sm:mb-6 px-2 sm:px-3 py-2 sm:py-3">
                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-[100] border border-gray-200 hover:border-blue-300 aspect-square flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Brand Logo ${index + 1}`}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 relative z-10"
                  />
                  {/* Hover overlay effect - subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/20 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none z-0" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 md:-left-12 h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 z-10" style={{ top: 'calc(50% - 2rem)' }} />
        <CarouselNext className="right-2 sm:right-4 md:-right-12 h-10 w-10 sm:h-12 sm:w-12 bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 z-10" style={{ top: 'calc(50% - 2rem)' }} />
      </Carousel>
      
      {/* Slide indicators */}
      <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10 lg:mt-12">
        {Array.from({ length: Math.min(count, 10) }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index + 1
                ? "w-8 bg-blue-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      
    </div>
  );
}

export default function Portfolio() {
  const router = useRouter();

  const caseStudies = [
    {
      title: "Fashion Brand Digital Transformation",
      client: "StyleHub Boutique",
      industry: "Fashion & Apparel",
      challenge:
        "Low conversion rates, poor product visibility, and declining market share on Amazon",
      solution:
        "Complete listing optimization, advanced PPC management, and brand store redesign",
      results: {
        salesIncrease: "285%",
        conversionRate: "18.5%",
        roiImprovement: "340%",
        timeframe: "6 months",
      },
      services: [
        "Listing Optimization",
        "PPC Management",
        "Brand Store Design",
      ],
      imageAlt:
        "Fashion e-commerce transformation analytics dashboard showing growth metrics",
    },
    {
      title: "Electronics Marketplace Domination",
      client: "TechGear Pro",
      industry: "Electronics & Technology",
      challenge:
        "High competition, complex inventory management, and declining profit margins",
      solution:
        "Multi-platform strategy with advanced automation, predictive analytics, and smart pricing",
      results: {
        salesIncrease: "420%",
        conversionRate: "22.8%",
        roiImprovement: "550%",
        timeframe: "8 months",
      },
      services: [
        "Multi-Platform Management",
        "Process Automation",
        "Predictive Analytics",
      ],
      imageAlt:
        "Electronics marketplace performance dashboard with real-time analytics",
    },
    {
      title: "Home & Garden Success Revolution",
      client: "Garden Paradise",
      industry: "Home & Garden",
      challenge:
        "Seasonal sales fluctuations, inventory waste, and poor customer retention",
      solution:
        "Seasonal optimization strategy with smart inventory management and customer lifecycle automation",
      results: {
        salesIncrease: "190%",
        conversionRate: "16.8%",
        roiImprovement: "280%",
        timeframe: "4 months",
      },
      services: [
        "Seasonal Optimization",
        "Smart Inventory Management",
        "Customer Lifecycle Automation",
      ],
      imageAlt:
        "Home and garden seasonal optimization dashboard with predictive insights",
    },
  ];

  const testimonials = [
    {
      quote:
        "Urbantech Ecom's solutions transformed our Amazon presence completely. Our sales increased by 285% in just 6 months with their innovative approach!",
      author: "Sarah Mitchell",
      company: "StyleHub Boutique",
      role: "CEO & Founder",
      rating: 5,
      imageAlt: "Sarah Mitchell CEO testimonial professional photo",
    },
    {
      quote:
        "The automation solutions they implemented saved us 30+ hours per week and increased our efficiency by 400%. Absolutely game-changing technology.",
      author: "Mike Johnson",
      company: "TechGear Pro",
      role: "Operations Director",
      rating: 5,
      imageAlt: "Mike Johnson Operations Director testimonial photo",
    },
    {
      quote:
        "Their seasonal strategy helped us maintain consistent 190% growth throughout the year, not just during peak seasons. Incredible results.",
      author: "Lisa Chen",
      company: "Garden Paradise",
      role: "Founder & CEO",
      rating: 5,
      imageAlt: "Lisa Chen Founder testimonial professional headshot",
    },
  ];

  const metrics = [
    {
      label: "Average Sales Increase",
      value: "298%",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      label: "Clients Transformed",
      value: "500+",
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      label: "Revenue Generated",
      value: "$75M+",
      icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      label: "Client Satisfaction",
      value: "98%",
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
  ];

  const industries = [
    "Fashion & Apparel",
    "Electronics & Tech",
    "Home & Garden",
    "Health & Beauty",
    "Sports & Outdoors",
    "Automotive",
    "Books & Media",
    "Toys & Games",
  ];

  const navigateToPage = (href: string) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              Discover how we've helped businesses like yours achieve remarkable
              growth and success with our proven e-commerce solutions
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real results that speak for themselves and demonstrate our
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  {metric.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Featured Case Studies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Deep dive into our most successful transformations and
              breakthrough results
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
                      <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-bold">
                        {study.industry}
                      </span>
                      </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-semibold">
                      {study.client}
                    </p>

                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                          Services Used
                        </h4>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {study.services.map((service, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-semibold"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Case Study Image Placeholder */}
                  <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-dashed border-gray-300 mb-6 sm:mb-8 lg:mb-10">
                    <div className="aspect-video bg-white rounded-xl sm:rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-400 p-4">
                      <ImageIcon className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mb-3 sm:mb-4 lg:mb-6" />
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-2 sm:mb-4 text-center">
                        {study.title}
                      </h4>
                      <p className="text-center text-sm sm:text-base lg:text-lg">
                        {study.imageAlt}
                      </p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2 sm:mb-3">
                        {study.results.salesIncrease}
                      </div>
                      <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                        Sales Increase
                      </div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">
                        {study.results.conversionRate}
                      </div>
                      <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                        Conversion Rate
                      </div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 sm:mb-3">
                        {study.results.roiImprovement}
                      </div>
                      <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                        ROI Improvement
                      </div>
                    </div>
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 sm:mb-3">
                        {study.results.timeframe}
                      </div>
                      <div className="text-gray-600 font-semibold text-xs sm:text-sm">
                        Timeframe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Grid / Portfolio Gallery */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Portfolio Gallery
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Brands and companies we've worked with
            </p>
          </div>

          <PortfolioCarousel
            brands={[
              "/images/image1.jpg",
              "/images/image2.png",
              "/images/image3.jpg",
              "/images/image4.jpg",
              "/images/image5.png",
              "/images/image6.jpg",
              "/images/image7.png",
              "/images/image81.jpg",
              "/images/image3.jpg",
              "/images/image4.jpg",
              "/images/image1.jpg",
              "/images/image6.jpg",
              "/images/image81.jpg",
              "/images/image1.jpg",
              "/images/image4.jpg",
            ]}
          />
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Industries We Transform
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Proven expertise across diverse market sectors and business
              verticals
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <div className="text-sm sm:text-base lg:text-lg font-bold group-hover:text-blue-300 transition-colors">
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
            Join the hundreds of businesses that have transformed their
            e-commerce success with Urbantech Ecom's proven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
            <button
              onClick={() => navigateToPage("/contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => navigateToPage("/services")}
              className="border-2 border-gray-300 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
