import React from "react";
import HeroImage from "../assets/Hero.jpeg";

const About = () => {
  return (
    <div className="text-white bg-black py-27 ">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 font-bold text-center text-4x1">About Me</h2>
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <img
            src={HeroImage}
            alt=""
            className="object-cover mb-8 rounded w-72 h-80 md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-8 text-lg">
              I am a passionate full-stack devloper with a focus on building
              modern and responsive web application. With a strong foundation in
              both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center" >
                <label htmlFor="htmlandcss" className="w-2/12" >HTML & CSS</label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-10/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105" >
                    
                  </div>
                </div>
              </div>
               <div className="flex items-center" >
                <label htmlFor="htmlandcss" className="w-2/12" >Javascript</label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-11/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105" >
                    
                  </div>
                </div>
              </div>
               <div className="flex items-center" >
                <label htmlFor="htmlandcss" className="w-2/12" >React JS</label>
                <div className="h-2.5 bg-gray-800 rounded-full grow ">
                  <div className="w-9/12 h-2.5 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105" >
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-12 text-center" >
              <div>
                <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" >
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" >
                  50+
                </h3>
                <p>Projects Complete</p>
              </div>
               <div>
                <h3 className="font-bold text-transparent text-2x1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
