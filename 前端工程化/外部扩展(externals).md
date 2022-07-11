externals 配置选项提供了「从打包输出的 js文件中排除依赖」的方法。<br />例如，从 CDN 引入 jQuery，而不是把它打包到最终文件中，可以减少打包文件的大小，增加打包效率：<br />index.html
```c
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
</script>
```
webpack.config.js
```c
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  alias: {
    extensions: [".js", ".vue",".json"]   // 默认值: [".js",".json"]
    vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
    '@': path.resolve(__dirname, 'src/')
  },

+  externals: {
+  jquery: {
+  root: 'jquery',
+  commonjs: 'jquery',
+  commonjs2: 'jquery',
+  amd: 'jquery',
+ },

  ...
}

```
具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 CommonJS, AMD, 全局变量和 ES2015 模块。外部 library 可能是以下任何一种形式：

- root：可以通过一个全局变量访问 library（例如，通过 script 标签）。
- commonjs：可以将 library 作为一个 CommonJS 模块访问。
- commonjs2：和上面的类似，但导出的是 module.exports.default.
- amd：类似于 commonjs，但使用 AMD 模块系统。
