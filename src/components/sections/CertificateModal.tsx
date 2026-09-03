import { FiExternalLink } from 'react-icons/fi';
import Modal from '../common/Modal';
import { Badge } from '@/components/ui/badge';
import type { Certificate } from '@/data/certificates';

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  return (
    <Modal open={!!cert} onClose={onClose} labelledBy="certificate-modal-title" className="max-w-3xl">
      {cert && (
        <>
          {cert.image && (
            <div className="shrink-0 overflow-hidden border-b border-border bg-black/40">
              <img
                src={cert.image}
                alt={`${cert.slug} certificate`}
                className="block max-h-[60vh] w-full object-contain"
              />
            </div>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <span className="cert-name">
                {cert.slug}
                <span className="at">@</span>
                <span className="ver">{cert.version}</span>
              </span>
              <Badge variant="verified">VERIFIED</Badge>
            </div>
            <h3
              id="certificate-modal-title"
              className="font-display mt-1 text-lg font-bold tracking-tight"
            >
              {cert.slug}
            </h3>
            <p className="text-dim mt-2 text-[13.5px]">
              Issued by <b className="font-medium text-cyan">{cert.issuer}</b>
            </p>
            {cert.credentialId && (
              <p className="text-dim mt-1 font-mono text-[12px]">ID: {cert.credentialId}</p>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
