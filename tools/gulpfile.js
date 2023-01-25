// Requires the gulp plugin
var gulp = require('gulp');

var cssjanus = require('gulp-cssjanus');

const rename = require('gulp-rename')

const sourcemaps = require('gulp-sourcemaps');

// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'))

// Requires the browser-sync plugin
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hi! Its Cork Admin. If you are reading this. It means you have successfully installed task manager and gulp.');
});

console.log('\x1b[32m', 'Cork Admin Template v3.5.0');


// Convert BOOTSTRAP LTR CSS to RTL CSS

gulp.task('bootstrap:convert-rtl', function () {
	return gulp.src('../html/src/bootstrap/css/bootstrap.min.css')
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/src/bootstrap/css/'));
});


/**
	=====================================================================================
	=====================================================================================
	|																					|
	|	@include ->  Writing GULP-SASS Functions For GLOBAL ASSETS and PLUGINS 			|
	|																					|
	=====================================================================================
	=====================================================================================
*/


/* ===== LTR ===== */

/**
 * 
 *	LIGHT
 *
 * */


/** 
 * ==================== ==================== 
 * @Assest - Handling the Assest SCSS
 * @Info - Handling of LTR and RTL
 * ==================== ====================
 * 
 *  */

gulp.task('src-light:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/light/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/src/assets/css/light'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})
// Convert LTR SCSS to RTL SCSS
gulp.task('src-light-asset:convert-rtl', function () {
	return gulp.src(['../html/scss/light/assets/**/*.scss', '!../html/scss/light/assets/custom.scss'])
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/light/assets'));
});
// Assets RTL
gulp.task('src-light-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/rtl/scss/light/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/src/assets/css/light'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

/** 
 * ==================== ==================== 
 * @Plugins - Handling the Plugins SCSS
 * @Info - Handling of LTR and RTL
 * ==================== ====================
 * 
 *  */

gulp.task('src-light:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
	 return gulp.src('../html/scss/light/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/src/plugins/css/light'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

// Convert LTR SCSS to RTL SCSS
gulp.task('src-light-plugins:convert-rtl', function () {
	return gulp.src('../html/scss/light/plugins/**/*.scss')
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/light/plugins'));
});

// Plugins RTL

gulp.task('src-light-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
	 return gulp.src('../html/rtl/scss/light/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/src/plugins/css/light'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})



/**
 * 
 *	DARK
 *
 * */


/** 
 * ==================== ==================== 
 * @Assest - Handling the Assest SCSS
 * @Info - Handling of LTR and RTL
 * ==================== ====================
 * 
 *  */

gulp.task('src-dark:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/dark/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/src/assets/css/dark'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

// Convert LTR SCSS to RTL SCSS
gulp.task('src-dark-asset:convert-rtl', function () {
	return gulp.src(['../html/scss/dark/assets/**/*.scss', '!../html/scss/dark/assets/custom.scss'])
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/dark/assets'));
});
// Assets RTL
gulp.task('src-dark-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/rtl/scss/dark/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/src/assets/css/dark'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

/** 
 * ==================== ==================== 
 * @Plugins - Handling the Plugins SCSS
 * @Info - Handling of LTR and RTL
 * ==================== ====================
 * 
 *  */
gulp.task('src-dark:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
	 return gulp.src('../html/scss/dark/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/src/plugins/css/dark'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

// Convert LTR SCSS to RTL SCSS
gulp.task('src-dark-plugins:convert-rtl', function () {
	return gulp.src('../html/scss/dark/plugins/**/*.scss')
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/dark/plugins'));
});

// Plugins RTL

gulp.task('src-dark-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
	 return gulp.src('../html/rtl/scss/dark/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/src/plugins/css/dark'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})




/**
	=================================================================================
	=================================================================================
	|																				|
	|	@include ->  Writing GULP-SASS Functions For All Demos Structure/Layout		|
	|																				|
	=================================================================================
	=================================================================================
*/


/*
	==============================
		Vertical Light Menu
	==============================
*/
/**
 * 
 *	LIGHT 
 *
 * */

//  LTR

gulp.task('vlm-light:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/vertical-light-menu/light/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/vertical-light-menu/css/light/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

// Convert LTR SCSS to RTL SCSS

gulp.task('vlm-light:convert-rtl', function () {
	return gulp.src('../html/scss/layouts/vertical-light-menu/light/**/*.scss')
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/layouts/vertical-light-menu/light/'));
});

// RTL

 gulp.task('vlm-light-rtl:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/rtl/scss/layouts/vertical-light-menu/light/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/layouts/vertical-light-menu/css/light/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})




 /**
 * 
 *	DARK 
 *
 * */

// LTR

gulp.task('vlm-dark:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/vertical-light-menu/dark/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/vertical-light-menu/css/dark/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

// Convert LTR SCSS to RTL SCSS

gulp.task('vlm-dark:convert-rtl', function () {
	return gulp.src('../html/scss/layouts/vertical-light-menu/dark/**/*.scss')
		.pipe(cssjanus())
		.pipe(gulp.dest('../html/rtl/scss/layouts/vertical-light-menu/dark/'));
});

// RTL
 gulp.task('vlm-dark-rtl:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/rtl/scss/layouts/vertical-light-menu/dark/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/rtl/layouts/vertical-light-menu/css/dark/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})






/*
	==============================
		Vertical Dark Menu
	==============================
*/
/**
 * 
 *	LIGHT 
 *
 * */

 gulp.task('vdm-light:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/vertical-dark-menu/light/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/vertical-dark-menu/css/light/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

 /**
 * 
 *	DARK 
 *
 * */


 gulp.task('vdm-dark:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/vertical-dark-menu/dark/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/vertical-dark-menu/css/dark/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})


/*
	==============================
		Collapsible Menu
	==============================
*/
/**
 * 
 *	LIGHT 
 *
 * */

 gulp.task('cm-light:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/collapsible-menu/light/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/collapsible-menu/css/light/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

 /**
 * 
 *	DARK 
 *
 * */


 gulp.task('cm-dark:structure', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('../html/scss/layouts/collapsible-menu/dark/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
		.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
		// .pipe(rename('structure.css'))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('../html/layouts/collapsible-menu/css/dark/'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

/**
	=====================================================================
	=====================================================================
	|																	|
	|	@include ->  Writing WATCH Functions For All Demos 				|
	|																	|
	=====================================================================
	=====================================================================
*/


/*
	==============================
		Vertical Light Menu
	==============================
*/

gulp.task('watch:vlm',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: '../html/',
		startPath: "/vertical-light-menu/index.html",
	})

	// Watch : - HTML

	var html = gulp.watch('../html/vertical-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch(['../html/layouts/**/*.js', '../html/src/**/*.js']);
	js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('../html/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	// var scssLight = gulp.watch('../html/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light-asset:convert-rtl', 'src-light-rtl:sass:assets', 'src-light:sass:plugins', 'src-light-plugins:convert-rtl', 'src-light-rtl:sass:plugins'));
	// scssLight.on('change', function(path, stats) {
	//     browserSync.notify("Injecting SCSS!");
	//     browserSync.reload("*.scss");
	// })

	// var scssDark = gulp.watch('../html/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark-asset:convert-rtl', 'src-dark-rtl:sass:assets', 'src-dark:sass:plugins', 'src-dark-plugins:convert-rtl', 'src-dark-rtl:sass:plugins'));
	// scssDark.on('change', function(path, stats) {
	//     browserSync.notify("Injecting SCSS!");
	//     browserSync.reload("*.scss");
	// })

	// var scssStructural = gulp.watch('../html/scss/layouts/vertical-light-menu/**/*.scss', gulp.series('vlm-light:structure', 'vlm-light:convert-rtl', 'vlm-light-rtl:structure', 'vlm-dark:structure', 'vlm-dark:convert-rtl', 'vlm-dark-rtl:structure'));
	// scssStructural.on('change', function(path, stats) {
	//     browserSync.notify("Injecting SCSS!");
	//     browserSync.reload("*.scss");
	// })


	var scssLight = gulp.watch('../html/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light:sass:plugins'));
	scssLight.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssDark = gulp.watch('../html/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark:sass:plugins'));
	scssDark.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssStructural = gulp.watch('../html/scss/layouts/vertical-light-menu/**/*.scss', gulp.series('vlm-light:structure', 'vlm-dark:structure'));
	scssStructural.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));




/*
	==============================
		Vertical Light Menu RTL
	==============================
*/

gulp.task('watch:vlm-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: '../html/',
		startPath: "/rtl/vertical-light-menu/index.html",
	})

	// Watch : - HTML

	var html = gulp.watch('../html/rtl/vertical-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch(['../html/rtl/layouts/**/*.js', '../html/rtl/src/**/*.js']);
	js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('../html/rtl/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scssLight = gulp.watch('../html/rtl/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light-asset:convert-rtl', 'src-light-rtl:sass:assets', 'src-light:sass:plugins', 'src-light-plugins:convert-rtl', 'src-light-rtl:sass:plugins'));
	scssLight.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssDark = gulp.watch('../html/rtl/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark-asset:convert-rtl', 'src-dark-rtl:sass:assets', 'src-dark:sass:plugins', 'src-dark-plugins:convert-rtl', 'src-dark-rtl:sass:plugins'));
	scssDark.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssStructural = gulp.watch('../html/rtl/scss/layouts/vertical-light-menu/**/*.scss', gulp.series('vlm-light:structure', 'vlm-light:convert-rtl', 'vlm-light-rtl:structure', 'vlm-dark:structure', 'vlm-dark:convert-rtl', 'vlm-dark-rtl:structure'));
	scssStructural.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));















// gulp.task('watch:vlm',  gulp.series(function() {

// 	console.log('Executing Watch Function');

// 	browserSync.init({
// 	    server: '../html/',
// 		startPath: "/vertical-light-menu/index.html",
// 	})

// 	// Watch : - HTML

// 	var html = gulp.watch('../html/vertical-light-menu');
// 	html.on('change', function(path, stats) {
// 	    browserSync.notify("Compiling, please wait!");
// 	    browserSync.reload("*.html");
// 	})

// 	// Watch : - JS

// 	var js = gulp.watch(['../html/layouts/**/*.js', '../html/src/**/*.js']);
// 	js.on('change', function(path, stats) {
// 	    browserSync.notify("Compiling, please wait!");
// 	    browserSync.reload("*.js");
// 	})
	

// 	// Watch : - CSS

// 	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
// 	// then, uncomment the code below 


// 	// var css = gulp.watch('../html/**/*.css');
// 	// css.on('change', function(path, stats) {
// 	//     browserSync.notify("Injecting CSS!");
// 	//     browserSync.reload("*.css");
// 	// })


// 	// Watch : - SCSS

// 	var scssLight = gulp.watch('../html/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light:sass:plugins'));
// 	scssLight.on('change', function(path, stats) {
// 	    browserSync.notify("Injecting SCSS!");
// 	    browserSync.reload("*.scss");
// 	})

// 	var scssDark = gulp.watch('../html/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark:sass:plugins'));
// 	scssDark.on('change', function(path, stats) {
// 	    browserSync.notify("Injecting SCSS!");
// 	    browserSync.reload("*.scss");
// 	})

// 	var scssStructural = gulp.watch('../html/scss/layouts/vertical-light-menu/**/*.scss', gulp.series('vlm-light:structure', 'vlm-dark:structure'));
// 	scssStructural.on('change', function(path, stats) {
// 	    browserSync.notify("Injecting SCSS!");
// 	    browserSync.reload("*.scss");
// 	})

// }));


/*
	==============================
		Vertical Dark Menu
	==============================
*/

gulp.task('watch:vdm',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: '../html/',
		startPath: "/vertical-dark-menu/index.html",
	})

	// Watch : - HTML

	var html = gulp.watch('../html/vertical-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch(['../html/layouts/**/*.js', '../html/src/**/*.js']);
	js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('../html/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scssLight = gulp.watch('../html/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light:sass:plugins'));
	scssLight.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssDark = gulp.watch('../html/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark:sass:plugins'));
	scssDark.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssStructural = gulp.watch('../html/scss/layouts/vertical-dark-menu/**/*.scss', gulp.series('vdm-light:structure', 'vdm-dark:structure'));
	scssStructural.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	==============================
		Vertical Dark Menu
	==============================
*/

gulp.task('watch:cm',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: '../html/',
		startPath: "/collapsible-menu/index.html",
	})

	// Watch : - HTML

	var html = gulp.watch('../html/collapsible-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch(['../html/layouts/**/*.js', '../html/src/**/*.js']);
	js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('../html/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scssLight = gulp.watch('../html/scss/light/**/*.scss', gulp.series('src-light:sass:assets', 'src-light:sass:plugins'));
	scssLight.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssDark = gulp.watch('../html/scss/dark/**/*.scss', gulp.series('src-dark:sass:assets', 'src-dark:sass:plugins'));
	scssDark.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

	var scssStructural = gulp.watch('../html/scss/layouts/collapsible-menu/**/*.scss', gulp.series('cm-light:structure', 'cm-dark:structure'));
	scssStructural.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));