# Project Collaboration Guidelines

## Folder Structure
- Follow the predefined folder structure strictly.
- Place page-specific components in the respective folder (e.g., `src/components/homepage/`).
- Reusable components go into `src/components/`.

## Code Standards
- Follow the ESLint and Prettier configurations to maintain code style.
- Name files and folders in camelCase (e.g., `userSettings`).

## Branching and Version Control
- Use descriptive names to indicate the purpose of the branch. Examples:
  - **Feature Development**: 
    `feature/<feature-name>` (e.g., `feature/homepage-design`, `feature/authentication`)
  - **UI Updates**: 
    `ui/<update-name>` (e.g., `ui/navbar-improvements`, `ui/dashboard-redesign`)
  - **Bug Fixes**: 
    `bugfix/<issue-name>` (e.g., `bugfix/navbar-alignment`, `bugfix/login-error`)
  - **Hotfixes (Urgent Fixes)**: 
    `hotfix/<issue-name>` (e.g., `hotfix/production-deployment`)

## Commit Messages
- Use descriptive and concise commit messages.
  - Example: `feat: add hero section to homepage`
  - Example: `fix: correct navbar alignment`

## Pull Requests (PRs)
- Create a PR for all changes.
- Assign at least one team member to review the PR.
- Include a clear description of changes in the PR.
- Merge changes to the main branch only after review.
