const Module = require("../Module");

const settings = {
    delay: new Module.NumSetting("Delay", "Delay", 1000),
    modes: new Module.ModeSetting("Modes", "modes", "balls", ["balls", "other balls"]),
    yes: new Module.BooleanSetting("Yes", "Yes", true),
    color: new Module.ColorSetting("Color", "Color", [255, 255, 255, 1]),
}


exports.onEnabled = function() {
    console.log("hi")
}

exports.onDisabled = function() {
    //
}

exports.onUpdate = function() {
    //
}

const hack = new Module.Module(
    "AutoCrystal", //name
    "AutoCrystal", // description
    settings, //settings
    {
        onEnabled: this.onEnabled, 
        onDisabled: this.onDisabled, 
        onUpdate: this.onUpdate
    } //the events
);
hack.register();

console.log("num", settings.delay.getValue(true))
console.log("mode", settings.modes.getMode(), "from", settings.modes.getModes())
console.log("bool", settings.yes.getBoolValue())
console.log("color", settings.color.getColor().rgba)
hack.getEvents().onEnabled() //execute onEnabled

//basically a function's format (still in testing)