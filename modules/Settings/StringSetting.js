class StringSetting {
    constructor(name, description, defaultString, minLength, maxLength) {
        this.name = name;
        this.description = description;
        this.defaultString = defaultString;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}

module.exports = StringSetting;