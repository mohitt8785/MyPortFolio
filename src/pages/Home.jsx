import React from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../component/Footer";
import MohitHome from "../assets/Mohit.png";

const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-16"
        >
          {/* Background Effects */}
          <div className="absolute left-[-100px] top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-20 right-[-100px] h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for new opportunities
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                Hello, I’m Mohit Sharma
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                MERN Stack
                <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                I build responsive full-stack web applications using React.js,
                Node.js, Express.js, and MongoDB—with clean interfaces, secure
                APIs, and practical business solutions.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#projects"
                  className="w-full rounded-full bg-white px-7 py-3 text-center font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200 sm:w-auto"
                >
                  View My Work
                </a>

                <a
                  href="/Mohit_Resume.pdf"
                  download="Mohit_Sharma_Resume.pdf"
                  className="w-full rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-[40px] bg-gradient-to-br from-green-400/25 to-blue-500/25 blur-3xl" />

                <div className="relative h-[330px] w-[280px] overflow-hidden rounded-[36px] border border-white/15 bg-white/5 p-2 shadow-2xl sm:h-[430px] sm:w-[360px]">
                  <img
                    src={MohitHome}
                    alt="Mohit Sharma - MERN Stack Developer"
                    className="h-full w-full rounded-[30px] object-cover object-top"
                  />
                </div>

                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-black/80 px-5 py-4 shadow-xl backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">1+</p>
                  <p className="text-xs text-gray-400">
                    Year of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;