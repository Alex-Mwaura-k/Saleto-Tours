import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheck,
  FaChevronLeft,
  FaBed,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { hotelsData } from "../data/hotelsData";
import { CONTACT_INFO, THEME } from "../constants"; // 👈 Import constants

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = hotelsData.find((h) => h.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. SCROLL TO TOP ON LOAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 2. SMOOTH CAROUSEL TIMER
  useEffect(() => {
    if (!hotel?.images || hotel.images.length < 2) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hotel?.images]);

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hotel Not Found
        </h2>
        <Link
          to="/hotels"
          className="font-bold hover:underline"
          style={{ color: THEME.highlight }}
        >
          Back to Hotels
        </Link>
      </div>
    );
  }

  // Helper to get images cyclically
  const getImage = (offset) => {
    const images =
      hotel.images && hotel.images.length > 0 ? hotel.images : [hotel.image];
    return images[(currentImageIndex + offset) % images.length];
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* 3. HEADER & BREADCRUMB */}
      <div className="bg-[#111827] text-white border-b border-gray-800 w-full shadow-md relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Breadcrumb: Back | Hotels | Detail */}
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Link
              to="/hotels"
              className="flex items-center transition-colors gap-1 font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              <FaChevronLeft className="text-xs" /> Back
            </Link>

            <span className="text-gray-500">|</span>

            <Link
              to="/hotels"
              className="transition-colors font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Hotels
            </Link>

            <span className="text-gray-500">|</span>

            <span className="text-white font-bold truncate max-w-[150px] md:max-w-none">
              {hotel.name}
            </span>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className="text-lg font-bold"
              style={{ color: THEME.highlight }}
            >
              KES {hotel.price.toLocaleString()}
            </span>
            <button
              className="bg-white text-[#111827] px-5 py-2 rounded-lg text-sm font-bold hover:text-white transition-all shadow-sm"
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = THEME.highlight)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 4. TITLE & INFO */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mb-2">
            {hotel.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
              {hotel.category}
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt style={{ color: THEME.highlight }} />{" "}
              {hotel.location}
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < hotel.rating ? "" : "text-gray-300"}
                />
              ))}
            </span>
          </div>
        </div>

        {/* 5. SMOOTH ANIMATED PHOTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-sm">
          {/* Main Large Image (Animated) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group">
            <img
              key={currentImageIndex} // Key forces re-render for animation
              src={getImage(0)}
              alt="Main View"
              className="w-full h-full object-cover animate-slide-left"
            />
          </div>

          {/* Secondary Images */}
          {[1, 2, 3, 4].map((offset) => (
            <div
              key={offset}
              className="hidden md:block col-span-1 row-span-1 relative overflow-hidden"
            >
              <img
                src={getImage(offset)}
                alt={`Detail ${offset}`}
                className="w-full h-full object-cover transition-all duration-700 hover:opacity-90"
              />
            </div>
          ))}
        </div>

        {/* 6. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: CONTENT (ALL SECTIONS DISPLAYED) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm space-y-12">
              {/* Overview */}
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">
                    About the Property
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {hotel.overview ||
                      "Experience luxury and comfort in a serene environment."}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-gray-800">Highlights</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hotel.highlights?.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 text-sm bg-gray-50 p-3 rounded-lg"
                      >
                        <FaCheck className="text-green-500 mr-2 mt-0.5 text-xs shrink-0" />{" "}
                        {point}
                      </li>
                    )) || <li>No highlights listed.</li>}
                  </ul>
                </div>
              </div>

              {/* Rooms */}
              <div className="animate-fade-in space-y-4">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display'] border-t border-gray-100 pt-8">
                  Available Rooms
                </h3>
                {hotel.rooms?.map((room, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all"
                    style={{ borderColor: "transparent" }} // handled by hover logic via class usually, but inline override below
                    onMouseOver={(e) =>
                      (e.currentTarget.style.borderColor = THEME.highlight)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="bg-orange-50 p-4 rounded-full"
                        style={{ color: THEME.highlight }}
                      >
                        <FaBed className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {room.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {room.features.join(" • ")}
                        </p>
                      </div>
                    </div>
                    <div className="text-right w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0 flex flex-row md:flex-col justify-between items-center md:items-end">
                      <span className="block font-bold text-2xl text-gray-900">
                        KES {room.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500">per night</span>
                    </div>
                  </div>
                )) || <p>Room details available on request.</p>}
              </div>

              {/* Amenities */}
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 font-['Playfair_Display'] border-t border-gray-100 pt-8">
                  Property Amenities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  {hotel.amenities?.map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">
                        {cat.category}
                      </h4>
                      <ul className="space-y-2">
                        {cat.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-600 text-sm flex items-center gap-3"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: THEME.highlight }}
                            ></div>{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )) || <p>Standard amenities included.</p>}
                </div>
              </div>

              {/* Policies */}
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display'] border-t border-gray-100 pt-8">
                  House Rules
                </h3>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-bold text-gray-900">Check-in</span>
                    <span>{hotel.policies?.checkIn || "12:00 PM"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-bold text-gray-900">Check-out</span>
                    <span>{hotel.policies?.checkOut || "10:00 AM"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-bold text-gray-900">
                      Cancellation
                    </span>
                    <span className="text-right max-w-[60%]">
                      {hotel.policies?.cancellation ||
                        "Standard policy applies."}
                    </span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="font-bold text-gray-900">Pets</span>
                    <span>{hotel.policies?.pets || "Not allowed."}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: BOOKING CARD */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm mb-1">Starting from</p>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: THEME.highlight }}
                >
                  KES {hotel.price.toLocaleString()}
                </h3>
                <p className="text-gray-400 text-xs">
                  per night / taxes included
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <button
                  className="w-full text-white py-3.5 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-md"
                  style={{ backgroundColor: THEME.highlight }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      THEME.highlightDark)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = THEME.highlight)
                  }
                >
                  Book This Hotel
                </button>

                <Link to="/contact" className="block w-full">
                  <button className="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FaEnvelope /> Send Inquiry
                  </button>
                </Link>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <FaCheck className="text-green-500" /> Best Price Guarantee
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <FaCheck className="text-green-500" /> No Hidden Fees
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 text-center">
                <p className="text-sm text-gray-400 mb-2">
                  Need immediate assistance?
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-lg font-bold text-gray-900 transition-colors flex items-center justify-center gap-2"
                  style={{ color: undefined }}
                  onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
                  onMouseOut={(e) => (e.target.style.color = "")}
                >
                  <FaPhoneAlt className="text-xs" /> {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
