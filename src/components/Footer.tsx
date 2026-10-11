import { Sparkles, ArrowUp, Heart } from 'lucide-react';
import { personalInfo, footerNavLinks, socialLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[600px] rounded-full bg-violet-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 glow-violet">
                <Sparkles size={18} className="text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Pentakota Niharika
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Aspiring Software Developer and AI Enthusiast. CSIT student building practical
              technology solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-white/50 hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name}${social.placeholder ? ' (placeholder link)' : ''}`}
                    className="h-10 w-10 flex items-center justify-center rounded-lg glass glass-hover transition-all hover:scale-110"
                  >
                    <Icon size={18} className="text-white/60 hover:text-violet-400 transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-white/30">
              {socialLinks.some((s) => s.placeholder)
                ? 'Some links are placeholders — update with verified URLs.'
                : 'Feel free to reach out on any platform.'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Pentakota Niharika. Made with
            <Heart size={14} className="text-violet-400 fill-current" />
            and React.
          </p>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-lg glass glass-hover px-4 py-2 text-sm text-white/60 transition-all hover:text-violet-400"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
