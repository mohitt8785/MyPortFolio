import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      <div className="flex p-10 flex-col items-center justify-between pt-4 border-t border-gray-600 md:flex-row">
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
    </footer>
  );
};

export default Footer;
