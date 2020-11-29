const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 13)+1;
    const userChoice = Math.floor(Math.random() * 13)+1;
    const userData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  

    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
        if (userData.passive == true) return message.channel.send(passivewarn);
  
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Enter the amount you want to gamble. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);
  
    let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : The minimum you can gamble is \`200\` coins.`);

           if (betAmount < 200) return message.channel.send(coinmin);
    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
  
    let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You dont have that many coins.`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = parseInt(betAmount + (betAmount * 0.20));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("https://top.gg/bot/679710920334639115/vote")
        .setDescription(`Gamble V2 | Player : **${member.user.username}** \n\nHydra+ rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\nWin Rate: \`${Math.floor(userChoice-botRoll)*10}%\`\n\nWinnings: **${wonCoins.toLocaleString()}** coins`)
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
      const tieCoins = parseInt(betAmount/2);
        userData.coinsInWallet -= parseInt(tieCoins);
        await userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("https://top.gg/bot/679710920334639115/vote")
        .setDescription(`Gamble V2 | Player : **${member.user.username}** \n\nHydra+ rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\n**${member.user.username}** & **Hydra+**:Tied\n\nLost: **${tieCoins.toLocaleString()}** coins`)
        message.channel.send(tieEmbed);
    } else if (botRoll > userChoice) {
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        const lostEmbed = new MessageEmbed()
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("https://top.gg/bot/679710920334639115/vote")
        .setDescription(`Gamble V2 | Player : **${member.user.username}** \n\nHydra+ rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\nLost Rate: \`${Math.floor(botRoll-userChoice)*10}%\`\n\nlost: **${lostCoins.toLocaleString()}** coins`)
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'gamble', // Command Name
    description: 'gamble your coins away or gain big.', // Description
    usage: 'h gamble <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
