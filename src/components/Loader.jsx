import React from "react";
import logo from "../assets/logo.webp";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 animate-spin rounded-full border-4 border-gray-200 border-t-[#FF5733]"></div>
        <img
          src={logo}
          alt="Loading..."
          className="absolute h-10 w-auto object-contain animate-pulse"
        />
      </div>
      <p className="mt-4 text-lg font-bold text-gray-700 font-['Playfair_Display'] animate-pulse">
        Welcome to Saleto Tours...
      </p>
    </div>
  );
};

export default Loader;
