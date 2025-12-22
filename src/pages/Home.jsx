import React from "react";
import Hero from "../components/Hero";
import FeaturedSafaris from "../components/FeaturedSafaris";

const Home = () => {
  const mockPackages = [
    {
      id: 1,
      title: "Maasai Mara Migration",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days / 2 Nights",
      price: "Ksh 65,000",
      location: "Maasai Mara",
      description:
        "Witness the Great Migration, one of the wonders of the world. Experience thrilling game drives and luxury camping under the stars.",
    },
    {
      id: 2,
      title: "Amboseli National",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2 Days / 1 Night",
      price: "Ksh 45,000",
      location: "Amboseli Park",
      description:
        "Famous for its large herds of elephants and stunning views of Mount Kilimanjaro. A perfect short getaway for nature lovers.",
    },
    {
      id: 3,
      title: "Samburu Wilderness",
      image:
        "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4 Days / 3 Nights",
      price: "Ksh 85,000",
      location: "Samburu",
      description:
        "Explore the rugged north and see the 'Special Five' unique to this region. A true wilderness experience away from the crowds.",
    },
    {
      id: 4,
      title: "Tsavo East Adventure",
      image: "https://picsum.photos/id/1018/800/600",
      duration: "3 Days / 2 Nights",
      price: "Ksh 55,000",
      location: "Tsavo East",
      description:
        "Discover the red elephants of Tsavo and the vast Yatta Plateau. One of the largest and oldest parks in Kenya with diverse wildlife.",
    },
  ];

  return (
    <div>
      <Hero
        title="Going Beyond the Maps"
        subtitle="From the Maasai Mara to the Coast, discover the ultimate safari adventures."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <FeaturedSafaris packages={mockPackages} />
    </div>
  );
};

export default Home;
