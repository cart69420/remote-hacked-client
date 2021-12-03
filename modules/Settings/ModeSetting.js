class ModeSetting {
    constructor(name, description, defaultMode, modes) {
        this.name = name;
        this.description = description;
        this.defaultMode = defaultMode;
        this.modes = modes;
    }
}

module.exports = ModeSetting;