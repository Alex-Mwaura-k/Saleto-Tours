export const destinationsData = [
  {
    id: 1,
    slug: "diani-beach",
    title: "Diani Beach",
    coverImage: "/img/destinations/diani/1.jpg", 
    images: [
      "/img/destinations/diani/1.jpg",
      "/img/destinations/diani/2.jpg",
      "/img/destinations/diani/3.jpg",
      "/img/destinations/diani/4.jpg",
      "/img/destinations/diani/5.jpg",
      "/img/destinations/diani/6.jpg"
    ],
    description: "Diani Beach is a world-renowned tropical paradise on Kenya's south coast, consistently voted Africa's Leading Beach Destination by the World Travel Awards. Spanning approximately 17–25 kilometres, it is famous for its powdery white sands, crystal-clear turquoise waters, and a vibrant coral reef that creates a calm, shallow lagoon perfect for swimming.",
    category: "Beach",
    isFeatured: true,
    price: 48500,
    topReasons: [
      {
        title: "Award-Winning Beauty",
        desc: "Ranked as the Best White Sand Beach in Africa and among the top five globally by various travel authorities."
      },
      {
        title: "Adventure Hub",
        desc: "A premier destination for water sports, including world-class kitesurfing, scuba diving, and skydiving with beach landings."
      },
      {
        title: "\"Beach and Bush\" Proximity",
        desc: "Located just one hour from Shimba Hills National Reserve and a three-hour drive from Tsavo National Park, allowing travelers to easily combine a beach holiday with a wildlife safari."
      },
      {
        title: "Marine Life",
        desc: "Home to Kisite-Mpunguti Marine Park, where visitors can swim with dolphins and see sea turtles, rays, and migratory whale sharks."
      }
    ],
    experiences: [
      {
        title: "Unique Dining",
        desc: "Enjoy a romantic dinner under the stars at Ali Barbour’s Cave Restaurant, situated inside a natural coral cave."
      },
      {
        title: "Cultural Heritage",
        desc: "Explore the sacred Kaya Kinondo Forest or the historic Shimoni Slave Caves to learn about local Swahili traditions and coastal history."
      },
      {
        title: "Island Day Trips",
        desc: "Take a traditional dhow to Wasini Island for sandbank picnics and snorkeling."
      }
    ],
    travelerInfo: {
      accessibility: "Easily reached via daily direct flights from Nairobi to Ukunda Airstrip (15 mins from the beach) or by road/ferry from Mombasa.",
      bestTime: "The dry seasons from December to March and June to September offer the best weather and underwater visibility.",
      vibe: "It strikes a perfect balance between secluded luxury resorts and a laid-back tourist town with diverse boutiques, bars, and restaurants."
    }
  },
  {
    id: 2,
    slug: "mombasa",
    title: "Mombasa",
    coverImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Mombasa is a vibrant coastal city steeped in history. From the ancient walls of Fort Jesus to the bustling spice markets of Old Town, it offers a rich blend of Swahili culture, warm Indian Ocean waters, and beautiful pristine beaches.",
    category: "Beach",
    isFeatured: true,
    price: 57000,
    highlights: [
      "Fort Jesus Tour",
      "Old Town Walk",
      "Haller Park Nature Walk",
      "Authentic Swahili Cuisine",
    ],
    images: ["https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: 3,
    slug: "watamu",
    title: "Watamu",
    coverImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Watamu is a peaceful coastal town renowned for the Watamu Marine National Park. It is a spectacular haven for green sea turtles, colorful coral gardens, and the mysterious 12th-century Gedi Ruins hidden within the lush Arabuko Sokoke Forest.",
    category: "Beach",
    isFeatured: true,
    price: 30000,
    highlights: [
      "Marine National Park",
      "Gedi Ruins Exploration",
      "Sea Turtle Watching",
      "Arabuko Sokoke Forest",
    ],
    images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: 4,
    slug: "lamu",
    title: "Lamu",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Lamu is a UNESCO World Heritage site and the oldest continually inhabited town in Kenya. With no cars on the island, life moves at the gentle pace of a dhow sailing on the breeze amidst narrow winding streets and stunning traditional Swahili architecture.",
    category: "Beach",
    isFeatured: false,
    price: 28000,
    highlights: [
      "UNESCO World Heritage Site",
      "Sunset Dhow Sailing",
      "Traditional Swahili Architecture",
      "Shela Beach Walk",
    ],
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: 5,
    slug: "malindi",
    title: "Malindi",
    coverImage: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Malindi offers a unique blend of historic charm and modern resort lifestyle. Known for the Vasco da Gama pillar and beautiful marine parks, it is a fantastic destination for deep-sea fishing, surfing, and enjoying a vibrant mix of local and Italian cultures.",
    category: "Beach",
    isFeatured: false,
    price: 40000,
    highlights: [
      "Vasco da Gama Pillar",
      "Malindi Marine Park",
      "Deep Sea Fishing",
      "Marafa Hell's Kitchen",
    ],
    images: ["https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: 6,
    slug: "lake-nakuru",
    title: "Lake Nakuru",
    coverImage: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Lake Nakuru is a spectacular Rift Valley soda lake at an elevation of 1,754 m above sea level. Protected by Lake Nakuru National Park, it is globally famous as a birdwatcher's paradise and a highly successful sanctuary for both endangered black and white rhinos.",
    category: "Lake",
    isFeatured: false,
    price: 25000,
    highlights: [
      "Flamingos & Bird Watching",
      "Rhino Sanctuary",
      "Baboon Cliff Viewpoint",
      "Makalia Falls",
    ],
    images: ["https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
  },
];