const fs = require('fs');

module.exports = (bot) => {
    const events = fs.readdirSync('./events/').filter(file => file.endsWith('.js') && file !== __filename);
    for(let i = 0; i < events.length; i++) {
        try {
            const event = require(`../events/${events[i].split(".")[0]}`);
            if (event.once) {
                bot.once(event.name, (...args) => event.execute(...args, bot));
            } else {
                bot.on(event.name, (...args) => event.execute(...args, bot));
            }
        } catch(err) {
            console.log(err)
        }
    }
}