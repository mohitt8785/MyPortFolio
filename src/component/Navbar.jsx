import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 text-white bg-black md:px-16 lg:px-24">
      <div className="container flex items-center justify-center py-2 md:justify-between">
        <div className="hidden text-2xl font-bold md:inline">MyPortfolio</div>
        <div className="space-x-6">
          <NavLink className="hover:text-gray-400" to="/" end>
            {" "}
            Home
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/about">
            About
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/services">
            Services
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/projects">
            Projects
          </NavLink>
          <NavLink className="hover:text-gray-400" to="/contact">
            Contact
          </NavLink>
        </div>
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-105">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
