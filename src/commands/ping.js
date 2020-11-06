module.exports.run = async (bot, message, args) => {
    message.channel.send('Pinging...')
    .then(m => m.edit(`:ping_pong: My ping is ${bot.ws.ping} ms`))
    .catch(err => console.log(err));
}
module.exports.config = {
    name: 'ping', // Command Name
    description: 'Ping command.', // Description
    usage: 'h ping', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 0 // Command Cooldown
}
