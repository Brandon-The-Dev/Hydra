module.exports.run = async (bot, message, args) => {
    const another = Math.round(Math.random() * 15);
    if (another === 4) {
        return message.channel.send(`**Brnadon-Dev**: lol your POOR !`);
    }
    const random = Math.round(Math.random() * 100);
    const randomMessage = [
        `You assassinated **Bill Gates** you was payed ${random.toLocaleString()} coins.`,
      `You stole from a poor old grannie and she only had ${random.toLocaleString()} coins.`,
      `You raided a drug dealers home and found ${random.toLocaleString()} coins.`,
      `You murdered **Donald Trump** you was payed ${random.toLocaleString()} coins.`,
      `you almost got shot, but you had **GODMODE** enabled and killed him you was payed ${random.toLocaleString()} coins.`,
    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    await message.reply(`${response}`)
    .catch();
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'crime', // Command Name
    description: 'you brake the law or do something bad for coins.', // Description
    usage: 'h crime', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

