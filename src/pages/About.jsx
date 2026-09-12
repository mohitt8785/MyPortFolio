import React from "react";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Tailwind CSS",
  "Git & GitHub",
  "Postman",
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "MERN", label: "Core Specialization" },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/10 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Get to know me
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            About <span className="text-gray-500">Me</span>
          </h2>

          <h3 className="mt-7 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
            I build practical and responsive
            <span className="text-green-400"> web applications.</span>
          </h3>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left Column */}
          <div>
            <div className="space-y-5 text-base leading-8 text-gray-400">
              <p>
                I’m a MERN Stack Developer with hands-on experience in
                MongoDB, Express.js, React.js, and Node.js. I enjoy transforming
                ideas into modern and user-friendly web applications.
              </p>

              <p>
                My experience includes responsive interfaces, secure REST APIs,
                JWT authentication, admin dashboards, document handling, and
                database-driven business systems.
              </p>

              <p>
                I focus on writing clean and maintainable code while
                continuously improving my development and problem-solving
                skills.
              </p>
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              Explore My Projects
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right Column */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Technologies I work with
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />

                <div>
                  <p className="font-medium text-white">Currently focused on</p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Building scalable MERN applications and improving backend
                    development skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;