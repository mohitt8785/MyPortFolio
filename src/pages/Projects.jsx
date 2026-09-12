import React from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLock,
} from "react-icons/fa6";

import Project_1 from "../assets/Project_1.png";
import Project_2 from "../assets/Project_2.png";
import Project_4 from "../assets/Project_4.png";

const projects = [
  {
    id: 1,
    number: "01",
    category: "Business Management",
    name: "Lead & Report Management System",
    description:
      "A role-based reporting system with company access, teams, agents, report tracking, and performance analytics.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: Project_4,
    live: "",
    github: "",
  },
  {
    id: 2,
    number: "02",
    category: "Client Management",
    name: "Client Management System",
    description:
      "A full-stack system featuring CRUD operations, JWT authentication, document handling, and responsive administration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: Project_1,
    live: "",
    github: "",
  },
  {
    id: 3,
    number: "03",
    category: "Visitor Management",
    name: "Club Guest Management Portal",
    description:
      "A club-entry solution with form validation, visitor records, secure database storage, and an admin dashboard.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: Project_2,
    live: "",
    github: "",
  },
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Selected work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured <span className="text-gray-500">Projects</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Real-world full-stack applications built to solve practical
            business and management problems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.055]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-[#0a0a0a]">
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Project Number */}
                <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs font-semibold text-gray-300 backdrop-blur-md">
                  {project.number}
                </span>

                {/* Category */}
                <span className="absolute bottom-4 left-5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs text-gray-200 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-snug text-white">
                  {project.name}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-200"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare size={11} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                  )}

                  {!project.live && !project.github && (
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-500">
                      <FaLock size={11} />
                      Private business project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            Interested in discussing one of these projects?
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            Let’s Talk
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;