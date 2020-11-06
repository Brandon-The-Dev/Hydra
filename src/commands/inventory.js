const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
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
    const items = item.map(x => `**${x.name}** - ${x.amount.toLocaleString()}\n${x.description}`);
    const embed = new MessageEmbed()
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
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown

}
