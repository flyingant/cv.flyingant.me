const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = validate({

    resolve: {
        modulesDirectories: ["app", "node_modules"],
        extensions: ['', '.js']
    },

    output: {
        path: path.join(__dirname, '../dist/'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: path.join(__dirname, './'),
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader?modules!less"
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader?",
                include: path.resolve(__dirname, "app/stylesheet/css")
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Liu Cheng | CV | Front End Web Developer',
            template: './index.template.html'
        }),
        new CopyPlugin([
            { from: './images', to: '../dist/images/' },
            { from: './js', to: '../dist/js/' },
        ]),
    ]

});


