Title:
infra(saascript-modules-profile): Containerize SaaScript User Profile Service

Description:
**1. Rationale:**
Creates the Dockerfile and integrates the User Profile Microservice into the Docker Compose setup for local development, enabling consistent and isolated environments for the service, especially for its DynamoDB interactions.

**2. Goal:**
Develop a production-ready Dockerfile for the `saascript-modules-profile` service, ensure it can be built, and integrate it as a service into the `infra/docker-compose.yaml` to run alongside the core infrastructure and DynamoDB Local.

**3. Detailed Steps:**

* **Create Dockerfile:** In the `saascript/modules/profile_service/` directory, create a `Dockerfile`.
    * Utilize a multi-stage build approach for a lean production image (e.g., one stage for building, another for running).
    * Copy necessary files for the build (e.g., `package.json`, `yarn.lock`, source code).
    * Install dependencies using `yarn`.
    * Build the NestJS application (e.g., `yarn build`).
    * Define the final runtime image with only production dependencies and compiled code.
    * Expose a unique port (e.g., 3003 or 8083 - choose a unique port for User Profile Service).
    * Define the entrypoint or command to start the NestJS application.
* **Update `infra/docker-compose.yaml`:**
    * Add a new service entry for `profile_service` in `saascript/infra/docker-compose.yaml`.
    * Specify the `build` context to `../modules/profile_service` (relative to the `docker-compose.yaml`).
    * Map the container's exposed port to a unique host port (e.g., `3003:3003` or `8083:8083`).
    * Connect the profile service to the appropriate Docker network (e.g., the same network as `dynamodb_local` and the `gateway`).
    * Add `depends_on` entries for `dynamodb_local` and `auth_service` (as it will depend on DynamoDB and likely needs user IDs from Auth Service), ensuring they start before the profile service.
* **Environment Variables:** Define placeholder environment variables (e.g., `NODE_ENV`, `PORT`, and placeholders for DynamoDB `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `DYNAMODB_ENDPOINT`) in the `docker-compose.yaml` or a `.env` file referenced by it. Remember `DYNAMODB_ENDPOINT` will point to `http://dynamodb_local:8000` for local development.
* **Verify Containerization:**
    * Run `docker-compose build profile_service` from the `saascript/infra/` directory to build the profile service image.
    * Run `docker-compose up -d profile_service` to start the service.
    * Verify the profile service is running and accessible (e.g., via its mapped port and `/health` endpoint).

**4. Acceptance Criteria / Definition of Done:**

* [ ] A `Dockerfile` exists in `saascript/modules/profile_service/` that uses a multi-stage build.
* [ ] The `Dockerfile` successfully builds the User Profile Microservice image using `yarn`.
* [ ] A new service entry for `profile_service` is added to `saascript/infra/docker-compose.yaml` with correct build context, unique port mapping, and network configuration.
* [ ] The `profile_service` starts successfully using `docker-compose up -d profile_service`.
* [ ] The User Profile Microservice is accessible on its mapped host port (e.g., `http://localhost:3003/health` returns 200 OK).
* [ ] `depends_on` entries for `dynamodb_local` and `auth_service` are correctly configured in `docker-compose.yaml` for `profile_service`.
* [ ] Relevant documentation (`modules/profile_service/README.md` and `docs/LOCAL_DEVELOPMENT.md`) has been updated with instructions for containerizing and running the profile service.

**5. Dependencies / Pre-requisites:**

* `infra: Setup Local Development Environment with Docker Compose` (ensures `infra/docker-compose.yaml` and main Docker network are set up).
* `infra: Setup Local DynamoDB (e.g., Podman Compose/Docker Compose)` (ensures DynamoDB Local is available).
* `feat(saascript-modules-profile): Implement User Profile Microservice Skeleton` (ensures the NestJS project structure is in place and runnable).
* Docker/Podman installed and running.

**6. AI Co-Pilot Role:**
* Provide a boilerplate multi-stage Dockerfile for a NestJS application, ensuring `yarn` commands are used for installs and builds.
* Suggest the necessary service entry for `docker-compose.yaml` including environment variables for DynamoDB connection.
* Offer guidance on common Docker Compose configurations for NestJS services and setting unique ports.
* Provide commands to build and run the Dockerized service.

---

### **7. Guidance for AI Co-Pilot (GitHub Copilot):**

* **Package Manager:** Remember to use `yarn` for all package installations (`yarn install`) and script executions (`yarn build`, `yarn start`).
* **Dockerfile Multi-Stage:** Focus on a robust multi-stage Dockerfile pattern for Node.js/NestJS applications: a build stage with a heavier Node.js image, and a lean production stage with an `alpine` or `slim` Node.js image.
* **Ports:** Ensure `EXPOSE` in Dockerfile matches the `PORT` environment variable and `ports` mapping in `docker-compose.yaml`.
* **Environment Variables:** Clearly define placeholder environment variables in the `docker-compose.yaml` for `DYNAMODB_ENDPOINT`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` for local DynamoDB connection. `DYNAMODB_ENDPOINT` should be `http://dynamodb_local:8000`.
* **Build Context:** The `docker-compose.yaml` `build` context for `profile_service` should correctly point to `../modules/profile_service`.
* **Docker Commands:** Provide the exact `docker-compose build` and `docker-compose up -d` commands as part of the verification steps.

Assignees:
@venkateshcv1809

Labels:
infra, phase-3

Projects:
SaaScript Development Board

Milestone:
Phase 3: User Management, Authentication & Authorization Expansion