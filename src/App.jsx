import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Projects from "./components/Projects";

function App() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const projects = [
    {
      id: "fitness-app",
      name: "Fitness App",
      year: "2024",
      link: "https://fitnessapp-jdv.onrender.com/",
    },
    {
      id: "phonebook",
      name: "Phonebook",
      year: "2022",
      link: "https://thephonebook-s42a.onrender.com/",
    },
    {
      id: "to-do-list",
      name: "To-do List",
      year: "2024",
      link: "https://onamission.netlify.app/",
    },
    {
      id: "country-finder",
      name: "Country Finder",
      year: "2024",
      link: "https://countryfinderpremium.netlify.app",
    },
    {
      id: "macos-calculator",
      name: "MacOS Calculator",
      year: "2024",
      link: "https://joadelvecchio.github.io/MacOS-Inspired-Calculator/",
    },
    {
      id: "bank-ops",
      name: "Bank-Ops",
      year: "2022",
      link: "https://joadelvecchio.github.io/Bank-Ops/",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="app">
      <main>
        <Menu projects={projects} setHoveredProject={setHoveredProject} />
        <Projects projects={projects} hoveredProject={hoveredProject} />
      </main>
      <footer>{formattedDate}</footer>
    </div>
  );
}

export default App;
