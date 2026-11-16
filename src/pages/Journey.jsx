import Nav from '../components/Nav';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

const experiences = [
    {
        role: "Web Development Intern",
        company: "SARV InfoTech Private Limited",
        period: "Dec 2025 – Jan 2026",
        location: "Remote / India",
        points: [
            "Developed and optimized responsive web pages using modern web technologies.",
            "Built and customized UI components to improve overall user engagement and experience.",
            "Tested and debugged web applications across multiple screen sizes and browsers.",
            "Collaborated on frontend deployment and production readiness."
        ],
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
    }
];

const education = [
    {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "Bakhtiyarpur College of Engineering",
        location: "Patna, India",
        period: "2024 – 2028",
        grade: "CGPA: 8.8 / 10",
        highlights: "Data Structures & Algorithms, Object-Oriented Programming, Operating Systems"
    },
    {
        degree: "Higher Secondary (Class XII - PCM)",
        institution: "Techno Mission International School (CBSE)",
        location: "Bhagalpur, India",
        period: "2021 – 2023",
        grade: "Percentage: 89.4%",
        highlights: "Physics, Chemistry, Mathematics, Computer Science"
    }
];

const achievements = [
    {
        title: "Smart India Hackathon 2025",
        desc: "Participated and collaborated in a team to build and present an innovative software solution."
    },
    {
        title: "50+ DSA Problems Solved",
        desc: "Solved 50+ data structures & algorithms challenges across LeetCode with C++ & Python."
    },
    {
        title: "Certifications",
        desc: "Data Structures & Algorithms (CodeHelp) • Full Stack Web Development (Apna College)"
    }
];

const Journey = () => {
    return (
        <div className="relative min-h-screen text-white flex flex-col justify-between pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-x-hidden select-none hide-scrollbar">
            {/* Top Navigation */}
            <Nav />

            {/* Main Content */}
            <main className="w-full max-w-5xl mx-auto my-auto py-6 sm:py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
                    {/* Left Column: Experience & Achievements (col-span-7) */}
                    <div className="md:col-span-7 space-y-4 sm:space-y-6">
                        {/* Experience Card */}
                        <div className="border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                                <div className="flex items-center gap-2 text-zinc-400 font-mono-code text-xs">
                                    <Briefcase size={14} className="text-zinc-500" />
                                    <span>// experience</span>
                                </div>
                                <span className="font-mono-code text-[11px] text-zinc-600">work history</span>
                            </div>

                            <div className="space-y-6">
                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <div>
                                                <h3 className="font-pixel text-base sm:text-lg text-white tracking-wide">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono-code mt-0.5">
                                                    <Building2 size={12} className="text-zinc-500 shrink-0" />
                                                    <span>{exp.company}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row sm:flex-col sm:items-end gap-2 sm:gap-0 font-mono-code text-[11px] text-zinc-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={11} className="text-zinc-600" />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={11} className="text-zinc-600" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-1.5 pt-1 text-xs text-zinc-300 font-sans leading-relaxed list-disc list-inside marker:text-zinc-600">
                                            {exp.points.map((pt, i) => (
                                                <li key={i}>{pt}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 pt-2 font-mono-code text-[10px] text-zinc-400">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="border border-zinc-900 bg-zinc-950 px-2 py-0.5 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements & Highlights Card */}
                        <div className="border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col space-y-4">
                            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                                <div className="flex items-center gap-2 text-zinc-400 font-mono-code text-xs">
                                    <Award size={14} className="text-zinc-500" />
                                    <span>// highlights & achievements</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 pt-1">
                                {achievements.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-zinc-900 bg-[#0d0d0d] p-3 flex flex-col gap-1 hover:border-zinc-800 transition-colors"
                                    >
                                        <span className="font-mono-code text-xs text-white font-medium">
                                            {item.title}
                                        </span>
                                        <span className="text-xs text-zinc-400 font-sans leading-relaxed">
                                            {item.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Education (col-span-5) */}
                    <div className="md:col-span-5 space-y-4 sm:space-y-6">
                        <div className="border border-zinc-900 bg-[#0a0a0a]/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                                <div className="flex items-center gap-2 text-zinc-400 font-mono-code text-xs">
                                    <GraduationCap size={15} className="text-zinc-500" />
                                    <span>// education</span>
                                </div>
                                <span className="font-mono-code text-[11px] text-zinc-600">academics</span>
                            </div>

                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div
                                        key={idx}
                                        className={`space-y-2 ${idx !== 0 ? 'pt-5 border-t border-zinc-900/80' : ''}`}
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono-code text-[11px] text-zinc-500 flex items-center gap-1">
                                                <Calendar size={11} className="text-zinc-600" />
                                                {edu.period}
                                            </span>
                                            <span className="font-mono-code text-[11px] text-amber-400/90 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded">
                                                {edu.grade}
                                            </span>
                                        </div>

                                        <div>
                                            <h3 className="font-pixel text-sm sm:text-base text-white tracking-wide">
                                                {edu.degree}
                                            </h3>
                                            <p className="font-mono-code text-xs text-zinc-400 pt-0.5">
                                                {edu.institution}
                                            </p>
                                            <p className="font-mono-code text-[11px] text-zinc-600">
                                                {edu.location}
                                            </p>
                                        </div>

                                        <p className="text-xs text-zinc-400 font-sans pt-1 leading-relaxed">
                                            <span className="text-zinc-500 font-mono-code text-[11px]">Focus: </span>
                                            {edu.highlights}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Footer */}
            <footer className="w-full flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-6">
                <span>// journey</span>
                <span className="text-zinc-600">typeflux</span>
            </footer>
        </div>
    );
};

export default Journey;
