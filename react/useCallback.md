
# useCallback 的作用
简单来说就是返回一个函数，只有在依赖项发生变化的时候才会更新（返回一个新的函数）。

# useCallback 的应用
```javascript
import React, { useState, useCallback } from 'react';
import Button from './Button';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <div>
        <Button
          onClickButton={() => {
            setCount3(count3 + 1);
          }}
        >
          Button3
        </Button>
      </div>
    </div>
  );
}

```
```javascript
// Button.jsx
import React from 'react';

const Button = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
};

export default React.memo(Button);
```
在案例中可以分别点击Demo中的几个按钮来查看效果：

- 点击 Button1 的时候只会更新 Button1 和 Button3 后面的内容;
- 点击 Button2 会将三个按钮后的内容都更新;
- 点击 Button3 的也是只更新 Button1 和 Button3 后面的内容。

上述效果仔细理一理就可以发现，**只有经过 useCallback 优化后的 Button2 是点击自身时才会变更，其他的两个只要父组件更新后都会变更**（这里Button1 和 Button3 其实是一样的，无非就是函数换了个地方写）。下面我们仔细看看具体的优化逻辑。<br />这里或许会注意到 Button 组件的 [React.memo](https://link.juejin.cn/?target=https%3A%2F%2Freactjs.org%2Fdocs%2Freact-api.html%23reactmemo) 这个方法，此方法内会对 props 做一个浅层比较，如果如果 props 没有发生改变，则不会重新渲染此组件。
```javascript
const [count1, setCount1] = useState(0);
// ...
const handleClickButton1 = () => {
  setCount1(count1 + 1);
};
// ...
return <Button onClickButton={handleClickButton1}>Button1</Button>
```
回头再看上面的 Button 组件都需要一个 onClickButton 的 props ，尽管组件内部有用 React.memo 来做优化，但是我们声明的 handleClickButton1 是直接定义了一个方法，这也就导致只要是父组件重新渲染（状态或者props更新）就会导致这里声明出一个新的方法，新的方法和旧的方法尽管长的一样，但是依旧是两个不同的对象，React.memo 对比后发现对象 props 改变，就重新渲染了。
```javascript
const handleClickButton2 = useCallback(() => {
  setCount2(count2 + 1);
}, [count2]);
```
上述代码我们的方法使用 useCallback 包装了一层，并且后面还传入了一个 [count2] 变量，这里 useCallback 就会根据 count2 是否发生变化，从而决定是否返回一个新的函数，函数**内部作用域**也随之更新。<br />由于我们的这个方法只依赖了 count2 这个变量，而且 count2 **只在**点击 Button2 后才会更新 handleClickButton2，所以就导致了我们点击 Button1 不重新渲染 Button2 的内容。


# Tips
```javascript
import React, { useState, useCallback } from 'react';
import Button from './Button';

export default function App() {
  const [count2, setCount2] = useState(0);

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, []);

  return (
    <Button 
      count={count2}
      onClickButton={handleClickButton2}
    >Button2</Button>
  );
}
```
我们调整了一下代码，将 useCallback 依赖的第二个参数变成了一个**空的数组**，这也就意味着这个方法没有依赖值去判断是否更新，所以函数内部的逻辑不会被执行，`count`就不会被更新。且由于 JS 的静态作用域导致此函数内 count2 永远都 0。<br />可以点击多次 Button2 查看变化，会发现 Button2 后面的值只会改变一次。因为上述函数内的 count2 永远都是 0，就意味着每次都是 0 + 1，Button 所接受的 count props，也只会从 0 变成 1且一直都将是 1，而且 handleClickButton2 也因没有依赖项不会返回新的方法，就导致 Button 组件只会因 count 改变而更新一次。

