module.exports = {
    entry: './src/decotractors.js',
    output: {
        path: __dirname + '/dist',
        filename: 'decotractors.js',
        libraryTarget: 'umd'
    },
    externals: ['lodash'],
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
