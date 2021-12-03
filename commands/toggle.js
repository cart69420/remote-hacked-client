module.exports = {
    name: "toggle",
    description: "toggle a module on/off",
    execute(bot, args, username) {
        let module = bot.activeModules.get(args[0]);
        if (module) {
            let tostate = !module.enabled;
            module.enabled = tostate;
            if(tostate) { 
                bot.modules[module.name].onEnabled()
            } else {
                bot.modules[module.name].onDisabled()
            }
            bot.whisper(username, `${module.name} has been ${module.enabled ? "enabled" : "disabled"}`);
        }
    }
}