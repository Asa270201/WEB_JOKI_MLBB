import React from "react";
import StatCard from "@/pages/Admin/Component/StatCard";
import { FaMoneyBillWave, FaShoppingCart, FaTags, FaBoxOpen } from "react-icons/fa";

const StatsWidget: React.FC = () => {
  return (
    <div className="stats-row">
      <StatCard title="Total Profit" value="$1,783" color="#ff6600" icon={<FaMoneyBillWave />} />
      <StatCard title="Total Orders" value="15,830" color="#ffcc00" icon={<FaShoppingCart />} />
      <StatCard title="Average Price" value="$6,780" color="#00ffcc" icon={<FaTags />} />
      <StatCard title="Product Sold" value="6,784" color="#9933ff" icon={<FaBoxOpen />} />
    </div>
  );
};

export default StatsWidget;