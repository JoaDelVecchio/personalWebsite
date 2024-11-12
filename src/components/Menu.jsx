const Menu = ({ projects, setHoveredProject }) => {
  return (
    <div>
      <ul className="projects-menu">
        {projects.map((project, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <a href={project.link} target="_blank">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
