const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge=require('webpack-merge')
const common=require('./webpack.common')
let prodConfig  = {
  mode: "production",
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