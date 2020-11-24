const { MessageEmbed } = require("discord.js")
const i = '<:info:688057843558908013>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`${i} Hydra+ is currently deployed in [ **${bot.guilds.cache.size.toLocaleString()}** ]  servers.`)
    .setColor("BLUE")
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'servers',
    description: 'See the bot\'s statisctics',
    usage: 'h servers',
    botPerms: [],
    userPerms: [],
    aliases: ['servers'],
    bankSpace: 1,
    cooldown: 5
}
