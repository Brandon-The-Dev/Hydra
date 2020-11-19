const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const userData = await bot.fetchUser(message.author.id);
        if (userData.passive == true) return message.channel.send(`You're in passive mode, turn it off to gamble`);
           let betAmount = args[1];
           if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max');
           if (betAmount < 50) return message.channel.send(`Sorry bud, you can only gamble \`50+\` coins`)
           if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
           if (betAmount > userData.coinsInWallet) {
           return message.channel.send("You don't have that many coins.");
           }
             
        let user = message.author;

             
        function isOdd(num) {
            if ((num % 2) == 0) return false;
            else if ((num % 2) == 1) return true;
        }

        let colour = args[0];
        //let betAmount = args[1];
        let coinsInWallet = await bot.fetchUser(message.author.id);

        let random = Math.floor((Math.random() * 10));

        let moneyhelp = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setFooter("https://top.gg/bot/679710920334639115/vote")
            .setDescription(`❌ Specify an amount to gamble \n\n h roulette <color> <amount>`);

        let moneymore = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setFooter("https://top.gg/bot/679710920334639115/vote")
            .setDescription(`❌ You are betting more than you have`);

        let colorbad = new MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setFooter("https://top.gg/bot/679710920334639115/vote")
            .setDescription(`
❌ **Invalid colour please chose from below**

🔴Red | Multiplier: x1.5
\`h roulette red (amount)\`
⚫Black | Multiplier: x2
\`h roulette black (amount)\`
🟡 Yellow | Multiplier: x2.5
\`h roulette yellow (amount)\`
🟢Green | Multiplier: x5
\`h roulette green (amount)\`
                            `);

        if (!colour) return message.channel.send(colorbad);
        colour = colour.toLowerCase()
        if (!betAmount) return message.channel.send(moneyhelp);
        if (betAmount > coinsInWallet) return message.channel.send(moneymore);

        if (colour == "b" || colour.includes("black")) colour = 0;
        else if (colour == "r" || colour.includes("red")) colour = 1;
        else if (colour == "g" || colour.includes("green")) colour = 2;
        else if (colour == "y" || colour.includes("yellow")) colour = 3;
        else return message.channel.send(colorbad);

        if (random == 1 && colour == 2) { 
            betAmount *= 5
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed1 = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter("https://top.gg/bot/679710920334639115/vote")
                .setDescription(`🟢 **You won ${betAmount} coins**\n\nMultiplier: x5`);
            message.channel.send(moneyEmbed1)
          
        } else if (isOdd(random) && colour == 1) { 
            betAmount = parseInt(betAmount * 1.5)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed2 = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter("https://top.gg/bot/679710920334639115/vote")
                .setDescription(`🔴 **You won ${betAmount} coins**\n\nMultiplier: x1.5`);
            message.channel.send(moneyEmbed2)
          
          } else if (isOdd(random) && colour == 3) { 
            betAmount = parseInt(betAmount * 2.5)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed4 = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter("https://top.gg/bot/679710920334639115/vote")
                .setDescription(`🟡 **You won ${betAmount} coins**\n\nMultiplier: x2.5`);
            message.channel.send(moneyEmbed4)
            
        } else if (!isOdd(random) && colour == 0) { 
            betAmount = parseInt(betAmount * 2)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed3 = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter("https://top.gg/bot/679710920334639115/vote")
                .setDescription(`⚫ **You won ${betAmount} coins**\n\nMultiplier: x2`);
            message.channel.send(moneyEmbed3)
          
        } else { 
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
            let moneyEmbed4 = new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
                .setFooter("https://top.gg/bot/679710920334639115/vote")
                .setDescription(`❌ **You lost ${betAmount} coins** \n\nGoodluck next time`);
            message.channel.send(moneyEmbed4)
        }

    }


module.exports.config = {
    name: 'roulette', // Command Name
    description: 'gamble your coins away or gain big.', // Description
    usage: 'h roulette', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['roul' , 'roulet'], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
