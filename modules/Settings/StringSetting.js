class StringSetting {
    constructor(name, description, string, minLength, maxLength) {
        this.name = name;
        this.description = description;
        this.string = string;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }

    getString() {
        return this.string;
    }
}

module.exports = StringSetting;