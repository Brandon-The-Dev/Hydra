const Discord = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const prefix = 't'
const cd = '<:hazzered:779736248813879296>'
module.exports = async (bot, message) => {
    const member = message.member;
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.toLowerCase().startsWith(prefix.toLowerCase())) {
        const messageArray = message.content.split(' ');
        const cmd = messageArray[1];
        const args = messageArray.slice(2);

        const command = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
        if (command) {
            bot.commandsUsed += 1;
            if (!bot.cooldowns.has(command.config.name)) {
                bot.cooldowns.set(command.config.name, new Discord.Collection());
            }

            const now = Date.now();
            const timestamps = bot.cooldowns.get(command.config.name);
            const cooldownAmount = (command.config.cooldown || 3) * 1000;

            if (timestamps.has(message.author.id)) {
                const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
                if (now < expirationTime) {
                    const timeLeft = (expirationTime - now) / 1000;
                    const cooldownEmbed = new Discord.MessageEmbed()
                        .setDescription(`${cd} **${member.user.username}** : This command is on a cooldown.\n\nYou will be able to run the command again in : \`${prettyMilliseconds(timeLeft * 1000)}\`.\n\nThe default cooldown on this command is \`${prettyMilliseconds(command.config.cooldown * 1000)}\`.`)
                        .setColor('#FFA500');
                    return message.channel.send(cooldownEmbed);
                }
            }
            else {
                if (!command.config.botPerms) return console.log("You didn't provide botPerms");
                if (!Array.isArray(command.config.botPerms)) return console.log('botPerms must be an array.');
                if (!command.config.userPerms) return console.log("You didn't provide userPerms.");
                if (!Array.isArray(command.config.userPerms)) return console.log('userPerms must be an array.')
                if (!message.guild.me.hasPermission(command.config.botPerms)) {
                    const beauty = command.config.botPerms.join('\`, \`'); 
                    const noBotPerms = new Discord.MessageEmbed()
                        .setTitle('Missing Permissions')
                        .setDescription(`I am missing these permissions: \`${beauty}\`.`)
                        .setColor('RED');
                    return message.channel.send(noBotPerms)
                }
                if (!message.member.hasPermission(command.config.userPerms)) {
                    const beauty = command.config.userPerms.join('\`, \`');
                    const noUserPerms = new Discord.MessageEmbed()
                    .setTitle('Missing Permissions')
                    .setDescription(`You are missing these permissions: \`${beauty}\`.`)
                    .setColor('RED');
                    return message.channel.send(noUserPerms)
                }
                if (command.config.bankSpace !== 0) {
                    bot.giveBankSpace(message.author.id, command.config.bankSpace);
                }
                await command.run(bot, message, args);
                timestamps.set(message.author.id, now);
                setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
            }
        }
    }
}
