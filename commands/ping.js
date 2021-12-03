module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Pong!',
    execute(bot, username, args) {
        bot.whisper(username, bot.players[bot.username].ping + "ms");
    }
}