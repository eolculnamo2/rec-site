var path = require('path')
///@TODO
module.exports = {
    entry: './public/vue-components/main.js',
    output: {
        path: path.resolve('./public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: 'es2015'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader!'
            }
        ]
    }
}