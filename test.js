import path from 'node:path';
import fs from 'node:fs';
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

test('dot flag matches dotfiles', async t => {
	const directory = path.join(import.meta.dirname, '_fixture_dot');
	fs.mkdirSync(directory, {recursive: true});
	const dotfile = path.join(directory, '.hidden');
	fs.writeFileSync(dotfile, 'foo');
	await execa('./cli.js', ['--dot', `${directory}/*`]);
	t.false(await pathExists(dotfile));
	fs.mkdirSync(directory, {recursive: true});
});

test('dotfiles are not matched without dot flag', async t => {
	const directory = path.join(import.meta.dirname, '_fixture_nodot');
	fs.mkdirSync(directory, {recursive: true});
	const dotfile = path.join(directory, '.hidden');
	fs.writeFileSync(dotfile, 'foo');
	const visible = path.join(directory, 'visible');
	fs.writeFileSync(visible, 'foo');
	await execa('./cli.js', [`${directory}/*`]);
	t.true(await pathExists(dotfile));
	t.false(await pathExists(visible));
	fs.rmSync(directory, {recursive: true});
});

test('literal path with glob special characters', async t => {
	const directory = path.join(import.meta.dirname, '_fixture_literal');
	fs.mkdirSync(directory, {recursive: true});
	const file = path.join(directory, 'foo[1].txt');
	fs.writeFileSync(file, 'foo');
	await execa('./cli.js', [file]);
	t.false(await pathExists(file));
	fs.rmSync(directory, {recursive: true});
});

test('verbose mode', async t => {
	const filename = tempWrite.sync('foo');
	const {stdout} = await execa('./cli.js', ['--verbose', filename]);
	t.false(await pathExists(filename));
	t.true(stdout.includes(filename));
});
