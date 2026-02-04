import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";
import {
  COMPANY_NAME,
  FOOTER_DESCRIPTION,
  CONTACT_INFO,
  SOCIAL_LINKS,
  QUICK_LINKS,
  OTHER_LINKS,
  THEME,
} from "../constants";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12 border-t-4"
      style={{ borderColor: THEME.highlight }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 mb-12">
          {/* 1. BRAND COLUMN */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-4 text-center lg:text-left">
              {COMPANY_NAME}
            </h3>

            <p className="text-sm leading-relaxed mb-6 text-gray-400 text-left">
              {FOOTER_DESCRIPTION}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                style={{ color: undefined }} // Let CSS handle default, hover via class or style below
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:pl-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-white transition group"
                  >
                    <FaChevronRight
                      className="text-[10px]"
                      style={{ color: THEME.highlight }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}

              {/* Mobile-only logic handled by CSS if needed, but for now showing all relevant ones */}
            </ul>
          </div>

          {/* 3. OTHER LINKS */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Other Links
            </h4>
            <ul className="space-y-2 text-sm">
              {OTHER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-white transition group"
                  >
                    <FaChevronRight
                      className="text-[10px]"
                      style={{ color: THEME.highlight }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-white"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* 5. NEWSLETTER */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for the latest safari offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 w-full border border-gray-700"
                style={{ "--tw-ring-color": THEME.highlight }}
              />
              <button
                type="submit"
                className="text-white px-6 py-2 rounded-r-md transition font-bold"
                style={{ backgroundColor: THEME.highlight }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlightDark)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
