import React, { useContext } from "react";
import { Context } from "../Context/context";

const Certification = ({ data }) => {
  const { showFcc, showAws, setShowAws, setShowFcc } = useContext(Context);
  const currentCategory = data.title === "FreeCodeCamp" ? showFcc : showAws;

  const handleExpand = () => {
    data.title === "FreeCodeCamp" ? setShowFcc(!showFcc) : setShowAws(!showAws);
  };

  return (
    <article className="about-certification-container">
      <div
        className="about-certification-header-wrapper"
        onClick={handleExpand}
      >
        <h2>{data.title}</h2>
        <div>
          {currentCategory ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </div>
      </div>
      <div className="about-certification-main-wrapper">
        {currentCategory &&
          data.certifications.map((certification, id) => (
            <div className="about-certification-wrapper" key={id}>
              <div>
                <i className={certification.icon}></i>
              </div>
              <h3>
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certification.title}
                </a>
              </h3>
              {certification.pdf && (
                <div>
                  <a
                    href={certification.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-file-pdf"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>
    </article>
  );
};

export default Certification;
