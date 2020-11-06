const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 13)+1;
    const userChoice = Math.floor(Math.random() * 13)+1;
    const userData = await bot.fetchUser(message.author.id);
    if (userData.passive == true) return message.channel.send(`You're in passive mode, turn it off to gamble`);
    let betAmount = args[0];
    const result = userChoice-botRoll;
    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(`So how much coins are you gambling again?`);
    if (betAmount < 200) return message.channel.send(`Sorry bud, you can only gamble \`200+\` coins`)
    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
    if (betAmount > userData.coinsInWallet) {
        return message.channel.send("You don't have that much coins lol");
    }
    if (botRoll < userChoice) {
        const wonCoins = (betAmount + (betAmount * 0.55));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Bot rolled: \`${botRoll}\`\nYou rolled: \`${userChoice}\`\nWin Rate: \`${Math.floor(userChoice-botRoll)*10}%\`\nYou won: \`${wonCoins.toLocaleString()}\` coins`)
        .setTitle('You Won!')
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
        userData.coinsInWallet -= betAmount/2
        await userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setDescription(`Bot rolled: \`${botRoll}\`\nYou rolled: \`${userChoice}\`\nYou lost: \`${(betAmount/2).toLocaleString()}\``)
        .setTitle('Its a tie!')
        message.channel.send(tieEmbed);
    } else if (botRoll > userChoice) {
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        const lostEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Bot rolled: \`${botRoll}\`\nYou rolled: \`${userChoice}\`\nLost Rate: \`${Math.floor(botRoll-userChoice)*10}%\`\nYou lost: \`${lostCoins.toLocaleString()}\` coins`)
        .setTitle('You lost!')
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'gamble', // Command Name
    description: 'gamble your coins away or gain big.', // Description
    usage: 'h gamble <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bet'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}
