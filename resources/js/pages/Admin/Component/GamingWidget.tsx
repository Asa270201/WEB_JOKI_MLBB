import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../../../../css/Admin/GamingWidget.css"; 

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 500 },
  { name: "May", value: 700 },
];

const GamingWidget: React.FC = () => {
  return (
    <motion.div
      className="gaming-widget"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="widget-title">Revenue Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ffb300" />
          <YAxis stroke="#ffb300" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#ff6600" strokeWidth={3} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default GamingWidget;