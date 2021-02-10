const { MessageEmbed } = require("discord.js")
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`${i} Hydra+ Live Stats :`)
    .addField(`**Servers :**`,` [** [\`${bot.guilds.cache.size.toLocaleString()}\`](https://docs.brandondev.xyz/)** ]`)
    .addField(`**Users :**`,`[ **[\`${message.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`](https://docs.brandondev.xyz/) **] `)
    .addField(`**Links** :`, "[\`Support Server\`](https://discord.gg/XqezQaK) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=679710920334639115&permissions=8&scope=bot) | [\`Vote For Me\`](https://top.gg/bot/679710920334639115/vote) | [\`Documentation\`](https://docs.brandondev.xyz/) ")
    .setThumbnail(bot.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
    .setColor("BLUE") //[\`s\`](https://docs.brandondev.xyz/)
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'stats',
    description: 'See the bot\'s statisctics',
    usage: 'h stats',
    botPerms: [],
    userPerms: [],
    aliases: ['servers', 'users', 'stat'],
    bankSpace: 1,
    cooldown: 5
}
