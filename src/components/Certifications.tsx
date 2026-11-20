import React, { useState, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  Code2,
  Cpu,
  Briefcase,
  Palette,
  ExternalLink,
  Award,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CERTIFICATIONS,
  type CertificationCategory,
  type CertificationItem,
} from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: { label: string; value: 'ALL' | CertificationCategory }[] = [
  { label: 'All Credentials', value: 'ALL' },
  { label: 'Cybersecurity', value: 'CYBERSECURITY' },
  { label: 'Programming', value: 'PROGRAMMING' },
  { label: 'Artificial Intelligence', value: 'ARTIFICIAL INTELLIGENCE' },
  { label: 'Business & Entrepreneurship', value: 'BUSINESS & ENTREPRENEURSHIP' },
  { label: 'Design & Creative Tools', value: 'DESIGN & CREATIVE TOOLS' },
];

function getCategoryIcon(category: CertificationCategory) {
  switch (category) {
    case 'CYBERSECURITY':
      return <ShieldCheck className="w-5 h-5 text-red-500" />;
    case 'PROGRAMMING':
      return <Code2 className="w-5 h-5 text-emerald-400" />;
    case 'ARTIFICIAL INTELLIGENCE':
      return <Cpu className="w-5 h-5 text-amber-400" />;
    case 'BUSINESS & ENTREPRENEURSHIP':
      return <Briefcase className="w-5 h-5 text-blue-400" />;
    case 'DESIGN & CREATIVE TOOLS':
      return <Palette className="w-5 h-5 text-purple-400" />;
    default:
      return <Award className="w-5 h-5 text-red-500" />;
  }
}

export const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'ALL' | CertificationCategory>('ALL');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
        .fromTo(
          titleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        )
        .fromTo(
          '.cert-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'back.out(1.2)' },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredCerts =
    activeCategory === 'ALL'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-12 z-10 max-w-3xl">
        <span className="text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.25em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
          Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase text-white leading-tight">
          CERTIFICATIONS &amp; PROFESSIONAL LEARNING<span className="text-red-600">.</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-400 font-normal max-w-xl">
          Continuous learning, practical exploration, and professional development.
        </p>
        <div className="w-16 h-1 bg-[#a31515] mt-4 rounded-full" />
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 z-10 max-w-4xl">
        {CATEGORIES.map((cat) => {
          const count =
            cat.value === 'ALL'
              ? CERTIFICATIONS.length
              : CERTIFICATIONS.filter((c) => c.category === cat.value).length;
          const isActive = activeCategory === cat.value;
          const isCyber = cat.value === 'CYBERSECURITY';

          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-500 scale-105'
                  : 'glass-chip text-gray-300 hover:text-white hover:border-white/20'
              } ${isCyber && !isActive ? 'border-red-600/30 text-red-300 hover:text-red-200' : ''}`}
            >
              {isCyber && <ShieldCheck className="w-3.5 h-3.5 text-red-500" />}
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certifications Grid */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full max-w-6xl z-10"
      >
        {filteredCerts.map((cert) => {
          const isCyber = cert.category === 'CYBERSECURITY';

          return (
            <article
              key={cert.id}
              className={`cert-card glass glass-panel-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${
                isCyber
                  ? 'border-red-600/40 hover:border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.08)]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {/* Highlight badge for Cybersecurity */}
              {isCyber && (
                <div className="absolute -top-3 right-6 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full border border-red-400 shadow-[0_0_12px_rgba(220,38,38,0.6)] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Key Interest · Cyber</span>
                </div>
              )}

              <div>
                {/* Card Header: Category & Date */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getCategoryIcon(cert.category)}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {cert.category}
                    </span>
                  </div>

                  {cert.issueDate && (
                    <span className="text-[11px] font-mono tracking-wider text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {cert.issueDate}
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <div className="mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1 flex items-center gap-1.5">
                    <span>{cert.issuer}</span>
                    {cert.credentialType && (
                      <>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-400 font-normal text-xs">
                          {cert.credentialType}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Score & Duration Badges (if available) */}
                {(cert.score || cert.duration || cert.credentialId) && (
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px]">
                    {cert.score && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {cert.score}
                      </span>
                    )}
                    {cert.duration && (
                      <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {cert.duration}
                      </span>
                    )}
                    {cert.credentialId && (
                      <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 font-mono text-[10px]">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                )}

                {/* Professional Description */}
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer: Skills & Verified Status */}
              <div className="border-t border-white/5 pt-4 mt-auto">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:border-red-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Verification link or badge */}
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-chip-red text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-white hover:scale-105 transition-transform"
                    >
                      View Credential <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-red-500/70" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
