import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots, FaTimes } from "react-icons/fa";

const ContactFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null); // 1. Create a reference for this component

  const phoneNumber = "+254700000000";
  const whatsappNumber = "254700000000";
  const whatsappMessage = "Hello! I am interested in booking a safari.";

  // 2. Effect to handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open AND the click target is NOT inside this component
      if (isOpen && fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    // 3. Attach the 'ref' to the main container div
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
        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 md:w-36 justify-center flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl text-white bg-[#25D366] hover:bg-[#1da851] transition-transform duration-300"
        >
          <FaWhatsapp className="text-sm md:text-lg" />
          <span className="font-bold text-xs md:text-sm">WhatsApp</span>
        </a>

        {/* CALL BUTTON */}
        <a
          href={`tel:${phoneNumber}`}
          className="w-28 md:w-36 justify-center flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-xl text-white bg-[#FF5733] hover:bg-[#E64A19] transition-transform duration-300"
        >
          <FaPhoneAlt className="text-xs md:text-sm" />
          <span className="font-bold text-xs md:text-sm">Call Us</span>
        </a>
      </div>

      {/* 2. MAIN TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative p-3 rounded-full shadow-2xl text-white transition-all duration-300 transform focus:outline-none ring-2 ring-white z-20
          ${isOpen ? "bg-gray-800 rotate-90" : "bg-[#0672CD] rotate-0"}
        `}
        aria-label="Contact Options"
      >
        {/* ONLINE STATUS INDICATOR */}
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
