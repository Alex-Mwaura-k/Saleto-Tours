import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import { destinationsData } from "../data/destinationsData";

const FeaturedSafaris = () => {
  // Pull the first 4 destinations
  const featuredDestinations = destinationsData.slice(0, 4);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hand-picked adventures designed to give you the best experience of
            the wild.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDestinations.map((dest, index) => (
            <Link
              to={`/destinations/${dest.id}`}
              key={dest.id}
              // 1. Logic to hide the 4th item (index 3) on mobile, but show on md+ screens
              className={index === 3 ? "hidden md:block" : "block"}
            >
              {/* DESTINATION CARD STYLE */}
              <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                {/* Background Image */}
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="bg-[#FF5733] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                    {dest.category}
                  </span>

                  <h3 className="text-xl font-bold text-white font-['Playfair_Display'] mb-2">
                    {dest.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="flex items-center text-[#FF5733] text-sm font-bold">
                    Explore <FaExternalLinkAlt className="ml-2 text-xs" />
                  </div>
                </div>

                {/* Map Marker */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                  <FaMapMarkerAlt />
                </div>

                {/* Price Tag */}
                {dest.price && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg z-10">
                    <span className="text-gray-900 font-bold text-xs flex items-center gap-1">
                      From Ksh {dest.price.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* 2. View All Button */}
        <div className="text-center">
          <Link to="/destinations">
            <button className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#FF5733] transition-colors duration-300 transform">
              View All Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSafaris;
