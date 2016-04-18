'use strict';

function isObject(o) {
    return o.toString() === '[object Object]' ? true : false;
}

function quickMerge(a, b) {
    a = a || {};
    for (var i in b) {
        if (isObject(b[i])) {
            a[i] = quickMerge(a[i], b[i]);
        } else {
            a[i] = b[i];
        }
    }
    return a;
}

module.exports = function merge(obj, base, secondary) {
    var args = [].slice.call(arguments);
    return args.reduce(function(acc, current, i) {
        return quickMerge(acc, current);
    }, {});
};
