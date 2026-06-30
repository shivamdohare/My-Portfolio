import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "experience" },
    { id: 5, link: "projects" },
    { id: 6, link: "contact" },
  ];

  // Shrink / frost the bar once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const sections = links
      .map(({ link }) => document.getElementById(link))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed top-0 z-30 flex h-20 w-full items-center justify-between px-4 text-white transition-all duration-300 sm:px-8 ${
        scrolled ? "h-16 glass shadow-card" : "bg-transparent"
      }`}
    >
      <Link
        to="home"
        smooth
        duration={500}
        className="ml-2 cursor-pointer font-signature text-4xl leading-none"
      >
        Shivam
      </Link>

      <ul className="hidden items-center md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-1">
            <Link
              to={link}
              smooth
              duration={500}
              className={`group relative cursor-pointer px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                active === link ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
              <span
                className={`absolute bottom-0 left-3 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 ${
                  active === link ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                }`}
              />
            </Link>
          </li>
        ))}
        <li className="pl-4">
          <a
            href="/Shivam_Dohare_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-200 hover:bg-cyan-400/20"
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-ink to-gray-900 text-gray-300">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 py-5 text-3xl capitalize">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                className="cursor-pointer hover:text-cyan-300"
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/Shivam_Dohare_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setNav(false)}
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-2 text-xl text-cyan-300"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
