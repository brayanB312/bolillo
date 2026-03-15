import React, { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';
import type { Project } from './CaseStudyModal'; 

const projects: Project[] = [
    {
        id: "si-mant",
        title: "Si-Mant",
        description: "Engineered a high-performance corporate platform with a custom Next.js admin dashboard. Implemented secure access for real-time content management.",
        tags: ["Next.js", "Tailwind", "Node.js", "MySQL"],
        linkDemo: "https://si-mant.com",
        image: "/projects/simant.png",
        caseStudy: {
            problem: "The client needed a secure way to upload verification images directly from the admin dashboard without relying on third-party CMS platforms, ensuring only authorized personnel could manipulate content.",
            solution: "I implemented a protected Next.js App Router API endpoint. It verifies the NextAuth session server-side, rigorously validates file types and sizes in memory, and sanitizes filenames before persisting them to the server's local volume.",
            codeDescription: "Next.js Route Handler for secure image uploading with strict validation.",
            fileName: "route.ts",
            snippet: `import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
    
    // Strict MIME type and size validation (Max 5MB)
    if (file.type !== "image/png") {
      return NextResponse.json({ error: "Invalid format. Only PNG allowed." }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File exceeds 5MB limit." }, { status: 400 });
    }

    // Generate secure random filename to prevent collisions and directory traversal
    const buffer = Buffer.from(await file.arrayBuffer());
    const secureFileName = \`\${crypto.randomUUID()}.png\`;
    
    // Storing in local volume as per VPS architecture requirements
    const path = join(process.cwd(), "public", "uploads", secureFileName);
    await writeFile(path, buffer);

    return NextResponse.json({ success: true, url: \`/uploads/\${secureFileName}\` });
  } catch (error) {
    return NextResponse.json({ error: "Upload process failed" }, { status: 500 });
  }
}`
        }
    },
    {
        id: "volo",
        title: "Volo",
        description: "Architected a scalable marketplace connecting drone operators and clients. Built robust REST APIs with Express and managed complex global state with React.",
        tags: ["React", "Tailwind", "PostgreSQL", "Express"],
        linkDemo: "https://volomx.com",
        image: "/projects/volo.png",
        caseStudy: {
            problem: "Volo needed a centralized marketplace to connect specialized drone operators with clients across Mexico. The platform required a dynamic search system, secure authentication for two different types of users (pilots and clients), and a highly responsive UI to showcase high-quality media.",
            solution: "I decoupled the architecture, building a stateless REST API with Node.js/Express and PostgreSQL to handle complex spatial queries for drone services. On the frontend, I used React with a custom Context API approach to manage the global state of the user session and active search filters, ensuring a seamless experience without prop drilling.",
            codeDescription: "Custom React Hook used to fetch and filter drone operators efficiently while handling loading and error states.",
            fileName: "useOperators.ts",
            snippet: `import { useState, useEffect } from 'react';

// Tipado de la respuesta
interface Operator {
  id: string;
  name: string;
  serviceType: string;
}

export const useOperators = (filters: Record<string, string>) => {
  const [operators, setOperators] = useState<Operator[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOperators = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams(filters).toString();
        const response = await fetch(\`/api/v1/operators?\${queryParams}\`);
        
        if (!response.ok) throw new Error('Failed to fetch operators');
        
        const data = await response.json();
        setOperators(data.results);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOperators();
  }, [filters]);

  return { operators, isLoading, error };
};`
        }
    },
    {
        id: "avalith",
        title: "Avalith",
        description: "Developed a full-stack commercial platform for a premium materials provider. Integrated a custom Resend mailing API for automated client communications.",
        tags: ["React", "Tailwind", "API", "Express", "Resend"],
        linkDemo: "https://avalith.design/",
        image: "/projects/avalith.png",
        caseStudy: {
            problem: "Avalith required a reliable, high-capacity quoting system where clients could attach large architectural blueprints (up to 40MB) and receive professional, branded email confirmations.",
            solution: "I architected an Express.js microservice using Multer for in-memory file buffering. To ensure high deliverability and professional formatting, I integrated the Resend API combined with React Email to programmatically render HTML templates based on the user's input.",
            codeDescription: "Strongly typed Express controller handling multipart form data and React Email rendering.",
            fileName: "emailController.ts",
            snippet: `import { Request, Response } from 'express';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { QuoteEmail } from './templates/QuoteEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface QuoteRequestBody {
  name: string;
  email: string;
  message: string;
}

export const handleQuoteRequest = async (req: Request<{}, {}, QuoteRequestBody>, res: Response) => {
  try {
    const { name, email, message } = req.body;
    // Multer handles the file buffer injected into req.files
    const files = (req.files as Express.Multer.File[]) || [];

    const emailHtml = await render(
      QuoteEmail({
        name,
        email,
        message,
        files: files.map(f => ({ filename: f.originalname, size: f.size }))
      })
    );

    const data = await resend.emails.send({
      from: 'Avalith Contact <quotes@avalith.design>',
      to: [process.env.SALES_EMAIL as string], 
      subject: \`New Quote Request from \${name}\`,
      html: emailHtml,
      attachments: files.map(file => ({
        filename: file.originalname,
        content: file.buffer,
      })),
      reply_to: email,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('[EMAIL_SERVICE_ERROR]:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
};`
        }
    }
];

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleOpenCaseStudy = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="min-h-screen w-full flex flex-col justify-center py-24 bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mb-20 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    A selection of full-stack applications that demonstrate my architectural decisions and engineering workflow.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="group relative flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.3)]"
                    >
                        <div className="w-full aspect-video relative overflow-hidden bg-slate-800 shrink-0 border-b border-white/5">
                            <img 
                                src={project.image} 
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div className="p-6 sm:p-8 flex flex-col grow relative z-10">
                            <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8 shrink-0">
                                {project.tags.map((tag, i) => (
                                    <span 
                                        key={i} 
                                        className="text-xs font-mono font-medium bg-slate-800/50 text-cyan-200/80 px-2.5 py-1 rounded-md border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition-all cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800 shrink-0">
                                <a 
                                    href={project.linkDemo} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                                >
                                    <ExternalLinkIcon /> Live App
                                </a>
                                
                                <button 
                                    onClick={() => handleOpenCaseStudy(project)} 
                                    className="flex items-center gap-2 text-sm font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 px-4 py-2 rounded-lg hover:bg-cyan-900/50 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all cursor-pointer"
                                >
                                    <CaseStudyIcon /> Case Study
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <CaseStudyModal 
                isOpen={!!selectedProject} 
                onClose={handleCloseModal} 
                project={selectedProject} 
            />
        </section>
    );
};

// SVG Icons
const ExternalLinkIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const CaseStudyIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;

export default Projects;