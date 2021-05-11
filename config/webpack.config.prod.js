const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry:{
        main: './source/app.js'
    },
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, '../build')
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
            ,
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: 'file-loader'
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