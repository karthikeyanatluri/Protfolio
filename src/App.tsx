import { useEffect, useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlitchLoader } from './components/GlitchLoader';
import { ParticleField } from './components/ParticleField';
import { SparkCursor } from './components/SparkCursor';
import { PORTFOLIO_PROJECTS, SITE } from './data/portfolioData';
import type { Project } from './data/portfolioData';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VideoModal = lazy(() => import('./components/VideoModal').then((m) => ({ default: m.VideoModal })));

export function App() {
  useEffect(() => {
    document.title = SITE.pageTitle;

    // Immediately remove any existing hash (like /#contact) from the browser address bar
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Intercept in-page anchor clicks so the URL remains clean without showing /#contact
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.slice(1);
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          if (window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (direction: 1 | -1) => {
    if (!selectedProject) return;
    const idx = PORTFOLIO_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    if (idx === -1) return;
    const nextIdx = (idx + direction + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length;
    setSelectedProject(PORTFOLIO_PROJECTS[nextIdx]);
  };

  const handleInquire = () => {
    setIsModalOpen(false);
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="relative isolate min-h-screen text-gray-100 flex flex-col font-sans selection:bg-[#a31515] selection:text-white bg-[#07070a]">
      {/* 3D WebGL Starfield with forward scroll travel and click shockwaves */}
      <ParticleField />

      {/* Ambient colour behind the glass: red glow orbs */}
      <div className="ambient" aria-hidden="true">
        <i className="o1" />
        <i className="o3" />
      </div>

      {/* Interactive 2D spark & lightning cursor */}
      <SparkCursor />

      {/* Progressive glitch countdown loader */}
      {loading && <GlitchLoader onComplete={handlePreloaderComplete} />}

      {/* Dynamic Navbar with blur on scroll */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 w-full flex-1">
        <Hero />
        <Stats />
        <Projects onSelectProject={handleSelectProject} />
        <About />
        <Services />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Video Modal Player */}
      {isModalOpen && (
        <Suspense fallback={null}>
          <VideoModal
            project={selectedProject}
            onClose={handleCloseModal}
            onNavigate={handleNavigate}
            onInquire={handleInquire}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
