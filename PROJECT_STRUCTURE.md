# ESTRUTURA DO PROJETO - GERENCIADOR DE QUALIDADE

## 📋 Visão Geral
Sistema de gerenciamento de qualidade desenvolvido com Angular (frontend) e Spring Boot (backend).

## 🏗️ Arquitetura do Projeto

```
gerenciador-qualidade/
│
├── .git/                           # Controle de versão Git
├── .idea/                          # Configurações do IntelliJ IDEA
├── .vscode/                        # Configurações do VS Code
│
├── backend/                        # Aplicação Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/              # Código fonte Java
│   │   │   └── resources/         # Recursos (application.properties, etc)
│   │   └── test/                  # Testes unitários e integração
│   ├── target/                    # Arquivos compilados (ignorado no Git)
│   ├── pom.xml                    # Dependências Maven
│   └── HELP.md                    # Documentação do Spring Boot
│
├── frontend/                       # Aplicação Angular
│   ├── node_modules/              # Dependências npm (ignorado no Git)
│   ├── public/                    # Arquivos públicos estáticos
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/
│   │   │   │   └── dashboard/    # Componente Dashboard
│   │   │   │       ├── dashboard.ts       # Lógica do componente
│   │   │   │       ├── dashboard.html     # Template HTML
│   │   │   │       └── dashboard.scss     # Estilos SCSS
│   │   │   ├── app.ts            # Componente raiz
│   │   │   ├── app.html          # Template do app
│   │   │   ├── app.scss          # Estilos do app
│   │   │   ├── app.config.ts     # Configuração da aplicação
│   │   │   └── app.routes.ts     # Rotas da aplicação
│   │   ├── custom-theme.scss     # Tema customizado Angular Material
│   │   ├── styles.scss           # Estilos globais
│   │   ├── index.html            # HTML principal
│   │   └── main.ts               # Ponto de entrada da aplicação
│   ├── angular.json              # Configuração do Angular CLI
│   ├── package.json              # Dependências e scripts npm
│   ├── package-lock.json         # Lock de dependências
│   ├── tsconfig.json             # Configuração TypeScript
│   ├── tsconfig.app.json         # Config TypeScript para app
│   └── tsconfig.spec.json        # Config TypeScript para testes
│
├── .gitignore                     # Arquivos ignorados pelo Git
└── PROJECT_STRUCTURE              # Este arquivo
```

## 🎨 Frontend - Angular

### Tecnologias Utilizadas
- **Angular 19** - Framework principal
- **Angular Material** - Biblioteca de componentes UI
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa
- **Signals** - Gerenciamento de estado reativo

### Estrutura de Componentes

#### Dashboard (`/dashboard`)
Página principal do sistema com:
- **Métricas de Qualidade**: Cards com indicadores principais
  - Cobertura de Testes
  - Bugs Críticos
  - Testes Passando
  - Tempo Médio de Build
- **Testes Recentes**: Lista de últimos testes executados
- **Projetos**: Visão geral dos projetos em andamento
- **Gráfico de Tendências**: Visualização de métricas ao longo do tempo

### Componentes Angular Material Utilizados
- `MatCardModule` - Cards
- `MatButtonModule` - Botões
- `MatIconModule` - Ícones Material Design
- `MatChipsModule` - Chips/Tags
- `MatProgressBarModule` - Barras de progresso
- `MatTabsModule` - Abas
- `MatBadgeModule` - Badges

### Estilização
- **Tema Dark Mode**: Paleta de cores escura moderna
- **Cores Primárias**: Azul (#0ea5e9) e Roxo (#a855f7)
- **Tipografia**: Inter (Google Fonts)
- **Ícones**: Material Icons
- **Responsivo**: Design adaptável para mobile, tablet e desktop

### Rotas Configuradas
- `/` - Redireciona para `/dashboard`
- `/dashboard` - Página principal do dashboard

## 🔧 Backend - Spring Boot

### Tecnologias Utilizadas
- **Spring Boot** - Framework principal
- **Maven** - Gerenciador de dependências
- **Java** - Linguagem de programação

### Estrutura (A ser desenvolvida)
```
src/main/java/
├── controllers/    # Controladores REST
├── services/       # Lógica de negócio
├── repositories/   # Acesso a dados
├── models/         # Entidades/DTOs
└── config/         # Configurações
```

## 🚀 Como Executar

### Frontend
```bash
cd frontend
npm install          # Instalar dependências
npm start           # Iniciar servidor de desenvolvimento (http://localhost:4200)
npm run build       # Build de produção
```

### Backend
```bash
cd backend
./mvnw spring-boot:run    # Linux/Mac
mvnw.cmd spring-boot:run  # Windows
```

## 📦 Dependências Principais

### Frontend (package.json)
- `@angular/core`: ^19.x
- `@angular/material`: ^21.x
- `@angular/router`: ^19.x
- `typescript`: ~5.x

### Backend (pom.xml)
- Spring Boot Starter Web
- Spring Boot Starter Data JPA (futuro)
- Spring Boot DevTools

## 🎯 Funcionalidades Implementadas

### ✅ Concluído
- [x] Estrutura base do projeto
- [x] Configuração Angular com Material
- [x] Dashboard com dados mockados
- [x] Sistema de design responsivo
- [x] Tema dark customizado
- [x] Componentes reutilizáveis
- [x] Roteamento básico
- [x] Migração para SCSS

### 🔄 Em Desenvolvimento
- [ ] Integração Backend-Frontend
- [ ] API REST
- [ ] Autenticação e Autorização
- [ ] Banco de dados
- [ ] Testes automatizados
- [ ] CI/CD

## 📝 Convenções de Código

### Frontend
- **Nomenclatura de Componentes**: PascalCase (ex: `Dashboard`)
- **Nomenclatura de Arquivos**: kebab-case (ex: `dashboard.component.ts`)
- **Estilo**: SCSS com BEM methodology
- **TypeScript**: Strict mode habilitado
- **Signals**: Preferir signals para estado reativo

### Backend
- **Nomenclatura de Classes**: PascalCase
- **Nomenclatura de Métodos**: camelCase
- **Pacotes**: lowercase
- **REST**: Seguir convenções RESTful

## 🔐 Segurança
- Arquivos sensíveis no `.gitignore`
- Variáveis de ambiente para configurações
- CORS configurado (futuro)
- Autenticação JWT (futuro)

## 📊 Dados Mockados (Temporário)

O dashboard atualmente utiliza dados mockados para demonstração:
- 4 métricas de qualidade
- 5 testes recentes
- 4 projetos
- Gráfico de tendências (SVG)

Estes dados serão substituídos por chamadas à API quando o backend estiver implementado.

## 🌐 URLs

### Desenvolvimento
- **Frontend**: http://localhost:4200
- **Backend**: http://localhost:8080 (quando implementado)

### Produção
- A ser definido

## 📚 Documentação Adicional
- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.dev)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)

## 👥 Equipe
- Desenvolvedor Full Stack

## 📅 Última Atualização
17 de Dezembro de 2025

---

**Nota**: Este é um projeto em desenvolvimento ativo. A estrutura e funcionalidades podem ser atualizadas conforme o progresso do desenvolvimento.
