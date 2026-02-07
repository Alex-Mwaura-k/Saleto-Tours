import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import Notification from "../components/Notification"; // Adjust path if necessary
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  THEME,
  MAP_EMBED_CODE,
} from "../constants";

const getSafeMapUrl = (embedString) => {
  if (!embedString) return "";
  const match = embedString.match(/src="([^"]+)"/);
  return match ? match[1] : "";
};

const Contact = () => {
  const mapSrc = getSafeMapUrl(MAP_EMBED_CODE);

  // 1. Add State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    type: "success",
    message: "",
  });

  // 2. Helper Functions
  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Submit Handler with Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      setNotification({
        show: true,
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        show: true,
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Success Simulation
    setNotification({
      show: true,
      type: "success",
      message: "Message sent successfully!",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* 4. Render Notification Component */}
      <Notification
        isOpen={notification.show}
        type={notification.type}
        message={notification.message}
        onClose={closeNotification}
      />

      <div className="bg-[#111827] text-white py-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"
          style={{ backgroundColor: THEME.highlight }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Contact Us
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
            <span className="text-white font-medium">Contact</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="bg-[#111827] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-32 h-32 opacity-10 rounded-tr-full"
              style={{ backgroundColor: THEME.highlight }}
            ></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-bl-full"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-6">
                Contact Info
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Have a question? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="mt-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                    style={{ backgroundColor: THEME.highlight }}
                  >
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Phone</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="mt-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                    style={{ backgroundColor: THEME.highlight }}
                  >
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Email</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="mt-1 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                    style={{ backgroundColor: THEME.highlight }}
                  >
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Location</h5>
                    <p className="text-gray-400 text-sm mt-1">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
              <h5 className="font-bold text-sm mb-4 text-gray-300 uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = THEME.highlight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1F2937")
                  }
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = THEME.highlight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1F2937")
                  }
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = THEME.highlight)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1F2937")
                  }
                >
                  <FaWhatsapp className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-6">
              Send a Message
            </h3>

            {/* 5. Update Form with State & Accessibility Attributes */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                    style={{ "--tw-ring-color": THEME.highlight }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "")}
                    placeholder="First Last"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                    style={{ "--tw-ring-color": THEME.highlight }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "")}
                    placeholder="+254..."
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                  style={{ "--tw-ring-color": THEME.highlight }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = THEME.highlight)
                  }
                  onBlur={(e) => (e.target.style.borderColor = "")}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors resize-none"
                  style={{ "--tw-ring-color": THEME.highlight }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = THEME.highlight)
                  }
                  onBlur={(e) => (e.target.style.borderColor = "")}
                  placeholder="Tell us about your trip..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ backgroundColor: THEME.highlight }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlightDark)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
              >
                Send Message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full mt-8">
        <h3 className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-6 flex items-center gap-2">
          <FaMapMarkerAlt style={{ color: THEME.highlight }} /> Find Us Here
        </h3>

        <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
          {mapSrc ? (
            <iframe
              title="Google Map"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Map not available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
