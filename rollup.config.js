const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  dest: resolve(__dirname, 'dist', 'rollup.js'),
  format: 'iife',
  plugins: [
    require('rollup-plugin-node-resolve')({ jsnext: true, main: true }),
    require('rollup-plugin-commonjs')({ sourceMap: false }),
    require('rollup-plugin-md')(),
    require('rollup-plugin-buble')()
  ]
};
