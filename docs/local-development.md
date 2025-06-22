# Local Development Guide

This guide provides comprehensive, step-by-step instructions for setting up and running the entire SaaScript monorepo project on your local development machine. Following these steps will allow you to quickly get the core infrastructure, backend microservices, and frontend applications operational for development and testing.

---

## 1. Prerequisites

Before you begin, ensure your local machine has the following software installed. While an Ubuntu host operating system is recommended for potentially more seamless setup, instructions for other operating systems can be found via the provided links.

* **Git:** For cloning the repository and managing source code.
    * [Download & Install Git](https://git-scm.com/downloads)
* **Node.js (v18.x or later) & npm:** The JavaScript runtime environment and package manager. LTS version recommended.
    * [Download & Install Node.js (includes npm)](https://nodejs.org/en/download/)
    * *Optional:* Consider using a Node Version Manager (like `nvm` or `volta`) for easier version switching.
* **Yarn:** Our monorepo uses Yarn Workspaces for efficient dependency management.
    * To install Yarn: `npm install -g yarn`
* **Docker or Podman:** Containerization platform for running the shared infrastructure services (databases, message brokers). **Podman is the preferred container runtime** for its daemonless architecture and enhanced security.
    * [Install Docker Desktop](https://www.docker.com/products/docker-desktop)
    * [Install Podman](https://podman.io/docs/installation) (Popular alternative to Docker)
* **Minikube:** (Optional, for local Kubernetes deployment) Runs a local Kubernetes cluster.
    * [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
* **kubectl:** (Optional, for Kubernetes interaction) Kubernetes command-line tool.
    * [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* **VSCode (Recommended IDE):** With recommended extensions. VS Code will prompt you to install extensions defined in `.vscode/extensions.json` when you open the monorepo, ensuring a consistent development environment.

---

## 2. Getting Started

Follow these steps to clone the repository and prepare your project:

1.  **Clone the Repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/venkateshcv1809/saascript.git](https://github.com/venkateshcv1809/saascript.git)
    cd saascript
    ```

2.  **Install Monorepo Dependencies:**
    Navigate to the root of the cloned `saascript` directory and install all project dependencies. This will install dependencies for all microservices, shared libraries, and frontend applications within the monorepo.
    ```bash
    npm install # or yarn install
    ```
    *Note: While `npm` is the default package manager included with Node.js, **Yarn is the recommended choice** for optimal monorepo performance and consistent dependency resolution via Yarn Workspaces.*

---

## 3. Core Infrastructure Setup (Docker Compose)

SaaScript relies on several core infrastructure services that are best run in containers for local development. We use Docker Compose (or Podman Compose due to compatibility) to manage these.

1.  **Start Infrastructure Services:**
    From the `saascript/` root directory, execute:
    ```bash
    docker-compose -f infra/docker-compose.yml up -d
    ```
    This command will:
    * Pull necessary container images (PostgreSQL, Redis, RabbitMQ, Kafka, Zookeeper, DynamoDB, Vault).
    * Create and start containers for each service in detached mode (`-d`).

2.  **Verify Services Status:**
    To check if all containers are running as expected, use:
    ```bash
    docker-compose -f infra/docker-compose.yml ps
    ```
    You should see `Up` status for all services.

---

## 4. Container Names and Service Ports

For easier access and debugging, here's a consolidated list of the container names and the default ports they expose in your local environment via `infra/docker-compose.yml`:

| Service Name in `docker-compose.yml` | Container Name (Internal)         | Default Port (Host:Container) | Description                                       |
| :----------------------------------- | :-------------------------------- | :---------------------------- | :------------------------------------------------ |
| `postgres`                           | `saascript_postgres`              | `5432:5432`                   | Primary SQL database.                             |
| `redis`                              | `saascript_redis`                 | `6379:6379`                   | In-memory data store, cache, message broker.      |
| `rabbitmq`                           | `saascript_rabbitmq`              | `5672:5672` (AMQP)            | Message broker for task queues.                   |
| `kafka`                              | `saascript_kafka`                 | `9092:9092`                   | Event streaming platform.                         |
| `zookeeper`                          | `saascript_zookeeper`             | `2181:2181`                   | Required by Kafka for coordination.               |
| `dynamodb-local`                     | `saascript_dynamodb_local`        | `8000:8000`                   | Local NoSQL database for flexible data.           |
| `vault`                              | `saascript_vault`                 | `8200:8200`                   | Secrets management.                               |
| `gateway`                            | `saascript_gateway`               | `3000:3000`                   | API Gateway (adjust port as configured).          |
| `auth_service`                       | `saascript_auth_service`          | `3001:3001`                   | Authentication Microservice (adjust port).        |
| `projects_service`                   | `saascript_projects_service`      | `3002:3002`                   | Project Management (adjust port).                 |
| `frontend_web`                       | `saascript_frontend_web`          | `3000:3000`                   | Main web application (adjust port).               |
| `frontend_admin`                     | `saascript_frontend_admin`        | `3003:3003`                   | Admin UI (adjust port).                           |
| `notifications_service`              | `saascript_notifications_service` | `3004:3004`                   | Asynchronous notifications (adjust port).         |
| `audit_log_service`                  | `saascript_audit_log_service`     | `3005:3005`                   | Centralized audit logging (adjust port).          |
| `feature_flags_service`              | `saascript_feature_flags_service` | `3006:3006`                   | Dynamic feature flags (adjust port).              |
| `webhooks_service`                   | `saascript_webhooks_service`      | `3007:3007`                   | Webhook management (adjust port).                 |
| `analytics_service`                  | `saascript_analytics_service`     | `3008:3008`                   | Collects analytics (adjust port).                 |
| `billing_service`                    | `saascript_billing_service`       | `3009:3009`                   | Billing and payments (adjust port).               |

*Note: The example ports for `modules/` and `frontend/` services (e.g., `3000`, `3001`) are indicative. Actual ports will be defined in each service's configuration (e.g., `.env` files, NestJS `main.ts`) and reflected in their respective Dockerfiles and `docker-compose.yml` service definitions. Always refer to the service's specific configuration for the precise port.*

---

## 5. Build & Run Applications

After setting up the infrastructure, you can build and run the SaaScript microservices and frontend applications.

1.  **Build All Services:**
    This command compiles all TypeScript code for NestJS microservices and builds the Next.js frontend applications.
    ```bash
    npm run build:all # or yarn build:all
    ```

2.  **Start All Services (Development Mode):**
    This command starts all configured backend microservices and frontend applications in development mode, typically with hot-reloading where supported.
    ```bash
    npm run start:dev # or yarn start:dev
    ```
    * The API Gateway should typically be accessible at `http://localhost:3000` (or its configured port).
    * The main web frontend (`frontend/web`) should be accessible at `http://localhost:3000` (or its configured port, if different from Gateway).
    * The admin frontend (`frontend/admin`) should be accessible at `http://localhost:3003` (or its configured port).

---

## 6. Common Development Commands

Here are some frequently used commands for development:

* **Stop all Docker Compose services:**
    ```bash
    docker-compose -f infra/docker-compose.yml down
    ```
* **Install dependencies (again, if `package.json` changes):**
    ```bash
    npm install # or yarn install
    ```
* **Build a specific service (e.g., `auth_service`):**
    ```bash
    npm run build --workspace=modules/auth_service # or yarn workspace modules/auth_service build
    ```
    (Note: `npm run build:all` is usually preferred to build everything, if defined.)
* **Run Unit & Integration Tests (all services):**
    (Executes unit and integration tests across all modules and shared libraries (`modules/libs/`).)
    ```bash
    npm test # or yarn test
    ```
* **Run tests for a specific service (e.g., `gateway`):**
    ```bash
    npm test --workspace=modules/gateway # or yarn workspace modules/gateway test
    ```
* **Generate code coverage for a specific service (e.g., `auth_service`):**
    ```bash
    npm run test:cov --workspace=modules/auth_service # or yarn workspace modules/auth_service test:cov
    ```
* **Run End-to-End (E2E) Tests:**
    (Executes E2E tests located in the `e2e/` directory. This typically requires all core services to be running via Docker Compose and application services started in development mode.)
    ```bash
    npm run e2e # or yarn e2e
    ```
* **Lint and format code (all services):**
    ```bash
    npm run lint:fix # or yarn lint:fix
    ```

---

## 7. Basic Troubleshooting

If you encounter issues during setup or running the applications:

* **"Port already in use" error:**
    * Ensure no other applications are using the required ports (e.g., 5432, 6379, 3000, etc.).
    * Stop existing `docker-compose` services: `docker-compose -f infra/docker-compose.yml down`
    * **Generic troubleshooting for processes using ports:** Use your operating system's tools (e.g., `netstat`, `lsof` on Linux/macOS, or Task Manager/Resource Monitor on Windows) to identify and terminate conflicting processes.
* **Container fails to start:**
    * Check container logs for errors: `docker logs [container_id_or_name]` (e.g., `docker logs saascript_postgres`)
    * Ensure you have enough system resources (RAM, CPU).
* **Build errors:**
    * Ensure all dependencies are installed: `npm install` (or `yarn install`).
    * Check specific error messages from the compiler.
* **Application doesn't respond:**
    * Verify the container is running (`docker-compose -f infra/docker-compose.yml ps`).
    * Check the application logs (if running via `npm run start:dev` in the console, or `docker-compose logs <SERVICE_NAME>` if running containerized).
    * Ensure environment variables are correctly configured.

If problems persist, refer to the more detailed error logs within each service's directory or consult the project's documentation for specific microservices.