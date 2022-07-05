const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: (loader) => {
                require("autoprefixer")
              },
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
        //   {
        //     loader: "image-webpack-loader",
        //     options: {
        //       mozjpeg: {
        //         progressive: true,
        //         quality: 65,
        //       },
        //       optipng: {
        //         enabled: false,
        //       },
        //       pngquant: {
        //         quality: "65-90",
        //         speed: 4,
        //       },
        //       gifsicle: {
        //         interlaced: false,
        //       },
        //       webp: {
        //         quality: 75,
        //       },
        //     },
        //   },
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
      filename: "main.html", // 默认值： 'index.html'
      template: path.resolve(__dirname, "src/main.html"), //使用的模板文件
      minify: {
        collapseWhitespace: true,
        removeComments: true, //是否移除注释
        removeAttributeQuotes: true, // 移除属性的引号
      },
    }),
  ],
}
