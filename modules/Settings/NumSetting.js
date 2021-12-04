class NumSetting {
    constructor(name, description, value, minValue, maxValue) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    getValue(float=false) {
        return float==true ? parseFloat(this.value) : parseInt(this.value);
    }
    getMinVale(float=false) {
        return float==true ? parseFloat(this.minValue) : parseInt(this.minValue);
    }
    getMaxValue(float=false) {
        return float==true ? parseFloat(this.maxValue) : parseInt(this.maxValue);
    }
}

module.exports = NumSetting;