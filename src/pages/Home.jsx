import React from "react";
import Hero from "../components/Hero";
import FeaturedSafaris from "../components/FeaturedSafaris";
import HomeAboutSection from "../components/HomeAboutSection";
import { packagesData } from "../data/packagesData";

const Home = () => {
  const featuredPackages = packagesData.slice(0, 4);

  return (
    <div>
      <Hero
        title="Going Beyond the Maps"
        subtitle="From the Maasai Mara to the Coast, discover the ultimate safari adventures."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <FeaturedSafaris packages={featuredPackages} />

      <HomeAboutSection />
    </div>
  );
};

export default Home;
