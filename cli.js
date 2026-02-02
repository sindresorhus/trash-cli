#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {globby} from 'globby';
import trash from 'trash';

// Ignore all flags of `rm` program.
const ignoredFlags = [
	'r',
	'f',
	'i',
	'd',
	'P',
	'R',
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

	Options
	  --dot          Match dotfiles when using glob patterns (remember to quote the glob)
	  --verbose, -v  Print trashed items

	Examples
	  $ trash unicorn.png rainbow.png
	  $ trash '*.png' '!unicorn.png'
`, {
	importMeta: import.meta,
	flags: {
		...ignoredFlagsConfig,
		dot: {
			type: 'boolean',
		},
		verbose: {
			type: 'boolean',
			shortFlag: 'v',
		},
	},
});

if (cli.input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

const files = await globby(cli.input, {expandDirectories: false, onlyFiles: false, dot: cli.flags.dot});
await trash(files);

if (cli.flags.verbose) {
	for (const file of files) {
		console.log(file);
	}
}
