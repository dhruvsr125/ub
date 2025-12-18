"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  ImageIcon,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  const navigateToPage = (href: string) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const stats = [
    {
      number: "500+",
      label: "Successful Clients",
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      number: "150%",
      label: "Average Sales Increase",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      number: "5+",
      label: "Years of Experience",
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former Amazon executive with 10+ years in e-commerce optimization and advanced solutions",
      imageAlt: "Sarah Johnson - CEO & Founder professional headshot",
      expertise: ["E-commerce Strategy", "Business Development", "Leadership"],
    },
    {
      name: "Mike Chen",
      role: "Head of Strategy",
      bio: "E-commerce strategist specializing in marketplace growth and advanced automation systems",
      imageAlt: "Mike Chen - Head of Strategy professional headshot",
      expertise: ["Market Analysis", "Automation", "Growth Hacking"],
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Marketing Specialist",
      bio: "PPC expert with proven track record in marketplace advertising and conversion optimization",
      imageAlt:
        "Emily Rodriguez - Lead Marketing Specialist professional headshot",
      expertise: [
        "PPC Management",
        "Conversion Optimization",
        "Digital Marketing",
      ],
    },
    {
      name: "David Park",
      role: "Technical Director",
      bio: "Full-stack developer focused on e-commerce automation and integration solutions",
      imageAlt: "David Park - Technical Director professional headshot",
      expertise: ["System Architecture", "API Integration", "Automation"],
    },
    {
      name: "Jessica Williams",
      role: "Customer Success Manager",
      bio: "Dedicated to ensuring client satisfaction and maximizing the value of our services",
      imageAlt:
        "Jessica Williams - Customer Success Manager professional headshot",
      expertise: [
        "Client Relations",
        "Account Management",
        "Customer Experience",
      ],
    },
    {
      name: "Alex Thompson",
      role: "Data Analytics Lead",
      bio: "Data scientist specializing in e-commerce analytics and performance optimization",
      imageAlt: "Alex Thompson - Data Analytics Lead professional headshot",
      expertise: [
        "Data Analysis",
        "Performance Metrics",
        "Business Intelligence",
      ],
    },
  ];

  const values = [
    {
      title: "Client Success First",
      description:
        "Your success is our success. We're committed to delivering measurable results that drive your business forward with cutting-edge technology.",
      icon: <Target className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
    {
      title: "Innovation & Excellence",
      description:
        "We stay ahead of industry trends and continuously innovate to provide cutting-edge solutions.",
      icon: <Award className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
    {
      title: "Transparency & Trust",
      description:
        "We believe in open communication and building long-term partnerships based on trust and proven results.",
      icon: <Users className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
  ];

  const milestones = [
    {
      year: "2019",
      event: "Company Founded",
      description:
        "Started with a vision to revolutionize e-commerce optimization with advanced technology",
    },
    {
      year: "2020",
      event: "First 100 Clients",
      description:
        "Reached our first major milestone with proven results and growth",
    },
    {
      year: "2021",
      event: "Advanced Integration",
      description: "Launched advanced optimization tools and automation",
    },
    {
      year: "2022",
      event: "500+ Clients",
      description: "Expanded to serve over 500 successful businesses worldwide",
    },
    {
      year: "2023",
      event: "Industry Recognition",
      description:
        "Awarded 'Best E-commerce Service Provider' by industry leaders",
    },
    {
      year: "2024",
      event: "Global Expansion",
      description:
        "Extended services to international markets with advanced solutions",
    },
  ];

  useEffect(() => {
    const slider = document.getElementById("cf-coverflow");
    if (!slider) return;
    const cards = Array.from(slider.querySelectorAll<HTMLElement>(".cf-card"));
    if (!cards.length) return;

    let current = 0;
    let paused = false;
    let intervalId: number | null = null;

    const normalize = (d: number, n: number) => {
      const half = Math.floor(n / 2);
      const m = ((d % n) + n) % n;
      return m > half ? m - n : m;
    };

    const apply = () => {
      const n = cards.length;
      const rect = slider.getBoundingClientRect();
      const w = rect.width;
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const centerZ = isMobile ? 120 : 70;
      const centerScale = isMobile ? 1.06 : 1.0;
      const offset1 = Math.max(150, Math.min(w * 0.28, 280));
      const offset2 = Math.max(300, Math.min(w * 0.48, 440));

      for (let i = 0; i < n; i++) {
        const card = cards[i];
        const dist = normalize(i - current, n);
        let x = 0;
        let z = -200;
        let s = 0.6;
        let rY = 0;
        let op = 0;
        let zi = 1;
        if (dist === -2) {
          x = -offset2;
          z = -80;
          s = 0.72;
          rY = 22;
          op = 0.6;
          zi = 3;
        } else if (dist === -1) {
          x = -offset1;
          z = 0;
          s = 0.86;
          rY = 18;
          op = 0.9;
          zi = 4;
        } else if (dist === 0) {
          x = 0;
          z = centerZ;
          s = centerScale;
          rY = 0;
          op = 1;
          zi = 5;
        } else if (dist === 1) {
          x = offset1;
          z = 0;
          s = 0.86;
          rY = -18;
          op = 0.9;
          zi = 4;
        } else if (dist === 2) {
          x = offset2;
          z = -80;
          s = 0.72;
          rY = -22;
          op = 0.6;
          zi = 3;
        }
        card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rY}deg) scale(${s})`;
        card.style.opacity = String(op);
        card.style.zIndex = String(zi);
        card.style.pointerEvents = op > 0 ? "auto" : "none";
      }
    };

    const start = () => {
      if (intervalId != null) return;
      intervalId = window.setInterval(() => {
        if (!paused) {
          current = (current + 1) % cards.length;
          apply();
        }
      }, 2400);
    };

    const stop = () => {
      if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };

    cards.forEach((c) => {
      c.addEventListener("mouseenter", onEnter);
      c.addEventListener("mouseleave", onLeave);
    });

    const onResize = () => apply();
    window.addEventListener("resize", onResize);

    apply();
    start();

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", onEnter);
        c.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                About Urbantech Ecom
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
              We're passionate about helping e-commerce businesses thrive
              through innovative strategies and cutting-edge technology
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-10 hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">
                Our Story
              </h2>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, Urbantech Ecom emerged from a simple
                  observation: e-commerce businesses were struggling to navigate
                  the complex world of online marketplaces and digital
                  optimization with traditional methods.
                </p>
                <p>
                  Our founders, with their combined experience at major tech
                  companies and e-commerce platforms, recognized the need for
                  specialized services that could bridge the gap between
                  cutting-edge technology and sustainable business growth.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses achieve
                  their e-commerce goals, with an average sales increase of 150%
                  within the first 90 days of partnership using our advanced
                  solutions.
                </p>
              </div>
              <div className="mt-8 sm:mt-12">
                <Link
                  href="/contact"
                  onClick={() => navigateToPage("/contact")}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>

            {/* Company Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-dashed border-gray-300">
              <div className="aspect-square bg-white rounded-xl sm:rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-400 p-4">
                <ImageIcon className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mb-4 sm:mb-6 lg:mb-8" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 mb-2 sm:mb-4 text-center">
                  Our Journey
                </h3>
                <p className="text-center text-sm sm:text-base lg:text-lg">
                  Company timeline, milestone achievements, and team
                  collaboration photos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do and shape our
              innovative approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The experts behind your success and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-100"
              >
                {/* Image Container with Hover Effect */}
                <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-white shadow-lg overflow-hidden border-4 border-white group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                          <Users className="h-16 w-16 sm:h-20 sm:w-20" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-medium text-blue-700">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay 
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-lg font-semibold mb-2">Connect with {member.name.split(' ')[0]}</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="text-white hover:text-blue-300 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-blue-300 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Key milestones in our growth story and innovation timeline
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 hidden lg:block"></div>
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0
                        ? "lg:text-right lg:pr-8 xl:pr-16"
                        : "lg:text-left lg:pl-8 xl:pl-16"
                    }`}
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full border-4 border-white shadow-xl hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">
              Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our story through a smooth, layered coverflow carousel
            </p>
          </div>
          <div className="cf-wrapper">
            <div id="cf-coverflow" className="cf-slider">
              <ul className="cf-track">
                <li
                  className="cf-card"
                  data-title="Customer Success"
                  data-description="Delivering measurable outcomes for every partner"
                >
                  <img
                    className="cf-img"
                    src="/images/image6.jpg"
                    alt="Customer Success"
                    loading="lazy"
                  />
                  <div className="cf-overlay">
                    <div className="cf-overlay-content">
                      <h3 className="cf-title">Customer Success</h3>
                      <p className="cf-desc">
                        Delivering measurable outcomes for every partner
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="cf-card"
                  data-title="Innovation"
                  data-description="Building future-ready solutions"
                >
                  <img
                    className="cf-img"
                    src="/images/image81.jpg"
                    alt="Innovation"
                    loading="lazy"
                  />
                  <div className="cf-overlay">
                    <div className="cf-overlay-content">
                      <h3 className="cf-title">Innovation</h3>
                      <p className="cf-desc">Building future-ready solutions</p>
                    </div>
                  </div>
                </li>
                <li
                  className="cf-card"
                  data-title="Growth"
                  data-description="Scaling brands with confidence"
                >
                  <img
                    className="cf-img"
                    src="/images/image6.jpg"
                    alt="Growth"
                    loading="lazy"
                  />
                  <div className="cf-overlay">
                    <div className="cf-overlay-content">
                      <h3 className="cf-title">Growth</h3>
                      <p className="cf-desc">Scaling brands with confidence</p>
                    </div>
                  </div>
                </li>
                <li
                  className="cf-card"
                  data-title="Partnership"
                  data-description="Long-term relationships built on trust"
                >
                  <img
                    className="cf-img"
                    src="/images/image81.jpg"
                    alt="Partnership"
                    loading="lazy"
                  />
                  <div className="cf-overlay">
                    <div className="cf-overlay-content">
                      <h3 className="cf-title">Partnership</h3>
                      <p className="cf-desc">
                        Long-term relationships built on trust
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  className="cf-card"
                  data-title="Automation"
                  data-description="Smart systems that reduce friction"
                >
                  <img
                    className="cf-img"
                    src="/images/image6.jpg"
                    alt="Automation"
                    loading="lazy"
                  />
                  <div className="cf-overlay">
                    <div className="cf-overlay-content">
                      <h3 className="cf-title">Automation</h3>
                      <p className="cf-desc">
                        Smart systems that reduce friction
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style>{`
          .cf-wrapper{perspective:1200px}
          .cf-slider{position:relative;height:clamp(280px,55vw,180px);transform-style:preserve-3d}
          .cf-track{list-style:none;margin:0;padding:0}
          .cf-card{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:clamp(320px,26vw,400px);height:clamp(140px,32vw,400px);border-radius:18px;overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,.25);transition:transform 800ms cubic-bezier(.22,.61,.36,1),opacity 800ms ease,z-index 0s;will-change:transform,opacity;backface-visibility:hidden}
          .cf-img{width:100%;height:100%;object-fit:cover;display:block}
          .cf-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.65));opacity:0;transition:opacity 240ms ease;display:flex;align-items:center;justify-content:center}
          .cf-overlay-content{text-align:center;color:#fff;padding:24px}
          .cf-title{font-size:clamp(18px,2.2vw,26px);font-weight:700;letter-spacing:.2px}
          .cf-desc{margin-top:8px;font-size:clamp(13px,1.6vw,16px);opacity:.9}
          .cf-card:hover .cf-overlay{opacity:1}
          .cf-card{cursor:pointer}
          @media (max-width:640px){.cf-slider{height:clamp(300px,75vw,520px)}.cf-card{width:clamp(220px,70vw,360px);height:clamp(160px,50vw,260px)}}
        `}</style>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 sm:mb-16 leading-relaxed px-4">
            To empower e-commerce businesses with innovative technology and
            expert strategies that drive sustainable growth and success in the
            digital marketplace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Innovation
              </h3>
              <p className="text-gray-200 text-base sm:text-lg">
                Cutting-edge solutions for modern e-commerce challenges
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Results
              </h3>
              <p className="text-gray-200 text-base sm:text-lg">
                Measurable outcomes that drive exponential business growth
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Partnership
              </h3>
              <p className="text-gray-200 text-base sm:text-lg">
                Long-term relationships built on trust and proven success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 leading-relaxed px-4">
            Join hundreds of successful businesses that trust Urbantech Ecom for
            their e-commerce growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center">
            <Link
              href="/contact"
              onClick={() => navigateToPage("/contact")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
            >
              Start Your Journey
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="/services"
              onClick={() => navigateToPage("/services")}
              className="border-2 border-gray-300 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg sm:rounded-xl text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
