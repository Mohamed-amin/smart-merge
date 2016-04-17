var merge = require('./index');


/**
 * Polyfill for Object.assign() to run the tests with Karma
 * However to use it within your developing stack I figure that you have a transpilar or fallback 
 * for es6/es5 features and I wouldn't like to polute that with more code or unneeded dependencies
 * for such a small and quick utility
 *
 * Polyfill source:
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

describe("Merge", function(){
	it('Merge object 1 properties to Object 2', function(){
		var baseStyles = {
		    header: {
		        left: 10,
		        position: 'absolute',
		    },
		    footer: {
		        right: 10
		    }
		};
		var rtlStyles = {
		    header: {
		        left: 40,
		    }
		};
		expect(merge({}, baseStyles, rtlStyles)).toEqual({ header:{ left: 40, position: 'absolute' }, footer:{ right: 10 } });
	});
});







