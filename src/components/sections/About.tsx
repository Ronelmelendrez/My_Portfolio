import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import meImage from '@/assets/images/me.png';

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
            I've spent the last seven years building products for startups and scale-ups — leading
            teams, untangling legacy systems, and shipping features that customers actually use. I
            care about clean architecture, fast feedback loops, and interfaces that feel obvious in
            hindsight.
          </p>
          <p className="text-dim text-[16px] leading-relaxed">
            Based in San Francisco, working with teams worldwide. B.S. Computer Science, University
            of Washington.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
  <div className="flex justify-center">
    <div className="relative p-3">
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