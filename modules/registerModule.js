const fs = require('fs')

module.exports = (bot) => {
    const categories = fs.readdirSync(__dirname).filter(file => !file.endsWith('.js') && !file.endsWith('.json'))
    for(category of categories) {
        const files = fs.readdirSync(__dirname + '/' + category).filter(file => file.endsWith('.js'))
        for(file of files) {
            try {
                const module = require('./' + category + '/' + file.split('.')[0])
                bot.modules.set(module.name, module)
                bot.activeModules.set(module.name, {enabled: false})
            } catch(err) {
                console.log(err)
            }
        }
    }
}