const ms = require("parse-ms");
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

    let user = message.author;
    let author = await bot.fetchUser(`work_${message.guild.id}_${user.id}`)

    let timeout = 360;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 300) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✅ You worked as a ${replies[result]} and earned ${amount} coins`);
        message.channel.send(embed1)
        
        bot.giveCoins(message.author.id, amount)
    };
}

module.exports.config = {
    name: 'work', // Command Name
    description: 'work', // Description
    usage: 'h work', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 30 // Command Cooldown
}

