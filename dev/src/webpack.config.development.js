const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config.base');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

module.exports = validate(merge(baseConfig, {

    debug: true,

    devtool: 'inline-source-map',

    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
            "./main"
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}));