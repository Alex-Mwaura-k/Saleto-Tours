import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      // Mobile: 'right-0 pr-2' (Flush to edge)
      // Desktop: 'md:right-[30px] md:pr-0' (Exactly 30px from margin)
      className={`fixed bottom-8 right-0 pr-2 md:right-[30px] md:pr-0 z-[9999] transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        // REMOVED: hover:scale-110 and transition-transform
        // ADDED: transition-colors (to smooth the background color change)
        className="p-3 rounded-full shadow-2xl text-white bg-[#FF5733] hover:bg-[#E64A19] transition-colors duration-300 focus:outline-none ring-2 ring-white"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
