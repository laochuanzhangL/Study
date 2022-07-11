优化代码运行的性能

# 懒加载

```javascript

document.getElementById('btn').onclick = function() {
  
  import(/* webpackChunkName: 'test' */'./test').then(({ mul }) => {
    console.log(mul(4, 5));
  });
};
```
在点击btn后文件才开始加载


# 预加载
正常加载可以认为是并行加载（同一时间加载多个文件）<br />预加载 prefetch：等其他资源加载完毕，浏览器空闲了，再偷偷加载资源<br />添加魔法注释` webpackPrefetch: true`<br />兼容性非常差 慎用 可以在
```javascript

document.getElementById('btn').onclick = function() {
  
  import(/* webpackChunkName: 'test' webpackPrefetch: true */'./test').then(({ mul }) => {
    console.log(mul(4, 5));
  });
};
```

