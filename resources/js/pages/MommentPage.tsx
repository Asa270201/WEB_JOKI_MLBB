import React from "react";
import Header from "@/pages/Landing_Sections/Header";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import PageInfoSection from "./MommentSection/PageInfoSection";
import Montage from "./MommentSection/montage";

const MommentPage: React.FC = () => {
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
      <PageInfoSection />
      <Montage />
      <FooterTop />
      <Footer />
    </div>
  );
};

export default MommentPage;
