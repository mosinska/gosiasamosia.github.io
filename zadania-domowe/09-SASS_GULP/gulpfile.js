var gulp = require('gulp'); ///przypisujemy do paczki gulp zmienną gulp
var sass = require('gulp-sass');

gulp.task('sass', function () { //ma wejść w folder node_modules (pobiera kompiluje i wypluwa)i wrzuca do tego pliku 
    return gulp.src('app/scss/**/*.scss') //ze wszystkimi plikami z rozszerzeniem .scss
        .pipe(sass())
        .pipe(gulp.dest('app/css'));//zmienia pliki na css
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);//nasłuchiwanie zmian (a następnie wprowarzenie ich do powiższej funkcji
});

//literówka i niezadeklarowana zmienna "wywala gulpa"
//trzeba sprawdzić w konsoli