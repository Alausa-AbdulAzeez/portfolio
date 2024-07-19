import React from "react";
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1a5l8lPcD17YzOYUq_vsCN3MHac13s4d9/view"
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
