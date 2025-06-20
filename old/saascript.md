# SaaScript Master Project Plan

## 1. AI Context Restoration Guide (If Session Resets)

_This section is specifically designed to quickly bring the AI (me) up to speed in case of a session memory reset. It summarizes the critical historical context and key understandings of our collaboration._

### 1.1. Overarching Goals & Motivation (Venkat's Vision)

- **User:** Venkat. You can call me "Venkat" in conversation, but "VENKATESH C V" for formal documentation.
- **Core Goal:** To showcase full-stack AI/ML development skills, build a tangible portfolio for freelancing, leverage AI to avoid burnout, and gain deep Python experience.

### 1.2. The Three Pillars of the Ecosystem (Evolution of Understanding)

1.  **SaaScript (The TypeScript Blueprint/Framework for SaaS):**

    - **Initial Thought:** The _first_ project idea conceived: a comprehensive, end-to-end SaaS blueprint and framework.
    - **Role:** Provides a full suite of common, reusable SaaS services implemented in the TypeScript/Node.js stack. Its core purpose is to act as a **ready-to-use codebase and architecture blueprint** that developers can take, customize with their core logic, and **self-host** to launch their own SaaS applications.
    - **Relationship to PySaaS:** **Identical in concept and the core SaaS services provided** to PySaaS; it serves as the TypeScript implementation of a robust SaaS framework.
    - **Key Scope Defined in this Document:** This Master Project Document defines the scope for detailed plans covering Payment & Subscription Management, User Onboarding, Advanced Security, Internationalization (I18n) & Localization (L10n), and Customer Support.

2.  **PySaaS (The Python Framework for SaaS):**

    - **Initial Thought:** A Python-based parallel to SaaScript, conceived later to leverage Python expertise.
    - **Role:** Provides a full suite of common, reusable SaaS services implemented in the Python stack. Its core purpose is to act as a **ready-to-use codebase and architecture blueprint** that developers can take, customize with their core logic, and **self-host** to launch their own SaaS applications.
    - **Relationship to SaaScript:** **Identical in concept and the core SaaS services provided** to SaaScript; it serves as the Python implementation of a robust SaaS framework. I (AI) assist in translating/implementing ideas from SaaScript into Python.

3.  **FilmForgeFX (The Example Application):**
    - **Initial Thought:** A standalone AI image transforming application, potentially a core end-product tightly coupled with PySaaS/SaaScript.
    - **Pivoted Understanding:** Now considered an **_example_ of an existing core application** (with ML/AI as its core service) that a developer (like Venkat) would take the `PySaaS` or `SaaScript` framework, integrate their `FilmForgeFX` logic into it, and then **self-host** that combined application as a SaaS.
    - **Core Function:** AI-based "Image-to-Movie-Style Adaptation" (transforming images into stylized characters/elements from animated movies).
    - **Key Nuance for AI:** The AI should aim for **literal character/entity adaptation** even if it means transforming a human input into a non-human form (e.g., human to "Cars" vehicle, human to "Turbo" racing snail/entity), as long as the result is fun and visually compelling. (This clarifies a past misunderstanding where AI initially hesitated on literal "human to snail" transformation, but embraced "human to car").
    - **Relationship:** It's a _separate_ Git repository. Its core logic would be integrated into a copy of the PySaaS/SaaScript framework by a developer, who would then self-host the complete SaaS application.

### 1.3. Collaborative Model (for AI Context)

- **Our Roles:** Venkat (Project Lead & Architect) guides; I (AI Co-Developer) assist with brainstorming, code generation, documentation, testing, debugging, and process suggestions.
- **Workflow Focus:** Iterative, agile-inspired, emphasizing transparency and flexibility, with AI as an accelerator.
- **Key Aspect for AI:** AI adapts to your perfectionist mindset by handling boilerplate and iterative refinements.

### 1.4. Persistent Technical Notes (for AI)

- AI currently has difficulty reliably reading PDF content from Canvas. Copy-pasting text or providing `.txt`/`.md` files is preferred for sharing document content.

### 1.5. Project Constraints: Budget (Time-Only)

A core constraint for the SaaScript project is that the only allocated budget is **time**. This explicitly means:

* **No Direct Monetary Cost:** All chosen technologies, libraries, frameworks, and core tools must be open-source and free to use, specifically for self-hosting where applicable.
* **Prioritization of Free & Open-Source Alternatives:** When multiple options exist, preference will always be given to solutions that do not incur licensing or subscription fees (e.g., Prometheus/Grafana over Datadog).
* **Self-Hosted Solutions:** For services that offer both a paid SaaS version and a free, self-hostable open-source version (e.g., Sentry, PostHog, HashiCorp Vault), the self-hostable open-source variant will be utilized for the project's development and initial deployment.
* **Operational Costs Not Covered (Post-Deployment):** While development libraries/SDKs for services like payment gateways (e.g., Stripe) are free to integrate, it is acknowledged that actual live production usage of such services will incur transaction or operational fees. These operational costs are outside the scope of the project's development budget constraint.

This constraint ensures the project remains achievable within defined time limits without requiring external financial investment.

---

## 2. SaaScript Project Details (Current State & Roadmap)

### 2.1. Project Overview

- **Project Name:** SaaScript
- **Project Goal:** To build a robust, scalable, and modular SaaS application demonstrating modern microservices architecture, leveraging AI to maximize solo developer efficiency across the entire software development lifecycle.
- **Vision:** To provide a comprehensive, end-to-end SaaS blueprint and framework that enables developers to rapidly build, customize, and **self-host** scalable, robust, and full-featured SaaS applications using the TypeScript stack. It acts as a parallel alternative (codebase/framework) to PySaaS (Python-based).
- **Mission:** To offer a **ready-to-use framework** with reusable and extensible modules for common SaaS functionalities, allowing developers to focus on their core business logic for their own self-hosted applications rather than boilerplate infrastructure.
- **Target Audience:** Developers and businesses looking to "SaaSify" their existing core software or build new SaaS applications efficiently.

### 2.2. Core Principles & Philosophy

- **AI as Your Co-Pilot:** Integrate AI assistance at every stage (Design, Develop, Test, Document, Deploy, Maintain).
- **Automation First:** Automate repetitive and complex tasks with "single-command" scripts.
- **Convention Over Configuration:** Embrace structured frameworks to enforce consistency and maintainability.
- **Learning & Exploration:** Prioritize hands-on experience with technologies common in large-scale applications.
- **Reusability:** Design modules to be standalone and easily integrated into other SaaS contexts.
- **TypeScript-First:** Leveraging TypeScript for robust, scalable, and maintainable codebase.
- **Modular & Reusable:** Designed with microservices/components that are independent and interchangeable.
- **API-First:** Clear, consistent, and well-documented APIs for all services.
- **Scalable & Resilient:** Architected to handle high loads and ensure high availability.
- **Security-First:** Built with robust security practices at every layer.

### 2.3. Our Development Team (Collaborative Model)

This project is a collaborative effort managed by a two-developer team:

- **Project Lead & Architect (VENKATESH C V):**
  - **Role:** Product Owner, Architect (final decision-maker), Quality Assurance Lead, Integrator, Deployment Lead.
  - **Responsibilities:** Defines project vision, prioritizes features, reviews all code, makes final architectural decisions, performs integration testing, manages releases.
- **AI Co-Developer (Gemini Model):**
  - **Role:** Technical Brainstormer, Code Generator, Documentation Assistant, Tester (test case generation), Debugging Assistant, Architectural Advisor, Process Suggestor.
  - **Responsibilities:** Provides comprehensive options, generates boilerplate code, drafts detailed documentation, suggests testing strategies, assists with troubleshooting, helps define project processes.

### 2.4. Finalized Technology Stack

This is the complete technology stack chosen for the SaaScript project:

- **Project Development Methodology:** AI-assisted, **TDD-first workflow**, with detailed documentation.
- **Backend Framework:** NestJS (TypeScript/Node.js) for all microservices (including the API Gateway).
- **Core Transactional Database:** PostgreSQL (for core transactional data like Auth, Payments, etc.).
- **Session Management & Caching:** Redis (for sessions, caching, rate limiting).
- **User Profile Preferences Database:** DynamoDB (for a dedicated User Profile module, handling flexible user settings and preferences).
- **Messaging & Queueing:**
  - RabbitMQ (for reliable task queues and traditional message queuing).
  - Apache Kafka (for high-throughput event streaming and event sourcing).
- **API Gateway:** NestJS (Custom Implementation). (Future backlog: GraphQL layer for frontends).
- **Frontend Framework:** React (with Next.js Framework). (Future backlog: Mobile development).
- **Deployment & Orchestration:** Kubernetes (K8s), with Minikube for local development (leveraging its Podman driver).
- **Observability:** Prometheus, Grafana (self-hosted), Sentry (self-hosted open-source for error monitoring).
- **Secrets Management:** HashiCorp Vault.

### 2.5. Module Design Principles for Reusability

These principles guide the design and implementation of each SaaScript microservice to ensure they are truly independent, maintainable, and scalable.

- **Loose Coupling & High Cohesion:**
  - **Definition:** Services communicate via well-defined public APIs, without knowledge of each other's internal implementations or direct database access. Each service is responsible for a single, focused business capability (e.g., Auth handles only identity management).
  - **Benefits:** Enhanced reusability, easier maintenance, independent scalability.
- **Clear API Contracts (RESTful & Standardized):**
  - **Definition:** Services expose explicit contracts for communication, specifying endpoints, HTTP methods, request/response formats, and status codes. This adheres to RESTful API design.
  - **Implementation:** Use NestJS decorators, TypeScript typing, and DTOs to enforce clear API definitions. Utilize `@nestjs/swagger` for OpenAPI documentation generation.
  - **Standardization:**
    - **Consistent Base Paths and Versioning:** All services will use consistent base paths (e.g., `/api/v1/` or `/service-name/v1/`).
    - **Clear Resource Naming:** Use nouns for resources (`/users`, `/subscriptions`).
    - **Appropriate HTTP Methods:** Use GET, POST, PUT, PATCH, DELETE for their intended actions.
    - **Consistent Request/Response Formats:** Primarily JSON for bodies and responses.
    - **Standardized Error Handling:** Use appropriate HTTP status codes (e.g., 200, 201, 400, 401, 403, 404, 409, 500) with a consistent JSON error structure (`error_code`, `message`).
    - **Authentication & Authorization Headers:** Use Bearer Tokens (JWTs) in the `Authorization` header; standardized `X-Refresh-Token` for token refreshing.
    - **Pagination, Filtering, Sorting:** Standardized query parameters (e.g., `?page=1&size=20`, `?status=active`, `?sort_by=created_at&order=desc`).
    - **Idempotency:** Design PUT and DELETE operations to be idempotent.
  - **Benefits:** Predictability, faster integration, versionability, and a developer-friendly experience for applications consuming the blueprint.
- **Independent Deployability:**
  - **Definition:** Each service can be developed, tested, deployed, updated, and rolled back independently.
  - **Implementation:** Each microservice will have its own Dockerfile to create self-contained container images.
  - **Benefits:** Rapid iteration, reduced risk, development efficiency.
- **Scalability (Statelessness is Key):**
  - **Definition:** Services should be stateless, externalizing any session or request-specific data to shared, highly available stores.
  - **Implementation:** JWT-based authentication, Redis for session data/caching.
  - **Benefits:** Elasticity, resilience, efficient resource utilization.
- **Security:**
  - **Definition:** Security is built into every layer: authentication, authorization, input validation, and secure handling of credentials.
  - **Implementation:** Auth module for identity, API Gateway for initial validation, NestJS pipes for input validation, secure secret management in Kubernetes.
- **2.5.6. Multi-Tenancy Strategy (Shared Database with Tenant ID):**
  - **Definition:** Implement a shared database segregated by a `tenant_id` column as the primary strategy for allowing multiple customer organizations (tenants) to use a single deployed instance while keeping their data isolated.
  - **Implementation:**
    - Every API request will carry a `tenant_id` (derived during authentication or as a dedicated header).
    - Almost every table containing tenant-specific data will include a `tenant_id` column.
    - All database queries will automatically include a `WHERE tenant_id = <current_tenant_id>` clause.
    - Application logic will strictly enforce `tenant_id` throughout its operations.
  - **Benefits:** Efficient for deployment and scaling, while offering robust data isolation.
- **2.5.7. Data Ownership & Isolation:**
  - **Definition:** Each project (SaaScript blueprint services, FilmForgeFX core application) is responsible for managing its own dedicated database(s) for its specific domain of data.
  - **Implementation:**
    - **Blueprint Data:** SaaScript/PySaaS manage data essential for running the SaaS framework (e.g., user auth, billing, tenant metadata) typically in PostgreSQL.
    - **Core Application Data:** FilmForgeFX manages data related to its core AI functionality (e.g., transformed images, requests, AI model configs) in its own dedicated database(s).
    - **Inter-Database Communication:** No direct database-to-database communication. All interactions occur via API calls (e.g., FilmForgeFX queries SaaScript's Auth API for `tenant_id`, then uses it to query its own database).
  - **Benefits:** Cleaner architecture, easier maintenance, better scalability, strong separation of concerns.

### 2.6. SaaScript Project Plan: Phased Development Approach (Phases & Epics)

This plan outlines the complete project lifecycle, broken down into manageable phases and epics.

#### Summary of Phases:

- **Phase 1: Core Infrastructure & Initial Services**
- **Phase 2: Core Feature Development & Database Integration**
- **Phase 3: User Management, Authentication & Authorization Expansion**
- **Phase 4: Billing, Subscriptions & Payment Gateway Integration**
- **Phase 5: Dashboard, Analytics & Reporting**
- **Phase 6: Integrations & Extensibility**
- **Phase 7: Performance Optimization & Scalability**
- **Phase 8: Messaging & Asynchronous Processing (RabbitMQ & Apache Kafka)**
- **Phase 9: Local Kubernetes Deployment (Minikube)**
- **Phase 10: Security Hardening & Compliance**
- **Phase 11: Deployment, Monitoring & Production Readiness**
- **Phase 12: Future Enhancements & Strategic Growth**

---

#### Detailed Phase Breakdown:

#### Phase 0: Project Setup & Initial Monorepo Foundation

- **Goal:** Establish the fundamental monorepo structure, initial configuration, and core development tools.
- **Key Technologies:** Git, npm Workspaces, Podman, Ubuntu (Host OS).
- **0.1. Initialize Monorepo Structure**
  - **Goal:** Create the root `saascript` directory, configure `package.json` for npm workspaces, create core directories, and set up `.gitignore`, `README.md`, and `.github/PULL_REQUEST_TEMPLATE.md`.
  - **GitHub Issue Title:** `feat: Setup core SaaScript repository structure`
- **0.2. Document Project Methodology**
  - **Goal:** Create foundational documentation files: `docs/AI_Assisted_Workflow.md`, `docs/ARCHITECTURE.md`, `docs/LOCAL_DEVELOPMENT.md`, `docs/DEVELOPMENT_WORKFLOW.md`, `docs/PROJECT_MANAGEMENT.md`.
  - **GitHub Issue Title:** `docs: Document core project methodologies and workflow`

#### **Phase 1: Core Infrastructure & Initial Services**

-   **Goal:** Establish the foundational local development environment, set up monorepo tooling, and create basic skeletons for the API Gateway, Authentication Microservice, and the main Web Frontend, including core static UI pages, their respective testing configurations, and initial containerization.
-   **Key Technologies:** Docker Compose, NPM Workspaces (or Lerna), NestJS, React, Next.js, Jest, ESLint, Tailwind CSS.

-   **1.1. Local Development Environment Setup**
    -   **Goal:** Configure the core shared services and monorepo structure to support all future microservices development.
    -   **Detailed Steps:**
        -   Set up `docker-compose.yaml` to include essential shared services like PostgreSQL, Redis, and RabbitMQ.
        -   Implement monorepo tooling (e.g., NPM Workspaces) to manage multiple packages/services efficiently.
    -   **AI Co-Pilot Role:**
        -   Generate initial `docker-compose.yaml` definitions for core services.
        -   Suggest monorepo setup commands and configuration examples.
    -   **Expected Outcome:** A functional `docker-compose` setup with shared services running, and a configured monorepo ready for new service creation.

-   **1.2. Initial Service Skeletons & Core UI Pages**
    -   **Goal:** Create the basic project structures for the API Gateway, Authentication Microservice, and the primary Web Frontend, along with essential user-facing static pages.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-gateway` within `modules/gateway/`.
        -   Create the foundational NestJS project structure for `saascript-auth-service` within `modules/auth_service/`.
        -   Initialize the primary React web application within `frontend/web/` using Next.js.
        -   Develop core static UI pages for the `frontend/web` application, including the marketing landing page, About Us, Contact Us pages, and generic 404/error pages.
    -   **AI Co-Pilot Role:**
        -   Provide commands for generating NestJS and Next.js project skeletons.
        -   Offer boilerplate code for basic API Gateway and Auth service files.
        -   Suggest initial component structures and content for static frontend pages.
    -   **Expected Outcome:** Basic, runnable skeletons for the API Gateway, Auth Microservice, and Web Frontend, with essential static pages implemented.

-   **1.3. Testing & Tooling Configuration**
    -   **Goal:** Configure testing frameworks and essential development tooling for the initial services and frontend.
    -   **Detailed Steps:**
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-gateway` module, including code coverage reporting.
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-auth-service` module, including code coverage reporting.
        -   Configure frontend development tooling for `frontend/web`, including Tailwind CSS for styling, ESLint for code quality, and Jest for testing (with code coverage).
    -   **AI Co-Pilot Role:**
        -   Provide configuration files for Jest, ESLint, and Tailwind CSS for both NestJS and Next.js projects.
        -   Suggest initial test file structures and example tests.
        -   Guide on integrating code coverage tools.
    -   **Expected Outcome:** Testing frameworks and code quality tools configured for the API Gateway, Auth Microservice, and Web Frontend, ready for test-driven development.

-   **1.4. Initial Service Containerization**
    -   **Goal:** Create Dockerfiles and integrate the initial services and frontend into the local Docker Compose environment.
    -   **Detailed Steps:**
        -   Create a Dockerfile for the `saascript-gateway` and add its service definition to `docker-compose.yaml`.
        -   Create a Dockerfile for the `saascript-auth-service` and add its service definition to `docker-compose.yaml`.
        -   Create a Dockerfile for the `saascript-frontend-web` application and add its service definition to `docker-compose.yaml`.
    -   **AI Co-Pilot Role:**
        -   Generate optimized Dockerfiles for NestJS and Next.js applications.
        -   Assist with adding service definitions and network configurations to `docker-compose.yaml`.
    -   **Expected Outcome:** All initial services and the web frontend are containerized and runnable via `docker-compose`, communicating correctly within the local environment.

---

#### **Phase 2: Core Feature Development & Database Integration**

-   **Goal:** Implement foundational functionalities for the Authentication Microservice, integrate a shared PostgreSQL database, introduce the initial Project Management Microservice, and build basic authentication-related UI for the main web frontend.
-   **Key Technologies:** NestJS, TypeScript, PostgreSQL, TypeORM, React, Next.js, JWT, bcryptjs.

-   **2.1. Shared PostgreSQL Database Module**
    -   **Goal:** Create a reusable module for PostgreSQL database connection and ORM setup to ensure consistency across services.
    -   **Detailed Steps:**
        -   Develop a NestJS module within `modules/libs/database/postgres/` encapsulating common PostgreSQL connection logic, configuration, and ORM (e.g., TypeORM) setup.
    -   **AI Co-Pilot Role:**
        -   Provide NestJS module structure and code examples for PostgreSQL integration (e.g., TypeORM setup).
        -   Suggest best practices for database connection management.
    -   **Expected Outcome:** A functional, reusable `saascript-libs-database` module for PostgreSQL integration.

-   **2.2. Auth Microservice Core Functionality**
    -   **Goal:** Implement essential user authentication processes and integrate persistent data storage.
    -   **Detailed Steps:**
        -   Integrate the Auth Microservice with PostgreSQL using the shared database module, defining user and session/token entities (schema).
        -   Develop API endpoints for user registration (including password hashing with `bcryptjs`).
        -   Develop API endpoints for user login and token generation (using `jsonwebtoken` for JWT or managing sessions).
        -   Implement token validation logic within the Auth Microservice.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS entities for user and token schemas.
        -   Provide code for user registration, login, and JWT generation/validation.
        -   Suggest secure practices for password hashing and token handling.
    -   **Expected Outcome:** Functional Auth Microservice with user registration, login, and token management, persisting data in PostgreSQL.

-   **2.3. API Gateway Authentication Integration**
    -   **Goal:** Configure the API Gateway to securely handle authentication tokens and route requests.
    -   **Detailed Steps:**
        -   Enhance the API Gateway to validate incoming authentication tokens.
        -   Implement routing rules to forward authenticated requests to the appropriate backend services, including the Auth Microservice.
    -   **AI Co-Pilot Role:**
        -   Provide code examples for middleware or interceptors in the API Gateway for token validation.
        -   Assist with routing configuration based on token validity and request paths.
    -   **Expected Outcome:** API Gateway securely validates authentication tokens and routes requests effectively.

-   **2.4. Project Management Microservice**
    -   **Goal:** Introduce the first core business logic service with basic CRUD capabilities and its own data persistence.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-projects` within `modules/projects_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-modules-projects`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-projects` and integrate its service definition into `docker-compose.yaml`.
        -   Integrate the Project Management Microservice with PostgreSQL using the shared database module, defining project-related entities (schema).
        -   Implement core CRUD (Create, Read, Update, Delete) functionalities and API endpoints for project entities.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and entity definitions for the Project Service.
        -   Provide boilerplate code for CRUD controllers and services.
        -   Assist with Dockerfile and Docker Compose integration for the new service.
    -   **Expected Outcome:** Functional Project Management Microservice with basic CRUD operations, containerized and integrated with PostgreSQL.

-   **2.5. Web Frontend Authentication UI**
    -   **Goal:** Develop the user interface for authentication and a basic view for authenticated users.
    -   **Detailed Steps:**
        -   Implement the user interface for login and registration forms, interacting with the Auth Microservice via the API Gateway.
        -   Create a basic dashboard view in the `frontend/web` application that is accessible only to authenticated users, serving as a placeholder for future content.
    -   **AI Co-Pilot Role:**
        -   Provide React component examples for login/registration forms.
        -   Assist with state management for authentication status.
        -   Suggest basic dashboard layout and authenticated routing.
    -   **Expected Outcome:** User-facing login, registration, and a basic authenticated dashboard are functional.

---

#### **Phase 3: User Management, Authentication & Authorization Expansion**

-   **Goal:** Enhance user management and security by implementing advanced authentication features, integrating Redis for caching and rate limiting, developing a dedicated User Profile Microservice with DynamoDB, and building corresponding frontend UIs.
-   **Key Technologies:** NestJS, TypeScript, Redis, DynamoDB, TypeORM, React, Next.js, bcryptjs, JWT, RBAC.

-   **3.1. Local DynamoDB Setup & Shared Module**
    -   **Goal:** Configure a local DynamoDB instance and create a reusable module for its integration.
    -   **Detailed Steps:**
        -   Set up a local DynamoDB instance (e.g., using a Docker/Podman container) within `infra/docker-compose.yaml`.
        -   Develop a NestJS module within `modules/libs/database/dynamodb/` for common DynamoDB connection and client configuration.
    -   **AI Co-Pilot Role:**
        -   Provide `docker-compose.yaml` configuration for local DynamoDB.
        -   Generate NestJS module boilerplate for DynamoDB integration using AWS SDK.
    -   **Expected Outcome:** Local DynamoDB instance running and a shared NestJS module for DynamoDB integration available.

-   **3.2. User Profile Microservice Development**
    -   **Goal:** Create a new microservice for managing flexible user preferences and profile data.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-profile` within `modules/profile_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-modules-profile`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-profile` and integrate its service definition into `docker-compose.yaml`.
        -   Integrate the User Profile Microservice with DynamoDB using the shared DynamoDB module, defining a flexible data model (e.g., `userId` as partition key, `preferenceName` as sort key).
        -   Implement core CRUD operations (create/update profile, get preferences) via `UserProfileService` and expose API endpoints in `UserProfileController` (e.g., `/api/user-profile/preferences`, `/api/user-profile/settings`).
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton, DynamoDB data model, and CRUD service/controller code.
        -   Assist with Dockerfile and Docker Compose integration for the new service.
    -   **Expected Outcome:** Functional User Profile Microservice with CRUD operations for user preferences, integrated with DynamoDB.

-   **3.3. API Gateway Routing for User Profile Service**
    -   **Goal:** Configure the API Gateway to forward requests to the new User Profile Microservice.
    -   **Detailed Steps:**
        -   Implement routing rules in the API Gateway to direct client requests related to user profiles and preferences to the `saascript-modules-profile` microservice.
    -   **AI Co-Pilot Role:**
        -   Provide API Gateway routing configuration examples for the new service endpoints.
    -   **Expected Outcome:** API Gateway successfully routes requests to the User Profile Microservice.

-   **3.4. Advanced Auth Microservice Features**
    -   **Goal:** Enhance the Authentication Microservice with critical security and access control functionalities.
    -   **Detailed Steps:**
        -   Implement a secure Password Reset Flow (request, token validation, password update).
        -   Implement an Email Verification Flow for new user registrations.
        -   Develop a robust Role-Based Access Control (RBAC) system for assigning roles to users and controlling access to resources.
        -   Integrate Redis for session caching (if using session-based auth) and implement rate limiting on authentication-related endpoints to prevent brute-force attacks.
    -   **AI Co-Pilot Role:**
        -   Provide code for password reset and email verification flows (token generation, email sending simulation).
        -   Assist with RBAC implementation (roles, permissions, guards).
        -   Suggest Redis integration patterns for caching and rate limiting.
    -   **Expected Outcome:** Auth Microservice supports password reset, email verification, RBAC, and includes Redis for improved performance/security.

-   **3.5. Project Service RBAC Integration**
    -   **Goal:** Apply RBAC to the Project Management Microservice for fine-grained access control.
    -   **Detailed Steps:**
        -   Integrate the RBAC system from the Auth Service into the Project Management Microservice to control user permissions within specific projects (e.g., view, edit, delete project based on role).
    -   **AI Co-Pilot Role:**
        -   Provide code examples for implementing RBAC guards and decorators in the Project Service.
        -   Suggest how to define and check permissions for project-related actions.
    -   **Expected Outcome:** Project Management Microservice enforces RBAC for project-specific operations.

-   **3.6. Web Frontend Profile & Permissions UI**
    -   **Goal:** Develop user interfaces for managing personal profiles and displaying permissions.
    -   **Detailed Steps:**
        -   Implement the user interface in `frontend/web` for managing user profile settings, consuming and updating data via the User Profile Microservice. This includes fields for personal info, options for password changes (linking to reset flow), and email verification status.
        -   Display the user's current roles and permissions within the UI, adapting features or content based on their authorization.
    -   **AI Co-Pilot Role:**
        -   Provide React components for user profile forms and settings.
        -   Assist with integrating with User Profile Service APIs.
        -   Suggest UI patterns for displaying roles/permissions and conditional rendering.
    -   **Expected Outcome:** Web frontend allows users to manage their profile and visually indicates their roles/permissions.

---

#### **Phase 4: Billing, Subscriptions & Payment Gateway Integration**

-   **Goal:** Introduce a new microservice dedicated to handling financial aspects, covering subscription plan management, external payment gateway integration, checkout flows, webhooks, and the corresponding frontend UIs.
-   **Key Technologies:** NestJS, TypeScript, PostgreSQL, TypeORM, React, Next.js, Stripe (or other payment gateway SDK).

-   **4.1. Billing Microservice Setup & Database Integration**
    -   **Goal:** Create the core structure for the billing service and integrate its data persistence.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-billing` within `modules/billing_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-modules-billing`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-billing` and integrate its service definition into `docker-compose.yaml`.
        -   Integrate the Billing Microservice with PostgreSQL using the shared database module, defining entities for subscription plans, user subscriptions, payments, and invoices.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and entity definitions for billing.
        -   Assist with Dockerfile and Docker Compose integration for the new service.
    -   **Expected Outcome:** Functional Billing Microservice skeleton with PostgreSQL integration, ready for core logic.

-   **4.2. Subscription Plan Management (Backend)**
    -   **Goal:** Develop the backend logic for defining and managing various subscription plans.
    -   **Detailed Steps:**
        -   Implement API endpoints and internal logic within the Billing Microservice for creating, retrieving, updating, and deleting subscription plans (e.g., Free, Pro, Enterprise tiers).
    -   **AI Co-Pilot Role:**
        -   Provide code examples for CRUD operations on subscription plans.
        -   Suggest data models for subscription plan attributes (price, features).
    -   **Expected Outcome:** Billing Microservice supports full management of subscription plans.

-   **4.3. User Subscription Lifecycle Management (Backend)**
    -   **Goal:** Implement backend support for managing active user subscriptions throughout their lifecycle.
    -   **Detailed Steps:**
        -   Develop API endpoints and logic within the Billing Microservice for users to upgrade, downgrade, cancel, pause, and reactivate their subscriptions.
    -   **AI Co-Pilot Role:**
        -   Provide API designs and implementation guidance for subscription lifecycle actions.
        -   Suggest state machine patterns for subscription status.
    -   **Expected Outcome:** Billing Microservice can manage the full lifecycle of user subscriptions.

-   **4.4. Payment Gateway Integration & Webhook Handling**
    -   **Goal:** Integrate with a third-party payment processor and handle payment events asynchronously.
    -   **Detailed Steps:**
        -   Establish the connection and integrate the SDK for the chosen payment gateway (e.g., Stripe) within the Billing Microservice.
        -   Implement API endpoints for initiating payment checkouts (e.g., creating payment sessions, handling payment intents).
        -   Develop secure webhook endpoints in the Billing Microservice to receive and process events from the payment gateway (e.g., `payment_succeeded`, `subscription_updated`), updating internal subscription statuses and payment records.
    -   **AI Co-Pilot Role:**
        -   Provide code examples for Stripe SDK integration (e.g., `Stripe.checkout.sessions.create`).
        -   Assist with secure webhook handling best practices (signature verification).
    -   **Expected Outcome:** Billing Microservice can process payments via the gateway and handle payment gateway webhooks.

-   **4.5. API Gateway Routing for Billing Service**
    -   **Goal:** Configure the API Gateway to securely route billing-related requests.
    -   **Detailed Steps:**
        -   Implement routing rules in the API Gateway to direct client requests (e.g., `/api/billing/plans`, `/api/billing/checkout`, `/api/billing/webhooks`) to the `saascript-modules-billing` microservice.
    -   **AI Co-Pilot Role:**
        -   Provide API Gateway routing configurations for all billing endpoints.
    -   **Expected Outcome:** API Gateway successfully routes requests to the Billing Microservice.

-   **4.6. Web Frontend Subscription & Billing UI**
    -   **Goal:** Develop user interfaces for subscription plan selection, checkout, and managing billing history.
    -   **Detailed Steps:**
        -   Implement a user interface in the `frontend/web` application to display available subscription plans.
        -   Develop the checkout flow UI, interacting with the Billing Microservice to initiate payments.
        -   Implement UI elements that allow users to manage their existing subscription (e.g., upgrade, downgrade, cancel options).
        -   Create UI sections for users to view their past payment history and access/download invoices.
    -   **AI Co-Pilot Role:**
        -   Provide React components for pricing tables, checkout forms, and subscription management.
        -   Assist with integrating frontend with billing APIs and handling payment redirects.
    -   **Expected Outcome:** Users can view plans, subscribe, manage their subscriptions, and view billing history through the web frontend.

---

#### **Phase 5: Dashboard, Analytics & Reporting**

-   **Goal:** Initiate the development of the administrative frontend, integrate comprehensive analytics tracking (including frontend behavioral data), and develop various reporting features through dedicated analytics service and the implementation of key administrative UI screens for user, billing, audit log, and system management.
-   **Key Technologies:** NestJS, TypeScript, React, Next.js, PostgreSQL (for some analytics data or Admin UI data), MongoDB/ClickHouse (for analytics), PostHog (for frontend analytics SDK).

-   **5.1. Admin Frontend Setup & Tooling**
    -   **Goal:** Establish the foundational structure and development environment for the dedicated administrative application.
    -   **Detailed Steps:**
        -   Create the basic project structure for `saascript-frontend-admin` within `frontend/admin/`.
        -   Configure essential development tooling for `frontend/admin`, including Tailwind CSS, ESLint, and Jest (with code coverage).
        -   Create a Dockerfile for `saascript-frontend-admin` and integrate its service definition into `docker-compose.yaml`.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and configuration files for the admin frontend.
        -   Assist with Dockerfile and Docker Compose integration for the admin frontend.
    -   **Expected Outcome:** Basic, runnable skeleton for the Admin Frontend with configured development and testing tools.

-   **5.2. Analytics Microservice Development & Data Store**
    -   **Goal:** Create a backend service for collecting and processing analytics data, and connect it to a suitable data store.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-analytics` within `modules/analytics_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for the `saascript-modules-analytics`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-analytics` and integrate its service definition into `docker-compose.yaml`.
        -   Connect the Analytics Microservice to a suitable data store optimized for analytical workloads (e.g., MongoDB for flexible schemaless data, or ClickHouse for high-performance time-series data).
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton for Analytics Service.
        -   Suggest database integration code for MongoDB/ClickHouse.
        -   Assist with Dockerfile and Docker Compose integration.
    -   **Expected Outcome:** Functional Analytics Microservice skeleton with integrated data store, ready for event processing.

-   **5.3. Backend Event Tracking & Frontend Behavioral Analytics**
    -   **Goal:** Instrument core services and the web frontend to emit and track events for analytics.
    -   **Detailed Steps:**
        -   Modify relevant core services (Auth, Projects, Billing) to emit key events and structured logs (e.g., `user.registered`, `project.created`, `payment.succeeded`) that can be consumed by the Analytics service.
        -   Integrate a frontend analytics SDK (e.g., PostHog) into the `frontend/web` application to track detailed user behavior, engagement, and frontend-specific events (e.g., page views, button clicks, form interactions).
    -   **AI Co-Pilot Role:**
        -   Provide code examples for emitting structured events from NestJS services.
        -   Assist with PostHog SDK integration and event tracking setup in Next.js.
        -   Suggest key events to track for a SaaS application.
    -   **Expected Outcome:** Core services emit analytics events, and the web frontend tracks user behavior, feeding data into the analytics pipeline.

-   **5.4. Admin Authentication & Dashboard UI**
    -   **Goal:** Implement secure login for administrators and a basic system overview dashboard.
    -   **Detailed Steps:**
        -   Develop the login and session management functionality specifically for admin users in the `frontend/admin` application, leveraging existing authentication services but with elevated permissions (RBAC).
        -   Develop the main admin dashboard view in the `frontend/admin` to monitor system health, user activity, and display basic reports/metrics, potentially consuming initial data from the Analytics service and other microservices.
    -   **AI Co-Pilot Role:**
        -   Provide React components for Admin login and dashboard.
        -   Assist with secure admin authentication flows.
        -   Suggest initial dashboard metrics and visualization components.
    -   **Expected Outcome:** Admins can securely log in and access a basic system overview dashboard.

-   **5.5. Admin User Management UI**
    -   **Goal:** Provide administrators with a comprehensive interface to manage user accounts.
    -   **Detailed Steps:**
        -   Develop the administrative user interface within the `frontend/admin/` application for listing, searching, filtering, viewing/editing user details, assigning/revoking roles, and activating/deactivating user accounts.
    -   **AI Co-Pilot Role:**
        -   Provide React components for user tables, search, filters, and user detail forms.
        -   Assist with integrating with backend user management APIs.
    -   **Expected Outcome:** Admins can fully manage user accounts through a dedicated UI.

-   **5.6. Admin Subscription & Billing Management UI**
    -   **Goal:** Enable administrators to view and manage user subscriptions and billing information.
    -   **Detailed Steps:**
        -   Develop the administrative user interface within the `frontend/admin/` application for viewing and managing user subscriptions, payment statuses, and billing history, interacting with the Billing Microservice.
    -   **AI Co-Pilot Role:**
        -   Provide React components for subscription lists, payment history tables, and management forms.
        -   Assist with integrating with billing management APIs.
    -   **Expected Outcome:** Admins can oversee and manage all aspects of user subscriptions and billing.

-   **5.7. Admin System Configuration UI**
    -   **Goal:** Create an interface for administrators to manage global application settings.
    -   **Detailed Steps:**
        -   Develop an initial administrative user interface within the `frontend/admin/` application to manage global application settings and configurations.
    -   **AI Co-Pilot Role:**
        -   Provide React components for configuration forms.
        -   Suggest API design for system configuration settings.
    -   **Expected Outcome:** Admins have a basic UI to modify global application settings.

-   **5.8. User Dashboard Design & Metrics Display**
    -   **Goal:** Enhance the main user dashboard with comprehensive data and analytics visualizations.
    -   **Detailed Steps:**
        -   Design and implement an intuitive, data-rich dashboard for end-users in the main web frontend (`frontend/web/`) to display their relevant data and activity insights.
        -   Integrate charts and data visualizations on the user dashboard, consuming aggregated data or insights from the Analytics Microservice via the API Gateway, complemented by frontend behavioral data.
    -   **AI Co-Pilot Role:**
        -   Suggest dashboard layouts and data visualization libraries (e.g., Recharts, Chart.js).
        -   Assist with integrating dashboard components with backend analytics APIs.
    -   **Expected Outcome:** Users have a comprehensive, data-rich dashboard displaying their relevant activity and insights.

---

#### **Phase 6: Integrations & Extensibility**

-   **Goal:** Make the platform highly extensible and adaptable by providing robust public APIs for external integration, implementing a versatile webhook system, establishing a dynamic Feature Flags/Remote Config system, and integrating Internationalization (i18n) and Localization (l10n) capabilities.
-   **Key Technologies:** NestJS, TypeScript, PostgreSQL, TypeORM, React, Next.js, Redis, `kafkajs`/`amqplib` (for internal events used by webhooks), `react-i18next`.

-   **6.1. Public API Endpoints & API Key Management**
    -   **Goal:** Expose secure, versioned API endpoints for external applications and implement a system for managing access credentials.
    -   **Detailed Steps:**
        -   Expand the API Gateway to expose a secure, versioned set of API endpoints specifically for external applications or third-party integrations, allowing controlled access to SaaScript's core functionalities.
        -   Develop functionality within the API Gateway (or a dedicated microservice if preferred for scalability) to generate, revoke, and manage API keys for authenticating external integrations, providing secure access control.
    -   **AI Co-Pilot Role:**
        -   Suggest API versioning strategies and security considerations for public APIs.
        -   Provide code examples for API key generation, storage, and validation.
    -   **Expected Outcome:** SaaScript provides a secure, managed public API for integrations.

-   **6.2. Feature Flags/Remote Config System**
    -   **Goal:** Implement a system to dynamically control application features and behavior without redeploying code.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-feature-flags` within `modules/feature_flags_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for `saascript-modules-feature-flags`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-feature-flags` and integrate its service definition into `docker-compose.yaml`.
        -   Develop API endpoints within the Feature Flag Microservice to manage (create, read, update, delete) feature flag states, storing them in Redis for fast access.
        -   Integrate a Feature Flag client library into relevant backend microservices (`saascript-core-services`), allowing them to query feature flag states at runtime to control backend functionality and routing.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and Redis integration code for the Feature Flag service.
        -   Suggest API designs for feature flag management.
        -   Provide client-side integration examples for checking flag states in backend services.
    -   **Expected Outcome:** A functional Feature Flag service is deployed, allowing backend services to dynamically control functionality based on flag states.

-   **6.3. Webhooks Microservice & Core Logic**
    -   **Goal:** Create a dedicated service for managing and dispatching outgoing webhooks to external systems.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-webhooks` within `modules/webhooks_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for `saascript-modules-webhooks`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-webhooks` and integrate its service definition into `docker-compose.yaml`.
        -   Connect the Webhooks Microservice to the shared PostgreSQL database for storing webhook configurations, subscriptions, and delivery logs.
        -   Develop the logic for users to subscribe to specific events and register their webhook URLs with the Webhooks Microservice.
        -   Implement the core functionality for sending outgoing webhook payloads to registered URLs, including robust retry mechanisms for failed deliveries.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton, PostgreSQL entity definitions, and core webhook dispatch logic.
        -   Suggest robust retry strategies and error handling for webhooks.
    -   **Expected Outcome:** A functional Webhooks Microservice capable of managing subscriptions and dispatching events with retry logic.

-   **6.4. Event Publishing for Webhooks**
    -   **Goal:** Enable core services to publish events that the Webhooks Microservice can consume and dispatch.
    -   **Detailed Steps:**
        -   Modify relevant core microservices (e.g., Auth, Projects, Billing) to publish specific events (e.g., `user.created`, `project.updated`, `payment.succeeded`) to a shared messaging queue (like RabbitMQ or Kafka, which will be formally integrated in Phase 8) that the Webhooks Microservice can consume.
    -   **AI Co-Pilot Role:**
        -   Provide code examples for event publishing from core services to message queues.
        -   Suggest event payload structures.
    -   **Expected Outcome:** Core services publish events consumed by the Webhooks Microservice for external notification.

-   **6.5. Web Frontend Integrations UI**
    -   **Goal:** Provide user interfaces for managing API keys, configuring webhooks, and controlling features via flags.
    -   **Detailed Steps:**
        -   Add a user interface within the main web frontend (`frontend/web/`) for users to generate, view, and revoke their API keys, interacting with the API Gateway's management endpoints.
        -   Add a user interface within the main web frontend (`frontend/web/`) for users to configure and manage their webhook subscriptions, interacting with the Webhooks Microservice via the Gateway.
        -   Integrate the Feature Flag client into the `frontend/web` application, allowing UI elements, features, and behaviors to be dynamically controlled based on feature flag states retrieved from the backend.
    -   **AI Co-Pilot Role:**
        -   Provide React components for API key and webhook management forms.
        -   Assist with integrating Feature Flag client in Next.js and conditional rendering of UI.
    -   **Expected Outcome:** Web frontend allows users to manage API keys, configure webhooks, and experiences dynamic UI based on feature flags.

-   **6.6. Internationalization (i18n) and Localization (l10n)**
    -   **Goal:** Prepare the application for multiple languages and regional specificities.
    -   **Detailed Steps:**
        -   Implement a robust internationalization library (e.g., `react-i18next`) into the `frontend/web` application.
        -   Establish a process for managing translation files and locale-specific content (e.g., currency formats, date formats).
    -   **AI Co-Pilot Role:**
        -   Provide initial setup guidance for `react-i18next` in a Next.js app.
        -   Suggest strategies for translation file management and dynamic content loading.
    -   **Expected Outcome:** Web frontend is capable of supporting multiple languages and locales.

---

#### **Phase 7: Performance Optimization & Scalability**

-   **Goal:** Optimize application performance, ensure scalability under load, and refine resource utilization across all services.
-   **Key Technologies:** NestJS, TypeScript, PostgreSQL, TypeORM, Redis, RabbitMQ/Apache Kafka (existing messaging infrastructure), `k6` (for load testing), APM tools (e.g., Prometheus/Grafana, or specialized APM agents).

-   **7.1. Performance Monitoring & Metrics Implementation**
    -   **Goal:** Integrate monitoring tools and add custom metrics to gather performance data across the microservices.
    -   **Detailed Steps:**
        -   Implement application performance monitoring (APM) tools or libraries within all microservices.
        -   Add custom metrics (e.g., request latency, error rates, database query times) to relevant service endpoints.
    -   **AI Co-Pilot Role:**
        -   Suggest APM libraries for NestJS and how to instrument code for metrics.
        -   Provide examples of common metrics to collect.
    -   **Expected Outcome:** Microservices are instrumented for performance monitoring, collecting key metrics.

-   **7.2. Database Query Optimization & Indexing**
    -   **Goal:** Improve data retrieval speed by optimizing PostgreSQL queries and ensuring proper indexing.
    -   **Detailed Steps:**
        -   Analyze frequently executed PostgreSQL queries across all services.
        -   Create or optimize database indexes based on query patterns and performance bottlenecks identified.
        -   Refactor inefficient SQL queries or ORM usages for better performance.
    -   **AI Co-Pilot Role:**
        -   Guide on using database performance analysis tools.
        -   Suggest common indexing strategies and query optimization techniques.
    -   **Expected Outcome:** PostgreSQL database queries are optimized, and appropriate indexes are in place, leading to faster data retrieval.

-   **7.3. Caching Strategies with Redis**
    -   **Goal:** Leverage Redis to cache frequently accessed data and reduce database load.
    -   **Detailed Steps:**
        -   Identify hot data or frequently accessed lookup tables across various microservices (e.g., user profiles, project details, configuration settings).
        -   Implement caching layers using the shared Redis module to store and retrieve this data, reducing direct database reads.
    -   **AI Co-Pilot Role:**
        -   Suggest caching patterns (e.g., cache-aside, write-through).
        -   Provide code examples for Redis caching in NestJS.
    -   **Expected Outcome:** Redis caching is implemented for performance-critical data, reducing database load.

-   **7.4. Asynchronous Processing Refactoring**
    -   **Goal:** Convert blocking or heavy tasks into asynchronous processes to improve responsiveness and scalability.
    -   **Detailed Steps:**
        -   Identify long-running, CPU-intensive, or I/O-bound tasks within any microservice (e.g., report generation, complex data processing).
        -   Refactor these tasks to be processed asynchronously using the existing RabbitMQ (for task queuing) or Kafka (for event-driven processing) infrastructure.
    -   **AI Co-Pilot Role:**
        -   Help identify suitable candidates for asynchronous processing.
        -   Provide architectural patterns for asynchronous task offloading.
    -   **Expected Outcome:** Heavy tasks are processed asynchronously, improving service responsiveness and overall system throughput.

-   **7.5. Load Testing & Benchmarking**
    -   **Goal:** Conduct rigorous testing to ensure the application can handle expected user traffic and identify bottlenecks.
    -   **Detailed Steps:**
        -   Define key API endpoints and critical user flows for load testing.
        -   Write load testing scripts using a tool like `k6` to simulate various user loads (e.g., concurrent users, requests per second).
        -   Execute load tests against the deployed microservices (initially in a development or staging environment).
        -   Analyze test results to identify performance bottlenecks, breaking points, and measure system capacity.
    -   **AI Co-Pilot Role:**
        -   Assist in drafting `k6` test scripts based on API specifications.
        -   Suggest realistic load scenarios and user behavior patterns.
        -   Help interpret load test results and identify potential causes of bottlenecks.
    -   **Expected Outcome:** Validated performance and scalability of core microservices under various load conditions, identifying areas for optimization.

-   **7.6. Service Configuration & Resource Fine-tuning**
    -   **Goal:** Optimize resource allocation for containers and internal service configurations based on performance insights.
    -   **Detailed Steps:**
        -   Adjust CPU and memory resource limits for Docker containers (and future Kubernetes deployments) based on load test results.
        -   Fine-tune internal service configurations (e.g., connection pool sizes, thread counts) to optimize resource utilization.
    -   **AI Co-Pilot Role:**
        -   Suggest optimal resource limits based on performance data.
        -   Guide on adjusting common NestJS/Node.js configuration parameters for performance.
    -   **Expected Outcome:** Services are fine-tuned for optimal resource utilization, improving efficiency and stability.

-   **7.7. Frontend Performance Optimizations**
    -   **Goal:** Improve client-side performance of the main web frontend for a better user experience.
    -   **Detailed Steps:**
        -   Implement frontend optimizations such as code splitting, lazy loading of components and routes.
        -   Optimize image assets (compression, appropriate formats, responsive images).
        -   Implement critical CSS techniques to speed up initial page render.
        -   Minimize JavaScript bundle sizes and optimize asset delivery.
    -   **AI Co-Pilot Role:**
        -   Suggest Next.js specific performance optimization techniques.
        -   Provide guidance on image optimization tools and strategies.
        -   Assist with implementing code splitting and lazy loading.
    -   **Expected Outcome:** Web frontend delivers a fast, smooth, and highly responsive user experience.

---

#### **Phase 8: Messaging & Asynchronous Processing (RabbitMQ & Apache Kafka)**

-   **Goal:** Integrate robust messaging queues (RabbitMQ) for asynchronous task handling and event streaming platforms (Apache Kafka) for decoupled event propagation across microservices. This includes setting up the necessary infrastructure, creating shared messaging libraries, and implementing dedicated Notifications and Audit Log microservices.
-   **Key Technologies:** NestJS, TypeScript, RabbitMQ, Apache Kafka, `amqplib`, `kafkajs`, PostgreSQL (for Audit Log persistence).

-   **8.1. Local Messaging Infrastructure Setup**
    -   **Goal:** Configure and provision local instances of RabbitMQ and Apache Kafka for development.
    -   **Detailed Steps:**
        -   Add `rabbitmq` service definition to `docker-compose.yaml`.
        -   Add `zookeeper` and `kafka` service definitions to `docker-compose.yaml` for a local Kafka cluster.
    -   **AI Co-Pilot Role:**
        -   Generate `docker-compose.yaml` definitions for RabbitMQ, Zookeeper, and Kafka.
        -   Provide instructions for verifying local broker/cluster health.
    -   **Expected Outcome:** Local RabbitMQ and Kafka instances are running and accessible within the Docker Compose environment.

-   **8.2. Shared Messaging Modules**
    -   **Goal:** Create reusable NestJS modules for consistent integration with RabbitMQ and Kafka.
    -   **Detailed Steps:**
        -   Develop a NestJS module within `modules/libs/messaging/rabbitmq/` for common RabbitMQ client configuration, connection logic, producers, and consumers.
        -   Develop a NestJS module within `modules/libs/messaging/kafka/` for common Kafka client configuration, connection logic, producers, and consumers.
    -   **AI Co-Pilot Role:**
        -   Provide NestJS module structures and code examples for `amqplib` and `kafkajs` integration.
        -   Suggest best practices for message serialization/deserialization.
    -   **Expected Outcome:** Reusable `saascript-libs-messaging` modules for RabbitMQ and Kafka are available for inter-service communication.

-   **8.3. Notifications Microservice Development & RabbitMQ Integration**
    -   **Goal:** Create a new service to handle user notifications asynchronously via RabbitMQ.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-notifications` within `modules/notifications_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for `saascript-modules-notifications`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-notifications` and integrate its service definition into `docker-compose.yaml`.
        -   Modify the `saascript-modules-auth` service to publish "user registered" and other relevant events to a RabbitMQ queue using the shared RabbitMQ module.
        -   Configure the `saascript-modules-notifications` service to consume "user registered" events from RabbitMQ and simulate sending welcome emails or other notifications.
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and RabbitMQ consumer/producer code.
        -   Assist with Dockerfile and Docker Compose integration for the new service.
        -   Suggest best practices for message acknowledgments, error handling, and dead-letter queues in RabbitMQ.
    -   **Expected Outcome:** Notifications Microservice is deployed, consumes events from Auth via RabbitMQ, and demonstrates asynchronous notification processing.

-   **8.4. Audit Log Microservice Development & Kafka Integration**
    -   **Goal:** Create a dedicated service for centralized audit logging using Apache Kafka for event streaming.
    -   **Detailed Steps:**
        -   Create the foundational NestJS project structure for `saascript-modules-audit-log` within `modules/audit-log_service/`.
        -   Set up Jest (or equivalent) for unit/integration testing for `saascript-modules-audit-log`, including code coverage reporting.
        -   Create a Dockerfile for `saascript-modules-audit-log` and integrate its service definition into `docker-compose.yaml`.
        -   Configure core services (e.g., Auth, User Profile) to publish specific events (e.g., User Registered, Profile Updated, Login Attempt) to a dedicated Kafka topic, leveraging the shared Kafka module.
        -   Configure the `saascript-modules-audit-log` service to consume these audit events from Kafka and store them persistently (e.g., to PostgreSQL or a dedicated audit database for long-term storage).
    -   **AI Co-Pilot Role:**
        -   Generate NestJS project skeleton and Kafka consumer/producer code.
        -   Assist with Dockerfile and Docker Compose integration for the new service.
        -   Help define Kafka topic structures and efficient event payloads.
        -   Suggest strategies for handling high-volume event streams and ensuring data integrity.
    -   **Expected Outcome:** Audit Log Microservice is deployed, consumes events from core services via Kafka, and stores them persistently for centralized audit logging.

-   **8.5. Admin Audit Log Viewer UI**
    -   **Goal:** Provide administrators with a frontend interface to view and filter audit logs.
    -   **Detailed Steps:**
        -   Develop the administrative user interface within the `frontend/admin/` application to view and filter historical user activities and system events, consuming data from the new Audit Log Microservice.
    -   **AI Co-Pilot Role:**
        -   Provide React components for an audit log table with search and filtering capabilities.
        -   Assist with integrating frontend with the Audit Log Microservice API.
    -   **Expected Outcome:** Admins can view and query system-wide audit logs through the admin frontend.

---

#### **Phase 9: Local Kubernetes Deployment (Minikube)**

-   **Goal:** Containerize all SaaScript microservices and deploy them to a local Kubernetes cluster using Minikube, serving as a critical step for understanding and testing the deployment process in a production-like environment.
-   **Key Technologies:** Kubernetes, Minikube, `kubectl`, Dockerfiles (existing), Podman (for Minikube driver).

-   **9.1. Minikube & Kubectl Setup**
    -   **Goal:** Install necessary tools and initialize a local Kubernetes cluster.
    -   **Detailed Steps:**
        -   Install `minikube` and `kubectl` on the local development environment (e.g., Ubuntu).
        -   Start Minikube with the Podman driver: `minikube start --driver podman`.
        -   Verify cluster status using `kubectl get nodes`.
    -   **AI Co-Pilot Role:**
        -   Provide precise installation commands for `minikube` and `kubectl` on Ubuntu.
        -   Guide on `minikube start` command with Podman driver.
        -   Suggest `kubectl` commands to verify cluster health.
    -   **Expected Outcome:** Fully functional local Kubernetes cluster via Minikube is set up and verified.

-   **9.2. Container Image Optimization & Loading for Kubernetes**
    -   **Goal:** Prepare existing Dockerfiles and build/load container images optimized for Kubernetes deployment.
    -   **Detailed Steps:**
        -   Review and optimize existing Dockerfiles for all NestJS microservices (`modules/`) and frontend applications (`frontend/`) to ensure they are production-ready (e.g., multi-stage builds for smaller images, non-root users).
        -   Build container images locally for each service using `podman build -t <image-name>`.
        -   Load these newly built images into Minikube's Docker daemon using `minikube image load <image-name>`.
    -   **AI Co-Pilot Role:**
        -   Provide guidance on Dockerfile best practices for NestJS apps.
        -   Assist with `podman build` and `minikube image load` commands.
    -   **Expected Outcome:** All SaaScript microservices are built into deployable container images, loaded into Minikube's image registry.

-   **9.3. Kubernetes Manifests Creation**
    -   **Goal:** Design and create Kubernetes YAML definitions for all application components.
    -   **Detailed Steps:**
        -   Create `Deployment` manifests for all stateless microservices (Auth, API Gateway, Notification, User Profile, Audit Log, Billing, Project, Feature Flags, Webhooks).
        -   Create `Service` manifests for internal cluster communication and external exposure of relevant services (especially the API Gateway).
        -   Create `PersistentVolumeClaim` (PVC) and `StorageClass` manifests for stateful services like PostgreSQL, Redis, RabbitMQ, and Kafka (if they are to run in Minikube; otherwise, acknowledge external setup).
        -   Create `ConfigMap` manifests for non-sensitive configuration data (e.g., database connection strings without credentials).
        -   Create `Secret` manifests for sensitive environment variables (e.g., database passwords, API keys, JWT secrets), integrating with Minikube's secret management.
    -   **AI Co-Pilot Role:**
        -   Generate boilerplate Kubernetes YAML manifests for each service type (Deployment, Service, PVC, ConfigMap, Secret).
        -   Guide on setting up environment variables within K8s manifests.
        -   Assist with defining resource requests and limits for pods.
    -   **Expected Outcome:** Comprehensive set of Kubernetes YAML manifests (`.yaml` files) is created for all SaaScript services and dependencies.

-   **9.4. Local Kubernetes Deployment & Verification**
    -   **Goal:** Deploy the entire SaaScript application to the local Minikube cluster and verify its functionality.
    -   **Detailed Steps:**
        -   Apply all generated Kubernetes YAML manifests to the Minikube cluster using `kubectl apply -f <filename.yaml>`.
        -   Verify the successful deployment of pods using `kubectl get pods`.
        -   Verify the status of deployments using `kubectl get deployments`.
        -   Verify the availability of services using `kubectl get services`.
        -   Test internal service communication within the Kubernetes cluster.
        -   Access the API Gateway via Minikube's exposed IP and port to ensure external connectivity.
    -   **AI Co-Pilot Role:**
        -   Provide `kubectl` commands for deployment, verification, and debugging (e.g., `logs`, `describe`).
        -   Suggest methods for testing internal service communication.
    -   **Expected Outcome:** All SaaScript microservices are running and communicating within the local Kubernetes cluster, accessible via the API Gateway.

---

#### **Phase 10: Security Hardening & Compliance**

-   **Goal:** Conduct thorough security audits, implement advanced security measures, establish a secure secrets management system, and address compliance requirements across the entire stack.
-   **Key Technologies:** NestJS, TypeScript, Multi-Factor Authentication (MFA) libraries, WAF/DDoS protection services (conceptual), HashiCorp Vault, TLS/SSL, Data Encryption mechanisms.

-   **10.1. Multi-Factor Authentication (MFA) Implementation**
    -   **Goal:** Enhance user account security by adding support for a second verification factor.
    -   **Detailed Steps:**
        -   Implement Multi-Factor Authentication (MFA) (e.g., TOTP, SMS-based) within the `saascript-auth-service`.
        -   Develop the necessary UI in `frontend/web` for MFA enrollment and verification during login.
    -   **AI Co-Pilot Role:**
        -   Provide code examples for MFA integration (e.g., Google Authenticator TOTP).
        -   Suggest secure workflows for MFA setup and recovery.
    -   **Expected Outcome:** MFA is integrated into the authentication process, significantly increasing user account security.

-   **10.2. Advanced DDoS & Bot Protection**
    -   **Goal:** Integrate protective measures at the API Gateway level to defend against denial-of-service attacks and automated bot traffic.
    -   **Detailed Steps:**
        -   Implement strategies or configure tools at the API Gateway (`saascript-gateway`) level to identify and mitigate DDoS attacks and malicious bot activity (e.g., advanced rate limiting beyond simple Redis, IP blacklisting, challenge mechanisms, or integration with external WAFs like Cloudflare).
    -   **AI Co-Pilot Role:**
        -   Suggest common DDoS/bot protection techniques at the API Gateway level.
        -   Provide configuration examples for Nginx or other ingress controllers.
    -   **Expected Outcome:** API Gateway has enhanced protection against DDoS attacks and bot traffic.

-   **10.3. Robust Input Validation & Sanitization**
    -   **Goal:** Strengthen input handling across all microservices to prevent common web vulnerabilities.
    -   **Detailed Steps:**
        -   Review and implement robust input validation and data sanitization logic across all NestJS microservices (`modules/`).
        -   Focus on preventing vulnerabilities such as Cross-Site Scripting (XSS), SQL injection, and command injection by properly sanitizing all user-supplied input.
    -   **AI Co-Pilot Role:**
        -   Suggest validation libraries (e.g., `class-validator`) and sanitization techniques.
        -   Provide code examples for secure input handling in NestJS.
    -   **Expected Outcome:** All microservices robustly validate and sanitize input, significantly reducing injection vulnerabilities.

-   **10.4. HashiCorp Vault Integration for Secrets Management**
    -   **Goal:** Establish a secure, centralized, and dynamic system for managing application secrets.
    -   **Detailed Steps:**
        -   Set up a local instance of HashiCorp Vault (e.g., via Docker/Podman compose) within the `infra/` directory for development.
        -   Configure secret engines (e.g., generic Key-Value store, database credential rotation) within Vault.
        -   Integrate the HashiCorp Vault client library into all relevant microservices (`modules/`).
        -   Configure microservices to dynamically fetch sensitive credentials (e.g., database passwords, API keys, third-party service credentials) from Vault at runtime, reducing static secret exposure.
    -   **AI Co-Pilot Role:**
        -   Provide `docker-compose.yaml` for local Vault setup.
        -   Guide on Vault secret engine configuration.
        -   Assist with code examples for NestJS services to interact with Vault (e.g., using `node-vault` library).
    -   **Expected Outcome:** HashiCorp Vault is set up locally, and microservices are integrated to dynamically fetch secrets, enhancing secrets management security.

-   **10.5. Security Audits & Penetration Testing Preparation**
    -   **Goal:** Prepare for systematic assessment of application security to identify vulnerabilities.
    -   **Detailed Steps:**
        -   Conduct internal security audits of codebases and configurations across all services.
        -   Prepare documentation and environments for potential external penetration testing.
    -   **AI Co-Pilot Role:**
        -   Suggest common security audit checklists and methodologies.
        -   Provide guidance on preparing scope and environment for penetration testing.
    -   **Expected Outcome:** Internal security posture is assessed, and the project is prepared for external security validation.

-   **10.6. Secure Configuration Management**
    -   **Goal:** Ensure all application configurations are managed securely, especially sensitive data.
    -   **Detailed Steps:**
        -   Review and formalize processes for managing all application configurations.
        -   Ensure non-sensitive configurations are managed via ConfigMaps (in Kubernetes) or environment variables, and sensitive data strictly via Secrets/Vault.
    -   **AI Co-Pilot Role:**
        -   Provide best practices for separating configuration from code.
        -   Suggest secure methods for injecting configuration into containers.
    -   **Expected Outcome:** All application configurations are managed securely, with sensitive data isolated.

-   **10.7. Data Encryption (In-transit & At-rest)**
    -   **Goal:** Enforce encryption for all data, both during transmission and while stored.
    -   **Detailed Steps:**
        -   Ensure all inter-service communication and client-to-service communication is encrypted using TLS/SSL (e.g., HTTPS for API Gateway, mTLS for internal services where applicable).
        -   Verify that data stored in PostgreSQL, DynamoDB, and other data stores is encrypted at rest (e.g., disk encryption, database-level encryption features).
    -   **AI Co-Pilot Role:**
        -   Guide on configuring TLS/SSL for NestJS and API Gateway.
        -   Explain database-level encryption features in PostgreSQL/DynamoDB.
    -   **Expected Outcome:** All data is encrypted both in transit and at rest, enhancing data security.

-   **10.8. Comprehensive Logging & Alerting for Security Events**
    -   **Goal:** Enhance logging to capture security-relevant events and set up automated alerts for suspicious activities.
    -   **Detailed Steps:**
        -   Expand logging mechanisms across all services to capture detailed security-related events (e.g., failed login attempts, unauthorized access attempts, data modification alerts).
        -   Integrate these security logs into the centralized logging solution (from Phase 11) and configure automated alerts for critical security incidents.
    -   **AI Co-Pilot Role:**
        -   Suggest security-relevant log fields and formats.
        -   Guide on integrating security logs with centralized logging/SIEM.
        -   Assist with setting up alerts based on security log patterns.
    -   **Expected Outcome:** Robust logging of security events and automated alerting are in place for proactive threat detection.

-   **10.9. Privacy Policy & Terms of Service Review**
    -   **Goal:** Ensure legal documentation aligns with implemented security and data handling practices.
    -   **Detailed Steps:**
        -   Review and update the project's legal documentation (`docs/`) regarding data handling, privacy policy, and terms of service to reflect all implemented security and compliance measures.
    -   **AI Co-Pilot Role:**
        -   Highlight key areas in documentation that need updating based on implemented features (e.g., data retention, user rights).
        -   Suggest best practices for privacy policy content.
    -   **Expected Outcome:** Legal documentation is reviewed and updated, reflecting the system's security and privacy posture.

---

#### **Phase 11: Deployment, Monitoring & Production Readiness**

-   **Goal:** Finalize deployment strategies, establish robust monitoring and alerting, and prepare all services for a successful production launch, ensuring stability, observability, and recoverability.
-   **Key Technologies:** CI/CD (GitHub Actions or similar), Cloud Providers (AWS/GCP/Azure), Managed Kubernetes (EKS/GKE/AKS), Prometheus, Grafana, ELK Stack/Loki, Cloud-managed database services, Backup solutions.

-   **11.1. Staging Environment Setup**
    -   **Goal:** Create a testing environment that closely mirrors the production setup for final comprehensive testing.
    -   **Detailed Steps:**
        -   Provision a cloud-based staging environment (e.g., a smaller Kubernetes cluster or dedicated VMs) that replicates the production architecture as closely as possible.
        -   Deploy all SaaScript microservices and frontends to this staging environment.
    -   **AI Co-Pilot Role:**
        -   Guide on setting up a cost-effective staging environment in a chosen cloud provider.
        -   Suggest deployment strategies for the staging environment.
    -   **Expected Outcome:** A fully functional staging environment that mirrors production is deployed and ready for testing.

-   **11.2. CI/CD Pipelines Implementation**
    -   **Goal:** Automate the build, test, and deployment processes for all services to enable consistent and rapid releases.
    -   **Detailed Steps:**
        -   Configure CI/CD pipelines (e.g., using GitHub Actions) for each microservice and frontend application.
        -   Implement automated steps for linting, running unit/integration tests on code pushes, building Docker images, and pushing images to a container registry (e.g., GitHub Container Registry, ECR, GCR).
        -   (Future) Set up automated deployment steps to the staging Kubernetes cluster.
    -   **AI Co-Pilot Role:**
        -   Generate initial GitHub Actions workflow YAML files for a monorepo structure.
        -   Assist with defining build/test/push steps for various services.
        -   Guide on integrating with container registries.
    -   **Expected Outcome:** Automated build, test, and container image publishing pipelines are in place for all services.

-   **11.3. Centralized Logging Solution**
    -   **Goal:** Establish a production-grade centralized logging system to collect, store, and analyze logs from all services.
    -   **Detailed Steps:**
        -   Deploy and configure a centralized logging solution (e.g., ELK Stack - Elasticsearch, Logstash, Kibana; or Loki with Grafana) in the cloud environment.
        -   Configure all microservices and frontend applications to forward their logs to this centralized system.
    -   **AI Co-Pilot Role:**
        -   Suggest deployment architectures for ELK/Loki in the cloud.
        -   Provide guidance on configuring log agents (e.g., Filebeat, Promtail).
    -   **Expected Outcome:** All service logs are centrally collected, stored, and available for analysis and troubleshooting.

-   **11.4. Comprehensive Monitoring & Alerting**
    -   **Goal:** Deploy and configure a robust system for collecting metrics and setting up automated alerts for critical issues.
    -   **Detailed Steps:**
        -   Implement a metrics collection system (e.g., Prometheus) with exporters for all microservices and infrastructure components in the cloud.
        -   Set up visualization dashboards (e.g., Grafana) to monitor key performance indicators (KPIs) like CPU, memory, request rates, latency, and error rates.
        -   Configure automated alerts for critical thresholds and anomalies, integrating with notification systems (e.g., PagerDuty, Slack, email).
    -   **AI Co-Pilot Role:**
        -   Suggest Prometheus/Grafana setup for Kubernetes.
        -   Provide examples of critical alerts for microservices.
        -   Guide on dashboard creation and metric interpretation.
    -   **Expected Outcome:** A comprehensive monitoring system is deployed, providing real-time insights and automated alerts for system health and performance.

-   **11.5. Database Backups & Restore Procedures**
    -   **Goal:** Establish automated backup routines and verify data recoverability for all persistent data stores.
    -   **Detailed Steps:**
        -   Configure automated, regularly scheduled database backup routines for PostgreSQL, DynamoDB, and any other persistent data stores using cloud-managed services' features or dedicated tools.
        -   Crucially, periodically test the restore procedures to ensure data integrity and recoverability in case of data loss.
    -   **AI Co-Pilot Role:**
        -   Guide on using cloud provider backup features (e.g., AWS RDS snapshots, DynamoDB point-in-time recovery).
        -   Suggest testing methodologies for restore procedures.
    -   **Expected Outcome:** Automated, verified database backups are in place, ensuring data recoverability.

-   **11.6. Disaster Recovery Plan (DRP)**
    -   **Goal:** Develop a comprehensive plan for recovering from major outages or catastrophic failures.
    -   **Detailed Steps:**
        -   Document a step-by-step disaster recovery plan outlining procedures for various failure scenarios (e.g., regional outage, major data corruption).
        -   Define roles, responsibilities, and communication protocols for the DRP.
    -   **AI Co-Pilot Role:**
        -   Assist in outlining common DRP components and steps.
        -   Suggest considerations for different disaster scenarios.
    -   **Expected Outcome:** A comprehensive and documented disaster recovery plan is established.

-   **11.7. Final Production Infrastructure Setup**
    -   **Goal:** Configure and provision the chosen cloud provider's infrastructure specifically for the production deployment.
    -   **Detailed Steps:**
        -   Provision a managed Kubernetes cluster (e.g., AWS EKS, GCP GKE, Azure AKS) in the chosen cloud provider.
        -   Set up cloud-managed database services (e.g., AWS RDS PostgreSQL, DynamoDB, ElastiCache Redis, Amazon MQ RabbitMQ, MSK Kafka).
        -   Configure production-grade ingress controllers (e.g., Nginx Ingress, AWS ALB/GCP Load Balancer) for external access.
        -   Implement necessary networking, security groups, and IAM roles for least privilege access.
    -   **AI Co-Pilot Role:**
        -   Provide high-level architecture designs for production deployments on selected cloud providers.
        -   Suggest specific cloud services for each component.
        -   Guide on secure network configurations.
    -   **Expected Outcome:** All production infrastructure components are provisioned, configured, and ready for application deployment.

-   **11.8. Final Performance & Security Benchmarks**
    -   **Goal:** Conduct last-round rigorous tests to ensure all services meet performance targets and adhere to security standards before production rollout.
    -   **Detailed Steps:**
        -   Perform final comprehensive load tests against the staging environment (or a dedicated pre-production environment) to validate scalability under expected production loads.
        -   Conduct final internal security checks, vulnerability scans, and potentially a mini-penetration test to catch any last-minute issues.
    -   **AI Co-Pilot Role:**
        -   Assist with refining load test scenarios for production readiness.
        -   Suggest final security checklist items.
    -   **Expected Outcome:** Final validation of performance and security readiness before production launch.

-   **11.9. Production Operations Runbook**
    -   **Goal:** Document detailed procedures for routine production operations, troubleshooting, and incident response.
    -   **Detailed Steps:**
        -   Create a comprehensive runbook for the operations team, covering common tasks (e.g., deploying new versions, scaling services, handling alerts), detailed troubleshooting guides for each service, and incident response procedures.
        -   Define on-call rotations and escalation paths.
    -   **AI Co-Pilot Role:**
        -   Assist in structuring the runbook content.
        -   Suggest standard operating procedures for a SaaS application.
    -   **Expected Outcome:** A complete production operations runbook is available, enabling smooth operations and incident management.

---

#### **Phase 12: Future Enhancements & Strategic Growth**

-   **Goal:** Outline next steps for expanding SaaScript's capabilities, enhancing user experience, improving security posture with advanced tooling, and integrating with broader enterprise ecosystems, positioning the product for long-term growth and stability.
-   **Key Technologies:** Storybook, SAST/DAST tools (e.g., SonarQube, Snyk, OWASP ZAP), Data Warehousing solutions, ETL tools, Message Queues (existing), CRM/Support System SDKs.

-   **12.1. UI Component Documentation (Storybook)**
    -   **Goal:** Implement a dedicated documentation system for frontend components to streamline development and ensure consistency.
    -   **Detailed Steps:**
        -   Integrate Storybook (or a similar tool) into the `frontend/web` and `frontend/admin` monorepo structure.
        -   Develop stories for all reusable React components, demonstrating their various states and props.
        -   Establish a process for maintaining and updating component documentation alongside development.
    -   **AI Co-Pilot Role:**
        -   Provide guidance on Storybook setup and integration with Next.js applications.
        -   Suggest best practices for documenting React components and their props.
    -   **Expected Outcome:** A comprehensive, interactive documentation portal for reusable UI components is established, improving developer efficiency and design consistency.

-   **12.2. Advanced Security Tooling & Processes**
    -   **Goal:** Further enhance SaaScript's security posture with advanced static/dynamic analysis tools and formal incident response planning.
    -   **Detailed Steps:**
        -   Integrate SAST (Static Application Security Testing) tools (e.g., SonarQube's deeper SAST features, Snyk Code) into the CI/CD pipelines to automatically scan code for vulnerabilities.
        -   Explore integrating DAST (Dynamic Application Security Testing) tools (e.g., OWASP ZAP) for runtime vulnerability scanning.
        -   Plan for and potentially conduct formal external security audits or penetration testing as the product matures.
        -   Draft and formalize an initial incident response and security vulnerability disclosure plan.
    -   **AI Co-Pilot Role:**
        -   Provide overview of SAST/DAST tools and their integration points in CI/CD.
        -   Assist in outlining steps for incident response planning and vulnerability disclosure.
    -   **Expected Outcome:** Automated security analysis integrated into the development workflow, and a robust incident response plan is in place.

-   **12.3. Advanced Data Management & Governance**
    -   **Goal:** Establish formal policies and mechanisms for data lifecycle, privacy compliance, and a strategic data analytics pipeline for business intelligence.
    -   **Detailed Steps:**
        -   Define and implement data retention and archival policies for different types of data (e.g., user activity, transactional data, logs).
        -   Implement technical features to support data privacy compliance requests (e.g., user data export, "right to be forgotten" workflows) across all microservices and databases.
        -   Outline a strategy for a future data analytics pipeline, potentially involving data warehousing and ETL (Extract, Transform, Load) processes for deeper business intelligence (distinct from real-time operational analytics).
    -   **AI Co-Pilot Role:**
        -   Explain common data governance principles (e.g., GDPR, CCPA implications) relevant to data lifecycle management.
        -   Suggest architectural patterns for data warehousing and ETL processes.
        -   Assist with high-level design for data export/deletion mechanisms.
    -   **Expected Outcome:** A structured approach to data management, comprehensive privacy compliance features, and a roadmap for advanced business intelligence are defined.

-   **12.4. Comprehensive User Lifecycle Management & In-App Messaging**
    -   **Goal:** Enhance the user journey from initial sign-up through their entire lifecycle, including advanced onboarding, comprehensive offboarding, and enriched in-app communication.
    -   **Detailed Steps:**
        -   Design and implement guided onboarding flows within the `frontend/web` application for new users, potentially using product tours or interactive tutorials.
        -   Define and implement the full technical and administrative processes for user account deactivation and complete deletion across all relevant services and data stores.
        -   Explore integrating advanced in-app messaging or notification systems (beyond basic email/SMS from Phase 8) for targeted user engagement (e.g., push notifications, in-app pop-ups).
    -   **AI Co-Pilot Role:**
        -   Suggest best practices for user onboarding UI/UX and product tour libraries.
        -   Outline secure and compliant steps for user account deletion across a microservices architecture.
        -   Provide high-level architecture for in-app messaging integration.
    -   **Expected Outcome:** A seamless and secure user lifecycle experience is implemented, complemented by enhanced in-app communication.

-   **12.5. Customer Support Tools & CRM Integration**
    -   **Goal:** Streamline customer support operations and integrate with customer relationship management systems for a unified customer view.
    -   **Detailed Steps:**
        -   Integrate the `frontend/admin` application with a third-party customer support ticketing system (e.g., Zendesk, Freshdesk, HubSpot Service Hub) to enable direct support case management from the admin dashboard.
        -   Explore CRM (Customer Relationship Management) integration to centralize customer data across sales, marketing, and support, providing a unified customer view.
    -   **AI Co-Pilot Role:**
        -   Suggest common integration patterns for support/CRM systems (e.g., API integration, webhooks).
        -   Outline benefits of various platforms and typical data synchronization needs.
    -   **Expected Outcome:** Enhanced customer support capabilities and a centralized customer data view are achieved through third-party integrations.

### 2.7. SaaScript Project Management Guide: Collaborative Development with AI

This section outlines our project management methodology, designed to facilitate efficient collaboration between the Project Lead (VENKATESH C V) and the AI Co-Developer (Gemini Model), maximizing productivity while maintaining quality.

#### 2.7.1. AI-Assisted Agile Methodology

- **Principle:** We adopt an agile-inspired, iterative approach, leveraging AI at every stage to accelerate development.
- **Key Characteristics:**
  - **Iterative Development:** Work is broken into small, manageable cycles (e.g., phases, epics, and individual tasks).
  - **Flexibility & Adaptability:** The plan is a living document, open to refinement based on new insights, challenges, or changes in vision.
  - **Continuous Feedback:** Regular check-ins and direct feedback are paramount.
  - **Transparency:** All plans, code, and documentation are shared openly.

#### 2.7.2. Workflow Execution

- **Model:** Our workflow will largely follow a **Kanban-like system**, focusing on a continuous flow of tasks rather than fixed-length sprints.
- **Task Definition & Breakdown:**
  - **Phases:** High-level groupings of related Epics (e.g., "Auth Microservice").
  - **Epics:** Large features or logical components within a phase, requiring multiple GitHub Issues (e.g., "JWT Strategy & Guards").
  - **GitHub Issues:** The smallest unit of work, defining a single, actionable task with clear goals and acceptance criteria. Each issue will be self-contained and aim to be completed within a reasonable timeframe.
- **Task Tracking:**
  - **Primary Tool:** GitHub Issues and a GitHub Kanban board (or similar project board feature within GitHub) will be used to track the status of all tasks.
  - **Columns (Example):**
    - **To Do**
    - **In Progress**
    - **Review**
    - **Done**
- **Deadlines:** While embracing agility, target deadlines will be set for Phases and Epics to maintain momentum. Daily progress will be communicated.

#### 2.7.3. Collaborative Workflow with AI

- **Task Assignment:** Venkat defines the overall vision, phases, and epics. I (AI) assist in breaking down epics into detailed GitHub Issues and generating content.
- **AI's Role in a Task:**
  1.  **Understanding & Clarification:** I will seek clear understanding of the task, its goal, and any specific constraints or requirements.
  2.  **Brainstorming & Design (if applicable):** For new features or complex problems, I will offer architectural options, data models, or API designs.
  3.  **Code Generation:** I will generate initial boilerplate code, core logic, or complete components as specified.
  4.  **Documentation Drafting:** I will draft internal documentation (e.g., `README.md` for modules, `docs/ARCHITECTURE.md` updates).
  5.  **Test Case Suggestions:** I will suggest unit and integration test cases relevant to the generated code.
  6.  **Debugging Assistance:** For identified issues, I will help analyze errors, suggest solutions, and trace potential problems.
- **Venkat's Role in a Task:**
  1.  **Vision & Guidance:** Provides overall direction and specific instructions.
  2.  **Review & Refinement:** Critically evaluates AI-generated code, documentation, and suggestions. Provides detailed feedback and requests for iteration. This is a crucial step for quality assurance.
  3.  **Integration & Deployment:** Integrates approved code into the monorepo, manages Git operations, and handles deployment.
  4.  **Testing & Validation:** Performs integration and end-to-end testing, ensuring functionality meets requirements.
  5.  **Final Decision-Making:** Makes all final architectural and implementation decisions.

#### 2.7.4. Communication Strategy

- **Primary Channel:** Our current conversational interface (this chat).
- **Regular Syncs:** Daily check-ins will occur, summarizing progress, identifying blockers, and outlining the next steps.
- **Structured Feedback:** Feedback on AI-generated content will be specific, actionable, and iterative.

### 2.8. SaaScript Development Workflow & Git Strategy

This section defines the standardized development workflow and Git strategy for the SaaScript monorepo, ensuring consistency, maintainability, and effective collaboration.

#### 2.8.1. Overall Workflow Process (AI-Assisted)

Our development workflow is tailored for an AI-assisted monorepo environment, focusing on clear, iterative steps.

1.  **Task Identification & Breakdown:**
    - **Initiator:** Venkat (Project Lead) identifies a feature, bug, or improvement.
    - **Collaboration:** Venkat and AI collaboratively break it down into an Epic, then into granular GitHub Issues. AI helps define scope, sub-tasks, and initial estimates.
2.  **Issue Assignment & Development:**
    - **Assignment:** Issues are assigned to either "AI" or "VENKATESH C V" on the GitHub project board.
    - **AI Development:** If assigned to AI, I generate code, documentation, or suggestions based on the issue's requirements.
    - **Human Development:** If assigned to Venkat, you implement the task.
3.  **Local Implementation & Testing:**
    - Developers (human or AI-assisted) implement the changes locally, following the TDD-first approach where applicable.
    - Comprehensive unit and integration tests are written and pass.
    - Local checks (linting, formatting) are run.
4.  **Version Control (Git):**
    - Changes are committed to a feature branch using Conventional Commits.
    - A Pull Request (PR) is created targeting `develop` (or `main` for hotfixes).
5.  **Code Review & Quality Assurance:**
    - **Primary Reviewer:** Venkat reviews all AI-generated code and human-written code.
    - **Feedback & Iteration:** Review comments are addressed, leading to further commits on the feature branch.
    - Automated CI/CD checks (lint, tests, coverage) must pass.
6.  **Merge & Deployment:**
    - Once approved, the feature branch is merged.
    - Automated deployment to staging/production environments (future CI/CD phases).

#### 2.8.2. Simplified Gitflow Branching Strategy

We will use a simplified Gitflow model adapted for our rapid, AI-assisted development.

- **`main` branch:**
  - **Purpose:** Represents the production-ready code.
  - **Access:** Highly protected. Only merges from `develop` (for releases) or `hotfix-*` branches are allowed.
  - **Commits:** No direct commits.
- **`develop` branch:**
  - **Purpose:** Integrates all completed features and bug fixes. It represents the next release candidate.
  - **Access:** Protected. Direct pushes are discouraged. Only merges from feature branches or hotfix branches.
  - **Commits:** No direct commits.
- **`feature/<feature-name>` branches:**
  - **Purpose:** For all new features, enhancements, or non-urgent bug fixes.
  - **Origin:** Branched off `develop`.
  - **Lifetime:** Short-lived, deleted after merging into `develop`.
  - **Naming Convention:** `feature/auth-jwt-strategy`, `feature/billing-subscription-api`.
- **`bugfix/<bug-description>` branches:**
  - **Purpose:** For urgent bug fixes that don't warrant a hotfix release (i.e., can wait for the next regular release).
  - **Origin:** Branched off `develop`.
  - **Lifetime:** Short-lived, deleted after merging into `develop`.
  - **Naming Convention:** `bugfix/auth-login-issue`, `bugfix/billing-webhook-error`.
- **`hotfix/<hotfix-description>` branches:**
  - **Purpose:** For critical, immediate fixes to production code.
  - **Origin:** Branched directly off `main`.
  - **Lifetime:** Short-lived. Merged back into both `main` (for immediate release) and `develop` (to ensure the fix is in the next regular release).
  - **Naming Convention:** `hotfix/prod-auth-critical-bug`.

#### 2.8.3. Commit Message Conventions (Conventional Commits)

We will use Conventional Commits to maintain a highly readable and automated changelog.

- **Format:** `<type>(<scope>): <description>`
  - **`<type>` (Mandatory):**
    - `feat`: A new feature (correlates with `minor` in SemVer).
    - `fix`: A bug fix (correlates with `patch` in SemVer).
    - `docs`: Documentation only changes.
    - `style`: Changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.).
    - `refactor`: A code change that neither fixes a bug nor adds a feature.
    - `perf`: A code change that improves performance.
    - `test`: Adding missing tests or correcting existing tests.
    - `chore`: Other changes that don't modify src or test files (e.g., build process, auxiliary tools, libraries).
    - `build`: Changes that affect the build system or external dependencies (e.g., npm, yarn, gulp).
    - `ci`: Changes to our CI configuration files and scripts (e.g., GitHub Actions).
  - **`<scope>` (Optional, but recommended for microservices):** The module or area of the codebase affected (e.g., `auth`, `api-gateway`, `frontend-web`, `billing`).
  - **`<description>` (Mandatory):** A short, imperative, present tense description of the change.
- **Examples:**
  - `feat(auth): Implement user registration endpoint`
  - `fix(billing): Correct webhook processing error`
  - `docs(architecture): Add multi-tenancy strategy section`
  - `chore(deps): Update NestJS to v10.0.0`
  - `refactor(user-profile): Improve DTO validation logic`
  - `perf(api-gateway): Optimize rate limiting middleware`

#### 2.8.4. Pull Request (PR) Strategy & Template

All significant changes (features, bug fixes, enhancements) will go through a PR process.

- **Purpose:** Facilitate code review, ensure quality, and serve as a record of changes.
- **PR Creation:**
  - Opened from a `feature/*` or `bugfix/*` branch.
  - Target `develop` (or `main` for hotfixes).
  - Linked to its corresponding GitHub Issue.
- **PR Template (`.github/PULL_REQUEST_TEMPLATE.md`):**

  - A standardized template will guide PR authors to provide necessary context.
  - **Content (Example):**

    ```markdown
    ### Related Issue

    Closes #<issue-number>

    ### Description

    [Provide a clear and concise description of the changes in this PR.]

    ### Changes Made

    - [List key changes, e.g., "Implemented /api/v1/auth/register endpoint"]
    - [Describe any new or modified components, services, or database schema changes.]

    ### How to Test (Manual Steps)

    [Provide clear steps for reviewers to manually test the changes.]

    1. ...
    2. ...

    ### Screenshots (if applicable)

    [Add screenshots or GIFs demonstrating the changes, especially for UI.]

    ### Checklist (Self-Review)

    - [ ] My code follows the project's [code style guidelines](LINK_TO_CODE_STYLE_GUIDELINES).
    - [ ] I have performed a self-review of my own code.
    - [ ] My changes generate no new warnings or errors.
    - [ ] I have added tests that prove my fix is effective or my feature works.
    - [ ] New and existing unit/integration tests pass locally with my changes.
    - [ ] I have updated the documentation where necessary.
    - [ ] My changes are fully covered by tests (check coverage report).

    ### Reviewer Notes

    [Any specific areas you'd like the reviewer to focus on.]
    ```

- **Review Process:**
  - Automated CI/CD checks run upon PR creation/update.
  - Venkat reviews the code, comments, requests changes.
  - AI can assist in preliminary code quality checks (e.g., suggesting improvements, identifying potential bugs).
  - Approval by Venkat is required before merging.

### 2.9. SaaScript Maintenance Guide

This guide outlines the essential processes and considerations for maintaining the SaaScript application, ensuring its long-term stability, security, and performance.

#### 2.9.1. Upgradation & Migration Process

Regular upgrades of dependencies, frameworks, and infrastructure are crucial.

- **Dependency Upgrades (npm packages):**
  - **Process:** Regularly review and update project dependencies. Utilize tools like `npm outdated` and `npm update`. For major version upgrades, review changelogs for breaking changes.
  - **Automation:** Incorporate dependency update checks into CI/CD pipelines (e.g., Dependabot, RenovateBot).
- **Framework Upgrades (NestJS, Next.js):**
  - **Process:** For major framework versions, dedicated upgrade guides are often provided by the framework authors. Follow these meticulously, addressing breaking changes and migrating deprecated features.
  - **Testing:** Thoroughly re-test all affected modules after framework upgrades.
- **Database Migrations (PostgreSQL):**
  - **Process:** Use TypeORM's migration capabilities to manage schema changes.
  - **Workflow:**
    1.  Generate migration files for schema changes.
    2.  Write `up` and `down` scripts for each migration.
    3.  Test migrations locally against development database.
    4.  Ensure roll-back procedures are well-defined and tested.
- **DynamoDB (Schema Evolution):**
  - **Process:** DynamoDB is schemaless at the table level, but schema evolution at the item level requires careful application-side handling. Use versioning within the item structure (e.g., `item_version: 1`) and write code that can handle older data formats.
  - **Backfills:** For significant changes, plan data backfill operations carefully.
- **Container Image Updates:**
  - **Process:** Regularly update base images (e.g., Node.js, Alpine) in Dockerfiles to incorporate security patches and performance improvements.
  - **Rebuild:** Rebuild all service container images after base image updates.
- **Kubernetes Version Upgrades:**
  - **Process:** For local Minikube and future cloud K8s clusters, plan and execute version upgrades. Review Kubernetes release notes for new features, deprecations, and breaking changes.
  - **Tools:** Utilize `minikube update` and `kubectl drain`/`uncordon` for graceful node upgrades.

#### 2.9.2. Ongoing Maintenance Tasks

Beyond upgrades, consistent operational tasks ensure the health of the application.

- **Monitoring & Logging Review:**
  - **Process:** Regularly review dashboards (Grafana), logs (Loki), and error alerts (Sentry) to identify anomalies, performance bottlenecks, or recurring errors.
  - **Action:** Investigate and address issues proactively.
- **Bug Fixing:**
  - **Process:** Prioritize and address bugs identified through monitoring, user reports, or internal testing, following the bugfix branching strategy.
- **Security Patching:**
  - **Process:** Stay informed about security vulnerabilities in dependencies and frameworks. Apply patches promptly.
  - **Automation:** Leverage tools like `npm audit` and integrate security scanning into CI/CD.
- **Performance Tuning:**
  - **Process:** Based on monitoring data and load test results, identify performance bottlenecks (e.g., slow queries, inefficient code, resource contention).
  - **Action:** Optimize code, database queries, and infrastructure configurations.
- **Backup and Restore (Data Management):**
  - **Process:** Implement automated daily/weekly backups for all persistent data stores (PostgreSQL, DynamoDB, Redis data if persistent).
  - **Testing:** Periodically test restore procedures to ensure data recoverability.
- **Documentation Updates:**
  - **Process:** Keep all project documentation (architecture, local dev guide, module READMEs) up-to-date with any changes or new features.
- **Resource Scaling:**
  - **Process:** Adjust Kubernetes replica counts, database sizes, or queue configurations based on observed load and performance.

### 2.10. Comprehensive Documentation & Automation

This section formalizes all project documentation and implements robust "single-command" automation scripts, crucial for efficiency.

#### 2.10.1. Documenting Architecture & Local Dev

- **Goal:** Maintain up-to-date and comprehensive documentation for the project's architecture and local development setup.
- **Detailed Steps:**
  - Update `docs/ARCHITECTURE.md` with detailed diagrams of services, databases, queues, and API Gateway (using Mermaid.js for diagrams).
  - Update `docs/LOCAL_DEVELOPMENT.md` with complete, step-by-step instructions for setting up the entire monorepo with `podman-compose` and Minikube.
  - Create module-specific `README.md` files (e.g., `modules/auth/README.md`) detailing API endpoints, environment variables, and run/test instructions for each microservice.
- **AI Co-Pilot Role:**
  - Generate Mermaid diagrams based on architectural decisions.
  - Write detailed setup instructions for `LOCAL_DEVELOPMENT.md`.
  - Populate module `README.md` templates with relevant information.
- **Expected Outcome:** Comprehensive documentation covering architecture and local development, making onboarding new contributors seamless.

#### 2.10.2. Single-Command Automation Scripts

- **Goal:** Implement root-level npm scripts for common development and operational tasks, enabling a "single-command" workflow.
- **Detailed Steps:**
  - Add root-level npm scripts to `saascript/package.json` for tasks such as:
    - `dev:all`: Starts all services locally via `podman-compose`.
    - `stop:all`: Stops all services locally.
    - `test:all`: Runs tests across all modules.
    - `build:all`: Builds all container images.
    - `k8s:start`: Starts Minikube.
    - `k8s:stop`: Stops Minikube.
    - `k8s:deploy:all`: Applies all Kubernetes manifests.
    - `lint:fix:all`: Automatically fixes linting errors across the monorepo.
    - `format:all`: Formats code consistently across the monorepo.
  - Implement shell scripts in a `scripts/` directory for more complex automation if needed (e.g., a script to load all built images into Minikube, or a health-check script for Kubernetes deployments).
- **AI Co-Pilot Role:**
  - Generate shell script content for various automation tasks.
  - Suggest efficient npm script combinations for composite tasks.
- **Expected Outcome:** A powerful set of single-line commands to manage the entire SaaScript project lifecycle, from development to deployment.

### 2.11. Observability & Monitoring

This section details the implementation of comprehensive logging, tracing, metrics, and error monitoring across both backend and frontend to understand service health and debug issues effectively.

#### 2.11.1. Structured Logging & Distributed Tracing

- **Goal:** Implement consistent structured logging across all NestJS microservices and enable distributed tracing to track requests across service boundaries.
- **Detailed Steps:**
  - In NestJS services, replace default `console.log` with a structured logger (e.g., Winston or Pino) to output logs in a parseable format (JSON).
  - (Optional) Set up a simple Loki/Promtail/Grafana stack locally (via `podman-compose` or Kubernetes manifests) for centralized log aggregation, making it easier to search and analyze logs from all services.
  - Integrate OpenTelemetry for distributed tracing to automatically propagate trace contexts across microservices, allowing visualization of request flows and identification of latency bottlenecks.
- **AI Co-Pilot Role:**
  - Provide code snippets for integrating Winston or Pino with NestJS.
  - Suggest logging best practices, including appropriate log levels and context enrichment.
  - Generate `podman-compose.yaml` definitions for setting up Loki/Promtail/Grafana.
  - Assist with OpenTelemetry integration patterns for NestJS.
- **Expected Outcome:** Consistent, structured logs from all microservices, with distributed tracing enabled for end-to-end request visibility.

#### 2.11.2. Basic Metrics & Monitoring

- **Goal:** Expose key performance metrics from backend services and set up a basic monitoring stack for visualization and alerting.
- **Detailed Steps:**
  - Integrate a metrics library (e.g., `prom-client`) into NestJS services to expose Prometheus-compatible metrics (e.g., request rates, error rates, latencies, CPU/memory usage).
  - Set up a local Prometheus instance (via `podman-compose` or Kubernetes manifests) configured to scrape metrics from the deployed microservices.
  - Set up a local Grafana instance to visualize metrics from Prometheus.
  - Create basic Grafana dashboards for critical operational metrics like CPU utilization, RAM usage, and request rates per service.
- **AI Co-Pilot Role:**
  - Provide code snippets for exposing Prometheus metrics from NestJS applications.
  - Generate Prometheus configuration for scraping targets.
  - Suggest basic Grafana dashboard queries to monitor essential service health indicators.
- **Expected Outcome:** Basic monitoring of service health and performance, providing insights into operational status.

#### 2.11.3. Frontend Error Monitoring & APM

- **Goal:** Implement real-time error tracking and performance monitoring for the frontend application to quickly identify and resolve user-facing issues.
- **Detailed Steps:**
  - Integrate a dedicated error monitoring and Application Performance Management (APM) tool SDK (e.g., Sentry) into the Next.js frontend application (`frontend/web`).
  - Configure the SDK to automatically capture unhandled exceptions, promise rejections, network errors, and other relevant client-side issues.
  - Set up basic performance monitoring to track key frontend interactions and page load times.
  - Define alert rules within the monitoring tool for critical frontend errors to ensure prompt notification.
  - Document the Sentry integration process and provide guidelines on how to interpret error reports and performance traces.
- **AI Co-Pilot Role:**
  - Provide installation steps and basic Sentry SDK configuration for Next.js.
  - Suggest how to capture additional context (e.g., authenticated user ID, breadcrumbs leading up to an error).
  - Assist with setting up initial alert configurations for common frontend issues.
- **Expected Outcome:** Real-time capture and reporting of frontend application errors and performance issues, enabling faster debugging and improved user experience.

### 2.12. Finalized Testing & Code Quality Tools

- **Backend Testing:**
  - Unit/Integration Tests: Jest
  - API Integration Tests: Supertest (with Jest)
- **Frontend Testing:**
  - Unit/Integration (Components): Jest + React Testing Library
- **Code Coverage:** Jest's built-in reporting
- **Overall Code Quality & Static Analysis:** SonarQube
