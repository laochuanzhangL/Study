
# TS文件编译
在控制台输入 tsc xxx.ts<br />就会输出一个 xxx.js文件<br />自动编译: tsc xxx.ts -w输入后xxx后续会自动编译，但是此类只编译一个xxx文件

自动编译某文件夹所有ts文件的方法：<br />在该文件夹添加一个tsconfig.json  文件内部为空对象<br />然后在控制台输入 tsc -w 即可自动编译该文件夹所有ts文件

# tsconfig.json
是ts编译器的配置文件
```typescript
{

    "include":[

    ],
    /*
    用来指定哪些ts文件需要被编译
    路径：  ** 表示任意目录
            * 表示任意文件
    */
    "exclude": [

    ]
    /*
    不需要用来编译的文件
    路径：  ** 表示任意目录
            * 表示任意文件
    默认值["node_modules","bower_components","jspm_packages"]
    一般不用设置
    */
    "extends": ""
    /*
    用来继承其他地方的config文件
    */
    "files": []
    //指定所要编译的文件
    //include指定的文件夹而files指定具体文件

    //  compilerOptions编译器的选项
    "compilerOptions": {

        //target用来指定所编译成的js的版本
        "target": "ES6",

        //module 指定要使用的模块化的规范
        "module": "commonjs",

        //lib用来指定我们所使用的库
        //通常不用改，为空时即为所有库都不使用
        //默认值为浏览器运行环境所需
        "lib": [],

        //用来指定编译后文件所存放的目录
        "outDir": "./dist",

        //可以将代码合并为一个文件
        "outFile": "./dist/app.js",
        //编译后的代码都在app.js文件中
        //默认的时所有全局作用域重点代码，模块化的代码无法合并

        //是否对js文件进行编译，默认值为false
        "allowJs": false,
        //是否检查js代码是否符合ts代码规范，默认值为false
        "checkJs": false,

        //是否移除注释,默认值为false
        "removeComments": false,

        //不生成编译后的文件,默认值为false
        //可以用来检查代码是否符合ts代码规范
        "noEmit": false,

        //当有错误时不生成编译的文件,默认值为false
        "noEmitOnError": false,

        //用来开启生成的js文件的严格模式，默认为false
        "alwaysStrict": false,

        //是否允许隐式的any类型,默认值为false
        "noImplicitAny": false,

        //不允许不明确类型的this,默认值为false
        "noImplicitThis": false,

        //严格的检查空值,默认值为false
        "strictNullChecks": false
      	
      	//上述所有严格检查的总开关,默认值为false
      	"strict":false
      	
    }
}
```
