# [Project Name] Project Tasks Index

This document provides an indexed list of all tasks for the **[Project Name]** project, organized by phase. Each entry includes a unique ID (`P<Phase_Number>-T<Task_Number>`), its high-level rationale, current status, a direct link to the detailed Markdown description for the task, and a reference to its corresponding GitHub Issue.

---

## Phase [X]: [Phase X Name]

### **P[X]-T[Y]:** [Task Title](tasks/phase-[X]/p[X]-t[Y].md)
* **Rationale:** [Explain why this task is needed (high-level), in generic terms relevant to this type of task. This should align with the task's specific purpose.]
* **GitHub Issue:** [Issue #ISSUE_NUMBER]([PROJECT_GITHUB_ISSUES_BASE_URL]/ISSUE_NUMBER)
* **Status:** To Do / In Progress / Review / Done

### **P[X]-T[Z]:** [Task Title](tasks/phase-[X]/p[X]-t[Z].md)
* **Rationale:** [Explain why this task is needed (high-level), in generic terms relevant to this type of task.]
* **GitHub Issue:** [Issue #ISSUE_NUMBER]([PROJECT_GITHUB_ISSUES_BASE_URL]/ISSUE_NUMBER)
* **Status:** To Do / In Progress / Review / Done

---

**(Repeat the "## Phase [X]: [Phase X Name]" block for each phase in your project. Within each phase, repeat the task entry block (`### **P[X]-T[Y]:** ...`) for every task.)**

**Instructions for Use:**

* **`[Project Name]`**: Replace with the actual project name (e.g., "SaaScript"). This should be consistent with your `project-overview.md`.
* **`[X]`**: Replace with the sequential phase number (e.g., `0`, `1`, `2`, ...).
* **`[Phase X Name]`**: Replace with the exact title of the corresponding phase from your `project-roadmap.md` (e.g., "Core Infrastructure & Initial Services").
* **`[Y]`, `[Z]`**: Replace with sequential task numbers within that phase (e.g., `1`, `2`, `3`, ...). Ensure `[Y]`, `[Z]`, etc., are unique within each phase.
* **`[Task Title]`**: Replace with a concise, action-oriented title for the task (ideally following Conventional Commits format, e.g., `type(scope): subject`).
* **`[Rationale]`**: Explain the high-level reason *why* this task exists.
* **`[PROJECT_GITHUB_ISSUES_BASE_URL]`**: Replace with the base URL for your project's GitHub Issues (e.g., `https://github.com/your-org/your-repo/issues`).
* **`ISSUE_NUMBER`**: Replace with the actual GitHub Issue number, or keep as a placeholder if the issue is not yet created.
* **`Status`**: Select **only one** of the options: `To Do`, `In Progress`, `Review`, `Done`. Default to `To Do` if uncertain.
* **Detailed Task File Link (`tasks/phase-[X]/p[X]-t[Y].md`)**: Ensure this path accurately reflects the location of the detailed task Markdown file.