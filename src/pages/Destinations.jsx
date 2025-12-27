import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaSearch,
} from "react-icons/fa";
// 👇 IMPORT THE DATA
import { destinationsData } from "../data/destinationsData";

const Destinations = () => {
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredDestinations =
    filter === "All"
      ? destinationsData
      : destinationsData.filter((dest) => dest.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 1. HERO HEADER */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Our Destinations
          </h1>

          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-white font-medium">Destinations</span>
          </nav>
        </div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            {["All", "Park", "Beach", "Mountain", "Lake"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#FF5733] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Placeholder */}
          <div className="relative w-full md:w-64 hidden md:block">
            <input
              type="text"
              placeholder="Find a place..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5733]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      {/* 3. DESTINATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Content Positioned at Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Category Tag */}
                <span className="bg-[#FF5733] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                  {dest.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-['Playfair_Display'] mb-2">
                  {dest.title}
                </h3>

                {/* Description (Hides on mobile, shows on hover/desktop) */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {dest.description}
                </p>

                {/* Explore Link */}
                <div className="flex items-center text-[#FF5733] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Explore <FaExternalLinkAlt className="ml-2 text-xs" />
                </div>
              </div>

              {/* Location Icon Top Right */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                <FaMapMarkerAlt />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA SECTION */}
      <div className="bg-white mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-gray-900">
            Not sure where to go?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Talk to our travel experts. We can recommend the perfect destination
            based on the season, your budget, and what wildlife you want to see.
          </p>
          <Link to="/contact">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#FF5733] transition-colors duration-300">
              Get a Recommendation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
