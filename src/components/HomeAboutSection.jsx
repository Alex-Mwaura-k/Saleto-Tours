import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaLeaf,
  FaGlobeAfrica,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
  FaClock,
  FaSuitcase,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import CountUpNumber from "./CountUpNumber";
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  THEME,
  MAP_EMBED_CODE, // 👈 Updated Import
} from "../constants";

// --- MOCK DATA (Unchanged) ---
const mockHotels = [
  {
    id: 1,
    name: "Mara Serena Safari Lodge",
    location: "Maasai Mara",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 25000,
    rating: 5,
    amenities: [{ items: ["Pool", "WiFi", "Spa"] }],
  },
  {
    id: 2,
    name: "Sarova Salt Lick Game Lodge",
    location: "Tsavo West",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 18500,
    rating: 4,
    amenities: [{ items: ["Restaurant", "Bar"] }],
  },
  {
    id: 3,
    name: "Hemingways Watamu",
    location: "Watamu Coast",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 32000,
    rating: 5,
    amenities: [{ items: ["Beach", "WiFi", "Gym"] }],
  },
];

const mockTestimonials = [
  {
    id: 1,
    name: "Jessica & Mark",
    location: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The Maasai Mara migration safari was simply breathtaking. Saleto Tours handled everything flawlessly, from the airport pickup to the amazing lodge selection.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    location: "China",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I was looking for a custom photography trip and they delivered beyond expectations. The guide knew exactly where to find the leopards. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "USA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "A truly eco-conscious company. It felt good knowing our trip supported local conservation efforts. The Diani beach extension was the perfect ending.",
    rating: 5,
  },
];

const mockPackages = [
  {
    id: 1,
    title: "Maasai Mara Migration Safari",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Popular",
  },
  {
    id: 2,
    title: "Amboseli Elephant Adventure",
    location: "Amboseli National Park",
    duration: "3 Days / 2 Nights",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
  },
  {
    id: 3,
    title: "Bush & Beach Experience",
    location: "Tsavo & Diani",
    duration: "5 Days / 4 Nights",
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Honeymoon",
  },
];

const teamMembers = [
  {
    name: "David K.",
    role: "Head Guide",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah M.",
    role: "Travel Planner",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James O.",
    role: "Conservationist",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const recentBlogs = [
  {
    id: 1,
    title: "The Great Wildebeest Migration: A Complete Guide",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Dec 24, 2024",
    author: "Saleto Team",
    excerpt:
      "Witness the greatest show on earth. Learn the best times to visit the Maasai Mara.",
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
      "Experience the shadow of Mount Kilimanjaro in style. We review the top accommodations.",
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
      "From neutral colors to camera gear, here is the ultimate checklist for your adventure.",
    category: "Travel Tips",
  },
];

const HomeAboutSection = () => {
  const featuredHotels = mockHotels.slice(0, 3);
  const featuredPackages = mockPackages.slice(0, 3);

  return (
    <div className="bg-gray-50 font-sans">
      {/* 1. ABOUT INTRO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pt-8">
          <span
            className="font-bold tracking-widest uppercase text-xs"
            style={{ color: THEME.highlight }}
          >
            About Us
          </span>
          <h2 className="text-2xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
            Discover Saleto Tours
          </h2>
          <div
            className="w-20 h-1 mt-4 rounded-full"
            style={{ backgroundColor: THEME.highlight }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div
              className="absolute top-4 left-0 md:top-4 md:-left-4 w-full h-full border-2 rounded-2xl z-0 transition-transform duration-300 group-hover:top-6 md:group-hover:top-4 md:group-hover:-left-6"
              style={{ borderColor: THEME.highlight }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Safari Guide"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[300px] md:h-[450px] object-cover animate-blink-grayscale"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span
              className="font-bold uppercase tracking-widest text-xs mb-2 block"
              style={{ color: THEME.highlight }}
            >
              Who We Are
            </span>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-6 leading-tight">
              Going Beyond the Maps to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-orange-600">
                Discover the Real Africa
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Saleto Tours isn't just a travel agency; we are storytellers,
              conservationists, and your local friends in East Africa. We
              believe a safari shouldn't just be a vacation—it should be a
              transformative journey that touches your soul.
            </p>

            <div
              className="flex items-start gap-4 p-4 bg-white rounded-lg border-l-4 shadow-sm"
              style={{ borderColor: THEME.highlight }}
            >
              <FaQuoteLeft
                className="text-xl shrink-0 mt-1"
                style={{ color: THEME.highlight }}
              />
              <div>
                <p className="text-gray-700 italic text-sm mb-2">
                  "We don't just show you the animals; we introduce you to their
                  world. Every itinerary is a personal promise of excellence."
                </p>
                <p className="font-bold text-gray-900 text-xs uppercase tracking-wide">
                  – Founder, Saleto Tours
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about">
                <button
                  className="font-bold hover:underline flex items-center gap-2 transition-all"
                  style={{ color: THEME.highlight }}
                >
                  Read Our Full Story <FaChevronRight className="text-xs" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS */}
      <div className="bg-[#111827] text-white py-10 mt-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div className="p-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-1 flex justify-center"
                style={{ color: THEME.highlight }}
              >
                <CountUpNumber end={15} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Years Experience
              </div>
            </div>
            <div className="p-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-1 flex justify-center"
                style={{ color: THEME.highlight }}
              >
                <CountUpNumber end={10000} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Happy Guests
              </div>
            </div>
            <div className="p-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-1 flex justify-center"
                style={{ color: THEME.highlight }}
              >
                <CountUpNumber end={50} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Partner Lodges
              </div>
            </div>
            <div className="p-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-1 flex justify-center"
                style={{ color: THEME.highlight }}
              >
                <CountUpNumber end={100} suffix="%" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Local Team
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CORE VALUES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-6">
          <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">
            Our Core Values
          </span>
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
            Why Travelers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaUsers />,
              title: "Local Experts",
              desc: "Guides born and raised here, offering insights no guidebook can match.",
            },
            {
              icon: <FaLeaf />,
              title: "Eco-Conscious",
              desc: "Sustainable practices that protect wildlife for future generations.",
            },
            {
              icon: <FaGlobeAfrica />,
              title: "Tailored Safaris",
              desc: "Every trip is custom-built to your pace, preferences, and dreams.",
            },
            {
              icon: <FaAward />,
              title: "Luxury Service",
              desc: "Partnering with the finest lodges to ensure comfort meets adventure.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl mb-4 group-hover:text-white transition-colors"
                style={{ color: THEME.highlight }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. HOTELS */}
      <div className="bg-white pt-10 pb-6 md:py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div className="w-full md:w-auto">
              <span
                className="font-bold tracking-widest uppercase text-xs"
                style={{ color: THEME.highlight }}
              >
                Luxury Accommodation
              </span>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
                Top Rated Stays
              </h2>
            </div>
            <Link to="/hotels" className="hidden md:block">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-600 transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                View All Hotels <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <Link
                key={hotel.id}
                to={`/hotels/${hotel.id}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm">
                      KES {hotel.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3
                          className="text-lg font-bold text-gray-900 font-['Playfair_Display'] leading-tight mb-1 transition-colors"
                          onMouseOver={(e) =>
                            (e.currentTarget.style.color = THEME.highlight)
                          }
                          onMouseOut={(e) => (e.currentTarget.style.color = "")}
                        >
                          {hotel.name}
                        </h3>
                        <div className="flex items-center text-gray-500 text-xs">
                          <FaMapMarkerAlt
                            className="mr-1"
                            style={{ color: THEME.highlight }}
                          />
                          {hotel.location}
                        </div>
                      </div>
                      <div className="flex bg-orange-50 px-1.5 py-1 rounded h-fit">
                        <FaStar className="text-xs text-yellow-400" />
                        <span className="text-xs font-bold text-yellow-700 ml-1">
                          {hotel.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 mt-2">
                      {hotel.amenities && hotel.amenities.length > 0 ? (
                        hotel.amenities
                          .flatMap((cat) => cat.items)
                          .slice(0, 3)
                          .map((am, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {am}
                            </span>
                          ))
                      ) : (
                        <span className="text-[10px] text-gray-400">
                          Amenities available
                        </span>
                      )}
                      <span className="text-[10px] text-gray-400 px-1">
                        + more
                      </span>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full py-2.5 bg-[#111827] text-white border-2 border-[#111827] rounded-lg font-bold text-sm hover:bg-transparent hover:text-[#111827] transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/hotels">
              <button
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111827")
                }
              >
                View All Hotels
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 5. PACKAGES */}
      <div className="bg-gray-50 pt-10 pb-6 md:py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div className="w-full md:w-auto">
              <span
                className="font-bold tracking-widest uppercase text-xs"
                style={{ color: THEME.highlight }}
              >
                Unforgettable Adventures
              </span>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
                Popular Safari Packages
              </h2>
            </div>
            <Link to="/packages" className="hidden md:block">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-600 transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                View All Packages <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
              <Link
                to={`/packages/${pkg.id}`}
                key={pkg.id}
                className="block h-full group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {pkg.category}
                    </div>

                    <div
                      className="absolute bottom-0 right-0 text-white px-4 py-2 rounded-tl-xl font-bold"
                      style={{ backgroundColor: THEME.highlight }}
                    >
                      Ksh {pkg.price.toLocaleString()}{" "}
                      <span className="text-xs font-normal opacity-90">
                        / person
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3
                        className="text-xl font-bold text-gray-900 font-['Playfair_Display'] mb-3 transition-colors"
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = THEME.highlight)
                        }
                        onMouseOut={(e) => (e.currentTarget.style.color = "")}
                      >
                        {pkg.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1.5">
                          <FaClock style={{ color: THEME.highlight }} />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FaMapMarkerAlt style={{ color: THEME.highlight }} />
                          {pkg.location}
                        </div>
                      </div>
                    </div>

                    <div className="w-full py-3 bg-gray-50 text-gray-900 font-bold rounded-lg hover:bg-[#111827] hover:text-white transition-all duration-300 border border-gray-200 hover:border-[#111827] flex items-center justify-center gap-2 group-hover:shadow-lg">
                      <FaSuitcase
                        className="transition-colors"
                        style={{ color: THEME.highlight }}
                      />
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/packages">
              <button
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111827")
                }
              >
                View All Packages
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 6. TESTIMONIALS */}
      <div className="bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="font-bold tracking-widest uppercase text-xs"
              style={{ color: THEME.highlight }}
            >
              Guest Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
              Memories Made in Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
              >
                <FaQuoteLeft className="text-4xl text-gray-200 absolute top-6 right-6" />

                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed mb-6 text-sm relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: THEME.highlight }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. RECENT BLOGS */}
      <div className="bg-gray-50 py-10 md:py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div className="w-full md:w-auto">
              <span
                className="font-bold tracking-widest uppercase text-xs"
                style={{ color: THEME.highlight }}
              >
                Travel Inspiration
              </span>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
                Latest Stories
              </h2>
            </div>
            <Link to="/blogs" className="hidden md:block">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-600 transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                Read All Blogs <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlogs.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="group block h-full"
              >
                <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide"
                      style={{ backgroundColor: THEME.highlight }}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center">
                        <FaCalendarAlt
                          className="mr-1.5"
                          style={{ color: THEME.highlight }}
                        />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <FaUser
                          className="mr-1.5"
                          style={{ color: THEME.highlight }}
                        />
                        {post.author}
                      </div>
                    </div>

                    <h3
                      className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 transition-colors font-['Playfair_Display']"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = THEME.highlight)
                      }
                      onMouseOut={(e) => (e.currentTarget.style.color = "")}
                    >
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <span
                      className="inline-flex items-center font-semibold text-sm group-hover:underline mt-auto"
                      style={{ color: THEME.highlight }}
                    >
                      Read More <FaArrowRight className="ml-2 text-xs" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/blogs">
              <button
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111827")
                }
              >
                Read All Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 8. TEAM MEMBERS */}
      <div className="bg-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div className="w-full md:w-auto">
              <span
                className="font-bold tracking-widest uppercase text-xs"
                style={{ color: THEME.highlight }}
              >
                Our Experts
              </span>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
                Meet The Team
              </h2>
            </div>
            <Link to="/gallery" className="hidden md:block">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-600 transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = THEME.highlight)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "")}
              >
                View Full Team <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h4>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mt-1"
                    style={{ color: THEME.highlight }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/gallery">
              <button
                className="inline-flex items-center gap-2 bg-[#111827] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-colors"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = THEME.highlight)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111827")
                }
              >
                View Full Team
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 9. CONTACT FORM & MAP */}
      <div className="bg-gray-50 py-10 md:py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span
              className="font-bold tracking-widest uppercase text-xs"
              style={{ color: THEME.highlight }}
            >
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
              Start Your Journey
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 mb-8">
            <div className="bg-[#111827] text-white p-8 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 w-32 h-32 opacity-10 rounded-tr-full"
                style={{ backgroundColor: THEME.highlight }}
              ></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-bl-full"></div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold font-['Playfair_Display'] mb-4">
                  Contact Info
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Have a question? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className="mt-1 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                      style={{ backgroundColor: THEME.highlight }}
                    >
                      <FaPhoneAlt className="text-xs" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Phone</h5>
                      <p className="text-gray-400 text-sm mt-1">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="mt-1 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                      style={{ backgroundColor: THEME.highlight }}
                    >
                      <FaEnvelope className="text-xs" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Email</h5>
                      <p className="text-gray-400 text-sm mt-1">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="mt-1 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-lg"
                      style={{ backgroundColor: THEME.highlight }}
                    >
                      <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-white">Location</h5>
                      <p className="text-gray-400 text-sm mt-1">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative z-10">
                <h5 className="font-bold text-xs mb-3 text-gray-300 uppercase tracking-wider">
                  Follow Us
                </h5>
                <div className="flex space-x-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = THEME.highlight)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1F2937")
                    }
                  >
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = THEME.highlight)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1F2937")
                    }
                  >
                    <FaInstagram className="text-xs" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = THEME.highlight)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "#1F2937")
                    }
                  >
                    <FaWhatsapp className="text-xs" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 md:w-3/5 bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-['Playfair_Display'] mb-6">
                Send a Message
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                      style={{ "--tw-ring-color": THEME.highlight }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = THEME.highlight)
                      }
                      onBlur={(e) => (e.target.style.borderColor = "")}
                      placeholder="First Last"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                      style={{ "--tw-ring-color": THEME.highlight }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = THEME.highlight)
                      }
                      onBlur={(e) => (e.target.style.borderColor = "")}
                      placeholder="+254..."
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors"
                    style={{ "--tw-ring-color": THEME.highlight }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "")}
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 block tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-1 transition-colors resize-none"
                    style={{ "--tw-ring-color": THEME.highlight }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = THEME.highlight)
                    }
                    onBlur={(e) => (e.target.style.borderColor = "")}
                    placeholder="Tell us about your trip..."
                  ></textarea>
                </div>
                <button
                  className="w-full text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-sm"
                  style={{ backgroundColor: THEME.highlight }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      THEME.highlightDark)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = THEME.highlight)
                  }
                >
                  Send Message <FaPaperPlane className="text-xs" />
                </button>
              </form>
            </div>
          </div>

          {/* MAP CONTAINER */}
          {/* We assume MAP_EMBED_CODE from constants contains the full <iframe> string. */}
          {/* Use Tailwind arbitrary values to ensure the inner iframe matches the parent size. */}
          <div className="w-full h-[350px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
            <div
              className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
              dangerouslySetInnerHTML={{ __html: MAP_EMBED_CODE }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
