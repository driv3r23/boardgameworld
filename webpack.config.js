const webpack = require('webpack');
const { resolve } = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                options: {
                    presets: [
                        ['es2015', { 'modules': false }],
                        'stage-0',
                        'react'
                    ],
                    plugins: [
                        'react-hot-loader/babel'
                    ]
                }
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [
                        'css',
                        {
                            loader: 'autoprefixer',
                            options: {
                                browsers: 'last 2 versions'
                            }
                        },
                        'stylus'
                    ],
                    publicPath: "/"
                })
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};