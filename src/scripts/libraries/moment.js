const moment = require('moment-timezone');

moment.fn.round = function round(precision, keyArg, direction = 'round') {
    const keys = ['Hours', 'Minutes', 'Seconds', 'Milliseconds'];
    const maxValues = [24, 60, 60, 1000];

    // Capitalize first letter
    let key = keyArg.charAt(0).toUpperCase() + keyArg.slice(1).toLowerCase();

    // make sure key is plural
    if (key.indexOf('s', key.length - 1) === -1) {
        key += 's';
    }

    let value = 0;
    let rounded = false;
    let subRatio = 1;
    let maxValue;

    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];

        if (k === key) {
            value = this._d[`get${key}`]();
            maxValue = maxValues[i];
            rounded = true;
        } else if (rounded) {
            subRatio *= maxValues[i];
            value += this._d[`get${k}`]() / subRatio;
            this._d[`set${k}`](0);
        }
    }

    value = Math[direction](value / precision) * precision;
    value = Math.min(value, maxValue);
    this._d[`set${key}`](value);

    return this;
};

moment.fn.ceil = function ceil(precision, key) {
    return this.round(precision, key, 'ceil');
};

moment.fn.floor = function floor(precision, key) {
    return this.round(precision, key, 'floor');
};

module.exports = moment;
