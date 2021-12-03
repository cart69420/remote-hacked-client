import NumSetting from "../Settings/NumSetting";
import ModeSetting from "../Settings/ModeSetting";
import ColorSetting from "../Settings/ColorSetting";

const settings = {
    delay: new NumSetting("Delay", "the delay", 0, 0, 100),
    mode: new ModeSetting("Mode", "the mode", "auto", ["auto", "manual"]),
    color: new ColorSetting("Color", "the color", [255, 255, 255, 0]),
}

exports.info = {
    name: "AutoCrystal",
    description: "make funny boom boom explosion sound",
    settings: settings
}

exports.onEnabled = function() {
    console.log(settings.mode) //accessible from events
}

exports.onDisabled = function() {
    //
}

exports.onUpdate = function() {
    //
}

//basically a function's format (still in testing)