import React, { useState, useEffect } from 'react';
import { SITE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3">
      <div
        className={`glass max-w-7xl mx-auto rounded-2xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2.5 !bg-[#111113]/80' : 'py-3.5'
          }`}
      >
        <a
          href="/"
          className="text-white text-2xl font-black tracking-tight uppercase group flex items-center outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 select-none"
        >
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            {SITE.name.charAt(0)}
          </span>
          <span className="group-hover:text-red-500 transition-colors duration-300">
            {SITE.name.slice(1)}.
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {['Projects', 'About', 'Experience', 'Services', 'Skills', 'Certifications'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:inline-flex items-center justify-end w-[114px] h-9 shrink-0">
          <a
            href="#contact"
            className="glass-red inline-flex items-center justify-center w-full h-full rounded-full text-white text-xs font-bold uppercase tracking-wider leading-none"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};
