import { Button } from "@/components/ui/button";

interface ResumeItemProps {
    date: string;
    title: string;
    subtitle: string;
    description?: string;
    tasks?: string[];
    link?: string;
    badgeColor?: string;
    shadowColor?: string;
}

export const ResumeItem = ({ 
    date, title, subtitle, description, tasks, link, 
    badgeColor = "bg-dracula-green", 
    shadowColor = "#50fa7b" 
}: ResumeItemProps) => {
    return (
        <div className="relative">
            <div 
                className={`absolute w-3 h-3 ${badgeColor} rounded-full -left-7.75 top-1.5`} 
                style={{ boxShadow: `0 0 8px ${shadowColor}` }}
            />
            
            <div className="flex justify-between items-start gap-4">
                <div>
                    <span className="text-dracula-cyan text-sm font-mono font-bold">{date}</span>
                    <h4 className="text-xl font-bold">{title}</h4>
                    <p className="text-dracula-primary font-semibold text-sm">{subtitle}</p>
                    
                    {description && <p className="text-xs md:text-sm opacity-60 mt-1 mb-3">{description}</p>}
                    
                    {tasks && (
                        <ul className="space-y-2 text-sm opacity-80 mt-3">
                            {tasks.map((task, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-dracula-green">▹</span> {task}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {link && (
                    <Button asChild variant="ghost" size="sm" className="text-dracula-cyan hover:text-dracula-secondary p-2 h-auto font-bold transition-all">
                        <a href={link} target="_blank" rel="noopener noreferrer">Verificar ↗</a>
                    </Button>
                )}
            </div>
        </div>
    );
};
