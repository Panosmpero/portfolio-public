import React, { useState, useEffect } from "react";
import { data } from "../data/all";
import Loading from "./Loading";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(data);
  const [keywords, setKeywords] = useState([]);
  const [sort, setSort] = useState();
  const [showFilters, setShowFilters] = useState(false)

  // fake back-end api call :D
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // extract all techs
  const techs = [
    ...new Set(
      data
        .reduce((acc, tech) => acc + "," + tech.technologies, [])
        .split(",")
        .filter((x) => x)
    ),
  ];

  // filter state keywords
  const handleKeywords = (value) => {
    keywords.includes(value)
      ? setKeywords((prevKeywords) => prevKeywords.filter((x) => x !== value))
      : setKeywords([...keywords, value]);
  };

  // update filter accordingly
  useEffect(() => {
    let newProjects = data;

    // keywords filter
    if (keywords.length) {
      newProjects = data.filter(
        (project) =>
          project.technologies.filter((x) => keywords.includes(x)).length
      );
    }

    // sort filter
    if (sort) {
      newProjects =
        sort === "frontend"
          ? newProjects.filter((project) => project.frontend)
          : sort === "backend"
          ? newProjects.filter((project) => project.backend)
          : sort === "both"
          ? newProjects.filter((project) => project.frontend && project.backend)
          : newProjects;
    }

    setProjects(newProjects);
  }, [keywords, sort]);

  return loading ? (
    <Loading />
  ) : (
    <div className="projects">

      <div className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
        <h3>Filters</h3>
        <i className="fas fa-sliders-h"></i>
      </div>

      <div className={`projects-filters-container ${showFilters ? "show-container" : null}`}>
        <div className={`projects-filters ${showFilters ? "show-filters" : null}`}>
          <h2 className="projects-filters-header">
            Total: {projects && projects.length}{" "}
            <div className="underline"></div>{" "}
          </h2>

          <div className="projects-sort">
            <button
              className={!sort ? "button-selected" : null}
              onClick={() => setSort()}
            >
              all
            </button>
            <button
              className={sort === "frontend" ? "button-selected" : null}
              onClick={() => setSort("frontend")}
            >
              front end
            </button>
            <button
              className={sort === "backend" ? "button-selected" : null}
              onClick={() => setSort("backend")}
            >
              back end
            </button>
            <button
              className={sort === "both" ? "button-selected" : null}
              onClick={() => setSort("both")}
            >
              full stack
            </button>
          </div>
          <h2>keywords</h2>
          <div className="underline"></div>
          <div className="projects-keywords">
            {techs.map((tech, id) => (
              <button
                className={keywords.includes(tech) ? "button-selected" : null}
                value={tech}
                key={`btn-${id}`}
                onClick={(e) => handleKeywords(e.currentTarget.value)}
              >
                {tech}{" "}
                {keywords.includes(tech) && (
                  <i className="fas fa-check-circle"></i>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-container">
        {projects.map((project) => (
          <div className="card-container" key={`proj-${project.id}`}>
            <div className="card">
              <div className="side front">
                <div className="card-title">
                  <h2>{project.title}</h2>
                  <div className="underline"></div>
                </div>
                <img src={project.img} alt="project" />
              </div>
              <div className="side back">
                <div className="back-container">
                  <div className="back-top featured-project-tech">
                    {project.technologies.map((x, i) => (
                      <div key={`tec-${i}`}>{x}</div>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--white"
                  >
                    goto link
                  </a>
                  {project.giturl && (
                    <a
                      href={project.giturl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-git"
                    >
                      <span>{"<"} </span>
                      <i className="fab fa-github"></i> <span> {"/>"}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
