import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { destinationsData } from "../data/destinationsData";
import { THEME } from "../constants";

const Destinations = () => {
  const highestPrice = useMemo(
    () => Math.max(...destinationsData.map((d) => d.price || 0)),
    [],
  );

  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState(highestPrice);

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesCategory = filter === "All" || dest.category === filter;

    const matchesSearch =
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = (dest.price || 0) <= priceRange;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const categories = ["Park", "Beach", "Mountain", "Lake"];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: THEME.highlight }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Our Destinations
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
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Destinations</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setFilter("All")}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm shrink-0 ${
                  filter === "All"
                    ? "text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor:
                    filter === "All" ? THEME.highlight : undefined,
                }}
              >
                All
              </button>

              <div className="relative w-full lg:w-48">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-full text-sm font-medium focus:outline-none focus:ring-1 cursor-pointer"
                  style={{ "--tw-ring-color": THEME.highlight }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = THEME.highlight)
                  }
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                >
                  <option value="All">Location</option>
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

            <div className="flex flex-col w-full lg:w-64 px-2">
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1.5">
                <span>Max Price</span>
                <span style={{ color: THEME.highlight }}>
                  {priceRange.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={highestPrice}
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{ accentColor: THEME.highlight }}
              />
            </div>

            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Search places..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1"
                style={{ "--tw-ring-color": THEME.highlight }}
                onFocus={(e) => (e.target.style.borderColor = THEME.highlight)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <Link to={`/destinations/${dest.id}`} key={dest.id}>
              <div className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span
                    className="text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block"
                    style={{ backgroundColor: THEME.highlight }}
                  >
                    {dest.category}
                  </span>

                  <h3 className="text-xl font-bold text-white font-['Playfair_Display'] mb-2">
                    {dest.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  <div
                    className="flex items-center text-sm font-bold"
                    style={{ color: THEME.highlight }}
                  >
                    Explore <FaExternalLinkAlt className="ml-2 text-xs" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                  <FaMapMarkerAlt />
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

          {filteredDestinations.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl mb-4">
                No destinations found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilter("All");
                  setPriceRange(highestPrice);
                }}
                className="bg-[#111827] text-white px-6 py-2 rounded-full font-bold text-sm hover:text-white transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111827")
                }
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

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
            <button
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors duration-300 hover:text-[#111827]"
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#111827";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#111827";
                e.currentTarget.style.color = "white";
              }}
              style={{ backgroundColor: "#111827" }}
            >
              Get a Recommendation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
