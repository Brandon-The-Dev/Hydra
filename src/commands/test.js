module.exports.run = async (bot, message, args) => {
    message.channel.send('This Works.');
}

module.exports.config = {
    name: 'test', // Command Name
    description: 'A test command.', // Description
    usage: 'h test', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['big-test'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}