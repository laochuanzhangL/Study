需要postcss-loader 然后另外安装需要使用的插件
```c
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap:true,
              plugins: (loader) => {
                require("autoprefixer")//此处写需要用到的插件
              },
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
```
