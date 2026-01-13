import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface MobileNavItemProps {
    href: string;
    id: string;
    children: ReactNode;
    label: string;
    activeSection: string;
}

interface DesktopLinkProps {
    href: string;
    id: string;
    children: ReactNode;
    activeSection: string;
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: "-40% 0px -40% 0px", 
            threshold: 0
        });

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <>
            <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-center p-6">
                <div className="bg-slate-950/50 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <ul className="flex gap-8 items-center">
                        <DesktopLink href="#projects" id="projects" activeSection={activeSection}>Projects</DesktopLink>
                        <DesktopLink href="#skills" id="skills" activeSection={activeSection}>Skills</DesktopLink>
                        <DesktopLink href="#education" id="education" activeSection={activeSection}>Education</DesktopLink>
                        
                        <div className="h-4 w-px bg-white/10 mx-2"></div>
                        
                        <li>
                            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-full border border-white/5 transition-all">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>


            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-t border-white/10 pb-safe">
                <div className="flex justify-around items-center px-2 py-3 pb-5">
                    
                    <MobileNavItem href="#projects" id="projects" label="Projects" activeSection={activeSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    </MobileNavItem>

                    <MobileNavItem href="#skills" id="skills" label="Skills" activeSection={activeSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
                    </MobileNavItem>

                    <MobileNavItem href="#education" id="education" label="Education" activeSection={activeSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    </MobileNavItem>

                    <MobileNavItem href="#contact" id="contact" label="Contact" activeSection={activeSection}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </MobileNavItem>

                </div>
            </nav>
        </>
    );
}

function MobileNavItem({ href, id, children, label, activeSection }: MobileNavItemProps) {
    const isActive = activeSection === id;
    
    return (
        <a 
            href={href}
            className={`
                flex flex-col items-center justify-center w-full group transition-all duration-300
                ${isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}
            `}
        >
            <div className={`
                p-1.5 rounded-xl transition-all duration-300 mb-1
                ${isActive 
                    ? 'bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.4)] -translate-y-0.5' 
                    : 'group-active:scale-95'}
            `}>
                <div className="w-6 h-6">
                    {children}
                </div>
            </div>
            
            <span className={`text-[10px] font-medium tracking-wide transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                {label}
            </span>
        </a>
    );
}

function DesktopLink({ href, id, children, activeSection }: DesktopLinkProps) {
    const isActive = activeSection === id;
    
    return (
        <li>
            <a 
                href={href} 
                className={`
                    text-sm font-medium transition-all duration-300
                    ${isActive 
                        ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' 
                        : 'text-slate-300 hover:text-cyan-400'}
                `}
            >
                {children}
            </a>
        </li>
    );
}