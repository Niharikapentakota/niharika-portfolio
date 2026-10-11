import SectionHeading, { Reveal } from './SectionHeading';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Certifications & Workshops"
          title="Learning experiences"
          subtitle="Courses and workshops I've attended to expand my knowledge in AI, cloud, cybersecurity, and more."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <Reveal key={cert.title} delay={(idx % 3) * 100}>
                <div className="group glass rounded-2xl p-6 glass-hover h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={22} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
