import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";
import { CONTACT_INFO, THEME } from "../constants";

const ContactFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);

  const whatsappMessage = "Hello! I am interested in booking a safari.";

  // 1. WhatsApp Handler
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    // Opens in a new tab without showing URL in footer
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // 2. Phone Call Handler
  const handleCallClick = () => {
    // Triggers the phone dialer
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  // Effect to handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={fabRef}
      className="fixed bottom-8 left-0 pl-2 md:left-[30px] md:pl-0 z-[998] flex flex-col items-start gap-2"
    >
      {/* 1. OPTIONS CONTAINER */}
      <div
        className={`
          flex flex-col items-start gap-2 transition-all duration-300 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >
        {/* WHATSAPP BUTTON - Changed from <a> to <button> */}
        <button
          onClick={handleWhatsAppClick}
          className="w-28 md:w-36 justify-center flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl text-white bg-[#25D366] hover:bg-[#1da851] transition-transform duration-300 cursor-pointer"
        >
          <FaWhatsapp className="text-sm md:text-lg" />
          <span className="font-bold text-xs md:text-sm">WhatsApp</span>
        </button>

        {/* CALL BUTTON - Changed from <a> to <button> */}
        <button
          onClick={handleCallClick}
          style={{ backgroundColor: THEME.highlight }}
          className="w-28 md:w-36 justify-center flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl text-white hover:brightness-110 transition-transform duration-300 cursor-pointer"
        >
          <FaPhoneAlt className="text-xs md:text-sm" />
          <span className="font-bold text-xs md:text-sm">Call Us</span>
        </button>
      </div>

      {/* 2. MAIN TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: isOpen ? "#1F2937" : THEME.primary,
        }}
        className={`
          relative p-3 rounded-full shadow-2xl text-white transition-all duration-300 transform focus:outline-none ring-2 ring-white z-20
          ${isOpen ? "rotate-90" : "rotate-0"}
        `}
        aria-label="Contact Options"
      >
        {!isOpen && (
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white"></span>
          </span>
        )}

        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaCommentDots className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default ContactFab;
