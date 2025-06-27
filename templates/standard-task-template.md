# feat(module): Example Task Title

**1. Rationale:**
[Rationale content - explain why this task is needed.]

**2. Goal:**
[Goal content - what will be achieved by this task.]

**3. Detailed Steps:**
* Step 1: Install dependencies.
    ```bash
    [package_manager] install some-package
    ```
* Step 2: Create a new file.
* Step 3: Implement core logic.

**4. Acceptance Criteria / Definition of Done:**
* [ ] Criterion 1. (e.g., "User can register successfully with valid credentials and receive a verification email.")
* [ ] Criterion 2. (e.g., "API endpoint returns 200 OK for successful requests and 400 Bad Request for invalid input.")
* [ ] Unit tests cover new business logic with >= [X]% coverage.
* [ ] Integration tests verify service interaction (if applicable).
* [ ] Relevant API documentation (OpenAPI/Swagger) is updated.
* [ ] New environment variables (if any) are documented in `.env.example`.
* [ ] Project documentation (in `docs/` folder) is updated as necessary to reflect changes.

**5. Dependencies / Pre-requisites:**
* Dependency 1.
* Dependency 2.

**6. Guidance for Project Lead AI (Gemini VS Code Extension):**
* [Specific instructions for the Project Lead AI on how to approach *executing* this task (e.g., specific libraries to suggest, architectural patterns to enforce) or *reviewing* the generated code from the Software Engineer AI. This is guidance from Archi (me) to the Project Lead AI.
    * **Considerations:** Mention specific design patterns (e.g., Repository Pattern, Event-Driven Architecture), desired library choices, security implications to double-check, or complex cross-service interaction points that need careful review.]

**7. Guidance for Software Engineer AI (GitHub Copilot):**
* **File:** `src/my-feature/my-feature.controller.ts`
* **Action:** Create a new GET endpoint `/my-feature`.
* **Details:**
    * Decorate the endpoint with `@Get()` and `@HttpCode(HttpStatus.OK)`.
    * Return a simple JSON object: `{ "status": "ok", "message": "Feature is active" }`.
* **Testing:** In `src/my-feature/my-feature.controller.spec.ts`, create a basic unit test for this endpoint, ensuring it returns the expected response. Use Jest.
* **Package Manager:** Remember to use `[package_manager]` for all commands.
* **Environment Variables:** If new environment variables are required, suggest creating placeholders in `.env.example` in the relevant service and documenting their purpose.
* **Database Schema Changes:** If this task involves database schema modifications, explicitly define the required changes (e.g., "Create a new `users` table with `id`, `name`, `email` columns" or "Add `is_active` column to `projects` table"). Ensure TypeORM migrations are generated and applied.
* **Logging & Error Handling:** Implement standard logging for key operations and robust error handling as per `modules/libs/common/src/logging` and `modules/libs/common/src/errors`. Ensure consistent API error responses.
* **API Documentation:** Generate/update OpenAPI (Swagger) documentation for any new or modified API endpoints.
* **Code Documentation:** Add JSDoc comments for new classes, methods, and complex functions. Use `// TODO(...)` or `// FIXME(...)` comments as per `code-style-guidelines.md` for any temporary notes.