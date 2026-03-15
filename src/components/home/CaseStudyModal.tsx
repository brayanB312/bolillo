import React, { useEffect } from 'react';

// 1. Exportamos las interfaces para poder usarlas en otros componentes
export interface CaseStudy {
    problem: string;
    solution: string;
    codeDescription: string;
    fileName: string;
    snippet: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    linkDemo: string;
    image: string;
    caseStudy?: CaseStudy; // Es opcional por si algún proyecto aún no lo tiene
}

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project || !project.caseStudy) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity">
            <div 
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                role="dialog"
                aria-modal="true"
            >
                {/* Header estático */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-slate-900/50">
                    <div>
                        <h2 className="text-2xl font-black text-white">{project.title} <span className="text-cyan-500 font-mono text-sm font-normal ml-2">— Case Study</span></h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Cuerpo del modal */}
                <div className="p-6 sm:p-8 overflow-y-auto grow custom-scrollbar">
                    
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                            <TargetIcon /> The Challenge
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            {project.caseStudy.problem}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                            <ArchitectureIcon /> Architecture & Solution
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                            {project.caseStudy.solution}
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                            <CodeIcon /> Featured Code Snippet
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                            {project.caseStudy.codeDescription}
                        </p>
                        
                        <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-inner">
                            <div className="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="ml-4 text-xs font-mono text-slate-400">{project.caseStudy.fileName}</span>
                            </div>
                            <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-slate-300">
                                <pre><code>{project.caseStudy.snippet}</code></pre>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// SVG Icons
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const TargetIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const ArchitectureIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
const CodeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;

export default CaseStudyModal;