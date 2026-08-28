# Contributing

Thanks for taking the time to contribute! This guide explains how to report bugs, suggest features, and submit pull requests to this bot.

## Table of contents

- [Reporting a bug](#reporting-a-bug)
- [Suggesting a feature](#suggesting-a-feature)
- [Submitting a pull request](#submitting-a-pull-request)
- [Development setup](#development-setup)
- [Code style](#code-style)

## Reporting a bug

1. Check the [existing issues](../../issues) to make sure it hasn't already been reported.
2. Open a new issue using the **🐞 Bug Report** template.
3. Include as much detail as possible: steps to reproduce, logs, bot version, and library/runtime version.

## Suggesting a feature

1. Check the [existing issues](../../issues) to avoid duplicates.
2. Open a new issue using the **🚀 Feature Request** template.
3. Explain the problem you're trying to solve, not just the solution — it helps us find the best approach.

## Submitting a pull request

### 1. Fork and branch

```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
git checkout -b feature/my-new-command
```

Use a clear branch prefix:
- `feature/...` for new features
- `fix/...` for bug fixes
- `hotfix/...` for urgent production fixes
- `docs/...` for documentation only

### 2. Choose the right PR template

By default, opening a PR gives you an **empty** description. GitHub doesn't let templates be selected from a dropdown for PRs like it does for issues — you need to add a `?template=` parameter to the compare URL.

Replace `your-branch` below with your actual branch name, then paste the resulting link in your browser:

| Type | Link |
|------|------|
| Default | `https://github.com/Carl-Delrieu/cerisebot/compare/main...your-branch?template=default.md` |
| Feature | `https://github.com/Carl-Delrieu/cerisebot/compare/main...your-branch?template=feature.md` |
| Bug fix | `https://github.com/Carl-Delrieu/cerisebot/compare/main...your-branch?template=bugfix.md` |
| Hotfix | `https://github.com/Carl-Delrieu/cerisebot/compare/main...your-branch?template=hotfix.md` |

**Example:** if your branch is `feature/remind-command`, use:
`https://github.com/Carl-Delrieu/cerisebot/compare/main...feature/remind-command?template=feature.md`

### 3. Commit guidelines

Use clear, descriptive commit messages. We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

- feat: add /remind command
- fix: correct role permission check in /ban
- docs: update README with new intents requirement

### 4. Before submitting

- [ ] Test your changes on a test server/bot instance
- [ ] Make sure existing commands still work
- [ ] Update the README or command list if you added/changed a command
- [ ] Document any new required permissions or gateway intents

## Development setup

```bash
# Install dependencies
npm install

# Copy the example env file and fill in your test bot token
cp .env.example .env

# Run the bot locally
npm run dev
```

You'll need:
- A **test Discord server** where you have admin permissions
- A **separate bot application** (do not use the production bot token) — create one at the [Discord Developer Portal](https://discord.com/developers/applications)
- The required gateway intents enabled on your test bot (see README)

## Code style

- Follow the existing code structure (commands/events folder layout)
- Keep commands modular — one file per command when possible
- Comment complex logic, especially permission checks and API calls
- Avoid hardcoding IDs (server, channel, role) — use config/env variables

## Questions?

Feel free to open a [discussion](../../discussions) if you're unsure about anything before starting work.