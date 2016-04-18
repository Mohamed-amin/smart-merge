# Merge 2 objects
Deep merge javascript objects.

[![NPM](https://nodei.co/npm/<package>.png)](https://npmjs.org/package/<package>)

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
### Result
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


