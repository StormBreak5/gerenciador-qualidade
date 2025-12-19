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
- **Spring Boot 3.3.0** - Framework principal
- **Spring Security** - Autenticação e autorização
- **Spring Data JPA** - Persistência de dados
- **H2 Database** - Banco de dados em memória (desenvolvimento)
- **Auth0 Java JWT 4.4.0** - Geração e validação de tokens JWT
- **Lombok** - Redução de código boilerplate
- **Maven** - Gerenciador de dependências
- **Java** - Linguagem de programação

### Estrutura Implementada
```
src/main/java/com/sotrigo/qualidade/
├── GerenciadorApplication.java    # Classe principal Spring Boot
│
├── config/                         # Configurações
│   └── SecurityConfiguration.java # Configuração de segurança e CORS
│
├── controller/                     # Controladores REST
│   └── UserController.java        # Endpoints de usuário e autenticação
│
├── dtos/                          # Data Transfer Objects
│   ├── CreateUserDto.java         # DTO para criação de usuário
│   ├── LoginUserDto.java          # DTO para login
│   ├── RecoveryJwtTokenDto.java   # DTO para retorno de token JWT
│   └── RecoveryUserDto.java       # DTO para retorno de dados do usuário
│
├── models/                        # Entidades e modelos
│   ├── User.java                  # Entidade de usuário (JPA)
│   ├── Role.java                  # Entidade de papel/permissão (JPA)
│   ├── enums/
│   │   └── RoleName.java         # Enum com tipos de papéis
│   └── impl/
│       └── UserDetailsImpl.java  # Implementação UserDetails do Spring Security
│
├── repository/                    # Repositórios JPA
│   └── UserRepository.java       # Repositório de usuários
│
├── security/                      # Componentes de segurança
│   └── UserAuthenticationFilter.java  # Filtro de autenticação JWT
│
└── service/                       # Serviços de negócio
    ├── JwtTokenService.java      # Serviço de geração/validação JWT
    ├── UserService.java          # Serviço de gerenciamento de usuários
    └── impl/
        └── UserDetailsServiceImpl.java  # Implementação UserDetailsService

src/main/resources/
├── application.properties         # Configurações da aplicação
├── static/                       # Recursos estáticos
└── templates/                    # Templates (se necessário)
```

### Funcionalidades Implementadas

#### 🔐 Sistema de Autenticação JWT
- **Geração de Tokens**: Tokens JWT com expiração configurável
- **Validação de Tokens**: Verificação de assinatura e expiração
- **Extração de Claims**: Recuperação de informações do usuário do token
- **Secret Key**: Chave secreta para assinatura dos tokens

#### 👤 Gerenciamento de Usuários
- **Criação de Usuários**: Endpoint para registro de novos usuários
- **Autenticação**: Login com email e senha
- **Autorização**: Sistema baseado em roles (ADMINISTRATOR, USER)
- **Criptografia**: Senhas criptografadas com BCrypt

#### 🛡️ Segurança
- **Spring Security**: Configuração completa de segurança
- **CORS**: Configurado para permitir requisições do frontend
- **Filtros**: Filtro customizado para validação de JWT em cada requisição
- **Endpoints Públicos**: `/users/login` e `/users` (registro) são públicos
- **Endpoints Protegidos**: Demais endpoints requerem autenticação

### Endpoints da API

#### Autenticação e Usuários
```
POST /users/login          # Login (público)
POST /users                # Criar usuário (público)
GET  /users/test          # Endpoint de teste (autenticado)
```

### Modelos de Dados

#### User (Usuário)
- `id`: Long (chave primária)
- `email`: String (único)
- `password`: String (criptografada)
- `roles`: List<Role> (papéis do usuário)

#### Role (Papel/Permissão)
- `id`: Long (chave primária)
- `name`: RoleName (ADMINISTRATOR, USER)

### Configurações de Segurança

#### CORS
- Permite requisições de: `http://localhost:4200` (frontend Angular)
- Métodos permitidos: GET, POST, PUT, DELETE, OPTIONS, PATCH
- Headers permitidos: Authorization, Content-Type
- Credentials: Habilitado

#### JWT
- Algoritmo: HMAC256
- Secret Key: Configurável
- Expiração: Configurável (padrão: 2 horas)

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
- **Spring Boot 3.3.0**
  - `spring-boot-starter-web` - REST API
  - `spring-boot-starter-security` - Segurança
  - `spring-boot-starter-data-jpa` - Persistência
  - `spring-boot-starter-test` - Testes
  - `spring-boot-devtools` - Desenvolvimento
- **Auth0 Java JWT 4.4.0** - Tokens JWT
- **H2 Database** - Banco em memória
- **Lombok** - Redução de boilerplate

## 🎯 Funcionalidades Implementadas

### ✅ Frontend - Concluído
- [x] Estrutura base do projeto
- [x] Configuração Angular com Material
- [x] Dashboard com dados mockados
- [x] Sistema de design responsivo
- [x] Tema dark customizado
- [x] Componentes reutilizáveis
- [x] Roteamento básico
- [x] Migração para SCSS

### ✅ Backend - Concluído
- [x] Estrutura base Spring Boot
- [x] Sistema de autenticação JWT
- [x] Spring Security configurado
- [x] Gerenciamento de usuários
- [x] Sistema de roles (ADMINISTRATOR, USER)
- [x] Repositórios JPA
- [x] DTOs para transferência de dados
- [x] Configuração CORS
- [x] Banco de dados H2 (desenvolvimento)
- [x] Endpoints de autenticação

### 🔄 Em Desenvolvimento
- [ ] Integração Backend-Frontend
- [ ] Tela de login no frontend
- [ ] Interceptor HTTP para JWT
- [ ] Guards de rota
- [ ] Migração para banco de produção
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
19 de Dezembro de 2025

---

**Nota**: Este é um projeto em desenvolvimento ativo. A estrutura e funcionalidades podem ser atualizadas conforme o progresso do desenvolvimento.
