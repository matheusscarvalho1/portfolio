"use client";

// Importe o componente que você acabou de criar
import ProjectCard from "@/components/ProjectCard"; 

// Defina a interface para os dados do projeto
interface ProjectData {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
}

// Dados dos seus projetos (com base no seu currículo)
const projectsData: ProjectData[] = [
    {
        id: 1,
        title: "BEWEAR - E-commerce",
        description: "Desenvolvimento completo de e-commerce moderno com Next.js 15, React 19, Tailwind 4 e Server Components. Inclui autenticação, carrinho completo, checkout com Stripe e SEO otimizado.",
        tags: ["Next.js", "React", "Stripe", "PostgreSQL", "Drizzle ORM"],
        githubUrl: "github.com",
        liveUrl: "portfolio-matheusscarvalho.vercel.app",
    },
    {
        id: 2,
        title: "FSW Donalds - Sistema de Pedidos",
        description: "Sistema completo de pedidos com SSR (Server-Side Rendering), UI com Tailwind/shadcn/ui, Prisma ORM, Stripe e Redux para controle de estado global.",
        tags: ["Next.js", "Prisma", "Stripe", "Docker", "Redux", "SSR"],
        githubUrl: "github.com",
        liveUrl: "#", // URL de exemplo
    },
    {
        id: 3,
        title: "Fullstack App (Node.js + React)",
        description: "API RESTful com Node.js, Express, TypeScript, JWT, Zod e Prisma. Frontend em React + Vite + Tailwind. Autenticação completa e deploy na Render.",
        tags: ["Node.js", "React", "Docker", "TypeScript", "Prisma"],
        githubUrl: "github.com",
        liveUrl: "#", // URL de exemplo
    },
    {
        id: 4,
        title: "Money - App de Finanças",
        description: "App mobile com cadastro de receitas e despesas. Utiliza AsyncStorage, expo-router, Context API e design responsivo com arquitetura organizada.",
        tags: ["React Native", "Expo", "TypeScript", "Mobile"],
        githubUrl: "github.com",
        liveUrl: "#", // URL de exemplo
    },
];


const Projects = () => {
    return ( 
        <main className="min-h-screen bg-dracula-bg text-dracula-text p-8 flex items-center justify-center">
            <div className="max-w-5xl w-full">
                <h1 className="text-4xl font-bold mb-12 text-center">
                    Meus <span className="text-dracula-secondary">Projetos</span>
                </h1>

                {/* Exibição em grade responsiva */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                
            </div>
        </main> 
    );
}
 
export default Projects;
