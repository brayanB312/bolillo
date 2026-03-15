interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    description: string;
    certificateLink?: string;
}

const education: EducationItem[] = [
    {
        institution: "Universidad Politécnica De Baja California (UPBC)",
        degree: "Bachelor of Engineering in Information Technology",
        period: "2022 - 2025",
        description: "Specialized in Software Development. Graduated with a focus on building scalable web applications, database architecture, and agile methodologies.",
    },
];

const Education: React.FC = () => {
    return (
        <section id="education" className="min-h-screen w-full py-20 bg-slate-950 text-white flex justify-center items-center px-4">
            
            <div className="max-w-4xl w-full">
                
                {/* TÍTULO */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Certifications</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My academic background and continuous professional development.
                    </p>
                </div>

                {/* TIMELINE CONTAINER */}
                <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
                    
                    {education.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            
                            {/* PUNTOS (DOTS) */}
                            <div className="absolute -left-[5px] md:-left-[6px] top-2 h-3 w-3 rounded-full bg-slate-600 border border-slate-950 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-300"></div>

                            {/* TÍTULO Y UNI */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                    {item.degree}
                                </h3>
                                <span className="text-sm font-mono text-slate-500">
                                    @ {item.institution}
                                </span>
                            </div>

                            {/* PERIODO */}
                            <span className="inline-block px-2 py-1 mb-4 text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 rounded">
                                {item.period}
                            </span>

                            {/* DESCRIPCIÓN */}
                            <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">
                                {item.description}
                            </p>

                            {/* Link (Opcional) */}
                            {item.certificateLink && (
                                <a 
                                    href={item.certificateLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    View Credential <ArrowUpRightIcon />
                                </a>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const ArrowUpRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
)

export default Education;