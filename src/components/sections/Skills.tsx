import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { skills } from "../../data/skills";

// ------------------------------------------------------------
// Helper: Get official logo URL (Simple Icons CDN)
// ------------------------------------------------------------
const getLogoUrl = (skillName: string): string => {
  // Map skill names to Simple Icons slugs (lowercase, spaces replaced by hyphens)
  const slugMap: Record<string, string> = {
    "React": "react",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Node.js": "nodedotjs",
    "Python": "python",
    "Java": "java",
    "C#": "csharp",
    "PHP": "php",
    "HTML5": "html5",
    "CSS3": "css3",
    "Tailwind CSS": "tailwindcss",
    "Bootstrap": "bootstrap",
    "Sass": "sass",
    "Git": "git",
    "GitHub": "github",
    "GitLab": "gitlab",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "AWS": "amazonaws",
    "Firebase": "firebase",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "Figma": "figma",
    "Vue.js": "vuedotjs",
    "Angular": "angular",
    "Next.js": "nextdotjs",
    "Nuxt.js": "nuxtdotjs",
    "Svelte": "svelte",
  };

  // Find slug or fallback to a default (e.g., "code")
  const slug = slugMap[skillName] || "code";
  return `https://cdn.simpleicons.org/${slug}/00ffff`; // electric colour (#00ffff)
};

// ------------------------------------------------------------
// Circular Progress Component (unchanged)
// ------------------------------------------------------------
const CircularProgress: React.FC<{ percentage: number; inView: boolean }> = ({
  percentage,
  inView,
}) => {
  const size = 70;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = inView
    ? circumference * (1 - percentage / 100)
    : circumference;
  const gradientId = `progress-grad-${percentage}`;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          className="dark:stroke-gray-700"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute text-sm font-mono font-semibold text-electric">
        {percentage}%
      </span>
    </div>
  );
};

// ------------------------------------------------------------
// Skills Component (updated with logos)
// ------------------------------------------------------------
const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="font-mono py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5 pointer-events-none"></div>
      <Container>
        <SectionTitle title="Skills & Technologies" subtitle="My technical expertise" />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-6 rounded-xl bg-white dark:bg-navy-light shadow-lg hover:shadow-electric/20 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Left side: logo + name */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          {/* Replace emoji with official logo */}
                          <img
                            src={getLogoUrl(skill.name)}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback to skill.icon (emoji) if logo fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const fallback = document.createElement("span");
                              fallback.className = "text-3xl";
                              fallback.textContent = skill.icon;
                              target.parentNode?.insertBefore(fallback, target);
                            }}
                          />
                          <h4 className="text-xl font-semibold">{skill.name}</h4>
                        </div>
                        <CircularProgress percentage={skill.proficiency} inView={isInView} />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee (unchanged) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex w-max gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, ri) =>
              skills.map((skill) => (
                <span
                  key={`${ri}-${skill.name}`}
                  className="
                    flex-shrink-0
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border border-slate-700/20
                    bg-slate-800/60
                    px-4 py-2
                    text-sm
                    font-mono
                    text-slate-400
                    backdrop-blur-sm
                  "
                >
                  <img
                    src={getLogoUrl(skill.name)}
                    alt=""
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;