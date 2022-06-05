ReactElement通过createElement创建，调用该方法需要传入三个参数：

- type
- config
- children

type指代这个ReactElement的类型

- 字符串比如div，p代表原生DOM，称为HostComponent
- Class类型是我们继承自Component或者PureComponent的组件，称为ClassComponent
- 方法就是functional Component
- 原生提供的Fragment、AsyncMode等是Symbol，会被特殊处理
- TODO: 是否有其他的

从源码可以看出虽然创建的时候都是通过config传入的，但是key和ref不会跟其他config中的变量一起被处理，而是单独作为变量出现在ReactElement上。<br />在最后创建ReactElement我们看到了这么一个变量$$typeof，这是个啥呢，在这里可以看出来他是一个常量：REACT_ELEMENT_TYPE，但有一个特例：ReactDOM.createPortal的时候是REACT_PORTAL_TYPE，不过他不是通过createElement创建的，所以他应该也不属于ReactElement
```jsx
export function createElement(type, config, children) {
  // 处理参数

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}

const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };

  return element
}
```
