import React from "react";
import Header from "@/pages/Sections/Header";
import Hero from "@/pages/Sections/Hero";
import TopCust from "@/pages/Sections/Topcust"; 
import Features from "@/pages/Sections/Features";
import FooterTop from "@/pages/Sections/FooterTop";
import Footer from "@/pages/Sections/Footer";


const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <TopCust />
      <Hero />
      <Features />
      <FooterTop />
      <Footer />
    </>
  );
};

export default LandingPage;
