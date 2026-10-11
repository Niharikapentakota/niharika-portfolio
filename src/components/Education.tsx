import SectionHeading, { Reveal } from './SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-navy-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Education"
          title="My academic journey"
          subtitle="A strong academic foundation driving my passion for computer science and technology."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {education.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = idx % 2 === 0;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div
                    className={`relative flex items-center gap-6 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 glow-violet ring-4 ring-[#050610]">
                        <Icon size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />

                    {/* Card */}
                    <div className="ml-12 md:ml-0 flex-1">
                      <div className="group glass rounded-2xl p-6 glass-hover">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-display text-base font-semibold text-white leading-snug">
                              {item.degree}
                            </h3>
                            <p className="text-sm text-violet-400 mt-1">{item.institution}</p>
                            {item.affiliation && (
                              <p className="text-xs text-white/40 mt-0.5">{item.affiliation}</p>
                            )}
                          </div>
                          <span className="shrink-0 rounded-lg bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-400">
                            {item.year}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          <span className="text-sm text-white/50">{item.detail}</span>
                          <span className="text-sm font-semibold text-white/80">{item.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
