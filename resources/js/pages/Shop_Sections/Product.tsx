import React, { useState } from "react";
import "../../../css/Product.css";

interface Product {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
}

const products: Product[] = [
  { id: 1, image: "/template/Electro-Bootstrap-1.0.0/img/product-3.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 2, image: "/template/Electro-Bootstrap-1.0.0/img/product-4.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 3, image: "/template/Electro-Bootstrap-1.0.0/img/product-5.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 4, image: "/template/Electro-Bootstrap-1.0.0/img/product-5.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 5, image: "/template/Electro-Bootstrap-1.0.0/img/product-5.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 6, image: "/template/Electro-Bootstrap-1.0.0/img/product-5.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 7, image: "/template/Electro-Bootstrap-1.0.0/img/product-3.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
  { id: 8, image: "/template/Electro-Bootstrap-1.0.0/img/product-3.png", title: "SmartPhone", subtitle: "Apple iPad Mini G2356", oldPrice: "$1,250.00", newPrice: "$1,050.00" },
];

const ProductCard: React.FC<Product> = ({ image, title, subtitle, oldPrice, newPrice }) => (
  <div className="col-lg-4 d-flex">
    <div className="product-card-gaming w-100 h-100">
      <div className="product-image">
        <img src={image} alt={title} />
        <span className="badge-new">⚡ NEW</span>
      </div>
      <div className="product-body">
        <h6 className="product-category">{title}</h6>
        <h4 className="product-title">{subtitle}</h4>
        <div className="product-price">
          <del>{oldPrice}</del>
          <span>{newPrice}</span>
        </div>
        <button className="btn-cart-gaming">
          <i className="fas fa-shopping-cart me-2"></i> Add To Cart
        </button>
        <div className="product-footer">
          <div className="stars">
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="actions">
            <span className="icon-circle-gaming"><i className="fas fa-random"></i></span>
            <span className="icon-circle-gaming"><i className="fas fa-heart"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Product: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="tab-content">
      <div id="tab-5" className="tab-pane fade show p-0 active">
        <div className="row g-4 product align-items-stretch">
          {currentProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination d-flex justify-content-center mt-4">
          <button
            className="btn btn-secondary me-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            « Prev
          </button>
          <span className="text-white mx-2">Page {currentPage} of {totalPages}</span>
          <button
            className="btn btn-secondary ms-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next »
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
