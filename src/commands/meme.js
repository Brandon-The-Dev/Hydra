const { MessageEmbed } = require('discord.js');
const itemss = require('../utils/items');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const randomPuppy = require('random-puppy')

module.exports.run = async (bot, message, args) => { 
  try {
    const member = message.member;
    const random2 = Math.round(Math.random(0.5) * 200);
    let likes = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${member.user.username}** : Your meme recived ${random2.toLocaleString()} upvotes.`);
    const subReddits = ['dankmeme', 'meme', 'memes', 'spicy_memes', 'me_irl']
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random)
    const embed = new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`${i} **${member.user.username}** : Posted this photo to reddit.`)
      .setImage(img)
    
     bot.giveCoins(message.author.id, random2);
    message.channel.send(embed).then(message.channel.send(likes))
  } catch (err) {
    message.channel.send(bot.errors.genericError + err.stack).catch();
  }
}

module.exports.config = {
    name: 'meme', // Command Name
    description: 'post a meme for users to react too for coins.', // Description
    usage: 'h meme', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}

