const projects = [
    {
        title: "Si-Mant",
        description: "A dynamic corporate landing page featuring a custom admin dashboard. Allows the business owner to easily manage and update site content in real-time.",
        tags: ["Next.js", "Tailwind", "Node.js", "MySQL"],
        linkDemo: "https://si-mant.com",
        linkRepo: "https://github.com/brayanB312/Si-Mant",
        image: "/projects/simant.png",
        gradient: "from-blue-600 to-cyan-400" 
    },
    {
        title: "Volo",
        description: "A marketplace that connects drone operators with people interested in drone services.",
        tags: ["React", "Tailwind", "PostgreSQL", "Express"],
        linkDemo: "https://volomx.com",
        linkRepo: "https://github.com/brayanB312/volo_page",
        image: "/projects/volo.png",
        gradient: "from-blue-600 to-cyan-400" 
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen w-full flex flex-col justify-center py-20 bg-slate-950 text-white px-4">

            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A selection of projects that demonstrate my technical expertise and problem-solving skills.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
                        {/* Imagen */}
                        <div className="h-48 w-full relative overflow-hidden bg-slate-800">
                            <img 
                                src={project.image} 
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        </div>

                        {/* Contenido */}
                        <div className="p-6 relative z-10">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed h-20 overflow-hidden text-ellipsis">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono bg-slate-800 text-cyan-200 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors">
                                    <ExternalLinkIcon /> Live Demo
                                </a>
                                <a href={project.linkRepo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-cyan-400 transition-colors">
                                    <GithubIcon /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

// Iconos SVG simples
const ExternalLinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
)

const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
)

export default Projects;