import React from "react";

const TestBootstrap: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">
        🚀 Bootstrap + React + TSX Test Page
      </h1>

      {/* Grid system */}
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Ini contoh card Bootstrap.</p>
              <button className="btn btn-primary">Klik Saya</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Bootstrap mendukung grid system.</p>
              <button className="btn btn-success">Aksi</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">React + TSX bisa pakai className.</p>
              <button className="btn btn-danger">Hapus</button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="alert alert-warning mt-4" role="alert">
        Ini contoh alert Bootstrap!
      </div>
    </div>
  );
};

export default TestBootstrap;
