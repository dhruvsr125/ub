"use client"

import type React from "react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: "Home", href: "/", section: "hero" },
    {
      name: "Services",
      href: "/services",
      section: null,
      hasDropdown: true,
      dropdown: [
        {
          name: "Amazon Account Management",
          href: "/services/amazon-account-management",
          subServices: [],
        },
        {
          name: "PPC - Advertising Management",
          href: "/services/ppc-advertising",
          subServices: [
            {
              name: "Increase in Sales",
              href: "/services/ppc-advertising/increase-in-sales",
            },
            {
              name: "Winning Ads Strategy",
              href: "/services/ppc-advertising/winning-ads-strategy",
            },
          ],
        },
        {
          name: "Listing Optimization",
          href: "/services/listing-optimization",
          subServices: [
            {
              name: "Listing Creation",
              href: "/services/listing-optimization/listing-creation",
            },
            {
              name: "Listing Quality Check",
              href: "/services/listing-optimization/listing-quality-check",
            },
            {
              name: "Keyword Research & Competitive Analysis",
              href: "/services/listing-optimization/keyword-research",
            },
            {
              name: "Brand & Category Approval",
              href: "/services/listing-optimization/brand-category-approval",
            },
          ],
        },
        {
          name: "Catalog Management",
          href: "/services/catalog-management",
          subServices: [],
        },
        {
          name: "Reconciliation & Reports",
          href: "/services/reconciliation-reports",
          subServices: [],
        },
        {
          name: "Graphics & Design",
          href: "/services/graphics-design",
          subServices: [
            {
              name: "Amazon EBC A+ Content Creation",
              href: "/services/graphics-design/ebc-content-creation",
            },
            {
              name: "Amazon Brand Store Design",
              href: "/services/graphics-design/brand-store-design",
            },
            {
              name: "Infographics & Life Style Images",
              href: "/services/graphics-design/infographics-lifestyle",
            },
          ],
        },
        {
          name: "Revenue Re-Claims",
          href: "/services/revenue-reclaims",
          subServices: [],
        },
        {
          name: "Inventory Management",
          href: "/services/inventory-management",
          subServices: [
            {
              name: "Inventory Forecasting",
              href: "/services/inventory-management/inventory-forecasting",
            },
            {
              name: "FBA Shipment Management",
              href: "/services/inventory-management/fba-shipment-management",
            },
          ],
        },
      ],
    },
    { name: "Portfolio", href: "/portfolio", section: null },
    { name: "About Us", href: "/about-us", section: null },
    { name: "How It Works", href: "/how-it-works", section: null },
    { name: "Blog", href: "/blog", section: null },
    { name: "Contact", href: "/contact", section: null },
  ]

  // Handle navigation clicks
  const handleNavClick = (item: any, e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    setIsServicesOpen(false)
    setExpandedService(null)

    if (item.href !== pathname) {
      router.push(item.href)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 200)
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Handle dropdown service click
  const handleServiceClick = (serviceHref: string) => {
    setIsServicesOpen(false)
    setIsOpen(false)
    setExpandedService(null)
    router.push(serviceHref)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 200)
  }

  // Get active state for navigation items
  const getActiveState = (item: any) => {
    if (pathname === item.href) {
      return true
    }
    if (item.hasDropdown && pathname.startsWith("/services/")) {
      return true
    }
    return false
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center h-16 sm:h-20">
            <button
              onClick={(e) => handleNavClick({ href: "/", section: "hero" }, e)}
              className="flex items-center cursor-pointer group"
            >
              <div className="flex-shrink-0">
                <img 
                  src="/Urbantech_logo.png" 
                  alt="Urbantech" 
                  className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain"
                  style={{ maxWidth: '200px' }}
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className={`flex items-center px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                        getActiveState(item)
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Services Dropdown */}
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={`absolute top-full left-0 mt-1 w-96 transition-all duration-200 ${
                        isServicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                      style={{ zIndex: 50 }}
                    >
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2 max-h-96 overflow-y-auto">
                        {item.dropdown?.map((service, index) => (
                          <div key={index}>
                            <button
                              onClick={() => handleServiceClick(service.href)}
                              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors font-medium"
                            >
                              {service.name}
                            </button>
                            {service.subServices && service.subServices.length > 0 && (
                              <div className="pl-6 pb-2">
                                {service.subServices.map((subService, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => handleServiceClick(subService.href)}
                                    className="w-full text-left px-4 py-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-25 transition-colors"
                                  >
                                    • {subService.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button
                            onClick={() => handleServiceClick("/services")}
                            className="w-full text-left px-4 py-2 text-sm text-blue-700 font-medium hover:bg-blue-50"
                          >
                            View All Services →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleNavClick(item, e)}
                    className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      getActiveState(item)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={(e) => handleNavClick({ href: "/contact", section: null }, e)}
              className="bg-gradient-to-r from-gray-800 to-blue-800 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg text-sm font-semibold hover:from-gray-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                          getActiveState(item)
                            ? "text-blue-700 bg-blue-50"
                            : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Mobile Services Dropdown */}
                      {isServicesOpen && (
                        <div className="pl-4 py-2 space-y-1 max-h-64 overflow-y-auto">
                          {item.dropdown?.map((service, index) => (
                            <div key={index}>
                              <div className="flex items-center justify-between">
                                <button
                                  onClick={() => handleServiceClick(service.href)}
                                  className="flex-1 text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                                >
                                  {service.name}
                                </button>
                                {service.subServices && service.subServices.length > 0 && (
                                  <button
                                    onClick={() =>
                                      setExpandedService(expandedService === service.name ? null : service.name)
                                    }
                                    className="p-2 text-gray-400 hover:text-blue-600"
                                  >
                                    <ChevronRight
                                      className={`h-4 w-4 transition-transform duration-200 ${
                                        expandedService === service.name ? "rotate-90" : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>
                              {service.subServices &&
                                service.subServices.length > 0 &&
                                expandedService === service.name && (
                                  <div className="pl-4 py-1 space-y-1">
                                    {service.subServices.map((subService, subIndex) => (
                                      <button
                                        key={subIndex}
                                        onClick={() => handleServiceClick(subService.href)}
                                        className="w-full text-left px-3 py-2 text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-25 rounded transition-colors"
                                      >
                                        • {subService.name}
                                      </button>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                          <button
                            onClick={() => handleServiceClick("/services")}
                            className="w-full text-left px-3 py-2 text-sm text-blue-700 font-medium hover:bg-blue-50 rounded-lg"
                          >
                            View All Services →
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className={`block w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                        getActiveState(item)
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={(e) => handleNavClick({ href: "/contact", section: null }, e)}
                className="block w-full text-center bg-gradient-to-r from-gray-800 to-blue-800 text-white px-4 py-3 rounded-lg text-base font-semibold hover:from-gray-700 hover:to-blue-700 transition-all duration-300 mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
