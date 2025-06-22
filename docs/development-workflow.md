# Development Workflow

This document outlines the standardized development workflow for the SaaScript monorepo. Adhering to these guidelines ensures consistency, facilitates collaboration, streamlines code reviews, and maintains a clean, understandable commit history, which is crucial for both human and AI co-developers.

---

## 1. Git Branching Strategy

SaaScript employs a simplified Gitflow-like branching strategy, optimized for continuous integration and delivery within a monorepo context.

* **`main` branch:**
    * Represents the **production-ready** codebase.
    * Direct commits to `main` are highly restricted (e.g., automated CI/CD merges, hotfixes).
    * New features are *never* developed directly on `main`.
    * All merges into `main` primarily come from `develop` for planned releases, or `hotfix` branches, typically via a Fast-Forward merge to ensure a linear history.
    * Continuous Delivery (CD) pipelines are typically triggered from `main` merges.

* **`develop` branch:**
    * Serves as the **integration branch** for all new features and bug fixes.
    * New features are branched off `develop`.
    * Always reflects the latest integrated development changes.
    * Used for staging deployments and pre-production testing.

* **Feature Branches (`feature/<feature-name>`):**
    * Created from `develop` for developing new features or significant enhancements.
    * Named descriptively (e.g., `feature/user-auth-flow`, `feature/billing-subscription`).
    * Should be kept small and focused.
    * Merged back into `develop` via a Squash and Merge Pull Request after review.

* **Bugfix Branches (`bugfix/<issue-id>-<description>`):**
    * Created from `develop` for addressing non-critical bugs discovered during development.
    * Named descriptively, often including the issue ID.
    * Merged back into `develop` via a Squash and Merge Pull Request after review.

* **Hotfix Branches (`hotfix/<issue-id>-<description>`):**
    * Created directly from `main` to address critical production issues that cannot wait for the next `develop` release cycle.
    * Merged back into both `main` (for immediate fix) and `develop` (to ensure the fix is carried forward) via a Fast-Forward merge. These are exceptional circumstances.

* **Release Branches (`release/<version>` - Future):**
    * (Planned for future maturity) Created from `develop` when a new major or minor release is being prepared.
    * Used for final testing, bug fixing specific to the release, and version bumping.
    * Merges into both `main` (as a planned release) and `develop` (to carry forward release-specific fixes) when ready.

---

## 2. Commit Message Guidelines (Conventional Commits)

SaaScript enforces the Conventional Commits specification. This provides an explicit commit history, which makes automated changelog generation, semantic versioning, and understanding project history significantly easier.

The commit message structure is:

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

* **`<type>` (mandatory):**
    * `feat`: A new feature (correlates to a `MINOR` version bump).
    * `fix`: A bug fix (correlates to a `PATCH` version bump).
    * `docs`: Documentation only changes.
    * `style`: Changes that do not affect the meaning of the code (whitespace, formatting, semicolons, etc.).
    * `refactor`: A code change that neither fixes a bug nor adds a feature.
    * `perf`: A code change that improves performance.
    * `test`: Adding missing tests or correcting existing tests.
    * `build`: Changes that affect the build system or external dependencies (e.g., npm, yarn).
    * `ci`: Changes to our CI configuration files and scripts (e.g., GitHub Actions).
    * `chore`: Other changes that don't modify src or test files.
    * `revert`: Reverts a previous commit.

* **`<scope>` (optional):**
    * Describes the part of the codebase affected (e.g., `auth_service`, `gateway`, `frontend-web`, `docs`, `infra`, `billing-api`). If affecting multiple parts, you can omit or use `all`.

* **`<subject>` (mandatory):**
    * A very brief, imperative mood description of the change.
    * Use the imperative, present tense: "change" not "changed" or "changes."
    * No period at the end.
    * Max 50 characters (recommended).

* **`<body>` (optional):**
    * Provides additional contextual information about the code change.
    * Use imperative, present tense.
    * Each line should be no longer than 72 characters.

* **`<footer>(s)` (optional):**
    * **`BREAKING CHANGE:`**: All breaking changes *must* have a footer that starts with `BREAKING CHANGE:`, followed by a space or two newlines. The rest of the commit message then describes the change, migration instructions, etc. (correlates to a `MAJOR` version bump).
    * `Closes #<issue>`: Reference related GitHub issues (e.g., `Closes #123`).

**Example Commit Messages:**

```
feat(auth_service): add OAuth2 integration with Google

This commit introduces OAuth2 authentication support using Google as a provider.
Users can now sign up and log in using their Google accounts.

Closes #45
```
fix(frontend-web): correct login form validation error message

Previously, the error message for invalid email format was unclear.
This updates the message to be more specific and user-friendly.
```
docs(local-dev): update podman installation steps for ubuntu
```

---

## 3. Pull Request (PR) Process

All code changes (except for very rare hotfixes directly to `main`) are introduced via Pull Requests.

1.  **Branch Creation:**
    * Always create a new `feature/` or `bugfix/` branch from the latest `develop` branch.
    * Example: `git checkout develop && git pull && git checkout -b feature/new-dashboard-widget`

2.  **Develop & Commit:**
    * Implement your changes, ensuring code adheres to [Code Style Guidelines](docs/code-style-guidelines.md).
    * Make frequent, atomic commits using Conventional Commits.

3.  **Run Local Checks:**
    * Before pushing, always run tests and linting to catch issues early. **These checks are enforced automatically via Git hooks using [Husky](https://typicode.io/husky/).** See Section 4 for commands.

4.  **Push Branch:**
    * Push your feature/bugfix branch to the remote repository.

5.  **Create Pull Request:**
    * Open a new Pull Request on GitHub, targeting the `develop` branch.
    * **Fill out the `.github/PULL_REQUEST_TEMPLATE.md` comprehensively.** This template guides you to provide all necessary information (type of change, description, linked issues, testing instructions, etc.).
    * Request reviews from relevant team members.

6.  **Code Review & Iteration:**
    * Address reviewer comments and push new commits to your feature branch. The PR will automatically update.
    * Ensure all CI checks (linting, tests) pass on the PR.

7.  **Merging:**
    * Once approved and all checks pass, the PR will be **Squash and Merged** into the `develop` branch. This creates a single, clean commit in the `develop` history, preserving the logical unit of work.
    * The feature branch can then be deleted.

---

## 4. Running Local Checks (Pre-Commit/Pre-Push)

It is crucial to run automated checks locally before pushing your code or opening a Pull Request. **SaaScript uses [Husky](https://typicode.io/husky/) to automatically run many of these checks via Git hooks** (e.g., `pre-commit`, `pre-push`), ensuring consistency.

However, you can also run them manually from the `saascript/` root directory:

* **Run all tests across the monorepo:**
    ```bash
    npm test # or yarn test
    ```
    * For specific service tests, refer to [Local Development Guide](docs/local-development.md).

* **Lint and automatically fix (where possible) code style issues:**
    ```bash
    npm run lint:fix # or yarn lint:fix
    ```

* **Format code using Prettier (ensure consistent formatting):**
    ```bash
    npm run format # or yarn format
    ```
    (Note: `npm run lint:fix` often includes formatting, but `npm run format` can be run explicitly).
