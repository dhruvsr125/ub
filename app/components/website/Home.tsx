"use client";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  Award,
  Shield,
  Clock,
  ImageIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Testimonials Carousel Component
function TestimonialsCarousel({ 
  testimonials 
}: { 
  testimonials: Array<{
    name: string;
    company: string;
    role: string;
    text: string;
    rating: number;
  }> 
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // If there are only a few reviews, duplicate them so the slider feels full
  const slides =
    testimonials.length < 4
      ? [...testimonials, ...testimonials]
      : testimonials;

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

  // Auto-slide functionality with infinite loop
  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      // With loop: true, scrollNext() will seamlessly loop back to start
      api.scrollNext();
    }, 2000); // Auto-slide every 4 seconds

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
          dragFree: false,
          duration: 25,
        }}
        className="w-full"
      >
        <CarouselContent className="mb-8 -ml-2 md:-ml-4">
          {slides.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full mx-2 sm:mx-0"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center">
                  {/* Client Photo Placeholder */}
                  <div className="bg-gradient-to-br from-gray-200 to-blue-200 rounded-full p-1 mr-3 sm:mr-4 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-gray-800 text-base sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      {testimonial.role}
                    </div>
                    <div className="text-blue-600 font-semibold text-sm sm:text-base">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 md:-left-12 h-10 w-10 sm:h-12 sm:w-12 bg-white shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 z-10 hover:bg-gray-50" />
        <CarouselNext className="right-2 sm:right-4 md:-right-12 h-10 w-10 sm:h-12 sm:w-12 bg-white shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 z-10 hover:bg-gray-50" />
      </Carousel>

      {/* Slide indicators - adjusted for infinite loop */}
      <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
        {Array.from({ length: count }).map((_, index) => {
          // Handle infinite loop by using modulo for current position
          const displayIndex = ((current - 1) % count + count) % count;
          return (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                displayIndex === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>


    </div>
  );
}

// Floating Brand Logos Component
function BrandLogosFloating() {
  const brandLogos = [
    "/images/image1.jpg",
    "/images/image2.png",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.png",
    "/images/image6.jpg",
    "/images/image7.png",
    "/images/image81.jpg",
  ];

  const positions = [
    { top: "8%", left: "2%", delay: 0 },
    { top: "15%", right: "3%", delay: 0.3 },
    { top: "65%", left: "1%", delay: 0.6 },
    { top: "75%", right: "2%", delay: 0.9 },
    { top: "12%", left: "85%", delay: 1.2 },
    { top: "82%", left: "88%", delay: 1.5 },
    { top: "45%", right: "1%", delay: 1.8 },
    { top: "55%", left: "2%", delay: 2.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {brandLogos.map((src, index) => {
        const pos = positions[index % positions.length];
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, -8, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2 + index * 0.6,
              repeat: Infinity,
              delay: pos.delay,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-white/15 backdrop-blur-lg rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/25 shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  // Refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Check if elements are in view (continuous animations - both directions)
  const isHeroInView = useInView(heroRef, { amount: 0.2 });
  const isServicesInView = useInView(servicesRef, { amount: 0.15 });
  const isFeaturesInView = useInView(featuresRef, { amount: 0.15 });
  const isStatsInView = useInView(statsRef, { amount: 0.15 });
  const isProcessInView = useInView(processRef, { amount: 0.15 });
  const isTestimonialsInView = useInView(testimonialsRef, { amount: 0.15 });

  // Enhanced Animation variants for smooth scroll up/down
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 90,
        damping: 14,
      },
    },
  };

  // Animation controls
  const controls = useAnimation();

  // Animate when in view
  useEffect(() => {
    if (
      isHeroInView ||
      isServicesInView ||
      isFeaturesInView ||
      isStatsInView ||
      isProcessInView ||
      isTestimonialsInView
    ) {
      controls.start("show");
    }
  }, [
    isHeroInView,
    isServicesInView,
    isFeaturesInView,
    isStatsInView,
    isProcessInView,
    isTestimonialsInView,
    controls,
  ]);

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "AI-Powered Listing Optimization",
      description:
        "Transform your product listings with cutting-edge AI technology for maximum visibility.",
      stats: "500+ Products Optimized",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
      title: "Advanced PPC Management",
      description:
        "Maximize ROI with expertly managed advertising campaigns across all platforms.",
      stats: "150% Average ROI Increase",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: "Real-Time Analytics",
      description:
        "Get actionable insights with comprehensive analytics and performance tracking.",
      stats: "24/7 Monitoring",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Process Automation",
      description:
        "Streamline operations with intelligent automation solutions.",
      stats: "40+ Hours Saved Weekly",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Enterprise Security",
      description: "Bank-level security for all your data and operations",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "24/7 Support",
      description: "Round-the-clock expert support when you need it",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-400" />,
      title: "Proven Results",
      description: "Track record of success with 500+ satisfied clients",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGear Pro",
      role: "CEO",
      text: "Urbantech transformed our e-commerce operations completely. Our sales increased by 200% in just 3 months!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      company: "Fashion Forward",
      role: "Marketing Director",
      text: "The AI optimization services are incredible. Our product visibility has never been better.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Home Essentials",
      role: "Founder",
      text: "Working with Urbantech has been a game-changer. The automation saved us 20+ hours per week.",
      rating: 5,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Products Optimized",
      description: "Successfully optimized across all platforms",
    },
    {
      number: "150%",
      label: "Average ROI Increase",
      description: "Proven results within 90 days",
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Growing businesses we've helped scale",
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Always available when you need us",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your current setup and identify optimization opportunities",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Custom strategy tailored to your business goals and market position",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Expert execution of optimization strategies with minimal disruption",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description:
        "Continuous monitoring and optimization for sustained growth",
    },
  ];

  const navigateToPage = (href: string) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* New Professional Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "show" : "hidden"}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-20 sm: lg: overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full  bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Brand Logos */}
        <BrandLogosFloating />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Trust Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 sm:px-7 py-2.5 sm:py-3.5 mb-8 sm:mb-10 border border-white/20 shadow-lg"
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 fill-yellow-400" />
              <span className="text-sm sm:text-base font-semibold">
                Trusted E-Commerce Management Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight"
            >
              <span className="block text-white mb-2 inline mr-6  w-full text-6xl">
                We Handle 
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent inline  text-6xl">
                 All Kinds of
              </span>
              <span className="block text-white mt-2 text-6xl">
                E-Commerce Accounts
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              From Amazon to Shopify, from startups to enterprise—we manage your entire e-commerce operation with precision, automation, and proven results.
            </motion.p>

            {/* Key Features Grid */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-4xl mx-auto"
            >
              {[
                { icon: Zap, text: "All Platforms Supported", subtext: "Amazon, Shopify, eBay & More" },
                { icon: BarChart3, text: "Complete Management", subtext: "From A to Z Operations" },
                { icon: Shield, text: "Enterprise Grade", subtext: "Scalable Solutions" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">{feature.text}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{feature.subtext}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <button
                onClick={() => navigateToPage("/contact")}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform"
              >
                Get Started Today
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigateToPage("/services")}
                className="bg-white/10 backdrop-blur-md text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Our Services
              </button>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={isStatsInView ? "show" : "hidden"}
        variants={container}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300  border-gray-200 group-hover:border-blue-300 mx-4 sm:mx-0">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={isServicesInView ? "show" : "hidden"}
        variants={fadeIn}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Comprehensive e-commerce solutions designed to accelerate your
              business growth with cutting-edge technology
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isServicesInView ? "show" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 group cursor-pointer  border-gray-200 hover:border-blue-300 mx-4 sm:mx-0"
                onClick={() => navigateToPage("/services")}
              >
                <div className="flex flex-col sm:flex-row items-start mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-0 sm:mr-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="text-blue-600 font-semibold text-sm sm:text-base">
                      {service.stats}
                    </div>
                  </div>
                </div>

                {/* Service Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                  <div className="aspect-video bg-white rounded-lg sm:rounded-xl shadow-inner flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon className="h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-3" />
                    <p className="text-xs sm:text-sm text-center font-medium">
                      {service.title} Dashboard
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => navigateToPage("/services")}
              className="bg-gradient-to-r from-gray-800 to-blue-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:from-gray-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Explore All Services
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={isProcessInView ? "show" : "hidden"}
        variants={slideUp}
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Our proven 4-step process to transform your e-commerce business
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isProcessInView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center group"
              >
                <div className="relative mb-6 sm:mb-8 mx-4 sm:mx-0">
                  {/* Step Image Placeholder */}
                  <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-dashed border-gray-300 group-hover:border-blue-400 transition-all duration-300">
                    <div className="aspect-square bg-white rounded-lg sm:rounded-xl shadow-inner flex flex-col items-center justify-center text-gray-400">
                      <ImageIcon className="h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-3" />
                      <p className="text-xs text-center">Step {step.step}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gray-800 to-blue-800 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-4 sm:px-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => navigateToPage("/how-it-works")}
              className="border-2 border-gray-800 text-gray-800 px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Learn More About Our Process
            </button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={isFeaturesInView ? "show" : "hidden"}
        variants={fadeIn}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <motion.div
              variants={slideInFromLeft}
              initial="hidden"
              animate={isFeaturesInView ? "show" : "hidden"}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
                Why Choose Urbantech?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
                We combine cutting-edge technology with proven strategies to
                deliver exceptional results for your e-commerce business.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-lg sm:rounded-xl mr-4 sm:mr-6 backdrop-blur-sm border border-white/20 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features Image Placeholder */}
            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              animate={isFeaturesInView ? "show" : "hidden"}
              className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 mx-4 sm:mx-0"
            >
              <div className="aspect-square bg-white/5 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-white/60">
                <ImageIcon className="h-16 w-16 sm:h-20 sm:w-20 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Platform Features
                </h3>
                <p className="text-center text-base sm:text-lg px-4">
                  Interactive showcase of our platform's key features and
                  capabilities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={isTestimonialsInView ? "show" : "hidden"}
        variants={fadeIn}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Real stories from businesses we've helped transform
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        variants={scaleUp}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Join hundreds of successful brands that trust Urbantech for their
            e-commerce growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <button
              onClick={() => navigateToPage("/contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl text-lg sm:text-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
            >
              Start Your Journey
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => navigateToPage("/how-it-works")}
              className="border-2 border-gray-300 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
