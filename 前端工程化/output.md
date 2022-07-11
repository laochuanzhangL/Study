```javascript
  output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
      
    // 输出文件目录（将来所有资源输出的公共目录）
    path: resolve(__dirname, 'build'),
      
    //
    publicPath: '/', //所有资源引入公共路径前缀 : 'imgs/a.jpg' --> '/imgs/a.jpg'
      
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
      
    // library: '[name]', // 整个库向外暴露的变量名
    // libraryTarget: 'window' // 变量名添加到browser:window上
    // libraryTarget: 'global' // 变量名添加到node
    // libraryTarget: 'commonjs'//暴露方式为commonjs
  },
```
`publicPath:'/'`作用为 输出的文件名为 `'js/[name].js'`（指定名称+目录）加一个前缀  `'/js/[name].js'`

 chunkFilename: 

1. 通过`import`引入的文件的名称 
```javascript
import('./add').then(({ default: add }) => {
  console.log(add(1, 2));
});
```
如果不是用chunkFilename，其名称就会根据 filename 而定，而因为会与主文件冲突 其`[name]`就为0

2. 通过`optimization`打包的`node_modules`

