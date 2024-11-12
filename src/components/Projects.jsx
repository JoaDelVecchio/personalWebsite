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
          <p>{project.description}</p>
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
