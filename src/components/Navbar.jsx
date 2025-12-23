import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Hotels", path: "/hotels" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* LOGO */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Seleto Tours"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 font-medium text-gray-700">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative group transition duration-300 ${
                      isActive ? "text-[#FF5733]" : "hover:text-[#FF5733]"
                    }`}
                  >
                    {link.name}
                    {/* ANIMATED LINE */}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-[2px] bg-[#FF5733] transition-all duration-300 ease-in-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:flex flex-shrink-0">
              <button className="bg-[#0672CD] text-white px-6 py-2 rounded-full hover:bg-[#045bb5] transition shadow-sm font-semibold">
                Book Safari Now
              </button>
            </div>

            {/* MOBILE BURGER ICON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-2xl text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      {/* UPDATED: Changed z-50 to z-[999] */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* MOBILE DRAWER CONTENT */}
      {/* UPDATED: Changed z-50 to z-[999] */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white z-[999] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-[#FF5733]">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-700 focus:outline-none transition-transform duration-300 hover:rotate-90 active:rotate-180"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col space-y-4 font-medium text-gray-700 text-lg">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition border-b border-gray-50 pb-2 ${
                    isActive ? "text-[#FF5733]" : "hover:text-[#FF5733]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto mb-4">
            <button className="w-full bg-[#0672CD] text-white px-6 py-3 rounded-full hover:bg-[#045bb5] transition shadow-md font-semibold">
              Book Safari Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
