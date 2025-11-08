import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="text-white bg-black py-24" id="contact">
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h2 className="mb-12 text-5xl font-bold text-center">Contact Me</h2>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">

          {/* Left Side */}
          <div className="flex-1">
            <h3 className="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>

            <div className="mt-8 mb-4">
              <FaEnvelope className="inline-block mr-2 text-green-400" />
              <a href="mailto:msharma89339@gmail.com" className="hover:underline">
                msharma89339@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block mr-2 text-green-400" />
              <span>8146408785</span>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block mr-2 text-green-400" />
              <span>Sunam (Sangrur), Punjab</span>
            </div>
          </div>


          {/* Right Side */}
          <div className="flex-1 w-full">
            <form
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400"
                  rows="4"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
