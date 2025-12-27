import { Button } from "@/components/ui/button";

interface ResumeItemProps {
    date: string;
    title: string;
    subtitle: string;
    description?: string;
    tasks?: string[];
    link?: string;
}

export const ResumeItem = ({ 
    date, title, subtitle, description, tasks, link 
}: ResumeItemProps) => {
    return (
        <div className="relative">
            <div 
                className="absolute w-3 h-3 bg-dracula-green rounded-full -left-7.75 top-1.5 shadow-profile-glow transition-all duration-300" 
            />
            <div className="flex justify-between items-start gap-4">
                <div>
                    <span className="text-dracula-cyan text-sm font-mono font-bold transition-colors">
                        {date}
                    </span>
                    <h4 className="text-xl font-bold text-foreground transition-colors">
                        {title}
                    </h4>
                    <p className="text-dracula-primary font-semibold text-sm transition-colors">
                        {subtitle}
                    </p>
                    {description && (
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-3">
                            {description}
                        </p>
                    )}
                    {tasks && (
                        <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                            {tasks.map((task, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-dracula-green">▹</span> {task}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {link && (
                    <Button 
                        asChild 
                        variant="ghost" 
                        size="sm" 
                        className="text-dracula-cyan hover:text-dracula-secondary p-2 h-auto font-bold transition-all"
                    >
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Verificar ↗
                        </a>
                    </Button>
                )}
            </div>
        </div>
    );
};
