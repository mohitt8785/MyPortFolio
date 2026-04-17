import React from "react";
// import GeminiImg from "../assets/gemini.png"; // Add your project image
import Hero from "../assets/Hero.jpeg"
import Project_1 from "../assets/Project_1.png"
import Project_2 from "../assets/Project_2.png"
import Project_3 from "../assets/Project_3.png"

const projects = [
  {
    id: 1,
    name: "Client Management System (MERN Stack)",
    description:
      "Full-stack client management system with CRUD operations, JWT authentication, and responsive UI.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: Project_1,
    live: "#",
    github: "https://github.com/mohitt8785",
  },

  {
    id: 2,
    name: "Club Entry Form (MERN Stack)",
    description:
      "Club entry management system with form validation, secure data storage in MongoDB, and admin dashboard.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: Project_2,
    live: "#",
    github: "https://github.com/mohitt8785",
  },

   {
    id: 3,
    name: "Gemini AI Project",
    description:
      "AI-powered chatbot web built with React.js and Gemini API, featuring a clean and responsive UI.",
    technologies: ["React.js", "Gemini API", "Tailwind CSS"],
    image: Project_3,
    live: "https://mohit-ai-project.netlify.app/",
    github: "https://github.com/mohitt8785",
  },



];

const Projects = () => {
  return (
    <div className="text-white bg-black py-13" id="project">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-48 mb-4 rounded-lg hover:brightness-110 transition duration-300"
              />

              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 transform transition duration-300 hover:scale-105"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 transform transition duration-300 hover:scale-105"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
