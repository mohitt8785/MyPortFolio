import React from "react";
// import HeroImage from "../assets/Hero.jpeg";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../component/Footer";
import { NavLink } from "react-router-dom";
import MohitHome from "../assets/MohitHome.jpeg"

const Home = () => {
  const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/mohitcv.pdf"; 
  link.download = "Mohit_Sharma_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  
  return (
    <>
      <div className="py-16 text-center text-white bg-black">
        <img
          src={MohitHome}
          alt=""
          className="object-cover w-48 h-48 mx-auto mb-8 transition duration-300 rounded-full transform-transform hover:scale-105"
        />
       <h1>
  I'm
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    {" "}Mohit{" "}
  </span>
  , Frontend Developer
</h1>

<p className="mt-4 text-lg italic text-gray-300">
  I specialize in building modern and responsive web applications
</p>

<p className="mt-2 text-base italic text-gray-400">
  Turning ideas into interactive and lightning-fast digital experiences
</p>

        <div className="mt-8 space-x-4">
          <NavLink to={"/contact"}>
            <button  className="px-4 py-2 text-white transition-transform duration-300 transform rounded rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
            {" "}
            Contact With Me
          </button>
          </NavLink>
          <button onClick={downloadResume} className="px-4 py-2 text-white transition-transform duration-300 transform rounded rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 md:inline hover:scale-105">
            Resume
          </button>
        </div>
      </div>
      <About />
      <Services />
      <Projects />

      <Contact />
       <Footer/>
    </>
  );
};

export default Home;
