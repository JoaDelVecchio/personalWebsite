import React, { useState } from "react";

const Projects = ({ projects, hoveredProject }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const project = projects.find((p) => p.id === hoveredProject);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

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

            <a href="https://www.linkedin.com/in/joaquindelvecchio/">
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

      {isPopupOpen && (
        <div className="popup">
          <button className="popup-close" onClick={togglePopup}>
            &times;
          </button>
          <h2>Competitive Edge</h2>
          <p>
            Through my entrepreneurial journey—ranging from managing a content
            agency to investing in cryptocurrencies—I’ve developed a unique set
            of skills that make me a standout in any role. I bring a proactive,
            adaptable approach to dynamic environments, thriving on solving
            challenges independently and delivering results under evolving
            conditions. These experiences have sharpened my ability to
            understand client needs, manage teams effectively, and drive
            projects forward with resilience and foresight. My versatility and
            readiness to take on new challenges equip me to add meaningful
            impact and innovation to any project or team.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
