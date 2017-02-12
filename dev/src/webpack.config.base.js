const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = validate({

    resolve: {
        modulesDirectories: ["app", "node_modules"],
        extensions: ['', '.js']
    },

    output: {
        path: path.join(__dirname, '../../'),
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
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
                loader: "file-loader?name=[path][name].[ext]"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader?modules!less"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader?modules!sass"
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
        })
    ]

});


