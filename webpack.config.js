const path = require('path');

module.exports = {
    devtool: "eval-source-map",
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};
