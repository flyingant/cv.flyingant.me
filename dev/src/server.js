var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.development');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(8080, 'localhost', function (err) {
    if (err) {
        return console.error(err)
    }
    console.log('Listening at http://localhost:8080');
});
