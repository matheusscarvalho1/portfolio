# 🚀 Matheus Portfolio | High-Performance SPA


Este portfólio é uma **Single Page Application (SPA)** de alta performance, desenvolvida para ser o estado da arte em velocidade e interatividade. O projeto utiliza React 19 e Vite 7, focando em uma experiência de usuário instantânea através de lazy loading e consultas de dados otimizadas via GraphQL.

O foco principal foi o desenvolvimento de uma interface imersiva e acessível, aplicando rigorosos padrões de Clean Code e Performance Optimization para garantir fluidez em dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

### Core & Estrutura
- **React 19**: Biblioteca principal para construção da interface.
- **Vite 7**: Ferramenta de build que garante inicialização e carregamento instantâneos.
- **TypeScript**: Adiciona segurança ao código através de tipagem estática.
- **React Router 7**: Gerenciamento de rotas e navegação entre páginas.
- **i18next & react-i18next**: Internacionalização (i18n) do portfólio, com suporte a múltiplos idiomas.
- **Context API**: Gerenciamento manual do tema Dark/Light customizado, garantindo controle total sobre as classes CSS
- **Apollo Client & GraphQL**: Consultas de dados inteligentes, cache eficiente e busca de informações em tempo real.

### Estilização & UI
- **Tailwind CSS 4.1**: Framework utilitário de última geração para estilização performática.
- **Motion (Framer Motion)**: Orquestração de animações fluidas e interações de scroll.
- **Radix UI & shadcn/ui**: Componentes baseados em primitivos acessíveis (WAI-ARIA).
- **Swiper 12**: Slider otimizado para mobile com suporte a gestos e paginação dinâmica.
- **Sonner**: Sistema de notificações (toasts) para feedback visual ao usuário.
- **Lucide React & React Icons**: Bibliotecas de ícones utilizadas em todo o projeto.

### Gestão de Formulários & Validação
- **GraphQL & Apollo Client**: Consumo inteligente da API do GitHub, realizando buscas granulares de repositórios e estatísticas em tempo real, mantendo um cache local eficiente.
- **React Hook Form & Zod**: Sistema de formulários leve com validação de esquema robusta.

## Integrações de Serviços

O projeto consome dados externos e serviços serverless para funcionalidades dinâmicas:

- **GitHub API (GraphQL)**: Integração com a API do GitHub via Apollo Client para exibir repositórios, métricas e dados de perfil em tempo real.
- **Web3Forms**: Serviço de mensageria que processa o formulário de contato e envia os dados diretamente para o e-mail.

## Arquitetura, Otimização & Performance

- **Single Page Application (SPA)**: Toda a navegação é gerenciada no lado do cliente (client-side) pelo React Router, proporcionando transições instantâneas.
- **Code Splitting & Lazy Loading**: Uso de React.lazy e Suspense para carregar componentes de rota sob demanda, reduzindo o tamanho inicial do bundle e o tempo de carregamento da primeira página.
- **Vite Image Optimizer & Sharp**: Pipeline de compressão automática de ativos durante o build para reduzir o tempo de carregamento de imagens.
- **Experiência Touch-First (Swiper 12)**: Implementação de carrosséis otimizados para dispositivos móveis com suporte a gestos nativos, lazy loading de slides para preservação de banda e paginação dinâmica.
- **React Compiler**: Eliminação de re-renders desnecessários através da nova engine de compilação do React.
- **Acessibilidade Nativa**: Navegação completa via teclado, indicadores de foco e uso de atributos ARIA para tecnologias assistivas.

### Lazy Loading de Páginas

O portfólio utiliza lazy loading para todas as páginas, garantindo que o carregamento dos componentes aconteça sob demanda, ou seja, apenas quando o usuário navega até uma rota específica.

Essa abordagem permite reduzir significativamente o tamanho inicial do bundle, acelerar o tempo de carregamento da primeira página e melhorar a performance geral da aplicação, especialmente em dispositivos móveis ou conexões mais lentas.

O lazy loading é combinado com técnicas de code splitting, garantindo que cada página ou funcionalidade seja carregada separadamente, sem impactar o restante da aplicação. O resultado é uma SPA mais rápida, fluida e responsiva, proporcionando uma experiência de usuário mais imersiva e agradável.


## Estrutura de Pastas
 ```
src/
├── apollo/         # Configurações do cliente Apollo e cache global
├── components/     # Componentes de UI e Layout (Composition Pattern)
├── data/           # Configurações estáticas e dados mockados
├── graphql/        # Definições de Queries e Mutations (Schema)
├── hooks/          # Hooks customizados para lógica de UI
├── lib/            # Configurações de libs, helpers e utilitários
│   ├── i18n.ts        # Configuração do i18next para internacionalização
│   └── utils.ts       # Funções utilitárias (ex: cn para classes Tailwind)
├── locales/        # Arquivos JSON de tradução por idioma
│   ├── en.json
│   └── pt.json
└── pages/          # Componentes de página que funcionam como rotas (React Router)
```
