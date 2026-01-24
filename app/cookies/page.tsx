"use client";

import Link from "next/link";
import { ArrowLeft, Cookie, Settings, Shield } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="flex items-center mb-8">
            <Cookie className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Cookie Policy</h1>
          </div>

          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Cookie className="h-6 w-6 mr-2 text-blue-600" />
              1. What Are Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving site functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="h-6 w-6 mr-2 text-blue-600" />
              2. Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-blue-600" />
              3. Managing Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Browser settings allow you to refuse or accept cookies</li>
              <li>You can delete cookies that have already been set</li>
              <li>Most browsers provide options to block third-party cookies</li>
              <li>You can set your browser to notify you when cookies are being set</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and you should check the third-party websites for more information about their use.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              Email: info@urbantechecomservice.com<br />
              Phone: +91 91578 15577
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
