import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('Message sent successfully!')
      form.current.reset()
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-black text-white py-10 md:py-28 px-4 md:px-8 lg:px-16">
      {/* Background Gradient */}
      <div />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Me
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-start">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
                Let's Talk
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I'm open to discussing web development projects or partnership opportunities.
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-6 md:space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaEnvelope className="text-emerald-400 text-lg" />
                </div>
                <a
                  href="mailto:msharma89339@gmail.com"
                  className="text-white hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                >
                  msharma89339@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaPhone className="text-emerald-400 text-lg" />
                </div>
                <a
                  href="tel:+918146408785"
                  className="text-white hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                >
                  8146408785
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <FaMapMarkedAlt className="text-emerald-400 text-lg" />
                </div>
                <span className="text-white text-sm md:text-base">
                  S.A.S Nagar ( Mohali ), Punjab
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-gray-700">
              <p className="text-gray-300 font-medium mb-4">Connect</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/mohitt8785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-700 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
                >
                  <FaGithub className="text-base" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitsharma8785/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-700 text-white hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
                >
                  <FaLinkedin className="text-base" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Send a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg bg-slate-700/40 border border-slate-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg bg-slate-700/40 border border-slate-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Enter Your Message"
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg bg-slate-700/40 border border-slate-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              {/* Status Message */}
              {status && (
                <div
                  className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all duration-300 ${
                    status.includes('successfully')
                      ? 'bg-emerald-500/10 border-emerald-400/50 text-emerald-300'
                      : 'bg-red-500/10 border-red-400/50 text-red-300'
                  }`}
                >
                  {status}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 md:py-4 rounded-full font-semibold text-white bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact