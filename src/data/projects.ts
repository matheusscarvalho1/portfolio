import APARATUS from "/assets/APARATUS-03-4x.png"
import BEWEAR  from "/assets/BEWEAR-02.png"
import FSWDONALDS from "/assets/FSW-DONALDS-03.png"
import PORTFOLIO from "/assets/PORTFOLIO-01.png"
import MONIFOREST from "/assets/MONIFOREST-03-4x.png"
import FINDHOPE from "/assets/HOPE-03.png"
import MONEY from "/assets/MONEY-04-4x.png"
import COURSESAPI from "/assets/FASTIFY-APIs.png"
import AUTH from "/assets/AUTH-SYSTEM.png"
import APICLIENT from "/assets/API-CLIENT.png"

interface ProjectData {
    id: number;
    title: string;
    status: "completed" | "in-progress" | "maintenance"; 
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
        status: "in-progress",
        description: "Plataforma SaaS-ready de vanguarda construída com Next.js 16, React 19 e Tailwind CSS 4. O projeto utiliza uma pipeline de AI Orchestration (MCPs como Context7 e Figma MCP e além disso Cursor Rules) para garantir Clean Code e alta fidelidade ao design. Oferece agendamentos inteligentes via chat com Vercel AI SDK (Function Calling), pagamentos e reembolsos automatizados via Stripe Webhooks e autenticação robusta com Better Auth, tudo otimizado com caching estratégico via TanStack Query para latência zero.",
        tags: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Vercel AI SDK",
            "MCPs",
            "Better Auth",
            "Prisma ORM",
            "PostgreSQL (Neon)",
            "Stripe",
            "Zod",
            "React Hook Form",
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
        title: "BEWEAR - E-commerce",
        status: "completed",
        description: "E-commerce full-stack de alta performance desenvolvido com Next.js 15.4, React 19 e Tailwind CSS 4. Sob uma arquitetura Mobile-First, a plataforma conta com catálogo de produtos com variantes, sistema de carrinho sincronizado via TanStack Query, autenticação moderna via Better Auth e checkout seguro integrado ao Stripe com processamento resiliente de webhooks. O projeto utiliza Drizzle ORM para garantir queries ultra-rápidas e latência mínima em toda a jornada de compra.",
        tags: [
            "Next.js 15.4", 
            "React 19", 
            "TypeScript", 
            "Tailwind CSS 4", 
            "Drizzle ORM", 
            "Better Auth", 
            "Zod",
            "React Hook Form",
            "Stripe", 
            "PostgreSQL (Neon)", 
            "TanStack Query", 
            "Server Actions", 
            "shadcn/ui"
        ],
        image: BEWEAR, 
        githubUrl: "https://github.com/matheusscarvalho1/bewear-ecommerce", 
        liveUrl: "https://bewear-ecommerce-khaki.vercel.app/",
    },
    {
        id: 3,
        title: "FSW Donalds",
        status: "completed",
        description: "Plataforma moderna de autoatendimento e delivery desenvolvida com Next.js 15.1 e React 19. O projeto oferece uma experiência completa de pedidos online, suportando múltiplos métodos de consumo (Dine-in/Takeaway) com sistema de carrinho, acompanhamento de status em tempo real e validação de CPF. A arquitetura utiliza Server Actions para operações type-safe, Prisma ORM em ambiente containerizado com Docker e um fluxo de checkout seguro integrado ao gateway de pagamento Stripe.",
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
            "Context API",
            "shadcn/ui"
        ],
        image: FSWDONALDS,
        githubUrl: "https://github.com/matheusscarvalho1/fsw-donalds",
        liveUrl: "https://fsw-donalds-red.vercel.app/fsw-donalds", 
    },
    {
        id: 4,
        title: "Portfolio",
        status: "completed",
        description: "Vitrine tecnológica desenvolvida como uma SPA de ultra performance, explorando o potencial máximo do ecossistema React em 2025. O projeto utiliza o React Compiler e Vite 7 para garantir uma navegação instantânea e livre de re-renders desnecessários. A experiência é sustentada por uma arquitetura de dados moderna com GraphQL e Apollo Client, além de uma interface imersiva orquestrada com Motion e Swiper 12. Cada detalhe foi otimizado via Code Splitting, priorizando acessibilidade e uma fluidez mobile-first rigorosa.",
        tags: [
            "React 19",
            "TypeScript",
            "React Router 7",
            "Vite 7",
            "Tailwind CSS 4.1",
            "GraphQL / Apollo",
            "Motion (Framer)",
            "React Compiler",
            "shadcn/ui",
            "Zod",
            "React Hook Form",
            "Context API"
        ],
        image: PORTFOLIO,
        githubUrl: "https://github.com/matheusscarvalho1/portfolio", 
        liveUrl: "https://matheusscarvalho-dev.onrender.com/",
    },
    {
        id: 5,
        title: "Fastify API — Gestão de Cursos & RBAC",
        status: "completed",
        description: "API RESTful de alta performance desenvolvida com Fastify 5.5 e TypeScript, utilizando Drizzle ORM para uma camada de dados ultra-rápida em PostgreSQL. O sistema implementa um controle de acesso rigoroso RBAC (Role-Based Access Control) com distinção entre 'student' e 'manager', assegurado por autenticação JWT e criptografia Argon2. A arquitetura prioriza a confiabilidade através de uma pipeline de testes de integração com Vitest e ambientes isolados via Docker, contando com documentação automatizada via Swagger/Scalar UI.",
            tags: [
            "Fastify 5.5",
            "Node.js",
            "TypeScript",
            "Drizzle ORM",
            "PostgreSQL",
            "Vitest",
            "Supertest",
            "JWT Auth",
            "RBAC",
            "Zod",
            "Docker",
            "Swagger"
        ],
        image: COURSESAPI,
        githubUrl: "https://github.com/matheusscarvalho1/fastify-api",
        liveUrl: "",
    },
    {
        id: 6,
        title: "Money — Gestão Financeira Mobile",
        status: "completed",
        description: "Aplicativo nativo para controle de finanças pessoais, consolidando o domínio do ecossistema React Native (Expo SDK 53). O projeto utiliza Expo Router v4 para navegação baseada em arquivos e implementa persistência de dados local offline com AsyncStorage. A experiência foca em uma UX refinada através de feedbacks táteis (Haptics), animações fluidas com Reanimated 3 e gerenciamento avançado de teclados nativos e seletores de data, garantindo uma interface responsiva e intuitiva para o usuário final.",
        tags: [
            "React Native",
            "Expo SDK 53",
            "TypeScript",
            "Expo Router v4",
            "Context API",
            "AsyncStorage",
            "Reanimated 3",
            "Mobile First"
        ],
        image: MONEY, 
        githubUrl: "https://github.com/matheusscarvalho1/transactions-manager",
        liveUrl: "",
    },
   {
        id: 7,
        title: "Find Hope Hub — Localização de Desaparecidos",
        status: "completed",
        description: "Plataforma de utilidade pública projetada para centralizar informações e auxiliar na localização de pessoas desaparecidas. Desenvolvida com React 19 e Vite 7, a SPA foca em resiliência e integridade de dados, implementando busca avançada em tempo real e formulários validados com Zod. O projeto destaca-se pelo gerenciamento seguro de uploads e o uso de Date Pickers nativos para eliminar inconsistências, garantindo uma interface acessível e performática em situações de urgência.",
        tags: [
            "React 19",
            "TypeScript",
            "Vite 7",
            "Tailwind CSS 4.1",
            "React Router 7",
            "React Hook Form",
            "Zod",
            "Vitest",
            "Docker",
            "shadcn/ui"
        ],
        image: FINDHOPE,
        githubUrl: "https://github.com/matheusscarvalho1/find-hope-hub",
        liveUrl: "https://find-hope-hub.onrender.com/",
    },
    {
        id: 8,
        title: "MoniForest — Monitoramento Geográfico",
        status: "completed",
        description: "Plataforma de inteligência geográfica (GIS - Sistema de Informação Geográfica) desenvolvida com React 19 e Tailwind CSS 4.1 para o monitoramento de ativos em tempo real. O sistema utiliza Leaflet para processamento geoespacial, permitindo a gestão de frotas através de indicadores de produtividade, status operacional e histórico cronológico de eventos. A arquitetura transforma coordenadas lat/long em insights visuais críticos, utilizando Vite 6 para garantir alta performance na renderização de camadas de mapas interativos.",
        tags: [
            "React 19",
            "TypeScript",
            "Leaflet",
            "React-Leaflet",
            "Vite 6",
            "Tailwind CSS 4",
            "GIS",
            "Axios",
            "shadcn/ui"
        ],
        image: MONIFOREST,
        githubUrl: "https://github.com/matheusscarvalho1/MoniForest", 
        liveUrl: "https://moniforest.onrender.com/",
    },
    {
        id: 9,
        title: "AuthSystem (Front-End) — Autenticação JWT",
        status: "maintenance",
        description: "Sistema completo de autenticação frontend desenvolvido com React 19 e Vite 6, focado em segurança robusta e UX fluida. O projeto implementa um fluxo de autenticação JWT ponta a ponta, utilizando Service Layer com interceptors do Axios para gerenciamento automático de Access e Refresh Tokens. A arquitetura prioriza a integridade dos dados com validação rigorosa via Zod, proteção de rotas privadas com React Router 7 e uma interface responsiva construída com Tailwind CSS 4 e componentes acessíveis da Radix UI.",
            tags: [
            "React 19",
            "TypeScript",
            "Vite 6.2",
            "Tailwind CSS 4.1",
            "React Router 7.6",
            "Axios Interceptors",
            "Middleware",
            "Proxy",
            "JWT Auth",
            "Zod",
            "Radix UI"
        ],
        image: AUTH,
        githubUrl: "https://github.com/matheusscarvalho1/form-login-consuming-api-jwt-express",
        liveUrl: "https://form-login-consuming-api-jwt-express.onrender.com/",
    },
    {
        id: 10,
        title: "Auth API (Back-End) — Backend JWT & Express",
        status: "maintenance",
        description: "API RESTful especializada em gestão de identidades e segurança defensiva, desenvolvida com Node.js e Express 5.1. O sistema implementa uma arquitetura modular baseada em Services e Middlewares customizados para autenticação JWT e criptografia de senhas com BcryptJS. A persistência é gerenciada via Prisma ORM em PostgreSQL, contando com validação rigorosa de payloads via Zod e tratamento de CORS, garantindo um serviço resiliente e preparado para integração com aplicações frontend de larga escala.",
        tags: [
            "Node.js",
            "Express 5.1",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "JWT Auth",
            "BcryptJS",
            "Zod",
            "Clean Architecture"
        ],
        image: APICLIENT,
        githubUrl: "https://github.com/matheusscarvalho1/api-jwt-express", 
        liveUrl: "", 
    },
    
];

