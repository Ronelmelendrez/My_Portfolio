import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { libraryCategories } from '@/data/library';

export default function DeveloperLibrary() {
  return (
    <section id="library" className="py-20 md:py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="LIBRARY"
            title="The library behind the code."
            subtitle="Docs I trust, books that changed how I build, and courses I keep coming back to."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {libraryCategories.map(({ label, note, icon: Icon, items }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="manifest h-full">
                <div className="manifest-bar flex-wrap gap-x-3 gap-y-1 font-mono text-[12.5px]">
                  <span className="flex min-w-0 items-center gap-2 text-foreground">
                    <Icon size={13} className="shrink-0 text-cyan" />
                    <span className="truncate">{label}</span>
                  </span>
                  <span className="text-dim">{items.length} entries</span>
                </div>

                <div>
                  {items.map((item, j) => (
                    <a
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group block px-5 py-4 transition-colors hover:bg-electric/5 ${
                        j > 0 ? 'border-t border-border' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="min-w-0 break-words font-display text-[14.5px] font-semibold transition-colors group-hover:text-cyan">
                          {item.title}
                        </span>
                        <FiArrowUpRight
                          size={14}
                          className="shrink-0 text-dim transition-colors group-hover:text-cyan"
                        />
                      </div>
                      <p className="mt-1 break-words text-dim text-[13px] leading-relaxed">{item.desc}</p>
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-2 border-t border-border px-5 py-3 font-mono text-[12px] text-dim">
                  <span>
                    <span className="text-success">✓</span> {note}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
