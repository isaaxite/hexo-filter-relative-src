/* global hexo */

'use strict';

const { encodeURL, url_for } = require('hexo-util');
const path = require('path');
const { join } = path.posix;
const log = require('hexo-log').default({
  debug: false,
  silent: false
});

const loginfo = (...args) => {
  // log.info(...args);
}

const geFfilename = (postPath) => {
  return path.basename(postPath);
}

function hexotfyHref(href, postPath, relitive_src_filter) {
  const dirname = geFfilename(postPath);
  const isRelativeHref = href.startsWith(`./${dirname}`) || href.startsWith(dirname);

  if (!isRelativeHref) {
    return href;
  }

  let newHref = href;
  loginfo('href: ', href, 'postPath:', postPath, 'dirname:', dirname)

  if (href.startsWith(`./${dirname}`)) {
    newHref = href.replace(`./${dirname}/`, '');
  }

  if (href.startsWith(dirname)) {
    newHref = href.replace(`${dirname}/`, '');;
  }

  newHref = setPrefixIf(newHref, postPath, relitive_src_filter.prefix);

  loginfo('hexotfy href:', newHref);

  return newHref;
}

function setPrefixIf(href, postPath, prefix) {
  const dirname = geFfilename(postPath);
  // let newHref = path.join('resources', dirname, href)
  let newHref = href;

  if (!prefix) {
    return newHref;
  }

  loginfo('href after setting:', path.join(prefix, newHref))

  return path.join(prefix, newHref);
}

module.exports = function(renderer) {
  renderer.image = function(href, title, text) {
    const { hexo, options } = this;
    const { relative_link, relitive_src_filter, root } = hexo.config;
    const { lazyload, prependRoot, postPath } = options;
    const dirname = geFfilename(postPath);
    const isRelativeHref = href.startsWith(`./${dirname}`) || href.startsWith(dirname);

    href = hexotfyHref(href, postPath, relitive_src_filter);

    if (!/^(#|\/\/|http(s)?:)/.test(href) && !relative_link && prependRoot) {
      if (!href.startsWith('/') && !href.startsWith('\\') && postPath) {
        const PostAsset = hexo.model('PostAsset');
        // findById requires forward slash
        const asset = PostAsset.findById(join(postPath, href.replace(/\\/g, '/')));
        // asset.path is backward slash in Windows
        if (asset) href = asset.path.replace(/\\/g, '/');
      }

      if (isRelativeHref) {
        href = path.join(root, href);
      } else {
        href = url_for.call(hexo, href);
      }
    }

    loginfo('laest href:', href, '\n\n');

    let out = `<img src="${encodeURL(href)}" n="--${href}"`;
    if (text) out += ` alt="${text}"`;
    if (title) out += ` title="${title}"`;
    if (lazyload) out += ' loading="lazy"';

    out += '>';
    return out;
  }
}
