import React from "react";
import MohitAbout from "../assets/MohitAbout.jpeg";

const About = () => {
  return (
    <section className="text-white bg-black py-10">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">
          About Me
        </h2>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          {/* Profile Image */}
          <img
            src={MohitAbout}
            alt="Mohit Sharma"
            className="object-cover mb-8 rounded-2xl w-72 h-80 md:mb-0 shadow-lg shadow-green-500/20"
          />

          {/* About Text & Skills */}
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-green-400">Full-Stack Developer</span>{" "}
              with expertise in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building clean, fast, and responsive web applications that not only look great but also perform efficiently.
              <br />
              <br />
              I have a strong foundation in{" "}
              <span className="font-semibold text-blue-400">frontend</span> development
              and practical experience with{" "}
              <span className="font-semibold text-purple-400">backend</span>{" "}
              technologies. I aim to bridge design and logic to deliver seamless
              user experiences while writing scalable and maintainable code.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {[
                { name: "HTML & CSS", level: "w-10/12" },
                { name: "JavaScript", level: "w-11/12" },
                { name: "React JS", level: "w-9/12" },
                { name: "Node.js & Express", level: "w-8/12" },
                { name: "MongoDB", level: "w-7/12" },
              ].map((skill, index) => (
                <div className="flex items-center" key={index}>
                  <label className="w-3/12">{skill.name}</label>
                  <div className="h-2.5 bg-gray-800 rounded-full grow">
                    <div
                      className={`${skill.level} h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-transform duration-300 hover:scale-105`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="flex flex-col items-center justify-between gap-8 mt-12 text-center md:flex-row">
              {[
                { value: "6+", label: "Months Experience" },
                { value: "5+", label: "Projects Complete" },
                { value: "💡", label: "Learning Every Day" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {item.value}{" "}
                    <span className="italic text-white text-lg">{item.label}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
