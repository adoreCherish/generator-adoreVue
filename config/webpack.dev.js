const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const config = {
    resolve: {
        //extensions: [".js", ".json", ".jsx", ".css", '.jpg'],
        alias: {
            'jquery': path.join(__dirname, '../node_modules/jquery/dist/jquery.js'),
            // 'tether': path.resolve(__dirname, './node_modules/tether/dist/js/tether.js'),
            'bootstrap': path.join(__dirname, '../node_modules/bootstrap/dist/js/bootstrap.min.js'),
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.js'),
        }
    },
    entry: {
        vendor: ['jquery', 'bootstrap', 'vue', './src/public/js/hero-slider-main.js', './src/public/js/jquery.magnific-popup.min.js', './src/public/js/tether.min.js'],
        //vendor: ['./src/public/js/hero-slider-main.js', './src/public/js/jquery.magnific-popup.min.js', './src/public/js/tether.min.js']
        index: ['./src/public/scripts/index.es'],

    },
    output: {
        filename: 'public/scripts/[name].js',
        path: path.join(__dirname, '../dist')
    },

    module: {　　
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            // vue-loader 选项在这里配置
            options: {
                loaders: {
                    // ...
                }
            }
        }, {　　　　　　
            test: /\.jpg?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: 'public/img/[name].[ext]'
                }
            }]　　　
        }, {
            test: /\.js?$/
        }, {　　　　　　
            test: /\.html$/,
            loader: 'html-withimg-loader'　　　　
        }, {
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: [
                    "latest",
                    "stage-3"
                ]
            }
        }, {
            test: /\.(css)$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                precss({}),
                                cssnext({})
                            ];
                        }
                    }
                }]
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            filename: 'views/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'public/css/[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            "window.jQuery": 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "index", "load"]
        }),
    ]
}
module.exports = config;