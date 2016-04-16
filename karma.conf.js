'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['browserify','jasmine'],
        files: ['src/**/*.js', 'test/**/*_spec.js'],
        preprocessors: {
            './*.js': ['jshint','browserify'],
            'test/**/*.js': ['jshint','browserify'],
            'src/**/*.js': ['jshint','browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
			debug: true
		}
    })
}