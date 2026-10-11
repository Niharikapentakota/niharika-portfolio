import { Cpu, Code2, Plus } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { skillGroups } from '@/data/portfolio';

const levelColors: Record<string, string> = {
  Proficient: 'from-violet-500 to-violet-600',
  Familiar: 'from-violet-600/60 to-violet-700/60',
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-violet-700/10 blur-3xl -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Technologies I work with"
          subtitle="My current skill set as a student developer — always growing as I learn more."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={gIdx * 150}>
                <div className="group glass rounded-2xl p-8 glass-hover h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 transition-transform group-hover:scale-110">
                      <Icon size={22} className="text-violet-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/tag relative flex items-center gap-2 rounded-xl glass px-4 py-3 transition-all hover:border-violet-400/30 hover:glow-violet"
                      >
                        <span
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${
                            levelColors[skill.level] || 'from-violet-500 to-violet-600'
                          }`}
                        />
                        <span className="font-medium text-white text-sm">{skill.name}</span>
                        <span className="text-xs text-white/40 ml-1">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Note for adding more */}
        <Reveal delay={300}>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm text-white/30">
              <Plus size={16} className="text-violet-400/60" />
              <span>More technologies will be added here as I continue learning.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
