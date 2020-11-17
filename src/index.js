require('dotenv').config();
const { Collection } = require('discord.js');
const DBL = require("dblapi.js");
const MongoClient = require('./utils/MongoClient');
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
const dbl = new DBL(process.env.TOPGGWEBHOOK, bot, { webhookPort: 5002, webhookAuth: '${{secrets.AUTH}}' }););

bot.login(process.env.TOKEN);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);

dbl.webhook.on('vote', async (vote) => {
    const user = bot.users.cache.fetch(vote.user);
    if(user){
    hook.send(`${user.username} just voted ${bot.user.username}`);
            }
})
