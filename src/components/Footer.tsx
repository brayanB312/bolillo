export default function Footer() {
    return (
        <footer className="w-full bg-slate-950 border-t border-white/5 mt-20 pt-8 pb-28 md:py-8">
            
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
                
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-slate-100 tracking-tight">
                        BRAYAN GALAVIZ
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                        Software Developer
                    </p>
                </div>

                <div className="flex gap-6 items-center">
                    
                    <a 
                        href="https://github.com/brayanB312" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative p-2"
                        aria-label="GitHub"
                    >
                        <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/galaviz-dominguez-brayan-28a92b308/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative p-2"
                        aria-label="LinkedIn"
                    >
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>

                    <a 
                        href="mailto:brayangalaviz87@gmail.com" 
                        className="group relative p-2"
                        aria-label="Email"
                    >
                        <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors relative z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </a>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Brayan Galaviz.
                    </p>
                    <p className="text-[10px] text-slate-700 mt-0.5">
                        All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}