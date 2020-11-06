module.exports = async bot => {
    bot.user.setActivity(`${bot.guilds.cache.size.toLocaleString()} Servers | h help`, { type: 'WATCHING' });
    console.log(`${bot.user.tag} is online. ${bot.guilds.cache.size.toLocaleString()} Users amount: ${bot.users.cache.size}`);
    /*await bot.dbl.postStats(bot.guilds.cache.size);*/
}
