import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. HERO SECTION (Matches other pages) */}
      <div className="bg-[#111827] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Terms of Service
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-600">
          <p className="mb-6 font-bold text-gray-900">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            1. Agreement to Terms
          </h3>
          <p className="mb-6">
            By accessing our website and booking our services, you agree to be
            bound by these Terms of Service. If you do not agree, please do not
            use our services.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            2. Bookings and Payments
          </h3>
          <p className="mb-6">
            A deposit of 30% is required to secure your booking. The remaining
            balance is due 30 days prior to the safari start date. Prices are
            subject to change based on park fee regulations.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            3. Cancellations and Refunds
          </h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              Cancellations made 60 days prior: Full refund (minus transaction
              fees).
            </li>
            <li>Cancellations made 30-59 days prior: 50% refund.</li>
            <li>Cancellations made less than 30 days prior: No refund.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">4. Liability</h3>
          <p className="mb-6">
            Saleto Tours is not liable for delays, loss of property, or injury
            caused by force majeure events, including but not limited to weather
            conditions or political unrest. We strongly recommend purchasing
            comprehensive travel insurance.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            5. Governing Law
          </h3>
          <p>
            These terms are governed by the laws of Kenya. Any disputes shall be
            resolved in the courts of Nairobi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
