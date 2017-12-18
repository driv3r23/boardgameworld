const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const client = {
    name: 'client',
    entry: {
        client: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?name=client',
            './src/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                options: {
                    presets: [
                        ['env', { 'modules' : false }],
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
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
},
server = {
    name: 'server',
    entry: {
        server: [
            'webpack-hot-middleware/client?name=server',
            './src/server/server/index.js'
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                options: {
                    presets: [
                        'env',
                        'stage-0',
                        'react'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
},
defaults = {
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    devtool: 'source-map'
}

module.exports = [
    {...client, ...defaults},
    {...server, ...defaults}
];