class BooleanSetting {
    constructor(name, description, defaultBool) {
        this.name = name;
        this.description = description;
        this.Bool = defaultBool;
        this.otherBool = !defaultBool;
    }
}

module.exports = BooleanSetting;