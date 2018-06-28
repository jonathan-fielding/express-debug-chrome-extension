const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    entry: {
        loader: './src/scripts/loader.js',
        panel: './src/scripts/panel.js',
        background: './src/scripts/background.js',
        css: './src/sass/main.scss',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['node_modules/foundation-sites/scss'],
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'extension'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'loader.html',
        }),
        new CopyWebpackPlugin([
            { from: 'src/manifest.json', to: path.resolve(__dirname, 'extension') },
            { from: 'src/panel.html', to: path.resolve(__dirname, 'extension') },
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    watchOptions: {
        ignored: ['node_modules', 'extension']
    },
    watch: true
};