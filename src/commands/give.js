module.exports.run = async (bot, message, args) => {
    const authorData = await bot.fetchUser(message.author.id);
    if (authorData.passive == true) return message.channel.send(`You're in passive mode, turn it off to give others coins`);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]);

    if (!member || !args[0]) {
        return message.channel.send(`Who are you giving the coins to?`);
    }
    if (member.user.id == message.author.id) return message.channel.send(`Lol you can't give yourself coins u crazy.`);
    if (!args[1]) {
        return message.channel.send(`How much coins are you giving them?`);
    }

    if (isNaN(args[1]) && args[1] != 'all') {
        return message.channel.send(`Thats not a valid option`)
    }
    const userData = await bot.fetchUser(member.user.id);
    if (userData.passive == true) return message.channel.send(`That user is in passive mode, they can't recive any coins`);
    if (args[1] == 'all') {
        const toGive = authorData.coinsInWallet;

        authorData.coinsInWallet = 0;

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + toGive);

        userData.save();

        message.channel.send(`You gave ${member} **${parseInt(toGive).toLocaleString()}** coins`); //Change the message how u like
    } else {
        const toGive = args[1];

        if (toGive > authorData.coinsInWallet) return message.reply(`You don't have that much coins`);

        authorData.coinsInWallet = (authorData.coinsInWallet - parseInt(toGive));

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + parseInt(toGive));

        await userData.save();

        message.channel.send(`You gave ${member} **${parseInt(toGive).toLocaleString()}** coins`); //Change the message how u like
    }

}
module.exports.config = {
    name: 'give', // Command Name
    description: 'give user coins.', // Description
    usage: 'h give <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
