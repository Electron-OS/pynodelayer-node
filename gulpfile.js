const { src, dest , watch , series } = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function watchTask() {
  watch(['src/*.ts'], series(transpileMain));
}

function transpileMain() {
  return src('src/*.ts')
    .pipe(tsProject())
    .pipe(dest('lib'));
}

exports.default = transpileMain;
exports.watch = watchTask;
