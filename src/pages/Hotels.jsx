import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

// 1. IMPORT DATA
import { hotelsData } from "../data/hotelsData";

const Hotels = () => {
  const allHotels = hotelsData;

  // 2. STATE MANAGEMENT
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Top Rated");

  // Filter States
  const [priceRange, setPriceRange] = useState(100000);
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // 3. AVAILABLE OPTIONS
  const locations = [
    "All Locations",
    ...new Set(allHotels.map((h) => h.location)),
  ];

  const amenitiesList = [
    "WiFi",
    "Pool",
    "Parking",
    "Breakfast",
    "Spa",
    "Restaurant",
    "Bar",
    "Fitness",
    "Family",
    "View",
  ];

  // 4. FILTER LOGIC
  const filteredHotels = useMemo(() => {
    return allHotels
      .filter((hotel) => {
        // A. Price Filter
        if (hotel.price > priceRange) return false;

        // B. Star Rating
        if (selectedStars && hotel.rating < selectedStars) return false;

        // C. Location
        if (
          selectedLocation !== "All Locations" &&
          !hotel.location.includes(selectedLocation)
        )
          return false;

        // D. Amenities (Robust Check)
        const hotelAmenityStrings = hotel.amenities
          ? hotel.amenities
              .flatMap((cat) => cat.items)
              .join(" ")
              .toLowerCase()
          : "";

        if (selectedAmenities.length > 0) {
          const hasAllAmenities = selectedAmenities.every((filter) =>
            hotelAmenityStrings.includes(filter.toLowerCase()),
          );
          if (!hasAllAmenities) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        if (sortBy === "Top Rated") return b.rating - a.rating;
        return 0;
      });
  }, [
    allHotels,
    priceRange,
    selectedStars,
    selectedLocation,
    selectedAmenities,
    sortBy,
  ]);

  // Handlers
  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  const clearFilters = () => {
    setPriceRange(100000);
    setSelectedStars(null);
    setSelectedLocation("All Locations");
    setSelectedAmenities([]);
    setSortBy("Top Rated");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO HEADER - Updated Background Color */}
      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Hotels & Lodges
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">Hotels</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* MOBILE FILTER TOGGLE */}
        <div className="lg:hidden mb-6 flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm text-gray-700 font-bold border border-gray-200"
          >
            <FaFilter className="text-[#FF5733]" /> Filters
          </button>
          <span className="text-gray-500 text-sm font-bold">
            {filteredHotels.length} Properties
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          {/* SIDEBAR FILTER SECTION */}
          <div
            className={`
            fixed inset-0 z-50 bg-white p-6 transition-transform duration-300 ease-in-out 
            overflow-y-auto 
            lg:translate-x-0 lg:w-1/4 lg:bg-transparent lg:p-0 lg:shadow-none lg:z-auto lg:overflow-visible
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:h-auto
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
          `}
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center lg:hidden mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="bg-white lg:rounded-xl lg:shadow-sm lg:p-6 space-y-8 lg:border lg:border-gray-100">
              {/* 1. Sort By */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#FF5733] focus:border-[#FF5733]"
                >
                  <option>Top Rated</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              {/* 2. Price Range */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-gray-700">Max Price</span>
                  <span className="text-[#FF5733] font-bold">
                    KES {priceRange.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5733]"
                />
              </div>

              {/* 3. Star Rating */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Star Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <label
                      key={star}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedStars === star ? "bg-[#FF5733] border-[#FF5733] text-white" : "border-gray-300 bg-white"}`}
                      >
                        {selectedStars === star && (
                          <FaCheck className="text-xs" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="stars"
                        className="hidden"
                        checked={selectedStars === star}
                        onChange={() =>
                          setSelectedStars(selectedStars === star ? null : star)
                        }
                      />
                      <div className="flex items-center text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < star ? "" : "text-gray-200"}
                          />
                        ))}
                        <span className="ml-2 text-gray-600 text-xs font-medium group-hover:text-gray-900">
                          {star === 5 ? "5 Stars" : `${star}+ Stars`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 4. Location */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Location</h3>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-[#FF5733] focus:border-[#FF5733]"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* 5. Amenities */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Amenities</h3>
                <div className="space-y-2.5">
                  {amenitiesList.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAmenities.includes(amenity) ? "bg-[#FF5733] border-[#FF5733] text-white" : "border-gray-300 bg-white"}`}
                      >
                        {selectedAmenities.includes(amenity) && (
                          <FaCheck className="text-xs" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                      />
                      <span className="text-sm text-gray-600 hover:text-gray-900">
                        {amenity}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full py-2.5 border border-gray-300 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* MAIN GRID SECTION */}
          <div className="flex-1">
            {filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.id}`}
                    className="block group" // Makes entire card a link
                  >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                          KES {hotel.price.toLocaleString()}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 font-['Playfair_Display'] leading-tight mb-1 group-hover:text-[#FF5733] transition-colors">
                              {hotel.name}
                            </h3>
                            <div className="flex items-center text-gray-500 text-xs">
                              <FaMapMarkerAlt className="mr-1 text-[#FF5733]" />
                              {hotel.location}
                            </div>
                          </div>
                          <div className="flex bg-orange-50 px-1.5 py-1 rounded h-fit">
                            <FaStar className="text-xs text-yellow-400" />
                            <span className="text-xs font-bold text-yellow-700 ml-1">
                              {hotel.rating}
                            </span>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-2 mb-6 mt-2">
                          {hotel.amenities && hotel.amenities.length > 0 ? (
                            hotel.amenities
                              .flatMap((cat) => cat.items)
                              .slice(0, 3)
                              .map((am, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                >
                                  {am}
                                </span>
                              ))
                          ) : (
                            <span className="text-[10px] text-gray-400">
                              Amenities available
                            </span>
                          )}
                          <span className="text-[10px] text-gray-400 px-1">
                            + more
                          </span>
                        </div>

                        {/* Updated Button */}
                        <div className="mt-auto">
                          <button className="w-full py-2.5 bg-[#111827] text-white border-2 border-[#111827] rounded-lg font-bold text-sm hover:bg-transparent hover:text-[#111827] transition-all duration-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 border-dashed text-center">
                <div className="bg-gray-50 p-4 rounded-full mb-4">
                  <FaSearch className="text-gray-400 text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  No hotels found
                </h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
                  Try adjusting your price range or removing some amenity
                  filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-[#FF5733] font-bold text-sm hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
