import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "3+", label: "Years building UIs" },
  { value: "100+", label: "Live entities rendered" },
  { value: "~35%", label: "JS payload reduced" },
  { value: "90+", label: "Lighthouse performance" },
];

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-gradient-to-b from-gray-900 to-ink py-24 text-white"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col px-4">
        <SectionHeading eyebrow="Who I am">
          About <span className="text-gradient">me</span>
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="space-y-5 text-lg leading-relaxed text-gray-300 md:col-span-3">
            <p>
              I'm a Frontend Engineer with{" "}
              <span className="text-white">3+ years</span> specializing in
              performance-critical UIs and real-time data visualization across
              regulated domains — aerospace, healthcare, and defense. I like the
              hard problems: imperative 3D scene lifecycles, sub-second WebSocket
              pipelines, and shaving payloads down to hit strict Lighthouse
              budgets.
            </p>
            <p>
              Recently I've gone deep on{" "}
              <span className="text-white">Agentic AI</span> — building with the
              OpenAI SDK, RAG over Qdrant vector search, MCP server authoring, and
              multi-step agent loops with structured, Zod-validated outputs. I
              work closely with backend teams to shape APIs and data models around
              demanding frontend requirements, often defining component contracts
              ahead of API delivery to unblock parallel work.
            </p>
            <p>
              Outside of shipping features, I care about the craft: normalized
              state, memoized selectors, reusable design-token-backed component
              systems, and accessible, cross-browser-correct UI.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map(({ value, label }, i) => (
              <Reveal
                key={label}
                delay={i * 80}
                className="glass glass-border flex flex-col items-center justify-center rounded-xl p-5 text-center transition-transform duration-200 hover:scale-105 hover:shadow-glow"
              >
                <span className="text-3xl font-bold text-gradient">{value}</span>
                <span className="mt-2 text-sm text-gray-400">{label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
