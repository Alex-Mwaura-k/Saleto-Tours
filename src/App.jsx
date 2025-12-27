import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstallBanner from "./components/InstallBanner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactFab from "./components/ContactFab";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col relative">
        <Navbar />
        <InstallBanner />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/destinations"
              element={
                <div className="p-20 text-center">
                  Destinations Page Coming Soon
                </div>
              }
            />
            <Route
              path="/packages"
              element={
                <div className="p-20 text-center">
                  Packages Page Coming Soon
                </div>
              }
            />
            <Route
              path="/hotels"
              element={
                <div className="p-20 text-center">Hotels Page Coming Soon</div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="p-20 text-center">Contact Page Coming Soon</div>
              }
            />
          </Routes>
        </div>

        <Footer />

        <ScrollToTop />
        <ContactFab />
      </div>
    </BrowserRouter>
  );
}

export default App;
