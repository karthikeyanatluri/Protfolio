import React, { useRef, useEffect } from 'react';
import {
  Briefcase,
  ShieldCheck,
  Users,
  HeartHandshake,
  Award,
  Calendar,
  Building2,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE, type ExperienceItem } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function getRoleIcon(role: string, org: string) {
  if (org.includes('WiCyS') || role.toLowerCase().includes('cyber')) {
    return <ShieldCheck className="w-5 h-5 text-red-500" />;
  }
  if (org.includes('Student Tribe') || org.includes('VYNEDAM')) {
    return <Users className="w-5 h-5 text-amber-400" />;
  }
  if (org.includes('Make A Difference')) {
    return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
  }
  if (org.includes('Scalar') || role.toLowerCase().includes('intern')) {
    return <Award className="w-5 h-5 text-blue-400" />;
  }
  return <Briefcase className="w-5 h-5 text-red-500" />;
}

function getBadge(period: string) {
  const isPresent = period.toLowerCase().includes('present');
  return (
    <span
      className={`text-[11px] font-mono tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
        isPresent
          ? 'bg-red-950/40 border-red-500/30 text-red-300 font-semibold'
          : 'bg-white/5 border-white/10 text-gray-400'
      }`}
    >
      <Calendar className="w-3 h-3" />
      {period}
    </span>
  );
}

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
          '.exp-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'back.out(1.2)' },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full text-gray-100 py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-12 z-10 max-w-3xl">
        <span className="text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.25em] mb-2 flex items-center gap-1.5">
          <img src="/assets/icon.svg" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
          Leadership &amp; Professional Journey
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase text-white leading-tight">
          EXPERIENCE &amp; LEADERSHIP<span className="text-red-600">.</span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-400 font-normal max-w-xl">
          Practical community leadership, student engagement, internships, and social impact initiatives.
        </p>
        <div className="w-16 h-1 bg-[#a31515] mt-4 rounded-full" />
      </div>

      {/* Experience Cards Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full max-w-6xl z-10"
      >
        {EXPERIENCE.map((exp: ExperienceItem, idx: number) => {
          const isWiCyS = exp.organization.includes('WiCyS');

          return (
            <article
              key={idx}
              className={`exp-card glass glass-panel-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${
                isWiCyS
                  ? 'border-red-600/40 hover:border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.08)]'
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              {isWiCyS && (
                <div className="absolute -top-3 right-6 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full border border-red-400 shadow-[0_0_12px_rgba(220,38,38,0.6)] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Cybersecurity Chapter</span>
                </div>
              )}

              <div>
                {/* Header: Icon + Period Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getRoleIcon(exp.role, exp.organization)}
                    </span>
                  </div>
                  {getBadge(exp.period)}
                </div>

                {/* Role & Organization */}
                <div className="mb-3">
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-red-500 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{exp.organization}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
