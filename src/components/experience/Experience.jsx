import React from "react";
import "./experience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  // Company experiences array
  const companyExperiences = [
    {
      company: "ATAfrica",
      from: "March 2024",
      to: "June 2024",
      jobTitle: "Fullstack Developer",
      descriptions: [
        "Developed a comprehensive dashboard for a robo advisor software, enabling admin users to efficiently track and manage other users' portfolios and accounts.",
        "Integrated Paystack's API to create a seamless deposit and withdrawal flow within the system.",
        "Implemented algorithms for automatic portfolio rebalancing to optimize investment strategies.",
        "Tech Stack: ReactJS, TailwindCSS, NodeJS, MongoDB, and Paystack.",
      ],
    },
    {
      company: "LifeWORTH HMO",
      from: "September 2022",
      to: "March 2024",
      jobTitle: "Frontend Developer",
      descriptions: [
        "Led the design and development of a claims vetting portal, prioritizing user experience and showcasing creative prowess.",
        "Demonstrated technical expertise by leading the launch of the company's inaugural mobile application. Utilized React Native to seamlessly integrate a telemedicine service and enhanced functionality through third-party API integration.",
        "Developed an enrollee portal as a web-based alternative for enrollees preferring desktop access over mobile applications.",
        "Tech stack: ReactJS, Framer motion, TailwindCSS, SASS, Material UI.",
      ],
    },
    {
      company: "Biopath Medical Laboratory",
      from: "March 2023",
      to: "January 2024",
      jobTitle: "Frontend Developer",
      descriptions: [
        "Directed the development of a cutting-edge Laboratory Information Management System (LIMS), resulting in a twofold reduction in turnaround time.",
        "Implemented a seamless and real-time data flow among stakeholders to enhance operational efficiency.",
        "Tech stack: ReactJS, SASS, Material UI.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>
      {/* <div className="workExperience container">
        <h3>
          Lifeworth Hmo <span className="durationSpan">2022 - Present</span>
        </h3>
        <p className="titleText">Frontend Developer</p>
        <ul>
          <li className="workExperienceList">
            Spearheaded the development of the front-end of a cutting-edge
            Laboratory Information Management System (LIMS).
          </li>
          <li className="workExperienceList">
            Notably resolved critical bugs and completed a flawless front-end
            experience of a claims vetting portal.
          </li>
          <li className="workExperienceList">
            Demonstrated technical prowess by seamlessly integrating a
            telemedicine service into our mobile app using React Native,
            enhancing its functionality.
          </li>
        </ul>
      </div> */}
      {companyExperiences?.map((companyExperience, index) => {
        const { company, from, to, jobTitle, descriptions } = companyExperience;
        return (
          <SingleExperience
            company={company}
            from={from}
            to={to}
            jobTitle={jobTitle}
            descriptions={descriptions}
            key={index}
          />
        );
      })}

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>PostgresSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const SingleExperience = ({ company, from, to, jobTitle, descriptions }) => {
  return (
    <div className="workExperience container">
      <h3>
        {company}{" "}
        <span className="durationSpan">
          {from} - {to}
        </span>
      </h3>
      <p className="titleText">{jobTitle}</p>
      <ul>
        {descriptions?.map((description, index) => (
          <li className="workExperienceList" key={index}>
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
