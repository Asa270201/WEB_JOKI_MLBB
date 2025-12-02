import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Fitur Unggulan</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cepat & Responsif</h5>
                <p className="card-text">Dibangun dengan teknologi modern untuk performa maksimal.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Desain Elegan</h5>
                <p className="card-text">UI yang bersih dan profesional untuk pengalaman pengguna terbaik.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Mudah Dikustomisasi</h5>
                <p className="card-text">Struktur modular memudahkan pengembangan dan pemeliharaan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
