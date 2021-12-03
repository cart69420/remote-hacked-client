module.exports = {
    name: 'physicsTick',
    description: 'Called every game tick',
    execute(bot) {
        for(hack of bot.modules) {
            if(bot.activeModules[hack.name] == true && hack.onUpdate) {
                hack.onUpdate();
            }
        }
    }
}