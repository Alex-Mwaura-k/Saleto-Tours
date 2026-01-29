import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaLeaf,
  FaGlobeAfrica,
  FaUsers,
  FaAward,
  FaQuoteLeft,
} from "react-icons/fa";
// 1. IMPORT THE NEW COMPONENT
import CountUpNumber from "../components/CountUpNumber";

const About = () => {
  // Mock Data for Team
  const team = [
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

  // Mock Data for Insights blog preview
  const insights = [
    {
      title: "The Great Migration",
      desc: "Why July to October is the absolute best time to visit the Mara.",
      tag: "Wildlife",
    },
    {
      title: "Packing for Safari",
      desc: "The essential checklist for a comfortable luxury bush experience.",
      tag: "Travel Tips",
    },
    {
      title: "Community Impact",
      desc: "How your booking directly supports local schools in Samburu.",
      tag: "Conservation",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-8 font-sans">
      {/* 1. HERO HEADER */}
      <div className="bg-[#111827] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold mb-4">
            About Us
          </h1>
          <nav className="flex items-center text-sm md:text-base text-gray-400">
            <Link to="/" className="hover:text-[#FF5733] transition-colors">
              Home
            </Link>
            <span className="mx-2 text-xs">/</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </div>

      {/* 2. OUR STORY & VISION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            {/* UPDATED BORDER LOGIC: Mobile = below (left-0 top-4), Desktop = left (-left-4) */}
            <div className="absolute top-4 left-0 md:top-4 md:-left-4 w-full h-full border-2 border-[#FF5733] rounded-2xl z-0 transition-transform duration-300 group-hover:top-6 md:group-hover:top-4 md:group-hover:-left-6"></div>

            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Safari Guide"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover animate-blink-grayscale"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <span className="text-[#FF5733] font-bold uppercase tracking-widest text-xs mb-2 block">
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

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border-l-4 border-[#FF5733] shadow-sm">
              <FaQuoteLeft className="text-[#FF5733] text-xl shrink-0 mt-1" />
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
          </div>
        </div>
      </div>

      {/* 3. IMPACT INSIGHTS (Stats Bar) */}
      <div className="bg-[#111827] text-white py-10 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF5733] mb-1 flex justify-center">
                <CountUpNumber end={15} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Years Experience
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF5733] mb-1 flex justify-center">
                <CountUpNumber end={10000} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Happy Guests
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF5733] mb-1 flex justify-center">
                <CountUpNumber end={50} suffix="+" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Partner Lodges
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-[#FF5733] mb-1 flex justify-center">
                <CountUpNumber end={100} suffix="%" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Local Team
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CORE VALUES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="text-center mb-8">
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
              <div className="w-12 h-12 bg-orange-50 text-[#FF5733] rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-[#FF5733] group-hover:text-white transition-colors">
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

      {/* 5. TEAM SPOTLIGHT */}
      <div className="bg-gray-100 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900">
                Meet The Experts
              </h2>
              <p className="text-gray-500 mt-2 text-sm">
                The passionate people behind your perfect safari.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-[#FF5733] font-bold text-sm hover:underline mt-4 md:mt-0 flex items-center gap-1"
            >
              Join our team <FaChevronRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
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
                  <p className="text-[#FF5733] text-xs font-bold uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. SAFARI INSIGHTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-8 text-center">
          Safari Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-6 rounded-xl hover:border-gray-200 transition-colors"
            >
              <span className="bg-orange-100 text-[#FF5733] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <Link
                to="/blogs"
                className="text-[#111827] text-sm font-bold hover:text-[#FF5733] flex items-center gap-1 transition-colors"
              >
                Read More <FaChevronRight className="text-xs" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 7. COMPACT CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-[#111827] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-['Playfair_Display'] font-bold mb-2">
                Ready for adventure?
              </h2>
              <p className="text-gray-400 text-sm">
                Let our experts handle the details while you prepare for the
                magic.
              </p>
            </div>
            <Link to="/contact">
              <button className="bg-[#FF5733] text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#111827] transition-all shadow-lg whitespace-nowrap">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
