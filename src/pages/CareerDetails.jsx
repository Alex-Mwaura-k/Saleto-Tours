import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa";
import { jobs, isJobExpired } from "./Careers";
import { COMPANY_NAME, CONTACT_INFO, THEME } from "../constants"; // 👈 Import constants

const CareerDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  // 1. Check if job exists
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Job not found</h2>
          <Link
            to="/careers"
            className="hover:underline mt-4 block font-bold"
            style={{ color: THEME.highlight }}
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  // 2. Check if job is expired
  if (isJobExpired(job.deadline)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg bg-white p-8 rounded-xl shadow-sm border border-red-100">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaExclamationTriangle size={30} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Position Closed
          </h2>
          <p className="text-gray-500 mb-6">
            We are no longer accepting applications for the{" "}
            <span className="font-bold text-gray-700">{job.title}</span> role as
            the deadline ({new Date(job.deadline).toLocaleDateString()}) has
            passed.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-gray-900 hover:text-white text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = THEME.highlight)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#111827")
            }
          >
            Browse Open Positions
          </Link>
        </div>
      </div>
    );
  }

  // 3. Render Active Job
  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-6">
      {/* 1. HERO SECTION */}
      <div className="bg-[#111827] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <Link
              to="/careers"
              className="inline-flex items-center text-gray-400 transition-colors hover:text-white"
              style={{ color: undefined }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = THEME.highlight)
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "")}
            >
              <FaArrowLeft className="mr-2" /> Back to Jobs
            </Link>

            <span
              className="text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{ backgroundColor: THEME.highlight }}
            >
              {job.department}
            </span>
          </div>

          {/* Job Title & Metadata */}
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-6">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-300">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt style={{ color: THEME.highlight }} />{" "}
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <FaClock style={{ color: THEME.highlight }} /> {job.type}
            </span>
            <span className="flex items-center gap-2">
              <FaMoneyBillWave style={{ color: THEME.highlight }} /> Competitive
              Salary
            </span>
          </div>
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h3 className="text-gray-900 font-bold text-xl mb-4">
              About the Role
            </h3>
            <p className="mb-6">
              We are seeking a passionate <strong>{job.title}</strong> to join
              our {job.department} team. In this role, you will play a pivotal
              part in delivering the exceptional {COMPANY_NAME} experience that
              our guests have come to expect. You will be working in a
              fast-paced, dynamic environment where your contributions directly
              impact our success.
            </p>

            <h3 className="text-gray-900 font-bold text-xl mb-4">
              Key Responsibilities
            </h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>
                Manage daily operations and ensure guest satisfaction standards
                are met.
              </li>
              <li>
                Collaborate with cross-functional teams to improve service
                delivery.
              </li>
              <li>
                Maintain detailed reports and documentation of activities.
              </li>
              <li>
                Represent the brand with professionalism and authentic African
                hospitality.
              </li>
              <li>
                Resolve any issues or emergencies with calmness and efficiency.
              </li>
            </ul>

            <h3 className="text-gray-900 font-bold text-xl mb-4">
              Requirements
            </h3>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li>
                Minimum 3 years of experience in a similar role within the
                tourism industry.
              </li>
              <li>
                Excellent communication skills in English (Swahili is a plus).
              </li>
              <li>Strong problem-solving abilities and attention to detail.</li>
              <li>
                Passion for wildlife conservation and sustainable tourism.
              </li>
              <li>Valid work permit for Kenya (if applicable).</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
              Ready to apply?
            </h3>
            <p className="text-gray-500 mb-6">
              Send your CV and a cover letter to our HR team. Please include the
              Job Title in the subject line.
            </p>
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Application for ${job.title}`}
              className="inline-block text-white text-lg font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: THEME.highlight }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = THEME.highlightDark)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = THEME.highlight)
              }
            >
              Apply via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
