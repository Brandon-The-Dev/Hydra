const { MessageEmbed, Message } = require('discord.js');
const moment = require('moment');
const pm = require('pretty-ms');
/**
 * @param {Message} message
 */
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const user = await bot.fetchUser(member.user.id);

    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
    if (member.presence.status === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'Offline';

    const createDays = Math.floor((Date.now() - member.user.createdAt) / 86400000);
    const joinDays = Math.floor((Date.now() - member.joinedAt) / 86400000);
    const profileEmbed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL())
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .addFields(
            { name: 'Account created at', value: moment.utc(member.user.createdAt).format("ddd, MMM Do YYYY, HH mm A") + ` **${createDays}** Day(s) ago`, inline: true },
            { name: 'Joined server at', value: moment.utc(member.joinedAt).format("ddd, MMM Do YYYY, HH mm A") + ` **${joinDays}** Day(s) ago`, inline: true },
            { name: 'Status', value: `${member.presence.status}`, inline: true },
            { name: `Economy`, value: 
            `• Total Coins: **${(user.coinsInBank + user.coinsInWallet).toLocaleString()}**\n• Bank Coins: **${user.coinsInBank.toLocaleString()}**\n• Bank Space: **${user.bankSpace.toLocaleString()}**\n• Wallet Coins: **${user.coinsInWallet.toLocaleString()}**
            `, inline: true },
          { name: `Economy`, value: `• Total Items: **${user.items.length.toLocaleString()}**\n• Passive mode: \`${user.passive}\`\n• Next daily reward in: ${pm((Date.parse(user.dailyStreak) + 86400000) - Date.now())}
            `, inline: true },
        )
        .setColor('RANDOM')

    message.channel.send(profileEmbed);
}
module.exports.config = {
    name: 'profile', // Command Name
    description: 'see your profile or others.', // Description
    usage: 'h profile', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['userinfo'], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 3 // Command Cooldown
}
