module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Pong!',
    execute(bot, args, username) {
        bot.whisper(username, bot.players[bot.username].ping + "ms");
    }
}