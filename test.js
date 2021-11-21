import test from 'ava';
import tempWrite from 'temp-write';
import {pathExists} from 'path-exists';
import {execa} from 'execa';

test('trash file', async t => {
	const filename = tempWrite.sync('foo');
	await execa('./cli.js', [filename]);
	t.false(await pathExists(filename));
});

test('ignore rm flags', async t => {
	const filename = tempWrite.sync('foo');
	await execa('./cli.js', ['-rf', filename]);
	t.false(await pathExists(filename));
});
