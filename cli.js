#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const trash = require('trash');

const cli = meow(`
	Usage
	  $ trash [flag] <path|glob> [...]

	Examples
	  $ trash unicorn.png rainbow.png
		$ trash '*.png' '!unicorn.png'
		$ trash -v unicorn.png rainbow.png
`, {
	string: ['_'],
	// ignore all flags of `rm` program
	boolean: ['r', 'f', 'i', 'd', 'P', 'R', 'v', 'W']
});

updateNotifier({pkg: cli.pkg}).notify();

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

if (cli.flags.v) {
	cli.input.forEach(entry => {
		trash(entry).then(() => {
			console.log(`Removed ${entry}`);
		});
	});
} else {
	trash(cli.input);
}
