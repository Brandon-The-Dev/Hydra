const lock = '<:shinelock:780056966604390430>'
const rifle = '<:HYDRA_RIFLE:780431726563819530>'
const axe = '<:HYDRA_AXE:780435571700138024>'
const pick = '<:HYRDA_PICKAXE:780453284284596244>'
const rc = '<a:HYDRA_RAINBOW_COIN_GIF:780463422927536128>' //RAINBOW
const gc = '<a:HYDRA_GOLD_COIN_GIF:780447095878189057>' // :HYDRA_GOLD_COIN_GIF:
const sc = '<a:HYDRA_SILVER_COIN_GIF:780447045126455326>' // :HYDRA_SILVER_COIN_GIF:
const bc = '<a:HYDRA_BRONZE_COIN_GIF:780446979452698674>' // :HYDRA_BRONZE_COIN_GIF: 
const ht = '<a:HYDRA_THROPHY:780446245612945409>' // :HYDRA_THROPHY:
const hc = '<:HYDRA_CLOVER:780473481590210560>'
const junkemoji = '<:HYDRA_JUNK:781846282473046016>'
const legfish = '<:HYDRA_FISH_LEG:781936373325365268>'
const hd = '<:HYDRA_D:782294387676938280>'
const hr = '<:HYDRA_RUBY:782295231734743070>'
const hg = '<:HYDRA_GADE:782295694806745139>'
const ha = '<:HYDRA_AMETHYST:782298032624107550>'
const hp = '<:HYDRA_PRECIOUS:782300656362979379>'
const array = [{
    name: 'cookie',
    description: '🍪 **Cookie**\na tasty snack.',
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
    description: `${lock} **Padlock**\nsecure your wallet from those sneaky robbers`,
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
    description: '🎣 **Fishing Rod** \nuse this to catchs fish',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 15000,
    keep: true,
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'common',
    description: '🐟 **Common Fish** \nsell common to make money.',
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
    name: 'uncommon',
    description: '🐠 **Uncommon Fish** \nsell uncommon to make money.',
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
    name: 'rare',
    description: '🦑 **Rare Fish** \nsell rare to make money.',
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
    name: 'veryrare',
    description: '🐡 **Very Rare Fish** \nsell veryrare to make money.',
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
    name: 'legendary',
    description: `${legfish} **Legendary Fish** \nsell legendary to make money.`,
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
    name: 'junk',
    description: `${junkemoji} **Junk** \nsell junk to make money.`,
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
    description: `📜 **Bank Note** \nmore bank space.`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 6667,
    price: 20000,
    keep: false,
    run: async (bot, message, args) => {
        const random = Math.ceil((Math.random() * 5000) + 5000);
        const e = await bot.giveBankSpace(message.author.id, random);
        message.channel.send(`You redeemed a banknote, which increases your bank space by **${random.toLocaleString()}**. You now have **${e.bankSpace.toLocaleString()}** bank space.`);
    }
},
{
    name: 'rifle',
    description: `${rifle} **Rifle**\nuse this to kills animals`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 22500,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'deer',
    description: '🦌 **Deer**\nsell deer to make money.',
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
    name: 'bear',
    description: '🐻 **Bear**\nsell bear to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'duck',
    description: '🦆 **Duck**\nsell duck to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pig',
    description: '🐷 **Pig**\nsell pig to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'cow',
    description: '🐮 **Cow**\nsell cow to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'fox',
    description: '🦊 **Fox**\nsell fox to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'rabbit',
    description: '🐰 **Rabbit**\nsell rabbit to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'chicken',
    description: '🐔 **Chicken**\nsell chicken to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'boar',
    description: '🐗 **Boar**\nsell boar to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pickaxe',
    description: `${pick} **Pickaxe**\nuse this to mine gems`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 30000,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'gem',
    description: '💎 **Gem**\nsell gems to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 10,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'diamond',
    description: `${hd} **Diamond Gem** \nsell the diamond to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 200,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'ruby',
    description: `${hr} **Ruby Gem** \nsell the ruby to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 225,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'gade',
    description: `${hg} **Gade Gem** \nsell the gade to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 300,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'amethyst',
    description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 350,
    price: 0,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'precious',
    description: `${hp} **Precious Gem** \nsell the precious to make money.`,
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
    description: `${axe} **Axe**\nuse this to chops trees down`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 20000,
    keep: true,
    run: async (bot, message, args) => {
        const treeAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        message.channel.send(`You went into the woods and chopped down **${treeAmount}** x Tree 🌲`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'tree');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tree');
        if (findItem) {
            userInv.push({ name: 'tree', amount: (findItem.amount + treeAmount), description: '🌲 **Tree**\nsell trees to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'tree', amount: treeAmount, description: '🌲 **Tree**\nsell trees to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'tree',
    description: '🌲 **Tree**\nsell trees to make money.',
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
    description: `${hc} **Lucky Clover**\nincrease your chances of successful robbery`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 4000,
    price: 10000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'rainbowcoin',
    description: `${rc} **Hydra Rainbow Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 50000000,
    price: 100000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'goldcoin',
    description: `${gc} **Hydra Gold Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 25000000,
    price: 50000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'silvercoin',
    description: `${sc} **Hydra Silver Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 7500000,
    price: 15000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'bronzecoin',
    description: `${bc} **Hydra Bronze Coin**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2500000,
    price: 5000000,
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'trophy',
    description: `${ht} **Hydra Trophy**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 50000000,
    price: 100000000,
    keep: false,
    run: async (bot, message, args) => {

    }
}
];

module.exports = array;
