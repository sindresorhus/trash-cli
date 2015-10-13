import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';
import tempWrite from 'temp-write';
import pathExists from 'path-exists';

test('main', async t => {
	const filename = tempWrite.sync('foo');
	await pify(childProcess.execFile)('./cli.js', [filename], {cwd: __dirname});
	t.false(pathExists.sync(filename));
	t.end();
});
