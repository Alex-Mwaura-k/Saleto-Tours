import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { destinationsData } from "../data/destinationsData";

const FeaturedSafaris = () => {
  const featuredDestinations = destinationsData.slice(0, 4);

  return (
    <div className="pt-10 pb-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Hand-picked adventures designed to give you the best experience of
            the wild.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredDestinations.map((dest, index) => (
            <Link
              to={`/destinations/${dest.id}`}
              key={dest.id}
              className={index === 3 ? "hidden md:block" : "block"}
            >
              <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="bg-[#FF5733] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                    {dest.category}
                  </span>

                  <h3 className="text-lg font-bold text-white font-['Playfair_Display'] mb-2">
                    {dest.title}
                  </h3>

                  <p className="text-gray-300 text-xs mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div className="flex items-center text-[#FF5733] text-xs font-bold">
                    Explore <FaExternalLinkAlt className="ml-2 text-[10px]" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                  <FaMapMarkerAlt className="text-sm" />
                </div>

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

        <div className="text-center">
          <Link to="/destinations">
            <button className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#FF5733] transition-colors duration-300 transform text-sm">
              View All Destinations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSafaris;
