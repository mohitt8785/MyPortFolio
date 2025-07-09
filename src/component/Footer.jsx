import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="py-8 text-white bg-black">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col items-center mb-4 md:flex-row md:space-x-12">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">Mohit</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the USA, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-white rounded-r-lg bg-gradient-to-r from-green-400 to-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
       <div
          className="flex flex-col items-center justify-between pt-4 border-t border-gray-600 md:flex-row"
        >
            <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
          </p>
             <div className="flex my-4 space-x-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
