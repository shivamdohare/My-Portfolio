import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    company: "Minfy Technologies",
    title: "Frontend Engineer · Healthcare — Medical Records Web App",
    period: "Jul 2025 – Present",
    tags: ["Next.js", "React", "TypeScript", "RBAC", "RHF + Zod"],
    points: [
      "Architected component structure for 5 modules (patient records, lab reports, clinical workflows); defined component contracts with backend ahead of API delivery to unblock parallel work.",
      "Reduced initial JS payload ~35% via route-level dynamic imports and bundle-analyzer audits flagging unused dependencies.",
      "Lifted Lighthouse performance ~60 → 90+ by deferring non-critical scripts and migrating eager image loads to next/image.",
      "Architected JWT-based RBAC for 4 roles with Next.js middleware route guards and a typed permissions hook for conditional UI.",
    ],
  },
  {
    company: "Minfy Technologies",
    title: "Frontend Engineer · Aerospace — Space Situational Awareness Dashboard",
    period: "Jan – Jun 2025",
    tags: ["Cesium.js", "React", "WebSockets", "Real-time", "Figma"],
    points: [
      "Defined architecture and data flow for a real-time satellite-tracking dashboard in Cesium.js + React, rendering 100+ live orbital positions and proximity alerts.",
      "Managed Cesium's imperative entity lifecycle from a React subscription layer to prevent memory leaks and stale entities.",
      "Replaced 5-second HTTP polling with WebSocket subscriptions — cut dashboard refresh from ~5s to sub-second.",
      "Authored a useWebSocket hook with reconnect logic and built a reusable component system from 20+ Figma designs backed by design tokens.",
    ],
  },
  {
    company: "Kartikey Security Services",
    title: "Frontend Engineer · Defense — Internal & Public Communication Portal",
    period: "Aug 2024 – Dec 2024",
    tags: ["React", "Redux", "Jest", "RTL"],
    points: [
      "Built 10+ user-facing features in React + Redux — form-heavy workflows and render-optimized data tables.",
      "Refactored Redux state to a normalized entity-by-id shape with reselect-memoized selectors, eliminating redundant re-renders.",
      "Added Jest + RTL coverage for auth, forms, and data-table modules, reaching 75%+ on those surfaces.",
      "Resolved 30+ cross-browser issues across Chrome, Firefox, Edge, and Safari.",
    ],
  },
  {
    company: "Kapston Services Limited",
    title: "Frontend Engineer · Defense — Internal Communication Portal",
    period: "Apr 2023 – Jul 2024",
    tags: ["React", "Performance", "Responsive UI"],
    points: [
      "Owned the responsive UI for an internal portal serving 1,000+ daily active users, standardizing layout patterns and shared components.",
      "Cut page load time ~30% via removing render-blocking scripts, system fonts on critical paths, and image compression + lazy loading.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      id="experience"
      className="w-full bg-gradient-to-b from-gray-900 to-ink py-24 text-white"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <SectionHeading eyebrow="Where I've shipped" className="pb-12">
          Work <span className="text-gradient">Experience</span>
        </SectionHeading>

        <div className="relative">
          {/* vertical timeline rail */}
          <div className="absolute left-2 top-2 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <Reveal key={i} delay={i * 60} className="relative sm:pl-12">
                <span className="absolute left-0 top-2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-ink shadow-glow sm:block" />
                <div className="glass glass-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {role.title}
                    </h3>
                    <span className="text-sm font-medium text-cyan-300">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-gray-400">
                    {role.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {role.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-gray-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
