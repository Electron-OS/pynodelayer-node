const { src, dest , watch , series } = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function watchTask() {
  watch(['src/ts/*.ts'], series(transpileMain));
  watch(['examples/src/*.ts'], series(transpileExamples));
}

function transpileMain() {
  return src('src/ts/*.ts')
    .pipe(tsProject())
    .pipe(dest('build/js'));
}

function transpileExamples() {
  return src('examples/src/*.ts')
    .pipe(tsProject())
    .pipe(dest('examples/build'));
}

exports.default = series(transpileExamples , transpileMain);
exports.watch = watchTask;
