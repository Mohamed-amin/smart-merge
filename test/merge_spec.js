var merge = require('./../src/merge.js');
describe("Merge", function(){
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
		console.warn(Object.assign());
		expect(merge({}, baseStyles, rtlStyles)).toEqual('a');
	});
});