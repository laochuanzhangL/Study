对于带hash文件的文件名有不同的哈希值，html中引入会存在问题，可借助插件进行处理
HtmlWebpackPlugin插件，可以把打包后生成新的html文件，其中注入新的打包的css和js文件。
配置
```c
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // 设置最终输出的文件名
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
        title: 'AICODER 全栈线下实习', // 默认值：Webpack App
        filename: 'main.html', // 默认值： 'index.html'
        template: path.resolve(__dirname, 'src/main.html'),//使用的模板文件
        minify: {
          collapseWhitespace: true,
          removeComments: true, //是否移除注释
          removeAttributeQuotes: true // 移除属性的引号
        }
      })
  ]
}

```
