/* global hexo */

'use strict';

const assign = require('object-assign');
const filter = require('./lib/filter');
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

hexo.extend.filter.register('marked:renderer', function(renderer) {
  // log.info('relitive_src_filter conf:', relitive_src_filter);
  if (relitive_src_filter.enable) {
    return filter.call(this, renderer);
  }
  return renderer;
});
