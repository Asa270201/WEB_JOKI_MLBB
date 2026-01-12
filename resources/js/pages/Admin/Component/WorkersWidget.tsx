import React from "react";
import "../../../../css/Admin/GamingWidget.css";

const WorkersWidget: React.FC = () => {
  const workersOnline = [
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
    { name: "Alice", status: "online" },
    { name: "Bob", status: "online" },
    { name: "Charlie", status: "offline" },
  ];

  return (
    <div className="gaming-widget workers-widget">
      <h2 className="widget-title">Workers Online</h2>
      <ul className="workers-list">
        {workersOnline.map((worker, index) => (
          <li key={index} className="worker-item">
            <span
              className={`status-dot ${
                worker.status === "online" ? "online" : "offline"
              }`}
            ></span>
            {worker.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkersWidget;