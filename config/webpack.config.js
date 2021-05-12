const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry:{
        main: './source/app.js'
    },
    output: {
        filename: 'js/[name].js',
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
                use: ['style-loader', "css-loader"]
            }
            ,
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', "css-loader", 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: 'file-loader',
               
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
        })
    ]
}