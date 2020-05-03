# page-replace-extension

Webページ内のテキストを置換するChrome拡張機能です。

置換には[padolsey/findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText)を使用しています。

## インストール

1. npmモジュールのインストール
```sh
$ yarn install
```
2. ビルド
```sh
$ ./node_modules/.bin/webpack
```
3. `./dist/`フォルダをChrome拡張機能に登録
