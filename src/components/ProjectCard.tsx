"use client";

import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa"; // Ícone para o GitHub
import { RocketIcon } from "@radix-ui/react-icons"; // Outro ícone, se preferir

// Defina a interface para as propriedades do card
interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        description: string;
        tags: string[];
        githubUrl: string;
        liveUrl: string;
    };
}


const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        // Envolva em motion.div para adicionar animações, se desejar
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dracula-current/50 p-6 rounded-xl border border-white/10 h-full flex flex-col justify-between shadow-lg transition-shadow duration-300 hover:shadow-dracula-primary/20"
        >
            <div>
                <h2 className="text-2xl font-bold text-dracula-primary mb-3">{project.title}</h2>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-dracula-bg text-[10px] rounded-full border border-dracula-cyan/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dracula-green hover:text-green-400 transition-colors font-semibold">
                    <FaGithub /> GitHub
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-dracula-cyan hover:text-cyan-400 transition-colors font-semibold">
                        <RocketIcon className="w-4 h-4" />
                         Ver Projeto
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
