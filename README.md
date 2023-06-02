# hexo-filter-relative-src

[![license](https://img.shields.io/bower/l/MI)](https://github.com/isaaxite/hexo-filter-relative-src/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/hexo-filter-relative-src)](https://www.npmjs.com/package/hexo-filter-relative-src)
![version](https://img.shields.io/github/package-json/v/isaaxite/hexo-filter-relative-src)
![languages-count](https://img.shields.io/github/languages/count/isaaxite/hexo-filter-relative-src)
![code-size](https://img.shields.io/github/languages/code-size/isaaxite/hexo-filter-relative-src)
![last-commit](https://img.shields.io/github/last-commit/isaaxite/hexo-filter-relative-src)
![commit-activity](https://img.shields.io/github/commit-activity/t/isaaxite/hexo-filter-relative-src)
![node version](https://img.shields.io/node/v/hexo-filter-relative-src)

Renders local images of relative paths, compatible with vscode and hexo preview display.

**Hint:** You can not only use relative paths but also paths with Hexo syntax.

# Installation

```shell
npm i hexo-filter-relative-src --save
```

# Feautres

- relative path: Use the markdown notation of the image using the vscode relative path, which will replace the relative path of the directory section when translating hexo.

- prefix: You can set a global prefix

- Compatible with `hexo-path` syntax


## relative path

```shell
|-- license 
| |-- da68b98e404578126b87c5afd9ba9bc3.png
|-- license.md  
```

## Writing in vscode

```markdown
![](./license/da68b98e404578126b87c5afd9ba9bc3.png)
```

## After being compiled by hexo

```html
<img src="/blog/resources/da68b98e404578126b87c5afd9ba9bc3.png" alt="">
```

`./license/` will be replaced with `''`, and then the markdown image will be handed over to hexo for compilation.


# Options

Add or modify the following section to your root _config.yml file

```yml
relitive_src_filter:
  enable: true
  # prefix: '/test'
```

- **enable**: on or off plugin.
  - default: ""

- **prefix**: set prefix brefore filename.`prefix: '/test'` => `<img src="/blog/resources//test/da68b98e404578126b87c5afd9ba9bc3.png" alt="">`
  - detault: ""


# Licence

[MIT](https://github.com/isaaxite/hexo-filter-relative-src/blob/main/LICENSE) @ isaaxite
