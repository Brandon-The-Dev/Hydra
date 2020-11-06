const itemss = require('../utils/items');

module.exports.run = async (bot, message, args) => {
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
        return message.channel.send("you can't buy nothing, please enter the correct item id");
    }
    if (!args[1]) args[1] = '';
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()} ${args[1].toString().toLowerCase()}`);
    if (!item) {
        return message.channel.send("You can't buy an item that doesn't exist please use the correct item id");
    }
    if (item.canBuy == false) {
        return message.channel.send(":thinking: You can't buy this item");
    }
    let buyAmount = args.join(' ').toString().match(/([1-9][0-9]*)/)
    if (!buyAmount) buyAmount=1;
    else buyAmount = buyAmount[0]
    if (item.price > user.coinsInWallet || (buyAmount*item.price) > user.coinsInWallet) {
        return message.channel.send("You dont have the funds to buy this item.");
    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (founditem) {
        array.push({
            name: item.name,
            amount: (parseInt(founditem.amount) + parseInt(buyAmount)),
            description: item.description
        });
        user.items = array;
        await user.save();
    }
    else {
        user.items.push({
            name: item.name,
            amount: buyAmount,
            description: item.description
        });
        await user.save();
    }
    user.coinsInWallet -= (parseInt(item.price)*parseInt(buyAmount));
    await user.save();
    message.channel.send(`You bought **${parseInt(buyAmount).toLocaleString()}** \`${item.name}\``);
}

module.exports.config = {
    name: 'buy', // Command Name
    description: 'displays the shop items.', // Description
    usage: 'h buy <item id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 4 // Command Cooldown
}
