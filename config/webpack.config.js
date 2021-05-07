const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main: './source/app.js'
    },
    output: {
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, '../build')
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../public'),
        port: 5001,
        writeToDisk: true
    },
    module:{
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        
        new HtmlWebpackPlugin({
            title:"main boilerplate template",
            filename: 'index.html',
            template: "source/templates/template.html"

        }),
        new HtmlWebpackPlugin({
            title:"page boilerplate template",
            filename: 'about.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        })
    ]
}