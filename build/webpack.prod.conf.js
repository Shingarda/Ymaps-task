const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');

const webpackProdConf = merge(webpackBaseConf, {
    mode: 'production',
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(webpackProdConf);
});