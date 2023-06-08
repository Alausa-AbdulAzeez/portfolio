import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/AdminDashboard.png";
import IMG2 from "../../assets/HMS.png";
import IMG3 from "../../assets/Screenshot (6).png";

const data = [
  {
    id: 2,
    image: IMG2,
    title: "HMS",
    github: "https://github.com/Alausa-AbdulAzeez/hms",
    demo: "https://magical-choux-f4a46f.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "PROMPTOPIA",
    github: "https://github.com/Alausa-AbdulAzeez/prompt",
    demo: "https://prompt-gamma.vercel.app/",
  },
  {
    id: 1,
    image: IMG1,
    title: "Admin Dashboard",
    github: "https://github.com/Alausa-AbdulAzeez/adminDashboard",
    demo: "https://graceful-sunshine-fa7e76.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.reverse().map((singleItem) => {
          return (
            <article className="portfolio__item" key={singleItem.id}>
              <div className="portfolio__item-image">
                <img
                  src={singleItem.image}
                  alt=""
                  className="portfolio__item_image"
                />
              </div>
              <h3>{singleItem.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={singleItem.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={singleItem.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
