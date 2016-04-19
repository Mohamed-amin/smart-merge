# Merge multiple Javascript objects
Deep merge any number of javascript objects.

[![NPM](https://nodei.co/npm/smart-merge.png)](https://npmjs.org/package/smart-merge)

# install
`npm install smart-merge`

# Usage
```js
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
```

```js
	var merge = require('smart-merge');
	merge(baseStyles, rtlStyles);
```
#### Result
```js
{ 
    header:{ 
        left: 40, 
        position: 'absolute' 
    }, 
    footer:{ 
        right: 10 
    } 
}
```

# Tests
```bash
$ npm test
```
Check the tests for more examples...


