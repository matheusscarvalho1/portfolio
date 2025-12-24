import { motion} from "motion/react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}


const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ ease: "easeOut" }}
        whileHover={{ scale: 1.1 }} 
        className={`bg-dracula-bg/50 p-6 rounded-xl border border-white/5 transition-all duration-300 hover:border-dracula-primary/50 hover:shadow-lg hover:shadow-dracula-primary/10 flex flex-col h-full cursor-pointer`}
    >
        <div className={`text-4xl mb-4 ${color}`}>
            {icon}
        </div>
        <h2 className="text-xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-sm opacity-80 leading-relaxed">{description}</p>
    </motion.div>
);

export default ServiceCard;