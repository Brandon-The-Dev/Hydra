const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let timeout = 5;

  let pages = [
              "🍪 **Cookie - __50__** __coins__\n`id: cookie`\nUse to make you fatter \n🔒 **Padlock - __10__,__000__** __coins__\n`id: padlock`\nUse this to stop those pesky robber\n📜 **Bank Note - __20__,__000__** __coins__\n`id: banknote`\nUse this to increase your back capacity\n🍀 **Lucky Clover - __10__,__000__** __coins__\n`id: luckyclover`\nUse this to increase you chances of robbing",
              "🔫 **Gun - __22__,__500__** __coins__\n`id: gun`\nUse this to go hunting\n🪓 **Axe - __10__,__000__** __coins__\n`id: axe`\nUse this to cut trees down!\n🎣 **Fishing Rod - __15__,__000__** __coins__\n`id: fishingrod`\nUse this to go fishing!\n⛏️ **Pickaxe - __30__,__000__** __coins__\n`id: pickaxe`\nUse this to mine gems!"
              ];
  let page = 1;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Welcome ${member.user.username} To Hydra+ Shop`)
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
    .setFooter(`page ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⏪')
  .then(r => {
    msg.react('⏩')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Page ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
}
/*
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(`Hydra+ Shop`)
        .addField("🍪 Cookie - __50__ __coins__","`id: cookie`\nUse to make you fatter")
        .addField("🔒 Padlock - __10__,__000__ __coins__","`id: padlock`\nUse this to stop those pesky robbers")
        .addField("📜 Bank Note - __20__,__000__ __coins__","id: banknote`\nUse this to increase your back capacity.")
        .addField("🔫 **Gun - __22__,__500__** __coins__")
        .addField("🪓 Axe - __10__,__000__ __coins__","`id: axe`\nUse this to cut trees down!")
        .addField("🎣 Fishing Rod - __15__,__000__ __coins__","`id: fishingrod`\nUse this to go fishing!")
        .addField("🍀 Lucky Clover - __10__,__000__ __coins__","`id: luckyclover`\nUse this to increase you chances of robbing")
        .setFooter("Shop Page 1 / page 1")
        message.channel.send(timeEmbed)

    };
*/
module.exports.config = {
    name: 'shop', // Command Name
    description: 'shop', // Description
    usage: 'h shop', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

