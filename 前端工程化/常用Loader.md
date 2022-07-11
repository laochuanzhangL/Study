webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

### [文件](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e6%96%87%e4%bb%b6)

- raw-loader 加载文件原始内容（utf-8）
- val-loader 将代码作为模块执行，并将 exports 转为 JS 代码
- url-loader 像 file loader 一样工作，但如果文件小于限制，可以返回 [data URL](https://tools.ietf.org/html/rfc2397)
- file-loader 将文件发送到输出文件夹，并返回（相对）URL

### [JSON](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=json)

- json-loader 加载 [JSON](http://json.org/) 文件（默认包含）
- json5-loader 加载和转译 [JSON 5](https://json5.org/) 文件
- cson-loader 加载和转译 [CSON](https://github.com/bevry/cson#what-is-cson) 文件


### [转换编译(Transpiling)](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e8%bd%ac%e6%8d%a2%e7%bc%96%e8%af%91transpiling)

- script-loader 在全局上下文中执行一次 JavaScript 文件（如在 script 标签），不需要解析
- babel-loader 加载 ES2015+ 代码，然后使用 [Babel](https://babeljs.io/) 转译为 ES5
- buble-loader 使用 [Bublé](https://buble.surge.sh/guide/) 加载 ES2015+ 代码，并且将代码转译为 ES5
- traceur-loader 加载 ES2015+ 代码，然后使用 [Traceur](https://github.com/google/traceur-compiler#readme) 转译为 ES5
- [ts-loader](https://github.com/TypeStrong/ts-loader) 或 [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader) 像 JavaScript 一样加载 [TypeScript](https://www.typescriptlang.org/) 2.0+
- coffee-loader 像 JavaScript 一样加载 [CoffeeScript](http://coffeescript.org/)


### [模板(Templating)](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e6%a8%a1%e6%9d%bftemplating)

- html-loader 导出 HTML 为字符串，需要引用静态资源
- pug-loader 加载 Pug 模板并返回一个函数
- jade-loader 加载 Jade 模板并返回一个函数
- markdown-loader 将 Markdown 转译为 HTML
- [react-markdown-loader](https://github.com/javiercf/react-markdown-loader) 使用 markdown-parse parser(解析器) 将 Markdown 编译为 React 组件
- posthtml-loader 使用 [PostHTML](https://github.com/posthtml/posthtml) 加载并转换 HTML 文件
- handlebars-loader 将 Handlebars 转移为 HTML
- [markup-inline-loader](https://github.com/asnowwolf/markup-inline-loader) 将内联的 SVG/MathML 文件转换为 HTML。在应用于图标字体，或将 CSS 动画应用于 SVG 时非常有用。


### [样式](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e6%a0%b7%e5%bc%8f)

- style-loader 将模块的导出作为样式添加到 DOM 中
- css-loader 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
- less-loader 加载和转译 LESS 文件
- sass-loader 加载和转译 SASS/SCSS 文件
- postcss-loader 使用 [PostCSS](http://postcss.org/) 加载和转译 CSS/SSS 文件
- stylus-loader 加载和转译 Stylus 文件


### [清理和测试(Linting && Testing)](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e6%b8%85%e7%90%86%e5%92%8c%e6%b5%8b%e8%af%95linting-ampamp-testing)

- mocha-loader 使用 [mocha](https://mochajs.org/) 测试（浏览器/NodeJS）
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader) PreLoader，使用 [ESLint](https://eslint.org/) 清理代码
- jshint-loader PreLoader，使用 [JSHint](http://jshint.com/about/) 清理代码
- jscs-loader PreLoader，使用 [JSCS](http://jscs.info/) 检查代码样式
- coverjs-loader PreLoader，使用 [CoverJS](https://github.com/arian/CoverJS) 确定测试覆盖率

### [框架(Frameworks)](https://malun666.github.io/aicoder_vip_doc/#/pages/vip_2webpack?id=%e6%a1%86%e6%9e%b6frameworks)

- vue-loader 加载和转译 [Vue 组件](https://vuejs.org/v2/guide/components.html)
- polymer-loader 使用选择预处理器(preprocessor)处理，并且 require() 类似一等模块(first-class)的 Web 组件
- angular2-template-loader 加载和转译 [Angular](https://angular.io/) 组件
- Awesome 更多第三方 loader，查看 [awesome-webpack 列表](https://github.com/webpack-contrib/awesome-webpack#loaders)。
