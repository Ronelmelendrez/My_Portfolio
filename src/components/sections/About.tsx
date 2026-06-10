import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const About: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const sectionRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();

      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const stats = [
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 20, label: "Projects Completed", suffix: "+" },
    { value: 15, label: "Happy Clients", suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative overflow-hidden py-20 bg-gray-50 dark:bg-navy/30"
    >
      {/* Cursor Glow */}
      {isHovering && (
        <>
          {/* Electric Glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none blur-[90px]"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            style={{
              background: `radial-gradient(
                circle 180px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(59,130,246,0.18),
                transparent
              )`,
            }}
          />

          {/* Cyan Glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none blur-[120px]"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              background: `radial-gradient(
                circle 250px at ${mousePosition.x}px ${mousePosition.y}px,
                rgba(6,182,212,0.10),
                transparent
              )`,
            }}
          />
        </>
      )}

      <Container className="relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-2xl font-bold">
              Passionate Developer Creating Digital Solutions
            </h3>

            <p className="mb-4 leading-relaxed text-grayText dark:text-gray-400">
              I'm a full-stack software engineer with over 5 years
              of experience building robust web applications.
              My journey in tech started with a curiosity for how
              things work, which evolved into a career focused on
              creating elegant solutions to complex problems.
            </p>

            <p className="mb-6 leading-relaxed text-grayText dark:text-gray-400">
              I specialize in modern JavaScript frameworks and
              cloud technologies, always staying up-to-date with
              industry trends. When I'm not coding, I enjoy
              contributing to open-source projects and mentoring
              aspiring developers.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-electric" />
                <span className="text-gray-700 dark:text-gray-300">
                  Bachelor's in IT
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan" />
                <span className="text-gray-700 dark:text-gray-300">
                  AWS Certified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/70
                  p-6
                  text-center
                  shadow-lg
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
                  dark:bg-navy-light/80
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric/0 via-electric/5 to-cyan/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={
                    isInView
                      ? {
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                  }}
                  className="relative mb-2 text-4xl font-bold gradient-text"
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>

                <p className="relative text-grayText dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;