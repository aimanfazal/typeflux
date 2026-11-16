import { useState, useEffect } from 'react';
import { Mail, Sparkles, Music, Music2 } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Nav from '../components/Nav';
import { useAudio } from '../context/AudioContext';

const FONT_STYLES = [
  { id: 'lovers-quarrel', className: 'font-lovers-quarrel tracking-normal font-normal' },
  { id: 'silkscreen', className: 'font-silkscreen tracking-wider font-normal' },
  { id: 'metal-mania', className: 'font-metal-mania tracking-wider font-normal' },
  { id: 'cherry-bomb-one', className: 'font-cherry-bomb-one tracking-wide font-normal' },
  { id: 'iceland', className: 'font-iceland tracking-widest font-normal' },
  { id: 'unifraktur-maguntia', className: 'font-unifraktur-maguntia tracking-wider font-normal' },
  { id: 'rubik-spray-paint', className: 'font-rubik-spray-paint tracking-wide font-normal' },
  { id: 'crimson-text', className: 'font-crimson-text tracking-normal font-normal' },
  { id: 'bungee-shade', className: 'font-bungee-shade tracking-wider font-normal' },
  { id: 'lobster', className: 'font-lobster tracking-wide font-normal' },
  { id: 'vt323', className: 'font-vt323 tracking-widest font-normal' },
  { id: 'creepster', className: 'font-creepster tracking-wider font-normal' },
  { id: 'limelight', className: 'font-limelight tracking-wider font-normal' },
  { id: 'rubik-glitch', className: 'font-rubik-glitch tracking-normal font-normal' },
  { id: 'permanent-marker', className: 'font-permanent-marker tracking-wider font-normal' },
  { id: 'libre-barcode-39-text', className: 'font-libre-barcode-39-text tracking-normal font-normal' },
  { id: 'monoton', className: 'font-monoton tracking-wider font-normal' },
  { id: 'jacquard-12', className: 'font-jacquard-12 tracking-wide font-normal' },
  { id: 'bangers', className: 'font-bangers tracking-widest font-normal' },
  { id: 'londrina-shadow', className: 'font-londrina-shadow tracking-wider font-normal' },
];

const NAMESPACE = 'typeflux';

const Home = () => {
    const [currentFontIndex, setCurrentFontIndex] = useState(0);
    const [visitorCount, setVisitorCount] = useState(() => {
        const cached = localStorage.getItem('cached_visitors');
        return cached ? parseInt(cached, 10) : 1;
    });
    const [clickCount, setClickCount] = useState(() => {
        const cached = localStorage.getItem('cached_clicks');
        return cached ? parseInt(cached, 10) : 1;
    });
    const [isBouncing, setIsBouncing] = useState(false);
    const { isPlaying, toggle } = useAudio();

    // Cycle through fonts every 200ms
    useEffect(() => {
        const interval = setInterval(
            () => setCurrentFontIndex((i) => (i + 1) % FONT_STYLES.length),
            250
        );
        return () => clearInterval(interval);
    }, []);

    // Fetch global visitor & click counts on mount
    useEffect(() => {
        const load = async () => {
            try {
                const visited = sessionStorage.getItem('session_visit');
                const url = visited
                    ? `https://abacus.jasoncameron.dev/get/${NAMESPACE}/visits`
                    : `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/visits`;
                const res = await fetch(url);
                if (res.ok) {
                    const { value } = await res.json();
                    if (typeof value === 'number') {
                        setVisitorCount(value);
                        localStorage.setItem('cached_visitors', String(value));
                        if (!visited) sessionStorage.setItem('session_visit', 'true');
                    }
                }
            } catch { /* use cached */ }

            try {
                const res = await fetch(`https://abacus.jasoncameron.dev/get/${NAMESPACE}/clicks`);
                if (res.ok) {
                    const { value } = await res.json();
                    if (typeof value === 'number') {
                        setClickCount(value);
                        localStorage.setItem('cached_clicks', String(value));
                    }
                }
            } catch { /* use cached */ }
        };
        load();
    }, []);

    const handleGlobalClick = async () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 150);
        setClickCount((n) => n + 1);
        try {
            const res = await fetch(`https://abacus.jasoncameron.dev/hit/${NAMESPACE}/clicks`);
            if (res.ok) {
                const { value } = await res.json();
                if (typeof value === 'number') {
                    setClickCount(value);
                    localStorage.setItem('cached_clicks', String(value));
                }
            }
        } catch { /* keep optimistic */ }
    };

    const activeFont = FONT_STYLES[currentFontIndex];

    return (
      <div className="relative w-full h-[100dvh] max-h-[100dvh] text-white flex flex-col justify-between p-3 sm:py-4 sm:px-10 md:px-12 overflow-hidden select-none">
        <Nav />

        {/* Centre: cycling name + tagline */}
        <main className="w-full flex-1 flex flex-col items-center justify-center text-center my-auto z-10 min-h-0">
          <p className="font-mono-code text-xs sm:text-sm text-zinc-400 mt-1 sm:mt-3 tracking-wider font-bold">
            [14:42]
          </p>
          <div
            onClick={() =>
              setCurrentFontIndex((i) => (i + 1) % FONT_STYLES.length)
            }
            title="Click to cycle font"
            className="min-h-[90px] sm:min-h-[140px] md:min-h-[180px] flex items-center justify-center cursor-pointer"
          >
            <h1
              key={currentFontIndex}
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white transition-all duration-100 ${activeFont.className}`}
            >
              Aiman
            </h1>
          </div>
        </main>

        {/* Footer: social links, audio toggle, counters */}
        <footer className="w-full flex justify-between items-center gap-2 z-10 shrink-0 pt-2">
          <div className="flex items-center gap-2.5 sm:gap-4 text-zinc-400">
            <a
              href="https://github.com/aimanfazal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <SiGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/aimanfazal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={14} />
            </a>
            <a
              href="mailto:voidaiman.dev@gmail.com"
              className="hover:text-white transition-colors p-1"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <button
              onClick={toggle}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              title={
                isPlaying ? "Pause ambient music [M]" : "Play ambient music [M]"
              }
              className={`p-1 transition-colors cursor-pointer ${isPlaying ? "text-white" : "text-zinc-600 hover:text-zinc-300"}`}
            >
              {isPlaying ? (
                <Music size={16} className="animate-pulse" />
              ) : (
                <Music2 size={16} />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-mono-code text-zinc-400 shrink-0">
            <div className="flex items-center gap-1" title="Total visitors">
              <span className="text-zinc-600">visits: </span>
              <span className="text-zinc-300 font-semibold">
                {visitorCount.toLocaleString()}
              </span>
            </div>
            <span className="text-zinc-700">•</span>
            <button
              onClick={handleGlobalClick}
              title="Click to bump the counter!"
              className={`group flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded transition-all cursor-pointer select-none active:scale-90 ${isBouncing ? "scale-105 border-zinc-500 text-white" : ""}`}
            >
              <Sparkles
                size={10}
                className="text-zinc-500 group-hover:text-amber-400 transition-colors"
              />
              <span>clicks: </span>
              <span className="text-white font-semibold">
                {clickCount.toLocaleString()}
              </span>
            </button>
          </div>
        </footer>
      </div>
    );
};

export default Home;
