import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-[#FF5733]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-12">
          {/* 1. BRAND COLUMN */}
          {/* Removed 'text-center' from this parent container so the paragraph stays left-aligned */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            {/* CENTERED ON MOBILE: Title */}
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-4 text-center lg:text-left">
              Saleto Tours
            </h3>

            {/* LEFT ALIGNED: Description Text (Default behavior, but explicit text-left ensures it) */}
            <p className="text-sm leading-relaxed mb-6 text-gray-400 text-left">
              Going beyond the maps to bring you the authentic spirit of Africa.
              Luxury safaris, unforgettable memories.
            </p>

            {/* CENTERED ON MOBILE: Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
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

          {/* 2. QUICK LINKS (Merged on Mobile) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:pl-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Travel Blogs
                </Link>
              </li>

              {/* MOBILE ONLY LINKS */}
              <li className="lg:hidden">
                <Link
                  to="/gallery"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Gallery
                </Link>
              </li>
              <li className="lg:hidden">
                <Link
                  to="/careers"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. OTHER LINKS (Desktop Only) */}
          <div className="hidden lg:block col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Other Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/gallery"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="flex items-center gap-2 hover:text-[#FF5733] transition"
                >
                  <FaChevronRight className="text-[10px] text-[#FF5733]" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">Nairobi, Kenya</li>
              <li className="flex items-center gap-2">info@saletotours.com</li>
              <li className="flex items-center gap-2">+254 700 000 000</li>
            </ul>
          </div>

          {/* 5. NEWSLETTER */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for the latest safari offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                id="cEmail"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF5733] w-full border border-gray-700"
              />
              <button className="bg-[#FF5733] hover:bg-[#E64A19] text-white px-6 py-2 rounded-r-md transition font-bold">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Saleto Tours. All rights reserved.
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
