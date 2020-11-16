module.exports = async (bot, guild) => {
    await bot.dbl.postStats(bot.guilds.cache.size);
}
