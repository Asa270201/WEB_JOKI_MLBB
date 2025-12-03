import React from "react";
import "../../../css/Features.css"; // pastikan file CSS sesuai

const recentGames = [
  {
    category: "Buff",
    image: "/template/game-warrior-gh-pages/img/recent-game/1.jpg",
    title: "Suspendisse ut justo tem por, rutrum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
  {
    category: "Buff",
    image: "/template/game-warrior-gh-pages/img/recent-game/1.jpg",
    title: "Suspendisse ut justo tem por, rutrum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
  {
    category: "Nerf",
    image: "/template/game-warrior-gh-pages/img/recent-game/2.jpg",
    title: "Susce pulvinar metus nulla, vel facilisis sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
  {
    category: "Nerf",
    image: "/template/game-warrior-gh-pages/img/recent-game/2.jpg",
    title: "Susce pulvinar metus nulla, vel facilisis sem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
  {
    category: "Penyesuaian",
    image: "/template/game-warrior-gh-pages/img/recent-game/3.jpg",
    title: "Suspendisse ut justo tem por, rutrum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
  {
    category: "Penyesuaian",
    image: "/template/game-warrior-gh-pages/img/recent-game/3.jpg",
    title: "Suspendisse ut justo tem por, rutrum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit.",
    comments: "3 Comments",
  },
];

const Features: React.FC = () => {
  return (
    <section
      className="recent-game-section spad"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: "white" }}>Recent Hero</h2>
        </div>
        <div className="row">
          {recentGames.map((game, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="recent-game-item">
                <div
                  className="rgi-thumb"
                  style={{
                    backgroundImage: `url('${game.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "250px",
                    position: "relative",
                  }}
                >
                  <div className={`cata ${game.category}`}>{game.category}</div>
                </div>
                <div className="rgi-content">
                  <h5>{game.title}</h5>
                  <p>{game.description}</p>
                  <a href="#" className="comment">
                    {game.comments}
                  </a>
                  <div className="rgi-extra">
                    <div className="rgi-star">
                      <img
                        src="/template/game-warrior-gh-pages/img/icons/star.png"
                        alt="star"
                      />
                    </div>
                    <div className="rgi-heart">
                      <img
                        src="/template/game-warrior-gh-pages/img/icons/heart.png"
                        alt="heart"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
