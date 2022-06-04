Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置document.domain共享 Cookie。

举例来说，A 网页的网址是http://w1.example.com/a.html，B 网页的网址是http://w2.example.com/b.html，那么只要设置相同的document.domain，两个网页就可以共享 Cookie。因为浏览器通过document.domain属性来检查是否同源。
```javascript
// 两个网页都需要设置
document.domain = 'example.com';
```
注意，A 和 B 两个网页都需要设置document.domain属性，才能达到同源的目的。因为设置document.domain的同时，会把端口重置为null，因此如果只设置一个网页的document.domain，会导致两个网址的端口不同，还是达不到同源的目的。

另外，服务器也可以在设置 Cookie 的时候，指定 Cookie 的所属域名为一级域名，比如example.com。
```javascript
Set-Cookie: key=value; domain=example.com; path=/ 
```
这样的话，二级域名和三级域名不用做任何设置，都可以读取这个 Cookie。
