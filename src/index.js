import 'dotenv/config';
import { Client, IntentsBitField } from 'discord.js';


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('clientReady', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.login(process.env.DISCORD_TOKEN);