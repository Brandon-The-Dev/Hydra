const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const hd = '<:HYDRA_D:782294387676938280>'
const hr = '<:HYDRA_RUBY:782295231734743070>'
const hg = '<:HYDRA_GADE:782295694806745139>'
const ha = '<:HYDRA_AMETHYST:782298032624107550>'
const hp = '<:HYDRA_PRECIOUS:782300656362979379>'

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'pickaxe');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'pickaxe');
    let array = [];
    array = user.items.filter(x => x.name !== 'pickaxe');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : You don't own a \`PICKAXE\`, you need to buy one to use this command.`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  
  

const randomMessage = [
  'd','d','d','d','d',
  'r','r','r','r',
  'g','g','g',
  'a','a',
  'p',
  'missed','missed','missed','missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'd') {
        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embeddiamond = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Diamond Gem ${hd}.`)
        .setColor("GREEN")
        message.channel.send(Embeddiamond);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'diamond');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'diamond');
        if (findItem) {
            userInv.push({ name: 'diamond', amount: (findItem.amount + Amount), description: `${hd} **Diamond Gem** \nsell the diamond to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'diamond', amount: Amount, description: `${hd} **Diamond Gem** \nsell the diamond to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'r') {        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedruby = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Ruby Gem ${hr}.`)
        .setColor("GREEN")
        message.channel.send(Embedruby);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ruby');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ruby');
        if (findItem) {
            userInv.push({ name: 'ruby', amount: (findItem.amount + Amount), description: `${hr} **Ruby Gem** \nsell the ruby to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'ruby', amount: Amount, description: `${hr} **Ruby Gem** \nsell the ruby to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'g') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedgade = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Gade Gem ${hg}.`)
        .setColor("GREEN")
        message.channel.send(Embedgade);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'gade');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'gade');
        if (findItem) {
            userInv.push({ name: 'gade', amount: (findItem.amount + Amount), description: `${hg} **Gade Gem** \nsell the gade to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'gade', amount: Amount, description: `${hg} **Gade Gem** \nsell the gade to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'a') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Amethyst Gem ${ha}.`)
        .setColor("GREEN")
        message.channel.send(Embedveryrare);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'amethyst');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'amethyst');
        if (findItem) {
            userInv.push({ name: 'amethyst', amount: (findItem.amount + Amount), description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'amethyst', amount: Amount, description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'p') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${Amount}** x Precious Gem ${hp}.`)
        .setColor("GREEN")
        message.channel.send(Embedled);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'precious');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'precious');
        if (findItem) {
            userInv.push({ name: 'precious', amount: (findItem.amount + Amount), description: `${hp} **Precious Gem** \nsell the precious to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'precious', amount: Amount, description: `${hp} **Precious Gem** \nsell the precious to make money.` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setDescription(`${x} **${member.user.username}** : You went mining, and found 0 gems.`)
        .setColor("RED")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'mine', // Command Name
    description: 'use your pickaxe to find gems.', // Description
    usage: 'h mine', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 10// Command Cooldown
}
