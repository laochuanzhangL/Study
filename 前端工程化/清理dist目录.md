每次构建，我们的 /dist 文件夹都会保存生成的文件，然后就会非常杂乱。<br />通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法<br />clean-webpack-plugin 是一个比较普及的管理插件，让我们安装和配置下。
```javascript
const path = require('path');
....
  + const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    +     new CleanWebpackPlugin(['dist'])//可以清理多个目录
    写在数组内即可
    ...
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  ...
  };
```
