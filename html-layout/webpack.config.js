const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    // entry: './src/index.js',
    entry: './scss/style.scss',  // entry file; it can be index.js with scss-import
    output: {
       filename: 'bundle_for_webpack.js', //output file; must have for webpack
    //    filename: 'style.css',
       path: path.resolve(__dirname, './scss/')  // path for output-file
    },
    module: {
       rules: [{
          test:/\.(s*)css$/,
          use: [
             miniCss.loader,
             'css-loader',    //plugins for css and sass/scss
             'sass-loader',
          ]
       }]
    },
    plugins: [
       new miniCss({
          filename: '../css/style.css',  // output css-file
       }),
    ]
 };