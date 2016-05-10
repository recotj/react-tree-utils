const path = require('path');
const gulp = require('gulp');

const workflow = require('gulp-workflow');
const build = workflow.build;

gulp.task('clean', workflow.clean);

gulp.task('build:packages', ['clean'], build.packages);

gulp.task('entry', ['build:packages'], build.entry);

gulp.task('build', ['entry'], build.basic);
gulp.task('build:min', ['entry'], build.min);

gulp.task('release',(done) => {
	const run = require('run-sequence');
	return run(
		'clean',
		['build', 'build:min'],
		done
	);
});

gulp.task('default', (done) => {
	const run = require('run-sequence');
	return run(
		'clean',
		'build',
		done
	);
});
