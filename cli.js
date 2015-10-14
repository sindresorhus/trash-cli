#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
var updateNotifier = require('update-notifier');
var meow = require('meow');
var trash = require('trash');

var cli = meow([
  'Usage',
  '  $ trash <path> [...]',
  'Example',
  '  $ trash unicorn.png rainbow.png'
].join('\n'), {
  string: ['_']
});

updateNotifier({
  pkg: cli.pkg
}).notify();

if (cli.input.length === 0) {
  console.error('Specify at least one path');
  process.exit(1);
}

trash(cli.input);
