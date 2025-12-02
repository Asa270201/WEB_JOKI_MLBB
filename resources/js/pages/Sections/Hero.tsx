import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../../css/hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            className="hs-item"
            style={{
              backgroundImage: "url('/template/game-warrior-gh-pages/img/slider-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="hs-text w-100 text-center text-white">
              <div className="container">
                <h2>
                  The Best <span>Games</span> Out There
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque sint aliquam impedit? Officiis numquam nisi, minima facere recusandae quae, doloribus dolores saepe nam maxime perferendis ratione fuga modi voluptas.</p>
                <a href="#" className="site-btn">Read More</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hs-item"
            style={{
              backgroundImage: "url('/template/game-warrior-gh-pages/img/slider-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="hs-text w-100 text-center text-white">
              <div className="container">
                <h2>
                  The Best <span>Games</span> Out There
                </h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <a href="#" className="site-btn">Read More</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
