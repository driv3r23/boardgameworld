module.exports = {
    parser: require('postcss-scss'),
    plugins: [
        require('precss'),
        require('postcss-cssnext')({
            browsers: ['Chrome >= 49'],
        }),
    ]
}