const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        main: './source/app.js'
    },
    output: {
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, '../build')
    },
    module:{
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:"main boilerplate template",
            filename: 'template.html',
            template: "source/template.html"

        }),
        new HtmlWebpackPlugin({
            title:"page boilerplate template",
            filename: 'about.html'
        })
    ]
}