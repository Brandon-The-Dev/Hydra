const { Client, Message, MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`${i} Uptime : ${pm(bot.uptime)}`)
    .setColor("BLUE")
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'uptime',
    description: 'See the bot\'s uptime',
    usage: 'h uptime',
    botPerms: [],
    userPerms: [],
    aliases: [],
    bankSpace: 1,
    cooldown: 5
}
