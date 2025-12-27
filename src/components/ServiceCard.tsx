import { motion } from "motion/react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="bg-card p-6 rounded-xl border border-border transition-all duration-300 hover:border-dracula-orange hover:shadow-xl hover:shadow-dracula-orange/10 flex flex-col h-full cursor-pointer group"
    >
        <div className={`text-4xl mb-4 transition-transform group-hover:scale-110 ${color}`}>
            {icon}
        </div>
        <h2 className="text-xl font-bold mb-3 text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
);

export default ServiceCard;