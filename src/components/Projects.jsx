const Projects = ({ projects, hoveredProject }) => {
  const project = projects.find((p) => p.id === hoveredProject);

  return (
    <div
      className="project-info"
      style={{ width: "100%", height: "auto", overflow: "hidden" }}
    >
      {project ? (
        <>
          <p>{project.name}</p>
          <img
            src={project.image}
            alt="webBanner"
            style={{
              width: "100%", // Full width of the container
              height: "100%", // Full height of the container
              objectFit: "cover", // Cover the entire container without distorting
              borderRadius: "8px", // Optional rounded corners
            }}
          />
        </>
      ) : (
        <div>
          <h1>
            Joaquin Del Vecchio, <span>Developer</span> at Your Company
          </h1>
          <p className="links">
            <a href="#">About</a>
            <a href="#">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
