// const path = require("path")

module.exports = {
    mode: 'development',
    entry:{
        mainn: './source/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '../' + '/build'
    }
}