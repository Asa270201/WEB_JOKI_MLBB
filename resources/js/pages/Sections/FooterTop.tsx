import React from "react";
import "../../../css/FooterTop.css"; // pastikan file CSS sesuai

const FooterTop: React.FC = () => {
  return (
    <section className="footer-top-section">
      <div className="container">
        <div className="footer-top-bg">
          <img src="/template/game-warrior-gh-pages/img/footer-top-bg.png" alt="footer background" />
        </div>
        <div className="row">
          {/* Logo & Description */}
          <div className="col-lg-4">
            <div className="footer-logo text-white">
              <img src="/template/game-warrior-gh-pages/img/footer-logo.png" alt="footer logo" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget mb-5 mb-md-0">
              <h4 className="fw-title">Team</h4>
              <div className="latest-blog">
                {[
                  { img: "/template/game-warrior-gh-pages/img/latest-blog/1.jpg", date: "June 21, 2018" },
                  { img: "/template/game-warrior-gh-pages/img/latest-blog/2.jpg", date: "June 21, 2018" },
                  { img: "/template/game-warrior-gh-pages/img/latest-blog/3.jpg", date: "June 21, 2018" },
                ].map((post, index) => (
                  <div className="lb-item" key={index}>
                    <div
                      className="lb-thumb"
                      style={{
                        backgroundImage: `url('${post.img}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="lb-content">
                      <div className="lb-date">{post.date}</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum</p>
                      <a href="#" className="lb-author">By Admin</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Comments */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="fw-title">Top Cust</h4>
              <div className="top-comment">
                {[
                  { img: "/template/game-warrior-gh-pages/img/authors/1.jpg", name: "James Smith", date: "June 21, 2018" },
                  { img: "/template/game-warrior-gh-pages/img/authors/2.jpg", name: "James Smith", date: "June 21, 2018" },
                  { img: "/template/game-warrior-gh-pages/img/authors/3.jpg", name: "James Smith", date: "June 21, 2018" },
                  { img: "/template/game-warrior-gh-pages/img/authors/4.jpg", name: "James Smith", date: "June 21, 2018" },
                ].map((comment, index) => (
                  <div className="tc-item" key={index}>
                    <div
                      className="tc-thumb"
                      style={{
                        backgroundImage: `url('${comment.img}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="tc-content">
                      <p>
                        <a href="#">{comment.name}</a> <span>on</span> Lorem ipsum dolor sit amet, co
                      </p>
                      <div className="tc-date">{comment.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
