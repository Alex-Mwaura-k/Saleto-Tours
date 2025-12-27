import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
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
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* 1. HERO HEADER */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
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
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-white font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* 2. CONTACT FORM CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* LEFT: INFO SIDEBAR (Dark Brand Color) */}
          <div className="bg-gray-800 text-white p-10 md:w-2/5 flex flex-col justify-between relative">
            {/* Decoration */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF5733] opacity-10 rounded-tr-full"></div>

            <div>
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-6">
                Contact Info
              </h3>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                Have a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-8 h-8 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Phone</h5>
                    <p className="text-gray-300 text-sm">+254 700 000 000</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-8 h-8 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Email</h5>
                    <p className="text-gray-300 text-sm">
                      info@saletotours.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-8 h-8 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Location</h5>
                    <p className="text-gray-300 text-sm">
                      Saleto Plaza, Nairobi
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-8 h-8 bg-[#FF5733] rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <FaClock className="text-xs" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Office Hours</h5>
                    <p className="text-gray-300 text-sm">
                      Mon - Fri: 8am - 6pm
                    </p>
                    <p className="text-gray-300 text-sm">Sat: 9am - 1pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h5 className="font-bold text-sm mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF5733] transition"
                >
                  <FaFacebookF className="text-xs" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF5733] transition"
                >
                  <FaInstagram className="text-xs" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#FF5733] transition"
                >
                  <FaWhatsapp className="text-xs" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM */}
          <div className="p-8 md:p-12 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 font-['Playfair_Display'] mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition"
                    placeholder="+254..."
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF5733] focus:ring-1 focus:ring-[#FF5733] transition resize-none"
                  placeholder="Tell us about your trip..."
                ></textarea>
              </div>

              <button className="w-full bg-[#FF5733] hover:bg-[#E64A19] text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Send Message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <h3 className="text-xl font-bold text-gray-800 font-['Playfair_Display'] mb-4">
          Find Us Here
        </h3>
        {/* UPDATED: Removed 'grayscale' and 'hover:grayscale-0' classes */}
        <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Nairobi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.22557404515!2d36.70730765792942!3d-1.3031933758379057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1703664000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
