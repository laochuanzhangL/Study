使用`MiniCssExtractPlugin.loader`替换style.loader

对所有文件进行打包 次loader的不同之处在于将css文件单独的分离开
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1657024241487-263c9d39-366c-444b-8ef5-e0df50c31ca0.png#clientId=u6bd9a759-214b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=80&id=u568e92e5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=80&originWidth=227&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2646&status=done&style=none&taskId=u8116707b-5e4f-4669-88a8-6a2be8b2aea&title=&width=227)
css的代码并不在js内
配置文件
```c
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
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
          MiniCssExtractPlugin.loader,//不再使用style.loader
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
      filename: '[name].[hash].css', // 设置最终输出的文件名  中间的hash可以没有 
      chunkFilename: '[id].css'
    })
  ]
}

```
