const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config.base');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

module.exports = validate(merge(baseConfig, {

    entry: {
        app: [
            'babel-polyfill',
            "./main.production"
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
}));