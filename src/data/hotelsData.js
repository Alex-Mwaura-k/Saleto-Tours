export const hotelsData = [
  {
    id: 1,
    name: "Mara Serena Safari Lodge",
    location: "Maasai Mara National Reserve",
    category: "Luxury",
    rating: 5,
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview:
      "Perched on a high hill, the Mara Serena Safari Lodge offers a front-row seat to the Great Migration. Designed to mimic a traditional Maasai Manyatta, the lodge blends seamlessly into the landscape while offering 5-star luxury.",
    highlights: [
      "Located in the Mara Triangle (best for migration)",
      "Private airstrip",
      "Hippos view from the restaurant",
      "Guided bush walks available",
    ],
    amenities: [
      { category: "Internet", items: ["Free WiFi in all areas"] },
      {
        category: "Food & Drink",
        items: ["Restaurant", "Bar", "Breakfast in the room"],
      },
      {
        category: "Wellness",
        items: ["Spa", "Fitness Center", "Outdoor Pool"],
      },
      {
        category: "General",
        items: ["Non-smoking rooms", "Air conditioning", "Gift shop"],
      },
    ],
    rooms: [
      {
        name: "Standard Room",
        price: 45000,
        features: ["King Bed", "Savannah View", "En-suite"],
      },
      {
        name: "Suite",
        price: 65000,
        features: ["Living Area", "Panoramic View", "Mini Bar"],
      },
    ],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free cancellation up to 48 hours before check-in.",
      pets: "Pets are not allowed.",
    },
  },
  {
    id: 2,
    name: "Diani Reef Beach Resort",
    location: "Diani Beach, Ukunda",
    category: "Beach",
    rating: 4,
    price: 28500,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-68c47e0820df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview:
      "Set on the white sands of Diani Beach, this resort features 30 acres of private gardens and two swimming pools. It is a perfect getaway for families and honeymooners alike.",
    highlights: [
      "Direct Beach Access",
      "Award-winning Spa",
      "3 Restaurants on-site",
    ],
    amenities: [
      { category: "Outdoors", items: ["Beachfront", "Garden", "Terrace"] },
      {
        category: "Activities",
        items: ["Tennis court", "Water sports", "Kids club"],
      },
      { category: "Services", items: ["Room service", "24-hour front desk"] },
    ],
    rooms: [
      {
        name: "Garden Room",
        price: 28500,
        features: ["Garden View", "Balcony", "AC"],
      },
      {
        name: "Ocean Suite",
        price: 42000,
        features: ["Ocean View", "Jacuzzi", "Lounge Access"],
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Non-refundable booking.",
      pets: "Pets allowed on request.",
    },
  },
  // ... Add similar detailed fields for other hotels if needed
  {
    id: 3,
    name: "Sarova Stanley",
    location: "Nairobi City",
    category: "City",
    rating: 5,
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview: "A historic gem in the heart of Nairobi.",
    highlights: ["City Center", "Heated Pool", "Historic"],
    amenities: [{ category: "General", items: ["WiFi", "Gym"] }],
    rooms: [{ name: "Club Room", price: 18000, features: ["City View"] }],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free",
      pets: "No",
    },
  },
  {
    id: 4,
    name: "Amboseli Sopa Lodge",
    location: "Amboseli National Park",
    category: "Safari",
    rating: 4,
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview: "Rustic charm at the foot of Kilimanjaro.",
    highlights: ["Mt Kilimanjaro Views", "Large Gardens"],
    amenities: [{ category: "General", items: ["WiFi", "Pool"] }],
    rooms: [{ name: "Standard", price: 32000, features: ["Mountain View"] }],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free",
      pets: "No",
    },
  },
  {
    id: 5,
    name: "Hemingways Watamu",
    location: "Watamu",
    category: "Luxury",
    rating: 5,
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview: "5-star luxury with breathtaking ocean views.",
    highlights: ["Marine Park", "Spa"],
    amenities: [{ category: "General", items: ["WiFi", "Pool"] }],
    rooms: [{ name: "Ocean Room", price: 55000, features: ["Ocean View"] }],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free",
      pets: "No",
    },
  },
  {
    id: 6,
    name: "Fairmont Mount Kenya",
    location: "Nanyuki",
    category: "Luxury",
    rating: 5,
    price: 40000,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    overview: "Prestigious club on the slopes of Mount Kenya.",
    highlights: ["Golf Course", "Animal Orphanage"],
    amenities: [{ category: "General", items: ["WiFi", "Golf"] }],
    rooms: [{ name: "Standard", price: 40000, features: ["Garden View"] }],
    policies: {
      checkIn: "12:00 PM",
      checkOut: "10:00 AM",
      cancellation: "Free",
      pets: "No",
    },
  },
];
