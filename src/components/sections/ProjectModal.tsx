import { useEffect, useState } from 'react';
import { FiCalendar, FiCheck, FiExternalLink, FiGithub, FiUser } from 'react-icons/fi';
import ImageSlider from '../common/ImageSlider';
import Modal from '../common/Modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/** Full-detail modal for a single project. */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Keep the last project mounted while the exit animation plays.
  const [shown, setShown] = useState<Project | null>(project);

  useEffect(() => {
    if (project) setShown(project);
  }, [project]);

  const current = project ?? shown;

  return (
    <Modal
      open={!!project}
      onClose={onClose}
      labelledBy="project-modal-title"
      className="max-w-2xl"
    >
      {current && (
        <>
          <div className="pcard-bar shrink-0">
            <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#ff5f56' }} />
            <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#ffbd2e' }} />
            <i className="h-[9px] w-[9px] rounded-full" style={{ background: '#27c93f' }} />
          </div>

          {current.images && current.images.length > 0 ? (
            <ImageSlider key={current.title} images={current.images} alt={current.title} />
          ) : (
            <div
              className="pcard-img shrink-0"
              style={{ background: `linear-gradient(${current.gradient})` }}
            >
              <div />
            </div>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-7">
            <div className="text-dim mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11.5px]">
              {current.status && (
                <span className="flex items-center gap-1.5">
                  <i
                    className="h-[7px] w-[7px] rounded-full"
                    style={{
                      background: current.status.toLowerCase() === 'live' ? '#22c55e' : '#f59e0b',
                    }}
                  />
                  {current.status}
                </span>
              )}
              {current.year && (
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={12} /> {current.year}
                </span>
              )}
              {current.role && (
                <span className="flex items-center gap-1.5">
                  <FiUser size={12} /> {current.role}
                </span>
              )}
            </div>

            <h3
              id="project-modal-title"
              className="font-display text-xl font-bold tracking-tight sm:text-[22px]"
            >
              {current.title}
            </h3>
            <p className="text-dim mt-3 text-[14px] leading-relaxed">
              {current.longDescription ?? current.description}
            </p>

            {current.features && current.features.length > 0 && (
              <div className="mt-6">
                <h4 className="text-dim font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
                  Key features
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {current.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed"
                    >
                      <FiCheck className="text-accent mt-[3px] shrink-0" size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-1.5">
              {current.tech.map((t) => (
                <Badge key={t} variant="chip">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-border p-5">
            <Button asChild size="sm">
              <a href={current.liveUrl} target="_blank" rel="noreferrer">
                <FiExternalLink size={14} /> Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={current.githubUrl} target="_blank" rel="noreferrer">
                <FiGithub size={14} /> Source Code
              </a>
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}