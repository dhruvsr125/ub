"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertCircle } from "lucide-react";

export default function TermsOfServicePage() {
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
            <Scale className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>

          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Urbantech Ecom services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Urbantech Ecom provides e-commerce management services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Amazon account management</li>
              <li>PPC advertising and optimization</li>
              <li>Product listing optimization</li>
              <li>Inventory management</li>
              <li>Content creation and design</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing accurate and complete information</li>
              <li>Maintaining account access credentials</li>
              <li>Complying with platform policies and regulations</li>
              <li>Timely payment of service fees</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2 text-blue-600" />
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Urbantech Ecom shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Payment terms are as agreed upon in individual service agreements. Late payments may result in service suspension.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate services with appropriate notice as specified in the service agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Service, contact us at:
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
