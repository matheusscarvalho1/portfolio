interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

// Componente para um Card de Serviço reutilizável
const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => (
    <div className={`bg-dracula-bg/50 p-6 rounded-xl border border-white/5 transition-all duration-300 hover:border-dracula-primary/50 hover:shadow-lg hover:shadow-dracula-primary/10 flex flex-col h-full`}>
        <div className={`text-4xl mb-4 ${color}`}>
            {icon}
        </div>
        <h2 className="text-xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-sm opacity-80 leading-relaxed">{description}</p>
    </div>
);

export default ServiceCard;