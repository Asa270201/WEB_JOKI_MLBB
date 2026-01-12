import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../../../../css/Admin/GamingWidget.css";

const data = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 150 },
  { day: "Wed", visitors: 180 },
  { day: "Thu", visitors: 90 },
  { day: "Fri", visitors: 200 },
  { day: "Sat", visitors: 250 },
  { day: "Sun", visitors: 170 },
];

const VisitorsChartWidget: React.FC = () => {
  return (
    <div className="gaming-widget">
      <h2 className="widget-title">Daily Visitors</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="day" stroke="#ffb300" />
          <YAxis stroke="#ffb300" />
          <Tooltip />
          <Bar
            dataKey="visitors"
            fill="#ff6600"
            radius={[6, 6, 0, 0]}
            animationDuration={400}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorsChartWidget;