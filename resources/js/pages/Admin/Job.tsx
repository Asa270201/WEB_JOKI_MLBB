import React, { useState } from "react";
import Sidebar from "@/pages/Admin/Component/Sidebar";
import Navbar from "@/pages/Admin/Component/Navbar";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../../css/Admin/Job.css";

interface Job {
  client: string;
  username: string;
  currentRank: string;
  targetRank: string;
  role: string;
  request: string;
  status: "taken" | "available";
}

const jobs: Job[] = [
  { client: "Alice", username: "alice01", currentRank: "Gold", targetRank: "Diamond", role: "Moderator", request: "Boosting", status: "taken" },
  { client: "Bob", username: "bob_dev", currentRank: "Silver", targetRank: "Platinum", role: "Developer", request: "Coaching", status: "available" },
  { client: "Charlie", username: "charlieX", currentRank: "Bronze", targetRank: "Gold", role: "Support", request: "Rank Up", status: "taken" },
  { client: "Diana", username: "dianaPro", currentRank: "Platinum", targetRank: "Master", role: "Admin", request: "Carry", status: "available" },
  { client: "Eve", username: "eveElite", currentRank: "Gold", targetRank: "Master", role: "Moderator", request: "Boosting", status: "available" },
  { client: "Frank", username: "frankDev", currentRank: "Silver", targetRank: "Diamond", role: "Developer", request: "Coaching", status: "taken" },
  { client: "Grace", username: "graceX", currentRank: "Bronze", targetRank: "Platinum", role: "Support", request: "Rank Up", status: "available" },
  { client: "Henry", username: "henryPro", currentRank: "Platinum", targetRank: "Master", role: "Admin", request: "Carry", status: "taken" },
];

const Job: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // maksimal 4x2

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentJobs = jobs.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(jobs.length / cardsPerPage);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        {/* Job Cards */}
        <div className="content-row">
          <div className="job-grid">
            {currentJobs.map((job) => (
              <div key={job.username} className="job-card">
                <h2 className="job-client">{job.client}</h2>
                <p className="job-username">@{job.username}</p>
                <p className="job-rank">🎯 Current: {job.currentRank}</p>
                <p className="job-target">🚀 Target: {job.targetRank}</p>
                <p className="job-role">🎭 Role: {job.role}</p>
                <p className="job-request">📌 Request: {job.request}</p>
                <p className={`job-status ${job.status}`}>
                  {job.status === "taken" ? "🔒 Taken" : "✅ Available"}
                </p>

                {/* Action Buttons */}
                <div className="job-actions">
                  <button className="btn-info">ℹ Info</button>
                  <button className="btn-edit">✏ Edit</button>
                  <button className="btn-delete">🗑 Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Job;