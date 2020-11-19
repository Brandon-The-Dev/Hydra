const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 7)+1;
    const userChoice = Math.floor(Math.random() * 7)+1;
    const userData = await bot.fetchUser(message.author.id);
  
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
    if (userData.passive == true) return message.channel.send(passivewarn);
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ Enter the amount you want to gamble. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ The minimum you can gamble is \`200\` coins.`);

    if (betAmount < 200) return message.channel.send(coinmin);

    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
  
    let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`❌ You dont have that many coins.`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = (betAmount + (betAmount * 0.55));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Bot rolled: \`${botRoll}\`\nYou rolled: \`${userChoice}\`\nYou won: \`${wonCoins.toLocaleString()}\` coins`)
        .setTitle('You Won!')
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
        userData.coinsInWallet -= betAmount/2
        userData.save();
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
        .setDescription(`Bot rolled: \`${botRoll}\`\nYou rolled: \`${userChoice}\`\nYou lost: \`${lostCoins.toLocaleString()}\` coins`)
        .setTitle('You lost!')
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'dice', // Command Name
    description: 'gamble your saving and try win big.', // Description
    usage: 'h dice <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bet'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}

