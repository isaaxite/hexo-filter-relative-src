# hexo-relatived-img

[![LICENSE](https://img.shields.io/bower/l/MI)](https://github.com/isaaxite/hexo-relatived-img/blob/main/LICENSE)
[![files](https://img.shields.io/github/directory-file-count/isaaxite/hexo-relatived-img)]()

Renders local images of relative paths, compatible with vscode and hexo preview display

# Installation

```shell
npm i hexo-relatived-img --save
```

# Feautres

Use the markdown notation of the image using the vscode relative path, which will replace the relative path of the directory section when translating hexo.

## file directory

```shell
|-- license 
| |-- da68b98e404578126b87c5afd9ba9bc3.png
|-- license.md  
```

## Writing in vscode

```markdown
![常见的开源许可证](./license/da68b98e404578126b87c5afd9ba9bc3.png)
```

## After being compiled by hexo

```html
<img src="https://isaaxite.github.io/blog/resources/da68b98e404578126b87c5afd9ba9bc3.png" alt="常见的开源许可证">
```

`./license/` will be replaced with `''`, and then the markdown image will be handed over to hexo for compilation.


# Options

Add or modify the following section to your root _config.yml file

```yml
relatived_img: true
```

- relatived_img: Renders local images of relative paths.(default=`true`)


# Licence

[MIT](https://github.com/isaaxite/hexo-relatived-img/blob/main/LICENSE) @ isaaxite
