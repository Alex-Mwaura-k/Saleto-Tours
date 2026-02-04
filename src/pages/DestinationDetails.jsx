import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheck,
  FaChevronLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaCamera,
} from "react-icons/fa";
import { destinationsData } from "../data/destinationsData";
import { CONTACT_INFO, THEME } from "../constants"; // 👈 Import constants

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinationsData.find((d) => d.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. SCROLL TO TOP ON LOAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 2. PREPARE IMAGES (Fallback for single image data)
  const carouselImages =
    destination?.images && destination.images.length > 1
      ? destination.images
      : destination?.image
        ? Array(5).fill(destination.image)
        : [];

  // 3. SMOOTH CAROUSEL TIMER
  useEffect(() => {
    if (carouselImages.length < 2) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages]);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Destination Not Found
        </h2>
        <Link
          to="/destinations"
          className="font-bold hover:underline"
          style={{ color: THEME.highlight }}
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  // Helper to get images cyclically
  const getImage = (offset) => {
    return carouselImages[(currentImageIndex + offset) % carouselImages.length];
  };

  const rating = destination.rating || 5;

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* HEADER & BREADCRUMB */}
      <div className="bg-[#111827] text-white border-b border-gray-800 w-full shadow-md relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Link
              to="/destinations"
              className="flex items-center transition-colors gap-1 font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              <FaChevronLeft className="text-xs" /> Back
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/destinations"
              className="transition-colors font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Destinations
            </Link>
            <span className="text-gray-500">|</span>
            <span className="text-white font-bold truncate max-w-[150px] md:max-w-none">
              {destination.title}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {destination.price && (
              <span
                className="text-lg font-bold"
                style={{ color: THEME.highlight }}
              >
                KES {destination.price.toLocaleString()}
              </span>
            )}
            <Link to="/contact">
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
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TITLE & INFO */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mb-2">
            {destination.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
              {destination.category}
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt style={{ color: THEME.highlight }} /> Kenya
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < rating ? "" : "text-gray-300"} />
              ))}
            </span>
          </div>
        </div>

        {/* SMOOTH ANIMATED PHOTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-sm">
          {/* Main Large Image (Animated) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group bg-gray-100">
            {carouselImages.length > 0 && (
              <img
                key={currentImageIndex} // Key forces re-render for animation
                src={getImage(0)}
                alt="Main View"
                className="w-full h-full object-cover animate-slide-left"
              />
            )}
          </div>

          {/* Secondary Images */}
          {[1, 2, 3, 4].map((offset) => (
            <div
              key={offset}
              className="hidden md:block col-span-1 row-span-1 relative overflow-hidden bg-gray-100"
            >
              {carouselImages.length > offset && (
                <img
                  src={getImage(offset)}
                  alt={`Detail ${offset}`}
                  className="w-full h-full object-cover transition-all duration-700 hover:opacity-90"
                />
              )}
            </div>
          ))}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm space-y-12">
              {/* Overview */}
              <div className="animate-fade-in space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">
                    About this Destination
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
                {/* Highlights */}
                <div>
                  <h4 className="font-bold mb-3 text-gray-800">
                    Trip Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(
                      destination.highlights || [
                        "Big Five Game Drives",
                        "Cultural Village Visits",
                        "Scenic Sundowners",
                        "Photography Opportunities",
                      ]
                    ).map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 text-sm bg-gray-50 p-3 rounded-lg"
                      >
                        <FaCheck className="text-green-500 mr-2 mt-0.5 text-xs shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best Time To Visit */}
              <div className="animate-fade-in space-y-4">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display'] border-t border-gray-100 pt-8">
                  Best Time to Visit
                </h3>
                <div
                  className="border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-all"
                  style={{ borderColor: "transparent" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor = THEME.highlight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor = "#e5e7eb")
                  }
                >
                  <div className="bg-blue-50 p-4 rounded-full text-[#0672CD]">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Dry Season (June - Oct)
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Best for wildlife viewing. Great migration usually occurs
                      between July and October.
                    </p>
                  </div>
                </div>
                <div
                  className="border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-all"
                  style={{ borderColor: "transparent" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor = THEME.highlight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor = "#e5e7eb")
                  }
                >
                  <div className="bg-green-50 p-4 rounded-full text-green-600">
                    <FaCamera className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">
                      Green Season (Nov - May)
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Excellent for bird watching and lush photography. Fewer
                      crowds.
                    </p>
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
                  {destination.price
                    ? `KES ${destination.price.toLocaleString()}`
                    : "Inquire"}
                </h3>
                <p className="text-gray-400 text-xs">per person / sharing</p>
              </div>
              <div className="space-y-4 mb-6">
                <Link to="/contact" className="block w-full">
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
                    Book This Trip
                  </button>
                </Link>
                <Link to="/contact" className="block w-full">
                  <button className="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FaEnvelope /> Send Inquiry
                  </button>
                </Link>
              </div>
              <div className="border-t border-gray-100 pt-6 text-center">
                <p className="text-sm text-gray-400 mb-2">
                  Need immediate assistance?
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-lg font-bold text-gray-900 transition-colors flex items-center justify-center gap-2 hover:opacity-80"
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

export default DestinationDetails;
