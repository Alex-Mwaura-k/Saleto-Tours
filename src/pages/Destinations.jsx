import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaSearch,
} from "react-icons/fa";
import { destinationsData } from "../data/destinationsData";

const Destinations = () => {
  // 1. Calculate the highest price in your data dynamically
  const highestPrice = useMemo(
    () => Math.max(...destinationsData.map((d) => d.price || 0)),
    [],
  );

  // 2. STATE: Category, Search, and Price
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(highestPrice); // Default to max price

  // 3. LOGIC: Filter by Category + Search + Price
  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesCategory = filter === "All" || dest.category === filter;

    const matchesSearch =
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = (dest.price || 0) <= priceRange;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* HERO HEADER */}
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

      {/* FILTER & SEARCH BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-6">
          {/* Top Row: Categories & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Find a place..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5733]"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
            </div>
          </div>

          {/* Bottom Row: Price Filter Slider */}
          <div className="border-t border-gray-100 pt-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-sm font-bold text-gray-700 whitespace-nowrap">
                Max Price:{" "}
                <span className="text-[#FF5733]">
                  Ksh {priceRange.toLocaleString()}
                </span>
              </span>

              <input
                type="range"
                min="0"
                max={highestPrice}
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5733]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DESTINATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <Link to={`/destinations/${dest.id}`} key={dest.id}>
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

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl">
                No destinations found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilter("All");
                  setPriceRange(highestPrice);
                }}
                className="mt-4 text-[#FF5733] font-bold hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CTA SECTION */}
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
