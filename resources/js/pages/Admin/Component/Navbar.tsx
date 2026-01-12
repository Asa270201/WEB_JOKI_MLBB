import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import "../../../../css/Admin/navbar.css";;

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar-gaming">
      <div className="navbar-left">
        <span className="navbar-brand">Admin Dokter Alice</span>
      </div>

      <div className="navbar-right">
        <div className="profile-section" onClick={toggleDropdown}>
          <img
            src="/foto profile.jpeg" // ganti dengan path foto kamu
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-info">
            <span className="user-name">Akbar Pratama Asa</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>

        {dropdownOpen && (
          <div className="profile-dropdown">
            <ul>
              <li>
                <FaUser className="dropdown-icon" />
                <span>Profile</span>
              </li>
              <li>
                <FaSignOutAlt className="dropdown-icon" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;