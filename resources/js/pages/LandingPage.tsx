import React from "react";
import Header from "@/pages/Landing_Sections/Header";
import Hero from "@/pages/Landing_Sections/Hero";
import TopCust from "@/pages/Landing_Sections/TopCust"; 
import Features from "@/pages/Landing_Sections/Features";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1c1c1c", // charcoal gelap
        backgroundImage: "url('/template/5262770.jpg')", // path dari public/template
        backgroundRepeat: "repeat", // ulangi pattern
        backgroundAttachment: "fixed", // tetap saat scroll
      }}
    >
      <Header />
      <TopCust />
      <Hero />
      <Features />
      <FooterTop />
      <Footer />
    </div>
  );
};

export default LandingPage;
