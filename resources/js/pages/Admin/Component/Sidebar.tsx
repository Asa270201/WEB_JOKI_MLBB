import React from "react";
import {
  FaHome,
  FaGamepad,
  FaPalette,
  FaAddressBook,
  FaVideo,
  FaUser,
  FaFileAlt,
  FaLayerGroup,
  FaBan,
} from "react-icons/fa";
import { Link } from "@inertiajs/react"; // ✅ Inertia Link
import "../../../../css/Admin/sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-dashboardkit">
      <div className="sidebar-logo">Dokter Alice</div>
      <ul className="sidebar-menu">
        <li>
          <Link href="/admin">
            <FaHome className="menu-icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/worker">
            <FaGamepad className="menu-icon" />
            <span>Worker</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/job">
            <FaPalette className="menu-icon" />
            <span>Job</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/laporan">
            <FaAddressBook className="menu-icon" />
            <span>Laporan</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/montage">
            <FaVideo className="menu-icon" />
            <span>Montage</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/user">
            <FaUser className="menu-icon" />
            <span>User</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/akun-bot">
            <FaFileAlt className="menu-icon" />
            <span>Akun Bot</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/jasa">
            <FaLayerGroup className="menu-icon" />
            <span>Jasa</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/disabled">
            <FaBan className="menu-icon" />
            <span>Disabled Menu</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer"></div>
    </aside>
  );
};

export default Sidebar;