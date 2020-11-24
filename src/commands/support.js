const { MessageEmbed } = require('discord.js')
const i = '<:infomation:779736273639440394>'
const x = '<:noov:695993429087354991> '
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
      const member = message.member;
      const supportEmbed = new MessageEmbed()

        .setDescription(`${i} **${member.user.username}** : If you have came across an \`ERROR\` or genuinely need a little help with the bot please feel free to join the server and create a ticket and the support team or the developers will respond as soon as they are available. [Support Server](https://discord.gg/XqezQaK)`)
        .setColor('#81bcfc')
    message.channel.send(supportEmbed)
}
module.exports.config = {
    name: 'support', // Command Name
    description: 'support server command.', // Description
    usage: 'h support', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 13, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
