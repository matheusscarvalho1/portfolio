"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { 
    BackpackIcon, 
    CodeIcon, 
    PersonIcon, 
    ChevronRightIcon,
    ShadowIcon
} from "@radix-ui/react-icons";
import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaBootstrap, 
  FaGit, 
  FaGithub
} from "react-icons/fa";

import {
  SiTailwindcss, 
  SiRedux, 
  SiNextdotjs, 
  SiPython, 
  SiPhp, 
  SiDocker, 
  SiPostgresql, 
  SiTypescript, 
  SiJquery, 
  SiExpress, 
  SiFastify, 
  SiStyledcomponents, 
  SiMongodb, 
  SiPostman,
  SiGraphql,
} from "react-icons/si";
import { DownloadIcon } from "lucide-react";
import { ResumeItem } from "@/components/TimelineItem";

const Curriculum = () => {
    const [view, setView] = useState<'sobre-mim' | 'experiencia' | 'habilidades' | 'formacao'>('sobre-mim');

    return (
        <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-dracula-bg text-dracula-text min-h-screen">
            <div className="flex flex-col xl:flex-row items-start gap-10 md:gap-20 max-w-6xl w-full">
                <div className="flex flex-col gap-4 w-full xl:w-1/3">
    <h1 className="text-3xl font-bold mb-6 text-center xl:text-left">
        Meu <span className="text-dracula-secondary">Currículo</span>
    </h1>
    <div className="flex flex-col gap-4">
        {[
            { id: "sobre-mim", label: "Sobre Mim", icon: <PersonIcon /> },
            { id: "experiencia", label: "Experiência", icon: <BackpackIcon /> },
            { id: "habilidades", label: "Habilidades", icon: <CodeIcon /> },
            { id: "formacao", label: "Formação", icon: <ShadowIcon /> }
        ].map((item) => (
<Button
    key={item.id}
    onClick={() => setView(item.id as any)}
    variant="outline"
    className={`h-16 justify-between text-lg border-2 transition-all font-bold 
        ${view === item.id 
            ? "border-dracula-green text-dracula-green bg-dracula-current hover:bg-dracula-current hover:text-dracula-green" 
            : "border-dracula-current opacity-60 bg-transparent text-dracula-text hover:opacity-100 hover:bg-dracula-current/40 hover:text-dracula-green hover:border-dracula-green/50"
        }`}>
    <span className="flex items-center gap-4">
        {item.icon} {item.label}
    </span>
    {view === item.id && <ChevronRightIcon className="w-6 h-6" />}
</Button>
))}
    </div>
    <div className="mt-4 pt-6 border-t border-white/10">
        <Button 
            asChild 
            variant="outline" 
            className="w-full h-16 border-2 border-dracula-primary text-dracula-primary hover:bg-dracula-primary hover:text-dracula-bg font-bold transition-all shadow-[0_0_15px_rgba(255,121,198,0.1)] hover:shadow-[0_0_20px_rgba(255,121,198,0.3)]"
        >
            <a 
                href="/ATS_CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025_V7.pdf" 
                download
            >
                DOWNLOAD CV COMPLETO <DownloadIcon className="ml-3 w-5 h-5" />
            </a>
        </Button>
    </div>
</div>
<div className="flex-1 w-full bg-dracula-current/20 p-8 rounded-2xl border border-white/5 min-h-112.5">
    <AnimatePresence mode="wait">
        <motion.div
            key={view}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
        >
    {view === "sobre-mim" && (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="text-center xl:text-left">
            <h3 className="text-3xl font-bold text-dracula-cyan mb-4">Minha História</h3>
            <p className="text-dracula-secondary font-mono text-sm mb-6 uppercase tracking-widest">
                // Desenvolvedor Front-End & Full Stack
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-dracula-bg/50 p-4 rounded-xl border border-dracula-green/20">
                <span className="text-2xl font-bold text-dracula-green">+60%</span>
                <p className="text-[10px] uppercase opacity-60">Produtividade em Equipes</p>
            </div>
            <div className="bg-dracula-bg/50 p-4 rounded-xl border border-dracula-cyan/20">
                <span className="text-2xl font-bold text-dracula-cyan">-25%</span>
                <p className="text-[10px] uppercase opacity-60">Tempo de Carregamento</p>
            </div>
            <div className="bg-dracula-bg/50 p-4 rounded-xl border border-dracula-orange/20">
                <span className="text-2xl font-bold text-dracula-orange">+50%</span>
                <p className="text-[10px] uppercase opacity-60">Otimização de Processos</p>
            </div>
        </div>

        <div className="max-h-125 overflow-y-auto pr-4 custom-scrollbar space-y-6 text-sm md:text-base leading-relaxed text-balance">
            <p className="opacity-90">
                Especializado em <strong className="text-dracula-cyan">React.js, Next.js e TypeScript</strong>, 
                conto com 3 anos de experiência criando interfaces modernas e aplicações web escaláveis. 
                Minha atuação no Back-End com <strong className="text-dracula-cyan">Node.js e Fastify</strong> me permite 
                entregar soluções completas, desde a arquitetura de APIs até a experiência final do usuário.
            </p>

            <div className="space-y-4">
                <h4 className="text-dracula-secondary font-bold uppercase text-xs tracking-widest">Expertise Técnica</h4>
                <p className="opacity-80 text-sm">
                    Domínio em ferramentas como <strong>Docker, PostgreSQL, ORMs como Prisma e Drizzle, Tailwind CSS e shadcn UI</strong> entre outras habilidades onde especifico na seção habilidades. 
                    Trabalho orientado a resultados, utilizando <strong>Clean Code, Gitflow e metodologias Ágeis (Scrum/Kanban){""} </strong>
                    para garantir entregas contínuas e código de alta qualidade.
                </p>
            </div>

            <div className="bg-dracula-bg/30 p-6 rounded-2xl border border-white/5">
                <h4 className="text-dracula-orange font-bold uppercase text-xs tracking-widest mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Foco em UX", "Comunicação Clara", "Resolução de Problemas", 
                        "Aprendizado Rápido", "Compromisso com Qualidade"
                    ].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-dracula-current text-[10px] rounded-full border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-dracula-cyan italic font-medium">
                "Estou aberto a oportunidades onde possa aplicar minha expertise em soluções modernas, 
                performáticas e orientadas à experiência do usuário."
            </p>
        </div>
    </div>
)}
{view === "experiencia" && (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
        <h3 className="text-3xl font-bold text-dracula-green">Trajetória Profissional</h3>
        
        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            <div className="border-l-2 border-dracula-green/30 pl-6 space-y-10">
                
                <div className="relative">
                    <div className="absolute w-3 h-3 bg-dracula-green rounded-full -left-7.75 top-1.5 shadow-[0_0_8px_#50fa7b]" />
                    <span className="text-dracula-cyan text-sm font-mono">Fevereiro 2024 - Julho 2025</span>
                    <h4 className="text-xl font-bold">Desenvolvedor Back-End</h4>
                    <p className="text-dracula-secondary font-semibold text-sm">Ginco Urbanismo • Cuiabá/MT - Híbrido</p>
                    
                    <p className="text-xs md:text-sm opacity-60 mt-1 mb-4 italic">
                        Node.js | TypeScript | Fastify | Express | Prisma ORM | Jest | Swagger
                    </p>
                    
                    <ul className="space-y-3 text-sm opacity-80 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Manutenção e evolução de APIs internas da empresa e suporte ao app de pós-venda imobiliário com gestão financeira e acompanhamento de obras.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Sustentação de back-end com mais de <strong>40 endpoints RESTful</strong> utilizando Fastify.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Desenvolvimento de APIs críticas com TypeScript e Prisma ORM, garantindo segurança e escalabilidade.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="absolute w-3 h-3 bg-dracula-green/50 rounded-full -left-7.75 top-1.5" />
                    <span className="text-dracula-cyan text-sm font-mono">Março 2024 - Julho 2024</span>
                    <h4 className="text-xl font-bold">Desenvolvedor Front-End</h4>
                    <p className="text-dracula-secondary font-semibold text-sm">TAVWEB • Cuiabá/MT - Remoto</p>
                    
                    <p className="text-xs md:text-sm opacity-60 mt-1 mb-4 italic">
                        React.js | Next.js | TypeScript | Tailwind CSS | Material-UI | RESTful APIs
                    </p>

                    <ul className="space-y-3 text-sm opacity-80 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Desenvolvimento de plataforma <strong>B2G de gerenciamento documental</strong>, estruturada para futura implementação de <strong>IA</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Atuei na evolução da interface, criando e refinando componentes complexos com <strong>React.js, Next.js e TypeScript</strong>.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Uso estratégico de <strong>Material-UI e Tailwind CSS</strong> para assegurar responsividade e alta consistência visual.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-dracula-green">▹</span> 
                            <span>Foco em refinamento de interatividade e fluxos de usuários entre setores e clientes finais.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
)}

{view === "habilidades" && (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
        <div className="text-center xl:text-left">
            <h3 className="text-3xl font-bold text-dracula-orange">Habilidades Técnicas</h3>
            <p className="text-white/60 text-sm mt-2">// Stack tecnológico focado em escalabilidade e performance.</p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-10">
            
            <section>
                <h4 className="text-dracula-cyan font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-cyan pl-3">
                    Front-End & Mobile
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {[
                        { icon: <FaReact />, name: "React / Native", color: "group-hover:text-dracula-cyan" },
                        { icon: <SiNextdotjs />, name: "Next.js", color: "group-hover:text-white" },
                        { icon: <SiTypescript />, name: "TypeScript", color: "group-hover:text-blue-400" },
                        { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400" },
                        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "group-hover:text-dracula-cyan" },
                        { icon: <SiStyledcomponents />, name: "Styled Components", color: "group-hover:text-pink-400" },
                        { icon: <FaBootstrap />, name: "Bootstrap", color: "group-hover:text-purple-500" },
                        { icon: <SiJquery />, name: "jQuery", color: "group-hover:text-blue-500" },
                        { icon: <SiRedux />, name: "Redux", color: "group-hover:text-purple-400" },
                        { icon: <FaHtml5 />, name: "HTML5", color: "group-hover:text-dracula-orange" },
                        { icon: <FaCss3 />, name: "CSS3 / SASS", color: "group-hover:text-blue-400" },
                        { icon: <FaFigma />, name: "Figma", color: "group-hover:text-dracula-pink" },
                    ].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="text-4xl md:text-5xl p-4 bg-dracula-current/20 rounded-xl border border-white/5 group-hover:border-dracula-cyan/50 transition-all duration-300 mb-2">
                                <div className={`transition-colors duration-300 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-center opacity-80 group-hover:opacity-100 group-hover:text-dracula-cyan transition-all">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h4 className="text-dracula-green font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-green pl-3">
                    Back-End & Infra
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {[
                        { icon: <FaNodeJs />, name: "Node.js", color: "group-hover:text-dracula-green" },
                        { icon: <SiFastify />, name: "Fastify", color: "group-hover:text-white" },
                        { icon: <SiExpress />, name: "Express", color: "group-hover:text-yellow-100" },
                        { icon: <SiPostgresql />, name: "PostgreSQL / SQL", color: "group-hover:text-blue-300" },
                        { icon: <SiMongodb />, name: "MongoDB / NoSQL", color: "group-hover:text-green-300" },
                        { icon: <SiDocker />, name: "Docker", color: "group-hover:text-blue-400" },
                        { icon: <SiPython />, name: "Python", color: "group-hover:text-blue-500" },
                        { icon: <SiPhp />, name: "PHP", color: "group-hover:text-blue-400" },
                        { icon: <SiPostman />, name: "Postman", color: "group-hover:text-yellow-400" },
                        { icon: <SiGraphql />, name: "GraphQL", color: "group-hover:text-pink-600" },
                        { icon: <FaGit />, name: "Git", color: "group-hover:text-dracula-orange" },
                        { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-dracula-purple" },
                    ].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="text-4xl md:text-5xl p-4 bg-dracula-current/20 rounded-xl border border-white/5 group-hover:border-dracula-green/50 transition-all duration-300 mb-2">
                                <div className={`transition-colors duration-300 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-center opacity-80 group-hover:opacity-100 group-hover:text-dracula-green transition-all">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-dracula-current/10 p-6 rounded-2xl border border-white/5">
                <h4 className="text-dracula-secondary font-mono text-xs uppercase tracking-widest mb-6 text-center">
                    Ecossistema / Bibliotecas & Práticas de Desenvolvimento
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "APIs RESTful", "Apollo Client", "Framer Motion","Zod", "React Hook Form", "TanStack Query / React Query ", "Context API", "Zustand", "Vite", "Webpack", "ESLint", "Prettier", "Agentes de IA", "MCPs", "Prisma ORM", "Drizzle ORM", "Jest", "React Testing Library (RTL)",
                        "CI/CD", "GitHub Actions", "Gitflow", "API REST", "JWT", "OAuth2", 
                        "Clean Code", "Microsserviços", "Sistemas Distribuídos"
                    ].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-dracula-bg text-[10px] md:text-[11px] font-bold rounded border border-white/10 text-dracula-cyan/70 hover:text-dracula-cyan hover:border-dracula-cyan/50 transition-all cursor-default">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    </div>
)}

                        
{view === "formacao" && (
    <div className="space-y-6 animate-in fade-in duration-500">
        <h3 className="text-3xl font-bold text-dracula-secondary">Educação & Certificados</h3>
        <div className="border-l-2 border-dracula-secondary/30 pl-6 space-y-10">
            <ResumeItem 
                date="2018 - 2023"
                title="Graduação em Engenharia de Computação"
                subtitle="UFMT — Universidade Federal de Mato Grosso"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1706397535563/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Outubro 2025"
                title="Fundamentos do Docker"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1759527053952/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Setembro 2025"
                title="Fundamentos do React"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1759788991967/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Agosto 2025"
                title="Bootcamp E-Commerce"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1759952767906/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Maio 2025"
                title="Curso de Micro-Frontends e Monorepos"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1746483080188/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Março 2025"
                title="Arquitetura Hexagonal / Arquitetura Ports and Adapters"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1742854543841/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Março 2025"
                title="Master Class de Clean Code"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1742854248750/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Março 2025"
                title="Técnicas de Refatoração & Testes em aplicações web TypeScript"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1742852830114/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
            <ResumeItem 
                date="Novembro 2023"
                title="Certificado de conclusão do curso Formação Full Stack Javascript"
                subtitle="Full Stack Club"
                link="https://www.linkedin.com/in/matheusscarvalho/details/certifications/1705516065370/single-media-viewer/?profileId=ACoAADT5XRwBAb0vINvt4Bc1F_7xF2401RkHCkM"
                badgeColor="bg-dracula-secondary"
                shadowColor="#ff79c6"
            />
        </div>
    </div>
)}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
};

export default Curriculum;
