Webpack可以看做是模块打包机，我们编写的任何文件，对于Webpack来说，都是一个个模块。所以Webpack的配置文件，有一个module字段，module下有一个rules字段，rules下有就是处理模块的规则，配置哪类的模块，交由哪类loader来处理。

```javascript
 module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/,
        // 多个loader用use
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        
        // 只检查 src 下的js文件
        include: resolve(__dirname, 'src'),
        
        // 优先执行
        enforce: 'pre',
        
        // 延后执行
        // enforce: 'post',
        
        // 单个loader用loader多个使用use
        loader: 'eslint-loader',
        options: {}
      },
      {
        // 以下配置只会生效一个
        oneOf: []
      }
    ]
  },
```
