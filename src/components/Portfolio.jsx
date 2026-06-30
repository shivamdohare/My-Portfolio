import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

import newszone from "../assets/portfolio/newsZone.png";
import textutilities from "../assets/portfolio/textUtilities.png";

// NOTE: update the `demo` / `code` URLs below with your real links.
const featured = [
  {
    id: "escapelab",
    name: "EscapeLab",
    tagline: "E-Commerce UI with URL-Synchronized State",
    initials: "EL",
    accent: "from-cyan-500/30 to-indigo-500/20",
    description:
      "Filters, sort, and pagination serialize to query params for shareable, deterministic views. Catalog rendering uses memoized cards, IntersectionObserver lazy-loading, and a localStorage-persisted cart reducer with optimistic updates. 95+ Lighthouse across all categories.",
    tags: ["Next.js", "Tailwind", "URL State", "next/image", "SEO / JSON-LD"],
    demo: "https://escapelab.netlify.app/",
    code: "https://github.com/shivamdohare",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    tagline: "This site — React + Tailwind",
    initials: "SD",
    accent: "from-fuchsia-500/30 to-purple-500/20",
    description:
      "A fully responsive single-page portfolio with smooth section scrolling, scroll-spy navigation, IntersectionObserver-driven highlights, and a motion-aware animated hero. Built for fast loads and clean accessibility.",
    tags: ["React", "Tailwind", "react-scroll", "Responsive", "a11y"],
    demo: "https://shivamdohare.netlify.app/",
    code: "https://github.com/shivamdohare",
  },
];

const more = [
  {
    id: 1,
    src: newszone,
    name: "News Zone",
    description: "Live news app integrating a third-party news API with category filtering.",
    tags: ["React", "News API"],
    demo: "#",
    code: "https://github.com/shivamdohare",
  },
  {
    id: 2,
    src: textutilities,
    name: "Text Utilities",
    description: "Text manipulation toolkit — case conversion, word count, and live preview.",
    tags: ["React", "Bootstrap"],
    demo: "#",
    code: "https://github.com/shivamdohare",
  },
];

const LinkButtons = ({ demo, code, small }) => (
  <div className={`flex gap-3 ${small ? "mt-3" : "mt-5"}`}>
    {demo && demo !== "#" && (
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105"
      >
        <FiExternalLink /> Live
      </a>
    )}
    {demo === "#" && (
      <span className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-500">
        <FiExternalLink /> Demo soon
      </span>
    )}
    {code && (
      <a
        href={code}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:border-cyan-400/40 hover:text-white"
      >
        <FiGithub /> Code
      </a>
    )}
  </div>
);

const Portfolio = () => {
  return (
    <div
      name="projects"
      id="projects"
      className="w-full bg-gradient-to-b from-ink to-gray-900 py-24 text-white"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <SectionHeading
          eyebrow="Selected work"
          subtitle="A few things I've designed and shipped. More on my GitHub."
        >
          Featured <span className="text-gradient">Projects</span>
        </SectionHeading>

        {/* Featured */}
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className="glass glass-border group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-40" />
                <span className="relative text-5xl font-bold tracking-tight text-white/90">
                  {p.initials}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="text-sm font-medium text-cyan-300">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <LinkButtons demo={p.demo} code={p.code} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* More projects */}
        <Reveal as="h3" className="mb-6 mt-14 text-lg font-semibold text-gray-300">
          More builds
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {more.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className="glass glass-border group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg font-semibold text-white">{p.name}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <LinkButtons demo={p.demo} code={p.code} small />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
