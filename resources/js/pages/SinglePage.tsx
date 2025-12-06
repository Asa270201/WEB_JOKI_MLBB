import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import Sidebar from "@/pages/Shop_Sections/Sidebar";
import SingleProduct from "@/pages/Single_Section/SingleProduct";
import RelatedProduct from "@/pages/Single_Section/RelatedProduct";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../css/SinglePage.css";

const SinglePage: React.FC = () => {
  return (
    <>
      <Header />

      {/* WRAPPER LAYOUT */}
      <div className="singlepage-wrapper">
        {/* SIDEBAR */}
        <div className="singlepage-sidebar">
          <Sidebar />
        </div>

        {/* Produk grid */}
        <div className="singlepage-content">
          <SingleProduct />
          <RelatedProduct />
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default SinglePage;
