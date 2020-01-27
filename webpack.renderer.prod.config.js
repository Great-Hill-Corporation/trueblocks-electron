/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');

const baseConfig = require('./webpack.renderer.config');

module.exports = merge.smart(baseConfig, {
  mode: 'production'
});
