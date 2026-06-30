import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    icon: <FaRobot />,
    title: "AI / Agentic",
    accent: "from-fuchsia-500/20 to-purple-500/10 text-fuchsia-300",
    skills: [
      "OpenAI SDK",
      "RAG",
      "Vector Embeddings",
      "Qdrant",
      "MCP Server Authoring",
      "Agent Orchestration",
      "Multi-step Loops",
      "Structured Outputs",
      "Zod Validation",
      "Guardrails",
    ],
  },
  {
    icon: <FaReact />,
    title: "Frontend",
    accent: "from-cyan-500/20 to-sky-500/10 text-cyan-300",
    skills: [
      "React.js",
      "Next.js (App Router, SSR/SSG)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
  },
  {
    icon: <TbBrandNextjs />,
    title: "Specialized",
    accent: "from-indigo-500/20 to-blue-500/10 text-indigo-300",
    skills: [
      "Cesium.js (3D Geospatial)",
      "Real-time Data Pipelines",
      "WebSockets (socket.io / ws)",
      "URL-synchronized State",
    ],
  },
  {
    icon: <FaNodeJs />,
    title: "Backend",
    accent: "from-emerald-500/20 to-green-500/10 text-emerald-300",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Auth",
      "RBAC",
      "API Contract Design",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300",
    skills: [
      "MongoDB",
      "Mongoose",
      "Qdrant",
      "Schema Design",
      "Indexing",
      "Aggregation Pipelines",
      "Query Optimization",
    ],
  },
  {
    icon: <FaAws />,
    title: "Cloud & DevOps",
    accent: "from-orange-500/20 to-red-500/10 text-orange-300",
    skills: ["AWS (EC2, S3, ECR/ECS)", "Docker", "Containerized Deploys", "CI Image Builds"],
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "Styling & Testing",
    accent: "from-pink-500/20 to-rose-500/10 text-pink-300",
    skills: [
      "Material UI",
      "Sass",
      "Figma",
      "Design Tokens",
      "a11y",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Lighthouse",
    ],
  },
];

const Skills = () => {
  return (
    <div
      name="skills"
      id="skills"
      className="w-full bg-gradient-to-b from-ink to-gray-900 py-24 text-white"
    >
      <div className="mx-auto max-w-screen-lg px-4">
        <SectionHeading
          eyebrow="What I work with"
          subtitle="The stack I reach for — from the AI / agentic layer down to cloud deployment."
        >
          Skills &amp; <span className="text-gradient">Toolbox</span>
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon, title, skills, accent }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 90}
              className="glass glass-border group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-xl ${accent}`}
                >
                  {icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
