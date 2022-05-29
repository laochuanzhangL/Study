# 什么是 Suspense?

如果将Suspense 翻译为中文的话是等待、悬垂、悬停的意思。**React给出了一个更规范的定义**：
**Suspense 不是一个‘数据获取库’, 而是一种提供给‘数据获取库’的机制，数据获取库通过这种机制告诉 React 数据还没有准备好，然后 React就会等待它完成后，才继续更新 UI**。 简单总结一下 Suspense 是 React 提供的一种异步处理的机制, 它不是一个具体的数据请求库。**它是React 提供的原生的组件异步调用原语**。它是 Concurrent 模式特性集合中的重要角色。


# Suspense的作用：
## 请求远程数据:
```javascript
function Posts() {
  const posts = useQuery(GET_MY_POSTS)

  return (<div className="posts">
    {posts.map(i => <Post key={i.id} value={i}/>)}
  </div>)
}

function App() {
  return (<div className="app">
    <Suspense fallback={<Loader>Posts Loading...</Loader>}>
      <Posts />
    </Suspense>
  </div>)
}

```
我们需要 Suspense 来包裹这些包含异步操作的组件，并给它们提供回退(fallback)。在异步请求期间，会显示这个回退。请求完成后才会渲染界面。

## 加载依赖脚本:
```javascript
function MyMap() {
  useImportScripts('//api.map.baidu.com/api?v=2.0&ak=您的密钥')

  return (<BDMap />)
}

function App() {
  return (<div className="app">
    <Suspense fallback={<Loader>地图加载中...</Loader>}>
      <MyMap />
    </Suspense>
  </div>)
}

```
上面的代码获取异步资源就跟同步调用似的。没错，有了 Suspense, 我们可以和async/await或者Generator 一样，用’同步‘的代码风格来处理异步请求

如果suspense中有多个组件，那么要等到所有组件任务都完成后，才会去掉fallback显示内容


