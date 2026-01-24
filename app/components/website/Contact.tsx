"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-400" />,
      title: "Phone",
      details: "+91 91578 15577",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Email",
      details: "info@urbantechecomservice.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-400" />,
      title: "Office",
      details: "221, Vihav Trade Center",
      description: " Near Waves Club, Bhayli, Vadodara - Gujarat, India - 391410",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "Business Hours",
      details: "Monday - Friday: 9am - 6pm EST",
      description: "Weekend support available",
    },
  ];

  const services = [
    "Advanced Listing Optimization",
    "Advanced PPC Management",
    "Complete Account Management",
    "Advanced Analytics & Insights",
    "Professional Content Creation",
    "Intelligent Process Automation",
    "Custom Solution",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your e-commerce business? Let's discuss how we
              can help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-200">
              <h2 className="text-4xl font-bold text-gray-800 mb-10">
                Send us a message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-700"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Send Message
                    <Send className="ml-3 h-6 w-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-10">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200"
                    >
                      <div className="flex items-start">
                        <div className="bg-gradient-to-br from-gray-100 to-blue-100 p-4 rounded-xl mr-6">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {info.title}
                          </h3>
                          <p className="text-gray-700 font-semibold mb-2">
                            {info.details}
                          </p>
                          <p className="text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Image Placeholder */}

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <a
                    href="tel:+91 9157815577"
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Phone className="h-6 w-6 mr-4" />
                    <span className="font-semibold">
                      Call Now: +91 91578 15577
                    </span>
                  </a>
                  <a
                    href="https://wa.me/+919157815577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 rounded-xl p-4 hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 mr-4" />
                    <span className="font-semibold">
                      WhatsApp for Quick Response
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of New York's business district
            </p>
          </div>

          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.908996976681!2d73.1312954305539!3d22.284883295148155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xadedd7cd7e3b417d%3A0xd5a25aa6fdc8f54c!2sUrbanTech%20Ecom%20Services!5e0!3m2!1sen!2sin!4v1748342921358!5m2!1sen!2sin"
              width="100%"
              height="384"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UrbanTech Ecom Services Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
