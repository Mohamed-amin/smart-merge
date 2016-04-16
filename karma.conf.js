module.exports = function(config) {
    config.set({
        frameworks: ['browserify','jasmine'],
        files: ['index.js', 'test/**/*_spec.js'],
        preprocessors: {
            'test/**/*.js': ['jshint','browserify'],
            'index.js': ['jshint','browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
			debug: true
		}
    })
}