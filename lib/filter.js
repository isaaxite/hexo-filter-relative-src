/* global hexo */

'use strict';

const { encodeURL, url_for } = require('hexo-util');
const path = require('path');
const { join } = path.posix;
const geFfilename = (postPath) => {
  return path.basename(postPath);
}

module.exports = function(renderer) {
  renderer.image = function(href, title, text) {
    const { hexo, options } = this;
    const { relative_link } = hexo.config;
    const { lazyload, prependRoot, postPath } = options;
    const relativeCurDir = `./${geFfilename(postPath)}/`;


    console.info(44444, href, relativeCurDir)
    if (href.includes(relativeCurDir)) {
      console.info(9999)
      // console.info(href, title, text, postPath)
      href = href.replace(relativeCurDir, '');
    }

    if (!/^(#|\/\/|http(s)?:)/.test(href) && !relative_link && prependRoot) {
      if (!href.startsWith('/') && !href.startsWith('\\') && postPath) {
        const PostAsset = hexo.model('PostAsset');
        // findById requires forward slash
        const asset = PostAsset.findById(join(postPath, href.replace(/\\/g, '/')));
        // asset.path is backward slash in Windows
        if (asset) href = asset.path.replace(/\\/g, '/');
      }
      href = url_for.call(hexo, href);
    }

    let out = `<img src="${encodeURL(href)}"`;
    if (text) out += ` alt="${text}"`;
    if (title) out += ` title="${title}"`;
    if (lazyload) out += ' loading="lazy"';

    out += '>';
    return out;
  }
}
