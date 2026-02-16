import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import { hotelsData } from "../data/hotelsData";
import { THEME } from "../constants";

const Hotels = () => {
  const allHotels = hotelsData;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Top Rated");

  const [priceRange, setPriceRange] = useState(100000);
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

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

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const filteredHotels = useMemo(() => {
    return allHotels
      .filter((hotel) => {
        if (hotel.price > priceRange) return false;

        if (selectedStars && hotel.rating < selectedStars) return false;

        if (
          selectedLocation !== "All Locations" &&
          !hotel.location.includes(selectedLocation)
        )
          return false;

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
      {/* Header Section */}
      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: THEME.highlight }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Hotels & Lodges
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link
              to="/"
              className="transition-colors hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">Hotels</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6 flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm text-gray-700 font-bold border border-gray-200"
          >
            <FaFilter style={{ color: THEME.highlight }} /> Filters
          </button>
          <span className="text-gray-500 text-sm font-bold">
            {filteredHotels.length} Properties
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start relative">
          {/* --- MOBILE FILTER SIDEBAR START --- */}

          {/* 1. Backdrop Overlay */}
          <div
            className={`fixed inset-0 bg-black/60 z-[99998] transition-opacity duration-300 lg:hidden ${
              isSidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* 2. Sidebar Container - Full Screen Width & Height */}
          <div
            className={`
            fixed top-0 left-0 h-[100dvh] w-full bg-white z-[99999] shadow-2xl 
            transform transition-transform duration-300 ease-in-out flex flex-col
            lg:translate-x-0 lg:static lg:h-auto lg:w-1/4 lg:bg-transparent lg:shadow-none lg:z-auto lg:block
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            {/* Header: Fixed at top with SAFE AREA PADDING */}
            <div className="flex justify-between items-center px-6 py-4 pt-12 lg:pt-4 border-b border-gray-100 bg-white lg:hidden shrink-0">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm font-bold text-gray-500 hover:text-gray-900 underline"
              >
                Reset
              </button>
            </div>

            {/* Scrollable Filters Area */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-0 pb-32 lg:pb-0">
              <div className="bg-white lg:rounded-xl lg:shadow-sm lg:p-6 space-y-8 lg:border lg:border-gray-100">
                {/* Sort By */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:outline-none"
                    style={{
                      "--tw-ring-color": THEME.highlight,
                      "--tw-border-opacity": 1,
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  >
                    <option>Top Rated</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold text-gray-700">Max Price</span>
                    <span
                      className="font-bold"
                      style={{ color: THEME.highlight }}
                    >
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: THEME.highlight }}
                  />
                </div>

                {/* Star Rating - Unselectable Text */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Star Rating</h3>
                  <div className="space-y-2 select-none">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div
                        key={star}
                        onClick={() =>
                          setSelectedStars(selectedStars === star ? null : star)
                        }
                        className="flex items-center gap-3 cursor-pointer group py-1"
                      >
                        <div
                          className={`w-5 h-5 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
                            selectedStars === star
                              ? "text-white"
                              : "border-gray-300 bg-white"
                          }`}
                          style={{
                            backgroundColor:
                              selectedStars === star
                                ? THEME.highlight
                                : undefined,
                            borderColor:
                              selectedStars === star
                                ? THEME.highlight
                                : undefined,
                          }}
                        >
                          {selectedStars === star && (
                            <FaCheck className="text-xs" />
                          )}
                        </div>

                        <div className="flex items-center text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={i < star ? "" : "text-gray-200"}
                            />
                          ))}
                          <span className="ml-2 text-gray-600 text-xs font-medium">
                            {star === 5 ? "5 Stars" : `${star}+ Stars`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Location</h3>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:outline-none"
                    style={{ "--tw-ring-color": THEME.highlight }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Amenities</h3>
                  <div className="space-y-3">
                    {amenitiesList.map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-3 cursor-pointer select-none py-1"
                      >
                        <div
                          className={`w-5 h-5 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
                            selectedAmenities.includes(amenity)
                              ? "text-white"
                              : "border-gray-300 bg-white"
                          }`}
                          style={{
                            backgroundColor: selectedAmenities.includes(amenity)
                              ? THEME.highlight
                              : undefined,
                            borderColor: selectedAmenities.includes(amenity)
                              ? THEME.highlight
                              : undefined,
                          }}
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
                        <span className="text-sm text-gray-600">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Desktop Clear Button */}
                <button
                  onClick={clearFilters}
                  className="hidden lg:block w-full py-3 border border-gray-300 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* --- NEW MOBILE FOOTER (Easy to Reach) --- */}
            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-100 bg-white lg:hidden z-20 flex gap-3 pb-8 md:pb-4">
              {/* 1. CLOSE BUTTON (Cancel) */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="flex-1 py-3 text-gray-700 font-bold rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                Close
              </button>

              {/* 2. SHOW RESULTS BUTTON (Apply) */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="flex-1 py-3 text-white font-bold rounded-lg shadow-md active:scale-95 transition-transform"
                style={{ backgroundColor: THEME.highlight }}
              >
                Show Results
              </button>
            </div>
          </div>
          {/* --- MOBILE FILTER SIDEBAR END --- */}

          {/* Results Grid */}
          <div className="flex-1">
            {filteredHotels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
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

                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3
                              className="text-lg font-bold text-gray-900 font-['Playfair_Display'] leading-tight mb-1 transition-colors"
                              style={{ color: undefined }}
                              onMouseOver={(e) =>
                                (e.target.style.color = THEME.highlight)
                              }
                              onMouseOut={(e) => (e.target.style.color = "")}
                            >
                              {hotel.name}
                            </h3>
                            <div className="flex items-center text-gray-500 text-xs">
                              <FaMapMarkerAlt
                                className="mr-1"
                                style={{ color: THEME.highlight }}
                              />
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
                  className="font-bold text-sm hover:underline"
                  style={{ color: THEME.highlight }}
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
