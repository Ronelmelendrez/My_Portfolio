import React from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

// Custom useInView hook (unchanged)
function useInView(options?: { threshold?: number; once?: boolean }) {
  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);
  const hasTriggered = React.useRef(false);

  React.useEffect(() => {
    if (!ref) return;
    if (options?.once && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once) {
            hasTriggered.current = true;
            observer.disconnect();
          }
        } else if (!options?.once) {
          setInView(false);
        }
      },
      { threshold: options?.threshold ?? 0 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options?.threshold, options?.once]);

  return { ref: setRef, inView };
}

// Counter hook (unchanged)
function useCounter(end: number, trigger: boolean): number {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = end / (duration / stepTime);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, trigger]);
  return count;
}

// GlassCard component
const GlassCard: React.FC<{
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}> = ({ children, hover = false, className = "" }) => {
  return (
    <div
      className={`
        bg-navy-light/50 backdrop-blur-md rounded-2xl
        border border-electric/20
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${hover ? "hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-electric/20" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, once: true });

  const years = useCounter(6, inView);
  const projects = useCounter(20, inView);
  const clients = useCounter(15, inView);

  const stats = [
    { value: years, suffix: "+", label: "Years Experience" },
    { value: projects, suffix: "+", label: "Projects Completed" },
    { value: clients, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="font-mono py-20 max-w-7xl mx-auto bg-transparent">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        {/* Two column grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column – Bio */}
          <div
            className={`
              transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            <GlassCard className="p-10">
              {/* Avatar + name row */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="
                    w-[77px] h-[77px] rounded-full
                    bg-gradient-to-br from-slate to-navy
                    border-2 border-electric/40
                    flex items-center justify-center text-3xl
                  "
                >
                  <img
                src="src/assets/images/me.png"
                alt="Ronel Melendrez"
                className="w-[72px] h-[72px] rounded-full object-cover"/>
                </div>
                <div>
                  {/* Name in JetBrains Mono */}
                  <h3 className="text-slate-50 font-mono text-xl m-0">
                    Ronel Melendrez
                  </h3>
                  {/* Role already uses font-mono */}
                  <span className="text-electric font-mono text-sm">
                    Senior Full Stack Engineer
                  </span>
                </div>
              </div>

              {/* Bio text – now using font-mono */}
              <p className="text-grayText dark:text-gray-400 leading-relaxed mb-5 text-sm font-mono">
                I'm a full‑stack software engineer with {years}+ years of
                experience building robust web applications. My journey in tech
                started with a curiosity for how things work, which evolved into
                a career focused on elegant solutions.
              </p>
              <p className="text-grayText dark:text-gray-400 leading-relaxed mb-8 text-sm font-mono">
                I specialize in modern JavaScript frameworks and cloud
                technologies, always staying up‑to‑date with industry trends.
                When I'm not coding, I contribute to open‑source and mentor
                aspiring developers.
              </p>

              {/* Tags already use font-mono */}
              <div className="flex flex-wrap gap-3">
                {["Bachelor's in IT", "AWS Certified", "Open to Remote"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1 rounded-lg
                        bg-electric/10 border border-electric/20
                        text-electric-light font-mono text-xs
                      "
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </div>

          {/* Right column – Stats & Social */}
          <div
            className={`
              transition-all duration-800 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
          >
            <div className="grid gap-5">
              {stats.map(({ value, suffix, label }) => (
                <GlassCard key={label} hover className="p-7 flex items-center gap-6">
                  {/* Stats numbers now use font-mono (removed Syne) */}
                  <div className="gradient-text font-mono text-5xl font-extrabold min-w-[80px]">
                    {value}
                    {suffix}
                  </div>
                  <div className="text-grayText dark:text-gray-400 text-sm font-mono">
                    {label}
                  </div>
                </GlassCard>
              ))}

              {/* Social links already use font-mono */}
              <GlassCard className="p-6">
                <div className="flex justify-around gap-8">
                  {["github", "linkedin", "twitter", "email"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="
                        text-grayText hover:text-electric
                        uppercase tracking-wider text-xs font-mono
                        transition-colors duration-200
                      "
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;