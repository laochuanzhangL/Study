模块(module): 这些选项决定了如何处理项目中的不同类型的模块。<br />webpack 模块可以支持如下:

- ES2015 import 语句
- CommonJS require() 语句
- AMD define 和 require 语句
- css/sass/less 文件中的 @import 语句。
- 样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)


#### [module.noParse](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=modulenoparse)
值的类型： RegExp | [RegExp] | function<br />防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。
```c
module.exports = {
  mode: 'devleopment',
  entry: './src/index.js',
  ...
  module: {
    noParse: /jquery|lodash/,//不对这些内容进行匹配
    // 从 webpack 3.0.0 开始,可以使用函数，如下所示
    // noParse: function(content) {
    //   return /jquery|lodash/.test(content);
    // }
  }
  ...
};
```

#### [module.rules](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=modulerules)
创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。
```c
module.exports = {
  ...
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```

#### [module Rule](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=module-rule)

- Rule 条件详解
   - 字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
   - 正则表达式：test 输入值。
   - 函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。
   - 条件数组：至少一个匹配条件。
   - 对象：匹配所有属性。每个属性都有一个定义行为。

#### [Rule.test](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=ruletest)

- { test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。
```c
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```
其他的条件比如：

- { include: Condition }:匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。
- { exclude: Condition }:排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。
- { and: [Condition] }:必须匹配数组中的所有条件
- { or: [Condition] }:匹配数组中任何一个条件
- { not: [Condition] }:必须排除这个条件
```c
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "app/styles"),
          path.resolve(__dirname, "vendor/styles")
        ],//只匹配这两个文件夹内的文件
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ...
};
```
<br /> 

#### [Rule.use](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=ruleuse)
应用于模块指定使用一个 loader。
```c
use: [
  'style-loader',
  {
    loader: 'css-loader'
  },
  {
    loader: 'less-loader',
    options: {
      noIeCompat: true
    }
  }
];
```
使用顺序：从后往前
