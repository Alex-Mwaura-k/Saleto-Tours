import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaChevronLeft,
  FaPenNib,
  FaGlobeAfrica,
  FaPlus,
} from "react-icons/fa";
import { THEME } from "../constants"; // 👈 Import constants

const BlogDetails = () => {
  const { id } = useParams();

  // MOCK DATA
  const blogPosts = [
    {
      id: 1,
      title: "The Great Wildebeest Migration: A Complete Guide",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      date: "Dec 24, 2024",
      author: "Saleto Team",
      role: "Senior Editor",
      articlesCount: 42,
      yearsActive: 8,
      category: "Wildlife",
      readTime: "8 min read",
      content: (
        <>
          {/* Dynamic Drop Cap */}
          <p className="mb-6">
            <span
              style={{
                color: THEME.highlight,
                fontSize: "3rem",
                fontWeight: "bold",
                float: "left",
                marginRight: "0.75rem",
                lineHeight: "1",
              }}
            >
              T
            </span>
            he Great Wildebeest Migration is often dubbed the "World Cup of
            Wildlife." It is a year-round, circular journey where over 1.5
            million wildebeest, accompanied by zebras and gazelles, trek across
            the Serengeti-Mara ecosystem in search of greener pastures and
            water.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-4 mt-8">
            When is the best time to go?
          </h3>
          <p className="mb-6">
            While the migration is a continuous loop, the most dramatic river
            crossings typically occur between **July and October**. This is when
            the herds face the crocodile-infested waters of the Mara River to
            reach the lush grasslands of the Maasai Mara in Kenya.
          </p>
          <p className="mb-6">
            If you visit in **January or February**, you will witness the
            calving season in the southern Serengeti, where thousands of babies
            are born daily—a magnet for predators like lions and cheetahs.
          </p>
          <blockquote
            className="border-l-4 pl-6 italic text-gray-700 my-10 text-lg bg-gray-50 py-4 rounded-r-lg"
            style={{ borderColor: THEME.highlight }}
          >
            "It is not just a movement of animals; it is a movement of life
            itself. The sheer noise, dust, and drama are unlike anything else on
            earth."
          </blockquote>
          <h3 className="text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-4">
            What to Expect
          </h3>
          <p className="mb-6">
            Prepare for early mornings and long days in the bush. A typical day
            starts before sunrise to catch the predators when they are most
            active. You'll spend hours traversing the plains, so comfort is key.
            Bring layers, as mornings can be chilly, but the African sun gets
            hot by midday.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Top 5 Luxury Lodges in Amboseli",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 18, 2024",
      author: "Sarah Jenkins",
      role: "Lodge Specialist",
      articlesCount: 28,
      yearsActive: 5,
      category: "Accommodation",
      readTime: "6 min read",
      content: <p>Full article content...</p>,
    },
    {
      id: 3,
      title: "Packing List for Your First Safari",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Nov 30, 2024",
      author: "Saleto Team",
      role: "Guide Expert",
      articlesCount: 15,
      yearsActive: 3,
      category: "Travel Tips",
      readTime: "5 min read",
      content: <p>Full packing list content...</p>,
    },
    {
      id: 4,
      title: "Why Diani Beach is the Perfect Post-Safari Retreat",
      image:
        "https://images.unsplash.com/photo-1590523278135-9598f482bd9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Nov 15, 2024",
      author: "Mark Doe",
      role: "Coastal Expert",
      articlesCount: 10,
      yearsActive: 4,
      category: "Destinations",
      readTime: "4 min read",
      content: <p>Full article about Diani Beach...</p>,
    },
    {
      id: 5,
      title: "Cultural Etiquette: Visiting a Maasai Village",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 28, 2024",
      author: "Saleto Team",
      role: "Cultural Liaison",
      articlesCount: 30,
      yearsActive: 10,
      category: "Culture",
      readTime: "6 min read",
      content: <p>Full article about Maasai culture...</p>,
    },
    {
      id: 6,
      title: "The Big Five: What They Are and Where to Find Them",
      image:
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Oct 10, 2024",
      author: "Jane Smith",
      role: "Wildlife Biologist",
      articlesCount: 50,
      yearsActive: 12,
      category: "Wildlife",
      readTime: "7 min read",
      content: <p>Full article about the Big Five...</p>,
    },
  ];

  // Find the post
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Fallback
  const displayPost = post || {
    ...blogPosts[0],
    title: "Post Not Found",
    content: <p>Sorry, this post does not exist.</p>,
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* 1. TOP BLACK NAVIGATION BAR */}
      <div className="bg-[#111827] text-gray-300 py-3 text-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <Link
              to="/blogs"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <FaChevronLeft className="text-xs" /> Back
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-white font-medium truncate">
              {displayPost.title}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <span style={{ color: THEME.highlight }}>
              {displayPost.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* 2. TITLE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-gray-900 mb-4 leading-tight">
          {displayPost.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="bg-[#111827] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">
            {displayPost.category}
          </span>
          <div className="flex items-center gap-1.5">
            <FaCalendarAlt style={{ color: THEME.highlight }} />
            <span className="font-medium">{displayPost.date}</span>
          </div>
        </div>
      </div>

      {/* 3. SPLIT HERO: IMAGE (50%) + AUTHOR CARD (50%) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
          {/* LEFT: IMAGE (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm">
              <img
                src={displayPost.image}
                alt={displayPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: ENRICHED AUTHOR CARD (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="h-full bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between relative overflow-hidden">
              {/* Background Texture */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

              <div>
                {/* Header: Avatar + Name + Role */}
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Author"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-wide bg-orange-100 px-2 py-0.5 rounded-md"
                      style={{ color: THEME.highlight }}
                    >
                      {displayPost.role}
                    </span>
                    <h3 className="font-bold text-gray-900 text-2xl font-['Playfair_Display'] mt-1">
                      {displayPost.author}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Expert Wildlife Photographer
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 border-y border-gray-200 py-4 bg-white/50 rounded-lg px-2">
                  <div className="text-center border-r border-gray-200">
                    <div className="flex items-center justify-center gap-1.5 text-gray-900 font-bold text-lg">
                      <FaPenNib className="text-xs text-gray-400" />
                      {displayPost.articlesCount}
                    </div>
                    <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                      Articles
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-gray-900 font-bold text-lg">
                      <FaGlobeAfrica className="text-xs text-gray-400" />
                      {displayPost.yearsActive}+
                    </div>
                    <div className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                      Years Traveling
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Passionate about sharing the hidden gems of Africa. Dedicated
                  to sustainable tourism and capturing the magic of the wild
                  through words and lens.
                </p>
              </div>

              {/* Footer: Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <button
                  className="flex-1 w-full bg-[#111827] text-white py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md hover:bg-white"
                  style={{ color: undefined }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = THEME.highlight;
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#111827";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  <FaPlus className="text-xs" /> Follow Author
                </button>

                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shadow-sm">
                    <FaTwitter />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all shadow-sm">
                    <FaLinkedinIn />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CONTENT & CTA GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT: Main Content */}
          <div className="lg:w-2/3">
            <div
              className="prose prose-lg prose-headings:font-['Playfair_Display'] text-gray-600 max-w-none"
              // Dynamically style prose links if possible, otherwise rely on CSS/Tailwind config
              style={{
                "--tw-prose-links": THEME.highlight,
              }}
            >
              {displayPost.content}
            </div>
          </div>

          {/* RIGHT: CTA Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-[#111827] p-8 rounded-2xl text-white text-center relative overflow-hidden sticky top-24">
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: THEME.highlight }}
              ></div>
              <h3 className="text-xl font-bold font-['Playfair_Display'] mb-2 relative z-10">
                Inspired to Travel?
              </h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">
                Let us help you plan the safari of a lifetime based on this
                guide.
              </p>
              <Link to="/contact">
                <button
                  className="w-full text-white font-bold py-3 rounded-lg transition-colors relative z-10 hover:bg-white hover:text-[#111827]"
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
                  Plan My Trip
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
