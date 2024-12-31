import React from "react";
import UserNavbar from "@/components/UserNavbar/UserNavbar";
import Header from "@/components/HomePage/HeroSection/HeroSection";
import SalonServiceCard from "@/components/HomePage/SalonServiceCard/SalonServiceCard";
import PromotionalBanner from "@/components/HomePage/PromotionalBanner/PromotionalBanner";
import BannerCard from "@/components/HomePage/BannerCard/BannerCard";

const Home: React.FC = () => {
  const services = [
    {
      id: 1,
      imageSrc: "/images/Services/1.png",
      salonName: "Salon Amandi",
      profileImg: "/images/Services/1.png",
      rating: 4.9,
      reviewCount: 325,
      serviceDescription: "Custom Hair Coloring And Highlights for all hair types",
      price: "Rs. 620",
      location: "Katubedda, Galle Road"
    },
    {
      id: 2,
      imageSrc: "/images/Services/2.png",
      salonName: "Salon Bella",
      profileImg: "/images/Services/2.png",
      rating: 4.7,
      reviewCount: 150,
      serviceDescription: "Nail Art and Extensions - Full Set Acrylic",
      price: "Rs. 450",
      location: "Colombo 7"
    },
    {
      id: 3,
      imageSrc: "/images/Services/3.png",
      salonName: "Salon Ceylon",
      profileImg: "/images/Services/1.png",
      rating: 4.8,
      reviewCount: 200,
      serviceDescription: "Haircut and Styling for all occasions and types",
      price: "Rs. 300",
      location: "Nugegoda"
    },
    {
      id: 4,
      imageSrc: "/images/Services/1.png",
      salonName: "Salon Luxe",
      profileImg: "/images/Services/2.png",
      rating: 4.9,
      reviewCount: 320,
      serviceDescription: "Classic Haircuts and Beard Styling for Men",
      price: "Rs. 550",
      location: "Colombo 3"
    },
    {
      id: 5,
      imageSrc: "/images/Services/2.png",
      salonName: "Salon Elegant",
      profileImg: "/images/Services/3.png",
      rating: 4.7,
      reviewCount: 180,
      serviceDescription: "Nail Extensions and Spa Treatment",
      price: "Rs. 400",
      location: "Mount Lavinia"
    },
    {
      id: 6,
      imageSrc: "/images/Services/3.png",
      salonName: "Salon Glow",
      profileImg: "/images/Services/1.png",
      rating: 4.8,
      reviewCount: 250,
      serviceDescription: "Facials and Skin Care for Smooth Glowing Skin",
      price: "Rs. 700",
      location: "Kollupitiya"
    },
    {
      id: 7,
      imageSrc: "/images/Services/2.png",
      salonName: "Salon Aura",
      profileImg: "/images/Services/3.png",
      rating: 4.9,
      reviewCount: 300,
      serviceDescription: "Bridal Makeup and Hairstyling for Special Events",
      price: "Rs. 1200",
      location: "Fort, Colombo"
    },
    {
      id: 8,
      imageSrc: "/images/Services/1.png",
      salonName: "Salon Essence",
      profileImg: "/images/Services/2.png",
      rating: 4.6,
      reviewCount: 100,
      serviceDescription: "Makeup and Styling for All Occasions",
      price: "Rs. 550",
      location: "Moratuwa"
    }
  ];

  return (
    <div>
      <UserNavbar />
      <main style={{ padding: "1rem" }}>
        <Header />
        <h2 className="text-2xl font-semibold text-[var(--blackColor)] mt-8">
          Popular Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <SalonServiceCard key={service.id} {...service} />
          ))}
        </div>
        <PromotionalBanner />

        {/* Add BannerCard Layout */}
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <BannerCard />
          <BannerCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
