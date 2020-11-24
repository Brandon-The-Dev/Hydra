const x = '<:noov:695993429087354991> '
const i = '<:infomation:779736273639440394>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const userData = await bot.fetchUser(message.author.id);
    const enable = ['true','on','enable'];
    const disable = ['false','off','disable'];
    if (!args[0]) {
        let status = userData.passive
        if (status == false) status=`\`DISABLED\``
        else status=`\`ENABLED\``
        
        let passive1embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${i} **${member.user.username}** : Your passive mode is curently ${status}.`);

            return message.channel.send(passive1embed).catch();
        //return message.channel.send(`Your passive mode is ${status}`);
    }
    if (enable.includes(args[0].toString().toLowerCase())) {
        let passive2embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${i} **${member.user.username}** : Your passive mode is already \`ENABLED\`.`);

        if (userData.passive == true) return message.channel.send(passive2embed).catch();
        //if (userData.passive == true) return message.reply(`You're already in passive mode`)

        userData.passive=true;
        await userData.save();

        let passive3embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${tick} **${member.user.username}** : I have \`ENABLED\` your passive mode`);

        message.channel.send(passive3embed).catch();
        //message.reply(`I have enabled your passive mode`);
    } else if (disable.includes(args[0].toString().toLowerCase())) {
         let passive4embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${i} **${member.user.username}** : Your passive mode is currently \`DISABLED\`.`);

        if (userData.passive == false) return message.channel.send(passive4embed).catch();
        //if (userData.passive == false) return message.reply(`You're not passive mode`);
        userData.passive=false;
        await userData.save();
        let passive5embed = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${tick} **${member.user.username}** : I have \`DISABLED\` your passive mode.`);

        message.channel.send(passive5embed).catch();
        //message.reply(`I have disabled your passive mode`);
    } else {
        let passive6embed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`${x} **${member.user.username}** : That is a invalid option.`);

        message.channel.send(passive6embed).catch();

        //message.reply(`Dude that's not a valid option`);
            
           }
}
module.exports.config = {
    name: 'passive', // Command Name
    description: 'Enable / Disable passive mode.', // Description
    usage: 'h passive <on or off>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
