const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒", "🍋"];
const { MessageEmbed } = require('discord.js');  
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'

module.exports.run = async (bot, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const userData = await bot.fetchUser(message.author.id);
  
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
        if (userData.passive == true) return message.channel.send(passivewarn);
           let betAmount = args[0];

    let coinswarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Enter the amount you want to gamble. `);

           if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : The minimum you can gamble is \`50\` coins.`);

    if (betAmount < 50) return message.channel.send(coinmin);
  
    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);

    let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You dont have that many coins.`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    let user = message.author;
    let coinsInWallet = await bot.fetchUser(message.author.id);
    let win = false;

  //let coinsInWallet = await bot.fetchUser(message.author.id);
  

    let moneyhelp = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Specify an amount you want to gamble.`); 


    if (betAmount > coinsInWallet) return message.channel.send(moneywarn);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  {
        betAmount = parseInt(betAmount * 1.5)
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
       betAmount = parseInt(betAmount * 1.5)
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`**Slots V2** | Player : **${member.user.username}** \n\n${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nWinnings: **${betAmount.toLocaleString()}** coins`)
            .setColor("GREEN")
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setFooter("https://top.gg/bot/679710920334639115/vote")
        message.channel.send(slotsEmbed1)
        bot.giveCoins(message.author.id, betAmount)
    } else {
      const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        let slotsEmbed = new MessageEmbed()
            .setDescription(`**Slots V2** | Player : **${member.user.username}** \n\n${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nLost: **${lostCoins.toLocaleString()}** coins`)
            .setColor("RED")
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setFooter("https://top.gg/bot/679710920334639115/vote")
        message.channel.send(slotsEmbed)
    }

}

module.exports.config = {
    name: 'slots', // Command Name
    description: 'gamble your coins away or gain big.', // Description
    usage: 'h slots', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['slot'], // Aliases 
    bankSpace: 13, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
