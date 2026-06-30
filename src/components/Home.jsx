import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const stack = ["React", "Next.js", "TypeScript", "Cesium.js", "WebSockets", "Agentic AI"];

  return (
    <div
      name="home"
      id="home"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-ink via-ink to-gray-900"
    >
      {/* Ambient background flourishes */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:42px_42px] opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center gap-10 px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <span className="mb-4 flex w-fit animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Frontend / Full-Stack roles
          </span>

          <h2 className="animate-fade-up text-4xl font-bold leading-tight text-white sm:text-6xl">
            Building <span className="text-gradient">real-time</span> &amp;{" "}
            <span className="text-gradient">AI-driven</span> interfaces.
          </h2>

          <p className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-gray-400 sm:text-lg">
            I'm <span className="font-semibold text-white">Shivam Dohare</span>, a
            Frontend Engineer with 3+ years building performance-critical UIs and
            real-time data visualization — from a Cesium.js satellite dashboard
            rendering 100+ live entities to Next.js healthcare workflows and
            agentic AI systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-glow transition-transform duration-200 hover:scale-105"
            >
              View my work
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 animate-float rounded-full bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 blur-2xl" />
          <img
            src={HeroImage}
            alt="Shivam Dohare"
            className="mx-auto w-2/3 rounded-2xl ring-1 ring-white/10 md:w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
