import test from 'ava';
import tempWrite from 'temp-write';
import pathExists from 'path-exists';
import execa from 'execa';

test(async t => {
	const filename = tempWrite.sync('foo');
	await execa('./cli.js', [filename]);
	t.false(pathExists.sync(filename));
});
