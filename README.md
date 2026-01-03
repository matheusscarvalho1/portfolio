# 🚀 Matheus Portfolio | High-Performance SPA

Este portfólio é uma **Single Page Application (SPA)** de alta performance, desenvolvida para ser o estado da arte em velocidade e interatividade. O projeto utiliza React 19 e Vite 7, focando em uma experiência de usuário instantânea através de lazy loading e consultas de dados otimizadas via GraphQL.

O foco principal foi o desenvolvimento de uma interface imersiva e acessível, aplicando rigorosos padrões de Clean Code e Performance Optimization para garantir fluidez em dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

### Core & Estrutura
- **React 19**: Biblioteca principal para construção da interface.
- **Vite 7**: Ferramenta de build que garante inicialização e carregamento instantâneos.
- **TypeScript**: Adiciona segurança ao código através de tipagem estática.
- **React Router 7**: Gerenciamento de rotas e navegação entre páginas.

### Estilização & UI
- **Tailwind CSS 4.1**: Framework utilitário de última geração para estilização performática.
- **Motion (Framer Motion)**: Orquestração de animações fluidas e interações de scroll.
- **Radix UI & shadcn/ui**: Componentes baseados em primitivos acessíveis (WAI-ARIA).
- **Swiper 12**: Slider otimizado para mobile com suporte a gestos e paginação dinâmica.
- **Sonner**: Sistema de notificações (toasts) para feedback visual ao usuário.
- **Context API**: Gerenciamento manual do tema Dark/Light customizado, garantindo controle total sobre as classes CSS
- **Lucide React & React Icons**: Bibliotecas de ícones utilizadas em todo o projeto.

### Gestão de Dados & APIs
- **GraphQL & Apollo Client**: Consumo inteligente da API do GitHub, realizando buscas granulares de repositórios e estatísticas em tempo real, mantendo um cache local eficiente.
- **React Hook Form & Zod**: Sistema de formulários leve com validação de esquema robusta.

## Arquitetura, Otimização & Performance

- **Single Page Application (SPA)**: Toda a navegação é gerenciada no lado do cliente (client-side) pelo React Router, proporcionando transições instantâneas.
- **Code Splitting & Lazy Loading**: Uso de React.lazy e Suspense para carregar componentes de rota sob demanda, reduzindo o tamanho inicial do bundle e o tempo de carregamento da primeira página.
- **Vite Image Optimizer & Sharp**: Pipeline de compressão automática de ativos durante o build para reduzir o tempo de carregamento de imagens.
- **Experiência Touch-First (Swiper 12)**: Implementação de carrosséis otimizados para dispositivos móveis com suporte a gestos nativos, lazy loading de slides para preservação de banda e paginação dinâmica.
- **React Compiler**: Eliminação de re-renders desnecessários através da nova engine de compilação do React.
- **Acessibilidade Nativa**: Navegação completa via teclado, indicadores de foco e uso de atributos ARIA para tecnologias assistivas.


## Integrações de Serviços

O projeto consome dados externos e serviços serverless para funcionalidades dinâmicas:

- **GitHub API (GraphQL)**: Integração com a API do GitHub via Apollo Client para exibir repositórios, métricas e dados de perfil em tempo real.
- **Web3Forms**: Serviço de mensageria que processa o formulário de contato e envia os dados diretamente para o e-mail.

## Estrutura de Pastas
 ```
src/
├── apollo/         # Configurações do cliente Apollo e cache global
├── components/     # Componentes de UI e Layout (Composition Pattern)
├── data/           # Configurações estáticas e dados mockados
├── graphql/        # Definições de Queries e Mutations (Schema)
├── hooks/          # Hooks customizados para lógica de UI
├── lib/            # Configurações de libs (Tailwind, Motion, Utils)
└── pages/          # Componentes de página que funcionam como rotas (React Router)
```
