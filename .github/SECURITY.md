# Security Policy

## Supported versions

Security patches are released for the following versions. Please make sure you're running a supported version before reporting an issue.

| Version | Supported          |
| ------- | ------------------ |

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

If you discover a security vulnerability (e.g. a permission bypass, token leak, injection vulnerability, or any way to make the bot behave outside its intended scope), please report it privately using one of the following methods:

### GitHub Private Vulnerability Reporting

1. Go to the [Security tab](../../security) of this repository
2. Click **Report a vulnerability**
3. Fill in the details — this creates a private discussion visible only to maintainers

## Scope

This policy covers:

- The bot's source code in this repository
- Command permission handling and access control
- Data handling (user data, server configs, tokens, API keys)
- Dependencies with known vulnerabilities (see also our [Dependabot](./dependabot.yml) config)

Out of scope:

- Issues in third-party libraries (please report those upstream, but let us know too if it affects us directly)
- Social engineering or phishing attempts against server members
- Rate-limiting or abuse issues that don't involve a code vulnerability (e.g. spam) — please report these as a regular issue instead
