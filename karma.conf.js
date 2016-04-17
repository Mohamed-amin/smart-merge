'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['browserify','jasmine'],
        files: ['./*.js'],
        preprocessors: {
            './*.js': ['jshint','browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
			debug: true
		}
    })
}