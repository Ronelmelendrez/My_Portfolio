import Modal from '../common/Modal';
import LazyImage from '../common/LazyImage';
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
          <LazyImage
            src={cert.image}
            alt={`${cert.slug.trim()} certificate`}
            wrapperClassName="w-full"
            className="max-h-[80vh] w-full object-contain"
            decoding="async"
          />
        </div>
      )}
    </Modal>
  );
}
