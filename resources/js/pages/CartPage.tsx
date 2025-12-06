import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import ShoppingCart from "@/pages/CartSection/ShoppingCart";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../css/SinglePage.css";

const SinglePage: React.FC = () => {
  return (
    <>
      <Header />
      <ShoppingCart/>
      <FooterTop />
      <Footer />
    </>
  );
};

export default SinglePage;
