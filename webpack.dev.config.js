const merge = require('webpack-merge');
const base = require('./webpack.base.config');

module.exports = merge(base, {
    devtool: 'cheap-eval-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            exclude: /node_modules/
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
