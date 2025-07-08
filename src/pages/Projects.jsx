import React from 'react'
import Photo1 from "../assets/photo1.png"
import Photo2 from "../assets/photo2.png"


const projects = [
  {
    id:1,
    name:"E-Commerce UI",
    technologies: "CSS",
    image: Photo1,
    github:"#"
  },
   {
    id:1,
    name:"Rest-Country",
    technologies: "JavaScript",
    image: Photo1,
    github:"#"
  },
   {
    id:1,
    name:"Portfolio",
    technologies: "React",
    image: Photo2,
    github:"https://github.com/mohitt8785/MyPortFolio.git"
  }
]

const Projects = () => {
  return (
    <div className="py-20 text-white bg-black "  id="project">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105">
              <img src={project.image} alt={project.name} className="object-cover w-full h-48 mb-4 rounded-lg" />
              <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
              <p className="mb-4 text-gray-400">{project.technologies}</p>
              <a href={project.github} className="inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects