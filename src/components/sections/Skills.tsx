import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { skillLayers, marqueeStack } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="SKILLS"
            title="How a request becomes a running system."
            subtitle="Every layer below is one I've shipped to production — top to bottom, not just top-of-resume."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-3.5">
          {skillLayers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.05}>
              <div className="layer group">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display text-lg font-semibold">{layer.title}</span>
                  <span className="layer-label">{layer.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <Badge
                      key={item}
                      variant="chip"
                      className="group-hover:border-accent/30 group-hover:text-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="marquee-wrap mt-14">
            <div className="marquee-track animate-marquee">
              {[...marqueeStack, ...marqueeStack].map((item, i) => (
                <span key={i}>
                  <b>◆</b> {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}