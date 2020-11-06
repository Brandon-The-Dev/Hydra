module.exports.run = async (bot, message, args) => {
    let data = await bot.fetchUser(message.author.id);

    if (args.join(' ') === 'all') {
        data.coinsInWallet += data.coinsInBank;

        await message.channel.send(`Withdrawed **${data.coinsInBank}** coins.`);

        data.coinsInBank -= data.coinsInBank;

        await data.save();
    } else {
        if (isNaN(args[0])) {
            return message.channel.send('That\'s not a number.');
        }

        if (parseInt(args[0]) > data.coinsInBank) {
            return message.channel.send('You do not have that much coins.');
        }

        data.coinsInWallet += parseInt(args[0]);

        await message.channel.send(`Withdrawed **${args[0]}** coins.`);

        data.coinsInBank -= parseInt(args[0]);

        await data.save();
    }
}

module.exports.config = {
    name: 'withdraw', // Command Name
    description: 'withdraws money from your bank.', // Description
    usage: 'h withdraw <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['with'], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}