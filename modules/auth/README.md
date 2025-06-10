# Auth Microservice

User Authentication & Authorization microservice (core identity provider) for SaaScript.

## Overview
This service handles user registration, login, JWT issuance, role-based authorization, and password reset functionality. It is designed for use as a standalone microservice in a microservices architecture.

## Core Functionalities / API Summary
- **User Registration** (`POST /register`): Register new users with validation and password hashing.
- **User Login** (`POST /login`): Authenticate users and issue JWTs.
- **User Profile** (`GET /me`): Fetch authenticated user's profile (JWT required).
- **Role Assignment** (`POST /admin/assign-role`): Admin-only endpoint to assign roles.
- **Password Reset** (`POST /reset-password-request`, `POST /reset-password`): Secure password reset flow.

## Local Setup & Running Instructions

### Prerequisites
- Node.js (v18+ recommended)
- Yarn (v1)
- Podman or Docker (for containerized development)
- PostgreSQL (for local DB)

### Install dependencies
```bash
yarn install
```

### Build TypeScript
```bash
yarn build
```

### Run in development (with hot reload)
```bash
yarn dev
```

### Run compiled app
```bash
yarn start
```

### Run with Podman Compose
```bash
podman-compose up
```

## Environment Variables
See `.env.example` for required variables:
- `PORT` (default: 3000)
- `DATABASE_URL` (PostgreSQL connection string)
- `JWT_SECRET` (secret for signing JWTs)

## API Endpoints
- `POST /register` — Register a new user
- `POST /login` — User login, returns JWT
- `GET /me` — Get current user profile (JWT required)
- `POST /admin/assign-role` — Assign role (admin only)
- `POST /reset-password-request` — Request password reset
- `POST /reset-password` — Reset password

> For detailed API docs, see [OpenAPI spec](./openapi.yaml) (if available).

## Testing Instructions
- Unit tests: (to be implemented with Jest)
- Integration tests: (to be implemented with Supertest)

## Dependency Management
- Uses [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for monorepo management.
- Shared code is imported from the `shared` workspace package.

---

For questions or contributions, see the main SaaScript repository README.
