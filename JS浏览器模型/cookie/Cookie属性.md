

## name

Cookie的名称，Cookie一旦创建，名称便不可更改


## value

Cookie的值，如果值为Unicode字符，需要为字符编码。如果为二进制数据，则需要使用BASE64编码


## Expires，Max-Age

`Expires`属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。

`Max-Age`属性指定从现在开始 Cookie 存在的秒数，比如`60 * 60 * 24 * 365`（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。

如果同时指定了`Expires`和`Max-Age`，那么`Max-Age`的值将优先生效。

如果`Set-Cookie`字段没有指定`Expires`或`Max-Age`属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。


## Domain

`Domain`属性指定 Cookie 属于哪个域名，以后浏览器向服务器发送 HTTP 请求时，通过这个属性判断是否要附带某个 Cookie。

服务器设定 Cookie 时，如果没有指定 Domain 属性，浏览器会默认将其设为浏览器的当前域名。如果当前域名是一个 IP 地址，则不得设置 Domain 属性。

Domain为可以访问该Cookie的域名。如果设置为“.google.com”，则所有以"google.com”结尾的域名都可以访问该Cookie。注意第一个字符必须为“.”


## path

Cookie的使用路径。如果设置为“/sessionWeb/”，则只有contextPath为“/sessionWeb”的程序可以访问该Cookie。如果设置为“/”，则本域名下contextPath都可以访问该Cookie。注意最后一个字符必须为“/”。


## Secure

`Secure`属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的`Secure`属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。


## HttpOnly

`HttpOnly`属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是`document.cookie`属性、`XMLHttpRequest`对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。


## SameSite

Chrome 51 开始，浏览器的 Cookie 新增加了一个`SameSite`属性，用来防止 CSRF 攻击和用户追踪。

Cookie 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 Cookie 的 HTTP 请求，这就是 CSRF 攻击。举例来说，用户登陆了银行网站`your-bank.com`，银行服务器发来了一个 Cookie。

```javascript
<form action="your-bank.com/transfer" method="POST">
  ...
</form>
```

用户一旦被诱骗发送这个表单，银行网站就会收到带有正确 Cookie 的请求

为了防止这种攻击，官网的表单一般都带有一个随机 token，官网服务器通过验证这个随机 token，确认是否为真实请求。

```javascript
<form action="your-bank.com/transfer" method="POST">
  <input type="hidden" name="token" value="dad3weg34">
  ...
</form>
```

这种第三方网站引导而附带发送的 Cookie，就称为第三方 Cookie。

Cookie 的`SameSite`属性用来限制第三方 Cookie，从而减少安全风险。它可以设置三个值。

>  
> - Strict
> - Lax
> - None
> 
 


**1）Strict**

`Strict`最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。

```
Set-Cookie: CookieName=CookieValue; SameSite=Strict;
```

这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。

**（2）Lax**

`Lax`规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。

```
Set-Cookie: CookieName=CookieValue; SameSite=Lax;
```

导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。详见下表。

| 请求类型 | 示例 | 正常情况 | Lax |
| --- | --- | --- | --- |
| 链接 | `<a href="..."></a>` | 发送 Cookie | 发送 Cookie |
| 预加载 | `<link rel="prerender" href="..."/>` | 发送 Cookie | 发送 Cookie |
| GET 表单 | `<form method="GET" action="...">` | 发送 Cookie | 发送 Cookie |
| POST 表单 | `<form method="POST" action="...">` | 发送 Cookie | 不发送 |
| iframe | `<iframe src="..."></iframe>` | 发送 Cookie | 不发送 |
| AJAX | `$.get("...")` | 发送 Cookie | 不发送 |
| Image | `<img src="...">` | 发送 Cookie | 不发送 |


设置了`Strict`或`Lax`以后，基本就杜绝了 CSRF 攻击。当然，前提是用户浏览器支持 SameSite 属性。

**3）None**

Chrome 计划将`Lax`变为默认设置。这时，网站可以选择显式关闭`SameSite`属性，将其设为`None`。不过，前提是必须同时设置`Secure`属性（Cookie 只能通过 HTTPS 协议发送），否则无效。

下面的设置无效。

```
Set-Cookie: widget_session=abc123; SameSite=None
```

下面的设置有效。

```
Set-Cookie: widget_session=abc123; SameSite=None; Secure
```

