import React from "react";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const FeaturedSafaris = ({ packages }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Safaris
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hand-picked adventures designed to give you the best experience of
            the wild.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#FF5733] shadow-sm">
                  {pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaMapMarkerAlt className="mr-2 text-[#0672CD]" />
                  {pkg.location}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {pkg.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center text-gray-600 text-sm mb-6">
                  <FaClock className="mr-2 text-[#FF5733]" />
                  {pkg.duration}
                </div>

                {/* View Details Button */}
                <button className="mt-auto w-full flex items-center justify-center space-x-2 border border-[#0672CD] text-[#0672CD] py-2 rounded-lg hover:bg-[#0672CD] hover:text-white transition duration-300 font-medium">
                  <span>View Details</span>
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSafaris;
