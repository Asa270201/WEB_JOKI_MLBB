import React from "react";
import "../../../css/SingleProduct.css";

const SingleProduct: React.FC = () => {
  return (
    <div className="single-product-wrapper col-lg-7 col-xl-9 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-4 single-product align-items-center">
        {/* Gambar Produk */}
        <div className="col-xl-6">
          <div className="single-inner">
            <img
              src="/template/Electro-Bootstrap-1.0.0/img/product-4.png"
              className="img-fluid rounded"
              alt="Smart Camera"
            />
          </div>
        </div>

        {/* Info Produk */}
        <div className="col-xl-6 product-info">
          <h4 className="fw-bold mb-3 product-title">Smart Camera</h4>
          <p className="mb-2 product-category">Category: Electronics</p>
          <h5 className="fw-bold mb-3 product-price">3,35 $</h5>

          {/* Rating */}
          <div className="d-flex mb-3 stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>

          <div className="d-flex flex-column mb-3 product-meta">
            <small>Product SKU: N/A</small>
            <small>
              Available: <strong className="text-primary">20 items in stock</strong>
            </small>
          </div>

          {/* Quantity */}
          <div className="input-group quantity mb-4">
            <div className="input-group-btn">
              <button className="btn btn-sm btn-minus rounded-circle">
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm text-center quantity-input"
              value="1"
              readOnly
            />
            <div className="input-group-btn">
              <button className="btn btn-sm btn-plus rounded-circle">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <a href="#" className="btn-cart-gaming-single mb-4 cart">
            <i className="fa fa-shopping-bag me-2"></i> Add to cart
          </a>

          {/* Deskripsi */}
          <p className="mb-3 mt-8 product-description">
            Our new <b className="fw-bold">HPB12 / A12 battery</b> is rated at 2000mAh and designed to power up
            Black and Decker / FireStorm line of 12V tools allowing users to run multiple devices off the same battery pack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
