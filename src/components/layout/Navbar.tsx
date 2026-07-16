import { useState } from 'react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import Container from '../common/Container';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-blur fixed inset-x-0 top-0 z-[100]">
      <Container className="flex h-[68px] items-center justify-between">
        <a href="#home" className="font-mono text-[17px] font-semibold tracking-tight">
          <span className="text-blue">&lt;</span>Ronel<span className="text-blue">/&gt;</span>
        </a>

        <div
          className={`${
            open ? 'flex' : 'hidden'
          } fixed inset-x-0 top-[68px] flex-col gap-[18px] border-b py-5 px-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-none md:p-0`}
          style={{ background: open ? 'var(--bg)' : 'transparent', borderColor: 'var(--border-dark)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="outline" size="icon" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Hire Me</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <FiMenu size={16} />
          </Button>
        </div>
      </Container>
    </nav>
  );
}