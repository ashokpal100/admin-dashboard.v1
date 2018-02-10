// var gulp = require('gulp');
// var connect = require('gulp-connect');

// gulp.task('serve', function() {
//     connect.server({
//       root: 'src',
//       port: 3000,
//       host: '192.168.1.101',
//       fallback: 'index.html',
//       livereload: true
//     });
// });

var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});