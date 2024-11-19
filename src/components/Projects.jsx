import React, { useState } from "react";

const Projects = ({ projects, hoveredProject, togglePopup }) => {
  const project = projects.find((p) => p.id === hoveredProject);

  return (
    <div className="project-info">
      {project ? (
        <>
          <p className="project-name">{project.name}</p>
          <img
            src={project.image}
            alt="webBanner"
            style={{
              maxWidth: "100%",
              maxHeight: "250px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <p className="project-desc">{project.description}</p>
          <ul className="technologies">
            {project.technologies.map((tech, i) => (
              <li className="tech-tag" key={i}>
                {tech}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1>
            Joaquin Del Vecchio, <span>Full Stack Developer</span>
          </h1>
          <p className="links">
            <a href="#" onClick={togglePopup}>
              Competitive Edge
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/joaquindelvecchio/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/JoaDelVecchio"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <img
            src="me.webp"
            alt=""
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </>
      )}
    </div>
  );
};

export default Projects;
