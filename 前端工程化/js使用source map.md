当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。<br />使用 inline-source-map 选项，这有助于解释说明 js 原始出错的位置。（不要用于生产环境）：<br />不需要下载包
```javascript
const path = require("path")
const merge=require('webpack-merge')
const common=require('./webpack.common')
let devConfig = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  +devtool:'inline-source-map',//开发阶段开启sourrce-map
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
