module.exports.run = async (bot, message, args) => {
    const another = Math.round(Math.random() * 15);
    if (another === 4) {
        return message.channel.send(`**Brnadon-Dev**: lol your POOR !`);
    }
    const random = Math.round(Math.random() * 100);
    const randomMessage = [
        `WOW **Elon Musk** gave you ${random.toLocaleString()} coins.`,
        `**Bill Gates** gave you ${random.toLocaleString()} coins.`,
        `A **beggar** found ${random.toLocaleString()} coins for you.`,
        `**ur mom** found ${random.toLocaleString()} coins while cleaning the house.`,
        `You looked inside your **stepsister's** drawer and found ${random.toLocaleString()} coins.`,
        `You asked your **dog** and he vomited ${random.toLocaleString()} coins.`,
        `You subscribed to **Brandon-Dev** so he gave you ${random.toLocaleString()} coins.`,
    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    await message.reply(`${response}`)
    .catch();
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'beg', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h beg', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}

