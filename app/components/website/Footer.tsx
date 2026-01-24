"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const navigateToPage = (href: string) => {
    router.push(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const footerLinks = {
    services: [
      {
        name: "Advanced Listing Optimization",
        href: "/services/listing-optimization",
      },
      { name: "Advanced PPC Management", href: "/services/marketplace-ads" },
      {
        name: "Complete Account Management",
        href: "/services/amazon-account-management",
      },
      {
        name: "Advanced Analytics & Insights",
        href: "/services/analytics-reports",
      },
      {
        name: "Professional Content Creation",
        href: "/services/content-creation",
      },
      {
        name: "Intelligent Process Automation",
        href: "/services/process-automation",
      },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Success Stories", href: "/portfolio" },
      { name: "Blog & Insights", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
    resources: [
      { name: "E-commerce Guide", href: "/blog" },
      { name: "Amazon SEO Tips", href: "/blog" },
      { name: "PPC Best Practices", href: "/blog" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Free Consultation", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the Competition
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get exclusive e-commerce insights, expert strategies, and
                industry updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                Urbantech Ecom
              </h2>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Transforming e-commerce businesses with professional solutions and
              expert strategies. Join 500+ successful brands that trust us for
              their growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+91 91578 15577</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@urbantechecomservice.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">221, Vihav Trade Center, Near Waves Club, Bhayli, Vadodara - Gujarat, India - 391410</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage(link.href);
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage(link.href);
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPage(link.href);
                    }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-blue-500"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">150%</div>
                <div className="text-xs text-gray-400">Avg ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-xs text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Urbantech Ecom. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage("/privacy");
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage("/terms");
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage("/cookies");
                }}
                className="hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
