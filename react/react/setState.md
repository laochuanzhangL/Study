React抽象来说，就是一个公式
![](https://cdn.nlark.com/yuque/0/2022/svg/2976158/1652516904022-5f23f537-de29-42f6-b26f-33b8c1801b55.svg#clientId=u6ad6a6f0-ce41-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u534cf5c8&margin=%5Bobject%20Object%5D&originHeight=26&originWidth=128&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u60ff00aa-ab66-4b8d-8703-737812ce371&title=)
我们把最终绘制出来的**_UI_**当做一个函数**_f_**运行的结果，**_f_**就是React和我们基于React写得代码，而**_f_**的输入参数就是**_state_**。
而setState用于管理state
setState的关键点如下：

1. setState不会立刻改变React组件中state的值；
1. setState通过引发一次组件的更新过程来引发重新绘制；
1. 多次setState函数调用产生的效果会合并。
# 为什么需要setState
在React中，一个组件中要读取当前状态用是访问this.state，但是更新状态却是用this.setState，不是直接在this.state上修改，为什么呢？
```javascript
//读取状态
const count = this.state.count；

//更新状态
this.setState({count: count + 1}）；

//无意义
this.state.count = count + 1;
```


因为this.state说到底只是一个对象，单纯去修改一个对象的值是没有意义的，去驱动UI的更新才是有意义的，想想看，如果只是改了this.state这个对象，但是没有让React组件重新绘制一遍，那有什么用？你可以尝试在代码中直接修改this.state的值，会发现的确能够改变状态，但是却不会引发重新渲染。

所以，需要用一个函数去更改状态，这个函数就是setState，当setState被调用时，能驱动组件的更新过程，引发componentDidUpdate、render等一系列函数的调用。

当然，如果使用Object的setter功能，实际上也可以通过对this.state对象的直接修改来实现setState一样的功能，但是，如果React真的这么设计的话，我敢肯定，那样的API设计会更让人晕头转向，因为不管是谁，第一眼也看不出来修改一个this.state对象居然会引发重新渲染的副作用。

这么看来，React提供**setState**这个API是一个挺合理的决定。
# setState不会立刻改变React组件中state的值
因为setState并不会立刻修改this.state的值，所以下面的code可能产生很不直观的结果。
```javascript
function incrementMultiple() {
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
  this.setState({count: this.state.count + 1});
}

```

直观上来看，当上面的incrementMultiple函数被调用时，组件状态的count值被增加了3次，每次增加1，那最后count被增加了3，但是，实际上的结果只给state增加了1。
原因并不复杂，就是因为调用this.setState时，并没有立即更改this.state，所以this.setState只是在反复设置同一个值而已
currentCount就是一个快照结果，重复地给count设置同一个值，不要说重复3次，哪怕重复一万次，得到的结果也只是增加1而已。
既然this.setState不会立即修改this.state的值，那在什么时候修改this.state的值呢？这就要说一下React的更新生命周期。

# setState通过引发一次组件的更新过程来引发重新绘制
setState调用引起的React的更新生命周期函数4个函数（比修改prop引发的生命周期少一个componentWillReceiveProps函数），这4个函数依次被调用。

- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

当shouldComponentUpdate函数被调用的时候，this.state没有得到更新。
当componentWillUpdate函数被调用的时候，this.state依然没有得到更新。
直到render函数被调用的时候，this.state才得到更新。
或者，当shouldComponentUpdate函数返回false，这时候更新过程就被中断了，render函数也不会被调用了，这时候React不会放弃掉对this.state的更新的，所以虽然不调用render，依然会更新this.state。
可以简单认为，直到下一次render函数调用时（或者下一次shouldComponentUpdate返回false时）才得到更新的this.state。

# 多次setState函数调用产生的效果会合并
```javascript
function updateName() {
  this.setState({FirstName: 'Morgan'});
  this.setState({LastName: 'Cheng'});
}
```
连续调用了两次this.setState，但是只会引发一次更新生命周期，不是两次，因为React会将多个this.setState产生的修改放在一个队列里，缓一缓，攒在一起，觉得差不多了再引发一次更新过程。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2976158/1652517500171-660a8f44-2a33-4657-a574-3fbc4de5a0f5.png#clientId=u6ad6a6f0-ce41-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u970e7589&margin=%5Bobject%20Object%5D&name=image.png&originHeight=145&originWidth=230&originalType=url&ratio=1&rotation=0&showTitle=false&size=51971&status=done&style=none&taskId=u2bcc3275-1aed-4f72-8901-ace33ae4a6d&title=)
在每次更新过程中，会把积攒的setState结果合并，做一个merge的动作，所以上面的代码相当于这样。
```javascript
function updateName() {
  this.setState({FirstName: 'Morgan', LastName: 'Cheng'});
}
```
如果每一个this.setState都引发一个更新过程的话，那就太浪费了！
对于开发者而言，也可以放心多次调用this.setState，每一次只要关注当前修改的那一个字段就行，反正其他字段会合并保留，丢不掉。
所以，合并多次this.setState调用更改的状态这个API设计决定也不错。

而setState不会立马修改state的值让所有开发者都很不方便，如果有可能的话，怎么改进这个API呢？
首先setState肯定还是不能立刻更新this.state，不然React整个概念就被推翻了，所以能做的只是用一个更清楚的方式表达，让开发者不会误以为this.state会被this.setState立即更新，好像也没有特别好的改进方法。
不过，最近一个this.setState函数的隐藏功能进入了大家的视野，那就是：**原来this.setState可以接受一个函数作为参数啊！**

# 函数式的setState用法
如果传递给this.setState的参数不是一个对象而是一个函数，那游戏规则就变了。

这个函数会接收到两个参数，第一个是当前的state值，第二个是当前的props，这个函数应该返回一个对象，这个对象代表想要对this.state的更改，换句话说，之前你想给this.setState传递什么对象参数，在这种函数里就返回什么对象，不过，计算这个对象的方法有些改变，不再依赖于this.state，而是依赖于输入参数state。

比如，对于上面增加state上count的例子，可以这么写一个函数。
```javascript
function increment(state, props) {
  return {count: state.count + 1};
}
```
可以看到，同样是把状态中的count加1，但是状态的来源不是this.state，而是输入参数state。
对应incrementMultiple的函数就是这么写。
```javascript
function incrementMultiple() {
  this.setState(increment);
  this.setState(increment);
  this.setState(increment);
}
```
对于多次调用函数式setState的情况，React会保证调用每次increment时，state都已经合并了之前的状态修改结果。
简单说，加入当前this.state.count的值是0，第一次调用this.setState(increment)，传给increment的state参数是0，第二调用时，state参数是1，第三次调用是，参数是2，最终incrementMultiple的效果，真的就是让this.state.count变成了3，这个函数incrementMultiple终于实至名归。
值得一提的是，在increment函数被调用时，this.state并没有被改变，依然，要等到render函数被重新执行时（或者shouldComponentUpdate函数返回false之后）才被改变。

试着如果把两种setState的用法混用，那会有什么效果？
我们把incrementMultiple改成这样。
```javascript
function incrementMultiple() {
  this.setState(increment);
  this.setState(increment);
  this.setState({count: this.state.count + 1});
  this.setState(increment);
}

```

在几个函数式setState调用中插入一个传统式setState调用，最后得到的结果是让this.state.count增加了2，而不是增加4。
原因也很简单，因为React会依次合并所有setState产生的效果，虽然前两个函数式setState调用产生的效果是count加2，但是半路杀出一个传统式setState调用，一下子强行把积攒的效果清空，用count加1取代。
这么看来，传统**式setState的存在，会把函数式setState拖下水啊！**只要有一个传统式的setState调用，就把其他函数式setState调用给害了

# setState何时同步更新状态
在React中，**如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state。**
所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

在React的setState函数实现中，会根据一个变量**_isBatchingUpdates_**判断是直接更新this.state还是放到队列中回头再说，而_**isBatchingUpdates**_默认是false，也就表示setState会同步更新this.state，但是，有一个函数**_batchedUpdates_**，这个函数会把_**isBatchingUpdates**_修改为true，而当React在调用事件处理函数之前就会调用这个**_batchedUpdates_**，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。

所有通过react生命周期阶段调用的setstate都是非同步的，因为每次setstate都会触发更新阶段的生命周期所以按照正常react用法都是会经过batchingUpdate方法的。这是由于react有一套自定义的事件系统和生命周期流程控制，使用原生事件监听和settimeout这种方式会跳出react这个体系，所以会直接更新this.state。

在**React 18 之前**，我们只在 **React 事件处理函数** 中进行批处理更新。默认情况下，在**promise**、**setTimeout**、**原生事件处理函数**中、或**任何其它事件内**的更新都不会进行批处理：

- 在 18 之前，只有在react事件处理函数中，才会自动执行批处理，其它情况会多次更新
- 在 18 之后，任何情况都会自动执行批处理，多次更新始终合并为一次
