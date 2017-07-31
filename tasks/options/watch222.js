module.exports = {
	fonts: {
		files: ['src/fonts/**'],
		tasks: ['sync'],
		options: {
			spawn: false,
		}
	},
	media: {
		files: ['src/media/**'],
		tasks: ['sync'],
		options: {
			spawn: false,
		}
	},
	img: {
		files: ['src/img/**'],
		tasks: ['sync'],
		options: {
			spawn: false,
		}
	},
	scripts: {
		files: ['src/js/*/*.js'],
		tasks: ['jshint', 'concat', 'uglify'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['src/css/*/*.css', 'src/css/structure/*/*.styl'],
		tasks: ['stylus', 'cssmin'],
		options: {
			spawn: false,
		}
	},
	pug: {
		files: ['src/pug/includes/*.pug', 'src/pug/pages/*/*.pug'],
		tasks: ['pug'],
		options: {
			spawn: false,
		}
	}
}