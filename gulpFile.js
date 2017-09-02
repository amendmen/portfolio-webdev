var gulp 		 = require('gulp'),
	babel   	 = require('gulp-babel'),
	sass 		 = require('gulp-sass'),
	plumber      = require('gulp-plumber'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin	 = require('gulp-imagemin'),
	pngquant	 = require('imagemin-pngquant'),
	cache		 = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({stream: true}))
})
//fonts
gulp.task('icons', function() {
    return gulp.src('src/libs/font-awesome/fonts/**.*')
        .pipe(gulp.dest('src/fonts/'));
});

gulp.task('scripts', ['bootstrap'],  function() {
	return gulp.src([
			'src/libs/jquery/dist/jquery.min.js',
			'src/libs/parallax/parallax.min.js',
			'src/libs/bootstrap/es5/popper.js',
			'src/libs/bootstrap/es5/bootstrap.js'			
		
		])
	.pipe(plumber())
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/js/'))
});

gulp.task('bootstrap', function() {
	return gulp.src([
		'src/libs/bootstrap/dist/js/bootstrap.js',
		'src/libs/popper.js/dist/popper.js'
		])
	.pipe(plumber())
	.pipe(babel({ presets: ['env'] }))
	.pipe(gulp.dest('src/libs/bootstrap/es5/'))
})

gulp.task('css-libs', ['sass', 'icons'], function() {
	return gulp.src('src/css/libs.css')
	.pipe(plumber())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css/'));

    })

gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir: 'src'
		},
		notify: false
	})
})

gulp.task('clean', function() {
	return del.sync('dist');
})

gulp.task('clear', function() {
	return cache.clearAll();
})

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
	.pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]})
	]))
	.pipe(gulp.dest('dist/img'));
});



gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('src/css/**/*.css', browserSync.reload);
	gulp.watch('src/sass/**/*.sass',['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
});

/*
look at build. need change!!
*/

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
	
	var buildCss = gulp.src([
			'src/css/main.css',
			'src/css/libs.min.css',
			'src/css/media.css'
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
})
