module.exports = {
    mode: 'production',
    entry:{
        mainn: './source/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '../' + '/build'
    }
}