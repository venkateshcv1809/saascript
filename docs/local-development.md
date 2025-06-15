# Local Development Guide

This guide provides comprehensive, step-by-step instructions for setting up and running the entire SaaScript monorepo project on your local machine. It covers prerequisites, environment setup, and how to start all microservices and frontend applications.

## 1. Prerequisites

Before you begin, ensure you have the following software installed on your **Ubuntu** host operating system:

* **Git:** Version control system.
    * Installation: `sudo apt update && sudo apt install git`
* **Node.js & npm:** JavaScript runtime and package manager (LTS version recommended).
    * Installation (using nvm for flexibility):
        ```bash
        curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash
        source ~/.bashrc # Or ~/.zshrc if you use zsh
        nvm install --lts
        nvm use --lts
        ```
* **Podman:** Container engine (alternative to Docker).
    * Installation (for Ubuntu):
        ```bash
        sudo apt update
        sudo apt install podman
        sudo apt install podman-compose # For compose functionality
        # Optional: Configure Podman to run without sudo (rootless mode)
        # loginctl enable-linger $(whoami)
        # podman system migrate
        ```
* **Minikube:** Local Kubernetes cluster.
    * Installation (assuming Podman is installed):
        ```bash
        curl -LO [https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64](https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64)
        sudo install minikube-linux-amd64 /usr/local/bin/minikube
        # Verify installation
        minikube version
        ```
* **kubectl:** Kubernetes command-line tool.
    * Installation:
        ```bash
        sudo apt update
        sudo apt install apt-transport-https ca-certificates curl
        curl -fsSL [https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key](https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key) | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
        echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] [https://pkgs.k8s.io/core:/stable:/v1.28/deb/](https://pkgs.k8s.io/core:/stable:/v1.28/deb/) /' | sudo tee /etc/apt/sources.list.d/kubernetes.list
        sudo apt update
        sudo apt install kubectl
        # Verify installation
        kubectl version --client
        ```
* **VSCode (Recommended IDE):** With extensions for TypeScript, ESLint, Prettier, Docker, Kubernetes.

## 2. Project Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/venkateshcv1809/saascript.git](https://github.com/venkateshcv1809/saascript.git)
    cd saascript
    ```
2.  **Install Root Dependencies:**
    ```bash
    npm install
    ```
    This command will install the root `package.json` dependencies and link workspaces.

3.  **Install Workspace Dependencies:**
    Navigate into each `modules/*` and `frontend/*` directory and run `npm install`, or, if npm workspaces handle it for all, just ensure they are installed via the root `npm install`. (We will finalize a single-command script for this later).

## 3. Running Services Locally

You have two primary ways to run the SaaScript services locally: using `podman-compose` for direct container execution, or using Minikube for a Kubernetes-like environment.

### 3.1. Option 1: Running with `podman-compose` (Recommended for initial development)

This method uses `podman-compose` to orchestrate the core backend services and databases.

1.  **Start Core Infrastructure (Databases, Queues):**
    First, start the necessary infrastructure services defined in your `podman-compose.yaml` (PostgreSQL, Redis, RabbitMQ, Kafka, Jaeger, Prometheus, Grafana, Loki, Promtail).

    ```bash
    # From the saascript root directory, assuming podman-compose.yaml is here or in a 'docker' folder
    podman-compose -f ./docker/podman-compose.yaml up -d # Adjust path if needed
    ```
    *(Note: The `podman-compose.yaml` file and specific service configurations will be generated in later phases for specific modules like Auth, Billing, etc.)*

2.  **Start Individual NestJS Microservices:**
    Navigate into each `modules/*` directory and start the NestJS application.

    ```bash
    # Example for Auth service
    cd modules/auth
    npm run start:dev # Or your defined start script
    ```
    Repeat for `modules/api-gateway`, `modules/billing`, etc.

3.  **Start Frontend Applications:**
    Navigate into each `frontend/*` directory and start the Next.js application.

    ```bash
    # Example for Web frontend
    cd frontend/web
    npm run dev
    ```
    Repeat for `frontend/admin` if applicable.

### 3.2. Option 2: Deploying to Local Kubernetes (Minikube)

This method simulates a production-like Kubernetes environment locally.

1.  **Start Minikube Cluster:**
    ```bash
    minikube start --driver=podman
    ```
    Verify cluster status: `kubectl get nodes`

2.  **Build and Load Container Images:**
    For each microservice, build its Docker image and load it into Minikube's Docker daemon.

    ```bash
    # Example for Auth service (from saascript root)
    cd modules/auth
    podman build -t auth-service:latest .
    minikube image load auth-service:latest
    cd ../.. # Back to root
    ```
    Repeat for all services.

3.  **Apply Kubernetes Manifests:**
    Apply the Kubernetes YAML manifests for each service (Deployments, Services, ConfigMaps, Secrets, PVCs). *(These manifests will be generated in a later phase)*

    ```bash
    # Example
    kubectl apply -f ./kubernetes/auth-service.yaml # Adjust path
    ```
    Repeat for all services.

4.  **Access Services:**
    Use `minikube service <service-name> --url` to get the URL for your API Gateway or frontend services.

## 4. Running Tests

* **Unit/Integration Tests:**
    ```bash
    # For a specific module (e.g., Auth)
    cd modules/auth
    npm run test
    # For all modules (will be defined as a root script later)
    # npm run test:all
    ```

* **Code Coverage:**
    ```bash
    # For a specific module (e.g., Auth)
    cd modules/auth
    npm run test:cov
    ```

---

_This document is part of the foundational project setup for SaaScript._