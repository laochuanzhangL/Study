const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  resolve: {
    alias: {
      // 配置别名
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".vue", ".json"], // 默认值: [".js",".json"]  模块名字可以省略的后缀名
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    jquery: "jQuery",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
          },
          // {
          //   loader: "eslint-loader",
          //   options: {
          //     // eslint options (if necessary)
          //     fix: true,
          //   },
          // },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader", // 根据图片大小，把图片优化成base64
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css", // 设置最终输出的文件名
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "AICODER", // 默认值：Webpack App
      filename: "index.html", // 默认值： 'index.html'
      template: path.resolve(__dirname, "src/main.html"), //使用的模板文件
      minify: {
        collapseWhitespace: true,
        removeComments: true, //是否移除注释
        removeAttributeQuotes: true, // 移除属性的引号
      },
    }),
  ],
}
