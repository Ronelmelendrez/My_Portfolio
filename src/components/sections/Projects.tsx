import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectsProps {
  featured?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ featured = false }) => {
  const [filter, setFilter] = useState("all");

  const displayedProjects = featured
    ? projects.filter((p) => p.featured)
    : projects;

  const technologies = [
    ...new Set(projects.flatMap((p) => p.technologies)),
  ];

  const filteredProjects =
    filter === "all"
      ? displayedProjects
      : displayedProjects.filter((p) =>
          p.technologies.includes(filter)
        );

  return (
    <section className="font-mono relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my best work"
        />

        {!featured && (
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-electric text-white shadow-lg shadow-electric/30"
                  : "border border-white/10 bg-white/5 backdrop-blur-md hover:border-electric/40 hover:bg-electric/10"
              }`}
            >
              All
            </button>

            {technologies.slice(0, 6).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? "bg-electric text-white shadow-lg shadow-electric/30"
                    : "border border-white/10 bg-white/5 backdrop-blur-md hover:border-electric/40 hover:bg-electric/10"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group"
              >
                <div
                  className="
                    h-full overflow-hidden rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-electric/30
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]
                  "
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-56 w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-navy via-navy/20 to-transparent
                        opacity-70
                      "
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute left-4 top-4 rounded-full bg-electric px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="mb-3 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mb-6 text-base leading-7 text-grayText dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-lg
                            border border-electric/20
                            bg-electric/10
                            px-3 py-1
                            text-xs
                            font-medium
                            text-electric
                            transition-colors
                            group-hover:border-electric/40
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex flex-1 items-center justify-center gap-2
                          rounded-xl border border-white/10
                          px-4 py-3
                          text-sm font-medium
                          transition-all duration-300
                          hover:border-electric/40
                          hover:bg-white/5
                        "
                      >
                        <FaGithub />
                        Code
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex flex-1 items-center justify-center gap-2
                          rounded-xl
                          bg-electric px-4 py-3
                          text-sm font-medium text-white
                          shadow-lg shadow-electric/25
                          transition-all duration-300
                          hover:bg-electric-light
                          hover:shadow-electric/40
                        "
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Projects;
