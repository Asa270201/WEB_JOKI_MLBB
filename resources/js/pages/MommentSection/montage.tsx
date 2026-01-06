import React from "react";
import "../../../css/Montage.css";

const Montage: React.FC = () => {
  return (
    <section className="page-section recent-game-page spad">
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="row">
              {/* Recent Game Items */}
              {[...Array(8)].map((_, i) => (
                <div className="col-md-6" key={i}>
                  <div className="recent-game-item">
                    <div
                      className="rgi-thumb set-bg"
                      style={{ backgroundImage: `url(img/recent-game/${i + 1}.jpg)` }}
                    >
                      <div className={`cata ${i % 2 === 0 ? "new" : "racing"}`}>
                        {i % 3 === 0 ? "Adventure" : "Racing"}
                      </div>
                    </div>
                    <div className="rgi-content">
                      <h5>Game Title {i + 1}</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        malesuada lorem maximus mauris scelerisque.
                      </p>
                      <a href="#" className="comment">
                        3 Comments
                      </a>
                      <div className="rgi-extra">
                        <div className="rgi-star">
                          <img src="img/icons/star.png" alt="star" />
                        </div>
                        <div className="rgi-heart">
                          <img src="img/icons/heart.png" alt="heart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="site-pagination">
              <span className="active">01.</span>
              <a href="#">02.</a>
              <a href="#">03.</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-7 sidebar pt-5 pt-lg-0">
            {/* Search Widget */}
            <div className="widget-item">
              <form className="search-widget">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            {/* Latest Posts */}
            <div className="widget-item">
              <h4 className="widget-title">Latest Posts</h4>
              <div className="latest-blog">
                {[1, 2, 3].map((i) => (
                  <div className="lb-item" key={i}>
                    <div
                      className="lb-thumb set-bg"
                      style={{ backgroundImage: `url(img/latest-blog/${i}.jpg)` }}
                    ></div>
                    <div className="lb-content">
                      <div className="lb-date">June 21, 2018</div>
                      <p>Ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" className="lb-author">
                        By Admin
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Comments */}
            <div className="widget-item">
              <h4 className="widget-title">Top Comments</h4>
              <div className="top-comment">
                {[1, 2, 3].map((i) => (
                  <div className="tc-item" key={i}>
                    <div
                      className="tc-thumb set-bg"
                      style={{ backgroundImage: `url(img/authors/${i}.jpg)` }}
                    ></div>
                    <div className="tc-content">
                      <p>
                        <a href="#">User {i}</a> <span>on</span> Lorem ipsum dolor sit
                        amet
                      </p>
                      <div className="tc-date">June 21, 2018</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Item */}
            <div className="widget-item">
              <div
                className="feature-item set-bg"
                style={{ backgroundImage: "url(img/features/1.jpg)" }}
              >
                <span className="cata new">new</span>
                <div className="fi-content text-white">
                  <h5>
                    <a href="#">Suspendisse ut justo tem por, rutrum</a>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="fi-comment">
                    3 Comments
                  </a>
                </div>
              </div>
            </div>

            {/* Review Item */}
            <div className="widget-item">
              <div
                className="review-item"
              >
                <div
                  className="review-cover set-bg"
                  style={{ backgroundImage: "url(img/review/1.jpg)" }}
                >
                  <div className="score yellow">9.3</div>
                </div>
                <div className="review-text">
                  <h5>Assassin’s Creed</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    malesuada lorem maximus mauris scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Montage;
