import React from "react";
import "../../../../css/Admin/GamingWidget.css";

interface StatCardProps {
  title: string;
  value: string | number;
  color: string; // warna neon utama
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color, icon }) => {
  return (
    <div className="stat-card" style={{ borderColor: color, boxShadow: `0 0 15px ${color}` }}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-value" style={{ color }}>{value}</div>
      <div className="stat-title">{title}</div>
    </div>
  );
};

export default StatCard;