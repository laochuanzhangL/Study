优化代码运行的性能

# 单独打包node_modules

## 单入口
单入口一般没有此类需求，因为并不会增加效率

```javascript
module.exports = {
  // 单入口
  entry: './src/js/index.js',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
};
```

上述配置可以在打包时单独将node_modules中代码单独打包成一个js文件


## 多入口
将node_modules中代码单独打包成一个js文件，然后打包后的文件只用引入同一个node_modules文件。而如果不这样单独打包，node_modules文件就会被两个文件引入，被引入两次，效率就会变低
```javascript
module.exports = {
  // 单入口
  entry: {
    index: './src/js/index.js',
    test: './src/js/test.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
};
```


# 动态引入其他文件
并不是在webpack中设置，而是在js引入的方式上改变
```javascript
import(/* webpackChunkName: 'test' */'./test')
  .then(({ mul, count }) => {
    // 文件加载成功~
    // eslint-disable-next-line
    console.log(mul(2, 5));
  })
  .catch(() => {
    // eslint-disable-next-line
    console.log('文件加载失败~');
  });
```
可以单独引入将某个文件打包<br />`import(/* webpackChunkName: 'test' */'./test')`其中的注释意为打包后的文件名为test

