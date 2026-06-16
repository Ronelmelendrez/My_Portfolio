import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouse);

    // Colors matching the portfolio palette
    const colors = [
      "rgba(59,130,246,",  // electric blue
      "rgba(6,182,212,",   // cyan
      "rgba(96,165,250,",  // electric light
      "rgba(34,211,238,",  // cyan light
    ];

    // Initialize particles
    const PARTICLE_COUNT = 80;
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.pulse += p.pulseSpeed;

        // Mouse interaction - subtle repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / dist) * force * 0.8;
          p.y += (dy / dist) * force * 0.8;
        }

        // Wrap around
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
        if (p.z < 0) p.z = 1000;
        if (p.z > 1000) p.z = 0;

        // 3D projection
        const scale = 1000 / (1000 - p.z);
        const projX = p.x * scale;
        const projY = p.y * scale;
        const projSize = p.size * scale;
        const pulsedOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        const finalOpacity = pulsedOpacity * (0.3 + 0.7 * scale);

        // Draw particle
        ctx.beginPath();
        ctx.arc(projX, projY, projSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color + finalOpacity + ")";
        ctx.fill();

        // Glow effect
        if (projSize > 1.5) {
          ctx.beginPath();
          ctx.arc(projX, projY, projSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color + finalOpacity * 0.15 + ")";
          ctx.fill();
        }
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 200) {
            const scaleA = 1000 / (1000 - a.z);
            const scaleB = 1000 / (1000 - b.z);
            const opacity = (1 - dist / 200) * 0.08;

            ctx.beginPath();
            ctx.moveTo(a.x * scaleA, a.y * scaleA);
            ctx.lineTo(b.x * scaleB, b.y * scaleB);
            ctx.strokeStyle = `rgba(59,130,246,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ParticleField;