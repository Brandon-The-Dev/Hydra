module.exports.run = async (bot, message, args) => {
    const userData = await bot.fetchUser(message.author.id);
    const enable = ['true','on','enable'];
    const disable = ['false','off','disable'];
    if (!args[0]) {
        let status = userData.passive
        if (status == false) status='\`Disabled\`'
        else status='\`Enabled\`'
        return message.channel.send(`Your passive mode is ${status}`);
    }
    if (enable.includes(args[0].toString().toLowerCase())) {
        if (userData.passive == true) return message.reply(`You're already in passive mode`)
        userData.passive=true;
        await userData.save();
        message.reply(`I have enabled your passive mode`);
    } else if (disable.includes(args[0].toString().toLowerCase())) {
        if (userData.passive == false) return message.reply(`You're not passive mode`);
        userData.passive=false;
        await userData.save();
        message.reply(`I have disabled your passive mode`);
    } else message.reply(`Dude that's not a valid option`);
}
module.exports.config = {
    name: 'passive', // Command Name
    description: 'Enable / Disable passive mode.', // Description
    usage: 'h passive <on or off>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}