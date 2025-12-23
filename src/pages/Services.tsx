import ServiceCard from "@/components/ServiceCard";

import { TbApi } from "react-icons/tb";
import { FaReact, FaNodeJs, FaRocket } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci"
import { SiNextdotjs } from "react-icons/si";


const Services = () => {
    return ( 
        <main className="min-h-screen text-dracula-text flex flex-col items-center justify-center p-8 bg-dracula-bg">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Meus <span className="text-dracula-secondary">Serviços</span>
                </h1>
                <p className="text-center mb-12 opacity-80">
                    Especializado na criação de soluções digitais performáticas e escaláveis, do Front-End ao Back-End.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<FaReact />}
                        title="Desenvolvimento Front-End"
                        description="Criação de interfaces modernas e responsivas utilizando React.js, Next.js e Tailwind CSS. Foco em UX/UI e performance."
                        color="text-dracula-cyan"
                    />
                    <ServiceCard
                        icon={<FaNodeJs />}
                        title="Desenvolvimento Back-End"
                        description="Arquitetura e desenvolvimento de APIs RESTful e GraphQL robustas com Node.js, Express e Fastify. Integração com PostgreSQL, Prisma e Docker."
                        color="text-dracula-green"
                    />
                    <ServiceCard
                        icon={<CiMobile2 />}
                        title="Desenvolvimento Mobile"
                        description="Construção de aplicativos nativos para iOS e Android usando React Native e Expo, garantindo uma experiência fluida e consistente."
                        color="text-dracula-orange"
                    />
                    <ServiceCard
                        icon={<SiNextdotjs />}
                        title="Consultoria em Performance"
                        description="Otimização de tempo de carregamento (TTI) utilizando técnicas avançadas do Next.js como SSR, SSG, e ISR, refatoração de código legado e implementação de Clean Code e metodologias Ágeis (Scrum/Kanban)."
                        color="text-dracula-purple"
                    />
                    <ServiceCard
                        icon={<TbApi />}
                        title="Integração de Sistemas"
                        description="Experiência em integrar diferentes sistemas internos e externos, criando soluções de integrações e até automações através de scripts."
                        color="text-dracula-pink"
                    />
                    <ServiceCard
                        icon={<FaRocket />}
                        title="Soluções Full Stack"
                        description="Entrega de soluções completas, gerenciando o ciclo de vida do desenvolvimento, do banco de dados ao deploy final."
                        color="text-dracula-red"
                    />
                </div>
            </div>
        </main> 
    );
}
 
export default Services;