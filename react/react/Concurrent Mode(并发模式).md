CM 本身并不是一个功能，而是一个底层设计
并发模式是一组功能，可帮助 React 应用程序保持响应并平滑地适应用户的设备和网络速度能力。并发模式将其拥有的任务划分为更小的块。 React 的调度程序可以挑选并选择要执行的作业。作业的调度取决于它们的优先级。通过对任务进行优先级排序，它可以停止琐碎或不紧急的事情，或者进一步推动它们。 React 始终将用户界面更新和渲染放在首位。
说的太复杂可能有点拗口，总结一句话就是：
React 17 和 React 18 的区别就是：从`同步不可中断更新`变成了`异步可中断更新`。
（此架构在v16和v17中都是试验性的，需要手动开启，在v18中正式发布）
# 为什么需要并发模式？
众所周知，JavaScript 框架或库是单线程的工作。因此，当一个代码块运行时，其余的块必须等待执行。无法并发执行多线程工作。界面渲染也是一样的。
一旦 React 开始渲染某些东西，无法中断直到运行完成。React 开发人员将这种渲染称为“阻塞渲染”。 这种阻塞渲染会创建一个不稳定的用户界面，并且随时可能停止响应。

让我们看看我们的代码。我们看到的第一个屏幕是初始屏幕。使用传统或块渲染是现在React 的做法。可中断渲染是并发模式的测试功能。我们先看看传统的渲染工作。
![](https://cdn.nlark.com/yuque/0/2022/png/2976158/1652593428353-8c23b264-551c-464b-8906-e59856d92b0d.png#clientId=u1a351c17-d612-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u818e2e17&margin=%5Bobject%20Object%5D&originHeight=255&originWidth=692&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u934acc96-5f1d-4175-b015-2025991f990&title=)
像素画布在每次击键时重新渲染。在传统渲染中，整个 UI 会在每次击键时暂停，直到它可以重新渲染屏幕。在此期间，即使我们继续打字，用户输入不会更新。
下图显示可中断渲染。在可中断渲染中，用户可以继续输入。在为每次击键并行重新渲染画布时，UI 不会停止或停止。
![](https://cdn.nlark.com/yuque/0/2022/png/2976158/1652593450529-f29ff9ac-586c-46f7-a2b6-35f527f581bc.png#clientId=u1a351c17-d612-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uea2b1300&margin=%5Bobject%20Object%5D&originHeight=324&originWidth=692&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u234e3bb7-fe10-4253-b01a-d5ffa3bc682&title=)
重新渲染完成后，React 会更新 UI。虽然在静态截图中很难看到，但我们可以看到网格在变化，但用户仍然可以打字而不会出现 UI 卡顿的情况。![](https://cdn.nlark.com/yuque/0/2022/png/2976158/1652593462760-90b8e574-8685-4c9a-b3eb-c3f244ff108c.png#clientId=u1a351c17-d612-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7cec55ba&margin=%5Bobject%20Object%5D&originHeight=284&originWidth=692&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf0df7b08-56b0-49d5-80d1-74f59de9cc1&title=)
**因为input中state的变化是比渲染网格更加紧急的任务，在并发模式中，fiber会中止网格的渲染，先进行input中state的更新。而没有并发模式的时候，当第二次输入值的时候，必须要等待页面渲染完成才会进行state的更新**

# 如何使用并发模式
在 React 18 中，提供了新的 root api，我们只需要把 render 升级成 createRoot(root).render(<App />) 就可以开启并发模式了。
那么这个时候，可能有同学会提问：**开启并发模式就是开启了并发更新么？**
NO！ 在 React 17 中一些实验性功能里面，开启并发模式就是开启了并发更新，但是在 React 18 正式版发布后，由于官方策略调整，React 不再依赖并发模式开启并发更新了。
换句话说：开启了并发模式，并不一定开启了并发更新！
一句话总结：**在 18 中，不再有多种模式，而是以是否使用并发特性作为是否开启并发更新的依据**。
从最老的版本到当前的v18，市面上有多少个版本的React？
可以从架构角度来概括下，当前一共有两种架构：

- 采用不可中断的**递归**方式更新的`Stack Reconciler`（老架构）
- 采用可中断的**遍历**方式更新的`Fiber Reconciler`（新架构）

新架构可以选择是否开启并发更新，所以当前市面上所有 React 版本有四种情况：

1. 老架构（v15及之前版本）
1. 新架构，未开启并发更新，与情况1行为一致（v16、v17 默认属于这种情况）
1. 新架构，未开启并发更新，但是启用了并发模式和一些新功能（比如 Automatic Batching，v18 默认属于这种情况）
1. 新架构，开启并发模式，开启并发更新

并发特性指开启并发模式后才能使用的特性，比如：

- `useDeferredValue`
- `useTransition`

关系图：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1652595121603-e35f5751-c0cf-4100-b2b5-8e92175aa6f6.png#clientId=u2b7cec3f-d05a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=694&id=u13068448&margin=%5Bobject%20Object%5D&name=image.png&originHeight=694&originWidth=849&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63709&status=done&style=none&taskId=u4e20afd9-1d5c-4218-91c5-01fb7786ab3&title=&width=849)
# 并发特性：


## 一、useTransition

```javascript
import React, { useState, useEffect, useTransition } from 'react';

const App: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    // 使用了并发特性，开启并发更新
    startTransition(() => {
      setList(new Array(10000).fill(null));
    });
  }, []);
  return (
    <>
      {list.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;

```
由于 `setList` 在 `startTransition` 的回调函数中执行（使用了并发特性），所以 `setList` 会触发并发更新。
`startTransition`，主要为了能在大量的任务下也能保持 UI 响应。这个新的 API 可以通过将特定更新标记为“过渡”来显著改善用户交互，简单来说，就是被 `startTransition` 回调包裹的 `setState` 触发的渲染被标记为不紧急渲染，这些渲染可能被其他紧急渲染所抢占。
## 二、useDeferredValue
返回一个延迟响应的值，可以让一个`state`延迟生效，只有当前没有紧急更新时，该值才会变为最新值。`useDeferredValue` 和 `startTransition` 一样，都是标记了一次非紧急更新。
从介绍上来看 `useDeferredValue` 与 `useTransition` 是否感觉很相似呢？

- 相同：`useDeferredValue` 本质上和内部实现与 `useTransition` 一样，都是标记成了延迟更新任务。
- 不同：`useTransition` 是把更新任务变成了延迟更新任务，而 `useDeferredValue` 是产生一个新的值，这个值作为延时状态。（一个用来包装方法，一个用来包装值）

所以，上面 `startTransition` 的例子，我们也可以用 `useDeferredValue` 来实现：
```javascript
import React, { useState, useEffect, useDeferredValue } from 'react';

const App: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    setList(new Array(10000).fill(null));
  }, []);
  // 使用了并发特性，开启并发更新
  const deferredList = useDeferredValue(list);
  return (
    <>
      {deferredList.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;
```

使用并行模式后：
![](https://cdn.nlark.com/yuque/0/2022/webp/2976158/1652596297785-8a8e3c54-461c-4be6-b368-3bd6c0b60b4f.webp#clientId=u2b7cec3f-d05a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uc74c3ae6&margin=%5Bobject%20Object%5D&originHeight=734&originWidth=1304&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua166cbe5-8c6e-4d3d-ace0-0740c8fcba4&title=)此时我们的任务被拆分到每一帧不同的 **task** 中，**JS脚本**执行时间大体在**5ms**左右，这样浏览器就有剩余时间执行**样式布局**和**样式绘制**，减少掉帧的可能性。
## 三、普通情况
我们可以关闭并发特性，在普通环境中运行项目：
```javascript
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    setList(new Array(10000).fill(null));
  }, []);
  return (
    <>
      {list.map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </>
  );
};

export default App;
```
执行堆栈图：
![](https://cdn.nlark.com/yuque/0/2022/webp/2976158/1652596571221-f479e0f6-8c48-4acf-b3be-69fdbdd40e7a.webp#clientId=u2b7cec3f-d05a-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7cf229f1&margin=%5Bobject%20Object%5D&originHeight=734&originWidth=1304&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uae777c58-0ed9-46cf-b21d-29889fd0f91&title=)
可以从打印的执行堆栈图看到，此时由于组件数量繁多（10000个），JS执行时间为**500ms**，也就是意味着，在没有并发特性的情况下：一次性渲染10000个标签的时候，页面会阻塞大约**0.5秒**，造成卡顿，但是如果开启了并发更新，就不会存在这样的问题。
 这种将长任务分拆到每一帧中，像蚂蚁搬家一样一次执行一小段任务的操作，被称为时间切片（time slice）

## 结论

- 并发更新的意义就是交替执行不同的任务，当预留的时间不够用时，React 将线程控制权交还给浏览器，等待下一帧时间到来，然后继续被中断的工作
- 并发模式是实现并发更新的基本前提
- 时间切片是实现并发更新的具体手段
- 上面所有的东西都是基于 fiber 架构实现的，fiber为状态更新提供了可中断的能力

