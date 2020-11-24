const { Client, Message, MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`
${i} Hydra+ Update Log :

Date : \`24/11/2020\`

1. All commands have been updated to embeds and added custom emoji's.

2. Fixed 1 issue with the \`Deposit\` & \`Withdraw\` as you could deposit & withdraw 0 coins. 

3. Added \`Roulette\` and \`Slots\`.

4. Fixed issue with \`Gamble\`, \`Dice\`, \`Roulette\`, \`Slots\` allowing you to gamble 0 coins.

5. 4. Fixed issue with \`Gamble\`, \`Dice\`, \`Roulette\`, \`Slots\` that after winning 0.5 coins it would brake the balance system.

6. Unfortunately there was a issue with the items in users profiles, as we changed the way the \`Inventory\` command is displayed. Also the users balance's have also been reset.
`)
    .setColor("BLUE")
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'updates',
    description: 'See the bot\'s updates',
    usage: 'h updates',
    botPerms: [],
    userPerms: [],
    aliases: ['servers'],
    bankSpace: 1,
    cooldown: 5
}
