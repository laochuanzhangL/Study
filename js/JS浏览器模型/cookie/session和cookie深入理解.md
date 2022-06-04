为什么需要session和cookie呢？<br />源于web系统的发展和变迁

web1.0：强调资源的共享<br />http协议是一种无状态的协议<br />web2.0： 强调的是交互<br />教务意味着是有多步操作，请求和请求直接是有依赖存在的<br />**引入了session和cookie机制是来实现状态的记录**


# session和cookie的特征：

- session和cookie都是由服务器生成的，都是用来存储特定的值（键值对应）
- session是储存在服务器的，而cookie会返回给客户端。

一般来说，sessionID会以类似于cookie的方式返回给客户端。<br />sessionID是服务i起用来识别、操作存储session值得对象的。<br />一般来说，在服务器端，session的存储方式有文件方式，数据库方式，	sessionID就是用来识别这个文件的（文件名相关）、识别数据库的某一条记录。<br />sessionID并不是session值

- 客户端（浏览器）在发送请求的时候，会自动将存活、可用的cookie封装在请求头中和请求一起发送
- cookie和session都是有生命周期的

cookie的生命周期，受两个因素影响<br />cookie自身的存活时间：是服务器生成cookie时去设定的。<br />客户端是否保留了cookie,客户端是否保留只对客户端自身有影响，对其他封包工具没有影响<br />session的生命周期，也受两个因素影响<br />服务器对于session对象的保存的最大时间的设置<br />客户端进程是否关闭。客户端进程关闭只对客户端自身有影响

- cookie和session是有作用域的

