module.exports.run = async (bot, message, args) => {
    const user = await bot.fetchUser(message.author.id);
    if (user.passive == true) return message.channel.send(`You're in passive mode, turn that off to rob others`);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase());
    if (!member) {
        return message.channel.send("You think you can rob nobody?");
    }
    const devs = ['404205935251292160'];

    if (devs.includes(member.user.id)) return message.channel.send(`You can't rob the bot devs lol.`);
    
    const robbedUser = await bot.fetchUser(member.id);
    if (robbedUser.passive == true) return message.channel.send(`Leave them alone... they are in passive mode`);
    if (robbedUser.coinsInWallet < 1000) {
        return message.channel.send("This user doesn't have much coins, I wouldn't rob them");
    }
    if (user.items.find(x => x.name == 'luckyclover')) {
        const newInv = user.items.filter(i => i.name != 'luckyclover');
        const bypass = user.items.find(i => i.name == 'luckyclover');
        if (bypass.amount == 1) {
            user.items = newInv;
        } else {
            newInv.push({ name: 'luckyclover', amount: bypass.amount - 1, description: bypass.description });
            user.items = newInv
        }
    } else {
        const random = Math.floor(Math.random() * 5);
        if (random === 3) {
            return message.channel.send(`You tried to rob **${member.user.tag}** but got caught👮! Better luck next time.`);
        }
    }
    let array = robbedUser.items.filter(x => x.name !== 'padlock');
    const padlock = robbedUser.items.find(x => x.name === 'padlock');
    if (padlock) {
        message.channel.send(`You tried to rob **${member.user.tag}**, but they had a **Padlock**🔒. Try again next time.`);
        if (padlock.amount === 1) {
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
        else {
            array.push({
                name: 'padlock',
                amount: padlock.amount - 1,
                description: padlock.description
            });
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
    }
    const randomAmount = Math.round(Math.random() * robbedUser.coinsInWallet);
    user.coinsInWallet += randomAmount;
    robbedUser.coinsInWallet -= randomAmount;
    await user.save();
    await robbedUser.save();
    message.channel.send(`:moneybag: You stole **${randomAmount.toLocaleString()}** coins from ${member}!`);

}

module.exports.config = {
    name: 'rob', // Command Name
    description: 'steal someones money and get rich.', // Description
    usage: 'h rob <user>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    xp: 1,
    cooldown: 300 // Command Cooldown
}
