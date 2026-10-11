import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

interface SocialLinksProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-12 w-12',
};

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 22,
};

export default function SocialLinks({ size = 'md', className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.name}${social.placeholder ? ' (placeholder link — update with verified URL)' : ''}`}
            title={`${social.name}${social.placeholder ? ' — placeholder link, update with verified URL' : ''}`}
            className={`${sizeClasses[size]} group relative flex items-center justify-center rounded-xl glass glass-hover glow-violet transition-all duration-300 hover:scale-110`}
          >
            <Icon size={iconSizes[size]} className="text-white/70 group-hover:text-violet-400 transition-colors" />
            {social.placeholder && (
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-[#050610]" title="Placeholder link" />
            )}
          </a>
        );
      })}
    </div>
  );
}

export function SocialLinksFooter() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.name}${social.placeholder ? ' (placeholder link)' : ''}`}
            className="h-10 w-10 flex items-center justify-center rounded-lg glass glass-hover transition-all duration-300 hover:scale-110"
          >
            <Icon size={18} className="text-white/60 hover:text-violet-400 transition-colors" />
          </a>
        );
      })}
    </div>
  );
}
