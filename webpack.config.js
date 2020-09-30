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
            {
                test: /\.scss$/,
                use: 'scss-loader',
            }
        ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    }
};