import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = ({ title, subtitle, backgroundImage }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Where Wildlife Meets Wonder",
    "Discover the Wild Heart of Kenya",
    "Unforgettable Safari Adventures",
    "Journey Into the Untamed",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100dvh-4rem)] flex items-center justify-center text-white bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-90 animate-slow-zoom"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        {/* Main Title: UPDATED SIZES */}
        {/* changed text-4xl to text-3xl for mobile */}
        {/* added sm:text-4xl for larger phones */}
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl font-bold mb-1 tracking-tight drop-shadow-lg animate-fade-in-up leading-tight">
          {title}
        </h1>

        {/* Dynamic Rotating Text */}
        <div className="h-10 md:h-14 mb-3 flex items-center justify-center">
          <p
            key={currentTextIndex}
            // Slightly smaller on mobile (text-xl) to match the new heading size balance
            className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-4xl text-[#FF5733] font-medium animate-fade-in-up"
          >
            {rotatingTexts[currentTextIndex]}
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-gray-100 drop-shadow-md animate-fade-in-up delay-100 font-light px-2">
          {subtitle}
        </p>

        {/* Button */}
        <div className="animate-fade-in-up delay-200">
          <button className="bg-[#FF5733] hover:bg-[#E64A19] text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
            Find Your Safari
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-gray-300 animate-pulse">
        <span className="text-xs md:text-sm uppercase tracking-widest mb-2 opacity-80">
          Scroll to explore
        </span>
        <FaChevronDown className="text-lg md:text-xl" />
      </div>
    </div>
  );
};

export default Hero;
