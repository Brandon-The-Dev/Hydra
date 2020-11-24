const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const user = await bot.fetchUser(message.author.id);
    let number = 5 * parseInt(args[0]);
    let page;
    if (user.items.length <= 5) page = 1;
    else if (user.items.length <= 10) page = 2;
    else if (user.items.length <= 15) page = 3;
    else if (user.items.length <= 20) page = 4;
    if (!args[0]) {
        number = 5;
    }
    let item = user.items.slice(number - 5, number);
    if (item.length < 1) {
        return message.channel.send('You have no items.');
    }
    const items = item.map(x => `${x.description}\n  \`id: ${x.name} \` x ${x.amount.toLocaleString()}`);
    const embed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("https://top.gg/bot/679710920334639115/vote")
        .setTitle(`${message.author.username}'s Inventory`)
        .setDescription(`${items.join('\n\n')}`)
        .setFooter(`Page ${args[0] || 1} of ${page}`)
        .setColor('RANDOM');
    message.channel.send(embed);
}

module.exports.config = {
    name: 'inventory', // Command Name
    description: "displays your inventory.", // Description
    usage: 'h inventory', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['inv'], // Aliases 
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown

}
