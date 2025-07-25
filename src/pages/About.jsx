import React from "react";
import HeroImage from "../assets/Hero.jpeg";

const About = () => {
  return (
    <div className="text-white bg-black py-23 ">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-20 text-5xl font-bold text-center">About Me</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <img
            src={HeroImage}
            alt=""
            className="object-cover mb-8 rounded w-72 h-80 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-white">
              I'm a{" "}
              <span className="font-semibold text-green-400">
                Front-End Developer
              </span>{" "}
              with a strong grip on the MERN stack. I love crafting clean, fast,
              and responsive UIs that don’t just look good — they perform great.
              <br />
              <br />
              With a strong foundation in both{" "}
              <span className="font-semibold text-blue-400">frontend</span> and
              a growing interest in{" "}
              <span className="font-semibold text-purple-400">backend</span>{" "}
              technologies, I aim to bridge design and logic for a seamless user
              experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-10/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Javascript
                </label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-11/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-9/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"></div>
                </div>
              </div>
            </div>
           <div className="flex justify-around text-center mt-22">
  <div>
    <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      <span>6+ </span> <span className="italic text-white">Month Experience</span>
    </h3>
  </div>
  <div>
    <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      <span>5+ </span> <span className="italic text-white">Projects Complete</span>
    </h3>
  </div>
  <div>
    <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      <span>💡 </span> <span className="italic text-white">Learning Every Day</span>
    </h3>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
