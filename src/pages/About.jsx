import Nav from '../components/Nav';
import profilePic from '../assets/image.jpg';
import resumePdf from '/resume.pdf';
import { FaNode, FaReact, FaJava, FaFile, FaCoffee } from "react-icons/fa";
import {
    SiFastapi,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiTailwindcss,
    SiGithub,
    SiLinkedin,
    SiLeetcode,
    SiMysql,
} from 'react-icons/si';
import { ArrowUpRight, Code, Terminal, FileText, Download, Mail} from 'lucide-react';

const techStack = [
    { name: 'Python', icon: SiPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Java', icon: FaJava },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNode },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MySQL', icon: SiMysql},
    { name: 'GitHub', icon: SiGithub },
];

const About = () => {
    return (
      <div className="relative w-full h-[100dvh] max-h-[100dvh] text-white flex flex-col justify-between p-3 sm:py-4 sm:px-10 md:px-12 overflow-hidden select-none">
        {/* Top Navigation */}
        <Nav />

        {/* Main Content Area */}
        <main className="w-full max-w-5xl mx-auto my-auto flex-1 flex flex-col justify-center min-h-0 py-1 sm:py-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-stretch">
            {/* Left Column: Square Photo & Quick Profile Card */}
            <div className="md:col-span-5 border border-zinc-900 bg-black/70 backdrop-blur-sm p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-3 sm:space-y-4">
              <div className="space-y-3 sm:space-y-4">
                {/* Square Profile Image with subtle framing */}
                <div className="relative w-full aspect-square max-w-[140px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px] mx-auto overflow-hidden border border-zinc-800 bg-[#161616] p-1.5 sm:p-2">
                  <img
                    src={profilePic}
                    alt="Aiman Fazal"
                    className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name & Identity */}
                <div className="text-center sm:text-left space-y-0.5 sm:space-y-1">
                  <h1 className="font-pixel text-xl sm:text-2xl lg:text-3xl text-white tracking-wide">
                    aiman
                  </h1>
                  <p className="font-mono-code text-[11px] sm:text-xs text-zinc-400">
                    # Aiman Fazal
                  </p>
                  <p className="font-mono-code text-[10px] sm:text-xs text-zinc-500">
                    Developer • Builder
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 sm:pt-3 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 font-mono-code text-xs">
                <a
                  href="https://github.com/aimanfazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                >
                  <SiGithub
                    size={14}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aimanfazal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                >
                  <SiLinkedin
                    size={14}
                    className="text-zinc-500 group-hover:text-white transition-colors"
                  />
                </a>
                <a
                  href="mailto:voidaiman.dev@gmail.com"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                >
                  <Mail size={14} />
                </a>
                <a
                  href="https://leetcode.com/u/aimanfazal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
                >
                  <SiLeetcode
                    size={14}
                    className="text-zinc-500 group-hover:text-[#FFA116] transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Right Column: Bio & Tech Stack */}
            <div className="md:col-span-7 flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-between">
              {/* Bio Card */}
              <div className="border border-zinc-900 bg-black/70 backdrop-blur-sm p-4 sm:p-5 lg:p-6 flex flex-col justify-start space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                  <Terminal size={13} />
                  <span>// whoami</span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-sans">
                  I'm a developer with a deep passion for building clean,
                  performant, and user-focused digital experiences.
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  I love clean code, elegant typography, modern developer
                  tooling, and self-hosted software where you own your data.
                  Always learning and exploring new technologies.
                </p>

                {/* Actions: Download Resume & Buy Me A Chai */}
                <div className="pt-1 sm:pt-1.5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800 text-white font-mono-code text-[11px] sm:text-xs transition-all duration-200"
                  >
                    <FaFile size={11} />
                    <span>View Resume</span>
                  </a>

                  <a
                    href="https://buymeacoffee.com/aimanfazal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-zinc-800 bg-[#121212] hover:border-zinc-700 hover:bg-zinc-900 text-zinc-400 hover:text-white font-mono-code text-[11px] sm:text-xs transition-all duration-200"
                  >
                    <FaCoffee
                      size={11}
                      className="text-zinc-400 group-hover:text-white transition-colors"
                    />
                    <span>Buy Me A Coffee</span>
                  </a>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="border border-zinc-900 bg-black/70 backdrop-blur-sm p-4 sm:p-5 lg:p-6 flex flex-col justify-start space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-zinc-500 font-mono-code text-xs">
                  <Code size={13} />
                  <span>// stack & tools</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 pt-0.5">
                  {techStack.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-2.5 py-1.5 border border-zinc-900 bg-[#0d0d0d] hover:border-zinc-700 hover:bg-zinc-900/60 text-zinc-300 hover:text-white text-[11px] sm:text-xs font-mono-code transition-colors"
                      >
                        <IconComponent className="text-zinc-400 text-xs sm:text-sm flex-shrink-0" />
                        <span className="truncate">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Footer spanning both corners */}
        <footer className="w-full flex justify-between items-center text-[11px] sm:text-xs font-mono-code text-zinc-500 pt-2 shrink-0">
          <span>// about me</span>
          <span className="text-zinc-600">typeflux</span>
        </footer>
      </div>
    );
};

export default About;