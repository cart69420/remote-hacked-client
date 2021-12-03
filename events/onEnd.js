module.exports = {
    name: "end",
    execute(reason, bot) {
        console.log(`Bot ${bot.username} was kicked for ${reason.toString()}. Attempting to relog...`)
        require("../api/run")()
    }
}