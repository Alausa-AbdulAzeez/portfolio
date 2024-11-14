import React from "react";
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1R6XjRXecZR7Ru3i26ejmhHn1NaJ9rw18EOgiX-3g5no/edit?usp=sharing"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        View Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
