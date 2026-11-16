import { useState, useEffect, useRef } from 'react';
import { FaPlay } from "react-icons/fa6";
import { SiGithub } from 'react-icons/si';
import { ChevronUp, ChevronDown } from 'lucide-react';
import projectsData from '../data/project-data.json';

const projectImages = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
});

const Project = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const touchStartY = useRef(null);
    const activeBtnRef = useRef(null);
    const closeButtonRef = useRef(null);

    const projects = projectsData.map((projectData) => ({
        ...projectData,
        image: projectImages[projectData.image] ?? projectData.image,
    }));
    const project = projects[selectedProjectIndex];

    const handleSwitchProject = (newIndex) => {
        setSelectedProjectIndex(newIndex);
        setIsOverlayOpen(false);
    };

    // Auto-scroll the active vertical button into view
    useEffect(() => {
        if (activeBtnRef.current) {
            activeBtnRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [selectedProjectIndex]);

    // Keyboard navigation: Left/Right
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (isOverlayOpen) {
                if (e.key === 'Escape') setIsOverlayOpen(false);
                return;
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                handleSwitchProject((selectedProjectIndex + 1) % projectsData.length);
            } else if (e.key === "ArrowLeft") {
              e.preventDefault();
              handleSwitchProject(
                (selectedProjectIndex - 1 + projectsData.length) %
                  projectsData.length,
              );
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProjectIndex, isOverlayOpen]);

    useEffect(() => {
        if (!isOverlayOpen) return undefined;
        closeButtonRef.current?.focus();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previousOverflow; };
    }, [isOverlayOpen]);

    // Touch swipe navigation (vertical swipe)
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
        };
        const handleTouchEnd = (e) => {
            if (isOverlayOpen) return;
            if (touchStartY.current === null) return;
            const deltaY = e.changedTouches[0].clientY - touchStartY.current;
            if (Math.abs(deltaY) > 40) {
                if (deltaY < 0) {
                    // swipe up -> next project
                    handleSwitchProject((selectedProjectIndex + 1) % projectsData.length);
                } else {
                    // swipe down -> prev project
                    handleSwitchProject((selectedProjectIndex - 1 + projectsData.length) % projectsData.length);
                }
            }
            touchStartY.current = null;
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [selectedProjectIndex, isOverlayOpen]);

    return (
        <div className="w-full flex flex-col items-center py-0 select-none">
        {/* Top Toolbar: Project Index & Title */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-3 font-mono-code text-[11px] text-zinc-500 px-1">
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">PROJECT</span>
            <span className="text-zinc-300 font-semibold">
              {selectedProjectIndex + 1} / {projectsData.length}
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400 hidden sm:inline">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600 text-[10px]">
            <span className="hidden sm:inline font-mono-code">
              // click card to view details
            </span>
          </div>
        </div>

        {/* Main interactive project card */}
        <div className="w-full max-w-4xl">
          {/* Single Interactive Project Card */}
          <div
            onClick={() => setIsOverlayOpen(true)}
            title="Click to view project details"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOverlayOpen(true);
              }
            }}
                    className="flex-1 border border-zinc-900 bg-[#0a0a0a]/95 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(255,255,255,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-200 min-h-[300px] sm:min-h-[330px] relative overflow-hidden"
          >
            {/* Header: Title, Tags & In Dev Indicator */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h2 className="text-3xl sm:text-4xl text-white font-pixel font-normal tracking-wide group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h2>
                <div className="flex items-center gap-1.5 shrink-0">
                  {project.inDevelopment && (
                    <span
                      className="font-mono-code text-[10px] text-amber-400 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded flex items-center gap-1"
                      title="In Active Development"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      in dev
                    </span>
                  )}
                  <span className="font-mono-code text-[10px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                    {project.version}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom footer in card: Tech Tags & Expand hint */}
            <div className="pt-6 border-t border-zinc-900/80 flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex flex-wrap gap-1.5 font-mono-code text-[10px] text-zinc-400">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-zinc-900 bg-zinc-950 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="font-mono-code text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                <span>click to view project</span>
              </div>
            </div>
          </div>

            {/* Scrollable horizontal list */}
            <div className="mt-6 w-full overflow-x-auto hide-scrollbar py-0.5">
              <div className="flex min-w-max items-center gap-1.5">
                {projectsData.map((p, idx) => {
                  const isSelected = selectedProjectIndex === idx;
                  return (
                    <button
                      key={p.id}
                      ref={isSelected ? activeBtnRef : null}
                      onClick={() => handleSwitchProject(idx)}
                      aria-label={`Select ${p.title}`}
                      aria-current={isSelected ? "true" : undefined}
                      className={`font-mono-code text-xs px-3 py-2 text-left border transition-all cursor-pointer flex items-center justify-between gap-2 shrink-0 ${
                        isSelected
                          ? "border-zinc-500 bg-zinc-900 text-white font-medium shadow-sm"
                          : "border-zinc-900/80 bg-zinc-950/60 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900/40"
                      }`}
                    >
                      <span className="truncate">{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
        </div>

        {isOverlayOpen && (
          <div
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setIsOverlayOpen(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/55 backdrop-blur-sm p-4 sm:p-8"
          >
            <section
              ref={closeButtonRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-overlay-title"
              className="w-full max-w-5xl"
            >
              <div className="w-3/4 mx-auto flex flex-col items-center gap-4">
                <h2
                  id="project-overlay-title"
                  className="text-center text-3xl sm:text-4xl font-pixel tracking-wide text-white"
                >
                  {project.title}
                </h2>

                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} cover`}
                    className="block w-full max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9rem)] object-contain rounded-md shadow-[0_16px_45px_rgba(0,0,0,0.5)]"
                  />
                )}

                <div className="flex flex-wrap justify-center gap-5 font-mono-code text-xs text-white">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                    >
                      <SiGithub size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target={
                        project.demo.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                    >
                      <FaPlay size={12} />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Bottom Repositories Link */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center font-mono-code text-xs text-zinc-400">
          <a
            href="https://github.com/aimanfazal?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group py-1"
          >
            <span>// All Repositories</span>
          </a>
        </div>
      </div>
    );
};

export default Project;
