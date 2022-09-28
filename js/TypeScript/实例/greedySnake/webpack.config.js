//引入一个包
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//包含所有webpack的配置信息
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //打包文件所在位置
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后文件的名称
    filename: "bundle.js",

    //配置打包的环境
    environment: {
      //arrowFunction: false, //告诉webpack不要使用箭头函数
    },
  },

  //指定webpack打包时要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/, //所有以ts结尾的文件
        //是用ts-loader
        use: [
          //配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],

        //从后往前执行，后面的先执行
        //要排除的文件
        exclude: /node-modules/,
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //引进postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  mode: "production",
  //配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html", //网页的模板
    }),
  ],

  //用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"], //凡是这个后缀名结尾的都可以作为模块
  },
};
