IgnorePlugin为内置插件<br />可以忽略引入某些库
```javascript
plugins:[
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
]
```
上述的意思为 如果从moment中引入了.locale 就可以忽略掉<br />因为locale中有很多不会使用的资源

可以进行手动引入自己所会使用的包
```javascript
import 'moment/locale/zh-cn'
```
