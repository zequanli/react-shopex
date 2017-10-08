//配置常量
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');  //源代码的根目录
const BUILD_PATH = path.resolve(__dirname, 'dist');  //打包后的资源根目录

module.exports = {
    context: SRC_PATH,  //基础目录，绝对路径，用于从配置中解析入口起点
    entry: {
        app: './src/index.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: BUILD_PATH
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            use: [
                'eslint-loader'
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(js|jsx)$/,
            use: [
                'babel-loader'
            ],
            exclude: /node_modules/
        },{
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 20480
                    }
                }
            ]
        }]
    },
    plugins: [
        //每次打包前,先清空原来目录中的内容
        new CleanWebpackPlugin([BUILD_PATH]),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_PATH, 'index.html'),
            filename: 'index.html',
            inject: 'body',
        })
    ]
};