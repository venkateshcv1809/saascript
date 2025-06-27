# Code Style Guidelines

This document outlines the coding standards and best practices for the SaaScript monorepo. Adhering to these guidelines is crucial for ensuring code consistency, readability, maintainability, and quality across all microservices, shared libraries, and frontend applications. These guidelines apply to both human and AI co-developers.

---

## 1. General Principles

The core principles guiding our code style are:

* **Readability:** Code should be easy to understand at a glance, minimizing cognitive load.
* **Consistency:** A uniform style across the entire codebase reduces friction and makes contributions smoother.
* **Maintainability:** Well-structured and consistently styled code is easier to debug, extend, and refactor.
* **Predictability:** Developers should be able to predict the structure and style of any given file.
* **Automated Enforcement:** Leverage tooling (Linters, Formatters) to automatically enforce rules and minimize manual style discussions.

---

## 2. General Formatting Rules

These rules apply universally across most code files (TypeScript, JavaScript, JSON, YAML, Markdown, etc.).

* **Indentation:** All code will use **4 spaces for indentation.** No tabs.
* **Line Endings:** LF (Unix-style).
* **Maximum Line Length:** 120 characters (soft limit, exceptions for long strings/URLs are acceptable).

---

## 3. Naming Conventions

Consistency in naming is vital for readability and searchability.

* **Variables, Functions, Properties:** `camelCase` (e.g., `userName`, `getUserProfile`, `isActive`).
* **Classes, Interfaces, Types, Components:** `PascalCase` (e.g., `UserService`, `IUser`, `UserProfileDto`, `UserProfileCard`).
* **Constants (global/module-level):** `SCREAMING_SNAKE_CASE` (e.g., `API_BASE_URL`, `MAX_RETRIES`).
* **Files:** `kebab-case` for most files (e.g., `user-service.ts`, `user-profile-card.tsx`), `PascalCase` for React components/NestJS classes (e.g., `App.tsx`, `AuthService.ts`).
* **Folders:** `kebab-case` (e.g., `auth-service`, `user-profile`).
* **Database Tables/Columns:** `snake_case` (e.g., `user_accounts`, `created_at`).

---

## 4. Import Statements

Organizing and sorting import statements improves readability and prevents merge conflicts.

* **Grouping:** Organize imports into logical groups:
    1.  Node.js built-in modules (e.g., `path`, `fs`).
    2.  Third-party libraries (e.g., `react`, `nestjs/common`).
    3.  Monorepo shared modules (from `modules/libs/`).
    4.  Relative imports (within the current project/module).
* **Sorting:** Sort imports alphabetically within each group.

---

## 5. Language-Specific Guidelines

### 5.1. TypeScript

* **Strict Typing:** Always use explicit types. Avoid `any` unless absolutely necessary (e.g., when dealing with external libraries that lack proper type definitions) and with a clear comment justification.
* **Interface vs. Type Aliases:** Use `interface` for defining object shapes (especially for public APIs/DTOs) and `type` for complex unions, intersections, or aliases for primitive types.
* **Enums:** Prefer string enums over numeric enums for better readability and debugging.
* **Generics:** Use generics to create reusable and type-safe components and functions.
* **ES Modules:** Use `import` and `export` syntax. Avoid CommonJS `require()` and `module.exports`.

### 5.2. Node.js / NestJS (Backend Services)

* **Modularity:** Structure applications into logical modules using NestJS modules.
* **Dependency Injection:** Leverage NestJS's DI system for services, controllers, and providers. Avoid manual instantiation where DI is appropriate.
* **Controllers:** Handle HTTP requests, validate input, and delegate business logic to services. Keep controllers lean.
* **Services:** Encapsulate business logic. Services should be injectable and stateless where possible.
* **Providers:** Use providers for database interactions (e.g., TypeORM repositories), third-party API integrations, and other shared logic.
* **DTOs (Data Transfer Objects):** Use classes with `@nestjs/swagger` and `class-validator`/`class-transformer` for input validation and clear API contracts.
* **Configuration:** Manage application configuration using NestJS's `@nestjs/config` module and environment variables. Avoid hardcoding sensitive data.

### 5.3. React / Next.js (Frontend Applications)

* **Functional Components & Hooks:** Prefer functional components over class components and utilize React Hooks for state and lifecycle management.
* **JSX Best Practices:**
    * One component per file.
    * Use PascalCase for component names.
    * Self-closing tags when no children.
    * Always use `key` prop when rendering lists.
* **State Management:** For global state, prefer modern solutions like React Context API, Zustand, or Jotai. Avoid prop-drilling.
* **Styling:** Primarily use **Tailwind CSS** for utility-first styling. For custom styles not easily achieved with Tailwind, use CSS Modules or Emotion/Styled Components where absolutely necessary and consistently applied within a component.
* **Data Fetching:** Use a dedicated library like `react-query` (TanStack Query) or Next.js's data fetching methods (`getServerSideProps`, `getStaticProps`, `getInitialProps`).
* **Accessibility (A11y):** Strive for accessible UI components (e.g., semantic HTML, proper ARIA attributes, keyboard navigation support).
* **Performance:** Optimize renders using `React.memo`, `useCallback`, `useMemo` when appropriate. Avoid unnecessary re-renders.

---

## 6. Linting and Static Analysis

ESLint is configured at the monorepo root to enforce code quality rules and identify potential issues.

* **ESLint:** Runs checks for:
    * Potential bugs (e.g., unreachable code, undeclared variables).
    * Code smells (e.g., complex logic, unused variables).
    * Security vulnerabilities.
    * Adherence to best practices (e.g., `no-console`, `no-debugger`).
* **Configuration:** The `.eslintrc.js` file at the root defines shared rules. Individual projects/modules may extend or override these where necessary.
* **Execution:** Linting is run as part of CI/CD pipelines and enforced via Husky pre-commit hooks.
    * **Command:** `npm run lint:fix` (or `yarn lint:fix`) to fix auto-fixable issues.

---

## 7. Comments and Documentation

Comments should explain *why* certain decisions were made, *complex logic*, or *non-obvious behaviors*, rather than simply restating *what* the code does.

* **JSDoc:** Use JSDoc for functions, classes, interfaces, and complex types, especially for public APIs or shared libraries.
* **Inline Comments:** Use sparingly for brief explanations of non-obvious code lines.
* **TODO/FIXME Comments:** Use for temporary notes for future work. Include your GitHub username or initials and the date (e.g., `// TODO(venkat): Refactor this logic by 2025-12-31`).

---

## 8. Error Handling

* **Structured Error Handling:** Implement consistent and structured error handling mechanisms across services. This includes custom exception classes and centralized error management (e.g., NestJS Exception Filters).
* **Consistent Responses:** Ensure APIs return consistent error response formats (e.g., HTTP status codes, error codes, descriptive messages) to clients.
* **Logging:** Log errors appropriately, including relevant context and stack traces, to aid debugging and monitoring.

---

## 9. Best Practices (General)

* **Immutability:** Favor immutable data structures where possible, especially for state management in frontend applications.
* **Modularity:** Break down large functions or components into smaller, focused, and reusable units.
* **Early Exit (Guard Clauses):** Use guard clauses to handle edge cases early and reduce nesting.
* **Avoid Global State (where possible):** Limit global state; prefer localized state for components or services.
* **DRY (Don't Repeat Yourself):** Avoid duplicating code. Extract common logic into shared functions or libraries.
* **Small Functions:** Functions should ideally do one thing and do it well. Aim for functions that fit on a screen without scrolling.
* **Unit Testing:** Write comprehensive unit tests for all business logic, services, and complex components. Aim for high code coverage.
* **Sensible Defaults:** Design components and functions with sensible default values to reduce boilerplate.