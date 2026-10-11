import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useActiveSection, useScrollProgress } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useActiveSection();
  useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[60]">
        <div
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600 transition-all duration-150"
          style={{ width: '0%' }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-2 text-lg font-display font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 glow-violet transition-transform group-hover:scale-110">
                <Sparkles size={18} className="text-white" />
              </span>
              <span className="text-white">
                Niharika<span className="text-violet-400">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="nav-link relative px-3.5 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden sm:inline-flex items-center rounded-lg bg-gradient-to-r from-violet-600 to-violet-700 px-5 py-2.5 text-sm font-semibold text-white glow-violet transition-all hover:scale-105 hover:glow-violet-strong"
              >
                Get in Touch
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg glass glass-hover"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mx-4 mt-3 glass rounded-2xl p-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-violet-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
