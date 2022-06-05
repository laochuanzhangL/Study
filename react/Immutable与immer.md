
# Immutable ？
Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。主要原理是采用了 Persistent Data Structure（持久化数据结构)，就是当每次修改后我们都会得到一个新的版本，且旧版本可以完好保留，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），就是对于本次操作没有修改的部分，我们可以直接把相应的旧的节点拷贝过去，这其实就是结构共享。

# Immer

## Immer 是什么？
Immer 是一个不可变数据的 Javascript 库，让你更方便的处理不可变数据。<br />与 immutable-js 最大的不同，immer 是使用原生数据结构的 API 而不是像 immutable-js 那样转化为内置对象之后使用内置的 API，举个简单例子：
```javascript
const produce = require('immer')
const state = {
  done: false,
  val: 'string',
}
// 所有具有副作用的操作，都可以放入 produce 函数的第二个参数内进行
// 最终返回的结果并不影响原来的数据
const newState = produce(state, (draft) => {
  draft.done = true
})
console.log(state.done)    // false
console.log(newState.done) // true
```
通过上面的例子我们能发现，所有具有副作用的逻辑都可以放进 produce 的第二个参数的函数内部进行处理。在这个函数内部对原来的数据进行任何操作，都不会对原对象产生任何影响。<br />这里我们可以在函数中进行任何操作，例如 push splice 等非 immutable 的 API，最终结果与原来的数据互不影响。<br />Immer 最大的好处就在这里，我们的学习没有太多成本，因为它的 API 很少，无非就是把我们之前的操作放置到 produce 函数的第二参数函数中去执行。
