const { MessageEmbed } = require('discord.js');
const itemss = require('../utils/items');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:yees:695992617015574534>'
const fetch = require('node-fetch')

module.exports.run = async (bot, message, args) => { 
 try {
   const random = Math.round(Math.random(0.5) * 200);
   // ${random.toLocaleString()} coins.
   const member = message.member;
       let likes = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${member.user.username}** : Your dog photo recived ${random.toLocaleString()} upvotes.`);
   fetch('https://api.thedogapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => {
      var embed = new MessageEmbed()
      .setDescription(`${i} **${member.user.username}** : Posted this photo to reddit.`)
      .setImage(json[0].url)
      .setColor("BLUE")
      message.channel.send(embed).then(message.channel.send(likes));
      
      bot.giveCoins(message.author.id, random);
    })
  } catch (err) {
    message.channel.send(bot.errors.genericError + err.stack).catch();
  }
}
module.exports.config = {
    name: 'dog', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h beg', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}

