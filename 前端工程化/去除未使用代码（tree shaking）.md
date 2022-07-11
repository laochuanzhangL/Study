优化代码运行的性能<br />tree shaking:去除无用代码<br />前提：

1. 必须使用ES6模块化
1. 开启production环境

在上述前提下会自动开启webpack

```javascript

export function mul(x, y) {
  return x * y;
}

export function count(x, y) {
  return x - y;
}

```
上述代码块中 如果在生产环境中mul方法被es6模块化引入，而count未被引入，那么打包后的代码中不会包含count的代码，这就叫树摇(tree shaking)


在package.json配置中

`"sideEffects":false`所有代码都没有副作用（都可以进行tree shaking） <br />产生的问题：可能会把css/@babel/poilyfill等文件干掉<br />因为此类文件被引入但是没有使用

`"sideEffects":["*.css"]`这样写了之后就不会将css等文件干掉


