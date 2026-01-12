import React from "react";
import "../../../../css/Admin/GamingWidget.css";

const products = [
  { name: "Gaming Mouse", category: "Accessories", sold: 1200, percent: 17 },
  { name: "Mechanical Keyboard", category: "Accessories", sold: 950, percent: 13 },
  { name: "Gaming Chair", category: "Furniture", sold: 680, percent: 9 },
  { name: "Monitor 144Hz", category: "Display", sold: 1450, percent: 20 },
  { name: "Headset RGB", category: "Audio", sold: 980, percent: 14 },
  { name: "Streaming Cam", category: "Camera", sold: 750, percent: 11 },
  { name: "LED Strip", category: "Lighting", sold: 600, percent: 8 },
  { name: "Others", category: "Misc", sold: 374, percent: 8 },
];

const ProductSoldWidget: React.FC = () => {
  return (
    <div className="gaming-widget">
      <h2 className="widget-title">Product Sold Breakdown</h2>
      <div className="product-table">
        <div className="product-header">
          <span>Product</span>
          <span>Category</span>
          <span>Sold</span>
          <span>%</span>
        </div>
        {products.map((item, index) => (
          <div key={index} className="product-row">
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>{item.sold}</span>
            <span>{item.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSoldWidget;