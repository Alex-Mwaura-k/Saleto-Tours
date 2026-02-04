import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheck,
  FaTimes,
  FaChevronLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { packagesData } from "../data/packagesData";
import { CONTACT_INFO, THEME } from "../constants"; // 👈 Import constants

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packagesData.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. SCROLL TO TOP ON LOAD
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 2. PREPARE IMAGES (Fallback)
  const carouselImages =
    pkg?.images && pkg.images.length > 1
      ? pkg.images
      : pkg?.image
        ? Array(5).fill(pkg.image)
        : [];

  // 3. SMOOTH CAROUSEL TIMER
  useEffect(() => {
    if (carouselImages.length < 2) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Package Not Found
        </h2>
        <Link
          to="/packages"
          className="font-bold hover:underline"
          style={{ color: THEME.highlight }}
        >
          Back to Packages
        </Link>
      </div>
    );
  }

  const getImage = (offset) => {
    return carouselImages[(currentImageIndex + offset) % carouselImages.length];
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* 1. HEADER & BREADCRUMB */}
      <div className="bg-[#111827] text-white border-b border-gray-800 w-full shadow-md relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Link
              to="/packages"
              className="flex items-center transition-colors gap-1 font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              <FaChevronLeft className="text-xs" /> Back
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/packages"
              className="transition-colors font-medium hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) => (e.target.style.color = THEME.highlight)}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Packages
            </Link>
            <span className="text-gray-500">|</span>
            <span className="text-white font-bold truncate max-w-[150px] md:max-w-none">
              {pkg.title}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span
              className="text-lg font-bold"
              style={{ color: THEME.highlight }}
            >
              KES {pkg.price.toLocaleString()}
            </span>
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
        {/* 2. TITLE & INFO */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mb-2">
            {pkg.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
              {pkg.category}
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt style={{ color: THEME.highlight }} />{" "}
              {pkg.location}
            </span>
            <span className="flex items-center gap-1">
              <FaClock style={{ color: THEME.highlight }} /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
              <FaStar className="text-gray-300" />
            </span>
          </div>
        </div>

        {/* 3. CAROUSEL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden shadow-sm">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group bg-gray-100">
            {carouselImages.length > 0 && (
              <img
                key={currentImageIndex}
                src={getImage(0)}
                alt="Main View"
                className="w-full h-full object-cover animate-carousel-move"
              />
            )}
          </div>
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

        {/* 4. CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">
                Overview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pkg.overview ||
                  "Experience the magic of Kenya with this curated safari package designed to give you the best wildlife and scenic experience."}
              </p>
            </div>

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 font-['Playfair_Display']">
                  Day by Day Itinerary
                </h3>
                <div className="space-y-8 relative pl-4 border-l-2 border-gray-100">
                  {pkg.itinerary.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div
                        className="absolute -left-[21px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: THEME.highlight }}
                      ></div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Day {item.day}: {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions / Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                  <FaCheck className="bg-green-200 rounded-full p-1 text-xl" />{" "}
                  Included
                </h4>
                <ul className="space-y-2">
                  {(
                    pkg.inclusions || ["Accommodation", "Meals", "Transport"]
                  ).map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-green-600 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaTimes className="bg-red-200 rounded-full p-1 text-xl" />{" "}
                  Excluded
                </h4>
                <ul className="space-y-2">
                  {(
                    pkg.exclusions || ["International Flights", "Tips", "Visas"]
                  ).map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-red-500 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BOOKING */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <p className="text-gray-500 text-sm mb-1">
                  Total Package Price
                </p>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: THEME.highlight }}
                >
                  KES {pkg.price.toLocaleString()}
                </h3>
                <p className="text-gray-400 text-xs">per person sharing</p>
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
                    Book This Package
                  </button>
                </Link>
                <Link to="/contact" className="block w-full">
                  <button className="w-full bg-white border-2 border-gray-100 text-gray-700 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <FaEnvelope /> Customize Trip
                  </button>
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-6 text-center">
                <p className="text-sm text-gray-400 mb-2">Need help?</p>
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

export default PackageDetails;
