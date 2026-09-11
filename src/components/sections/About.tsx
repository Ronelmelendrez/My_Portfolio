import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import meImage from '@/assets/images/me.webp';

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <Container className="grid grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="ABOUT"
            title="The engineer behind the code."
          />
          <p className="text-dim mb-5 mt-5 text-[16px] leading-relaxed">
            I'm a fresh graduate and startup builder driven by one goal — turning ideas into real-world
            digital products. I build full-stack applications, explore AI, and sharpen my skills
            continuously through hands-on projects.
          </p>
          <p className="text-dim mb-5 text-[16px] leading-relaxed">
            I'm currently building Farm2Home, a fresh vegetable delivery platform that spans a customer
            mobile app, an admin dashboard, a marketing website, and a shared backend. I care deeply about
            clean, scalable architecture and organize applications by feature to keep code modular,
            maintainable, and easy to evolve.
          </p>
          <p className="text-dim mt-5 text-[16px] leading-relaxed">
            Based in Ampayon, Butuan City. Fresh Graduate, B.S. Information Technology, Caraga State
            University.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center md:justify-end">
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