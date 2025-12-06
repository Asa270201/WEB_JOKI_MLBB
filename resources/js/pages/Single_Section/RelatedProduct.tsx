import React, { useRef } from "react";
import "../../../css/RelatedProduct.css";

const RelatedProduct: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Batasi item hanya 4
 const productItems = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="container-fluid related-product">
      <div className="container">
        <div className="mx-auto text-center pb-4" style={{ maxWidth: "700px" }}>
          <h4 className="related-title wow fadeInUp" data-wow-delay="0.1s">
            Related Products
          </h4>
          <p className="wow fadeInUp explore" data-wow-delay="0.2s">
            Explore more items in our gaming collection with neon glow effects.
          </p>
        </div>

        {/* Scrollable Row */}
        <div className="related-scroll-wrapper" ref={scrollRef}>
          <div className="related-row d-flex flex-row gap-4">
            {productItems.map((item) => (
              <div className="related-item rounded" key={item}>
                <div className="related-item-inner">
                  <div className="related-item-inner-item position-relative">
                    <img
                      src="/template/Electro-Bootstrap-1.0.0/img/product-3.png"
                      className="img-fluid w-100 rounded-top"
                      alt="Product"
                    />
                    <div className="related-details">
                      <a href="#"><i className="fa fa-eye fa-1x"></i></a>
                    </div>
                  </div>
                  <div className="text-center rounded-bottom p-3">
                    <a href="#" className="d-block mb-2 related-category">SmartPhone</a>
                    <a href="#" className="d-block h5 related-name">Apple iPad Mini G2356</a>
                    <del className="me-2 fs-6">$1,250.00</del>
                    <span className="related-price">$1,050.00</span>
                  </div>
                </div>

                <div className="related-item-add text-center p-3">
                  <a href="#" className="btn-cart-gaming mb-3">
                    <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                  </a>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="actions d-flex gap-2">
                      <span className="icon-circle"><i className="fas fa-random"></i></span>
                      <span className="icon-circle"><i className="fas fa-heart"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Navigasi di bawah tengah */}
        <div className="scroll-controls text-center mt-4">
          <button className="scroll-btn me-3" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
