const Projects = ({ projects, hoveredProject }) => {
  const project = projects.find((p) => p.id === hoveredProject);

  return (
    <div className="project-info">
      {project ? (
        <>
          <p>{project.name}</p>
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
            <a href="#">About</a>
            <a href="#">Email</a>
            <a href="#">LinkedIn</a>
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
