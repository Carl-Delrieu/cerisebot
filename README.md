# CeriseBot

**CeriseBot** is a Discord bot designed to add moderation tools, utility features and much more to my Discord server. Built with Discord.js

[![Discord.js](https://img.shields.io/npm/v/discord.js)](https://www.npmjs.com/package/discord.js)

## Table of Contents

- [Quick Setup](#quick-setup)
- [Required Bot Intents](#required-bot-intents)

## Quick Setup

### Prerequisites
- Node.js 18.0.0 or higher
- Discord bot application with proper intents

1. **Clone the Repository**
```bash
git clone https://github.com/Carl-Delrieu/cerisebot.git
cd cerisebot
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
```bash
cp .env.example .env
```
Edit `.env` file with your own config
```env
# Discord Bot Configuration
PREFIX=!
DISCORD_TOKEN=YOUR_TOKEN_HERE
OWNER_IDS=OWNER_ID_1
CLIENT_ID=YOUR_CLIENT_ID_HERE
GUILD_ID=YOUR_GUILD_ID_HERE
```


## Required Bot Intents
CeriseBot requires the following Discord intents:
- **Guilds**
- **Guild Members**
- **Guild Messages**
- **Message Content**

### Required Permissions
- **View Channels**

## License

CeriseBot is released under the MIT License. See [LICENSE](LICENSE) for details.