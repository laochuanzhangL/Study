react的核心可以用`ui=fn(state)`来表示，更详细可以用
```css
const state = reconcile(update);
const UI = commit(state);
```
上面的fn可以分为如下一个部分：

- Scheduler（调度器）： 排序优先级，让优先级高的任务先进行reconcile
- Reconciler（协调器）： 找出哪些节点发生了改变，并打上不同的Flags（旧版本react叫Tag）
- Renderer（渲染器）： 将Reconciler中打好标签的节点渲染到视图上

![image.png](./assets/1653365081117-be385e5f-4662-49ce-840e-96966ef121c3.png)
![image.png](./assets/1653365132127-3b086926-2751-4581-81f8-38821a4dd1a5.png)
