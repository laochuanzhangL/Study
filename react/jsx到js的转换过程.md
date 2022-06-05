通过babel进行转换<br />jsx:
```jsx
<div id="div">test</div>
```
js:
```javascript
React.createElement("div", {
  id: "div"
}, "test");
```


```jsx
function Com(){
  return <a>123</a>
}
<Com id="div">test</Com>

function com(){
  return <a>123</a>
}
<com id="div">test</com>
```
```jsx
function Com() {
  return /*#__PURE__*/React.createElement("a", null, "123");
}
//大写转换到js是组件

/*#__PURE__*/
React.createElement(Com, {
  id: "div"
}, "test");


function com() {
  return /*#__PURE__*/React.createElement("a", null, "123");
}
//小写转换到js是字符串 
React.createElement("com", {
  id: "div"
}, "test");
```
所以自定义的组件的名称首字母一定要大写
