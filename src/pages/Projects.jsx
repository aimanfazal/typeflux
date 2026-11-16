import Nav from '../components/Nav';
import Project from '../components/Project';

const Projects = () => {
    return (
        <div className="relative h-dvh text-white flex flex-col pt-3 pb-3 px-4 sm:pt-4 sm:pb-4 sm:px-10 md:pt-4 md:pb-5 md:px-12 overflow-hidden">
            {/* Top Navigation */}
            <Nav />

            {/* Main Projects Section */}
            <main className="w-full flex-1 min-h-0 flex flex-col justify-center items-center py-2 sm:py-3">
                <Project />
            </main>

            {/* Bottom spacer / minimal status */}
            <footer className="w-full shrink-0 flex justify-between items-center text-xs font-mono-code text-zinc-500 pt-2">
                <span>// projects</span>
                <span className="text-zinc-600">typeflux</span>
            </footer>
        </div>
    );
};

export default Projects;
