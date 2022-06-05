useReducer是React提供的一个高级Hook，它不像useEffect、useState、useRef等必须hook一样，没有它我们也可以正常完成需求的开发，但useReducer可以使我们的代码具有更好的可读性、可维护性、可预测性。

# useReducer基础概念

### 什么是reducer
reducer的概念是伴随着Redux的出现逐渐在JavaScript中流行起来。但我们并不需要学习Redux去了解Reducer。简单来说 reducer是一个函数(state, action) => newState：接收当前应用的state和触发的动作action，计算并返回最新的state。下面是一段伪代码：
```javascript
    // 举个栗子 计算器reducer，根据state（当前状态）和action（触发的动作加、减）参数，计算返回newState
    function countReducer(state, action) {
        switch(action.type) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default: 
                return state;
        }
    }

```
上面例子：state是一个number类型的数值，reducer根据action的类型（加、减）对应的修改state，并返回最终的state。为了刚接触到reducer概念的小伙伴更容易理解,可以将state改为count，但请始终牢记count仍然是**state**。
```javascript
    function countReducer(count, action) {
        switch(action.type) {
            case 'add':
                return count + 1;
            case 'sub':
                return count - 1;
            default: 
                return count;
        }
    }
```

### reducer 的幂等性
从上面的示例可以看到reducer本质是一个纯函数，没有任何UI和副作用。这意味着相同的输入（state、action），reducer函数无论执行多少遍始终会返回相同的输出（newState）。因此通过reducer函数很容易推测state的变化，并且也更加容易单元测试。
```javascript
    expect(countReducer(1, { type: 'add' })).equal(2); // 成功
    expect(countReducer(1, { type: 'add' })).equal(2); // 成功
    expect(countReducer(1, { type: 'sub' })).equal(0); // 成功
```
