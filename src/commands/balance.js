const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
    const embed = new MessageEmbed()
        .setTitle(`${member.user.username}'s Balance`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setDescription(`💳**Wallet**: ${user.coinsInWallet.toLocaleString()}\n🏦**Bank**: ${user.coinsInBank.toLocaleString()}/${user.bankSpace.toLocaleString()}\n🌐**Total Net Worth**: ${(user.coinsInWallet + user.coinsInBank).toLocaleString()}`)
        .setColor('RANDOM');
    message.channel.send(embed);
}

module.exports.config = {
    name: 'balance',
    description: 'displays a user\'s balance.',
    usage: 'h balance',
    botPerms: [],
    userPerms: [],
    aliases: ['bal', 'bank'],
    bankSpace: 0,
    cooldown: 10
}
