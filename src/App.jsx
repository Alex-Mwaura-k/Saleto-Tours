import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import InstallBanner from "./components/InstallBanner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactFab from "./components/ContactFab";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Initialize Google Analytics GA4
// TODO: Replace with your actual Measurement ID from the Google Analytics dashboard
ReactGA.initialize("G-2506VDVH3V");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Track page views whenever the route (location) changes
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);

  // Handle initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <ScrollToTop />
      <ContactFab />

      <Navbar />

      <div className="min-h-screen bg-gray-50 font-sans flex flex-col relative animate-fade-in-up">
        <InstallBanner />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            
            {/* UPDATED: Changed :id to :slug to match DestinationDetails component */}
            <Route path="/destinations/:slug" element={<DestinationDetails />} />
            
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<CareerDetails />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;