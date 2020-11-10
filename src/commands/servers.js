module.exports.run = async (bot, message, args) => {
    message.channel.send(`Servers amount: **${bot.guilds.cache.size.toLocaleString()}**`);;
}
module.exports.config = {
    name: 'servers', // Command Name
    description: 'see amount of bot\'s servers', // Description
    usage: 'h servers', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown .users.cache.size
}
