import React from "react";
import "../../../css/PageInfoSection.css";

const PageInfoSection: React.FC = () => {
  return (
    <section
      className="page-info-section set-bg"
      style={{ backgroundImage: "url('/template/game-warrior-gh-pages/img/page-top-bg/5.jpg')" }}
    >
      <div className="pi-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 text-white">
              <h2>Video Gallery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageInfoSection;
