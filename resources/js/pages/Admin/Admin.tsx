import React from "react";
import Sidebar from "@/pages/Admin/Component/Sidebar";
import Navbar from "@/pages/Admin/Component/Navbar";
import GamingWidget from "@/pages/Admin/Component/GamingWidget";
import CustomerSatisfactionWidget from "@/pages/Admin/Component/CustomerSatisfaction";
import VisitorsChartWidget from "@/pages/Admin/Component/VisitorsChartWidget";
import WorkersWidget from "@/pages/Admin/Component/WorkersWidget";
import StatsWidget from "@/pages/Admin/Component/StatsWidget";
import ProductSoldWidget from "@/pages/Admin/Component/ProductSoldWidget";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../../css/Admin/admin.css";
import "../../../css/Admin/GamingWidget.css";

const Admin: React.FC = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />

        {/* Row 1: Revenue + Satisfaction + Visitors */}
        <div className="content-row">
          <div className="content-wrapper">
            <GamingWidget />
          </div>
          <div className="content-wrapper customer-satisfaction-wrapper">
            <CustomerSatisfactionWidget />
          </div>
          <div className="content-wrapper visitors-wrapper">
            <VisitorsChartWidget />
          </div>
        </div>

        {/* Row 2: Workers + Stats */}
        <div className="content-row workers-stats-row">
          <div className="content-wrapper workers-wrapper">
            <WorkersWidget />
          </div>
          <div className="stats-column">
            <div className="stats-row">
              <StatsWidget />
            </div>
            <div className="product-sold-wrapper mt-3">
              <ProductSoldWidget />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Admin;