const Projects = ({ projects, hoveredProject }) => {
  return hoveredProject ? (
    <div>{projects.find((project) => project.id == hoveredProject).name}</div>
  ) : (
    <div>Soy Joaquin</div>
  );
};

export default Projects;
