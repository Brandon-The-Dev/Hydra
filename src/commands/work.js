const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js")
const i = '<:infomation:779736273639440394>'
const x = '<:noov:695993429087354991> '
const tick = '<:bigtick:779736050892931082>'

module.exports.run = async (bot, message, args) => {

    let user = message.author;
    let author = await bot.fetchUser(`work_${message.guild.id}_${user.id}`)

    let timeout = 360;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${i} **${user.user.username}** : You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {
        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 300) + 1;
        let embed1 = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${tick} You worked as a ${replies[result]} and earned ${amount} coins`);
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
    bankSpace: 50, // Amount of bank space to give when command is used.
    cooldown: 15 // Command Cooldown
}

