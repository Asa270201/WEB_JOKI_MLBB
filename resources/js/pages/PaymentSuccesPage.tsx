import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../css/SinglePage.css";
import PaymentSucces from "./PaymentSucces_Section/PaymentSucces";

const PaymentSuccesPage: React.FC = () => {
  return (
    <>
      <Header />
      <PaymentSucces/>
      <FooterTop />
      <Footer />
    </>
  );
};

export default PaymentSuccesPage;