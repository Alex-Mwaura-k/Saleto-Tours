import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaSearch,
} from "react-icons/fa";

const Hotels = () => {
  // 1. MOCK DATA (Updated with WORKING Images)
  const allHotels = [
    {
      id: 1,
      name: "Mara Serena Safari Lodge",
      location: "Maasai Mara",
      // Changed to a working Safari Lodge image
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 45000,
      rating: 5,
      amenities: ["Pool", "Wifi", "Restaurant", "Spa"],
      category: "Luxury",
    },
    {
      id: 2,
      name: "Diani Reef Beach Resort",
      location: "Diani Beach",
      // Changed to a working Beach Resort image
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 28500,
      rating: 4,
      amenities: ["Beachfront", "Pool", "Bar", "Gym"],
      category: "Beach",
    },
    {
      id: 3,
      name: "Sarova Stanley",
      location: "Nairobi City",
      // Changed to a working City Hotel image
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 18000,
      rating: 5,
      amenities: ["Wifi", "Gym", "Conference", "Pool"],
      category: "City",
    },
    {
      id: 4,
      name: "Amboseli Sopa Lodge",
      location: "Amboseli National Park",
      // Changed to a working Wildlife/Lodge image
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 32000,
      rating: 4,
      amenities: ["View", "Pool", "Restaurant"],
      category: "Safari",
    },
    {
      id: 5,
      name: "Hemingways Watamu",
      location: "Watamu",
      // Changed to a working Coastal/Luxury image
      image:
        "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 55000,
      rating: 5,
      amenities: ["Ocean View", "Spa", "Tennis", "Wifi"],
      category: "Luxury",
    },
    {
      id: 6,
      name: "Fairmont Mount Kenya",
      location: "Nanyuki",
      // Changed to a working Mountain/Resort image
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 40000,
      rating: 5,
      amenities: ["Golf", "Pool", "Horse Riding"],
      category: "Luxury",
    },
  ];

  // 2. FILTER STATE
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredHotels =
    filter === "All"
      ? allHotels
      : allHotels.filter((hotel) => hotel.category === filter);

  // Helper to render stars
  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-xs ${i < count ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 1. HERO HEADER */}
      <div className="bg-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Hotels & Lodges
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <FaChevronRight className="mx-2 text-xs" />
            <span className="text-white font-medium">Hotels</span>
          </nav>
        </div>
      </div>

      {/* 2. FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
            {["All", "Luxury", "Safari", "Beach", "City"].map((cat) => (
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
              placeholder="Search hotels..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5733]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      {/* 3. HOTEL GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Currency Display */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                  Ksh {hotel.price.toLocaleString()}{" "}
                  <span className="text-gray-500 font-normal">/ night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-['Playfair_Display'] leading-tight mb-1">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs">
                      <FaMapMarkerAlt className="mr-1 text-[#FF5733]" />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="flex bg-orange-50 px-1.5 py-1 rounded">
                    {renderStars(hotel.rating)}
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-4"></div>

                {/* Amenities */}
                <div className="flex gap-4 text-gray-500 text-xs mb-5">
                  <div className="flex items-center gap-1">
                    <FaWifi /> Wifi
                  </div>
                  <div className="flex items-center gap-1">
                    <FaSwimmingPool /> Pool
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUtensils /> Dining
                  </div>
                </div>

                {/* Button */}
                <button className="w-full py-2.5 border-2 border-gray-900 text-gray-900 rounded-lg font-bold text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CTA SECTION */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-4">
          Cant find what you're looking for?
        </h2>
        <p className="text-gray-600 mb-8">
          We have partnerships with over 500+ lodges across East Africa. Contact
          us for a custom booking.
        </p>
        <Link to="/contact">
          <button className="bg-[#FF5733] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#E64A19] transition hover:-translate-y-1">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hotels;
