import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";

const Blogs = () => {
  // 1. MOCK DATA
  const blogPosts = [
    {
      id: 1,
      title: "The Great Wildebeest Migration: A Complete Guide",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 24, 2024",
      author: "Saleto Team",
      excerpt:
        "Witness the greatest show on earth. Learn the best times to visit the Maasai Mara to see millions of wildebeest crossing the Mara River.",
      category: "Wildlife",
    },
    {
      id: 2,
      title: "Top 5 Luxury Lodges in Amboseli",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Dec 18, 2024",
      author: "Sarah Jenkins",
      excerpt:
        "Experience the shadow of Mount Kilimanjaro in style. We review the top luxury accommodations that offer the best views and service.",
      category: "Accommodation",
    },
    {
      id: 3,
      title: "Packing List for Your First Safari",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Nov 30, 2024",
      author: "Saleto Team",
      excerpt:
        "Don't know what to wear? From neutral colors to camera gear, here is the ultimate checklist for your African safari adventure.",
      category: "Travel Tips",
    },
    {
      id: 4,
      title: "Why Diani Beach is the Perfect Post-Safari Retreat",
      image:
        "https://images.unsplash.com/photo-1590523278135-9598f482bd9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Nov 15, 2024",
      author: "Mark Doe",
      excerpt:
        "After days in the dusty savannah, nothing beats the pristine white sands of Diani. Discover why 'Bush and Beach' is the perfect combo.",
      category: "Destinations",
    },
    {
      id: 5,
      title: "Cultural Etiquette: Visiting a Maasai Village",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 28, 2024",
      author: "Saleto Team",
      excerpt:
        "Respect is key. Learn about the traditions, dress code, and social norms before you visit a local Maasai community.",
      category: "Culture",
    },
    {
      id: 6,
      title: "The Big Five: What They Are and Where to Find Them",
      image:
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 10, 2024",
      author: "Jane Smith",
      excerpt:
        "Lion, Leopard, Rhino, Elephant, and Buffalo. A guide to tracking down the most sought-after animals in the African bush.",
      category: "Wildlife",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12 font-sans">
      {/* 1. HERO HEADER WITH BREADCRUMB */}
      <div className="bg-gray-900 text-white py-12 md:py-16 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            Travel Blogs
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            {/* Slash Separator */}
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Blogs</span>
          </nav>
        </div>
      </div>

      {/* 2. BLOG GRID SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* The Grid: Standardized gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            /* CHANGE: The Outer wrapper is now the ONE Link for the whole card */
            <Link
              to={`/blogs/${post.id}`}
              key={post.id}
              className="group block h-full"
            >
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#FF5733] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Data */}
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1.5 text-[#FF5733]" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-1.5 text-[#FF5733]" />
                      {post.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#FF5733] transition-colors font-['Playfair_Display']">
                    {/* Inner Link removed, text remains */}
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Link (Now just a span for visual styling) */}
                  <span className="inline-flex items-center text-[#FF5733] font-semibold text-sm group-hover:underline mt-auto">
                    Read More <FaArrowRight className="ml-2 text-xs" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
