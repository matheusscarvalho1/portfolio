import ServiceCard from "@/components/ServiceCard";
import { TbApi } from "react-icons/tb";
import { FaReact, FaNodeJs, FaRocket } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { SiNextdotjs } from "react-icons/si";

const Services = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 transition-colors duration-500">
      <section
        aria-labelledby="services-title"
        className="max-w-4xl w-full"
      >
        <h1
          id="services-title"
          className="text-4xl font-bold mb-4 text-center"
        >
          Meus <span className="text-dracula-secondary">Serviços</span>
        </h1>

        <p className="text-center mb-12 text-muted-foreground">
          Especializado na criação de soluções digitais performáticas e escaláveis,
          do Front-End ao Back-End.
        </p>
        
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li>
            <ServiceCard
              icon={<FaReact aria-hidden="true" />}
              title="Desenvolvimento Front-End"
              description="Criação de interfaces modernas e responsivas utilizando React.js, Next.js e Tailwind CSS. Foco em UX/UI e performance."
              color="text-dracula-cyan"
            />
          </li>

          <li>
            <ServiceCard
              icon={<FaNodeJs aria-hidden="true" />}
              title="Desenvolvimento Back-End"
              description="Arquitetura e desenvolvimento de APIs RESTful e GraphQL robustas com Node.js, Express e Fastify. Integração com PostgreSQL e Docker."
              color="text-dracula-green"
            />
          </li>

          <li>
            <ServiceCard
              icon={<CiMobile2 aria-hidden="true" />}
              title="Desenvolvimento Mobile"
              description="Construção de aplicativos nativos para iOS e Android usando React Native e Expo, garantindo uma experiência fluida e consistente."
              color="text-dracula-primary"
            />
          </li>

          <li>
            <ServiceCard
              icon={<SiNextdotjs aria-hidden="true" />}
              title="Consultoria em Performance"
              description="Otimização de tempo de carregamento utilizando técnicas avançadas do Next.js como SSR, SSG e ISR, focando em Clean Code."
              color="text-dracula-muted"
            />
          </li>

          <li>
            <ServiceCard
              icon={<TbApi aria-hidden="true" />}
              title="Integração de Sistemas"
              description="Experiência em integrar diferentes sistemas internos e externos, criando soluções de integrações e automações através de scripts."
              color="text-dracula-muted"
            />
          </li>

          <li>
            <ServiceCard
              icon={<FaRocket aria-hidden="true" />}
              title="Soluções Full Stack"
              description="Entrega de soluções completas, gerenciando o ciclo de vida do desenvolvimento, do banco de dados ao deploy final."
              color="text-dracula-red"
            />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Services;
