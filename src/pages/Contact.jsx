import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const contactDetails = [
  {
    id: 1,
    label: "Email",
    value: "msharma89339@gmail.com",
    href: "mailto:msharma89339@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 81464 08785",
    href: "tel:+918146408785",
    icon: FaPhone,
  },
  {
    id: 3,
    label: "Location",
    value: "S.A.S. Nagar, Mohali, Punjab",
    href: "",
    icon: FaLocationDot,
  },
];

const Contact = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please contact me directly.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      form.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute right-[-150px] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="absolute bottom-0 left-[-130px] h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Contact <span className="text-gray-500">Me</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Have a project, opportunity, or idea in mind? Send me a message and
            I’ll get back to you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Column */}
          <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              Contact information
            </p>

            <h3 className="mt-4 text-3xl font-semibold">
              Let’s build something
              <span className="block text-gray-500">useful together.</span>
            </h3>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              I’m open to MERN Stack opportunities, freelance projects, and
              professional collaborations.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-sm text-gray-200">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-4 text-sm text-gray-500">
                Find me on social media
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/mohitt8785"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Mohit's GitHub profile"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/mohitsharma8785/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Mohit's LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <FaLinkedin size={17} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-7 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-semibold">Send me a message</h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill in the details below and I’ll respond as soon as possible.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-green-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-green-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project or opportunity"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              {/* Form Status */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-400/30 bg-green-400/10 text-green-300"
                      : "border-red-400/30 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;