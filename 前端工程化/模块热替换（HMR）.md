用于优化打包构建速度<br />`HMR(hot module replacement)`<br />作用：一个模块发生变化就只会重新打包这一个模块，而不是打包所有模块

配置
```javascript
 devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    // 当修改了webpack配置，新配置要想生效，必须重新webpack服务
    hot: true
  }
```

      样式文件：可以使用HMR功能：因为style-loader内部实现了<br />      js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码<br />        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。<br />      html文件: 默认不能使用HMR功能 也不需要HMR功能。
