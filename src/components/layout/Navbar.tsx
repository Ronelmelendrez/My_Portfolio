import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import Container from '../common/Container';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#library', label: 'Library' },
  { href: '#contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  /**
   * Section links work from every page: they always resolve to the home
   * route's section (/#about), and re-scroll when already at that hash.
   */
  const goTo = (hash: string) => {
    if (pathname === '/' && window.location.hash === hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate({ pathname: '/', hash });
  };

  return (
    <nav className="nav-blur fixed inset-x-0 top-0 z-[100]">
      <Container className="flex h-[68px] items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo('#home');
          }}
          className="font-mono text-[17px] font-semibold tracking-tight"
        >
          <span className="text-blue">&lt;</span>Ronel<span className="text-blue">/&gt;</span>
        </a>

        <div
          className={`${
            open ? 'flex' : 'hidden'
          } fixed inset-x-0 top-[68px] flex-col gap-[18px] border-b py-5 px-6 lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:p-0`}
          style={{ background: open ? 'var(--bg)' : 'transparent', borderColor: 'var(--border-dark)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                goTo(item.href);
              }}
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
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                goTo('#contact');
              }}
            >
              Hire Me
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
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