export const packagesData = [
  {
    id: 1,
    title: "Maasai Mara Migration Safari",
    location: "Maasai Mara",
    duration: "3 Days / 2 Nights",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1662999436152-7300c733f750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523623693892-36c927f4d041?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?q=80&w=2070&auto=format&fit=crop",
    ],
    category: "Popular",
    overview:
      "Witness the greatest spectacle on earth. The Maasai Mara Wildebeest Migration is a once-in-a-lifetime experience featuring millions of wildebeest and zebras crossing the Mara River.",
    highlights: [
      "Game Drives",
      "Luxury Camp",
      "Park Fees Included",
      "Mara River Crossing",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Maasai Mara",
        desc: "Depart Nairobi early morning. Arrive for lunch and enjoy an afternoon game drive.",
      },
      {
        day: 2,
        title: "Full Day Game Drive",
        desc: "Spend the entire day exploring the vast plains of the Mara searching for the Big Five.",
      },
      {
        day: 3,
        title: "Morning Game Drive & Return",
        desc: "Early morning game drive before breakfast. Depart for Nairobi.",
      },
    ],
    inclusions: [
      "Transport in 4x4 Land Cruiser",
      "Full Board Accommodation",
      "Park Entry Fees",
      "Professional Guide",
    ],
    exclusions: ["Tips", "Alcoholic Drinks", "Visas"],
  },
  {
    id: 2,
    title: "Amboseli Elephant Adventure",
    location: "Amboseli National Park",
    duration: "3 Days / 2 Nights",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505232938890-792749779df3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577793739775-6e47608229b4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552423315-996472283020?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
    ],
    category: "Family",
    overview:
      "Famous for its large herds of elephants and the backdrop of Mount Kilimanjaro, Amboseli offers some of the best photography opportunities in Kenya.",
    highlights: [
      "Mt Kilimanjaro Views",
      "Elephant Herds",
      "Full Board",
      "Observation Hill",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli",
        desc: "Drive to Amboseli. Check-in and relax. Evening game drive.",
      },
      {
        day: 2,
        title: "Explore Amboseli",
        desc: "Full day game viewing. Visit the Observation Hill for panoramic views.",
      },
      {
        day: 3,
        title: "Return to Nairobi",
        desc: "Morning breakfast and drive back to Nairobi.",
      },
    ],
    inclusions: [
      "Transport in Safari Van",
      "Accommodation",
      "Park Fees",
      "Guide",
    ],
    exclusions: ["Personal items", "Tips"],
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
    overview:
      "The perfect blend of adventure and relaxation. Start with the wild beauty of Tsavo and end on the pristine white sands of Diani Beach.",
    highlights: [
      "SGR Transfer",
      "Beach Resort",
      "Private Safari",
      "Sunset Dhow Cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "SGR to Tsavo",
        desc: "Take the morning train. Transfer to Tsavo East for a game drive.",
      },
      {
        day: 2,
        title: "Tsavo West",
        desc: "Visit Mzima Springs and view hippos underwater.",
      },
      {
        day: 3,
        title: "Transfer to Diani",
        desc: "Drive to the coast. Check into your beach resort.",
      },
      {
        day: 4,
        title: "Leisure at Beach",
        desc: "Optional water sports or just relax by the ocean.",
      },
      {
        day: 5,
        title: "Fly to Nairobi",
        desc: "Afternoon flight back to Nairobi.",
      },
    ],
    inclusions: ["SGR Tickets", "Hotel & Lodge Stay", "Transfers", "Meals"],
    exclusions: ["Flight upgrade", "Water sports"],
  },
  // Add rest of your data here following the same pattern...
  // For now, I'll repeat the first image for the others to ensure code doesn't break
  {
    id: 4,
    title: "Ultimate Kenya Explorer",
    location: "Nakuru, Naivasha, Mara",
    duration: "7 Days / 6 Nights",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    highlights: ["Boat Ride", "Big Five", "Cultural Visit"],
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    id: 5,
    title: "Samburu Wilderness Retreat",
    location: "Samburu National Reserve",
    duration: "3 Days / 2 Nights",
    price: 52000,
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    highlights: ["Special 5 Species", "River Camp", "Walking Safari"],
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
  {
    id: 6,
    title: "Nairobi City Excursion",
    location: "Nairobi",
    duration: "1 Day Tour",
    price: 10000,
    image:
      "https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Short Trip",
    highlights: ["Giraffe Centre", "National Park", "Museum"],
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
];
