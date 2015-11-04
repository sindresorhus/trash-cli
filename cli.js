#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const trash = require('trash');

const cli = meow(`
	Usage
	  $ trash <path|glob> [...]

	Example
	  $ trash unicorn.png rainbow.png
	  $ trash '*.png' '!unicorn.png'
`, {
	string: ['_']
});

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

trash(cli.input);
