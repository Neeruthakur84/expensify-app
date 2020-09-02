const path = require('path')
module.exports = {
    mode: 'development',
    entry : "./src/app.js",
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },

            {
                test: /\.s?css$/,
                use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
            }
        ]
    },

    devtool : 'eval-cheap-module-source-map',
    devServer: {
        contentBase : path.join(__dirname, 'public'),
        historyApiFallback: true
    }



}

