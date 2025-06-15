# SaaScript Architecture Overview

This document provides a high-level overview of the SaaScript project's architecture, including its core principles, technology stack, and module design considerations. It serves as a foundational guide for understanding the structure and interconnections of the SaaScript framework.

## 1. Core Principles & Philosophy

The SaaScript architecture is guided by the following principles:

* **AI as Your Co-Pilot:** Integrate AI assistance at every stage (Design, Develop, Test, Document, Deploy, Maintain).
* **Automation First:** Automate repetitive and complex tasks with "single-command" scripts.
* **Convention Over Configuration:** Embrace structured frameworks to enforce consistency and maintainability.
* **Learning & Exploration:** Prioritize hands-on experience with technologies common in large-scale applications.
* **Reusability:** Design modules to be standalone and easily integrated into other SaaS contexts.
* **TypeScript-First:** Leveraging TypeScript for robust, scalable, and maintainable codebase.
* **Modular & Reusable:** Designed with microservices/components that are independent and interchangeable.
* **API-First:** Clear, consistent, and well-documented APIs for all services.
* **Scalable & Resilient:** Architected to handle high loads and ensure high availability.
* **Security-First:** Built with robust security practices at every layer.

## 2. Finalized Technology Stack

This is the complete technology stack chosen for the SaaScript project:

* **Project Development Methodology:** AI-assisted, **TDD-first workflow**, with detailed documentation.
* **Backend Framework:** NestJS (TypeScript/Node.js) for all microservices (including the API Gateway).
* **Core Transactional Database:** PostgreSQL (for core transactional data like Auth, Payments, etc.).
* **Session Management & Caching:** Redis (for sessions, caching, rate limiting).
* **User Profile Preferences Database:** DynamoDB (for a dedicated User Profile module, handling flexible user settings and preferences).
* **Messaging & Queueing:**
    * RabbitMQ (for reliable task queues and traditional message queuing).
    * Apache Kafka (for high-throughput event streaming and event sourcing).
* **API Gateway:** NestJS (Custom Implementation). (Future backlog: GraphQL layer for frontends).
* **Frontend Framework:** React (with Next.js Framework). (Future backlog: Mobile development).
* **Deployment & Orchestration:** Kubernetes (K8s), with Minikube for local development (leveraging its Podman driver).
* **Secrets Management:** HashiCorp Vault.

## 3. Module Design Principles for Reusability

These principles guide the design and implementation of each SaaScript microservice to ensure they are truly independent, maintainable, and scalable.

* **Loose Coupling & High Cohesion:**
    * **Definition:** Services communicate via well-defined public APIs, without knowledge of each other's internal implementations or direct database access. Each service is responsible for a single, focused business capability (e.g., Auth handles only identity management).
    * **Benefits:** Enhanced reusability, easier maintenance, independent scalability.
* **Clear API Contracts (RESTful & Standardized):**
    * **Definition:** Services expose explicit contracts for communication, specifying endpoints, HTTP methods, request/response formats, and status codes. This adheres to RESTful API design.
    * **Implementation:** Use NestJS decorators, TypeScript typing, and DTOs to enforce clear API definitions. Utilize `@nestjs/swagger` for OpenAPI documentation generation.
    * **Standardization:**
        * **Consistent Base Paths and Versioning:** All services will use consistent base paths (e.g., `/api/v1/` or `/service-name/v1/`).
        * **Clear Resource Naming:** Use nouns for resources (`/users`, `/subscriptions`).
        * **Appropriate HTTP Methods:** Use GET, POST, PUT, PATCH, DELETE for their intended actions.
        * **Consistent Request/Response Formats:** Primarily JSON for bodies and responses.
        * **Standardized Error Handling:** Use appropriate HTTP status codes (e.g., 200, 201, 400, 401, 403, 404, 409, 500) with a consistent JSON error structure (`error_code`, `message`).
        * **Authentication & Authorization Headers:** Use Bearer Tokens (JWTs) in the `Authorization` header; standardized `X-Refresh-Token` for token refreshing.
        * **Pagination, Filtering, Sorting:** Standardized query parameters (e.g., `?page=1&size=20`, `?status=active`, `?sort_by=created_at&order=desc`).
        * **Idempotency:** Design PUT and DELETE operations to be idempotent.
    * **Benefits:** Predictability, faster integration, versionability, and a developer-friendly experience for applications consuming the blueprint.
* **Independent Deployability:**
    * **Definition:** Each service can be developed, tested, deployed, updated, and rolled back independently.
    * **Implementation:** Each microservice will have its own Dockerfile to create self-contained container images.
    * **Benefits:** Rapid iteration, reduced risk, development efficiency.
* **Scalability (Statelessness is Key):**
    * **Definition:** Services should be stateless, externalizing any session or request-specific data to shared, highly available stores.
    * **Implementation:** JWT-based authentication, Redis for session data/caching.
    * **Benefits:** Elasticity, resilience, efficient resource utilization.
* **Security:**
    * **Definition:** Security is built into every layer: authentication, authorization, input validation, and secure handling of credentials.
    * **Implementation:** Auth module for identity, API Gateway for initial validation, NestJS pipes for input validation, secure secret management in Kubernetes.
* **3.6. Multi-Tenancy Strategy (Shared Database with Tenant ID):**
    * **Definition:** Implement a shared database segregated by a `tenant_id` column as the primary strategy for allowing multiple customer organizations (tenants) to use a single deployed instance while keeping their data isolated.
    * **Implementation:**
        * Every API request will carry a `tenant_id` (derived during authentication or as a dedicated header).
        * Almost every table containing tenant-specific data will include a `tenant_id` column.
        * All database queries will automatically include a `WHERE tenant_id = <current_tenant_id>` clause.
        * Application logic will strictly enforce `tenant_id` throughout its operations.
    * **Benefits:** Efficient for deployment and scaling, while offering robust data isolation.
* **3.7. Data Ownership & Isolation:**
    * **Definition:** Each project (SaaScript blueprint services, FilmForgeFX core application) is responsible for managing its own dedicated database(s) for its specific domain of data.
    * **Implementation:**
        * **Blueprint Data:** SaaScript/PySaaS manage data essential for running the SaaS framework (e.g., user auth, billing, tenant metadata) typically in PostgreSQL.
        * **Core Application Data:** FilmForgeFX manages data related to its core AI functionality (e.g., transformed images, requests, AI model configs) in its own dedicated database(s).
        * **Inter-Database Communication:** No direct database-to-database communication. All interactions occur via API calls (e.g., FilmForgeFX queries SaaScript's Auth API for `tenant_id`, then uses it to query its own database).
    * **Benefits:** Cleaner architecture, easier maintenance, better scalability, strong separation of concerns.

---

_This document is part of the foundational project setup for SaaScript._