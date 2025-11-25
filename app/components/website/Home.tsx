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
import { useEffect, useRef } from "react";

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
      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "show" : "hidden"}
        variants={fadeIn}
        className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-16 sm:py-24  lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20">
                <span className="text-yellow-400 mr-2 sm:mr-3 text-sm sm:text-base">
                  ⭐⭐⭐⭐⭐
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  Trusted by 500+ Growing Brands
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block text-white">Scale Your</span>
                <span className="block bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                  E-Commerce Empire
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-200 mt-2 sm:mt-4">
                  with AI-Powered Solutions
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Transform your online business with cutting-edge automation,
                optimization, and analytics that deliver{" "}
                <span className="text-blue-400 font-semibold">
                  150% average ROI increase
                </span>
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">
                    500+ Products Optimized
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">
                    24/7 Expert Support
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2 sm:py-3 border border-white/20">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">
                    No Setup Fees
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                <button
                  onClick={() => navigateToPage("/contact")}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform"
                >
                  <span className="mr-2 sm:mr-3"></span>
                  Get Free Strategy Call
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - Hero Dashboard */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 mx-4 sm:mx-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Live Performance
                  </h3>
                  <div className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">
                      Live Data
                    </span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">
                      +340%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Sales Growth
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
                      $2.4M
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Revenue Generated
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
                      98%
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                      24hrs
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Avg Response
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2">
                      <span className="text-slate-200">
                        Amazon Optimization
                      </span>
                      <span className="text-white font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-slate-400 to-purple-500 h-2 rounded-full w-[95%] animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2">
                      <span className="text-slate-200">Ad Performance</span>
                      <span className="text-white font-semibold">88%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-slate-500 h-2 rounded-full w-[88%] animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-2">
                      <span className="text-slate-200">Automation Level</span>
                      <span className="text-white font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-[92%] animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => navigateToPage("/contact")}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Your Custom Dashboard
                  </button>
                </div>
              </div>
            </div>
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

          <motion.div
            variants={container}
            initial="hidden"
            animate={isTestimonialsInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 mx-4 sm:mx-0"
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
            ))}
          </motion.div>
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
