import React, { useEffect, useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "../common/Button";
import SocialLinks from "../common/SocialLinks";
import { TypeAnimation } from "react-type-animation";
import ParticleField from "../three/ParticleField";

/* ─── Mouse Follower Glow ─── */
const CursorGlow: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: springX,
        top: springY,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
};

/* ─── Orbiting Geometric Shapes ─── */
const OrbitingShapes: React.FC = () => {
  const shapes = [
    { size: 14, delay: 0, duration: 20, radius: 130 },
    { size: 10, delay: 2, duration: 25, radius: 160 },
    { size: 8, delay: 4, duration: 18, radius: 115 },
    { size: 12, delay: 1, duration: 22, radius: 145 },
    { size: 6, delay: 3, duration: 30, radius: 175 },
  ];

  const colors = [
    "rgba(59,130,246,0.7)",
    "rgba(6,182,212,0.6)",
    "rgba(96,165,250,0.5)",
    "rgba(34,211,238,0.6)",
    "rgba(59,130,246,0.5)",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{ marginLeft: -shape.size / 2, marginTop: -shape.size / 2 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        >
          <div
            className="rounded-sm"
            style={{
              width: shape.size,
              height: shape.size,
              transform: `translateX(${shape.radius}px)`,
              background: `linear-gradient(135deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})`,
              boxShadow: `0 0 ${shape.size}px rgba(59,130,246,0.4)`,
            }}
          />
        </motion.div>
      ))}
      {/* Orbital rings */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-electric/5"
        style={{ width: 300, height: 300, marginLeft: -150, marginTop: -150 }}
      />
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-cyan/5"
        style={{ width: 250, height: 250, marginLeft: -125, marginTop: -125 }}
      />
    </div>
  );
};

/* ─── Tech Badge ─── */
const TechBadge: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 200 }}
    className="px-3 py-1.5 rounded-full text-xs font-medium border border-electric/20 bg-electric/5 text-electric-light backdrop-blur-sm hover:border-electric/40 hover:bg-electric/10 transition-all duration-300 cursor-default"
  >
    {label}
  </motion.span>
);

/* ─── Stats Counter ─── */
const StatItem: React.FC<{ value: string; label: string; delay: number }> = ({
  value,
  label,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="text-center"
  >
    <div className="text-xl sm:text-2xl font-bold gradient-text">{value}</div>
    <div className="text-xs text-grayText mt-1">{label}</div>
  </motion.div>
);

/* ─── Main Hero Component ─── */
const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="font-mono min-h-screen flex items-center justify-center relative overflow-hidden px-2">
      {/* Cursor glow */}
      <CursorGlow />

      {/* ── 3D Particle Background ── */}
      <ParticleField />

      {/* ── Ambient Gradient Orbs ── */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 rounded-full"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 rounded-full"
          style={{
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Subtle Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Noise Texture Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* ════════ Left Content ════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/5 border border-electric/15 text-electric-light text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text inline-block">Ronel</span>
              <br />
              <span className="gradient-text inline-block">Melendrez</span>
            </motion.h1>

            {/* Typed roles */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl font-semibold mb-5 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Innovator",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-700 dark:text-gray-300"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-grayText text-base sm:text-lg mb-7 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I build scalable web applications and create exceptional digital
              experiences that drive business growth.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {["React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"].map(
                (tech, i) => (
                  <TechBadge key={tech} label={tech} delay={0.7 + i * 0.05} />
                )
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="primary"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  ↓ Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let's Talk →
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-gray-200/10 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0"
            >
              <StatItem value="3+" label="Years Experience" delay={1} />
              <StatItem value="20+" label="Projects Done" delay={1.1} />
              <StatItem value="10+" label="Happy Clients" delay={1.2} />
            </motion.div>
          </motion.div>

          {/* ════════ Right — 3D Profile Card ════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80, damping: 15 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Glow behind */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(6,182,212,0.15) 40%, transparent 70%)",
                  filter: "blur(30px)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orbiting shapes */}
              <OrbitingShapes />

              {/* Image wrapper */}
              <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                {/* Gradient border ring */}
                <div className="relative p-1 rounded-full bg-gradient-to-br from-electric via-cyan to-electric">
                  <div className="rounded-full bg-navy p-1">
                    <img
                      src="src/assets/images/me.png"
                      alt="Ronel Melendrez"
                      className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
                      style={{ transform: "translateZ(30px)" }}
                    />
                  </div>
                </div>

                {/* Floating glass card — bottom right */}
                <motion.div
                  className="absolute -bottom-4 -right-2 sm:-right-4 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl glass border border-electric/20"
                  style={{ transform: "translateZ(50px)" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-gray-300">
                      Open to work
                    </span>
                  </div>
                </motion.div>

                {/* Floating glass card — top left */}
                <motion.div
                  className="absolute -top-2 -left-4 sm:-left-6 px-3 py-2 rounded-xl glass border border-cyan/20"
                  style={{ transform: "translateZ(40px)" }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-xs font-medium text-cyan-light">
                    ⚡ React · TS
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-grayText tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-grayText/30 flex justify-center pt-1.5"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-electric"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;