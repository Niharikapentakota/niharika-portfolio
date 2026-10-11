import SectionHeading, { Reveal } from './SectionHeading';
import { achievements } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Achievements & Activities"
          title="Beyond the classroom"
          subtitle="Hackathons, workshops, showcases, and activities that shape my journey as a student developer."
        />

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(idx % 2) * 100}>
                <div className="group relative glass rounded-2xl p-6 glass-hover overflow-hidden h-full">
                  {/* Decorative gradient */}
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-600/10 blur-2xl group-hover:bg-violet-600/20 transition-colors" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 transition-transform group-hover:scale-110">
                      <Icon size={22} className="text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Editable note */}
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <p className="text-sm text-white/30">
              This section is a living record — new activities, hackathons, and achievements will be added as they happen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
