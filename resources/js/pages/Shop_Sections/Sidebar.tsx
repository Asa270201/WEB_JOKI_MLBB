import React, { useState } from "react";
import "../../../css/Sidebar.css"; // pastikan file CSS sesuai

const Sidebar: React.FC = () => {
  const [price, setPrice] = useState(0);

  return (
    <div className="sidebar">
      {/* Product Categories */}
      <div className="product-categories mb-4">
        <h4>Products Categories</h4>
        <ul className="list-unstyled">
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Joki Akun
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Mabar VIP
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Joki Gendong
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Mainin Akun
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Rank VS BOT Flex
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Rank VS BOT No Flex
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Akun VS BOT No Flex
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Akun VS BOT No Flex
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> RW DK
              </a>
            </div>
          </li>
          <li>
            <div className="categories-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> Akun Mobile Legend
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="price mb-4">
        <h4 className="mb-2">Price</h4>
        <input
          type="range"
          className="form-range w-100"
          id="rangeInput"
          name="rangeInput"
          min={0}
          max={500}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <output id="amount" name="amount">{price}</output>
      </div>

      {/* Select By Rank */}
      <div className="product-color mb-3">
        <h4>Select By Rank</h4>
        <ul className="list-unstyled">
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> EPIC
              </a>
            </div>
          </li>
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> LEGEND
              </a>
            </div>
          </li>
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> MYTHIC
              </a>
            </div>
          </li>
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> MYTHIC HONOR
              </a>
            </div>
          </li>
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> MYTHIC GLORY
              </a>
            </div>
          </li>
          <li>
            <div className="product-color-item">
              <a href="#" className="text-dark">
                <i className="fa-solid fa-circle-dot"></i> MYTHIC IMMORTAL
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
