需要使用两个loader:css-loader  style-loader
```c
  module:{
    rules:[
        {
            test:/\.css$/,//如果文件名为.css的后缀就是用下面use的模块
            use:['style-loader','css-loader']//使用顺序 从后往前
        }
    ]
  }
```
