import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../css/SinglePage.css";
import Payment from "@/pages/Payment_Section/Payment";

const PaymentPage: React.FC = () => {
  return (
    <>
      <Header />
      <Payment/>
      <FooterTop />
      <Footer />
    </>
  );
};

export default PaymentPage;
