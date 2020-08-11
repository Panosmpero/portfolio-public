import React, { useState, useEffect } from "react";
import { data } from "../data/all";
import Loading from "./Loading";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(data);

  // fake back-end api call :D
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // filter for projects
  const filterProjects = (filters) => {
    const newProjects =
      filters === "frontend"
        ? data.filter((project) => project.frontend)
        : filters === "backend"
        ? data.filter((project) => project.backend)
        : filters === "both"
        ? data.filter((project) => project.frontend && project.backend)
        : data;
    setProjects(newProjects);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="projects">
      <h2 className="projects-filters-header">
        Total: {projects && projects.length} <div className="underline"></div>{" "}
      </h2>
      <div className="projects-filters">
        <button onClick={() => filterProjects()}>all</button>
        <button onClick={() => filterProjects("frontend")}>front end</button>
        <button onClick={() => filterProjects("backend")}>back end</button>
        <button onClick={() => filterProjects("both")}>full stack</button>
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
