import Modal from '../common/Modal';
import type { Certificate } from '@/data/certificates';

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  return (
    <Modal open={!!cert} onClose={onClose} className="max-w-3xl">
      {cert?.image && (
        <div className="overflow-hidden bg-black/40">
          <img
            src={cert.image}
            alt={`${cert.slug} certificate`}
            className="block max-h-[80vh] w-full object-contain"
          />
        </div>
      )}
    </Modal>
  );
}
