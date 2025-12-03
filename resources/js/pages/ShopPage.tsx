import React from "react"; 
import Header from "@/pages/Landing_Sections/Header";
import Sidebar from "@/pages/Shop_Sections/Sidebar";
import Sortby from "@/pages/Shop_Sections/Sortby";
import Product from "@/pages/Shop_Sections/Product"; // import Product.tsx
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";

const ShopPage: React.FC = () => {
  return (
    <>
      <Header />

      {/* WRAPPER LAYOUT */}
      <div 
        style={{
          display: "flex", 
          gap: "30px", 
          padding: "20px",
          alignItems: "flex-start",
          minHeight: "100vh",
          backgroundColor: "#1c1c1c", // warna dasar charcoal
          backgroundImage: "url('/template/5262770.jpg')", // path dari public
          backgroundRepeat: "repeat", // ulangi pattern
          backgroundAttachment: "fixed", // tetap saat scroll
        }}
      >
        {/* SIDEBAR */}
        <div style={{ width: "260px", flexShrink: 0 }}>
          <Sidebar />
        </div>

        {/* AREA KANAN */}
        <div style={{ flex: 1 }}>
          <Sortby />

          {/* Produk grid */}
          <div style={{ marginTop: "20px" }}>
            <Product />
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </>
  );
};

export default ShopPage;
