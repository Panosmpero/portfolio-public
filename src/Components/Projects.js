import React, { useState, useEffect } from "react";
import { data } from "../data/all";
import Loading from "./Loading";

const Projects = () => {


  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(data);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    },500)

  }, [])

  const filterProjects = (filters) => {
    const newProjects = filters === "frontend"
      ? data.filter(project => project.frontend)
      : filters === "backend"
        ? data.filter(project => project.backend)
        : data
    setProjects(newProjects)
  }

  return loading ? (<Loading />) : (
    <div className="projects">
      <div className="projects-filters">
        <button onClick={() => filterProjects()}>all</button>
        <button onClick={() => filterProjects("frontend")}>frontend</button>
        <button onClick={() => filterProjects("backend")}>backend</button>
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
                <img src={project.img} alt="project"/>
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
                    ><span>{"<"} </span>
                      <i className="fab fa-github"></i>{" "}
                      <span> {"/>"}</span>
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
