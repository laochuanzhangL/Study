
## document.cookie

`document.cookie`属性用于读写当前网页的 Cookie。

读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有`HTTPOnly`属性。

```javascript
document.cookie // "foo=bar;baz=bar"
```

上面代码从`document.cookie`一次性读出两个 Cookie，它们之间使用分号分隔。

`document.cookie`属性是可写的，可以通过它为当前网站添加 Cookie。

```javascript
document.cookie = 'fontSize=14';
```

