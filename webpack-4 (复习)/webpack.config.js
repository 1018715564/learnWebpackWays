const path = require('path')

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[hash][name].[ext]",
                    outputPath: 'images/'
                }
            }
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
        }]
    }
}