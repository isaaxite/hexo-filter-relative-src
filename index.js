/* global hexo */

'use strict';

const filter = require('./lib/filter');
const log = require('hexo-log').default({
  debug: false,
  silent: false
});

log.info('Hello HexoFilterRelativeSrc!')

hexo.extend.filter.register('marked:renderer', function(renderer) {
  const { relatived_img } = hexo.config;
  const isEnable = typeof relatived_img === 'undefined' ? true : relatived_img;
  if (isEnable) {
    return filter.call(this, renderer);
  }
  return renderer;
});
