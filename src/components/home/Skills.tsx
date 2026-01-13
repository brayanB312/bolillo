import React from 'react';

// 1. DEFINICIÓN DE TIPOS
interface Skill {
    name: string;
    img: string;
}

interface SkillRowProps {
    items: Skill[];
    reverse?: boolean;
}

// 2. DATA: Rutas exactas basadas en tu carpeta 'public/skills'
const skills: Skill[] = [
    // --- Fila 1: Frontend & Core ---
    { name: "React", img: "/skills/react.svg" },
    { name: ".NET", img: "/skills/net.svg" },
    { name: "Tailwind", img: "/skills/tailwind.svg" },
    { name: "JavaScript", img: "/skills/js.svg" },
    { name: "TypeScript", img: "/skills/ts.svg" },

    // --- Fila 2: Backend & Languages ---
    { name: "Next.js", img: "/skills/nextjs.svg" },
    { name: "C#", img: "/skills/c.svg" },
    { name: "Node.js", img: "/skills/nodejs.svg" },
    { name: "Python", img: "/skills/python.svg" },
    { name: "PHP", img: "/skills/php.svg" },

    // --- Fila 3: Data & Tools ---
    { name: "MySQL", img: "/skills/mysql.svg" },
    { name: "PostgreSQL", img: "/skills/postgre.svg" },
    { name: "Git", img: "/skills/git.svg" },
    { name: "GitHub", img: "/skills/github.svg" },
    { name: "DevExpress", img: "/skills/devexpress.svg" },
];

// 3. COMPONENTE AUXILIAR (Fila)
const SkillRow: React.FC<SkillRowProps> = ({ items, reverse = false }) => {
    return (
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className={`flex gap-8 py-4 w-max ${reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'}`}>
                {[...items, ...items].map((skill, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-xl px-6 py-3 min-w-[160px] md:min-w-[190px] hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 cursor-default"
                    >
                        <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100">
                            <img
                                className="w-full h-full object-contain"
                                src={skill.img}
                                alt={`${skill.name} icon`}
                                loading="lazy"
                            />
                        </div>

                        <span className="text-slate-400 font-bold text-sm md:text-base whitespace-nowrap group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. COMPONENTE PRINCIPAL
const Skills: React.FC = () => {
    const row1 = skills.slice(0, 5);
    const row2 = skills.slice(5, 10);
    const row3 = skills.slice(10, 15);

    return (
        <section id="skills" className="min-h-screen w-full flex flex-col justify-center py-20 bg-slate-950 relative overflow-hidden">
            
            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes infinite-scroll-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
                .animate-infinite-scroll-reverse {
                    animation: infinite-scroll-reverse 40s linear infinite;
                }
                .group:hover .animate-infinite-scroll,
                .group:hover .animate-infinite-scroll-reverse {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Fondo Decorativo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full px-4">
                
                {/* --- TÍTULO ACTUALIZADO (Mismo formato que Projects) --- */}
                <div className="max-w-7xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A diverse set of technologies and tools I use to build robust and scalable applications.
                    </p>
                </div>

                {/* Contenedor de las filas */}
                <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto group">
                    <SkillRow items={row1} reverse={true} />
                    <SkillRow items={row2} reverse={false} />
                    <SkillRow items={row3} reverse={true} />
                </div>
            </div>
        </section>
    );
};

export default Skills;