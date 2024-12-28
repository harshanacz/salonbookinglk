import React from "react";
import UserNavbar from "@/components/UserNavbar/UserNavbar";
import Header from "@/components/HomePage/HeroSection/HeroSection";

const Home: React.FC = () => {
  return (
    <div>
      <UserNavbar />
      <main style={{ padding: "1rem" }}>
        <Header/>
      </main>
    </div>
  );
};

export default Home;