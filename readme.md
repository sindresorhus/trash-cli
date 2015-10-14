# [<img src="https://cdn.rawgit.com/sindresorhus/trash/1cdbd660976d739eeb45447bb6b62c41ac4a3ecf/media/logo.svg" width="150" align="left" alt="trash-cli">](https://github.com/sindresorhus/trash)CLI [![Build Status](https://travis-ci.org/sindresorhus/trash-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/trash-cli)

> Move files and folders to the trash

Works on OS X, Linux, and Windows.

In contrast to [`rm`](http://en.wikipedia.org/wiki/Rm_(Unix)) which is [dangerous](http://docstore.mik.ua/orelly/unix3/upt/ch14_03.htm) and permanently delete files, this only moves them to the trash, which is much safer and reversible. You should not alias `rm` to `trash` however as that would break most scripts relying on `rm` behavior. Rather use `trash` from the CLI and in your own scripts. I would also recommend reading my guide on [safeguarding `rm`](https://github.com/sindresorhus/guides/blob/master/how-not-to-rm-yourself.md#safeguard-rm).


## Install

```
$ npm install --global trash-cli
```


## Usage

```
$ trash --help

  Usage
    $ trash <path> [...]

  Example
    $ trash unicorn.png rainbow.png
```

*Globbing support is left up to your shell, but `$ trash *.png` should expand to the above in most shells.*


## Tip

Add `alias t=trash` to your `.zshrc`/`.bashrc` to reduce typing: `$ t unicorn.png`.


## [FAQ](https://github.com/sindresorhus/trash#faq)


## Related

- [trash](https://github.com/sindresorhus/trash) - API for this module
- [empty-trash-cli](https://github.com/sindresorhus/empty-trash-cli) - Empty the trash


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
