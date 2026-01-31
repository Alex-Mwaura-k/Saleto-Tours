import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight, // Kept for logic, but using / in breadcrumb as requested
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* 1. HERO HEADER */}
      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* 2. CONTACT FORM CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* LEFT: INFO SIDEBAR */}
          <div className="bg-[#111827] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF5733] opacity-10 rounded-tr-full"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-bl-full"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-6">
                Contact Info
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Have a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-10 h-10 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Phone</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      +254 700 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-10 h-10 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Email</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      info@saletotours.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-10 h-10 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Location</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      Saleto Plaza, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <h5 className="font-bold text-sm mb-4 text-gray-300 uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF5733] hover:text-white text-gray-400 transition-all duration-300"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF5733] hover:text-white text-gray-400 transition-all duration-300"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF5733] hover:text-white text-gray-400 transition-all duration-300"
                >
                  <FaWhatsapp className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM */}
          <div className="p-8 md:p-12 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition-colors"
                    placeholder="Frist Last"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition-colors"
                    placeholder="+254..."
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition-colors resize-none"
                  placeholder="Tell us about your trip..."
                ></textarea>
              </div>
              <button className="w-full bg-[#FF5733] hover:bg-[#E64A19] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Send Message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full mt-8">
        <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-6 flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#FF5733]" /> Find Us Here
        </h3>

        {/* Working Google Map Embed for Nairobi */}
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Nairobi Map"
            src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
