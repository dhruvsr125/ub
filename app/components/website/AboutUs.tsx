"use client"

import Link from "next/link"
import { ArrowRight, Users, Target, Award, TrendingUp, ImageIcon, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutUs() {
  const router = useRouter()

  const navigateToPage = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 200)
  }

  const stats = [
    { number: "500+", label: "Successful Clients", icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" /> },
    {
      number: "150%",
      label: "Average Sales Increase",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />,
    },
    { number: "5+", label: "Years of Experience", icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" /> },
    { number: "24/7", label: "Support Available", icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" /> },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former Amazon executive with 10+ years in e-commerce optimization and advanced solutions",
      imageAlt: "Sarah Johnson - CEO & Founder professional headshot",
    },
    {
      name: "Mike Chen",
      role: "Head of Strategy",
      bio: "E-commerce strategist specializing in marketplace growth and advanced automation systems",
      imageAlt: "Mike Chen - Head of Strategy professional headshot",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Marketing Specialist",
      bio: "PPC expert with proven track record in marketplace advertising and conversion optimization",
      imageAlt: "Emily Rodriguez - Lead Marketing Specialist professional headshot",
    },
    {
      name: "David Park",
      role: "Technical Director",
      bio: "Full-stack developer focused on e-commerce automation and integration solutions",
      imageAlt: "David Park - Technical Director professional headshot",
    },
  ]

  const values = [
    {
      title: "Client Success First",
      description:
        "Your success is our success. We're committed to delivering measurable results that drive your business forward with cutting-edge technology.",
      icon: <Target className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
    {
      title: "Innovation & Excellence",
      description: "We stay ahead of industry trends and continuously innovate to provide cutting-edge solutions.",
      icon: <Award className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
    {
      title: "Transparency & Trust",
      description:
        "We believe in open communication and building long-term partnerships based on trust and proven results.",
      icon: <Users className="h-8 w-8 sm:h-12 sm:w-12 text-blue-400" />,
    },
  ]

  const milestones = [
    {
      year: "2019",
      event: "Company Founded",
      description: "Started with a vision to revolutionize e-commerce optimization with advanced technology",
    },
    {
      year: "2020",
      event: "First 100 Clients",
      description: "Reached our first major milestone with proven results and growth",
    },
    {
      year: "2021",
      event: "Advanced Integration",
      description: "Launched advanced optimization tools and automation",
    },
    { year: "2022", event: "500+ Clients", description: "Expanded to serve over 500 successful businesses worldwide" },
    {
      year: "2023",
      event: "Industry Recognition",
      description: "Awarded 'Best E-commerce Service Provider' by industry leaders",
    },
    {
      year: "2024",
      event: "Global Expansion",
      description: "Extended services to international markets with advanced solutions",
    },
  ]

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
              We're passionate about helping e-commerce businesses thrive through innovative strategies and cutting-edge
              technology solutions
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
                <div className="text-gray-600 font-semibold text-sm sm:text-base lg:text-lg">{stat.label}</div>
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
                  Founded in 2019, Urbantech Ecom emerged from a simple observation: e-commerce businesses were
                  struggling to navigate the complex world of online marketplaces and digital optimization with
                  traditional methods.
                </p>
                <p>
                  Our founders, with their combined experience at major tech companies and e-commerce platforms,
                  recognized the need for specialized services that could bridge the gap between cutting-edge technology
                  and sustainable business growth.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses achieve their e-commerce goals, with an average
                  sales increase of 150% within the first 90 days of partnership using our advanced solutions.
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
                  Company timeline, milestone achievements, and team collaboration photos
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
              The principles that guide everything we do and shape our innovative approach
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
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{value.description}</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
              >
                {/* Team Member Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-4 sm:p-6 lg:p-8">
                  <div className="aspect-square bg-white rounded-xl sm:rounded-2xl shadow-inner flex flex-col items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors p-4">
                    <ImageIcon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 mb-2 sm:mb-4" />
                    <p className="text-xs sm:text-sm text-center font-medium">{member.imageAlt}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.bio}</p>
                </div>
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
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}
                >
                  <div
                    className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right lg:pr-8 xl:pr-16" : "lg:text-left lg:pl-8 xl:pl-16"}`}
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">{milestone.year}</div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full border-4 border-white shadow-xl hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12">Our Mission</h2>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 sm:mb-16 leading-relaxed px-4">
            To empower e-commerce businesses with innovative technology and expert strategies that drive sustainable
            growth and success in the digital marketplace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Innovation</h3>
              <p className="text-gray-200 text-base sm:text-lg">
                Cutting-edge solutions for modern e-commerce challenges
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Results</h3>
              <p className="text-gray-200 text-base sm:text-lg">
                Measurable outcomes that drive exponential business growth
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Partnership</h3>
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
            Join hundreds of successful businesses that trust Urbantech Ecom for their e-commerce growth and innovation
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
  )
}
