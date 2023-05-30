/* global hexo */

'use strict';

const filter = require('./lib/filter');

hexo.extend.filter.register('marked:renderer', function(renderer) {
  const { relatived_img } = hexo.config;
  const isEnable = relatived_img === 'undefined' ? true : relatived_img;
  return isEnable ? filter.call(this, renderer) : renderer;
});
