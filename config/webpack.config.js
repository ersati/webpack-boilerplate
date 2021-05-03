const path = require("path")

module.exports = {
    mode: 'development',
    entry:{
        mainn: './source/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('/usr/local/lib/', '../', '/build') 
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