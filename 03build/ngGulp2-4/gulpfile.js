var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
var appDev = 'testnewsetup';
/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});
/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', function () {
    return gulp.src(appDev + "/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});
/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
// gulp.task("compile", ["tslint"], () => {
gulp.task("compile", function () {
    var tsResult = gulp.src(appDev + "/**/*.ts")
        .pipe(sourcemaps.init())
        
        //.pipe(tsc(tsProject));//deprecated
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});
/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", function () {
    return gulp.src([appDev + "/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'core-js/client/shim.min.js.map',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'bootstrap/dist/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/js"));
});
/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch([appDev + "/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch([appDev + "/**/*.html", appDev + "/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});
/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], function () {
    console.log("Building the project ...");
});
//# sourceMappingURL=gulpfile.js.map