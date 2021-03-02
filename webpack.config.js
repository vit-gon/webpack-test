const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.tsx'),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        // publicPath: '/dist'
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(j|t)sx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            { targets: { browsers: 'last 2 versions' } }
                        ],
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                    ],
                    cacheDirectory: true,
                    babelrc: false,
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        'react-hot-loader/babel'
                    ]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.module\.(sa|sc|c)ss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // namedExport: true,
                            // camelCase: true,
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader',
            }
        ]
    }
}
