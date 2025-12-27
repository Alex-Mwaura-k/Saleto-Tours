import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaClock,
  FaMapMarkerAlt,
  FaCheck,
  FaFilter,
  FaCalendarAlt,
} from "react-icons/fa";

const Packages = () => {
  // 1. MOCK DATA
  const allPackages = [
    {
      id: 1,
      title: "Maasai Mara Migration Safari",
      location: "Maasai Mara",
      duration: "3 Days / 2 Nights",
      price: 450,
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
      price: 380,
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
      price: 750,
      image:
        "https://images.unsplash.com/photo-1590523278135-9598f482bd9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Honeymoon",
      highlights: ["SGR Transfer", "Beach Resort", "Private Safari"],
    },
    {
      id: 4,
      title: "Ultimate Kenya Explorer",
      location: "Nakuru, Naivasha, Mara",
      duration: "7 Days / 6 Nights",
      price: 1200,
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
      price: 520,
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
      price: 100,
      image:
        "https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Short Trip",
      highlights: ["Giraffe Centre", "National Park", "Museum"],
    },
  ];

  // 2. FILTER STATE
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredPackages =
    filter === "All"
      ? allPackages
      : allPackages.filter((pkg) => pkg.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 1. HERO HEADER */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Safari Packages
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-white font-medium">Packages</span>
          </nav>
        </div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-bold uppercase tracking-wide mr-4">
            <FaFilter className="text-[#FF5733]" /> Filter:
          </div>

          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full gap-2 no-scrollbar">
            {[
              "All",
              "Popular",
              "Adventure",
              "Honeymoon",
              "Family",
              "Short Trip",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#FF5733] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PACKAGES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
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
                  ${pkg.price}{" "}
                  <span className="text-xs font-normal opacity-90">
                    / person
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-3 group-hover:text-[#FF5733] transition-colors">
                  {pkg.title}
                </h3>

                {/* Meta Details */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-[#FF5733]" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-[#FF5733]" />
                    {pkg.location}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 flex-grow">
                  {pkg.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <FaCheck className="text-green-500 mr-2 text-xs" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link to="/contact">
                  <button className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 border border-gray-200 hover:border-gray-900 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    <FaCalendarAlt className="text-[#FF5733] group-hover:text-white transition-colors" />{" "}
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CUSTOM CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-white mb-4">
              Want a Custom Itinerary?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              We can tailor-make a safari just for you. Choose your dates,
              parks, and budget, and we'll handle the rest.
            </p>
            <Link to="/contact">
              <button className="bg-[#FF5733] hover:bg-[#E64A19] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#FF5733]/40 transform hover:-translate-y-1">
                Create My Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
