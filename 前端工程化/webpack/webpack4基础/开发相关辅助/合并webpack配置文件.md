### [合并两个webpack的js配置文件](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e5%90%88%e5%b9%b6%e4%b8%a4%e4%b8%aawebpack%e7%9a%84js%e9%85%8d%e7%bd%ae%e6%96%87%e4%bb%b6)
开发环境(development)和生产环境(production)配置文件有很多不同点，但是也有一部分是相同的配置内容，如果在两个配置文件中都添加相同的配置节点， 就非常不爽。
webpack-merge 的工具可以实现两个配置文件进合并，这样我们就可以把 开发环境和生产环境的公共配置抽取到一个公共的配置文件中。

## `webpack.commom.js`
公共的 开发环境和生成环境都需要的配置
```c
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
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

```


## `webpack.dev.js`
开发环境所需要的配置（**开发人员调试开发的一种环境**）
```c
const path = require("path")
const merge=require('webpack-merge')
const common=require('./webpack.common')
let devConfig = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
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
}

module.exports=merge(common,devConfig)
```


# `webpack.prod.js`
生产环境所需要的配置（**用户可以正常使用**）
```c
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge=require('webpack-merge')
const common=require('./webpack.common')
let prodConfig  = {
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
      filename: "[name].[hash].css", // 设置最终输出的文件名
      chunkFilename: "[id].css",
    }),
  ],
}

module.exports=merge(common,prodConfig)
```
