import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaLeaf,
  FaGlobeAfrica,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 1. HERO HEADER WITH BREADCRUMB */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            About Saleto Tours
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-white font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* 2. OUR STORY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#FF5733] rounded-2xl z-0 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Safari Guide looking at horizon"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-[#FF5733] font-bold uppercase tracking-wider text-sm mb-2">
              Who We Are
            </h4>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
              Going Beyond the Maps
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Saleto Tours was born from a simple passion: to show the world the
              <span className="font-semibold text-gray-800">
                {" "}
                authentic, untamed spirit of Africa
              </span>
              . We believe a safari shouldn't just be a vacation—it should be a
              transformative journey that touches your soul.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Based in Nairobi, our team consists of local experts who have
              grown up alongside the wildlife we protect. Whether it's the
              thundering herds of the Great Migration or a quiet sunset over the
              Savannah, we know exactly where to take you for the perfect
              moment.
            </p>

            {/* Signature / Quote */}
            <div className="border-l-4 border-[#FF5733] pl-4 italic text-gray-700">
              "We don't just sell tours; we craft memories that last a
              lifetime."
            </div>
          </div>
        </div>
      </div>

      {/* 3. MISSION & VISION */}
      <div className="bg-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide sustainable, luxury travel experiences that connect
                our guests with nature while actively contributing to the
                conservation of Kenya's wildlife and the empowerment of local
                communities.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative safari company in East
                Africa, recognized globally for our commitment to authenticity,
                excellence, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE US (Values) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900">
            Why Choose Saleto?
          </h2>
          <div className="w-20 h-1 bg-[#FF5733] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value 1 */}
          <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition duration-300 group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF5733] transition duration-300">
              <FaUsers className="text-[#FF5733] text-2xl group-hover:text-white transition duration-300" />
            </div>
            <h4 className="text-xl font-bold mb-3">Local Experts</h4>
            <p className="text-gray-600 text-sm">
              Our guides are born and raised here, offering insights you won't
              find in any guidebook.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition duration-300 group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF5733] transition duration-300">
              <FaLeaf className="text-[#FF5733] text-2xl group-hover:text-white transition duration-300" />
            </div>
            <h4 className="text-xl font-bold mb-3">Sustainable Travel</h4>
            <p className="text-gray-600 text-sm">
              We practice eco-friendly tourism to ensure our wildlife thrives
              for generations to come.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition duration-300 group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF5733] transition duration-300">
              <FaGlobeAfrica className="text-[#FF5733] text-2xl group-hover:text-white transition duration-300" />
            </div>
            <h4 className="text-xl font-bold mb-3">Tailored Safaris</h4>
            <p className="text-gray-600 text-sm">
              Every itinerary is custom-built. Your pace, your preferences, your
              dream adventure.
            </p>
          </div>

          {/* Value 4 */}
          <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition duration-300 group">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF5733] transition duration-300">
              <FaAward className="text-[#FF5733] text-2xl group-hover:text-white transition duration-300" />
            </div>
            <h4 className="text-xl font-bold mb-3">Luxury & Comfort</h4>
            <p className="text-gray-600 text-sm">
              We partner with the finest lodges and camps to ensure your rest is
              as memorable as your ride.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <div className="bg-gray-900 py-16 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Let us help you plan the safari of a lifetime. Contact our team today.
        </p>
        <Link to="/contact">
          <button className="bg-[#FF5733] hover:bg-[#E64A19] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
