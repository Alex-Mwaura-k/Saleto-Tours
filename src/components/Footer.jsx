import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-[#FF5733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* 1. BRAND COLUMN */}
          {/* REMOVED 'text-center' - Text is now Left Aligned by default */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-4">
              Seleto Tours
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Going beyond the maps to bring you the authentic spirit of Africa.
              Luxury safaris, unforgettable memories.
            </p>

            {/* SOCIAL ICONS: ONLY these are centered on mobile */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-[#FF5733] transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5733] transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5733] transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#FF5733] transition">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#FF5733] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="hover:text-[#FF5733] transition"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="hover:text-[#FF5733] transition"
                >
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#FF5733] transition">
                  Travel Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>info@seletotours.com</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>

          {/* 4. NEWSLETTER */}
          {/* REMOVED 'text-center' - Text is Left Aligned */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe for the latest safari offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF5733] w-full"
              />
              <button className="bg-[#FF5733] hover:bg-[#E64A19] text-white px-4 py-2 rounded-r-md transition font-bold">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Seleto Tours. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
