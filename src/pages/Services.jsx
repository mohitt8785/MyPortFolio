import React from "react";
import {
  FaArrowRight,
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Creating clean, responsive, and user-friendly website layouts that provide a smooth experience across all devices.",
    details: [
      "Modern UI Design",
      "Responsive Layouts",
      "Material UI",
      "Mobile-Friendly Design",
    ],
    icon: FaPaintBrush,
  },
  {
    id: "02",
    title: "Frontend Development",
    description:
      "Building fast and interactive user interfaces using modern frontend technologies and reusable components.",
    details: [
      "React.js",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Responsive Development",
    ],
    icon: FaLaptopCode,
  },
  {
    id: "03",
    title: "Backend Development",
    description:
      "Developing secure APIs, server-side functionality, authentication systems, and database-driven applications.",
    details: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API Development",
    ],
    icon: FaServer,
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute right-[-160px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            What I can do
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-gray-500">Services</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            From interface design to backend development, I build complete and
            responsive web solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06] sm:p-8"
              >
                {/* Card Number */}
                <span className="absolute right-7 top-5 text-5xl font-bold text-white/[0.04] transition duration-500 group-hover:text-white/[0.08]">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition duration-500 group-hover:rotate-3 group-hover:bg-white group-hover:text-black">
                  <Icon size={24} />
                </div>

                {/* Card Content */}
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[84px] leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Service Details */}
                <ul className="mt-7 space-y-3">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom Link */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-white transition hover:text-green-400"
                >
                  Discuss a project
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;