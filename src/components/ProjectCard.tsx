import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react"; 
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

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

const ProjectCard = ({ project }: {project: ProjectProps} ) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
             className="flex flex-col md:flex-row w-full bg-card shadow-2xl rounded-3xl overflow-hidden border border-border transition-all duration-300 hover:border-dracula-primary/40 p-5 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-16 min-h-fit md:min-h-150"
        > 
            <div className="group order-1 md:order-2 w-full md:w-1/2 h-55 sm:h-75 md:h-auto relative overflow-hidden rounded-2xl shadow-inner bg-dracula-current/5">
                <img 
                    src={project.image} 
                    alt={t("projects.preview", { title: project.title })}
                    loading="lazy"
                    className="w-full h-full object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                />
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                        <div className="absolute inset-0 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-dracula-cyan text-xl font-bold p-6 text-center tracking-widest uppercase">
                                {t("projects.accessProject")}
                            </p>
                        </div>
                    </a>
                )}
            </div>

            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dracula-cyan mb-4">
                        {project.title}
                    </h2>
                     <div className="flex items-center gap-2 mb-6">
                        <Badge variant={project.status} className="text-[10px] uppercase tracking-wider">
                            {t(`projects.status.${project.status}`)}
                        </Badge>
                    </div>
                    <p className="text-sm sm:text-base mb-6 leading-relaxed max-w-prose">
                        {project.description}
                    </p>
                    
                    <div className="mb-8">
                        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-bold mb-3 block">
                            {t("projects.usedTech")}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="draculaProps">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className=" w-fit flex items-center gap-3 px-6 py-3 bg-dracula-card font-bold rounded-lg transition-all border text-dracula-green border-dracula-green hover:bg-dracula-green hover:text-card active:scale-95 shadow-md text-sm sm:text-base"
                        aria-label={t("projects.viewGithub", { title: project.title })}
                    >
                        <FaGithub className="text-xl" /> {t("projects.github")}
                    </a>
                    
                    {project.liveUrl && project.liveUrl !== "#" && project.liveUrl !== "" && (
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-fit flex items-center gap-3 px-6 py-3 bg-dracula-card font-bold rounded-lg transition-all border text-dracula-primary border-dracula-primary hover:bg-dracula-primary hover:text-card active:scale-95 shadow-md text-sm sm:text-base"
                            aria-label={t("projects.accessLive", { title: project.title })}
                        >
                            {t("projects.liveDeploy")}<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;