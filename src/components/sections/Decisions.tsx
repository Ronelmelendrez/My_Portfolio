import { FiCheck, FiX } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { decisions } from '@/data/decisions';

export default function Decisions() {
  return (
    <section id="decisions" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="DECISIONS"
            title="Decisions that matter."
            subtitle="Every project above stands on a handful of choices — these are the ones that shaped them, and the cost I accepted for each."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {decisions.map((decision, i) => (
            <Reveal key={decision.id} delay={i * 0.06}>
              <div className="scard flex h-full flex-col">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-[12px] text-dim">{decision.id}</span>
                  <Badge variant="verified">ADOPTED</Badge>
                </div>

                <h3 className="font-display mb-2 text-[16px] font-semibold">{decision.title}</h3>
                <p className="text-dim text-[13.5px] leading-relaxed">{decision.context}</p>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-start gap-3 rounded-lg border border-success/30 bg-success/[0.07] px-3.5 py-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-success/15 text-success">
                      <FiCheck size={12} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10.5px] tracking-wider text-success">CHOSEN</div>
                      <div className="text-[14px] leading-snug">{decision.chosen}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border bg-black/[0.03] px-3.5 py-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-black/[0.06] text-dim">
                      <FiX size={12} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10.5px] tracking-wider text-dim">INSTEAD</div>
                      <div className="text-dim text-[14px] leading-snug">{decision.instead}</div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-dim text-[13.5px] leading-relaxed">
                  <span className="font-mono text-cyan">// </span>
                  {decision.why}
                </p>

                <div className="mt-auto flex items-baseline gap-2 border-t border-border pt-3.5 font-mono text-[12px] text-dim">
                  <span className="text-amber">cost:</span>
                  <span>{decision.cost}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
