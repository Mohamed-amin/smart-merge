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
	var a, b, c, d, e, complix1, complix2;
	beforeEach(function(){
		a = {a : 1};
		b = {b : 1};
		c = {c : 1};
		d = {d : 1};
		e = {e : 1};
		complix1 = {
			a:{
				a:{
					1:'1'
				},
				b:{
					1:'1'
				}
			}
		};
		complix2 = {
			a:{
				a:{
					2:'2'
				},
				b:{
					2:'2'
				}
			}
		};
	});
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

	it('Should accept 1 Parameter', function(){
		expect(merge(a,b)).toEqual({a:1,b:1});
	});

	it('Should accept any number of Parameters', function(){
		expect(merge(a,b,c,d,e)).toEqual({a:1,b:1,c:1,d:1,e:1});
	});

	it('Should accept any depth complixty', function(){
		
		expect(merge(complix1, complix2)).toEqual({
			a:{
				a:{
					1:'1',
					2:'2'
				},
				b:{
					1:'1',
					2:'2'
				}
			}
		});
	});

});







