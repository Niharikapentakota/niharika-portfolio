import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClass} mb-14`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-400 mb-5 ${
          align === 'center' ? '' : ''
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
        {badge}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-white/50 leading-relaxed max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
