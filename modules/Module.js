const NumSetting = require("./Settings/NumSetting");
const ModeSetting = require("./Settings/ModeSetting");
const ColorSetting = require("./Settings/ColorSetting");
const BooleanSetting = require("./Settings/BooleanSetting");
const StringSetting = require("./Settings/StringSetting");
const bot = require("../index");
class Module {
    constructor(name, description, settings, ...events) {
        this.name = name;
        this.description = description;
        this.settings = settings;
        this.events = events[0];
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getSettings() {
        return this.settings;
    }
    getEvents() {
        return this.events;
    }
    register() {
        bot.modules.set(this.name, this)
        bot.activeModules.set(this.name, {enabled: false})
    }
}

module.exports = {Module, NumSetting, ModeSetting, ColorSetting, BooleanSetting, StringSetting};