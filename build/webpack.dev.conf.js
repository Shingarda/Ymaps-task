const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');

const webpackDevConfig = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        contentBase: webpackBaseConfig.externals.paths.dist,
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true
    }
});

module.exports = new Promise((resolve, reject) => {
    resolve(webpackDevConfig)
});