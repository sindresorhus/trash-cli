import test from 'ava';
import tempWrite from 'temp-write';
import pathExists from 'path-exists';
import execa from 'execa';

test('trash file', async t => {
	const filename = tempWrite.sync('foo');
	await execa('./cli.js', [filename]);
	t.false(pathExists.sync(filename));
});

test('ignore rm flags', async t => {
	const filename = tempWrite.sync('foo');
	await execa('./cli.js', ['-rf', filename]);
	t.false(pathExists.sync(filename));
});

test('verbose mode', async t => {
	const filename = tempWrite.sync('foo');
	const v = await execa('./cli.js', ['-v', filename]);
	t.true(`Removed ${filename}` === v.stdout);
	t.false(pathExists.sync(filename));
});