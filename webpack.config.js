const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname,
    // entry: ['babel-polyfill', './app/module/application/containers/root.js'],
    entry: './app/module/application/containers/root.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', "es2015", "stage-0"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: { loader: 'css-loader', options: { minimize: true }},
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader', options: { minimize: true }}, 'sass-loader'],
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [


//  For production:

        //   new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        //   new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false },
        //     warnings: false,
        //     output: { comments: false },
        //     mangle: false,
        //     sourcemap: false,
        //     minimize: true,
        //     mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
        //   }),

// --------------------------------------------------


        new ExtractTextPlugin({
            filename: 'app/public/stylesheets/app.css'
        }),
    ],
};

module.exports = config;

