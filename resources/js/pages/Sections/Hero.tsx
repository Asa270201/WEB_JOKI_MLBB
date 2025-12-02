import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Selamat Datang di MyApp</h1>
        <p className="lead">Solusi modern untuk kebutuhan digital Anda.</p>
        <a href="#" className="btn btn-light btn-lg mt-3">Mulai Sekarang</a>
      </div>
    </section>
  );
};

export default Hero;
