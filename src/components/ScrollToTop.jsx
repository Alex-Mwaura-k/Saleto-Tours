import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { THEME } from "../constants"; // 👈 Import constants

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Refs to keep track of values without triggering re-renders
  const scrollPos = useRef(0);
  const prevPath = useRef(pathname);

  // 1. TRACK SCROLL POSITION
  useEffect(() => {
    const handleScroll = () => {
      // Update visibility of the button
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Always update our ref with current scroll Y
      scrollPos.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. HANDLE ROUTE CHANGES (Save & Restore)
  useEffect(() => {
    // A. SAVE the position of the page we just LEFT
    if (prevPath.current) {
      sessionStorage.setItem(
        `scrollPos:${prevPath.current}`,
        scrollPos.current.toString(),
      );
    }

    // B. RESTORE the position of the page we just ENTERED (if it exists)
    const savedPosition = sessionStorage.getItem(`scrollPos:${pathname}`);

    if (savedPosition) {
      // If we've been here before, jump to that spot
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      // If it's a new page, go to top
      window.scrollTo(0, 0);
    }

    // C. Update previous path for next time
    prevPath.current = pathname;
    // Reset internal tracker for the new page start
    scrollPos.current = window.scrollY;
  }, [pathname]);

  const manualScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-0 pr-2 md:right-[30px] md:pr-0 z-[998] transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={manualScrollToTop}
        className="p-3 rounded-full shadow-2xl text-white transition-colors duration-300 focus:outline-none ring-2 ring-white"
        aria-label="Scroll to top"
        style={{ backgroundColor: THEME.highlight }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = THEME.highlightDark)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = THEME.highlight)
        }
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
