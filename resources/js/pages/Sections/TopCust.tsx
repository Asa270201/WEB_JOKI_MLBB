import React from "react";
import "../../../css/TopCust.css"; 

const TopCust: React.FC = () => {
  return (
    <div className="top-cust-section">
      <div className="tc-title">Top Customer</div>
      <div className="cust-ticker">
        <div className="cust-ticker-content one-line">
          <div className="tc-item">
            <span className="vip">vip</span> Akbar - langganan joki Mythic tiap season, fast response & puas banget!
          </div>
          <div className="tc-item">
            <span className="regular">regular</span> Dinda - joki Epic ke Legend 3 hari, aman dan terpercaya.
          </div>
          <div className="tc-item">
            <span className="promo">promo</span> Budi - joki turnamen weekend, dapet diskon dan skin bonus!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCust;
