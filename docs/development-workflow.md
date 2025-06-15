# Development Workflow

This document outlines the agile-inspired development workflow for the SaaScript project, focusing on Git strategy, Pull Request (PR) processes, and code review. This workflow is designed to ensure code quality, maintainability, and efficient collaboration.

## 1. Branching Strategy (Simplified Gitflow)

We will use a simplified Gitflow branching model to manage development and releases:

* **`main` Branch:**
    * Represents the latest stable, production-ready code.
    * Direct commits to `main` are strictly prohibited. All changes must come through reviewed Pull Requests.
    * Only merge `release` branches or `hotfix` branches into `main`.

* **`develop` Branch:**
    * Integrates all new features and bug fixes. This is the primary branch for ongoing development.
    * Features and bug fixes are merged into `develop` via Pull Requests.
    * Only merge `feature` or `bugfix` branches into `develop`.

* **`feature/<feature-name>` Branches:**
    * Created from `develop` for each new feature.
    * Named descriptively (e.g., `feature/user-authentication`, `feature/billing-subscription`).
    * After completion, merged back into `develop` via a Pull Request.

* **`bugfix/<bug-description>` Branches:**
    * Created from `develop` for minor bug fixes in `develop`.
    * Named descriptively (e.g., `bugfix/login-form-validation`).
    * After completion, merged back into `develop` via a Pull Request.
    * For critical bugs in `main` (production), a `hotfix/<hotfix-description>` branch would be created directly from `main`.

* **`release/<version>` Branches (Future - for Production Releases):**
    * Created from `develop` when a new release is prepared.
    * Used for final testing, bug fixing specific to the release, and version bumping.
    * Merged into `main` and `develop` (to carry forward release fixes) when ready.

## 2. Pull Request (PR) Process

All changes to `main` and `develop` branches must go through a Pull Request review process.

1.  **Create a Branch:**
    * Always create a new `feature/` or `bugfix/` branch from the latest `develop` branch.
    * `git checkout develop`
    * `git pull origin develop`
    * `git checkout -b feature/your-new-feature-name`

2.  **Develop & Commit:**
    * Implement your changes, following code style guidelines and TDD principles.
    * Make frequent, small, and meaningful commits using [Conventional Commits](#3-conventional-commits).

3.  **Push Branch:**
    * Push your local branch to the remote repository.
    * `git push -u origin feature/your-new-feature-name`

4.  **Create Pull Request:**
    * Go to the GitHub repository and create a new Pull Request from your `feature/` or `bugfix/` branch to the `develop` branch.
    * **Always use the [Pull Request Template](./.github/PULL_REQUEST_TEMPLATE.md) provided.** Fill in all sections thoroughly.

5.  **Code Review:**
    * Request reviews from designated team members.
    * Address all feedback and make necessary changes. Push new commits to your branch; the PR will automatically update.
    * Participate in reviewing others' PRs.

6.  **Merge:**
    * Once the PR is approved and all checks pass, it can be merged into `develop`.
    * Prefer **Squash and Merge** or **Rebase and Merge** on GitHub to keep a clean `develop` history.

## 3. Conventional Commits

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for all commit messages. This provides a standardized format that enables automated tooling (e.g., changelog generation, semantic versioning).

**Format:** `<type>(<scope>): <description>`

* **`type` (mandatory):**
    * `feat`: A new feature (correlates with MINOR in semantic versioning).
    * `fix`: A bug fix (correlates with PATCH in semantic versioning).
    * `docs`: Documentation only changes.
    * `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc).
    * `refactor`: A code change that neither fixes a bug nor adds a feature.
    * `perf`: A code change that improves performance.
    * `test`: Adding missing tests or correcting existing tests.
    * `build`: Changes that affect the build system or external dependencies (e.g., npm, yarn, gulp).
    * `ci`: Changes to our CI configuration files and scripts (e.g., GitHub Actions, GitLab CI).
    * `chore`: Other changes that don't modify src or test files.
    * `revert`: Reverts a previous commit.

* **`scope` (optional):** The specific part of the codebase affected (e.g., `auth`, `billing`, `api-gateway`, `frontend-web`, `docs`, `repo`). If changes are widespread, omit the scope.

* **`description` (mandatory):** A concise, imperative, present tense: "change" not "changed" or "changes". No period at the end.

**Examples:**

* `feat(auth): Implement user registration endpoint`
* `fix(frontend-web): Correct broken navigation link`
* `docs(architecture): Add multi-tenancy strategy details`
* `chore(deps): Update NestJS dependencies`
* `refactor(billing): Extract payment processing to separate service`

---

_This document is part of the foundational project setup for SaaScript._