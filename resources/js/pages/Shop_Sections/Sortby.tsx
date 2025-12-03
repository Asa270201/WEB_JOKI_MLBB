import React from "react";
import "../../../css/SortBy.css"; // opsional, jika kamu ingin styling terpisah

const SortBy: React.FC = () => {
  return (
    <div className="row g-4 align-items-center">
      {/* Search Input */}
      <div className="col-xl-7">
        <div className="input-group w-100 mx-auto d-flex">
          <input
            type="search"
            className="form-control p-3"
            placeholder="keywords"
            aria-describedby="search-icon-1"
          />
          <span id="search-icon-1" className="input-group-text p-3">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="col-xl-3 text-end">
        <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between align-items-center">
          <label htmlFor="electronics" className="me-2 fw-bold text-dark">
            Sort By:
          </label>
          <select
            id="electronics"
            name="electronicslist"
            className="border-0 form-select-sm bg-light me-3"
          >
            <option value="default">Default Sorting</option>
            <option value="none">Nothing</option>
            <option value="popularity">Popularity</option>
            <option value="newness">Newness</option>
            <option value="rating">Average Rating</option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="col-lg-4 col-xl-2">
        <ul className="nav nav-pills view-toggle bg-dark rounded px-2 py-2">
        <li className="nav-item me-3">
            <a data-bs-toggle="pill" href="#grid-view">
            <i className="fas fa-th-large"></i> {/* grid 3x3 */}
            </a>
        </li>
        <li className="nav-item">
            <a data-bs-toggle="pill" href="#list-view">
            <i className="fas fa-bars"></i> {/* list horizontal */}
            </a>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default SortBy;
