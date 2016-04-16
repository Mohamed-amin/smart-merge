var merge = require('index.js');

describe("hello", function(){
	it('Merge object 1 properties to Object 2', function(){
		var baseStyles = {
		  header:{
		    left : 10, 
		    position: 'absolute',
		  },
		  footer:{
		    right: 10
		  }
		};

		var rtlStyles = {
		  header:{
		    left : 40, 
		  }
		};

		expect(merge({}, baseStyles, rtlStyles)).toEqual();
	});
});