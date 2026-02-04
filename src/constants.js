// src/constants.js

// --- BRANDING ---
export const COMPANY_NAME = "Saleto Tours";
export const COMPANY_TAGLINE = "Authentic African Safaris & Adventures";
export const FOOTER_DESCRIPTION =
  "Going beyond the maps to bring you the authentic spirit of Africa. Luxury safaris, unforgettable memories.";

// --- THEME COLORS ---
export const THEME = {
  primary: "#0672CD", // Blue
  primaryDark: "#045bb5",
  highlight: "#FF5733", // Orange
  highlightDark: "#E64A19",
};

// --- CONTACT DETAILS ---
// Pulling from .env for security, with fallbacks
export const CONTACT_INFO = {
  phone: import.meta.env.VITE_COMPANY_PHONE || "+254714995011",
  whatsapp: import.meta.env.VITE_COMPANY_PHONE || "254714995011", // Usually same as phone
  email: import.meta.env.VITE_COMPANY_EMAIL || "info@saletotours.com",
  careersEmail: "careers@saletotours.com",
  bookingEmail: "bookings@saletotours.com",
  address: "Narok, Kenya",
  office: "Olorropil Towers, Narok, Kenya",
};

// --- MAP CONFIGURATION ---
// We pull the raw string, but we will sanitize it in the components
export const MAP_EMBED_CODE = import.meta.env.VITE_MAP_EMBED_CODE || "";

// --- SOCIAL MEDIA LINKS ---
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/saletotours/",
  instagram: "https://instagram.com/saleto_tours/",
  twitter: "https://x.com/search?q=saleto%20tours&src=typed_query&f=top",
  linkedin: "https://linkedin.com/company/saletotours",
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp.replace("+", "")}`,
};

// --- NAVIGATION MENU ---
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Packages", path: "/packages" },
  { name: "Hotels", path: "/hotels" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export const QUICK_LINKS = [
  { name: "About Us", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Safari Packages", path: "/packages" },
  { name: "Travel Blogs", path: "/blogs" },
];

export const OTHER_LINKS = [
  { name: "Gallery", path: "/gallery" },
  { name: "Careers", path: "/careers" },
];

export const IMAGES = {};
