const path = require('path');

module.exports = {
    mode: 'development',
    //look for the starter point in this case is app.js, look all the imports
    entry: './src/app.ts',
    output: {
        //filename: 'bundle.[contenthash].js' in case want to add a hash
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/, //tell webpack want to check for files that end with .ts
                use: 'ts-loader', // then what to do with that files, ts-loader handles this
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] //look for this extensions files and bundle all files with these extensions
    }
};