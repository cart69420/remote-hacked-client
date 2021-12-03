require("dotenv").config();

module.exports = {
    name: "chat",
    execute(username, message, bot) {
        if(!message.toLowerCase().startsWith(bot.prefix) && !process.env.WHITELISTED.split(",").includes(username)) return

        const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        let commands = bot.commands.get(command) 
            || bot.commands.find(cmd => cmd.aliases && Array.isArray(cmd.aliases) && cmd.aliases.includes(command))

        if(!commands) return;

        try {
            commands.execute(bot, username, args, message)
        } catch (error) {
            console.error(error)
        }
    }
}