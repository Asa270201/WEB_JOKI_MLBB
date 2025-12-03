import '@/../css/header.css';
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-section bg-dark text-white py-3">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a className="site-logo" href="/">
          <img src="/template/game-warrior-gh-pages/img/logo.png" alt="Logo" className="logo-img" />
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-switch btn btn-link text-orange d-md-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars fa-lg"></i>
        </button>

        {/* Site menu */}
        <nav className={`main-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-list flex-column gap-2 mb-0">
            <li><a href="/">Home</a></li>
            <li><a href="/shop ">Shop</a></li>
            <li><a href="categories.html">Blog</a></li>
            <li><a href="community.html">Forums</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>

        {/* User panel */}
        <div className="d-flex flex-column flex-md-row align-items-start gap-2">
            <a href="#" className="btn btn-sm btn-warning fw-bold w-100 w-md-auto">Login</a>
            <a href="#" className="btn btn-sm btn-outline-warning fw-bold w-100 w-md-auto">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
