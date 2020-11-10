module.exports.run = async (bot, message, args) => {
    const another = Math.round(Math.random() * 15);
    if (another === 4) {
        return message.channel.send(`**Brandon-Dev**: you cant search me bruh`);
    }
    const random = Math.round(Math.random() * 400);
    const randomMessage = [
        `You searched in the Bin, You found ${random.toLocaleString()} coins.`,
        `You searched in the Drain, You found ${random.toLocaleString()} coins.`,
        `You searched in the Fridge, You found ${random.toLocaleString()} coins.`,
        `You searched in the Garage, You found ${random.toLocaleString()} coins.`,
        `You searched in your bedroom, You found ${random.toLocaleString()} coins.`,
        `You searched in the cracks of the sofa, You found ${random.toLocaleString()} coins.`,
        `You searched your mothers draws, You found ${random.toLocaleString()} coins.`,
    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    await message.reply(`${response}`)
    .catch();
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'search', // Command Name
    description: 'search for coins.', // Description
    usage: 'h search', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
