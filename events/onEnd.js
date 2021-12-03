module.exports = {
    name: "end",
    execute(reason, bot) {
        bot.eventInit = false
        bot.commandInit = false
        console.log(`Bot ${bot.username} was kicked for ${reason.toString()}. Attempting to relog...`)
        require("../api/run")()
    }
}