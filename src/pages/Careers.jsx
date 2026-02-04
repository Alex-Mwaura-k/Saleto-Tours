import React from "react";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaGlobeAfrica,
  FaHeart,
  FaCalendarTimes,
  FaCalendarAlt,
} from "react-icons/fa";
import { THEME } from "../constants"; // 👈 Import constants

// Helper to check if a date has passed
export const isJobExpired = (deadline) => {
  return new Date(deadline) < new Date();
};

// Calculate a date roughly 4 months from now for the "Open" positions
const today = new Date();
const fourMonthsLater = new Date(today.setMonth(today.getMonth() + 4))
  .toISOString()
  .split("T")[0];

export const jobs = [
  {
    id: 1,
    title: "Senior Safari Guide",
    type: "Full-time",
    location: "Maasai Mara, Kenya",
    department: "Operations",
    summary:
      "Lead luxury safari expeditions and provide world-class guest experiences.",
    deadline: fourMonthsLater,
  },
  {
    id: 2,
    title: "Travel Consultant",
    type: "Full-time",
    location: "Nairobi (Hybrid)",
    department: "Sales",
    summary:
      "Design bespoke itineraries for international clients and manage bookings.",
    deadline: "2023-01-01", // EXPIRED
  },
  {
    id: 3,
    title: "Social Media Manager",
    type: "Contract",
    location: "Remote / Nairobi",
    department: "Marketing",
    summary: "Curate stunning visual content and grow our online community.",
    deadline: fourMonthsLater,
  },
  {
    id: 4,
    title: "Lodge Manager",
    type: "Full-time",
    location: "Amboseli, Kenya",
    department: "Hospitality",
    summary: "Oversee daily operations of our luxury tented camp.",
    deadline: fourMonthsLater,
  },
];

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <div className="bg-[#111827] text-white py-12 md:py-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: THEME.highlight }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Join Our Team
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
            <span className="text-white">Careers</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* 2. VALUES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <FaGlobeAfrica size={24} />,
              title: "Authenticity",
              desc: "We don't just visit places; we connect with the land and its people.",
            },
            {
              icon: <FaBriefcase size={24} />,
              title: "Professionalism",
              desc: "We uphold the highest standards of safety, service, and expertise.",
            },
            {
              icon: <FaHeart size={24} />,
              title: "Passion",
              desc: "A deep love for wildlife and conservation drives everything we do.",
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ color: THEME.highlight }}
              >
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">
                {val.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. OPEN POSITIONS */}
        <h2 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-8 text-center md:text-left">
          Open Positions
        </h2>

        <div className="grid gap-6">
          {jobs.map((job) => {
            const expired = isJobExpired(job.deadline);
            const formattedDate = new Date(job.deadline).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" },
            );

            return (
              <div
                key={job.id}
                className={`bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group transition-all duration-300 ${
                  expired ? "opacity-75 bg-gray-50" : ""
                }`}
                // Dynamic border color on hover
                style={{ borderColor: "#e5e7eb" }}
                onMouseOver={(e) => {
                  if (!expired)
                    e.currentTarget.style.borderColor = THEME.highlight;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-xl font-bold text-gray-900 transition-colors"
                      // Dynamic text color on hover
                      style={{ color: undefined }}
                      onMouseOver={(e) => {
                        if (!expired)
                          e.currentTarget.style.color = THEME.highlight;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "";
                      }}
                    >
                      {job.title}
                    </h3>
                    {expired && (
                      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded border border-red-200">
                        Closed
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="flex items-center">• {job.location}</span>
                    <span className="flex items-center">• {job.type}</span>
                    <span
                      className="flex items-center font-medium"
                      style={{ color: THEME.highlight }}
                    >
                      • <FaCalendarAlt className="mr-1" size={12} /> Apply by:{" "}
                      {formattedDate}
                    </span>
                  </div>
                  <p className="text-gray-500 mt-3 text-sm max-w-2xl">
                    {job.summary}
                  </p>
                </div>

                {expired ? (
                  <button
                    disabled
                    className="inline-flex items-center justify-center bg-gray-200 text-gray-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed whitespace-nowrap"
                  >
                    <FaCalendarTimes className="mr-2" /> Applications Closed
                  </button>
                ) : (
                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = THEME.highlight)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#111827")
                    }
                  >
                    View Details
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Careers;
