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
      id: "Top3",
      name: "Top3",
      year: "2025",
      link: "https://top3-gamma.vercel.app/",
      image: "top3.png",
      description:
        "Top3 is a high-performance productivity tool. Designed for individuals who prioritize work, relationships and fitness, Top3 helps users manage their top daily priorities, and stay on top of their goals with a clean and minimalistic interface.",
      technologies: [
        "React",
        "Node/ExpressJs",
        "MongoDB",
        "TailwindCSS",
        "TypeScript",
      ],
    },    
    {
      id: "247Pilars",
      name: "247Pilars:In Progress",
      year: "2025",
      link: "https://247-pilars.vercel.app/",
      image: "247pilars.png",
      description:
        "247Pilars is The Discipline Tracker, an app designed for those who embrace the grind. Inspired by the 247 lifestyle, it helps users stay disciplined, track progress, and execute their daily goals with precision.",
      technologies: [
        "React",
        "Node.js/Express",
        "MongoDB",
        "TailwindCSS",
        "TypeScript",
      ],
    },    
    {
      id: "KeyPlace",
      name: "KeyPlace:In Progress",
      year: "2025",
      link: "https://key-place.vercel.app/",
      image: "keyplace.png",
      description:
        "KeyPlace is a sleek and modern real estate web application designed to simplify the process of finding and managing properties. With a user-friendly interface and robust features, it helps users explore listings, manage their profiles, and achieve their real estate goals effortlessly.",
      technologies: [
        "React",
        "Node.js/Express",
        "MongoDB",
        "TailwindCSS",
        "Typescript",
      ],
    },
    {
      id: "Momentum",
      name: "Momentum",
      year: "2025",
      link: "https://momentum-ebon.vercel.app/",
      image: "momentum.png",
      description:
        "Momentum is a modern and minimalist task management web application designed to boost productivity. With an elegant design and seamless user experience, it allows users to organize daily tasks, track progress, and achieve their goals effectively.",
      technologies: [
        "React",
        "Node.js/Express",
        "Supabase (PostgreSQL)",
        "TailwindCSS",
        "Typescript",
      ],
    },
    {
      id: "CountryInfo",
      name: "CountryInfo",
      year: "2025",
      link: "https://the-country-info-app-iota.vercel.app/",
      image: "countryinfo.png",
      description:
        "CountryInfo is a sleek and user-friendly web application that allows users to explore countries from around the world. It provides detailed information on population, languages, flags, and more, with an intuitive design and smooth navigation.",
      technologies: ["React", "Node.js/Express", "TailwindCSS", "Typescript"],
    },
    {
      id: "ProteinPlates (In Progress)",
      name: "ProteinPlates",
      year: "2025",
      link: "https://proteinplates-sigma.vercel.app/",
      image: "proteinplates.png",
      description:
        "ProteinPlates is a Full Stack web application focused on fitness enthusiasts who seek high-protein meal recipes. It features a dynamic search bar, interactive navigation, and an intuitive design to help users discover recipes tailored to their fitness goals. With components for meal customization, nutritional insights, and user-friendly browsing, it promotes discipline, success, and the dream lifestyle.",
      technologies: ["React", "TypeScript", "Nodejs/Express", "Tailwindcss"],
    },
    {
      id: "Jym",
      name: "Jym",
      year: "2025",
      link: "https://gym-app-tau-swart.vercel.app/",
      image: "Jym.png",
      description:
        "Jym is a React-based web application that showcases a fitness platform with OAuth, dynamic carousels, informative sections, a form to submit inquires and a user-friendly design. Featuring components like class details, benefits, and a contact form, it provides a modern interface to engage fitness enthusiasts.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "GoogleOAuth",
        "Vercel",
      ],
    },
    {
      id: "Muvi",
      name: "Muvi",
      year: "2025",
      link: "https://muvi-liart.vercel.app/",
      image: "muvi.png",
      description:
        "Muvi is a React-based web application for discovering, searching, and managing favorite movies. It features dynamic search, stateful favorites management, and integration with the TMDb API, all within a clean and responsive design. The app is perfect for showcasing movie data in an engaging and modern way.",
      technologies: ["React", "TypeScript", "Tailwind", "API", "Vercel"],
    },

    {
      id: "startups-blog",
      name: "StartIt (Trying Nextjs)",
      year: "2024",
      link: "https://start-it-six.vercel.app/",
      image: "startupblogs.png",
      description:
        "Startups Blog is a NextJS web platform designed for sharing and exploring inspiring startup stories. Built with Next.js and TypeScript, it offers users the ability to browse, search, and add new startup success stories. With a clean, minimalist design and dynamic rendering, it ensures a seamless user experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "REST API",
      ],
    },
    {
      id: "money-tracker",
      name: "Money Tracker",
      year: "2024",
      link: "https://expense-tracker-ten-rose.vercel.app/",
      image: "money-tracker.png",
      description:
        "Expense Tracker is a React-based web application that allows users to track their income and expenses efficiently. With features like adding new transactions, viewing transaction history, and a real-time balance update, it provides an intuitive and clean interface for managing personal finances.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Context API",
      ],
    },
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
                In addition to my programming experience, I managed a marketing
                team (including setters, video editors, and content creators)
                and have invested and traded in stocks and cryptocurrencies.
                These experiences taught me resilience, adaptability, and strong
                communication skills—qualities I bring to any dynamic team. My
                native language is Spanish, and I have a B2 level in English
                (Cambridge First Certificate), enabling me to collaborate
                seamlessly in multicultural teams.
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
