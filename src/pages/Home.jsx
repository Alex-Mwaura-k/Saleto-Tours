import React from "react";
import Hero from "../components/Hero";
import FeaturedSafaris from "../components/FeaturedSafaris";
import HomeAboutSection from "../components/HomeAboutSection";
// 1. Import the shared data source instead of defining local mocks
import { packagesData } from "../data/packagesData";

const Home = () => {
  // 2. Select specific packages to feature (e.g., the first 4)
  const featuredPackages = packagesData.slice(0, 4);

  return (
    <div>
      <Hero
        title="Going Beyond the Maps"
        subtitle="From the Maasai Mara to the Coast, discover the ultimate safari adventures."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* 3. Pass the consistent data to the component */}
      <FeaturedSafaris packages={featuredPackages} />

      <HomeAboutSection />
    </div>
  );
};

export default Home;
