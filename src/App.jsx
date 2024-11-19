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
      image: "fitnessapp.webp",
      description:
        "Fitness Tracker App A sleek, full-stack web app for organizing and tracking workout routines. Built with React and Node.js, it features a luxury-inspired, responsive design and a RESTful API for real-time updates. Perfect for fitness enthusiasts looking to elevate their exercise planning experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
    },
    {
      id: "phonebook",
      name: "Phonebook",
      year: "2024",
      link: "https://thephonebook-s42a.onrender.com/",
      image: "thephonebook.webp",
      description:
        "The Phonebook Application is a web application designed with React, Node.js, and REST API to manage a list of contacts efficiently. Users can add, update, and delete contacts, as well as search for specific contacts by name.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
    },
    {
      id: "to-do-list",
      name: "To-do List",
      year: "2024",
      link: "https://onamission.netlify.app/",
      image: "todolist.webp",
      description:
        "Welcome to the Momentum To-Do List App — a sleek, minimalist task management tool inspired by the aesthetics and values of the Momentum clothing brand. This app allows users to add, edit, and delete tasks effortlessly, all while maintaining the clean, monochromatic style that Momentum is known for.",
      technologies: ["React", "Netlify"],
    },
    {
      id: "country-finder",
      name: "Country Finder",
      year: "2024",
      link: "https://countryfinderpremium.netlify.app",
      image: "countryfinder.webp",
      description:
        "Country Finder with Real-Time Weather is a sleek React application that allows users to search for countries and instantly view key details like population, languages, and flags. Built with modern technologies like React, Axios, and Vite, the app delivers fast and efficient performance.",
      technologies: ["React", "Axios", "Vite", "Netlify"],
    },
    {
      id: "macos-calculator",
      name: "MacOS Calculator",
      year: "2024",
      link: "https://joadelvecchio.github.io/MacOS-Inspired-Calculator/",
      image: "calc.webp",
      description:
        "This project is a web-based calculator inspired by the MacOS built-in calculator. It replicates the look and feel of the MacOS calculator using modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "bank-ops",
      name: "Bank Ops",
      year: "2022",
      link: "https://joadelvecchio.github.io/Bank-Ops/",
      image: "bankops.webp",
      description:
        "This application simulates money transfers between accounts and loan requests, among other things. To use it, various predefined users were created with whom you can log in, transfer money, request loans, or delete their accounts. Joaquin Del Vecchio user: 'jdv' PIN:1111, Nicolas Gonzalez user: 'ng' PIN:2222, and Juan Perez user: 'jp' PIN:3333",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <div className="container">
      <div className="app">
        <div className="projects-menu">
          <Menu projects={projects} setHoveredProject={setHoveredProject} />
        </div>
        <div className="main-content">
          <Projects
            projects={projects}
            hoveredProject={hoveredProject}
            togglePopup={togglePopup}
          />
        </div>
        {isPopupOpen && (
          <div className="popup-overlay" onClick={togglePopup}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={togglePopup}>
                &times;
              </button>
              <h2>Competitive Edge</h2>
              <p>
                Through my entrepreneurial journey—ranging from managing a
                content agency to investing in cryptocurrencies—I’ve developed a
                unique set of skills that make me a standout in any role. I
                bring a proactive, adaptable approach to dynamic environments,
                thriving on solving challenges independently and delivering
                results under evolving conditions. These experiences have
                sharpened my ability to understand client needs, manage teams
                effectively, and drive projects forward with resilience and
                foresight.
              </p>
            </div>
          </div>
        )}
      </div>
      <footer>{formattedDate}</footer>
    </div>
  );
}

export default App;
