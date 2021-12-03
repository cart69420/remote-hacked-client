class NumSetting {
    constructor(name, description, value, minValue, maxValue) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
}

module.exports = NumSetting;