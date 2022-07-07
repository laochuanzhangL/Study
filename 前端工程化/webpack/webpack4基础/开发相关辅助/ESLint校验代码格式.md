需要 
```c
npm install eslint --save-dev
npm install eslint-loader --save-dev

# 以下是用到的额外的需要安装的eslint的解释器、校验规则等
npm i -D babel-eslint standard
```

```c
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
          fix: true
        }
      },
    ],
  },
  // ...
}
```
eslint-loader必须要放在最后 保证其最先使用

添加`.eslintrc.js`配置文件其中包含检验的规则
`.eslintignore`配置文件包括要忽略的配置规则
  
