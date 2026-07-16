import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const links = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
];

export default function SocialLinks() {
  return (
    <div className="mt-2 flex gap-2.5">
      {links.map(({ icon: Icon, href, label }) => (
        <Button key={label} asChild variant="outline" size="icon" aria-label={label}>
          <a href={href}>
            <Icon size={16} />
          </a>
        </Button>
      ))}
    </div>
  );
}