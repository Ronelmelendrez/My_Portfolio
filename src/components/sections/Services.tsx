import { FiCode, FiSmartphone, FiFigma, FiServer } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  { icon: FiCode, title: 'Web Development', desc: 'Full-stack web apps built for speed, SEO, and long-term maintainability.' },
  { icon: FiSmartphone, title: 'Mobile Development', desc: 'Cross-platform apps with React Native that feel genuinely native.' },
  { icon: FiFigma, title: 'UI/UX Design', desc: 'Interfaces designed around what people actually need to do.' },
  { icon: FiServer, title: 'API Development', desc: 'Clean, documented APIs that other teams enjoy building on.' },
];

export default function Services() {
  return (
    <section id="services" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="SERVICES" title="What I can take off your plate." />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <Card className="scard h-full">
                <CardContent className="p-0">
                  <div className="icn mb-4">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display mb-2 text-[16px]">{title}</h3>
                  <p className="text-dim text-[13.5px] leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}