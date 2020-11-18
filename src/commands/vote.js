module.exports.run = async (bot, message, args) => {
message.channel.send(`Vote For Hydra+ Here : \n https://top.gg/bot/679710920334639115/vote`);
}

module.exports.config = {
    name: 'vote', // Command Name
    description: 'allows you to vote.', // Description
    usage: 'h vote', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}


