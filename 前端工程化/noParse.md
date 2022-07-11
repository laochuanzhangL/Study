noParse是module中的一个配置，可以不去解析noParse中写的文件
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
  noParse:/jquery/,
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
