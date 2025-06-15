# Code Style Guidelines

This document outlines the code style guidelines for the SaaScript monorepo. These guidelines ensure consistency, readability, and maintainability across all projects and modules within the monorepo.

## 1. Indentation

* All code (TypeScript, JavaScript, JSON, YAML, Markdown, etc.) will use **4 spaces for indentation.** No tabs.

## 2. Formatting (General)

* Line endings: LF (Unix-style)
* Maximum line length: 120 characters (soft limit, exceptions for long strings/URLs are acceptable).

## 3. Naming Conventions

* **Variables, Functions, Properties:** `camelCase` (e.g., `userName`, `processData`).
* **Classes, Interfaces, Types:** `PascalCase` (e.g., `UserService`, `IUser`, `AuthModule`).
* **Constants:** `SCREAMING_SNAKE_CASE` (e.g., `MAX_RETRIES`, `API_KEY`).
* **Files:** `kebab-case` for most files (e.g., `user-service.ts`, `app-module.ts`), `PascalCase` for React components/NestJS classes (e.g., `App.tsx`, `AuthService.ts`).

## 4. TypeScript Specific

* Use explicit types where possible.
* Avoid `any` unless absolutely necessary and justified.
* Use `interface` for defining object shapes.
* Prefer `type` aliases for unions, intersections, and primitives.

## 5. Comments

* Use JSDoc-style comments for functions, classes, and complex logic.
* Use single-line comments (`//`) for brief explanations.

## 6. Import Statements

* Organize imports into groups (e.g., Node.js built-ins, third-party libraries, monorepo modules, relative imports).
* Sort imports alphabetically within each group.

## 7. Error Handling

* Use structured error handling.
* Return consistent error responses from APIs.

## 8. Linting & Formatting Tools

* **ESLint:** For linting TypeScript/JavaScript code quality.
* **Prettier:** For consistent code formatting (will be configured to use 4 spaces).

---

_This document is a placeholder and will be expanded with more specific rules and examples as the project progresses._