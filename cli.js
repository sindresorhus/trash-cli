#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import trash from 'trash';

// Ignore all flags of `rm` program.
const ignoredFlags = [
	'r',
	'f',
	'i',
	'd',
	'P',
	'R',
	'v',
	'W',
];

const ignoredFlagsConfig = {};
for (const flag of ignoredFlags) {
	ignoredFlagsConfig[flag] = {
		type: 'boolean',
	};
}

const cli = meow(`
	Usage
	  $ trash <path|glob> […]

	Examples
	  $ trash unicorn.png rainbow.png
	  $ trash '*.png' '!unicorn.png'
`, {
	importMeta: import.meta,
	flags: {
		...ignoredFlagsConfig,
	},
});

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

trash(cli.input);
