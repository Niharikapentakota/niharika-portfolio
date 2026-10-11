import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { contactInfo } from '@/data/portfolio';

interface ContactEntry {
  key: string;
  label: string;
  value: string;
  url?: string;
  placeholder: boolean;
  icon: typeof Mail;
}

const contactEntries: ContactEntry[] = [
  {
    key: 'email',
    label: 'Email',
    value: contactInfo.email,
    url: `mailto:${contactInfo.email}`,
    placeholder: false,
    icon: Mail,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/Niharikapentakota',
    url: contactInfo.github,
    placeholder: false,
    icon: Github,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/niharika-pentakota-044306352',
    url: contactInfo.linkedin,
    placeholder: false,
    icon: Linkedin,
  },
  {
    key: 'location',
    label: 'Location',
    value: contactInfo.location,
    placeholder: false,
    icon: MapPin,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all';

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's connect"
          subtitle="Have a question, opportunity, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <Reveal>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Get in touch
              </h3>
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
                Feel free to reach out through any of the channels below. Whether it's about
                collaboration, learning, or just a chat about tech — I'm always open to connecting.
              </p>

              <div className="space-y-4">
                {contactEntries.map((entry) => {
                  const Icon = entry.icon;
                  const content = (
                    <div className="group flex items-center gap-4 rounded-xl glass p-4 glass-hover transition-all">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 transition-transform group-hover:scale-110">
                        <Icon size={20} className="text-violet-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-white/40 uppercase tracking-wider">
                          {entry.label}
                          {entry.placeholder && (
                            <span className="ml-2 text-amber-400/70 normal-case tracking-normal">
                              • placeholder
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-white/80 truncate">{entry.value}</p>
                      </div>
                    </div>
                  );

                  return entry.url ? (
                    <a
                      key={entry.key}
                      href={entry.url}
                      target={entry.key !== 'email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={entry.key}>{content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={150}>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Send a message
              </h3>
              <p className="text-sm text-white/50 mb-6">
                This form is a UI demo — connect it to a backend service to enable sending.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Niharika, I'd love to connect about..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3.5 text-sm font-semibold text-white glow-violet transition-all hover:scale-[1.02] hover:glow-violet-strong"
                >
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                  Send Message
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-400">
                    <CheckCircle2 size={16} />
                    <span>Thank you! Your message has been recorded. (Demo mode — no email was sent.)</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-rose-500/10 border border-rose-500/20 px-4 py-3 text-sm text-rose-400">
                    <AlertCircle size={16} />
                    <span>Please fill in all fields before sending.</span>
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
