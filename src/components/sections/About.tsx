import Reveal from '../common/Reveal';
import Counter from '../common/Counter';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Card className="stat-card">
              <CardContent className="p-0">
                <Counter target={7} className="text-[32px]" />
                <span className="text-dim text-[13px]">Years building production software</span>
              </CardContent>
            </Card>
            <Card className="stat-card">
              <CardContent className="p-0">
                <Counter target={48} className="text-[32px]" />
                <span className="text-dim text-[13px]">Projects launched end-to-end</span>
              </CardContent>
            </Card>
            <Card className="stat-card">
              <CardContent className="p-0">
                <Counter target={26} className="text-[32px]" />
                <span className="text-dim text-[13px]">Clients who came back for round two</span>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}