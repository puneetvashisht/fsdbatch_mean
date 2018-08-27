const gulp = require('gulp')
const gulpUtil = require('gulp-util');


gulp.task('task1', function(){
    console.log('running task1');
})


gulp.task('task2', function(){
    console.log('running task2');
})

gulp.task('copyhtml', ['task2', 'task1'], ()=>{
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['watchforchanges'], ()=>{
    console.log('running default task');
    gulpUtil.log('running default task')
})

gulp.task('watchforchanges', ()=>{
    gulp.watch('./src/**/*.html', ()=>{
        gulpUtil.log('HTML file changed!!')
    })
})