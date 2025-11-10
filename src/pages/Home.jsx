import React from "react";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../component/Footer";
import { NavLink } from "react-router-dom";
import MohitHome from "../assets/MohitHome.jpeg";

const Home = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Mohit-Resume.pdf";
    link.download = "Mohit_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="py-16 text-center text-white bg-black">
        {/* Profile Image */}
        <img
          src={MohitHome}
          alt="Mohit Sharma"
          className="object-cover w-48 h-48 mx-auto mb-8 rounded-full transform transition duration-300 hover:scale-105"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold">
          I'm
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {" "}Mohit{" "}
          </span>
          , Full-Stack Developer (MERN)
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg italic text-gray-300">
          I specialize in building modern and responsive web applications
        </p>
        <p className="mt-2 text-base italic text-gray-400">
          Turning ideas into interactive and lightning-fast digital experiences
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 items-center">
          {/* <NavLink to={"/contact"}>
            <button className="px-6 py-2 text-base rounded-full bg-gradient-to-r from-green-400 to-blue-500 transform transition duration-300 hover:scale-105">
              Contact With Me
            </button>
          </NavLink> */}

          <button
            onClick={downloadResume}
            className="px-6 py-2 text-base rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 transform transition duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
