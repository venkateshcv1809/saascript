# SaaScript Project Overview - Detailed Context for AI Team

This document provides the comprehensive context for the **SaaScript** project, intended to bring any AI team member up to speed with its vision, architecture, and core technological stack.

## Vision

SaaScript is envisioned as a robust, scalable, and highly maintainable open-source foundation for Software-as-a-Service (SaaS) applications. It is designed to be self-hostable, offering full control to its users, and built with long-term evolution and adaptability in mind. The goal is to provide a highly performant and extensible boilerplate for building modern SaaS products efficiently.

## Core Technologies

* **Backend Framework:** Node.js with TypeScript, utilizing the NestJS framework. NestJS provides a robust, modular, and scalable architecture out-of-the-box, aligning with our microservices approach.
* **Frontend Framework:** React with Next.js. Next.js offers server-side rendering (SSR), static site generation (SSG), and API routes, optimizing performance and development experience for complex web applications.
* **Primary Relational Database:** PostgreSQL. Chosen for its robustness, reliability, ACID compliance, and extensive feature set suitable for core business data.
* **NoSQL Database (User Profiles/Dynamic Data):** DynamoDB. Used for its high performance, scalability, and flexibility in handling large volumes of non-relational data, particularly for dynamic user profiles or configuration settings that might benefit from its schema-less nature.
* **Caching & Sessions:** Redis. Employed for high-speed data retrieval, session management, and potentially real-time data streaming capabilities.
* **Task Queuing / Command Bus:** RabbitMQ. Provides reliable message queuing for asynchronous processing, background tasks, and inter-service communication where guaranteed message delivery and ordering are important.
* **Event Streaming / Event Bus:** Apache Kafka. Utilized for high-throughput, fault-tolerant, and real-time event streaming across microservices, enabling event-driven architectures and data pipelines.
* **Local Development Containerization:** Docker Compose. Facilitates easy setup and orchestration of all services and databases required for local development in a consistent and isolated environment.
* **Future Production Orchestration:** Kubernetes. The target platform for production deployment, enabling highly scalable, resilient, and manageable microservices deployments.
* **API Gateway:** A dedicated NestJS-based service acting as the central entry point for all external requests to the backend microservices. It will handle routing, authentication, and potentially request/response transformation.
* **Package Manager:** **Yarn.** This is a strict project standard. All Node.js package management commands (e.g., `yarn install`, `yarn add`, `yarn run`, `yarn build`, `yarn test`) must use Yarn.

## Architecture

SaaScript will adopt a **Microservices Architecture** within a **Monorepo** structure.

* **Microservices:** Each core business capability (e.g., Authentication, User Management, Subscription, Payments) will be developed as an independent service. This promotes:
    * **Modularity:** Clear separation of concerns.
    * **Independent Deployability:** Services can be deployed, updated, and scaled independently.
    * **Technology Diversity:** Potential to use different tech stacks for different services if needed (though initial focus will be Node.js/NestJS).
    * **Resilience:** Failure in one service is less likely to impact others.
* **Monorepo:** All microservices, shared libraries, frontend applications, and documentation will reside within a single Git repository. Benefits include:
    * **Simplified Code Sharing:** Easy to share code, types, and configurations between services (e.g., via `libs` folder).
    * **Atomic Commits:** Changes across multiple services for a single feature can be committed atomically.
    * **Centralized Tooling:** Unified CI/CD, linting, testing.
* **Service Communication:** Inter-service communication will leverage RabbitMQ (for commands/tasks) and Kafka (for events), ensuring loose coupling and asynchronous interactions.
* **Data Sovereignty:** Each microservice is encouraged to own its data, though shared databases will be managed strategically (e.g., a central user database).

## Cross-Cutting Concerns (Applied Universally)

* **Security:**
    * All credentials and sensitive configurations must be managed securely (e.g., environment variables, integrated secret management solutions like Vault in production).
    * Principle of Least Privilege will be applied to all service accounts and container permissions.
    * Robust input validation will be a standard practice across all API endpoints and data processing layers (e.g., using `class-validator` in NestJS).
    * Proper authentication (e.g., JWT) and authorization mechanisms (e.g., role-based access control - RBAC) will be implemented consistently.
* **Observability & Maintainability:**
    * Structured logging (e.g., JSON logs) will be implemented in all services, facilitating easy aggregation and analysis.
    * Comprehensive error handling with clear error codes and messages will be standard.
    * Well-defined health check endpoints (`/health`, `/ready`, `/live`) will be implemented for all services to support orchestration and monitoring.
    * Configuration will be externalized and managed via environment variables.
* **API Design:**
    * Adherence to RESTful principles: clear, concise endpoint paths, appropriate HTTP methods (GET, POST, PUT, DELETE), and meaningful HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error).