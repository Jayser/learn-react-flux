const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.env || 'development';
const rootPath = path.resolve(__dirname);
const isDevMode = env == 'development';

module.exports = {
    entry: path.resolve(rootPath, './src/main.js'),
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: isDevMode ? "main.js" : "main.min.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    // Set where have to search modules
    resolve: {
        fallback: path.resolve(rootPath, "./src"),
        alias: {
            "jquery-ui": "jquery-ui/jquery-ui.js",
            modules: path.join(__dirname, "node_modules")
        },
        extensions: ['', '.js']
    },
    // Set where have to search loaders
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    devtool: isDevMode ? 'cheap-module-source-map' : null,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-react-jsx']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[name]__[local]&importLoaders=1', 'postcss-loader'),
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: path.join(__dirname, 'src')
            }, {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./img/fonts/[name].[ext]"
            }, {
                test: /\.woff2$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=/img/fonts/[name].[ext]"
            }, {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader?name=/img/[name].[ext]"
            }
            /*,
             {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}*/
        ]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
         compress: {
         warnings: false,
         drop_console: true,
         unsafe: true
         }
         }),*/
        new CleanWebpackPlugin(['dist'], {
            root: rootPath,
            verbose: true,
            dry: false
        }),
        new ExtractTextPlugin("[name].css"),
        new CopyWebpackPlugin([
            {from: './src/index.html'},
            {from: './src/favicon.ico'}
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery",
            "windows.jQuery": "jquery"
        })
    ]
};