class ColorSetting {
    constructor(name, description, color) {
        this.name = name;
        this.description = description;
        this.color = color;
    }

    getColor() {
        var color = this.color;
        var r, red, g, green, b, blue, a, alpha, rgb, rgba, brightness;
        r = color[0]; g = color[1]; b = color[2]; a = color[3];
        red = color[0]; green = color[1]; blue = color[2]; alpha = color[3];
        rgb = "rgb(" + red + "," + green + "," + blue + ")";
        rgba = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return {
            rgb: rgb,rgba: rgba,r: r,g: g,b: b,a: a,red: red,green: green,blue: blue,alpha: alpha,brightness: brightness
        };
    }
}

module.exports = ColorSetting;