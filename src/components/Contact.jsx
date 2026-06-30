import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="w-full bg-gradient-to-b from-gray-900 to-ink py-24 text-white"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="pb-10">
          <h2 className="section-title">
            Get in <span className="text-gradient">touch</span>
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
          <p className="mt-4 max-w-2xl text-gray-400">
            Have a role or project in mind? Drop a message — I usually reply
            within a day.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-4 md:col-span-2">
            <a
              href="mailto:shivamdohare@gmail.com"
              className="glass flex items-center gap-3 rounded-xl p-4 transition-colors duration-200 hover:border-cyan-400/40"
            >
              <HiOutlineMail size={22} className="text-cyan-300" />
              <span className="text-sm text-gray-300">shivamdohare@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/shivam-dohare"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-3 rounded-xl p-4 transition-colors duration-200 hover:border-cyan-400/40"
            >
              <FaLinkedin size={22} className="text-cyan-300" />
              <span className="text-sm text-gray-300">linkedin.com/in/shivam-dohare</span>
            </a>
            <a
              href="https://github.com/shivamdohare"
              target="_blank"
              rel="noreferrer"
              className="glass flex items-center gap-3 rounded-xl p-4 transition-colors duration-200 hover:border-cyan-400/40"
            >
              <FaGithub size={22} className="text-cyan-300" />
              <span className="text-sm text-gray-300">github.com/shivamdohare</span>
            </a>
            <div className="glass flex items-center gap-3 rounded-xl p-4">
              <FaMapMarkerAlt size={20} className="text-cyan-300" />
              <span className="text-sm text-gray-300">Hyderabad, India</span>
            </div>
          </div>

          {/* Form */}
          <form
            action="https://getform.io/f/zbxdgjeb"
            method="POST"
            className="glass flex flex-col gap-4 rounded-2xl p-6 md:col-span-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-md border border-white/10 bg-white/5 p-3 text-white placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400/50 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="rounded-md border border-white/10 bg-white/5 p-3 text-white placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400/50 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              required
              className="rounded-md border border-white/10 bg-white/5 p-3 text-white placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400/50 focus:outline-none"
            ></textarea>
            <button className="w-fit rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-3 font-medium text-white shadow-glow transition-transform duration-200 hover:scale-105">
              Let's talk
            </button>
          </form>
        </div>

        <p className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shivam Dohare · Built with React &amp; Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Contact;
