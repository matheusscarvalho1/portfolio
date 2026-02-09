![Logo of the project](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/home-desktop-01.png)

# 🚀 Matheus Portfolio

**Acesse a aplicação**: [Portifolio - Matheus](https://matheusscarvalho-dev.onrender.com/)

Este projeto é uma aplicação web moderna desenvolvida como portfólio profissional, com foco em performance, acessibilidade e experiência do usuário.  
O objetivo é apresentar meus projetos, habilidades técnicas e informações profissionais de forma clara e interativa.

## 📌 Navegação Rápida

- 🚀 [Visão Geral](#-matheus-portfolio)
- ✨ [Funcionalidades](#funcionalidades)
- 🛠️ [Tecnologias](#tecnologias-utilizadas)
- 🔗 [Integrações](#integracoes-de-servicos)
- ⚙️ [Arquitetura & Performance](#arquitetura-otimizacao-performance)
- 💻 [Instalação Local](#instalacao)
- ☁️ [Deploy](#deploy)
- 📂 [Estrutura de Pastas](#estrutura-de-pastas)
- 📸 [Demonstração](#demonstracao)
- 🌐 [Links](#links)
- 👤 [Autor](#-autor)


<h2 id="funcionalidades">✨ Funcionalidades</h2>

- 🌎 Portfólio multilíngue (PT/EN)
- 🌙 Tema Dark / Light
- 📱 Design totalmente responsivo
- 🔍 SEO otimizado
- 🎬 Animações suaves e interativas
- 🔗 Integração com GitHub (API GraphQL)
- ⚡ Cache inteligente
- 📦 Lazy loading
- ♿ Acessibilidade (WAI-ARIA e navegação por teclado)

<h2 id="tecnologias-utilizadas">Tecnologias </h2>

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

<h2 id="integracoes-de-servicos">🔗 Integrações de Serviços</h2>

O projeto consome dados externos e serviços serverless para funcionalidades dinâmicas:

- **GitHub API (GraphQL)**: Integração com a API do GitHub via Apollo Client para exibir repositórios, métricas e dados de perfil em tempo real.
- **Web3Forms**: Serviço de mensageria que processa o formulário de contato e envia os dados diretamente para o e-mail.

<h2 id="arquitetura-otimizacao-performance">⚙️ Arquitetura, Otimização & Performance</h2>

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


<h2 id="instalacao">⚙️ Como Executar o Projeto Localmente</h2>

### Pré-requisitos
- Node.js (v18+)
- pnpm ou npm

### Passos

```bash
# Clonar o repositório
git clone https://github.com/matheusscarvalho1/portfolio.git

# Acessar o projeto
cd portfolio

# Instalar dependências
pnpm install
# ou
npm install

# Rodar em ambiente de desenvolvimento
pnpm dev
# ou
npm run dev

# Acesse em: http://localhost:5173
```


<h2 id="deploy">🚀 Deploy</h2>

Este projeto está em produção utilizando a plataforma **Render**, com build automatizado a partir do repositório GitHub.

Cada atualização na branch principal gera um novo deploy automaticamente, acesse: https://matheusscarvalho-dev.onrender.com/

<h2 id="estrutura-de-pastas">📂 Estrutura de Pastas</h2>

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


<h2 id="demonstracao">📸 Demonstração do Projeto</h2>

### Home 
<p>Página inicial com visão geral do portfólio, introdução e navegação rápida</p>

![Home](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/home-desktop-02.png)
<hr>

### Serviços
<p>Lista de serviços com que já trabalhei, tanto profissionalmente quanto em projetos pessoais</p>

![Services](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/services.png)
<hr>

### Currículo
<p>Mostra minha experiência profissional, habilidades e histórico acadêmico</p>

![Resume](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/curriculum-page.png)
<hr>

### Projetos
<p>Galeria de projetos pessoais que desenvolvi, com detalhes técnicos e links para os repositórios</p>

![Projects](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/projects.png)
<hr>

### Contatos
<p>Formulário de contato integrado com Web3Forms para envio direto de e-mails</p>

![Contacts](https://github.com/matheusscarvalho1/portfolio/blob/main-v2.0/public/assets/docs/screenshots/contatos.png)



<h2 id="links">🔗 Links</h2>

- 🌐 Portfólio: https://matheusscarvalho-dev.onrender.com/
  
- 💻 Repositório: https://github.com/matheusscarvalho1/portfolio/
  
- 💼 LinkedIn: https://www.linkedin.com/in/matheusscarvalho/

## 👤 Autor

**Matheus de Souza Carvalho**  
Full Stack Developer | Software Engineer  

⭐ Se este projeto foi útil, considere deixar uma estrela no repositório!
