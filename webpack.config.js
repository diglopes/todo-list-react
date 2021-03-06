const isDevMode = process.env.NODE_ENV !== "production";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: isDevMode ? "development" : "production",
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "client", "build"),
    filename: isDevMode ? "bundle.js" : "bundle.min.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(
        __dirname,
        "client",
        "src",
        "public",
        "index.html"
      ),
      filename: "index.html",
      favicon: path.resolve(
        __dirname,
        "client",
        "src",
        "public",
        "favicon.ico"
      ),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js[x]?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@modules": __dirname + "/node_modules",
      "@": __dirname + "/client" + "/src",
    },
  },
};
