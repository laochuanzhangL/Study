需要使用 sass-loader style-loader  node-sass
```c
const path = require("path")
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module:{
    rules:[
        {
            test:/\.(sc|sa|c)ss$/,//匹配scss,sass css
            use:['style-loader','css-loader','sass-loader']
        }
    ]
  }
}

```
