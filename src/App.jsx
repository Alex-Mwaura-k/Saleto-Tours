import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import InstallBanner from "./components/InstallBanner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactFab from "./components/ContactFab"; // Import here
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Added 'relative' to ensure z-index layering works correctly contextually */}
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col relative">
        <Navbar />
        <InstallBanner />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <Footer />

        {/* Floating Buttons */}
        <ScrollToTop />
        <ContactFab />
      </div>
    </BrowserRouter>
  );
}

export default App;
