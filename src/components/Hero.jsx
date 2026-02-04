import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { THEME } from "../constants";

const Hero = ({ title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "/Hero/Flight.png",
    "/Hero/Wildbeasts.png",
    "/Hero/Maasai.png",
    "/Hero/Elephant.png",
  ];

  const rotatingTexts = [
    "Where Wildlife Meets Wonder",
    "Discover the Wild Heart of Kenya",
    "Unforgettable Safari Adventures",
    "Journey Into the Untamed",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-[65vh] lg:h-[calc(100dvh-4rem)] flex items-center justify-center text-white bg-gray-900 overflow-hidden">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero Slide ${index + 1}`}
            className="w-full h-full object-cover opacity-90 animate-slow-zoom"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-6xl font-bold mb-1 tracking-tight drop-shadow-lg animate-fade-in-up leading-tight">
          {title}
        </h1>

        <div className="h-10 md:h-14 mb-3 flex items-center justify-center">
          <p
            key={currentIndex}
            className="font-['Playfair_Display'] text-xl sm:text-2xl md:text-4xl font-medium animate-fade-in-up"
            style={{ color: THEME.highlight }}
          >
            {rotatingTexts[currentIndex]}
          </p>
        </div>

        <p className="text-base md:text-xl mb-6 max-w-2xl mx-auto text-gray-100 drop-shadow-md animate-fade-in-up delay-100 font-light px-2">
          {subtitle}
        </p>

        <div className="animate-fade-in-up delay-200">
          <button
            className="text-white font-bold py-3 px-8 rounded-full text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            style={{ backgroundColor: THEME.highlight }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#111827";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = THEME.highlight;
              e.currentTarget.style.color = "white";
            }}
          >
            Find Your Safari
          </button>
        </div>
      </div>

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
