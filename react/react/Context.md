# Context
## 什么是Context
新版Context API 是在 react 16.3 版本所引入的。在这个版本之前的 context API我们称之为[旧版 context API](https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Flegacy-context.html)。它们都是为了解决同样的问题：“跨组件层级传递props的效率问题（prop-drilling）”。在没有提出 旧版 context API之前，如果我们需要跨组件层级去传递props问题，我们需要手动地层层传递。所跨层级越多，那么就越显得繁琐和低效。为了解决这个问题，react团队就提出了旧版 context API。有了这个旧版 context API，我们就只需要在父组件那里声明一下需要跨层级传递props的数据结构和类型，那么，在需要用到props的子组件再声明一次就可以通过this.context.xxx来访问到xxx这个prop。

但是，旧版 context API有一个重大的设计缺陷。那就是“传递截断”问题。所谓的“传递截断”就是指在如果在使用旧版 context API来跨层级去传递props过程中，假如承载了数据源的父组件和最终接收数据的子组件之间的某个组件通过shouldComponentUpdate来跳过自己的更新的话（shouldComponentUpdate函数里面return false），那么子组件也会被动跳过更新，因而无法拿到最新的prop值。

## 何时使用 Context
Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。举个例子，在下面的代码中，我们通过一个 “theme” 属性手动调整一个按钮组件的样式：
```javascript
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
**使用 context, 我们可以避免通过中间元素传递 props：**
```javascript
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
## 使用 Context 之前的考虑
Context 主要应用场景在于_很多_不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差。
**如果你只是想避免层层传递一些属性，**[组件组合（component composition）](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)**有时候是一个比 context 更好的解决方案。**

比如，考虑这样一个 Page 组件，它层层向下传递 user 和 avatarSize 属性，从而让深度嵌套的 Link 和 Avatar 组件可以读取到这些属性：
```javascript
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```
如果在最后只有 Avatar 组件真的需要 user 和 avatarSize，那么层层传递这两个 props 就显得非常冗余。而且一旦 Avatar 组件需要更多从来自顶层组件的 props，你还得在中间层级一个一个加上去，这将会变得非常麻烦。
一种 **无需 context** 的解决方案是[将Avatar组件自身传递下去](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#containment)，因为中间组件无需知道 user 或者 avatarSize 等 props
```javascript
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// 现在，我们有这样的组件：
<Page user={user} avatarSize={avatarSize} />
// ... 渲染出 ...
<PageLayout userLink={...} />
// ... 渲染出 ...
<NavigationBar userLink={...} />
// ... 渲染出 ...
{props.userLink}
```
这种变化下，只有最顶部的 Page 组件需要知道` Link `和 `Avatar` 组件是如何使用 `user` 和 `avatarSize` 的。
这种对组件的_控制反转_减少了在你的应用中要传递的 props 数量，这在很多场景下会使得你的代码更加干净，使你对根组件有更多的把控。但是，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，并且会强行将低层组件适应这样的形式，这可能不会是你想要的。
而且你的组件并不限制于接收单个子组件。你可能会传递多个子组件，甚至会为这些子组件（children）封装多个单独的“接口（slots）”
```javascript
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );
  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```
这种模式足够覆盖很多场景了，在这些场景下你需要将子组件和直接关联的父组件解耦。如果子组件需要在渲染前和父组件进行一些交流，你可以进一步使用 [render props](https://zh-hans.reactjs.org/docs/render-props.html)。
但是，有的时候在组件树中很多不同层级的组件需要访问同样的一批数据。Context 能让你将这些数据向组件树下所有的组件进行“广播”，所有的组件都能访问到这些数据，也能访问到后续的数据更新。使用 context 的通用的场景包括管理当前的 locale，theme，或者一些缓存数据，这比替代方案要简单的多。

## Api
### React.createContext
```javascript
const MyContext = React.createContext(defaultValue);
```
创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
**只有**当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。此默认值有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
### Context.Provider
```javascript
<MyContext.Provider value={/* 某个值 */}>
```
每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。从 Provider 到其内部 consumer 组件（包括 [.contextType](https://zh-hans.reactjs.org/docs/context.html#classcontexttype) 和 [useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)）的传播不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件跳过更新的情况下也能更新。
### Class.contextType
```javascript
class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* 基于 MyContext 组件的值进行渲染 */
  }
}
MyClass.contextType = MyContext;
```
挂载在 class 上的 contextType 属性可以赋值为由 [React.createContext()](https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext) 创建的 Context 对象。此属性可以让你使用 this.context 来获取最近 Context 上的值。你可以在任何生命周期中访问到它，包括 render 函数中。
### Context.Consumer
```javascript
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```
这种方法需要一个[函数作为子元素（function as a child）](https://zh-hans.reactjs.org/docs/render-props.html#using-props-other-than-render)。这个函数接收当前的 context 值，并返回一个 React 节点。传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。
### useContext
```javascript
const value = useContext(MyContext);
```
接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider> `的 `value prop `决定。
当组件上层最近的 `<MyContext.Provider>` 更新时，该 Hook 会触发重渲染，并使用最新传递给 `MyContext provider` 的 `context value` 值。即使祖先使用 [React.memo](https://zh-hans.reactjs.org/docs/react-api.html#reactmemo) 或 [shouldComponentUpdate](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)，也会在组件本身使用 `useContext`时重新渲染。
**useContext 的参数必须是 **_**context 对象本身**_

- **正确：** useContext(MyContext)
- **错误：** useContext(MyContext.Consumer)
- **错误：** useContext(MyContext.Provider)
## 怎么用？
使用Context API遵循下面三个步骤：

1. 首先，调用const MyContext = React.createContext()去创建一个context 对象实例；
1. 其次，使用<MyContext.Provider value={someValue}>组件去声明你想要传递的任何数据；
1. 最后，通过render props范式<MyContext.Consumer>{(someValue)=> ....}</MyContext.Consumer>或者hook的写法const theContextValue = useContext(MyContext)来把想要读取的数据取回来再进行消费。

在新版Context API的实现里面，只要某个子组件订阅了context对象实例所承载的数据，只要这些数据发生了改变，不管该子组件的上层组件做了什么，这个子组件都会得到更新。

### Context API + useReducer
通过将Context API的跨任何组件层级运输数据的能力和useReducer组件状态创建和更新能力结合起来，最终把它们提升到组件树的根组件，我们就可以实现“Context API版的redux范式。
在根组件上（假设是<App>），使用useReducer来创建状态：
```javascript
// App.js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App(){
    const [state,dispatch] = useReducer(reducer,initialState)

    return (......)
}
```
在根组件上，使用Context API来创建context对象实例，并使用它的Provider将状态和改变状态的方法（这里是dispatch）传递下去：
```javascript
// App.js
const initialState = {count: 0};
export const MyContext = React.createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App(){
    const [state,dispatch] = React.useReducer(reducer,initialState)

    return (
        <MyContext.Provider value={{state,dispatch}}>{.....}</MyContext.Provider>
    )
}
```
最后是在需要消费的子组件里面导入context实例对象，使用useContext()来将状态和更新状态的方法取回来：
```javascript
// ChildComponent.js
import {MyContext} from './App'


function ChildComponent(){
    const {state,dispatch} = useContext(MyContext)
    
    return (
        <div>
         current count is {state.count}
         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
         <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <div>
    )
}


```
