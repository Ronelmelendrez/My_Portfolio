import { useState } from 'react';
import { FiExternalLink, FiGithub, FiMaximize2 } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ProjectModal from './ProjectModal';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects, type Project } from '@/data/projects';

interface ProjectsProps {
  featured?: boolean;
}

export default function Projects({ featured: _featured }: ProjectsProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="FEATURED PROJECTS"
            title="Things I've shipped."
            subtitle="A few projects worth a closer look — code and live demos included."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <Card
                className="pcard flex h-full cursor-pointer flex-col overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                role="button"
                tabIndex={0}
                aria-label={`View full details of ${project.title}`}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
              >
                <div className="pcard-bar">
                  <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#ff5f56' }} />
                  <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#ffbd2e' }} />
                  <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#27c93f' }} />
                </div>
                {project.image ? (
                  <div className="pcard-img overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="pcard-img"
                    style={{ background: `linear-gradient(${project.gradient})` }}
                  >
                    <div />
                  </div>
                )}
                <CardContent className="flex-1 p-5">
                  <h3 className="font-display mb-2 text-[17px]">{project.title}</h3>
                  <p className="text-dim mb-4 text-[13.5px] leading-relaxed">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="chip">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className="pcard-links flex gap-4 text-[13px] font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.liveUrl} className="text-dim flex items-center gap-1.5">
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                    <a href={project.githubUrl} className="text-dim flex items-center gap-1.5">
                      <FiGithub size={13} /> GitHub
                    </a>
                    <span className="text-dim ml-auto flex items-center gap-1.5 transition-colors group-hover:text-[var(--cyan)]">
                      Details <FiMaximize2 size={13} />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}