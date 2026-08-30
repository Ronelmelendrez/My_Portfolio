import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import meImage from '@/assets/images/me.webp';

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <Container className="grid grid-cols-1 items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="ABOUT"
            title="The engineer behind the code."
          />
          <p className="text-dim mb-5 mt-5 text-[16px] leading-relaxed">
          I'm a fresh graduate passionate about building products, exploring startups, and turning
          ideas into practical digital solutions. I enjoy working with modern technologies, building 
          full-stack applications, exploring AI, and continuously upskilling through hands-on projects.
          I care about clean and scalable architecture, usually organizing applications by feature to keep
          code modular, maintainable, and easier to grow. I also value fast iteration, learning from real-world
          problems, and building products that are simple, useful, and ready to evolve.
          </p>
          <p className="text-dim text-[16px] leading-relaxed">
            Based in Ampayon Butuan City, 4th Year Student. B.S. Information Technology, Caraga State 
            University.
          </p>  
        </Reveal>

        <Reveal delay={0.1}>
  <div className="flex justify-center mt-10">
    <div className="relative p-3 mt-10">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-40 blur-2xl" />

      {/* Image */}
      <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border border-border bg-card">
        <img
          src={meImage}
          alt="Ronel Melendrez"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</Reveal>
      </Container>
    </section>
  );
}