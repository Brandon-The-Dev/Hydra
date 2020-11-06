const fs = require('fs');

module.exports = bot => {
    fs.readdir('./src/commands/', (err, files) => {
        if (err) console.log(err);
        const file = files.filter(f => f.split('.').pop() === 'js');
        if (file.length < 1) {
            return console.log('No Commands.');
        }

        file.forEach(f => {
            const pull = require(`../../commands/${f}`);
            bot.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => bot.aliases.set(alias, pull.config.name));
        });
    });
}