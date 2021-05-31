import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredData } from "../data/featured";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Featured = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="featured-container">
      <div className="featured-wrapper">
        <div className="featured-title">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="featured-projects-container">
          {featuredData.map((project, idx) => {
            return (
              <article className="featured-project" key={project.id}>
                <div
                  className="featured-project-img"
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <LazyLoadImage
                    src={project.img}
                    alt="project"
                    effect="blur"
                    height="100%"
                  />
                </div>
                <div
                  className="featured-project-wrapper"
                  data-aos={idx % 2 === 0 ? "flip-right" : "flip-left"}
                >
                  <h3 className="featured-project-title">{project.title}</h3>
                  <div className="underline"></div>
                  <p className="featured-project-info">{project.info}</p>
                  <div className="featured-project-footer">
                    <div className="featured-project-tech">
                      {project.technologies.map((tech, i) => {
                        return <div key={`tech-${i}`}>{tech}</div>;
                      })}
                    </div>

                    <div className="featured-project-links">
                      <div className="featured-project-url">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Check the application's live link."
                        >
                          <i className="fas fa-external-link-alt"></i>{" "}
                        </a>
                      </div>
                      <div className="featured-project-giturl">
                        {project.giturl && (
                          <a
                            href={project.giturl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Check the application's Github link."
                          >
                            <i className="fab fa-github"></i>{" "}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="featured-footer">
          <Link to="/projects">
            <button>
              visit all projects<i className="fas fa-angle-double-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
