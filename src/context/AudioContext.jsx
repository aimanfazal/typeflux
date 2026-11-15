import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioCtx = createContext(null);

const homeAudio = `${import.meta.env.BASE_URL}home-audio.mp3`;
const layoutVideo = `${import.meta.env.BASE_URL}layout.mp4`;

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggle = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (e) {
                console.error('Audio play failed', e);
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    // Global "M" key to toggle music
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'm' || e.key === 'M') toggle();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    // Smoothly adjust background opacity when video/music is active
    useEffect(() => {
        document.body.style.setProperty('--bg-opacity', isPlaying ? '0.15' : '0.5');
    }, [isPlaying]);

    return (
        <AudioCtx.Provider value={{ isPlaying, toggle }}>
            <audio ref={audioRef} src={homeAudio} loop preload="auto" />
            {/* Global video overlay — fades in with music, screen blend mode lets black areas be fully transparent */}
            <video
                src={layoutVideo}
                autoPlay
                loop
                muted
                playsInline
                className={`pointer-events-none fixed inset-0 w-full h-full object-cover transition-opacity duration-700 z-10 mix-blend-screen ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            />
            {children}
        </AudioCtx.Provider>
    );
};

export const useAudio = () => useContext(AudioCtx);
