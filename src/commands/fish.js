const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const junkemoji = '<:HYDRA_JUNK:781846282473046016>'
const legfish = '<:HYDRA_FISH_LEG:781936373325365268>'
module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'fishingrod');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'fishingrod');
    let array = [];
    array = user.items.filter(x => x.name !== 'fishingrod');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : You don't own a \`FISHINGROD\`, you need to buy one to use this command.`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  
  

const randomMessage = [
  'junk',
  'common',
  'uncommon',
  'rare',
  'veryrare',
  'legendary',
  'missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'common') {
        
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedcommon = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${fishAmount}** x Common Fish 🐟`)
        .setColor("GREEN")
        message.channel.send(Embedcommon);
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Common Fish 🐟`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'common');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'common');
        if (findItem) {
            userInv.push({ name: 'common', amount: (findItem.amount + fishAmount), description: '🐟 **Common Fish** \nsell the common to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'common', amount: fishAmount, description: '🐟**Common Fish** \nsell the common to make money.' });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'uncommon') {        
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embeduncommon = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${fishAmount}** x Uncommon Fish 🐠`)
        .setColor("GREEN")
        message.channel.send(Embeduncommon);
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Uncommon Fish 🐠`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'uncommon');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'uncommon');
        if (findItem) {
            userInv.push({ name: 'uncommon', amount: (findItem.amount + fishAmount), description: '🐠 **Uncommon Fish** \nsell the uncommon to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'uncommon', amount: fishAmount, description: '🐠 **Uncommon Fish** \nsell the uncommon to make money.' });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'rare') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedrare = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${fishAmount}** x Rare Fish 🦑`)
        .setColor("GREEN")
        message.channel.send(Embedrare);
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Rare Fish 🦑`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'rare');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rare');
        if (findItem) {
            userInv.push({ name: 'rare', amount: (findItem.amount + fishAmount), description: '🦑 **Rare Fish** \nsell the rare to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'rare', amount: fishAmount, description: '🦑 **Rare Fish** \nsell the rare to make money.' });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'veryrare') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${fishAmount}** x Very Rare Fish 🐡`)
        .setColor("GREEN")
        message.channel.send(Embedveryrare);
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Very Rare Fish 🐡`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'veryrare');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'veryrare');
        if (findItem) {
            userInv.push({ name: 'veryrare', amount: (findItem.amount + fishAmount), description: '🐡 **Very Rare Fish** \nsell the veryrare to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'veryrare', amount: fishAmount, description: '🐡 **Very Rare Fish** \nsell the veryrare to make money.' });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'legendary') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${fishAmount}** x Legendary Fish ${legfish}.`)
        .setColor("GREEN")
        message.channel.send(Embedled);
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Legendary Fish 🐋`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'legendary');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'legendary');
        if (findItem) {
            userInv.push({ name: 'legendary', amount: (findItem.amount + fishAmount), description: `${legfish} **Legendary Fish** \nsell the legendary to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'legendary', amount: fishAmount, description: `${legfish} **Legendary Fish** \nsell the legendary to make money.` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'junk') {
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedjunk = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${Amount}** x Junk ${junkemoji}.`)
        .setColor("GREEN")
        message.channel.send(Embedjunk);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Fox 🦊`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'junk');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'junk');
        if (findItem) {
            userInv.push({ name: 'junk', amount: (findItem.amount + Amount), description: `${junkemoji} **Junk**\nsell junk to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'junk', amount: Amount, description: `${junkemoji} **Junk**\nsell the junk to make money.` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setDescription(`${x} **${member.user.username}** : You went fishing, and found 0 fish.`)
        .setColor("RED")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'fish', // Command Name
    description: 'use your fishing rod to catch fish.', // Description
    usage: 'h fish', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 30// Command Cooldown
}
