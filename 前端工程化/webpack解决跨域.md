
```javascript
//server.js
let express=require('express')

let app=express();
app.get('/user',(req,res)=>{
  res.json({name:'lcz'})
})

app.listen(3000);

//index.js
let xhr=new XMLHttpRequest();
//访问http://localhost:8080  webpack-dev-server的服务
xhr.open('GET','/api/user',true)

xhr.onload=function(){
  console.log(xhr.response)
}

xhr.send()
```

# 配置代理
```javascript
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
      '/api2': {
        .....
      }
    }
  }
};
```

###  '/api'
捕获API的标志，如果API中有这个字符串，那么就开始匹配代理，<br />比如API请求/api/users, 会被代理到请求 http://localhost:3000/api/user

### target
代理的API地址，就是需要跨域的API地址。<br />地址可以是域名,如：http://www.baidu.com<br />也可以是IP地址：http://127.0.0.1:3000<br />如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。

### pathRewrite
路径重写，也就是说会修改最终请求的API路径。<br />比如访问的API路径：/api/users,<br />设置pathRewrite: {'^/api' : ''},后，<br />最终代理访问的路径: http://localhost:3000/users，<br />这个参数的目的是给代理命名后，在访问时把命名删除掉。

###  changeOrigin
这个参数可以让target参数是域名。

### secure
secure: false,不检查安全问题。<br />设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器


# 使用模拟数据
```javascript
//index.js
let xhr=new XMLHttpRequest();
xhr.open('GET','/user',true)

xhr.onload=function(){
  console.log(xhr.response)
}

//webpack.config.js
xhr.send()
before(app) {
  app.get("/user", (req, res) => {
    res.json({ name: "messi" })
  })
},

```
此时前端模拟了数据 


# 在服务端启动webpack
需要使用外部插件 webpack-dev-middleware

```javascript
//sever.js
let express=require('express')
let webpack=require('webpack')
let app=express();

//中间件
let middle=require('webpack-dev-middleware')

let config=require('./webpack.common.js')

let compiler=webpack(config)

app.use(middle(compiler))

app.get('/user',(req,res)=>{
  res.json({name:'lcz'})
})

app.listen(3000);
```
可以通过[http://localhost:3000/](http://localhost:3000/)查看webpack打包后的页面 也能通过[http://localhost:3000/user](http://localhost:3000/user)查看接口数据
