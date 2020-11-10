const array = [{
    name: 'Cookie',
    description: 'A tasty snack.',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 50,
    keep: false,
    run: async (bot, message, args) => {
        const cookieRandom = [
            'You ate a cookie as you was feeling hungry.',
            'You choked on a cookie and almost died.',
            'The cookie tasted great.'
        ];
        const yes = cookieRandom[Math.floor(Math.random() * cookieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'padlock',
    description: 'Secure your wallet from those sneaky robbers',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2000,
    price: 10000,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'fishingrod',
    description: 'Catchs fish ',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 15000,
    keep: true,
    run: async (bot, message, args) => {
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went fishing and came back with **${fishAmount}** fish 🐟`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'fish');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'fish');
        if (findItem) {
            userInv.push({ name: 'fish', amount: (findItem.amount + fishAmount), description: 'Sell the fish to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'fish', amount: fishAmount, description: 'Sell the fish to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'fish',
    description: 'Sell fish to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 125,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'banknote',
    description: 'Get more bank space.',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 6667,
    price: 20000,
    keep: false,
    run: async (bot, message, args) => {
        const random = Math.ceil((Math.random() * 5000) + 5000);
        const e = await bot.giveBankSpace(message.author.id, random);
        message.channel.send(`You get a new bank card, which increases your bank space by **${random.toLocaleString()}**. You now have **${e.bankSpace.toLocaleString()}** bank space.`);
    }
},
{
    name: 'gun',
    description: 'Kills Animals',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 22500,
    keep: true,
    run: async (bot, message, args) => {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went hunting and came back with **${deerAmount}** deer 🦌`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'deer');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'deer');
        if (findItem) {
            userInv.push({ name: 'deer', amount: (findItem.amount + deerAmount), description: 'Sell deer to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'deer', amount: deerAmount, description: 'Sell the fish to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'deer',
    description: 'Sell deer to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 250,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pickaxe',
    description: 'Mines gems',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 30000,
    keep: true,
    run: async (bot, message, args) => {
        const gemAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went mining and came back with **${gemAmount}** gem 💎`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'gem');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'gem');
        if (findItem) {
            userInv.push({ name: 'gem', amount: (findItem.amount + gemAmount), description: 'Sell gems to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'gem', amount: gemAmount, description: 'Sell gems to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'gem',
    description: 'Sell gems to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
               {
    name: 'axe',
    description: 'Chops trees down',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 20000,
    keep: true,
    run: async (bot, message, args) => {
        const treeAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went into the woods and chopped down **${treeAmount}** tree 🌲`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'tree');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tree');
        if (findItem) {
            userInv.push({ name: 'tree', amount: (findItem.amount + treeAmount), description: 'Sell trees to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'tree', amount: treeAmount, description: 'Sell trees to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'tree',
    description: 'Sell trees to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'luckyclover',
    description: 'Increase your chances of successful robbery',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 4000,
    price: 10000,
    keep: false,
    run: async (bot, message, args) => {

    }
}

];

module.exports = array;
