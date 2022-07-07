配置模块如何解析。比如： import _ from 'lodash' ,其实是加载解析了lodash.js文件。此配置就是设置加载和解析的方式。
## resolve.alias
创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：

```c
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
+ resolve: {
+   alias: {
+     vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
+     '@': path.resolve(__dirname, 'src/')
+   }
+ }
  ...
}

// index.js
// 在我们的index.js文件中，就可以直接import
import vue from 'vue';
// 等价于
import vue from  'src/lib/vue/dist/vue.esm.js';

```
然后在后序的引入中可以使用
```c
import {a}from '@/b'
```
[
](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e5%a4%96%e9%83%a8%e6%89%a9%e5%b1%95externals)
