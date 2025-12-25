"use client";

import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react"; 
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
    id: number;
    title: string;
    status: "completed" | "in-progress" | "maintenance"; 
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
}

const statusLabel: Record<ProjectProps["status"], string> = {
  "completed": "Completo",
  "in-progress": "Em progresso",
  "maintenance": "Manutenção",
};

const ProjectCard = ({ project }: {project: ProjectProps} ) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row w-full bg-dracula-current/70 shadow-2xl rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-dracula-primary/40 p-6 md:p-12 lg:p-16 gap-10 lg:gap-16 min-h-125 md:min-h-150 lg:min-h-187.5"
        > 
            <div className="group order-1 md:order-2 w-full md:w-1/2 relative overflow-hidden rounded-xl aspect-video md:aspect-auto md:min-h-87.5">
                <img 
                    src={project.image} 
                    alt={`Preview do ${project.title}`} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 rounded-xl"
                />
                {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                        <div className="absolute inset-0 bg-dracula-bg/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-dracula-cyan text-xl font-bold p-6 text-center tracking-widest uppercase">
                                Acesse o projeto
                            </p>
                        </div>
                    </a>
                )}
            </div>
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dracula-cyan mb-4">
                        {project.title}
                    </h2>
                     <div className="flex items-center gap-2 mb-6">
                        <Badge variant={project.status} className="text-[10px] uppercase tracking-wider">
                            {statusLabel[project.status]}
                        </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-dracula-text/80 mb-6 leading-relaxed max-w-prose">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <Badge key={tag} variant="draculaProps">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-auto">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 px-6 py-3 bg-dracula-bg text-dracula-text font-bold rounded-lg transition-all border border-white/5 hover:text-dracula-green hover:border-dracula-green active:scale-95 shadow-md text-sm sm:text-base"
                    >
                        <FaGithub className="text-xl" /> GitHub
                    </a>
                    
                    {project.liveUrl && project.liveUrl !== "#" && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 sm:p-4 bg-dracula-primary rounded-full text-dracula-bg shadow-lg transition-all hover:-rotate-45 active:scale-90"
                            aria-label={`Ver projeto ${project.title}`}
                        >
                             <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
