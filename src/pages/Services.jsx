import React from "react";
import { FaPaintBrush, FaLaptopCode, FaServer } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    details: ["Web-Designing", "Responsive Layouts", "Material UI"],
    icon: <FaPaintBrush size={40} className="text-green-400" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    details: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Responsive Web"],
    icon: <FaLaptopCode size={40} className="text-blue-400" />,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    details: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    icon: <FaServer size={40} className="text-purple-400" />,
  },
];

const Services = () => {
  return (
    <div className="text-white bg-black py-10" id="service">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-center mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center px-6 pb-12 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>

              {/* Number */}
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 mb-2">
                {service.id}
              </div>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">{service.description}</p>

              {/* Skill Details */}
              <ul className="text-gray-400 space-y-1">
                {service.details.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
