```javascript
var fs=require('fs')//引入fs核心模块
```

# 读取文件
```javascript
fs.readFile('./txt.md',function(error,data){
  if(error){
    console.log(error)
  }
  else{
		console.log(data.toString())//data为机器码，所以需要toString()方法进行转换
  }
	
})//第一个参数是读取的文件路径
  //第二个参数是一个回调函数
  //error：失败时为错误对象
  //data：成功是为数据

```

# 写文件
```javascript
fs.writeFile('./data.md','你好，我是Node.js',function(error){
  if(error){
    console.log(error)
  }
  else{
		console.log("文件写入成功")
  }
})
//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
//写入成功：error是undefined
//写入失败：error是错误对象
```

# 读取目录
```javascript
fs.readdir(Dir,function(err,files){
	if(err){
  	console.log("Can't find dir")
  }
  else{
  	console.log(files)//是一个目录内文件名的数组
  }
})
```
 
