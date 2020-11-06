const itemss = require('../utils/items');

module.exports.run = async (bot, message, args) => {
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
        return message.channel.send("you can't use nothing lmao");
    }
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase());
    if (!item) {
        return message.channel.send("can't use this item");
    }
    if (!item.canUse) {
        return message.channel.send(":thinking: You can't use this item");
    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (!founditem) {
        return message.channel.send("you don't have this item");
    }
    
    if (item.keep == false) {
        if (founditem.amount === 1) {
            user.items = user.items.filter(x => x.name.toLowerCase() != item.name.toLowerCase());
            await user.save();
        }
        else {
            array.push({
                name: item.name,
                amount: founditem.amount - 1,
                description: item.description
            });
            user.items = array;
            await user.save();
        }
    }
    await item.run(bot, message, args);
}

module.exports.config = {
    name: 'use', // Command Name
    description: 'use an item.', // Description
    usage: 'h use <item id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}