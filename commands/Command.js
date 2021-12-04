const fs = require("fs")

module.exports = (bot) => {
    const commands = fs.readdirSync(`./commands`).filter(file => file.endsWith(".js") && file !== __filename)
    for(const file of commands) {
        try {
            const commandFile = require(`./${file.split(".")[0]}`)
            bot.commands.set(commandFile.name, commandFile)
        } catch(err) {
            console.log(err)
        }
    }
}