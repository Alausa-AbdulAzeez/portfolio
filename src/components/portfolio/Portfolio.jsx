import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/3dSite.png";
import IMG2 from "../../assets/HMS.png";
import IMG3 from "../../assets/nike.png";
import IMG6 from "../../assets/metaverse.png";
import IMG4 from "../../assets/BiopathProject.png";
import IMG5 from "../../assets/lwPortal.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "3D-Customization",
    github: "https://github.com/Alausa-AbdulAzeez/3DShirtCustomizatonClient",
    demo: "https://zshirt-customizer.vercel.app/",
    // demo: 'https://3-d-shirt-customizaton-client.vercel.app/',
    tools: ["React", "threeJS", "Framer-Motion"],
    details:
      "Designed an amazing 3D shirt customization tool using Three.js for immersive 3D experiences, Framer Motion for stunning animations, and Tailwind CSS for sleek and responsive design.",
  },
  {
    id: 2,
    image: IMG3,
    title: "Nike Landing Page",
    github: "https://github.com/Alausa-AbdulAzeez/nikeLandingPage",
    demo: "https://nike-eight-kohl.vercel.app/",
    tools: ["React", "Tailwind"],
    details:
      "Crafted an impressive and fully responsive landing page using ReactJS and Tailwind CSS, serving as a captivating showcase of my exceptional CSS proficiency.",
  },
  {
    id: 3,
    image: IMG6,
    title: "Metaverse",
    github: "https://github.com/Alausa-AbdulAzeez/metaverse",
    demo: "https://metaverse-pi-lake.vercel.app/",
    tools: ["NextJS", "Framer-motion", "Tailwind"],
    details:
      "Crafted a fully responsive and contemporary Next.js website  enriched with captivating animations brought to life by the dynamic capabilities of Framer Motion",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'LIMS',
  //   github: '',
  //   demo: 'https://staff.biopathonline.com/',
  //   tools: ['React', 'SCSS', 'Redux-Tool-Kit'],
  //   details:
  //     'Created a LIMS, fostering seamless collaboration across laboratory sections and serving as a dynamic data management tool.',
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Claims Vetting Portal',
  //   github: '',
  //   demo: 'https://admin.lifeworthhmoportal.com/',
  //   tools: ['React', 'CSS', 'Redux-Tool-Kit'],
  //   details:
  //     'Restructured the claims processing workflow by developing a cost-effective, in-house portal, replacing a third-party application.',
  // },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'HMS',
  //   github: 'https://github.com/Alausa-AbdulAzeez/hms',
  //   demo: 'https://magical-choux-f4a46f.netlify.app/',
  //   tools: ['React', 'SCSS', 'Typescript'],
  //   details: 'A hospital management system currently being built',
  // },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: 'PROMPTOPIA',
  //   github: 'https://github.com/Alausa-AbdulAzeez/prompt',
  //   demo: 'https://prompt-gamma.vercel.app/',
  // },
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: 'Admin Dashboard',
  //   github: 'https://github.com/Alausa-AbdulAzeez/adminDashboard',
  //   demo: 'https://graceful-sunshine-fa7e76.netlify.app/',
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((singleItem) => {
          return (
            <article className="portfolio__item" key={singleItem.id}>
              <div className="portfolio__item-image">
                <img
                  src={singleItem.image}
                  alt=""
                  className="portfolio__item_image"
                />
              </div>
              <div className="bottomCardWrapper">
                <h3 className="projectTitle">{singleItem.title}</h3>
                <div className="detailsAndToolsWrapper">
                  <p className="projectDetails">{singleItem?.details}</p>
                  <div className="toolsWrapper">
                    {singleItem?.tools?.map((tool) => {
                      return <div className="tool">{tool}</div>;
                    })}
                  </div>
                </div>
                <div className="portfolio__item-cta">
                  {singleItem.github !== "" && (
                    <a
                      href={singleItem.github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  )}
                  <a
                    href={singleItem.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
