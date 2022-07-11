优化打包构建速度<br />babel会对js进行处理<br />例如有100个已经打包的js模块，其中一个js模块发生变化，其他99个模块不变化，使用babel缓存就会避免资源的浪费。babel在第一个打包js模块后会进行缓存，如果后续发现文件没有变化的时候就会直接使用缓存的文件<br />webpack.config.js:
```javascript
 {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '50'
                    }
                  }
                ],
              ],
              // 开启babel缓存
              // 第二次构建时，会读取之前的缓存
              cacheDirectory: true
            }
          },
```

