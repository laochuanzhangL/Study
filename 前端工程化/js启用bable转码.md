虽然现代的浏览器已经兼容了96%以上的ES6的语法了，但是为了兼容老式的浏览器（IE8、9）我们需要把最新的ES6的语法转成ES5的。那么babel的loader就出场了。

`babel-loader babel-core babel-preset-env`  需要使用上述扩展包<br />在webpack的配置文件中，添加js的处理模块。
```c
 {
        test: /\.js$/,
        exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
        use: {
          loader: "babel-loader",
        },
      },
```
然后，在项目根目录下，添加babel的配置文件 .babelrc.<br />.babelrc文件如下：<br />然后，在项目根目录下，添加babel的配置文件 .babelrc.

.babelrc文件如下：
```c

{
  "presets": ["env"]
}

```
然后打包后就可以将ES6的代码转换成ES5的代码

