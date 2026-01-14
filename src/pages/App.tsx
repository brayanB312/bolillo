import Aurora from "@/components/Aurora";
import Projects from "@/components/home/Projects"; 
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Education";
import Footer from "@/components/Footer";

function App() {

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Resume = () => {
        window.open("/cv/CV.pdf", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="bg-slate-950"> 
            
            <main className="relative w-full h-screen overflow-hidden font-sans">
                <div className="absolute inset-0 z-0">
                    <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} blend={0.5} amplitude={1.0} speed={0.5} />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
                    <div className="mb-4 px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-xs md:text-sm font-mono text-cyan-300 tracking-widest uppercase">&lt;Hello World /&gt;</span>
                    </div>

                    <h1 className="text-white font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter drop-shadow-2xl mb-2">BRAYAN GALAVIZ</h1>
                    
                    <h2 className="text-lg md:text-2xl text-slate-300 font-mono mt-2 max-w-3xl">
                        <span className="text-white font-bold">Software Developer</span> <span className="mx-3 text-slate-500">|</span> Information Technology
                    </h2>

                    <p className="mt-6 text-slate-400 max-w-xl text-sm md:text-base leading-relaxed">
                        Building robust and scalable digital solutions. Specialized in modern software architecture, efficient code, and problem-solving.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        {/* Botón con acción de Scroll */}
                        <button 
                            onClick={handleScrollToProjects}
                            className="px-8 py-3 cursor-pointer bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            View Projects
                        </button>
                        <button onClick={Resume} className="px-8 py-3 cursor-pointer border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
                            Download Resume
                        </button>
                    </div>
                </div>

            </main>

            <Projects />

			<Skills />

            <Education />

            <Footer />
            
        </div>
    );
}

export default App;