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
import CountUpNumber from "./CountUpNumber";

const HomeAboutSection = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pt-8">
          <span className="text-[#FF5733] font-bold tracking-widest uppercase text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-gray-900 mt-2">
            Discover Saleto Tours
          </h2>
          <div className="w-24 h-1 bg-[#FF5733] mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#FF5733] rounded-2xl z-0 transition-transform duration-300 group-hover:top-6 group-hover:-left-6"></div>
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Safari Guide"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[450px] object-cover animate-blink-grayscale"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#FF5733] font-bold uppercase tracking-widest text-xs mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-gray-900 mb-6 leading-tight">
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

            <div className="mt-8">
              <Link to="/about">
                <button className="text-[#FF5733] font-bold hover:underline flex items-center gap-2 transition-all">
                  Read Our Full Story <FaChevronRight className="text-xs" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] text-white py-12 mt-20 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
    </div>
  );
};

export default HomeAboutSection;
