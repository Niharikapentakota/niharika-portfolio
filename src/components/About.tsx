import { Sparkles, Target, Lightbulb, Rocket } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { aboutText } from '@/data/portfolio';

const highlights = [
  {
    icon: Target,
    title: 'Problem-Solving',
    description: 'Breaking down complex challenges into clean, working solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Exploring new technologies through courses, workshops, and projects.',
  },
  {
    icon: Rocket,
    title: 'Building Things',
    description: 'Turning ideas into practical software that creates real impact.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Get to know me"
          subtitle="A student developer focused on learning, building, and creating technology that matters."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={20} className="text-violet-400" />
                <h3 className="font-display text-xl font-semibold text-white">Who I Am</h3>
              </div>
              <div className="space-y-4">
                {aboutText.map((paragraph, idx) => (
                  <p key={idx} className="text-white/60 leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group glass rounded-2xl p-6 glass-hover transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 group-hover:scale-110 transition-transform">
                        <Icon size={22} className="text-violet-400" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
