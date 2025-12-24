import APARATUS from "/assets/APARATUS-03-4x.png"
import BEWEAR  from "/assets/BEWEAR-02.png"
import FSWDONALDS from "/assets/FSW-DONALDS-03.png"
import PORTFOLIO from "/assets/PORTFOLIO-01.png"
import MONIFOREST from "/assets/MONIFOREST-03-4x.png"
import FINDHOPE from "/assets/HOPE-03.png"
import MONEY from "/assets/MONEY-04-4x.png"
import COURSESAPI from "/assets/FASTIFY-APIs.png"

interface ProjectData {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}
export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: "Aparatus Barber — Hall de Barbearias com IA",
        description: "Plataforma SaaS-ready para gestão e agendamento de barbearias. O sistema oferece um hall de estabelecimentos, agendamento via calendário tradicional ou assistente de IA generativa, pagamentos online seguros com Stripe e um painel administrativo completo.",
        tags: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Vercel AI SDK",
            "Better Auth",
            "Prisma ORM",
            "PostgreSQL (Neon)",
            "Stripe",
            "TanStack Query",
            "Server Actions",
            "shadcn/ui"
        ],
        image: APARATUS,
        githubUrl: "https://github.com/matheusscarvalho1/aparatus-barber/", 
        liveUrl: "https://aparatus-barber-eta.vercel.app/",
    },
    {
        id: 2,
        title: "FSW Donalds",
        description: "Plataforma de autoatendimento para fast-food com suporte a múltiplos métodos de consumo (Dine-in/Takeaway). Implementa fluxos complexos de checkout com Stripe, validação de CPF para acompanhamento de pedidos e uma interface otimizada com Server Components.",
        tags: [
            "Next.js 15", 
            "React 19", 
            "Prisma ORM", 
            "PostgreSQL", 
            "Stripe", 
            "Docker", 
            "Tailwind CSS", 
            "Server Actions", 
            "Zod", 
            "shadcn/ui"
        ],
        image: FSWDONALDS,
        githubUrl: "https://github.com/matheusscarvalho1/fsw-donalds",
        liveUrl: "https://fsw-donalds-red.vercel.app/fsw-donalds", 
    },
    {
        id: 3,
        title: "BEWEAR - E-commerce",
        description: "E-commerce full-stack de alta performance com arquitetura Mobile-First. A plataforma conta com catálogo de produtos com variantes, sistema de carrinho sincronizado, autenticação social via Better Auth e checkout seguro integrado ao Stripe com processamento de webhooks.",
        tags: [
            "Next.js 15.4", 
            "React 19", 
            "TypeScript", 
            "Drizzle ORM", 
            "Better Auth", 
            "Stripe", 
            "PostgreSQL", 
            "TanStack Query", 
            "Server Actions", 
            "Tailwind CSS", 
            "shadcn/ui"
        ],
        image: BEWEAR, 
        githubUrl: "https://github.com/matheusscarvalho1/bewear-ecommerce", 
        liveUrl: "https://bewear-ecommerce-khaki.vercel.app/",
    },
    {
        id: 4,
        title: "Portfolio",
        description: "Minha vitrine pessoal desenvolvida com o que há de mais moderno no ecossistema React em 2025. O projeto utiliza o novo React Compiler para otimização automática, consumo de dados via GraphQL com Apollo Client, e animações fluidas com Motion, oferecendo uma experiência de navegação rápida, acessível e visualmente impactante.",
        tags: [
            "React 19",
            "TypeScript",
            "Vite 7",
            "Tailwind CSS 4",
            "GraphQL / Apollo",
            "Motion (Framer)",
            "React Compiler",
            "React Router 7",
            "shadcn/ui"
        ],
        image: PORTFOLIO,
        githubUrl: "https://github.com/matheusscarvalho1/portfolio", 
        liveUrl: "https://matheusscarvalho-dev.onrender.com/",
    },
    {
        id: 5,
        title: "Fastify API — Gestão de Cursos",
        description: "API RESTful de alta performance com arquitetura escalável, utilizando Fastify 5. Implementa autenticação RBAC (Role-Based Access Control) via JWT para distinguir permissões entre estudantes e administradores, além de documentação automatizada com Swagger e cobertura total de testes E2E.",
        tags: [
            "Fastify",
            "Node.js",
            "TypeScript",
            "Drizzle ORM",
            "PostgreSQL",
            "Vitest",
            "Supertest",
            "JWT Auth",
            "Zod",
            "Docker",
            "Swagger"
        ],
        image: COURSESAPI,
        githubUrl: "https://github.com/matheusscarvalho1/fastify-api",
        liveUrl: "https://github.com/matheusscarvalho1/fastify-api",
    },
    {
        id: 6,
        title: "Money — Gestão Financeira Mobile",
        description: "Aplicativo nativo para controle de finanças pessoais que marca minha transição do ecossistema Web para o Mobile. O app implementa persistência de dados local com AsyncStorage, navegação baseada em abas com Expo Router e uma experiência de usuário otimizada com feedbacks táteis e gerenciamento avançado de teclados nativos.",
        tags: [
            "React Native",
            "Expo",
            "TypeScript",
            "Expo Router v5",
            "Context API",
            "AsyncStorage",
            "Reanimated",
            "Mobile First"
        ],
        image: MONEY, 
        githubUrl: "https://github.com/matheusscarvalho1/transactions-manager",
        liveUrl: "https://github.com/matheusscarvalho1/transactions-manager",
    },
   {
        id: 7,
        title: "Find Hope Hub",
        description: "Plataforma de utilidade pública para localização de pessoas desaparecidas. A SPA consome dados em tempo real, oferecendo busca avançada, detalhamento de registros e um sistema de colaboração cidadã com upload de arquivos e validação robusta. Focada em performance e impacto social.",
        tags: [
            "React 19",
            "TypeScript",
            "Vite 7",
            "Vitest",
            "Tailwind CSS 4",
            "Docker",
            "React Router 7",
            "React Hook Form",
            "Zod",
            "shadcn/ui"
        ],
        image: FINDHOPE,
        githubUrl: "https://github.com/matheusscarvalho1/find-hope-hub",
        liveUrl: "https://find-hope-hub.onrender.com/",
    },
    {
        id: 8,
        title: "MoniForest — Monitoramento Geográfico",
        description: "Plataforma de inteligência florestal para monitoramento de ativos em tempo real. O sistema utiliza Leaflet para visualização geoespacial, permitindo a gestão de frotas através de indicadores de produtividade, status operacional e histórico cronológico de eventos em mapas interativos.",
        tags: [
            "React 19",
            "TypeScript",
            "Leaflet",
            "React-Leaflet",
            "Vite 6",
            "Tailwind CSS 4",
            "shadcn/ui",
            "Axios",
            "GIS"
        ],
        image: MONIFOREST,
        githubUrl: "https://github.com/matheusscarvalho1/MoniForest", 
        liveUrl: "https://moniforest.onrender.com/",
    },
    {
        id: 9,
        title: "AuthSystem (Front-End)— Autenticação JWT",
        description: "Sistema robusto de autenticação frontend que consome APIs REST com segurança ponta a ponta. Implementa gerenciamento de tokens JWT (Access & Refresh), interceptors do Axios para renovação automática de sessões, proteção de rotas privadas e validação rigorosa de formulários com Zod e React Hook Form.",
        tags: [
            "React 19",
            "TypeScript",
            "Vite 6",
            "Tailwind CSS 4",
            "React Router 7",
            "Axios",
            "JWT Auth",
            "Zod",
            "Radix UI"
        ],
        image: "/images/auth-system-ui.png",
        githubUrl: "https://github.com/matheusscarvalho1/form-login-consuming-api-jwt-express",
        liveUrl: "https://form-login-consuming-api-jwt-express.onrender.com/",
    },
    {
        id: 10,
        title: "Auth API (Back-End) — Backend JWT & Express",
        description: "API RESTful robusta desenvolvida com Node.js e Express para gerenciamento seguro de identidades. Implementa criptografia de senhas com BcryptJS, modelagem de dados via Prisma ORM e proteção de endpoints utilizando middlewares de autenticação JWT, garantindo que apenas usuários autorizados acessem recursos sensíveis.",
        tags: [
            "Node.js",
            "Express 5",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "JWT",
            "BcryptJS",
            "Zod",
            "Clean Architecture"
        ],
        image: "/images/auth-api-preview.png",
        githubUrl: "https://github.com/matheusscarvalho1/api-jwt-express", 
        liveUrl: "https://github.com/matheusscarvalho1/api-jwt-express", 
    },
    
];

