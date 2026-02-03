import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

const galleryImages = [
  // --- OUR TEAM ---
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Team",
    title: "David - Head Guide",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Team",
    title: "Sarah - Trip Planner",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Team",
    title: "James - Conservationist",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Team",
    title: "Alice - Customer Care",
  },

  // --- WILDLIFE ---
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Wildlife",
    title: "The Great Migration",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Wildlife",
    title: "Leopard Resting",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Wildlife",
    title: "Elephants at Sunset",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Wildlife",
    title: "Giraffes in Nairobi",
  },

  // --- LODGES ---
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lodges",
    title: "Luxury Poolside",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lodges",
    title: "Salt Lick Lodge",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lodges",
    title: "Coastal Retreat",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lodges",
    title: "Mountain View Cabin",
  },
];

const categories = ["All", "Wildlife", "Team", "Lodges"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // DISABLE BODY SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      {/* 1. HERO SECTION */}
      <div className="bg-[#111827] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Our Gallery
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">Gallery</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* 2. FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeCategory === cat
                  ? "bg-[#FF5733] text-white border-[#FF5733] shadow-lg scale-105"
                  : "bg-white text-gray-600 border-transparent hover:border-[#FF5733] hover:text-[#FF5733]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. IMAGE GRID */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-64 md:h-72 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <span className="text-[#FF5733] text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {image.category}
                </span>
                <h3 className="text-white font-['Playfair_Display'] text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {image.title}
                </h3>
                <div className="mt-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                  <FaSearchPlus />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500 animate-pulse">
            No images found for this category.
          </div>
        )}
      </div>

      {/* 4. LIGHTBOX MODAL (USING PORTAL + 100DVH) */}
      {selectedImage &&
        createPortal(
          <div
            // UPDATED: Used h-[100dvh] as requested to cover the full screen
            className="fixed top-0 left-0 w-screen h-[100dvh] z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden animate-fade-in p-8 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-[#FF5733] hover:rotate-90 transition-all duration-300 p-2 z-20"
            >
              <FaTimes size={32} />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-full w-auto max-w-full object-contain rounded-lg shadow-2xl pointer-events-auto select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* CAPTION */}
            <div
              className="mt-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-center min-w-[200px] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[#FF5733] text-xs font-bold uppercase tracking-wider block mb-1">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-['Playfair_Display'] text-lg font-bold">
                {selectedImage.title}
              </h3>
            </div>
          </div>,
          document.body, // Renders outside the root app div
        )}
    </div>
  );
};

export default Gallery;
