import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiEye } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import CertificateModal from './CertificateModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';
import { Separator } from '@/components/ui/separator';
import { certificates, type Certificate } from '@/data/certificates';

const PER_PAGE = 5;

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(certificates.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const visible = certificates.slice(start, start + PER_PAGE);

  const goToPage = (next: number) => {
    setPage(Math.min(totalPages, Math.max(1, next)));
    const el = document.getElementById('certificates');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="certificates" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="CERTIFICATES"
            title="Credentials, verified."
            subtitle="Every line below installed clean — no expired dependencies."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="manifest mt-14">
            <div className="manifest-bar font-mono text-[12.5px]">
              <span className="text-dim">
                <span className="text-green-500">✓</span> {certificates.length} credentials verified
              </span>
              <span className="text-dim">credentials.lock</span>
            </div>
            <Separator />

            {visible.map((cert, i) => (
              <div key={cert.slug}>
                <div className="cert-item">
                  <div className="cert-check">✓</div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <span className="cert-name">
                        {cert.slug}
                        <span className="at">@</span>
                        <span className="ver">{cert.version}</span>
                      </span>
                      <Badge variant="verified">VERIFIED</Badge>
                    </div>
                    <div className="text-dim mb-2 text-[13.5px]">
                      Issued by <b className="font-medium text-cyan">{cert.issuer}</b>
                    </div>
                    <div className="text-dim flex items-center gap-4 font-mono text-[12px]">
                      {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                      {cert.image && (
                        <button
                          type="button"
                          onClick={() => setSelected(cert)}
                          className="cert-foot flex items-center gap-1.5 font-semibold"
                        >
                          <FiEye size={12} /> view certificate
                        </button>
                      )}
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-foot flex items-center gap-1.5 font-semibold"
                        >
                          <FiExternalLink size={12} /> view credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {i < visible.length - 1 && <Separator />}
              </div>
            ))}

            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-dim font-mono text-[12.5px]">
                  page {page} / {totalPages}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => goToPage(page - 1)}
                  >
                    <FiArrowLeft size={14} /> prev
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => goToPage(page + 1)}
                  >
                    next <FiArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
      <CertificateModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}