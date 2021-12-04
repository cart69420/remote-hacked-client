class BooleanSetting {
    constructor(name, description, boolValue) {
        this.name = name;
        this.description = description;
        this.boolValue = boolValue;
    }

    getBoolValue() {
        return this.boolValue;
    }
}

module.exports = BooleanSetting;