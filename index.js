'use strict';

module.exports = function merge(obj, base, secondary) {
	obj = obj || {};
    base = base || (function(){throw new Error('Should define base Object');}());
    secondary = secondary || (function() {throw new Error('Should define secondary Object');}());
    for (var key in base) {
        if (secondary[key]) {
            obj[key] = Object.assign({}, base[key], secondary[key]);
        } else {
            obj[key] = base[key];
        }
    }
    return obj;
};
