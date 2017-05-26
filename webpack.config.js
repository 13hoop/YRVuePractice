var path = require('path');
console.log(__dirname)
module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        // 单纯使用webpack-server默认并不会去走output的
        contentBase: __dirname,
        compress: true,
        clientLogLevel: "warning",
        inline: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}


