import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../css/SinglePage.css";
import CheckOut from "./CheckOut_Section/CheckOut";

const CheckOutPage  : React.FC = () => {
  return (
    <>
      <Header />
      <CheckOut/>
      <FooterTop />
      <Footer />
    </>
  );
};

export default CheckOutPage;
