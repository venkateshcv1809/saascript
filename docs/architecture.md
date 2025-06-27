# SaaScript Architecture Overview

This document details the architectural design and principles underpinning the SaaScript project. It outlines the choices made to ensure the platform is robust, scalable, maintainable, and aligned with modern software development best practices.

---

## 1. Architectural Philosophy & Principles

SaaScript embraces a **cloud-agnostic, microservices-first approach** built with a strong emphasis on **modularity, reusability, and scalability**. Our architecture is designed to:

* **Promote Autonomy:** Services are independently deployable, scalable, and manageable.
* **Enhance Resilience:** Isolation of failures, allowing parts of the system to remain functional if others encounter issues.
* **Facilitate Scalability:** Individual services can be scaled horizontally based on demand.
* **Ensure Maintainability:** Smaller, focused codebases are easier to understand, test, and evolve.
* **Enable Rapid Iteration:** Decoupled services allow different teams (or AI Co-Developers) to work concurrently with minimal conflicts.
* **Prioritize Security:** Security is built into every layer, from design to implementation.

---

## 2. Microservices Architecture

SaaScript is composed of a collection of loosely coupled, independently deployable microservices. Each service owns its data and exposes well-defined APIs.

### 2.1. Core Microservices

The primary microservices, categorized by their domain responsibility, include:

* **API Gateway (`modules/gateway/`):** The single entry point for all external client requests. Responsible for routing, authentication token validation, rate limiting, and potentially API versioning.
* **Authentication Service (`modules/auth_service/`):** Handles user registration, login, token management (JWT), password resets, email verification, and Role-Based Access Control (RBAC).
* **User Profile Service (`modules/profile_service/`):** Manages user-specific preferences and profile data, decoupled from core authentication.
* **Project Management Service (`modules/projects_service/`):** An example core SaaS feature, responsible for creating, reading, updating, and deleting projects, including user permissions within projects.
* **Billing Service (`modules/billing_service/`):** Manages subscription plans, user subscriptions, payments, and integrates with external payment gateways (e.g., Stripe).
* **Notifications Service (`modules/notifications_service/`):** Handles various user notifications (e.g., email, push) asynchronously.
* **Audit Log Service (`modules/audit_log_service/`):** Centralizes and stores immutable audit trails of critical user activities and system events.
* **Feature Flags Service (`modules/feature_flags_service/`):** Provides dynamic control over application features and behaviors without code deployments.
* **Webhooks Service (`modules/webhooks_service/`):** Manages external webhook subscriptions and dispatches outgoing event notifications to third-party systems.
* **Analytics Service (`modules/analytics_service/`):** Collects, processes, and stores application telemetry and user behavioral data for reporting and insights.

---

## 3. Monorepo Design

SaaScript utilizes a monorepo strategy to manage multiple projects (microservices, shared libraries, frontend applications) within a single Git repository. This approach offers benefits such as:

* **Simplified Dependency Management:** Easier to manage shared dependencies and ensure consistency.
* **Atomic Commits:** Changes across multiple services can be committed together, simplifying refactoring.
* **Consistent Tooling:** Single set of build, test, and linting tools across the entire codebase.
* **Streamlined CI/CD:** Easier to set up unified pipelines.

### 3.1. SaaScript Monorepo Folder Structure

```markdown
saascript/
├── .github/                  # GitHub specific configurations (CI/CD workflows, issue/PR templates)
│   ├── ISSUE_TEMPLATE/       # Templates for standardizing bug reports and feature requests
│   │   └── bug_report.md
│   ├── PULL_REQUEST_TEMPLATE.md # Template for guiding Pull Request contributions
│   └── workflows/            # Definitions for CI/CD pipelines
│       └── ci.yml
│
├── .vscode/                  # Visual Studio Code workspace settings, tasks, launch configs, and recommended extensions for consistent dev environment
│   ├── settings.json
│   ├── tasks.json
│   ├── launch.json
│   └── extensions.json
│
├── docs/                     # Project-level documentation (architecture, workflows, guidelines)
│   ├── architecture.md
│   ├── ai-assisted-workflow.md
│   ├── local-development.md
│   ├── development-workflow.md
│   ├── project-management.md
│   └── code-style-guidelines.md
│
├── e2e/                      # End-to-End (E2E) test suites for full system validation (e.g., Cypress/Playwright configuration and test files)
│   └── ...
│
├── infra/                    # Infrastructure-as-Code (IaC) for deployment and local environment setup
│   ├── docker-compose.yml    # Defines multi-container Docker applications for local development (databases, message brokers, etc.)
│   ├── kubernetes/           # Kubernetes manifests for production deployment
│   │   ├── deployments/      # Kubernetes Deployment definitions for each service
│   │   ├── services/         # Kubernetes Service definitions for network access
│   │   ├── configmaps/       # Kubernetes ConfigMaps for non-sensitive configuration data
│   │   └── secrets/          # Kubernetes Secrets for sensitive data management
│   └── vault/                # Configurations and policies related to HashiCorp Vault for secret management
│
├── modules/                  # Individual microservices and shared libraries
│   ├── gateway/              # Central API Gateway, entry point for all client requests
│   │   └── ...
│   │
│   ├── auth_service/         # Handles user authentication, authorization, and identity management
│   │   └── ...
│   │
│   ├── projects_service/     # Manages project creation, user access, and project-specific data
│   │   └── ...
│   │
│   ├── billing_service/      # Manages subscription plans, payments, and invoicing
│   │   └── ...
│   │
│   ├── profile_service/      # Manages user profiles and preferences
│   │   └── ...
│   │
│   ├── notifications_service/ # Handles sending various notifications (email, SMS, in-app)
│   │   └── ...
│   │
│   ├── audit_log_service/    # Centralizes and stores immutable audit trails of critical user activities and system events
│   │   └── ...
│   │
│   ├── feature_flags_service/ # Provides dynamic control over application features and behaviors without code deployments
│   │   └── ...
│   │
│   ├── webhooks_service/     # Manages external webhook subscriptions and dispatches outgoing event notifications to third-party systems
│   │   └── ...
│   │
│   ├── analytics_service/    # Collects, processes, and stores application telemetry and user behavioral data for reporting and insights
│   │   └── ...
│   │
│   └── libs/                 # Shared libraries and reusable modules for all microservices
│       ├── database/         # Database connectivity and ORM modules
│       │   ├── postgres/     # PostgreSQL specific module and configurations
│       │   │   ├── src/postgres.module.ts
│       │   │   └── package.json
│       │   ├── dynamodb/     # DynamoDB specific module and configurations
│       │   │   ├── src/dynamodb.module.ts
│       │   │   └── package.json
│       │   └── package.json  # Root package.json for database libs
│       ├── cache/            # Caching clients and related utilities
│       │   ├── redis/        # Redis client module and configurations
│       │   │   ├── src/redis.module.ts
│       │   │   └── package.json
│       │   └── package.json  # Root package.json for cache libs
│       ├── messaging/        # Messaging clients for inter-service communication
│       │   ├── kafka/        # Apache Kafka client module
│       │   │   ├── src/kafka.module.ts
│       │   │   └── package.json
│       │   ├── rabbitmq/     # RabbitMQ client module
│       │   │   ├── src/rabbitmq.module.ts
│       │   │   └── package.json
│       │   └── package.json  # Root package.json for messaging libs
│       └── common/           # General-purpose utilities, decorators, and shared types
│           ├── src/
│           │   ├── errors/   # Custom error classes and error handling utilities
│           │   ├── logging/  # Centralized logging utilities
│           │   ├── validators/ # Common data validation utilities
│           │   └── index.ts  # Export file for common utilities
│           └── package.json  # Package.json for common utilities
│       └── package.json      # Root package.json for all shared libs
│
├── frontend/                 # Frontend applications (web, admin dashboards)
│   ├── web/                  # Primary web application (Next.js/React)
│   │   └── ...
│   ├── admin/                # Admin dashboard application (Next.js/React)
│   │   └── ...
│   └── package.json          # Root package.json for frontend applications
│
├── scripts/                  # Utility scripts for development, build, and deployment tasks
│   └── ...
│
├── package.json              # Monorepo root package.json for workspace management and shared dev dependencies
└── .gitignore                # Git ignored files and directories
```

---

## 4. Service Communication & Data Flow

SaaScript utilizes a combination of synchronous and asynchronous communication patterns to ensure responsiveness, scalability, and loose coupling between services.

### 4.1. Synchronous Communication (API Gateway)

Client requests typically enter the system through the **API Gateway**. The Gateway:
* Validates authentication tokens.
* Routes requests to the appropriate backend microservice via direct HTTP/RPC calls.
* Aggregates responses from multiple services if needed.

### 4.2. Asynchronous Communication (Messaging Queues)

For long-running tasks, event-driven processes, and decoupling services, SaaScript uses messaging queues:

* **RabbitMQ:** Primarily used for **task queues** and reliable, point-to-point message delivery. Ideal for background jobs like sending notifications, processing payment webhooks, or asynchronous data transformations.
* **Apache Kafka:** Utilized as an **event streaming platform**. Suitable for high-throughput, low-latency data streams, enabling services to react to events published by other services (e.g., audit logging, real-time analytics events).

### 4.3. Data Sovereignty & Isolation

Each microservice is designed to own its data, promoting data isolation. While services may interact (e.g., Auth service providing a user ID to the Project service), direct database access across service boundaries is avoided. Data is managed primarily within the service's domain, accessed via its exposed APIs, or communicated via events. This approach simplifies data management, scaling, and adherence to data privacy principles.

---

## 5. Module Design Principles for Reusability

To maximize code reusability and maintainability, especially within the `modules/libs/` directory, SaaScript adheres to the following principles:

* **Explicit API Contracts:** Each module (especially shared libraries) defines clear interfaces and data transfer objects (DTOs) for its public methods, ensuring consistent interaction.
* **Loose Coupling:** Modules minimize direct dependencies on other specific modules. Communication is preferred via interfaces, dependency injection, or message queues.
* **Single Responsibility Principle (SRP):** Each module or library focuses on a single, well-defined piece of functionality.
* **High Cohesion:** Related functionalities are grouped together within a module.
* **Configuration over Hardcoding:** Modules are designed to be configurable, allowing easy adaptation to different environments or use cases without code changes.
* **Testability:** Modules are built with testing in mind, allowing for easy unit and integration testing in isolation.
* **Domain-Driven Structure:** Code within modules is organized by domain or feature, not just by technical layers (e.g., `modules/projects_service/src/projects/`, `modules/projects_service/src/tasks/`).

---

## 6. Cross-Cutting Concerns

These concerns apply universally across all microservices and frontend applications, guiding their implementation.

* **API Gateway:** All external client requests are routed through the `gateway` module, which handles routing, authentication, and potentially rate limiting.
* **Data Persistence:** Each microservice manages its own data persistence, primarily using PostgreSQL for relational data and DynamoDB for specialized NoSQL use cases. Shared database client libraries are used (`modules/libs/database`).
* **Inter-Service Communication:** Services communicate asynchronously via message brokers (Kafka for event streaming, RabbitMQ for task queuing) and synchronously via internal gRPC or HTTP calls where appropriate. Messaging clients are provided in `modules/libs/messaging`.
* **Configuration Management:** Application configurations are externalized using environment variables and managed securely, with HashiCorp Vault being the preferred secret management solution (`infra/vault`).
* **Centralized Logging & Monitoring:** All services emit structured logs and metrics. A centralized logging and monitoring solution will aggregate these for comprehensive observability. `modules/libs/common/src/logging` contains shared logging utilities.
* **Security:** Security is built-in by design, including robust authentication (`auth_service`), authorization, input validation (`modules/libs/common/src/validators`), and secure handling of credentials.
* **Error Handling:** A consistent, centralized error handling strategy is implemented across all services, leveraging shared error classes from `modules/libs/common/src/errors`.
* **Testing Strategy:** The project employs a multi-layered testing strategy:
    * **Unit Tests:** For individual functions and components within modules.
    * **Integration Tests:** For testing interactions between components and external dependencies (e.g., database calls, API integrations).
    * **End-to-End (E2E) Tests:** Located in the top-level `e2e/` directory, these validate full user flows across the integrated system.
    * **Code Coverage:** Enforced to ensure thorough test coverage across all test types.
* **Code Quality:** Enforced through consistent code style guidelines and linting, managed by `.eslintrc.js` and `.prettierrc.js` at the monorepo root, and recommended VS Code extensions via `.vscode/`.

---

## 7. Key Technology Choices

SaaScript leverages a robust and modern technology stack to meet its scalability, performance, and developer experience goals:

* **Backend Framework:** **NestJS** (TypeScript/Node.js) - A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
* **Frontend Framework:** **React** with **Next.js** - A powerful combination for building fast, scalable, and SEO-friendly web applications, supporting server-side rendering and static site generation.
* **Primary Relational Database:** **PostgreSQL** - A powerful, open-source object-relational database system known for its reliability, feature robustness, and performance. Used for core transactional data.
* **NoSQL Database:** **DynamoDB** - A fast and flexible NoSQL database service, ideal for user profiles and preferences with flexible schemas.
* **Caching & Session Management:** **Redis** - An in-memory data structure store used as a database, cache, and message broker for high-performance caching and rate limiting.
* **Asynchronous Task Queues:** **RabbitMQ** - A widely used open-source message broker that implements the Advanced Message Queuing Protocol (AMQP), ensuring reliable delivery of tasks.
* **Event Streaming Platform:** **Apache Kafka** - A distributed streaming platform capable of handling trillions of events a day, used for real-time data pipelines and event-driven architectures.
* **Containerization:** **Docker/Podman** - For packaging applications and their dependencies into portable containers.
* **Orchestration (Local):** **Minikube** - Runs a single-node Kubernetes cluster locally, simulating a production Kubernetes environment for development and testing.
* **Secrets Management:** **HashiCorp Vault** - Provides centralized management and dynamic generation of secrets and sensitive data.
* **End-to-End Testing Framework:** **Playwright** - For full system validation.
* **Package Manager:** **Yarn** - Strictly enforced for all Node.js package management.
* **Development Environment:** **Visual Studio Code** - Recommended IDE with configurations managed in `.vscode/`.

---

**Note:** This document will evolve as the project matures and architectural decisions are further refined.
