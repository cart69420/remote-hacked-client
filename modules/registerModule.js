const fs = require('fs')

module.exports = (bot) => {
    const categories = fs.readdirSync(__dirname).filter(file => file !== 'Module.js')
    for(category of categories) {
        const files = fs.readdirSync(__dirname + '/' + category).filter(file => file.endsWith('.js'))
        for(file of files) {
            try {
                const module = require('./' + category + '/' + file)
                bot.modules.set(module.info.name, module)
                bot.activeModule.set(module.info.name, {enabled: false})
            } catch(err) {
                console.log(err)
            }
        }
    }
}