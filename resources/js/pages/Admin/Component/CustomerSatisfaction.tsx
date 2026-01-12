import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../../../../css/Admin/GamingWidget.css";

const data = [
  { name: "Extremely Satisfied", value: 35.5 },
  { name: "Satisfied", value: 21.5 },
  { name: "Poor", value: 16.1 },
  { name: "Very Poor", value: 26.9 },
];

const COLORS = ["#ff6600", "#ffcc00", "#ff3366", "#9933ff"];

const CustomerSatisfactionWidget: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="gaming-widget">
      <h2 className="widget-title">Customer Satisfaction</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                style={{
                  transform: activeIndex === index ? "scale(1.08)" : "scale(1)",
                  transformOrigin: "center",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                  filter:
                    activeIndex === index
                      ? "drop-shadow(0 0 12px rgba(255, 179, 0, 0.9))"
                      : "drop-shadow(0 0 4px rgba(255, 179, 0, 0.4))",
                }}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerSatisfactionWidget;