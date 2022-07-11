优化打包构建速度
```javascript
 module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: "babel-loader",
              },
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: "url-loader", // 根据图片大小，把图片优化成base64
              },
            ],
          },
        ],
      },
    ],
  },
```
文件只会匹配oneOf中的一个test
