const Menu = ({ projects, setHoveredProject }) => {
  return (
    <ul className>
      {projects.map((project) => (
        <li
          key={project.id}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
          <span>{project.year}</span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
