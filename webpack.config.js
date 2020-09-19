const path = require('path');

module.exports = {
    entry: './public/src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};