
<div align="center">
  <h1 id="🧀-hexo-filter-relative-src">🧀 hexo-filter-relative-src</h1>
  <p>
    <a href="https://github.com/isaaxite/hexo-filter-relative-src/blob/main/LICENSE"><img src="https://img.shields.io/bower/l/MI" alt="license"></a>
    <a href="https://www.npmjs.com/package/hexo-filter-relative-src"><img src="https://img.shields.io/npm/v/hexo-filter-relative-src" alt="npm"></a>
    <img src="https://img.shields.io/github/package-json/v/isaaxite/hexo-filter-relative-src" alt="version">
    <img src="https://img.shields.io/github/languages/count/isaaxite/hexo-filter-relative-src" alt="languages-count">
    <img src="https://img.shields.io/github/languages/code-size/isaaxite/hexo-filter-relative-src" alt="code-size">
    <img src="https://img.shields.io/github/last-commit/isaaxite/hexo-filter-relative-src" alt="last-commit">
    <img src="https://img.shields.io/github/commit-activity/t/isaaxite/hexo-filter-relative-src" alt="commit-activity">
    <img src="https://img.shields.io/node/v/hexo-filter-relative-src" alt="node version">
  </p>
</div>

# 📑 Overview

Renders local images of relative paths, compatible with vscode and hexo preview display.

**📝Hint:** You can not only use relative paths but also paths with Hexo syntax.

---

📣 *This is a start-up project, please give me a star, your support is the driving force for my continuous update.*

# 📥 Installation

```shell
npm i hexo-filter-relative-src --save
```

# 🎯 Feautres

- **Relative path**: Use the markdown notation of the image using the vscode relative path, which will replace the relative path of the directory section when translating hexo.

- **Url prefix**: You can set a global prefix

- **Compatible**: Compatible with `hexo-path` syntax


# 🕹️ Usage

```shell
# conf at root _conf.yml
# or not set `relitive_src_filter`
# It is enabled by default, and it needs to be explicitly set only if it needs to be disabled. 
relitive_src_filter:
  enable: true

# asset directory structure
|-- license 
| |-- da68b98e404578126b87c5afd9ba9bc3.png
|-- license.md

# use asset
[anchor link](./license/da68b98e404578126b87c5afd9ba9bc3.png)
![pic link 1](da68b98e404578126b87c5afd9ba9bc3.png)
![pic link 2](license/da68b98e404578126b87c5afd9ba9bc3.png)
![pic link 3](./license/da68b98e404578126b87c5afd9ba9bc3.png)
```

# 📦 Effects

💔 Before using

After the above is compiled by hexo, the resulting html fragment:

```html
<a href="./license/da68b98e404578126b87c5afd9ba9bc3.png">anchor link</a>
<img src="da68b98e404578126b87c5afd9ba9bc3.png" alt="">
<img src="/blog/license/da68b98e404578126b87c5afd9ba9bc3.png" alt="">
<img src="/blog/./license/da68b98e404578126b87c5afd9ba9bc3.png" alt="">
```

**💪 After using**

`hexo-filter-relative-src` use `Duck Typing` to pattern.

**For image type**, `/blog/license/` and `/blog/./license/` (`/blog` is the setting of `root` at `_conf.yml`) will be patterned, then return their basename.

**For anchor type**, if the match is a relative path, return basename.

```html
<a href="da68b98e404578126b87c5afd9ba9bc3.png">anchor link</a>
<img src="da68b98e404578126b87c5afd9ba9bc3.png" alt="">
<img src="da68b98e404578126b87c5afd9ba9bc3.png" alt="">
<img src="da68b98e404578126b87c5afd9ba9bc3.png" alt="">
```

`./license/` will be replaced with `''`, and then the markdown image will be handed over to hexo for compilation.


# 🔩 Options

Add or modify the following section to your root `_config.yml` file.

**enable**: on or off plugin

Type: `boolean`

Default: `ture`

**prefix**: set prefix brefore filename

Type: `string`

Detault: ""

```shell
# conf
relitive_src_filter:
  enable: true
  prefix: 'https://raw.githubusercontent.com/isaaxite/blog/matser/'

# markdown link
![](./license/da68b98e404578126b87c5afd9ba9bc3.png)

# resulting
<img
  src="https://raw.githubusercontent.com/isaaxite/blog/matser/da68b98e404578126b87c5afd9ba9bc3.png"
  alt="">
```

# 🎁 Donate


<details open>
  <summary><strong>Support this reposibility 📣</strong></summary>
  <blockquote>
    <br/>
    <li>Give this repository a free star</li>
    <li>Let more people know about this project</li>
    <li>Looking forward to you finding bugs and submitting them to issues to help me improve this project</li>
    <br/>
  </blockquote>
</details>

<details>
  <summary><strong>Buy me a coffee ☕️</strong></summary>
  <blockquote>
    <br/>
    <img width="44%" src="https://isaaxite.github.io/blog/images/alipay.jpg" />
    <img width="50%" src="https://isaaxite.github.io/blog/images/wechatpay.jpg" align="right"/>
    <br/>
  </blockquote>
</details>

# 🤟 Links

🔗 [Isubo | CLI tool for issue-blog](https://github.com/isaaxite/deploy-posts-to-github-issue)

🔗 [Isaac Kam's Blog](https://isaaxite.github.io/blog/)


# 📜 Licence

[MIT] @ [isaaxite]

[MIT]: https://github.com/isaaxite/deploy-posts-to-github-issue/blob/main/LICENSE
[isaaxite]: https://github.com/isaaxite