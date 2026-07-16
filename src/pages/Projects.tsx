// src/pages/Projects.tsx
import React from "react";
import ProjectsSection from "../components/sections/Projects";
import Container from "../components/common/Container";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="font-mono pt-20 pb-10 bg-gradient-to-b from-electric/5 to-transparent">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 grad-text">All Projects</h1>
            <p className="text-graytext text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web applications and software solutions
            </p>
          </div>
        </Container>
      </section>
      <ProjectsSection featured={false} />
    </motion.div>
  );
};

export default ProjectsPage;