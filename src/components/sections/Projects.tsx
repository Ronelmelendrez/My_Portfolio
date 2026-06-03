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
  const displayedProjects = featured ? projects.filter((p) => p.featured) : projects;
  const technologies = [...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects =
    filter === "all" ? displayedProjects : displayedProjects.filter((p) => p.technologies.includes(filter));

  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="Some of my best work" />

        {!featured && (
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === "all" ? "bg-electric text-white" : "bg-gray-200 dark:bg-navy-light hover:bg-electric/20"
              }`}
            >
              All
            </button>
            {technologies.slice(0, 6).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === tech ? "bg-electric text-white" : "bg-gray-200 dark:bg-navy-light hover:bg-electric/20"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-navy-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-grayText dark:text-gray-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-electric/10 text-electric">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-electric transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-electric transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl border-2 border-electric/0 group-hover:border-electric/30 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Projects;