const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const random = Math.round(Math.random() * 100);
    const randomMessage = [
        `**Elon Musk** gave you ${random.toLocaleString()} coins.`,
        `**Bill Gates** gave you ${random.toLocaleString()} coins.`,
        `A **beggar** gave you ${random.toLocaleString()} coins.`,
        `Barack Obama gave you ${random.toLocaleString()} coins.`,
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    let begembed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${usertag.user.username}** : ${response}`);

    await message.channel.send(begembed).catch();
  
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'beg', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h beg', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 13, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

