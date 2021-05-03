const path = require("path")

module.exports = {
    mode: 'production',
    entry:{
        mainn: './source/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    module:{
        rules: [
            {
                test: /\.txt$/,
                use: "raw-loader"
            }
        ]
    }
}