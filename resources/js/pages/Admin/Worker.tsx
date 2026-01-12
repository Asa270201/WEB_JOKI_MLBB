import React from "react";
import Sidebar from "@/pages/Admin/Component/Sidebar";
import Navbar from "@/pages/Admin/Component/Navbar";
import FooterTop from "@/pages/Landing_Sections/FooterTop";
import Footer from "@/pages/Landing_Sections/Footer";
import "../../../css/Admin/Worker.css";

interface Worker {
  name: string;
  username: string;
  rank: string;
  role: string;
  status: "online" | "offline";
}

const workers: Worker[] = [
  { name: "Alice", username: "alice01", rank: "Diamond", role: "Moderator", status: "online" },
  { name: "Bob", username: "bob_dev", rank: "Platinum", role: "Developer", status: "online" },
  { name: "Charlie", username: "charlieX", rank: "Gold", role: "Support", status: "offline" },
  { name: "Diana", username: "dianaPro", rank: "Master", role: "Admin", status: "online" },
  { name: "Alice", username: "alice01", rank: "Diamond", role: "Moderator", status: "online" },
  { name: "Bob", username: "bob_dev", rank: "Platinum", role: "Developer", status: "online" },
  { name: "Charlie", username: "charlieX", rank: "Gold", role: "Support", status: "offline" },
  { name: "Diana", username: "dianaPro", rank: "Master", role: "Admin", status: "online" },
];

const Worker: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // maksimal 4x2

  // Hitung index card yang ditampilkan
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentWorkers = workers.slice(indexOfFirstCard, indexOfLastCard);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(workers.length / cardsPerPage);

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        {/* Worker Cards */}
        <div className="content-row">
          <div className="worker-grid">
            {currentWorkers.map((worker) => (
              <div key={worker.username} className="worker-card">
                <h2 className="worker-name">{worker.name}</h2>
                <p className="worker-username">@{worker.username}</p>
                <p className="worker-rank">🏆 Rank: {worker.rank}</p>
                <p className="worker-role">🎭 Role: {worker.role}</p>
                <p className={`worker-status ${worker.status}`}>
                  {worker.status === "online" ? "🟢 Online" : "🔴 Offline"}
                </p>

                {/* Action Buttons */}
                <div className="worker-actions">
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

        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};


export default Worker;