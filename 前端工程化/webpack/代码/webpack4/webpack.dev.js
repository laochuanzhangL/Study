const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common")
const webpack = require("webpack")
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin
let devConfig = {
  mode: "development",
  devtool: "inline-source-map", //开发阶段开启sourrce-map
  devServer: {
    hot: true, // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
    contentBase: path.resolve(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
    compress: true, // 一切服务都启用gzip 压缩
    port: 3000, // 端口
    open: true, // 是否打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          "style-loader",
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
    new webpack.NamedModulesPlugin(), // 更容易查看(patch)的依赖
    new webpack.HotModuleReplacementPlugin(), // 替换插件
    //  new BundleAnalyzerPlugin(),
  ],
}

module.exports = merge(common, devConfig)
