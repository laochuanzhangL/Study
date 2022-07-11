配置模块如何解析。比如： import _ from 'lodash' ,其实是加载解析了lodash.js文件。此配置就是设置加载和解析的方式。

```javascript
// webpack.config.js
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    
    mainFields:['style','main']//先找style再找main
    mainFiles:[],//人口文件名字 默认index.js
  extensions:['.js','.css','.json']//如果没有后缀名，就找此后缀名的文件，顺序为从前到后
  alias: {
    vue$: path.resolve(__dirname, 'src/lib/vue/dist/vue.esm.js'),
      '@': path.resolve(__dirname, 'src/')
  }

  modules: [resolve(__dirname, '../../node_modules'), 'node_modules']//告诉webpack解析模块时去找哪个目录
}
  ...
}
  
  // index.js
  // 在我们的index.js文件中，就可以直接import
  import vue from 'vue';
// 等价于
import vue from  'src/lib/vue/dist/vue.esm.js';

```
然后在后序的引入中可以使用
```javascript
import {a}from '@/b'
```
[<br />](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e5%a4%96%e9%83%a8%e6%89%a9%e5%b1%95externals)

## alias
创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块


## Extensions
在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。 **resolve.extensions** 用于配置在尝试过程中用到的后缀列表，默认是：
```c
extensions: ['.js', '.json']
```
也就是说当遇到 **require('./data')** 这样的导入语句时，Webpack 会先去寻找 **./data.js** 文件，如果该文件不存在就去寻找 **./data.json** 文件， 如果还是找不到就报错。

假如你想让 Webpack 优先使用目录下的 TypeScript 文件，可以这样配置：
```c
extensions: ['.ts', '.js', '.json']
```

## MainFields
有一些第三方模块会针对不同环境提供几份代码。例如分别提供采用ES5 和 ES6的2份代码，这2份代码的位置写在package.json文件里：
```javascript
{
  "jsnext:main": "es/index.js",// 采用 ES6 语法的代码入口文件
    "main": "lib/index.js" // 采用 ES5 语法的代码入口文件
}
```
Webpack 会根据 **mainFields** 的配置去决定优先采用那份代码，**mainFields** 默认如下
```javascript
mainFields: ['browser', 'main']
```
webpack会按照数组里的顺序去package.json文件里面找，只会使用找到的第一个。<br />假如我们想要ES6的那份代码，可以这样进行配置：
```javascript
mainFields: ['jsnext:main', 'browser', 'main']
```


## resolveLoader
写的loader会在modules的数组中查找
```javascript
 // 配置loader解析规则
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
```
<br /> 
