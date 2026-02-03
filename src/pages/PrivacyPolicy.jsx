import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. HERO SECTION (Matches other pages) */}
      <div className="bg-[#111827] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Privacy Policy
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">Privacy Policy</span>
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
            1. Introduction
          </h3>
          <p className="mb-6">
            Saleto Tours ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and share
            your personal information when you visit our website or book a
            safari with us.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            2. Information We Collect
          </h3>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and passport details provided during booking.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details and
              billing addresses (processed securely by our payment partners).
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, such as IP address and browser type.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            3. How We Use Your Information
          </h3>
          <p className="mb-6">
            We use your data to process bookings, communicate itinerary updates,
            improve our website experience, and send marketing emails (only if
            you have opted in).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            4. Sharing Your Information
          </h3>
          <p className="mb-6">
            We do not sell your data. We may share necessary details with
            third-party service providers such as hotels, airlines, and park
            authorities to facilitate your trip.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            5. Contact Us
          </h3>
          <p>
            If you have questions about this policy, please contact us at{" "}
            <strong>info@saletotours.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
