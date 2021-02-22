const { Client, Message, MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`
${i} Hydra+ Update Log :

Date : \`23/2/2021\`

1. Added command \`BlackJack\`
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
    aliases: ['log'],
    bankSpace: 1,
    cooldown: 5
}
