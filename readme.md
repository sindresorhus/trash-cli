# [<img src="https://cdn.jsdelivr.net/gh/sindresorhus/trash@1cdbd660976d739eeb45447bb6b62c41ac4a3ecf/media/logo.svg" width="150" align="left" alt="trash-cli">](https://github.com/sindresorhus/trash)CLI

> Move files and folders to the trash

Works on macOS (10.12+), Linux, and Windows (8+).

In contrast to [`rm`](http://en.wikipedia.org/wiki/Rm_(Unix)) which is [dangerous](http://docstore.mik.ua/orelly/unix3/upt/ch14_03.htm) and permanently delete files, this only moves them to the trash, which is much safer and reversible. I would also recommend reading my guide on [safeguarding `rm`](https://github.com/sindresorhus/guides/blob/main/how-not-to-rm-yourself.md#safeguard-rm).

Accepts paths and [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).

## Install

```sh
npm install --global trash-cli
```

## Usage

```
$ trash --help

  Usage
    $ trash <path|glob> […]

  Examples
    $ trash unicorn.png rainbow.png
    $ trash '*.png' '!unicorn.png'
```

## Tip

Add `alias rm=trash` to your `.zshrc`/`.bashrc` to reduce typing & safely trash files: `$ rm unicorn.png`.

## [FAQ](https://github.com/sindresorhus/trash#faq)

## Related

- [trash](https://github.com/sindresorhus/trash) - API for this module
- [empty-trash-cli](https://github.com/sindresorhus/empty-trash-cli) - Empty the trash
- [del-cli](https://github.com/sindresorhus/del-cli) - Delete files and folders
