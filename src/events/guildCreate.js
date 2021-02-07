const { MessageEmbed } = require('discord.js');
module.exports = async (bot, guild) => {

  var embed = new MessageEmbed()
        .setColor("#8C00FF")
        .setDescription(`
\n
Hello, am Hydra+ thank you for inviting me to your server.
To see the list of commands type [\`h help\`](https://docs.brandondev.xyz/)
**Links** :
[\`Support Server\`](https://discord.gg/XqezQaK) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=679710920334639115&permissions=8&scope=bot) | [\`Vote For Me\`](https://top.gg/bot/679710920334639115/vote) | [\`Documentation\`](https://docs.brandondev.xyz/)
`)
		   guild.systemChannel.send(embed)

	
let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("EMBED_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
  var embed = new MessageEmbed()
        .setColor("#8C00FF")
        .setDescription(`
\n
Hello, am Hydra+ thank you for inviting me to your server.
To see the list of commands type [\`h help\`](https://docs.brandondev.xyz/)
**Links** :
[\`Support Server\`](https://discord.gg/XqezQaK) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=679710920334639115&permissions=8&scope=bot) | [\`Vote For Me\`](https://top.gg/bot/679710920334639115/vote) | [\`Documentation\`](https://docs.brandondev.xyz/)
`)
  defaultChannel.send(embed)
	
	
	
	
 await bot.dbl.postStats(bot.guilds.cache.size);
}
