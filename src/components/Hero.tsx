import { useState } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  MapPin,
  Code2,
  Brain,
  GraduationCap,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Pentakota_Niharika_Resume.pdf';
    link.onerror = () => {
      alert(
        'Resume file not found yet. Please add your resume as a PDF at: public/resume.pdf'
      );
    };
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-navy-600/20 animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050610]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/70 mb-6 animate-fade-in">
              <Sparkles size={14} className="text-violet-400" />
              <span>Welcome to my portfolio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 animate-fade-in-up">
              <span className="block text-white/80 text-2xl sm:text-3xl lg:text-4xl font-medium mb-2">
                Hi, I'm
              </span>
              <span className="text-gradient">Pentakota Niharika</span>
            </h1>

            <p className="text-lg sm:text-xl text-violet-400 font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Aspiring Software Developer | AI Enthusiast
            </p>

            <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {personalInfo.introduction}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-white/40 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <MapPin size={16} className="text-violet-400" />
              <span>{personalInfo.location}</span>
              <span className="mx-1">•</span>
              <GraduationCap size={16} className="text-violet-400" />
              <span>CSIT Student, Expected 2028</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => handleNavClick('#projects')}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white glow-violet transition-all hover:scale-105 hover:glow-violet-strong"
              >
                Explore My Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleResume}
                className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:scale-105"
              >
                <Download size={16} />
                Download Resume
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:scale-105"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <span className="text-sm text-white/40">Connect:</span>
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 rounded-full border border-violet-500/20 animate-spin-slow" />
              <div className="absolute inset-0 -m-16 rounded-full border border-violet-500/10" />
              <div className="absolute inset-0 -m-24 rounded-full border border-white/5" />

              {/* Glow */}
              <div className="absolute inset-0 -m-4 rounded-full bg-violet-600/30 blur-3xl animate-glow-pulse" />

              {/* Photo container */}
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden glass glow-violet-strong">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt="Pentakota Niharika — CSIT student and aspiring software developer"
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-violet-900/40 to-navy-900/40">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 mb-3">
                      <span className="font-display text-3xl font-bold text-white">PN</span>
                    </div>
                    <p className="text-sm text-white/50 text-center px-4">
                      Add your photo at
                      <br />
                      <code className="text-violet-400 text-xs">public/images/Professional_Portrait_with_Office_Glow.png</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:-right-4 glass rounded-xl px-3 py-2 glow-violet animate-float">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-violet-400" />
                  <span className="text-xs font-medium text-white/80">Developer</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass rounded-xl px-3 py-2 glow-violet animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Brain size={16} className="text-violet-400" />
                  <span className="text-xs font-medium text-white/80">AI Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleNavClick('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-violet-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </button>
    </section>
  );
}
