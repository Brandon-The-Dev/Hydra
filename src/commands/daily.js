/* const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const tick = '<:bigtick:779736050892931082>'
const cd = '<:hazzered:779736248813879296>'

module.exports.run = async (bot, message, args) => {
  const member = message.member;
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.dailyStreak) + 86400000) > Date.now()) {
        const embed = new MessageEmbed()
            .setDescription(`${cd} **${member.user.username}** : This command is on Cooldown\n\n Woah there, you need to wait \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 86400000) - Date.now())}\` before using this command again.\n\nThe default cooldown on this command is \`1d\`.`)
            .setColor('#FFA500');
        return message.channel.send(embed);
    } else {
        user.dailyStreak = new Date(Date.now());
        (user.coinsInWallet += 1000).then(user.save())
        const claimed = new MessageEmbed()
            .setDescription(`${tick} Use this command in \`24h\` to claim your daily reward again!`)
            .setColor('GREEN');
        message.channel.send(claimed);


    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'h daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
*/
const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const tick = '<:bigtick:779736050892931082>'
const cd = '<:hazzered:779736248813879296>'

module.exports.run = async (bot, message, args) => {
  const member = message.member;
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.dailyStreak) + 86400000) > Date.now()) {
        const embed = new MessageEmbed()
            .setDescription(`${cd} **${member.user.username}** : This command is on Cooldown\n\n Woah there, you need to wait \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 86400000) - Date.now())}\` before using this command again.\n\nThe default cooldown on this command is \`1d\`.`)
            .setColor('#FFA500');
        return message.channel.send(embed);
    } else {
        const claimed = new MessageEmbed()
            .setDescription(`${tick} **${member.user.username}** : Use this command in \`24h\` to claim your daily reward again!`)
            .setColor('GREEN');
        message.channel.send(claimed);
         user.coinsInWallet += 1000;
       user.save().then(user.dailyStreak = new Date(Date.now()))
      
    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'h daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
