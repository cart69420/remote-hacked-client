class ModeSetting {
    constructor(name, description, mode, arrModes) {
        this.name = name;
        this.description = description;
        this.mode = mode;
        this.modes = arrModes;
    }

    getMode() {
        return this.mode;
    }
    getModes() {
        return this.modes;
    }
}

module.exports = ModeSetting;