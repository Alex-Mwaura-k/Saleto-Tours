import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaClock,
  FaMapMarkerAlt,
  FaSuitcase, // Suitcase icon
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";

const Packages = () => {
  // 1. MOCK DATA
  const allPackages = [
    {
      id: 1,
      title: "Maasai Mara Migration Safari",
      location: "Maasai Mara",
      duration: "3 Days / 2 Nights",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Popular",
      highlights: ["Game Drives", "Luxury Camp", "Park Fees Included"],
    },
    {
      id: 2,
      title: "Amboseli Elephant Adventure",
      location: "Amboseli National Park",
      duration: "3 Days / 2 Nights",
      price: 38000,
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Family",
      highlights: ["Mt Kilimanjaro Views", "Elephant Herds", "Full Board"],
    },
    {
      id: 3,
      title: "Bush & Beach Experience",
      location: "Tsavo & Diani",
      duration: "5 Days / 4 Nights",
      price: 75000,
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Honeymoon",
      highlights: ["SGR Transfer", "Beach Resort", "Private Safari"],
    },
    {
      id: 4,
      title: "Ultimate Kenya Explorer",
      location: "Nakuru, Naivasha, Mara",
      duration: "7 Days / 6 Nights",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure",
      highlights: ["Boat Ride", "Big Five", "Cultural Visit"],
    },
    {
      id: 5,
      title: "Samburu Wilderness Retreat",
      location: "Samburu National Reserve",
      duration: "3 Days / 2 Nights",
      price: 52000,
      image:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure",
      highlights: ["Special 5 Species", "River Camp", "Walking Safari"],
    },
    {
      id: 6,
      title: "Nairobi City Excursion",
      location: "Nairobi",
      duration: "1 Day Tour",
      price: 10000,
      image:
        "https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Short Trip",
      highlights: ["Giraffe Centre", "National Park", "Museum"],
    },
  ];

  // 2. FILTER & SEARCH LOGIC
  const highestPrice = useMemo(
    () => Math.max(...allPackages.map((p) => p.price)),
    [allPackages],
  );

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(highestPrice);

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesCategory = filter === "All" || pkg.category === filter;
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = pkg.price <= priceRange;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const categories = [
    "Popular",
    "Adventure",
    "Honeymoon",
    "Family",
    "Short Trip",
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* 1. HERO HEADER */}
      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Safari Packages
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Packages</span>
          </nav>
        </div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* GROUP 1: LEFT (All + Dropdown) */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setFilter("All")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm shrink-0 ${
                  filter === "All"
                    ? "bg-[#FF5733] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>

              <div className="relative w-full lg:w-48">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-full text-sm font-medium focus:outline-none focus:border-[#FF5733] cursor-pointer"
                >
                  <option value="All">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </div>

            {/* GROUP 2: CENTER (Price Range) */}
            <div className="flex flex-col w-full lg:w-64 px-2">
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1.5">
                <span>Max Price</span>
                <span className="text-[#FF5733]">
                  Ksh {priceRange.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={highestPrice}
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5733]"
              />
            </div>

            {/* GROUP 3: RIGHT (Search Input) */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5733]"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. PACKAGES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {pkg.category}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-0 right-0 bg-[#FF5733] text-white px-4 py-2 rounded-tl-xl font-bold">
                  Ksh {pkg.price.toLocaleString()}{" "}
                  <span className="text-xs font-normal opacity-90">
                    / person
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-3 group-hover:text-[#FF5733] transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-[#FF5733]" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-[#FF5733]" />
                      {pkg.location}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link to={`/packages/${pkg.id}`}>
                  <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-lg hover:bg-[#111827] hover:text-white transition-all duration-300 border border-gray-200 hover:border-[#111827] flex items-center justify-center gap-2 group-hover:shadow-lg">
                    <FaSuitcase className="text-[#FF5733] group-hover:text-white transition-colors" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* No Results Message */}
          {filteredPackages.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl mb-4">
                No packages found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilter("All");
                  setPriceRange(highestPrice);
                }}
                className="bg-[#111827] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#FF5733] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4. CUSTOM CTA */}
      <div className="bg-white mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4 text-gray-900">
            Want a Custom Itinerary?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            We can tailor-make a safari just for you. Choose your dates, parks,
            and budget, and we'll handle the rest.
          </p>
          <Link to="/contact">
            <button className="bg-[#111827] hover:bg-[#FF5733] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Create My Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
