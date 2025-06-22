# Pull Request: [Feature/Bugfix/Refactor Title]

## Related Issue(s)

Link to the GitHub Issue(s) addressed by this PR.
**To automatically close the issue upon merge, use keywords like `Closes #` or `Fixes #`.**

* Example: `Closes #123 - Setup Local Development Environment with Docker Compose`
* Example: `#456 - Refactor User Service authentication logic` (if not auto-closing)

## Description

[Provide a concise, high-level summary of the changes introduced by this PR. Explain *what* was done and *why*.]

## Changes Made

* **[Affected Module/Package]:** [List specific, detailed changes within that module/package.]
    * Example: `modules/auth_service`: Implemented user registration endpoint.
    * Example: `frontend/web`: Updated login form styling.
    * Example: `infra`: Added DynamoDB to docker-compose.yml.
* [Add more bullet points for other affected modules/packages if applicable.]

## Potential Impact

[Briefly describe any potential impact of these changes on other services, performance, user experience, or system stability. Be as specific as possible.]
* Example: Minimal, only affects user registration flow.
* Example: Introduces new caching layer, expected performance improvement in user profile lookups.
* Example: No user-facing changes, only backend logic.

## How to Test

[Provide clear, step-by-step instructions for reviewing and testing the changes locally. Include specific endpoints, UI flows, or commands.]

1.  `git checkout [this-branch-name]`
2.  `[package_manager] install` (if dependencies changed)
3.  `[Relevant command to start the application/service, e.g., docker-compose up -d]`
4.  [Specific steps to verify the feature/fix, e.g., "Access `http://localhost:3000/health` and verify 200 OK." or "Navigate to `/login` and attempt to log in with valid/invalid credentials."]

## Screenshots (if applicable)

[Add any relevant screenshots or GIFs demonstrating the changes or new functionality, especially for UI changes.]

## Checklist (Self-Review & Project Standards)

* [ ] All Acceptance Criteria for the related issue have been met and verified.
* [ ] I have performed a self-review of my own code.
* [ ] My changes generate no new warnings or errors.
* [ ] Code follows project coding standards (e.g., ESLint, Prettier configured and run).
* [ ] All new and existing tests pass (e.g., `yarn test`).
* [ ] My changes are fully covered by tests (check coverage report).
* [ ] Documentation (code comments, `README.md` for modules) has been updated where necessary.
* [ ] Changes are fully responsive and accessible (if applicable).
* [ ] Performance considerations have been addressed.
* [ ] Security implications have been considered and mitigated.
* [ ] Environmental variables and configuration are properly handled.

## Reviewer Notes

[Any specific areas you'd like the reviewer to focus on, or any questions you have about the implementation.]