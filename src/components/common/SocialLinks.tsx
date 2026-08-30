import { FiGithub, FiLinkedin, FiInstagram, FiFacebook} from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const links = [
  { icon: FiGithub, href: 'https://github.com/Ronelmelendrez', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ronel-melendrez-a1a5022ba/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/kevzs01/', label: 'Instagram' },
  { icon: FiFacebook, href: 'https://www.facebook.com/kevin.melendrez.963', label: 'Facebook' },
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