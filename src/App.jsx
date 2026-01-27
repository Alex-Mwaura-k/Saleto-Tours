import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstallBanner from "./components/InstallBanner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactFab from "./components/ContactFab";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* Fixed elements outside the animated div */}
      <ScrollToTop />
      <ContactFab />

      {/* Main animated content */}
      {/* ADDED 'overflow-x-hidden' HERE 👇 to fix the horizontal scroll issue */}
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col relative animate-fade-in-up overflow-x-hidden">
        <Navbar />
        <InstallBanner />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
