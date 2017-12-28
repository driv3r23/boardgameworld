const webpack = require('webpack')
const config = require('../../../webpack.config.js')

const compiler = webpack(config);

module.exports = [
    require('webpack-dev-middleware')(compiler, {
        historyApiFallback: true,
        noInfo: true,
        publicPath: '/'
    }),
    require('webpack-hot-middleware')(compiler)
]