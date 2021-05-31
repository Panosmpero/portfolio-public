import React from "react";

const Social = () => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/panagiotis-berovalis/"
        id="linkedin-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin Link"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/Panosmpero"
        id="github-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Link"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.freecodecamp.org/panosbero"
        id="freecodecamp-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="FreeCodeCamp Link"
      >
        <i className="fab fa-free-code-camp"></i>
      </a>
      <a
        href="https://codepen.io/panosmpero"
        id="codepen-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Codepen Link"
      >
        <i className="fab fa-codepen"></i>
      </a>
      <a
        href="https://www.facebook.com/panos.mpero"
        id="facebook-profile-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Link"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
    </div>
  );
};

export default Social;
