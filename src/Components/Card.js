import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ id, title, img, technologies, url, giturl }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="side front">
          <div className="card-title">
            <h2>{title}</h2>
            <div className="underline"></div>
          </div>
          <div className="img-container">
            <LazyLoadImage
              src={img}
              alt="project"
              effect="blur"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="side back">
          <div className="back-container">
            <div className="back-top featured-project-tech">
              {technologies.map((x, i) => (
                <div key={`tec-${i}`}>{x}</div>
              ))}
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white"
              aria-label="Check the application's live link."
              >
              goto link
            </a>
            {giturl && (
              <a
                href={giturl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-git"
                aria-label="Check the application's Github link."
                >
                <span>{"<"} </span>
                <i className="fab fa-github"></i> <span> {"/>"}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
