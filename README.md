# VSCode OBCSS

<p align="left">
  <img src="https://github.com/samuherek/vscode-obcss/blob/master/assets/github_logo.png?raw=true" width="200px">
</p>

> The extension provides simple command for refactoring CSS values to Style object and vice versa.

As react develoers, we find ourselves in a split world for styling. World of CSS syntax and JS style object syntax. More different projects you work on, the more pain it becomes. Especially if you need to change between the syntax often. This VSCode extension is here to rescue ⛑️.

## Installation

Go to the link below and click `Install`.

[Visual Studio Code Market Place: OBSCSS](https://marketplace.visualstudio.com/items?itemName=samuherek.obcss)

## Commands

Select the block you would like to convert, trigger the palette with `cmd + shift + p` and search for one of:

- Convert CSS to object style
- Convert object style to CSS

And press `enter` :)

## Features

Main features:

- Convert a CSS block into inline style values
- Convert an inline style values into CSS block

### Convert CSS block to inline styles obj

![Example of css to inline style convertion](https://github.com/samuherek/vscode-obcss/blob/master/assets/css-to-obj.gif?raw=true)

### Convert inline styles obj to CSS block

![Example of inline style to css conversion](https://github.com/samuherek/vscode-obcss/blob/master/assets/obj-to-css.gif?raw=true)

**Planning features:**

- [ ] Add all CSS properties to the css values map.
- [ ] Copy the converted block into clipboard for a quick paste.
- [ ] Select an inline HTML tag with inline styles and convert it inot an "Emotion" or "Styled-component".
- [ ] Select an "Emotion" or "Styled-component" and convert it into an HTML tag with inline styles.

## Known Issues - IMPORTANT!

This extension is still in development. It will work correctly only under certain conditions described in the features.

---

## Contribute

Feel free to open issues or PRs!

### Getting started

In order to start working all you need to do is:

```sh
$ git clone git@github.com:wix/vscode-glean.git
$ cd vscode-glean
$ npm install
$ code .
```

### Running Extension

- Go to VSCode debug sidebar
- Select `Extension` from the dropdown
- Hit `F5`

### Running Tests

- Go to VSCode debug sidebar
- Select `Extension Tests` from the dropdown
- Hit `F5`

### Commit messages

WIP...
