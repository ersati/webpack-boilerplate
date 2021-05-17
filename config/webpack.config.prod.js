const path = require("path");

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: './source/app.js'
    },
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, '../build')
    },

    module: {
        rules: [{
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 50,
                                progressive: true
                            }
                        }

                    }
                ]

            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: "usage"
                        }]
                    ],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: "main boilerplate template",
            filename: 'index.html',
            template: "source/templates/template.html"

        }),
        new HtmlWebpackPlugin({
            title: "page boilerplate template",
            filename: 'about.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
        // new CopyPlugin(
        //     [{
        //         from: 'public/images',
        //         to: 'images'
        //     }]
        // )
    ]
}