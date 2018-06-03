const path = require('path');
const fs = require('fs');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        index: './index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [
            'node_modules',
            './src'
        ]
    },
};
