const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  performance: {
    hints: false
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
        "style-loader",
        { loader: "css-loader", options: { importLoaders: 1 } },
        "postcss-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
        {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
        },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
        {
            loader: 'file-loader',
            options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
            }
        }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};