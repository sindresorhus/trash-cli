#!/usr/bin/env node
'use strict';
const meow = require('meow');
const trash = require('trash');

// Ignore all flags of `rm` program.
const ignoredFlags = [
	'r',
	'f',
	'i',
	'd',
	'P',
	'R',
	'v',
	'W'
];

const ignoredFlagsConfig = {};
for (const flag of ignoredFlags) {
	ignoredFlagsConfig[flag] = {
		type: 'boolean'
	};
}

const cli = meow(`
	Usage
	  $ trash <path|glob> […]

	Examples
	  $ trash unicorn.png rainbow.png
	  $ trash '*.png' '!unicorn.png'
`, {
	flags: {
		...ignoredFlagsConfig
	}
});

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

trash(cli.input);
