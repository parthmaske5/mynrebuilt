import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company } from '@/content/site';

export function Header({ currentPath = '/' }: { currentPath?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  const navItems = [
    { label: 'What We Do', href: currentPath === '/' ? '#what-we-do' : '/#what-we-do' },
    { label: 'Our Work', href: currentPath === '/' ? '#our-work' : '/#our-work' },
    { label: 'Our Crew', href: '/our-crew' },
    { label: 'Contact', href: currentPath === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-cream-300 bg-cream-50/95 backdrop-blur-md shadow-xs' : 'bg-transparent'
      }`}
    >
      <div className="section-container relative flex h-16 items-center justify-between lg:h-20">
        <a href="/" className="font-display text-[22px] sm:text-2xl font-bold tracking-tight text-ink-900 flex items-baseline">
          MYN Deco<span className="text-marigold-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2" aria-label="Main">
          {navItems.map((item) => {
            const isCrew = item.href === '/our-crew' && currentPath === '/our-crew';
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  isCrew
                    ? 'font-semibold text-ink-900 border-b-2 border-marigold-500 pb-0.5'
                    : 'text-ink-700 hover:text-ink-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center md:flex">
            <a
              href="https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-cream-50 transition-colors hover:bg-ink-800"
            >
              Get in Touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center text-ink-900 lg:hidden"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-cream-300 bg-cream-50 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-cream-200 py-4 font-display text-xl text-ink-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex gap-6 text-sm font-medium text-ink-900">
            <a
              href="https://wa.me/60179585418?text=Hi%20MYN%2C%20I%20need%20help%20with%20a%20job."
              target="_blank"
              rel="noopener noreferrer"
              className="text-marigold-600 font-semibold"
            >
              WhatsApp
            </a>
            <a href="tel:+60179585418">Call {company.phone}</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
