var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function () {
    return {
        entry: path.resolve(__dirname, "src/main.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js"
        },
        devtool: "cheap-eval-source-map",
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader",
                        publicPath: "/dist"
                    })
                },
                {
                    test: /\.(woff|svg|eot|ttf)(\?.*)?$/,
                    loader: "url-loader?limit=50000",
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: "url-loader?limit=819200",
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("bundle.css"),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.resolve(__dirname, "src/index.html")
            })]
    }

}