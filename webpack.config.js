const path = require('path');
const fs = require('fs');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: getLambdas(),
    output: {
        filename: '[name].deploy.js',
        path: path.resolve(__dirname, 'deploy'),
        libraryTarget: 'commonjs'
    },
    externals: ['aws-sdk'],
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
            'node_modules'
        ]
    },
};

function getLambdas() {
    const entry = {};
    fs.readdirSync('./lambdas/').forEach((fileName) => {
        entry[fileName.replace('.ts', '')] = './lambdas/' + fileName;
    });
    return entry;
}