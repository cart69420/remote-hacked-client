require("dotenv").config();

const mineflayer = require('mineflayer');

module.exports = () => {
    const bot = mineflayer.createBot({
        host: process.env.SERVER_IP,
        port: process.env.SERVER_PORT ? process.env.SERVER_PORT : 25565,
        username: process.env.USERNAME ? process.env.USERNAME : 'bot',
        password: process.env.PASSWORD ? process.env.PASSWORD : '',
        version: process.env.VERSION ? process.env.VERSION : false,
    });

    bot.modules = new Map();
    bot.activeModules = new Map();
    bot.commands = new Map();
    
    bot.prefix = process.env.PREFIX ? process.env.PREFIX : 'c.';
    //require('../events/Event')(bot);
    //require('../commands/Command')(bot);
    return bot
}