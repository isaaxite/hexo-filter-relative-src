/* global hexo */

'use strict';

const assign = require('object-assign');
const { parse } = require('node-html-parser');
const path = require('path');
const { URL } = require('url');
// const log = require('hexo-log').default({
//   debug: false,
//   silent: false
// });

const DEF_CONF = {
  enable: true,
  prefix: ''
};

const relitive_src_filter = hexo.config.relitive_src_filter || DEF_CONF;

hexo.config.relitive_src_filter = assign({
  enable: typeof relitive_src_filter.enable === 'undefined' ? true : relitive_src_filter.enable
}, hexo.config.relitive_src_filter);

hexo.extend.filter.register('after_post_render', function(data) {
  console.info(relitive_src_filter)
  if (!relitive_src_filter.enable) {
    return data;
  }

  const document = parse(data.content);
  const imgEles = document.querySelectorAll('img');
  const anchorEles = document.querySelectorAll('a');

  const isUrl = (link) => /^(#|\/\/|http(s)?:)/.test(link)
  const getFormatLink = (link) => {
    let lastLink = link;
    if (isUrl(link)) {
      return lastLink;
    }

    lastLink = path.basename(lastLink);

    if (relitive_src_filter.prefix && isUrl(relitive_src_filter.prefix)) {
      lastLink = new URL(lastLink, relitive_src_filter.prefix);
    }
    return lastLink;
  };

  const batchFormatLink = (eles, attrName) => {
    for (const ele of eles) {
      const attr = ele.getAttribute(attrName);
      const lastAttr = getFormatLink(attr);
      ele.setAttribute(attrName, lastAttr);
    }
  };

  batchFormatLink(imgEles, 'src');
  batchFormatLink(anchorEles, 'href');

  data.content = document.toString();

  return data
});
