import { FiExternalLink } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { certificates } from '@/data/certificates';

export default function Certificates() {
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

            {certificates.map((cert, i) => (
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
                      <span>ID: {cert.credentialId}</span>
                      <a href="#" className="cert-foot flex items-center gap-1.5 font-semibold">
                        <FiExternalLink size={12} /> view credential
                      </a>
                    </div>
                  </div>
                </div>
                {i < certificates.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}